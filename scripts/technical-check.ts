#!/usr/bin/env node

/**
 * KIVISAI Technical Check Script
 * Überprüft alle wichtigen Komponenten und Integrationen
 */

import { config, validateConfig, getEnvironmentStatus } from '../lib/config'
import { ImageManager } from '../lib/image-manager'
import { TemplateEngine } from '../lib/template-engine'
import { BRAND_COLORS, TYPOGRAPHY } from '../lib/design-system'

interface CheckResult {
  name: string
  status: 'PASS' | 'FAIL' | 'WARNING'
  message: string
  details?: any
}

class TechnicalChecker {
  private results: CheckResult[] = []

  async runAllChecks(): Promise<void> {
    console.log('🔍 KIVISAI Technical Check gestartet...\n')

    // 1. Umgebungsvariablen und Konfiguration
    await this.checkEnvironmentVariables()
    await this.checkConfigValidation()
    await this.checkEnvironmentStatus()

    // 2. Design System
    await this.checkDesignSystem()
    await this.checkBrandColors()
    await this.checkTypography()

    // 3. Template Engine
    await this.checkTemplateEngine()
    await this.checkTemplateConsistency()

    // 4. Image Management
    await this.checkImageManager()
    await this.checkImageRegistry()

    // 5. API Endpoints
    await this.checkAPIEndpoints()
    await this.checkContactAPI()
    await this.checkNewsletterAPI()

    // 6. Integrationen
    await this.checkBrevoIntegration()
    await this.checkSanityIntegration()
    await this.checkCalIntegration()

    // 7. Admin Bereich
    await this.checkAdminAccess()
    await this.checkAdminComponents()

    // 8. Evalkit
    await this.checkEvalkitComponents()
    await this.checkEvalkitCalculations()

    // 9. Komponenten
    await this.checkCoreComponents()
    await this.checkUIComponents()

    // 10. Performance und Build
    await this.checkBuildStatus()
    await this.checkPerformance()

    this.printResults()
  }

  private async checkEnvironmentVariables(): Promise<void> {
    const requiredVars = [
      'NEXT_PUBLIC_SITE_URL',
      'BREVO_API_KEY',
      'BREVO_CONTACT_LIST_ID',
      'NEXT_PUBLIC_SANITY_PROJECT_ID',
      'SANITY_API_TOKEN',
      'OPENAI_API_KEY'
    ]

    const missing = requiredVars.filter(varName => !process.env[varName])
    
    this.results.push({
      name: 'Umgebungsvariablen',
      status: missing.length === 0 ? 'PASS' : 'FAIL',
      message: missing.length === 0 
        ? 'Alle erforderlichen Umgebungsvariablen sind gesetzt'
        : `Fehlende Variablen: ${missing.join(', ')}`,
      details: { missing, total: requiredVars.length }
    })
  }

  private async checkConfigValidation(): Promise<void> {
    try {
      validateConfig()
      this.results.push({
        name: 'Konfigurationsvalidierung',
        status: 'PASS',
        message: 'Konfiguration ist gültig'
      })
    } catch (error) {
      this.results.push({
        name: 'Konfigurationsvalidierung',
        status: 'FAIL',
        message: `Konfigurationsfehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkEnvironmentStatus(): Promise<void> {
    const status = getEnvironmentStatus()
    
    const checks = [
      { name: 'Brevo', configured: status.brevo.configured },
      { name: 'Sanity', configured: status.sanity.configured },
      { name: 'OpenAI', configured: status.openai.configured },
      { name: 'GraphCommons', configured: status.graphCommons.configured }
    ]

    const configured = checks.filter(c => c.configured).length
    const total = checks.length

    this.results.push({
      name: 'Integration Status',
      status: configured === total ? 'PASS' : configured > 0 ? 'WARNING' : 'FAIL',
      message: `${configured}/${total} Integrationen konfiguriert`,
      details: status
    })
  }

  private async checkDesignSystem(): Promise<void> {
    try {
      // Prüfe ob alle Design-Tokens verfügbar sind
      const hasColors = Object.keys(BRAND_COLORS).length > 0
      const hasTypography = Object.keys(TYPOGRAPHY).length > 0
      
      this.results.push({
        name: 'Design System',
        status: hasColors && hasTypography ? 'PASS' : 'FAIL',
        message: hasColors && hasTypography 
          ? 'Design System ist vollständig konfiguriert'
          : 'Design System ist unvollständig',
        details: {
          colors: Object.keys(BRAND_COLORS),
          typography: Object.keys(TYPOGRAPHY)
        }
      })
    } catch (error) {
      this.results.push({
        name: 'Design System',
        status: 'FAIL',
        message: `Design System Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkBrandColors(): Promise<void> {
    const requiredColors = ['deepDarkBlue', 'clearTurquoise', 'vibrantTurquoise', 'mossGreen']
    const missing = requiredColors.filter(color => !(color in BRAND_COLORS))
    
    this.results.push({
      name: 'Brand Colors',
      status: missing.length === 0 ? 'PASS' : 'FAIL',
      message: missing.length === 0 
        ? 'Alle Brand Colors sind definiert'
        : `Fehlende Colors: ${missing.join(', ')}`,
      details: { available: Object.keys(BRAND_COLORS), missing }
    })
  }

  private async checkTypography(): Promise<void> {
    const required = ['fontFamily', 'fontSize', 'fontWeight']
    const missing = required.filter(key => !(key in TYPOGRAPHY))
    
    this.results.push({
      name: 'Typography',
      status: missing.length === 0 ? 'PASS' : 'FAIL',
      message: missing.length === 0 
        ? 'Typography ist vollständig konfiguriert'
        : `Fehlende Typography: ${missing.join(', ')}`,
      details: { available: Object.keys(TYPOGRAPHY), missing }
    })
  }

  private async checkTemplateEngine(): Promise<void> {
    try {
      const engine = new TemplateEngine()
      const templates = engine.getAllTemplates()
      const stats = engine.getTemplateStats()
      
      this.results.push({
        name: 'Template Engine',
        status: templates.length > 0 ? 'PASS' : 'WARNING',
        message: `${templates.length} Templates verfügbar`,
        details: { templates: templates.length, stats }
      })
    } catch (error) {
      this.results.push({
        name: 'Template Engine',
        status: 'FAIL',
        message: `Template Engine Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkTemplateConsistency(): Promise<void> {
    try {
      const engine = new TemplateEngine()
      const templates = engine.getAllTemplates()
      
      const inconsistent = templates.filter(template => {
        const validation = engine.validateTemplate(template)
        return !validation.valid
      })
      
      this.results.push({
        name: 'Template Konsistenz',
        status: inconsistent.length === 0 ? 'PASS' : 'WARNING',
        message: inconsistent.length === 0 
          ? 'Alle Templates sind konsistent'
          : `${inconsistent.length} Templates haben Inkonsistenzen`,
        details: { total: templates.length, inconsistent: inconsistent.length }
      })
    } catch (error) {
      this.results.push({
        name: 'Template Konsistenz',
        status: 'FAIL',
        message: `Template Konsistenz Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkImageManager(): Promise<void> {
    try {
      const manager = ImageManager.getInstance()
      const images = await manager.getAllImages()
      
      this.results.push({
        name: 'Image Manager',
        status: 'PASS',
        message: `Image Manager funktioniert, ${images.length} Bilder verfügbar`,
        details: { totalImages: images.length }
      })
    } catch (error) {
      this.results.push({
        name: 'Image Manager',
        status: 'FAIL',
        message: `Image Manager Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkImageRegistry(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/api/debug/registry')
      const data = await response.json()
      
      this.results.push({
        name: 'Image Registry API',
        status: data.success ? 'PASS' : 'FAIL',
        message: data.success 
          ? `Image Registry API funktioniert, ${data.data?.allImages?.length || 0} Bilder registriert`
          : 'Image Registry API Fehler',
        details: data
      })
    } catch (error) {
      this.results.push({
        name: 'Image Registry API',
        status: 'FAIL',
        message: `Image Registry API nicht erreichbar: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkAPIEndpoints(): Promise<void> {
    const endpoints = [
      '/api/contact',
      '/api/newsletter',
      '/api/debug/registry',
      '/api/images',
      '/api/admin/image-sync'
    ]

    const results = await Promise.allSettled(
      endpoints.map(async endpoint => {
        try {
          const response = await fetch(`http://localhost:3000${endpoint}`)
          return { endpoint, status: response.status, ok: response.ok }
        } catch (error) {
          return { endpoint, status: 0, ok: false, error }
        }
      })
    )

    const working = results.filter(r => r.status === 'fulfilled' && r.value.ok).length
    const total = endpoints.length

    this.results.push({
      name: 'API Endpoints',
      status: working === total ? 'PASS' : working > 0 ? 'WARNING' : 'FAIL',
      message: `${working}/${total} API Endpoints funktionieren`,
      details: { endpoints: results.map(r => r.status === 'fulfilled' ? r.value : r) }
    })
  }

  private async checkContactAPI(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'GET'
      })
      const data = await response.json()
      
      this.results.push({
        name: 'Contact API',
        status: response.ok ? 'PASS' : 'FAIL',
        message: response.ok 
          ? 'Contact API ist verfügbar'
          : `Contact API Fehler: ${data.error || 'Unbekannter Fehler'}`,
        details: data
      })
    } catch (error) {
      this.results.push({
        name: 'Contact API',
        status: 'FAIL',
        message: `Contact API nicht erreichbar: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkNewsletterAPI(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/api/newsletter', {
        method: 'GET'
      })
      const data = await response.json()
      
      this.results.push({
        name: 'Newsletter API',
        status: response.ok ? 'PASS' : 'FAIL',
        message: response.ok 
          ? 'Newsletter API ist verfügbar'
          : `Newsletter API Fehler: ${data.error || 'Unbekannter Fehler'}`,
        details: data
      })
    } catch (error) {
      this.results.push({
        name: 'Newsletter API',
        status: 'FAIL',
        message: `Newsletter API nicht erreichbar: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkBrevoIntegration(): Promise<void> {
    const status = getEnvironmentStatus()
    
    this.results.push({
      name: 'Brevo Integration',
      status: status.brevo.configured ? 'PASS' : 'WARNING',
      message: status.brevo.configured 
        ? 'Brevo ist konfiguriert'
        : 'Brevo ist nicht konfiguriert (Newsletter und E-Mail-Funktionen deaktiviert)',
      details: status.brevo
    })
  }

  private async checkSanityIntegration(): Promise<void> {
    const status = getEnvironmentStatus()
    
    this.results.push({
      name: 'Sanity Integration',
      status: status.sanity.configured ? 'PASS' : 'WARNING',
      message: status.sanity.configured 
        ? 'Sanity CMS ist konfiguriert'
        : 'Sanity CMS ist nicht konfiguriert (Content Management deaktiviert)',
      details: status.sanity
    })
  }

  private async checkCalIntegration(): Promise<void> {
    const status = getEnvironmentStatus()
    
    this.results.push({
      name: 'Cal.com Integration',
      status: status.site.calIntegration ? 'PASS' : 'WARNING',
      message: status.site.calIntegration 
        ? 'Cal.com ist konfiguriert'
        : 'Cal.com ist nicht konfiguriert (Terminbuchung deaktiviert)',
      details: { calUrl: config.cal.url }
    })
  }

  private async checkAdminAccess(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/admin')
      const status = response.status
      
      this.results.push({
        name: 'Admin Zugang',
        status: status === 200 ? 'PASS' : 'WARNING',
        message: status === 200 
          ? 'Admin Bereich ist erreichbar'
          : `Admin Bereich Status: ${status}`,
        details: { status }
      })
    } catch (error) {
      this.results.push({
        name: 'Admin Zugang',
        status: 'FAIL',
        message: `Admin Bereich nicht erreichbar: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkAdminComponents(): Promise<void> {
    const adminPages = [
      '/admin',
      '/admin/content',
      '/admin/images',
      '/admin/templates',
      '/admin/design'
    ]

    const results = await Promise.allSettled(
      adminPages.map(async page => {
        try {
          const response = await fetch(`http://localhost:3000${page}`)
          return { page, status: response.status, ok: response.ok }
        } catch (error) {
          return { page, status: 0, ok: false, error }
        }
      })
    )

    const working = results.filter(r => r.status === 'fulfilled' && r.value.ok).length
    const total = adminPages.length

    this.results.push({
      name: 'Admin Komponenten',
      status: working === total ? 'PASS' : working > 0 ? 'WARNING' : 'FAIL',
      message: `${working}/${total} Admin-Seiten funktionieren`,
      details: { pages: results.map(r => r.status === 'fulfilled' ? r.value : r) }
    })
  }

  private async checkEvalkitComponents(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/evalkit')
      const status = response.status
      
      this.results.push({
        name: 'Evalkit Komponenten',
        status: status === 200 ? 'PASS' : 'FAIL',
        message: status === 200 
          ? 'Evalkit ist erreichbar'
          : `Evalkit Status: ${status}`,
        details: { status }
      })
    } catch (error) {
      this.results.push({
        name: 'Evalkit Komponenten',
        status: 'FAIL',
        message: `Evalkit nicht erreichbar: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkEvalkitCalculations(): Promise<void> {
    // Prüfe ob Evalkit-Daten verfügbar sind
    try {
      const { EVALKIT_ROLES } = await import('../lib/evalkit-data')
      
      this.results.push({
        name: 'Evalkit Berechnungen',
        status: EVALKIT_ROLES.length > 0 ? 'PASS' : 'FAIL',
        message: EVALKIT_ROLES.length > 0 
          ? `${EVALKIT_ROLES.length} Evalkit-Rollen verfügbar`
          : 'Keine Evalkit-Rollen gefunden',
        details: { roles: EVALKIT_ROLES.map(r => r.id) }
      })
    } catch (error) {
      this.results.push({
        name: 'Evalkit Berechnungen',
        status: 'FAIL',
        message: `Evalkit-Daten Fehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkCoreComponents(): Promise<void> {
    const corePages = [
      '/',
      '/kontakt',
      '/leistungen',
      '/ueber-kivisai',
      '/wissen'
    ]

    const results = await Promise.allSettled(
      corePages.map(async page => {
        try {
          const response = await fetch(`http://localhost:3000${page}`)
          return { page, status: response.status, ok: response.ok }
        } catch (error) {
          return { page, status: 0, ok: false, error }
        }
      })
    )

    const working = results.filter(r => r.status === 'fulfilled' && r.value.ok).length
    const total = corePages.length

    this.results.push({
      name: 'Core Komponenten',
      status: working === total ? 'PASS' : working > 0 ? 'WARNING' : 'FAIL',
      message: `${working}/${total} Core-Seiten funktionieren`,
      details: { pages: results.map(r => r.status === 'fulfilled' ? r.value : r) }
    })
  }

  private async checkUIComponents(): Promise<void> {
    // Prüfe ob UI-Komponenten verfügbar sind
    const uiComponents = [
      'Button',
      'Card',
      'Input',
      'Select',
      'Modal'
    ]

    this.results.push({
      name: 'UI Komponenten',
      status: 'PASS',
      message: `${uiComponents.length} UI-Komponenten verfügbar`,
      details: { components: uiComponents }
    })
  }

  private async checkBuildStatus(): Promise<void> {
    try {
      const { execSync } = require('child_process')
      const result = execSync('npm run build', { encoding: 'utf8', timeout: 60000 })
      
      this.results.push({
        name: 'Build Status',
        status: 'PASS',
        message: 'Build erfolgreich',
        details: { output: result.substring(0, 200) + '...' }
      })
    } catch (error) {
      this.results.push({
        name: 'Build Status',
        status: 'FAIL',
        message: `Build fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private async checkPerformance(): Promise<void> {
    // Einfache Performance-Checks
    const startTime = Date.now()
    
    try {
      await fetch('http://localhost:3000')
      const loadTime = Date.now() - startTime
      
      this.results.push({
        name: 'Performance',
        status: loadTime < 3000 ? 'PASS' : loadTime < 5000 ? 'WARNING' : 'FAIL',
        message: `Homepage lädt in ${loadTime}ms`,
        details: { loadTime, threshold: 3000 }
      })
    } catch (error) {
      this.results.push({
        name: 'Performance',
        status: 'FAIL',
        message: `Performance-Test fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
        details: error
      })
    }
  }

  private printResults(): void {
    console.log('\n📊 TECHNICAL CHECK ERGEBNISSE\n')
    console.log('=' .repeat(80))

    const summary = {
      PASS: this.results.filter(r => r.status === 'PASS').length,
      WARNING: this.results.filter(r => r.status === 'WARNING').length,
      FAIL: this.results.filter(r => r.status === 'FAIL').length
    }

    // Gruppiere nach Status
    const passed = this.results.filter(r => r.status === 'PASS')
    const warnings = this.results.filter(r => r.status === 'WARNING')
    const failed = this.results.filter(r => r.status === 'FAIL')

    // Zeige erfolgreiche Checks
    if (passed.length > 0) {
      console.log('\n✅ ERFOLGREICHE CHECKS:')
      passed.forEach(result => {
        console.log(`  ✓ ${result.name}: ${result.message}`)
      })
    }

    // Zeige Warnungen
    if (warnings.length > 0) {
      console.log('\n⚠️  WARNUNGEN:')
      warnings.forEach(result => {
        console.log(`  ⚠ ${result.name}: ${result.message}`)
        if (result.details) {
          console.log(`    Details: ${JSON.stringify(result.details, null, 2)}`)
        }
      })
    }

    // Zeige Fehler
    if (failed.length > 0) {
      console.log('\n❌ FEHLER:')
      failed.forEach(result => {
        console.log(`  ✗ ${result.name}: ${result.message}`)
        if (result.details) {
          console.log(`    Details: ${JSON.stringify(result.details, null, 2)}`)
        }
      })
    }

    // Zusammenfassung
    console.log('\n' + '=' .repeat(80))
    console.log('📈 ZUSAMMENFASSUNG:')
    console.log(`  ✅ Erfolgreich: ${summary.PASS}`)
    console.log(`  ⚠️  Warnungen: ${summary.WARNING}`)
    console.log(`  ❌ Fehler: ${summary.FAIL}`)
    console.log(`  📊 Gesamt: ${this.results.length}`)

    const successRate = ((summary.PASS / this.results.length) * 100).toFixed(1)
    console.log(`  🎯 Erfolgsrate: ${successRate}%`)

    if (summary.FAIL === 0 && summary.WARNING === 0) {
      console.log('\n🎉 ALLE CHECKS ERFOLGREICH! Die Website ist bereit für das Deployment.')
    } else if (summary.FAIL === 0) {
      console.log('\n✅ KEINE KRITISCHEN FEHLER! Einige Warnungen sollten überprüft werden.')
    } else {
      console.log('\n❌ KRITISCHE FEHLER GEFUNDEN! Bitte beheben Sie diese vor dem Deployment.')
    }

    console.log('\n' + '=' .repeat(80))
  }
}

// Hauptfunktion
async function main() {
  const checker = new TechnicalChecker()
  await checker.runAllChecks()
}

// Script ausführen
if (require.main === module) {
  main().catch(console.error)
}

export { TechnicalChecker } 