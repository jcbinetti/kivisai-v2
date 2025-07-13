#!/usr/bin/env node

import { execSync } from "child_process"
import fs from "fs"
import path from "path"

console.log("🚀 KIVISAI Website - Pre-Deployment Check\n")

const checks = [
  {
    name: "Environment Variables",
    check: () => {
      try {
        execSync("npm run validate-env", { stdio: "pipe" })
        return { success: true, message: "All environment variables configured" }
      } catch (error) {
        return { success: false, message: "Missing environment variables" }
      }
    },
  },
  {
    name: "TypeScript Compilation",
    check: () => {
      try {
        execSync("npx tsc --noEmit", { stdio: "pipe" })
        return { success: true, message: "TypeScript compilation successful" }
      } catch (error) {
        return { success: false, message: "TypeScript compilation failed" }
      }
    },
  },
  {
    name: "ESLint Check",
    check: () => {
      try {
        execSync("npm run lint", { stdio: "pipe" })
        return { success: true, message: "No linting errors" }
      } catch (error) {
        return { success: false, message: "Linting errors found" }
      }
    },
  },
  {
    name: "Build Test",
    check: () => {
      try {
        execSync("npm run build", { stdio: "pipe" })
        return { success: true, message: "Build successful" }
      } catch (error) {
        return { success: false, message: "Build failed" }
      }
    },
  },
  {
    name: "Required Files",
    check: () => {
      const requiredFiles = [
        "app/layout.tsx",
        "app/page.tsx",
        "components/header.tsx",
        "components/footer.tsx",
        "lib/config.ts",
        ".env.local",
      ]

      const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)))

      if (missingFiles.length === 0) {
        return { success: true, message: "All required files present" }
      } else {
        return { success: false, message: `Missing files: ${missingFiles.join(", ")}` }
      }
    },
  },
]

let allPassed = true

console.log("Running pre-deployment checks...\n")

checks.forEach((check, index) => {
  process.stdout.write(`${index + 1}. ${check.name}... `)

  const result = check.check()

  if (result.success) {
    console.log(`✅ ${result.message}`)
  } else {
    console.log(`❌ ${result.message}`)
    allPassed = false
  }
})

console.log("\n" + "=".repeat(50))

if (allPassed) {
  console.log("🎉 ALL PRE-DEPLOYMENT CHECKS PASSED!")
  console.log("✅ Website is ready for production deployment")
  console.log("\n📋 Deployment Checklist:")
  console.log("   ✅ Environment variables validated")
  console.log("   ✅ TypeScript compilation successful")
  console.log("   ✅ No linting errors")
  console.log("   ✅ Build test passed")
  console.log("   ✅ All required files present")
  console.log("\n🚀 Ready to deploy to Vercel!")
} else {
  console.log("❌ PRE-DEPLOYMENT CHECKS FAILED!")
  console.log("Please fix the issues above before deploying.")
  process.exit(1)
}
