/**
 * Footer Validation Runner
 * Führt umfassende Footer-Validierung aus
 */

import { FooterValidator } from "./validate-footer"

async function runFooterValidation() {
  console.log("🚀 Starte KIVISAI Footer Validation...")
  console.log("=".repeat(60))

  try {
    const validator = new FooterValidator()
    await validator.runCompleteValidation()

    console.log("\n✅ Footer Validation abgeschlossen!")
    console.log("📋 Prüfe den Report oben für Details.")
  } catch (error) {
    console.error("❌ Fehler bei Footer Validation:", error)
    process.exit(1)
  }
}

// Script ausführen
runFooterValidation()
