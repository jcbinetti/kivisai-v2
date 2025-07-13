#!/usr/bin/env tsx

/**
 * Deployment Readiness Checker for KIVISAI Website
 * Ensures all critical components are ready for production deployment
 */

import { config } from "../lib/config"
import { runIntegrationTests } from "./verify-integrations"

interface ReadinessCheck {
  category: string
  checks: Array<{
    name: string
    status: "pass" | "fail" | "warning"
    message: string
    required: boolean
  }>
}

function checkEnvironmentVariables(): ReadinessCheck {
  const checks: Array<{
    name: string
    status: "pass" | "fail" | "warning"
    message: string
    required: boolean
  }> = []

  // Critical environment variables
  const critical = [
    { key: "NEXT_PUBLIC_SITE_URL", value: config.siteUrl },
    { key: "BREVO_API_KEY", value: config.brevo.apiKey },
    { key: "BREVO_CONTACT_LIST_ID", value: config.brevo.contactListId },
    { key: "BREVO_TEAM_EMAIL", value: config.brevo.teamEmail },
    { key: "BREVO_SENDER_EMAIL", value: config.brevo.senderEmail },
  ]

  for (const { key, value } of critical) {
    checks.push({
      name: key,
      status: value ? "pass" : "fail",
      message: value ? "Configured" : "Missing - Required for production",
      required: true,
    })
  }

  // Optional but recommended
  const optional = [
    { key: "OPENAI_API_KEY", value: config.openai.apiKey },
    { key: "SANITY_API_TOKEN", value: config.sanity.apiToken },
    { key: "GC_USERNAME", value: config.graphCommons.username },
  ]

  for (const { key, value } of optional) {
    checks.push({
      name: key,
      status: value ? "pass" : "warning",
      message: value ? "Configured" : "Not configured - Some features may be limited",
      required: false,
    })
  }

  return {
    category: "Environment Variables",
    checks,
  }
}

function checkSiteConfiguration(): ReadinessCheck {
  const checks: Array<{
    name: string
    status: "pass" | "fail" | "warning"
    message: string
    required: boolean
  }> = []

  // Site URL validation
  const siteUrl = config.siteUrl
  const isValidUrl = siteUrl.startsWith("https://") && siteUrl.includes("kivisai.com")

  checks.push({
    name: "Production Site URL",
    status: isValidUrl ? "pass" : "fail",
    message: isValidUrl ? `Configured: ${siteUrl}` : "Must be https://www.kivisai.com for production",
    required: true,
  })

  // Email configuration
  const emailDomain = config.brevo.teamEmail?.split("@")[1]
  const correctDomain = emailDomain === "kivisai.com"

  checks.push({
    name: "Email Domain",
    status: correctDomain ? "pass" : "warning",
    message: correctDomain ? "Using kivisai.com domain" : `Using ${emailDomain} - consider kivisai.com for production`,
    required: false,
  })

  return {
    category: "Site Configuration",
    checks,
  }
}

function checkFeatureFlags(): ReadinessCheck {
  const checks: Array<{
    name: string
    status: "pass" | "fail" | "warning"
    message: string
    required: boolean
  }> = []
  const flags = config.features

  checks.push({
    name: "Design System Flags",
    status: "pass",
    message: `Colors: ${flags.newColors}, Typography: ${flags.newTypography}, Components: ${flags.newComponents}`,
    required: false,
  })

  checks.push({
    name: "Coming Soon Mode",
    status: flags.comingSoonMode ? "warning" : "pass",
    message: flags.comingSoonMode
      ? "Coming soon mode is ENABLED - site will show coming soon page"
      : "Coming soon mode disabled",
    required: false,
  })

  return {
    category: "Feature Configuration",
    checks,
  }
}

async function runDeploymentReadinessCheck() {
  console.log("🚀 KIVISAI Deployment Readiness Check")
  console.log("=====================================\n")

  const readinessChecks = [checkEnvironmentVariables(), checkSiteConfiguration(), checkFeatureFlags()]

  let totalPassed = 0
  let totalFailed = 0
  let totalWarnings = 0
  let criticalIssues = 0

  for (const checkGroup of readinessChecks) {
    console.log(`📋 ${checkGroup.category}`)
    console.log("─".repeat(checkGroup.category.length + 4))

    for (const check of checkGroup.checks) {
      const icon = check.status === "pass" ? "✅" : check.status === "fail" ? "❌" : "⚠️"
      console.log(`${icon} ${check.name}: ${check.message}`)

      if (check.status === "pass") totalPassed++
      else if (check.status === "fail") {
        totalFailed++
        if (check.required) criticalIssues++
      } else totalWarnings++
    }
    console.log("")
  }

  // Run integration tests
  console.log("🔌 Integration Tests")
  console.log("───────────────────")

  try {
    const integrationResults = await runIntegrationTests()
    console.log("")
  } catch (error) {
    console.log("❌ Integration tests failed to run")
    criticalIssues++
  }

  // Final summary
  console.log("📊 Deployment Readiness Summary")
  console.log("===============================")
  console.log(`✅ Passed: ${totalPassed}`)
  console.log(`❌ Failed: ${totalFailed}`)
  console.log(`⚠️  Warnings: ${totalWarnings}`)
  console.log(`🚨 Critical Issues: ${criticalIssues}`)

  if (criticalIssues === 0) {
    console.log("\n🎉 READY FOR DEPLOYMENT!")
    console.log("Your KIVISAI website is ready to go live.")
    console.log("\nNext steps:")
    console.log("1. Deploy to Vercel")
    console.log("2. Configure custom domain (www.kivisai.com)")
    console.log("3. Test all functionality in production")
    console.log("4. Set up monitoring and analytics")
  } else {
    console.log("\n⚠️  NOT READY FOR DEPLOYMENT")
    console.log(`Please resolve ${criticalIssues} critical issue(s) before deploying.`)
  }

  return criticalIssues === 0
}

// Run the check if this script is executed directly
if (require.main === module) {
  runDeploymentReadinessCheck()
    .then((ready) => {
      process.exit(ready ? 0 : 1)
    })
    .catch((error) => {
      console.error("Deployment readiness check failed:", error)
      process.exit(1)
    })
}

export { runDeploymentReadinessCheck }
