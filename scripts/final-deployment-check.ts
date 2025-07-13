#!/usr/bin/env node

/**
 * Finale Deployment-Prüfung vor Vercel Production
 * Führt alle kritischen Checks durch
 */

import { DeploymentChecker, generateDeploymentReport } from "../lib/deployment-checker"

async function runFinalCheck() {
  console.log("🔍 Führe finale Deployment-Prüfung durch...\n")

  const checker = new DeploymentChecker()
  const result = checker.runFullCheck()

  // Report generieren
  const report = generateDeploymentReport()
  console.log(report)

  // Zusammenfassung
  if (result.ready) {
    console.log("✅ DEPLOYMENT BEREIT!")
    console.log("🚀 Sie können sicher auf Vercel Production deployen.")
    process.exit(0)
  } else {
    console.log("❌ DEPLOYMENT NICHT BEREIT!")
    console.log(`🚨 ${result.summary.critical_failures} kritische Fehler müssen behoben werden.`)
    process.exit(1)
  }
}

// Zusätzliche Build-Tests
async function testBuild() {
  console.log("🔨 Teste Production Build...")

  try {
    const { execSync } = require("child_process")
    execSync("npm run build", { stdio: "inherit" })
    console.log("✅ Build erfolgreich")
    return true
  } catch (error) {
    console.log("❌ Build fehlgeschlagen:", error)
    return false
  }
}

// Hauptfunktion
async function main() {
  console.log("🎯 KIVISAI Website - Finale Deployment-Prüfung\n")

  // Build-Test
  const buildSuccess = await testBuild()
  if (!buildSuccess) {
    console.log("❌ Build-Test fehlgeschlagen - Deployment abgebrochen")
    process.exit(1)
  }

  // Deployment-Checks
  await runFinalCheck()
}

if (require.main === module) {
  main().catch(console.error)
}
