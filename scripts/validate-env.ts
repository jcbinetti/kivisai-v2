#!/usr/bin/env node

console.log("🔍 KIVISAI Website - Environment Validation\n")

// Required Environment Variables Check - SIMPLIFIED FOR DEPLOYMENT
const requiredVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  BREVO_API_KEY: process.env.BREVO_API_KEY,
  BREVO_CONTACT_LIST_ID: process.env.BREVO_CONTACT_LIST_ID,
  BREVO_TEAM_EMAIL: process.env.BREVO_TEAM_EMAIL,
  BREVO_SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
  GC_USERNAME: process.env.GC_USERNAME,
  GC_PASSWORD: process.env.GC_PASSWORD,
  GRAPH_COMMONS_DEFAULT_GRAPH_ID: process.env.GRAPH_COMMONS_DEFAULT_GRAPH_ID,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  NEXT_PUBLIC_CAL_URL: process.env.NEXT_PUBLIC_CAL_URL,
}

let envValid = true

console.log("📋 Required Environment Variables:")
console.log("=".repeat(50))

Object.entries(requiredVars).forEach(([key, value]) => {
  const isValid = !!value
  const status = isValid ? "✅" : "❌"
  const displayValue = value
    ? key.includes("PASSWORD") || key.includes("API_KEY") || key.includes("TOKEN")
      ? `${value.substring(0, 10)}...`
      : value
    : "NOT SET"

  console.log(`${status} ${key}: ${displayValue}`)

  if (!isValid) {
    envValid = false
  }
})

console.log("\n" + "=".repeat(50))

if (envValid) {
  console.log("🎉 ALL REQUIRED ENVIRONMENT VARIABLES ARE SET!")
  console.log("✅ Website is ready for deployment")
  process.exit(0)
} else {
  console.log("❌ MISSING REQUIRED ENVIRONMENT VARIABLES!")
  console.log("Please set all required variables before deployment.")
  process.exit(1)
}
