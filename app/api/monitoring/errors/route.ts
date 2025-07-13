import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"

interface ErrorReport {
  message: string
  stack?: string
  url: string
  userAgent: string
  timestamp: string
  userId?: string
  sessionId?: string
  additionalInfo?: Record<string, any>
}

// In production, you'd typically send this to a service like Sentry
async function logError(errorReport: ErrorReport) {
  // For now, just console.log - replace with actual error tracking service
  console.error("Client Error Report:", {
    timestamp: errorReport.timestamp,
    message: errorReport.message,
    url: errorReport.url,
    userAgent: errorReport.userAgent,
    stack: errorReport.stack?.substring(0, 500), // Truncate stack trace
    userId: errorReport.userId,
    sessionId: errorReport.sessionId,
    additionalInfo: errorReport.additionalInfo,
  })

  // Example: Send to Sentry
  // if (process.env.SENTRY_DSN) {
  //   Sentry.captureException(new Error(errorReport.message), {
  //     tags: {
  //       source: 'client'
  //     },
  //     extra: errorReport
  //   })
  // }

  return { success: true, errorId: `err_${Date.now()}` }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - more lenient for error reporting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip, 20)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Too many error reports" }, { status: 429 })
    }

    const body = await request.json()
    const { message, stack, url, userId, sessionId, additionalInfo } = body

    // Basic validation
    if (!message || !url) {
      return NextResponse.json({ error: "Message and URL are required" }, { status: 400 })
    }

    // Create error report
    const errorReport: ErrorReport = {
      message: String(message).substring(0, 1000), // Limit message length
      stack: stack ? String(stack).substring(0, 5000) : undefined, // Limit stack trace
      url: String(url).substring(0, 500), // Limit URL length
      userAgent: request.headers.get("user-agent") || "unknown",
      timestamp: new Date().toISOString(),
      userId: userId ? String(userId) : undefined,
      sessionId: sessionId ? String(sessionId) : undefined,
      additionalInfo: additionalInfo || {},
    }

    // Log the error
    const result = await logError(errorReport)

    return NextResponse.json({
      success: true,
      errorId: result.errorId,
      message: "Error report received",
    })
  } catch (error) {
    console.error("Error Monitoring API Error:", error)

    // Don't return detailed error info to prevent information leakage
    return NextResponse.json({ error: "Failed to process error report" }, { status: 500 })
  }
}

// Get error statistics (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // This would typically query your error tracking database
    // For now, return mock statistics

    const stats = {
      totalErrors: 45,
      last24Hours: 8,
      last7Days: 23,
      errorTypes: {
        "JavaScript Error": 18,
        "Network Error": 12,
        "API Error": 8,
        "Validation Error": 5,
        Other: 2,
      },
      topPages: [
        { url: "/evalkit", errors: 12 },
        { url: "/kontakt", errors: 8 },
        { url: "/leistungen", errors: 6 },
        { url: "/", errors: 4 },
      ],
      browsers: {
        Chrome: 28,
        Safari: 10,
        Firefox: 5,
        Edge: 2,
      },
      resolved: 38,
      unresolved: 7,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error Stats API Error:", error)

    return NextResponse.json({ error: "Failed to get error statistics" }, { status: 500 })
  }
}

// Mark error as resolved (for admin use)
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { errorId, status } = body

    if (!errorId) {
      return NextResponse.json({ error: "Error ID is required" }, { status: 400 })
    }

    // In a real implementation, you'd update the error status in your database
    console.log(`Error ${errorId} marked as ${status || "resolved"}`)

    return NextResponse.json({
      success: true,
      message: `Error ${errorId} updated`,
    })
  } catch (error) {
    console.error("Error Update API Error:", error)

    return NextResponse.json({ error: "Failed to update error status" }, { status: 500 })
  }
}
