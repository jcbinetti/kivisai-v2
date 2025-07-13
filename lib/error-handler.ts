import { NextResponse } from "next/server"

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode = 500,
    public code?: string,
  ) {
    super(message)
    this.name = "AppError"
  }
}

export function handleApiError(error: unknown): NextResponse {
  console.error("API Error:", error)

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
      },
      { status: error.statusCode },
    )
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        error: "Ein unerwarteter Fehler ist aufgetreten",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }

  return NextResponse.json(
    {
      error: "Unbekannter Fehler",
      timestamp: new Date().toISOString(),
    },
    { status: 500 },
  )
}

export function validateEnvironmentVariables() {
  const required = ["BREVO_API_KEY", "BREVO_TEAM_EMAIL", "BREVO_SENDER_EMAIL"]

  const missing = required.filter((key) => !process.env[key])

  if (missing.length > 0) {
    throw new AppError(`Missing required environment variables: ${missing.join(", ")}`, 500, "ENV_MISSING")
  }
}
