#!/usr/bin/env tsx

/**
 * Post-Deployment Integration Test für KIVISAI Website
 * Testet alle Integrationen nach erfolgreichem Deployment
 */

import { config } from "../lib/config"

interface IntegrationTestResult {
  name: string
  status: "✅ SUCCESS" | "❌ FAILED" | "⚠️ WARNING"
  message: string
  details?: any
  url?: string
  responseTime?: number
}

class IntegrationTester {
  private results: IntegrationTestResult[] = []
  private baseUrl: string

  constructor(baseUrl = "https://www.kivisai.com") {
    this.baseUrl = baseUrl
  }

  private async measureTime<T>(fn: () => Promise<T>): Promise<{ result: T; time: number }> {
    const start = Date.now()
    const result = await fn()
    const time = Date.now() - start
    return { result, time }
  }

  // 1. Website Erreichbarkeit
  async testWebsiteAvailability() {
    console.log("🌐 Testing Website Availability...")

    try {
      const { result: response, time } = await this.measureTime(() => fetch(this.baseUrl, { method: "HEAD" }))

      if (response.ok) {
        this.results.push({
          name: "Website Availability",
          status: "✅ SUCCESS",
          message: `Website is online and responding`,
          url: this.baseUrl,
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Website Availability",
          status: "❌ FAILED",
          message: `Website returned status ${response.status}`,
          url: this.baseUrl,
        })
      }
    } catch (error) {
      this.results.push({
        name: "Website Availability",
        status: "❌ FAILED",
        message: `Website is not reachable: ${error}`,
        url: this.baseUrl,
      })
    }
  }

  // 2. Brevo Email Integration
  async testBrevoIntegration() {
    console.log("📧 Testing Brevo Email Integration...")

    try {
      const { result: response, time } = await this.measureTime(() =>
        fetch(`${this.baseUrl}/api/contact`, {
          method: "GET",
        }),
      )

      const data = await response.json()

      if (response.ok && data.brevoConfigured) {
        this.results.push({
          name: "Brevo Email Integration",
          status: "✅ SUCCESS",
          message: "Brevo API is configured and accessible",
          details: data,
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Brevo Email Integration",
          status: "❌ FAILED",
          message: "Brevo API not properly configured",
          details: data,
        })
      }
    } catch (error) {
      this.results.push({
        name: "Brevo Email Integration",
        status: "❌ FAILED",
        message: `Brevo test failed: ${error}`,
      })
    }
  }

  // 3. Graph Commons Integration
  async testGraphCommonsIntegration() {
    console.log("🕸️ Testing Graph Commons Integration...")

    try {
      const { result: response, time } = await this.measureTime(() =>
        fetch(`${this.baseUrl}/api/graph-commons`, {
          method: "GET",
        }),
      )

      const data = await response.json()

      if (response.ok && data.success) {
        this.results.push({
          name: "Graph Commons Integration",
          status: "✅ SUCCESS",
          message: `Graph loaded successfully with ${data.meta.nodeCount} nodes`,
          details: {
            nodeCount: data.meta.nodeCount,
            edgeCount: data.meta.edgeCount,
            isAuthenticated: data.meta.isAuthenticated,
          },
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Graph Commons Integration",
          status: "❌ FAILED",
          message: data.error || "Graph Commons API failed",
          details: data,
        })
      }
    } catch (error) {
      this.results.push({
        name: "Graph Commons Integration",
        status: "❌ FAILED",
        message: `Graph Commons test failed: ${error}`,
      })
    }
  }

  // 4. Sanity CMS Integration
  async testSanityCMSIntegration() {
    console.log("📝 Testing Sanity CMS Integration...")

    try {
      const { result: response, time } = await this.measureTime(() =>
        fetch(`${this.baseUrl}/api/articles`, {
          method: "GET",
        }),
      )

      if (response.ok) {
        const data = await response.json()
        this.results.push({
          name: "Sanity CMS Integration",
          status: "✅ SUCCESS",
          message: `Sanity CMS accessible, ${data.length || 0} articles found`,
          details: { articlesCount: data.length || 0 },
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Sanity CMS Integration",
          status: "⚠️ WARNING",
          message: "Sanity CMS endpoint not responding as expected",
          details: { status: response.status },
        })
      }
    } catch (error) {
      this.results.push({
        name: "Sanity CMS Integration",
        status: "❌ FAILED",
        message: `Sanity CMS test failed: ${error}`,
      })
    }
  }

  // 5. OpenAI Integration
  async testOpenAIIntegration() {
    console.log("🤖 Testing OpenAI Integration...")

    try {
      const { result: response, time } = await this.measureTime(() =>
        fetch(`${this.baseUrl}/api/ai-chat`, {
          method: "GET",
        }),
      )

      const data = await response.json()

      if (response.ok && data.status === "healthy") {
        this.results.push({
          name: "OpenAI Integration",
          status: "✅ SUCCESS",
          message: "OpenAI API endpoint is healthy",
          details: data,
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "OpenAI Integration",
          status: "❌ FAILED",
          message: "OpenAI API endpoint not healthy",
          details: data,
        })
      }
    } catch (error) {
      this.results.push({
        name: "OpenAI Integration",
        status: "❌ FAILED",
        message: `OpenAI test failed: ${error}`,
      })
    }
  }

  // 6. Cal.com Integration
  async testCalComIntegration() {
    console.log("📅 Testing Cal.com Integration...")

    try {
      const calUrl = config.cal.url
      const { result: response, time } = await this.measureTime(() => fetch(calUrl, { method: "HEAD" }))

      if (response.ok) {
        this.results.push({
          name: "Cal.com Integration",
          status: "✅ SUCCESS",
          message: "Cal.com booking URL is accessible",
          url: calUrl,
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Cal.com Integration",
          status: "❌ FAILED",
          message: `Cal.com URL not accessible (${response.status})`,
          url: calUrl,
        })
      }
    } catch (error) {
      this.results.push({
        name: "Cal.com Integration",
        status: "❌ FAILED",
        message: `Cal.com test failed: ${error}`,
        url: config.cal.url,
      })
    }
  }

  // 7. Critical Pages Test
  async testCriticalPages() {
    console.log("📄 Testing Critical Pages...")

    const criticalPages = [
      "/",
      "/leistungen",
      "/use-cases",
      "/kontakt",
      "/termin",
      "/evalkit",
      "/ueber-kivisai",
      "/wissen",
    ]

    for (const page of criticalPages) {
      try {
        const { result: response, time } = await this.measureTime(() =>
          fetch(`${this.baseUrl}${page}`, { method: "HEAD" }),
        )

        if (response.ok) {
          this.results.push({
            name: `Page: ${page}`,
            status: "✅ SUCCESS",
            message: "Page loads successfully",
            url: `${this.baseUrl}${page}`,
            responseTime: time,
          })
        } else {
          this.results.push({
            name: `Page: ${page}`,
            status: "❌ FAILED",
            message: `Page returns ${response.status}`,
            url: `${this.baseUrl}${page}`,
          })
        }
      } catch (error) {
        this.results.push({
          name: `Page: ${page}`,
          status: "❌ FAILED",
          message: `Page test failed: ${error}`,
          url: `${this.baseUrl}${page}`,
        })
      }
    }
  }

  // 8. Contact Form Test
  async testContactForm() {
    console.log("📬 Testing Contact Form...")

    try {
      const testData = {
        name: "Integration Test",
        email: "test@example.com",
        subject: "Post-Deployment Test",
        message: "This is an automated integration test after deployment.",
      }

      const { result: response, time } = await this.measureTime(() =>
        fetch(`${this.baseUrl}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(testData),
        }),
      )

      const data = await response.json()

      if (response.ok && data.success) {
        this.results.push({
          name: "Contact Form",
          status: "✅ SUCCESS",
          message: "Contact form processes submissions correctly",
          details: { autoReplyStatus: data.autoReplyStatus },
          responseTime: time,
        })
      } else {
        this.results.push({
          name: "Contact Form",
          status: "❌ FAILED",
          message: data.error || "Contact form submission failed",
          details: data,
        })
      }
    } catch (error) {
      this.results.push({
        name: "Contact Form",
        status: "❌ FAILED",
        message: `Contact form test failed: ${error}`,
      })
    }
  }

  // 9. Performance Test
  async testPerformance() {
    console.log("⚡ Testing Performance...")

    try {
      const { result: response, time } = await this.measureTime(() => fetch(this.baseUrl))

      let performanceStatus: "✅ SUCCESS" | "⚠️ WARNING" | "❌ FAILED" = "✅ SUCCESS"
      let message = `Homepage loads in ${time}ms`

      if (time > 3000) {
        performanceStatus = "❌ FAILED"
        message += " (Too slow - over 3 seconds)"
      } else if (time > 1500) {
        performanceStatus = "⚠️ WARNING"
        message += " (Acceptable but could be faster)"
      } else {
        message += " (Excellent performance)"
      }

      this.results.push({
        name: "Performance Test",
        status: performanceStatus,
        message,
        responseTime: time,
      })
    } catch (error) {
      this.results.push({
        name: "Performance Test",
        status: "❌ FAILED",
        message: `Performance test failed: ${error}`,
      })
    }
  }

  // Alle Tests ausführen
  async runAllTests() {
    console.log("🚀 KIVISAI Post-Deployment Integration Tests")
    console.log("=".repeat(60))
    console.log(`Testing: ${this.baseUrl}`)
    console.log("=".repeat(60))
    console.log("")

    await this.testWebsiteAvailability()
    await this.testBrevoIntegration()
    await this.testGraphCommonsIntegration()
    await this.testSanityCMSIntegration()
    await this.testOpenAIIntegration()
    await this.testCalComIntegration()
    await this.testCriticalPages()
    await this.testContactForm()
    await this.testPerformance()

    this.generateReport()
  }

  // Report generieren
  generateReport() {
    console.log("\n" + "=".repeat(60))
    console.log("📊 INTEGRATION TEST REPORT")
    console.log("=".repeat(60))

    const successful = this.results.filter((r) => r.status === "✅ SUCCESS").length
    const warnings = this.results.filter((r) => r.status === "⚠️ WARNING").length
    const failed = this.results.filter((r) => r.status === "❌ FAILED").length
    const total = this.results.length

    console.log(`\n📈 SUMMARY:`)
    console.log(`   Total Tests: ${total}`)
    console.log(`   ✅ Successful: ${successful}`)
    console.log(`   ⚠️ Warnings: ${warnings}`)
    console.log(`   ❌ Failed: ${failed}`)
    console.log(`   📊 Success Rate: ${Math.round((successful / total) * 100)}%`)

    console.log(`\n📋 DETAILED RESULTS:`)
    this.results.forEach((result) => {
      console.log(`\n${result.status} ${result.name}`)
      console.log(`   ${result.message}`)
      if (result.url) console.log(`   🔗 ${result.url}`)
      if (result.responseTime) console.log(`   ⏱️ ${result.responseTime}ms`)
      if (result.details) {
        console.log(`   📄 Details: ${JSON.stringify(result.details, null, 2)}`)
      }
    })

    // Deployment Status
    console.log("\n" + "=".repeat(60))
    if (failed === 0) {
      console.log("🎉 DEPLOYMENT STATUS: ✅ EXCELLENT")
      console.log("All integrations are working perfectly!")
    } else if (failed <= 2 && warnings <= 3) {
      console.log("🔶 DEPLOYMENT STATUS: ⚠️ GOOD WITH MINOR ISSUES")
      console.log("Most integrations working, minor fixes needed.")
    } else {
      console.log("🚨 DEPLOYMENT STATUS: ❌ NEEDS ATTENTION")
      console.log("Several integrations need fixing before going live.")
    }
    console.log("=".repeat(60))
  }
}

// Script ausführen
async function main() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kivisai.com"
  const tester = new IntegrationTester(baseUrl)
  await tester.runAllTests()
}

// Ausführen wenn direkt aufgerufen
if (require.main === module) {
  main().catch(console.error)
}

export { IntegrationTester }
