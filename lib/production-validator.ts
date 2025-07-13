// Production Readiness Validator
export class ProductionValidator {
  static async validateEnvironment(): Promise<{
    ready: boolean
    missing: string[]
    warnings: string[]
  }> {
    const missing: string[] = []
    const warnings: string[] = []

    // Critical Environment Variables
    const critical = [
      "BREVO_API_KEY",
      "BREVO_CONTACT_LIST_ID",
      "BREVO_TEAM_EMAIL",
      "BREVO_SENDER_EMAIL",
      "NEXT_PUBLIC_SITE_URL",
    ]

    critical.forEach((key) => {
      if (!process.env[key]) {
        missing.push(key)
      }
    })

    // Optional but recommended
    const recommended = ["NEXT_PUBLIC_GA_ID", "SANITY_API_TOKEN", "GC_USERNAME"]

    recommended.forEach((key) => {
      if (!process.env[key]) {
        warnings.push(`${key} not set - feature will be limited`)
      }
    })

    return {
      ready: missing.length === 0,
      missing,
      warnings,
    }
  }

  static async validateAPIs(): Promise<boolean> {
    try {
      // Test Brevo API
      const brevoResponse = await fetch("https://api.brevo.com/v3/account", {
        headers: {
          "api-key": process.env.BREVO_API_KEY || "",
        },
      })

      return brevoResponse.ok
    } catch (error) {
      console.error("API validation failed:", error)
      return false
    }
  }
}
