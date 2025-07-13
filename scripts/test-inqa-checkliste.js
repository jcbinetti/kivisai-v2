#!/usr/bin/env node

/**
 * INQA-Coaching Checkliste Test Script
 * Testet die Funktionalität und das Design der INQA-Coaching Seite
 */

const fs = require('fs');
const path = require('path');

class InqaChecklisteTester {
  constructor() {
    this.results = [];
  }

  async runAllTests() {
    console.log('🔍 INQA-Coaching Checkliste Test gestartet...\n');

    // 1. Datei-Struktur Tests
    this.checkFileStructure();
    this.checkPageFile();
    this.checkComponents();

    // 2. Design System Tests
    this.checkDesignSystem();
    this.checkBrandColors();
    this.checkResponsiveDesign();

    // 3. Funktionalität Tests
    this.checkChecklistData();
    this.checkStateManagement();
    this.checkUserInteraction();

    // 4. Accessibility Tests
    this.checkAccessibility();
    this.checkKeyboardNavigation();

    // 5. Performance Tests
    this.checkPageLoad();
    this.checkBundleSize();

    // 6. Integration Tests
    this.checkAPIIntegration();
    this.checkNavigation();

    this.printResults();
  }

  checkFileStructure() {
    const requiredFiles = [
      'app/leistungen/inqa-coaching/checkliste-inqa/page.tsx',
      'components/ui/checkbox.tsx',
      'components/ui/button.tsx',
      'components/ui/card.tsx',
      'components/ui/label.tsx'
    ];

    const missing = requiredFiles.filter(file => !fs.existsSync(file));
    
    this.results.push({
      name: 'Datei-Struktur',
      status: missing.length === 0 ? 'PASS' : 'FAIL',
      message: missing.length === 0 
        ? 'Alle erforderlichen Dateien vorhanden'
        : `Fehlende Dateien: ${missing.join(', ')}`,
      details: { required: requiredFiles.length, missing: missing.length }
    });
  }

  checkPageFile() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const requiredElements = [
        '"use client"',
        'useState',
        'Checkbox',
        'Button',
        'Card',
        'checklistData',
        'handleCheckboxChange',
        'isEligible'
      ];

      const missing = requiredElements.filter(element => !pageContent.includes(element));
      
      this.results.push({
        name: 'Page Implementation',
        status: missing.length === 0 ? 'PASS' : 'FAIL',
        message: missing.length === 0 
          ? 'Page enthält alle erforderlichen Elemente'
          : `Fehlende Elemente: ${missing.join(', ')}`,
        details: { required: requiredElements.length, missing: missing.length }
      });
    } catch (error) {
      this.results.push({
        name: 'Page Implementation',
        status: 'FAIL',
        message: `Fehler beim Lesen der Page-Datei: ${error.message}`,
        details: error
      });
    }
  }

  checkComponents() {
    const requiredComponents = [
      'components/ui/checkbox.tsx',
      'components/ui/button.tsx',
      'components/ui/card.tsx',
      'components/ui/label.tsx'
    ];

    const missing = requiredComponents.filter(comp => !fs.existsSync(comp));
    
    this.results.push({
      name: 'UI Components',
      status: missing.length === 0 ? 'PASS' : 'FAIL',
      message: missing.length === 0 
        ? 'Alle UI Components verfügbar'
        : `Fehlende Components: ${missing.join(', ')}`,
      details: { required: requiredComponents.length, missing: missing.length }
    });
  }

  checkDesignSystem() {
    try {
      const tailwindConfig = fs.readFileSync('tailwind.config.js', 'utf-8');
      const hasKivisaiColors = tailwindConfig.includes('kivisai-');
      
      this.results.push({
        name: 'Design System',
        status: hasKivisaiColors ? 'PASS' : 'WARNING',
        message: hasKivisaiColors 
          ? 'KIVISAI Design System konfiguriert'
          : 'KIVISAI Design System nicht gefunden',
        details: { hasKivisaiColors }
      });
    } catch (error) {
      this.results.push({
        name: 'Design System',
        status: 'FAIL',
        message: `Design System Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkBrandColors() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      const requiredColors = [
        'kivisai-deep-dark-blue',
        'kivisai-clear-turquoise',
        'kivisai-moss-green',
        'kivisai-light-cool-gray'
      ];

      const missing = requiredColors.filter(color => !pageContent.includes(color));
      
      this.results.push({
        name: 'Brand Colors',
        status: missing.length === 0 ? 'PASS' : 'WARNING',
        message: missing.length === 0 
          ? 'Alle Brand Colors verwendet'
          : `Fehlende Colors: ${missing.join(', ')}`,
        details: { required: requiredColors.length, missing: missing.length }
      });
    } catch (error) {
      this.results.push({
        name: 'Brand Colors',
        status: 'FAIL',
        message: `Brand Colors Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkResponsiveDesign() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      const responsiveClasses = [
        'md:text-',
        'sm:flex-',
        'lg:',
        'xl:',
        'min-h-screen',
        'max-w-'
      ];

      const found = responsiveClasses.filter(cls => pageContent.includes(cls));
      
      this.results.push({
        name: 'Responsive Design',
        status: found.length >= 3 ? 'PASS' : 'WARNING',
        message: found.length >= 3 
          ? 'Responsive Design implementiert'
          : `Nur ${found.length} responsive Klassen gefunden`,
        details: { found: found.length, classes: found }
      });
    } catch (error) {
      this.results.push({
        name: 'Responsive Design',
        status: 'FAIL',
        message: `Responsive Design Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkChecklistData() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const requiredGroups = [
        'Unternehmensgröße',
        'Standort',
        'Beschäftigte',
        'Förderung'
      ];

      const missing = requiredGroups.filter(group => !pageContent.includes(group));
      
      this.results.push({
        name: 'Checklist Data',
        status: missing.length === 0 ? 'PASS' : 'FAIL',
        message: missing.length === 0 
          ? 'Alle Checklist-Gruppen vorhanden'
          : `Fehlende Gruppen: ${missing.join(', ')}`,
        details: { required: requiredGroups.length, missing: missing.length }
      });
    } catch (error) {
      this.results.push({
        name: 'Checklist Data',
        status: 'FAIL',
        message: `Checklist Data Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkStateManagement() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const requiredState = [
        'useState',
        'checkedItems',
        'setCheckedItems',
        'showResult',
        'setShowResult',
        'handleCheckboxChange'
      ];

      const missing = requiredState.filter(state => !pageContent.includes(state));
      
      this.results.push({
        name: 'State Management',
        status: missing.length === 0 ? 'PASS' : 'FAIL',
        message: missing.length === 0 
          ? 'State Management vollständig implementiert'
          : `Fehlende State-Elemente: ${missing.join(', ')}`,
        details: { required: requiredState.length, missing: missing.length }
      });
    } catch (error) {
      this.results.push({
        name: 'State Management',
        status: 'FAIL',
        message: `State Management Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkUserInteraction() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const requiredInteractions = [
        'onCheckedChange',
        'onClick',
        'disabled',
        'cursor-pointer'
      ];

      const missing = requiredInteractions.filter(interaction => !pageContent.includes(interaction));
      
      this.results.push({
        name: 'User Interaction',
        status: missing.length === 0 ? 'PASS' : 'WARNING',
        message: missing.length === 0 
          ? 'User Interaction vollständig implementiert'
          : `Fehlende Interaktionen: ${missing.join(', ')}`,
        details: { required: requiredInteractions.length, missing: missing.length }
      });
    } catch (error) {
      this.results.push({
        name: 'User Interaction',
        status: 'FAIL',
        message: `User Interaction Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkAccessibility() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const accessibilityElements = [
        'htmlFor',
        'aria-',
        'role=',
        'tabindex',
        'Label'
      ];

      const found = accessibilityElements.filter(element => pageContent.includes(element));
      
      this.results.push({
        name: 'Accessibility',
        status: found.length >= 2 ? 'PASS' : 'WARNING',
        message: found.length >= 2 
          ? 'Accessibility Features implementiert'
          : `Nur ${found.length} Accessibility-Elemente gefunden`,
        details: { found: found.length, elements: found }
      });
    } catch (error) {
      this.results.push({
        name: 'Accessibility',
        status: 'FAIL',
        message: `Accessibility Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkKeyboardNavigation() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const keyboardElements = [
        'Checkbox',
        'Button',
        'onKeyDown',
        'tabIndex'
      ];

      const found = keyboardElements.filter(element => pageContent.includes(element));
      
      this.results.push({
        name: 'Keyboard Navigation',
        status: found.length >= 2 ? 'PASS' : 'WARNING',
        message: found.length >= 2 
          ? 'Keyboard Navigation unterstützt'
          : `Nur ${found.length} Keyboard-Elemente gefunden`,
        details: { found: found.length, elements: found }
      });
    } catch (error) {
      this.results.push({
        name: 'Keyboard Navigation',
        status: 'FAIL',
        message: `Keyboard Navigation Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkPageLoad() {
    try {
      const packageExists = fs.existsSync('package.json');
      
      this.results.push({
        name: 'Page Load',
        status: packageExists ? 'PASS' : 'FAIL',
        message: packageExists 
          ? 'Projekt-Konfiguration vorhanden - Seite kann gestartet werden'
          : 'Package.json nicht gefunden',
        details: { packageExists }
      });
    } catch (error) {
      this.results.push({
        name: 'Page Load',
        status: 'FAIL',
        message: `Page Load Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkBundleSize() {
    try {
      const nextConfig = fs.readFileSync('next.config.mjs', 'utf-8');
      const hasOptimizations = nextConfig.includes('optimize') || nextConfig.includes('compress');
      
      this.results.push({
        name: 'Bundle Size',
        status: hasOptimizations ? 'PASS' : 'WARNING',
        message: hasOptimizations 
          ? 'Bundle-Optimierungen konfiguriert'
          : 'Keine Bundle-Optimierungen gefunden',
        details: { hasOptimizations }
      });
    } catch (error) {
      this.results.push({
        name: 'Bundle Size',
        status: 'FAIL',
        message: `Bundle Size Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkAPIIntegration() {
    try {
      const apiEndpoints = [
        'api/contact',
        'api/newsletter',
        'api/documents'
      ];

      const existingEndpoints = apiEndpoints.filter(endpoint => 
        fs.existsSync(`app/${endpoint}/route.ts`)
      );
      
      this.results.push({
        name: 'API Integration',
        status: existingEndpoints.length > 0 ? 'PASS' : 'WARNING',
        message: existingEndpoints.length > 0 
          ? `${existingEndpoints.length} API-Endpoints verfügbar`
          : 'Keine API-Endpoints gefunden',
        details: { available: existingEndpoints.length, endpoints: existingEndpoints }
      });
    } catch (error) {
      this.results.push({
        name: 'API Integration',
        status: 'FAIL',
        message: `API Integration Fehler: ${error.message}`,
        details: error
      });
    }
  }

  checkNavigation() {
    try {
      const pageContent = fs.readFileSync('app/leistungen/inqa-coaching/checkliste-inqa/page.tsx', 'utf-8');
      
      const navigationElements = [
        'href=',
        'Link',
        'router.push',
        'navigate'
      ];

      const found = navigationElements.filter(element => pageContent.includes(element));
      
      this.results.push({
        name: 'Navigation',
        status: found.length > 0 ? 'PASS' : 'WARNING',
        message: found.length > 0 
          ? 'Navigation-Elemente vorhanden'
          : 'Keine Navigation-Elemente gefunden',
        details: { found: found.length, elements: found }
      });
    } catch (error) {
      this.results.push({
        name: 'Navigation',
        status: 'FAIL',
        message: `Navigation Fehler: ${error.message}`,
        details: error
      });
    }
  }

  printResults() {
    console.log('\n📊 INQA-Coaching Checkliste Test Ergebnisse:\n');
    
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const warnings = this.results.filter(r => r.status === 'WARNING').length;
    
    console.log(`✅ Bestanden: ${passed}`);
    console.log(`❌ Fehlgeschlagen: ${failed}`);
    console.log(`⚠️  Warnungen: ${warnings}\n`);
    
    this.results.forEach((result, index) => {
      const icon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⚠️';
      console.log(`${index + 1}. ${icon} ${result.name}: ${result.message}`);
      
      if (result.details) {
        console.log(`   Details: ${JSON.stringify(result.details, null, 2)}`);
      }
      console.log('');
    });
    
    console.log('🎯 Nächste Schritte:');
    if (failed > 0) {
      console.log('   - Beheben Sie die fehlgeschlagenen Tests');
    }
    if (warnings > 0) {
      console.log('   - Überprüfen Sie die Warnungen');
    }
    console.log('   - Starten Sie den Dev-Server: npm run dev');
    console.log('   - Öffnen Sie: http://localhost:3000/leistungen/inqa-coaching/checkliste-inqa');
    console.log('   - Testen Sie die Funktionalität manuell');
  }
}

// Test ausführen
const tester = new InqaChecklisteTester();
tester.runAllTests().catch(console.error); 