#!/usr/bin/env tsx

/**
 * Integration Verification Script for KIVISAI Website
 * Verifies all configured integrations are working properly
 */

import { config, getEnvironmentStatus } from "../lib/config"

interface IntegrationTest {
  name: string
  test: () => Promise<{ success: boolean; message: string; details?: any }>
}

async function testBrevoIntegration() {
  try {
    if (!config.brevo.apiKey) {
      return { success: false, message: "Brevo API key not configured" }
    }

    const response = await fetch("https://api.brevo.com/v3/account", {
      headers: {
        Accept: "application/json",
        "api-key": config.brevo.apiKey,
      },
    })

    if (!response.ok) {
      return { success: false, message: `Brevo API error: ${response.status}` }
    }

    const data = await response.json()
    return {
      success: true,
      message: "Brevo integration working",
      details: {
        email: data.email,
        plan: data.plan?.type || "Unknown",
      },
    }
  } catch (error) {
    return { success: false, message: `Brevo test failed: ${error}` }
  }
}

async function testGraphCommonsIntegration() {
  try {
    if (!config.graphCommons.username || !config.graphCommons.password) {
      return { success: false, message: "Graph Commons credentials not configured" }
    }

    // Test authentication by trying to access user info
    const auth = Buffer.from(`${config.graphCommons.username}:${config.graphCommons.password}`).toString("base64")

    const response = await fetch("https://graphcommons.com/api/v1/users/me", {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      return { success: false, message: `Graph Commons API error: ${response.status}` }
    }

    const data = await response.json()
    return {
      success: true,
      message: "Graph Commons integration working",
      details: {
        username: data.username,
        name: data.name,
      },
    }
  } catch (error) {
    return { success: false, message: `Graph Commons test failed: ${error}` }
  }
}

async function testSanityIntegration() {
  try {
    if (!config.sanity.projectId || !config.sanity.apiToken) {
      return { success: false, message: "Sanity credentials not configured" }
    }

    const response = await fetch(
      `https://${config.sanity.projectId}.api.sanity.io/v2021-06-07/data/query/${config.sanity.dataset}?query=*[_type == "post"][0...1]`,
      {
        headers: {
          Authorization: `Bearer ${config.sanity.apiToken}`,
        },
      },
    )

    if (!response.ok) {
      return { success: false, message: `Sanity API error: ${response.status}` }
    }

    const data = await response.json()
    return {
      success: true,
      message: "Sanity CMS integration working",
      details: {
        projectId: config.sanity.projectId,
        dataset: config.sanity.dataset,
        documentsFound: data.result?.length || 0,
      },
    }
  } catch (error) {
    return { success: false, message: `Sanity test failed: ${error}` }
  }
}

async function testOpenAIIntegration() {
  try {
    if (!config.openai.apiKey) {
      return { success: false, message: "OpenAI API key not configured" }
    }

    const response = await fetch("https://api.openai.com/v1/models", {
      headers: {
        Authorization: `Bearer ${config.openai.apiKey}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      return { success: false, message: `OpenAI API error: ${response.status}` }
    }

    const data = await response.json()
    return {
      success: true,
      message: "OpenAI integration working",
      details: {
        modelsAvailable: data.data?.length || 0,
      },
    }
  } catch (error) {
    return { success: false, message: `OpenAI test failed: ${error}` }
  }
}

async function testCalIntegration() {
  try {
    if (!config.cal.url) {
      return { success: false, message: "Cal.com URL not configured" }
    }

    // Simple URL validation and accessibility check
    const response = await fetch(config.cal.url, { method: "HEAD" })

    return {
      success: response.ok,
      message: response.ok ? "Cal.com URL accessible" : `Cal.com URL not accessible: ${response.status}`,
      details: {
        url: config.cal.url,
        status: response.status,
      },
    }
  } catch (error) {
    return { success: false, message: `Cal.com test failed: ${error}` }
  }
}

const integrationTests: IntegrationTest[] = [
  { name: "Brevo Email Marketing", test: testBrevoIntegration },
  { name: "Graph Commons", test: testGraphCommonsIntegration },
  { name: "Sanity CMS", test: testSanityIntegration },
  { name: "OpenAI API", test: testOpenAIIntegration },
  { name: "Cal.com Booking", test: testCalIntegration },
]

async function runIntegrationTests() {
  console.log("🔍 KIVISAI Integration Verification")
  console.log("=====================================\n")

  const envStatus = getEnvironmentStatus()
  console.log("📊 Environment Status:")
  console.log(`   Site URL: ${config.siteUrl}`)
  console.log(`   Brevo: ${envStatus.brevo.configured ? "✅" : "❌"}`)
  console.log(`   Graph Commons: ${envStatus.graphCommons.configured ? "✅" : "❌"}`)
  console.log(`   Sanity CMS: ${envStatus.sanity.configured ? "✅" : "❌"}`)
  console.log(`   OpenAI: ${envStatus.openai.configured ? "✅" : "❌"}`)
  console.log(`   Feature Flags: ${JSON.stringify(envStatus.features)}\n`)

  console.log("🧪 Running Integration Tests...\n")

  const results = []

  for (const test of integrationTests) {
    console.log(`Testing ${test.name}...`)

    try {
      const result = await test.test()
      results.push({ name: test.name, ...result })

      if (result.success) {
        console.log(`✅ ${result.message}`)
        if (result.details) {
          console.log(`   Details: ${JSON.stringify(result.details, null, 2)}`)
        }
      } else {
        console.log(`❌ ${result.message}`)
      }
    } catch (error) {
      console.log(`❌ Test failed with error: ${error}`)
      results.push({ name: test.name, success: false, message: `Test error: ${error}` })
    }

    console.log("")
  }

  // Summary
  const successful = results.filter((r) => r.success).length
  const total = results.length

  console.log("📋 Test Summary")
  console.log("===============")
  console.log(`✅ Successful: ${successful}/${total}`)
  console.log(`❌ Failed: ${total - successful}/${total}`)

  if (successful === total) {
    console.log("\n🎉 All integrations are working correctly!")
    console.log("Your KIVISAI website is ready for deployment.")
  } else {
    console.log("\n⚠️  Some integrations need attention before deployment.")
    console.log("Please check the failed tests above.")
  }

  return { successful, total, results }
}

// Run the tests if this script is executed directly
if (require.main === module) {
  runIntegrationTests()
    .then(({ successful, total }) => {
      process.exit(successful === total ? 0 : 1)
    })
    .catch((error) => {
      console.error("Integration test runner failed:", error)
      process.exit(1)
    })
}

export { runIntegrationTests }
