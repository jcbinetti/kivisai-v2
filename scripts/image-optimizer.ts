#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface ImageInfo {
  originalPath: string;
  fileName: string;
  extension: string;
  size: number;
  category?: string;
}

interface OptimizedImage {
  originalPath: string;
  optimizedPath: string;
  newFileName: string;
  category: string;
  sizeBefore: number;
  sizeAfter: number;
}

class ImageOptimizer {
  private inputDir = 'public/images';
  private outputDir = 'public/images-optimized';
  private archiveDir = '../kivisai-backup/images';
  private processedImages: OptimizedImage[] = [];

  constructor() {
    this.ensureDirectories();
  }

  private ensureDirectories() {
    const dirs = [this.outputDir, this.archiveDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  private getImageCategory(fileName: string): string {
    const lowerName = fileName.toLowerCase();
    
    // Kategorien basierend auf Dateinamen
    if (lowerName.includes('hero') || lowerName.includes('banner')) return 'hero';
    if (lowerName.includes('team') || lowerName.includes('person')) return 'team';
    if (lowerName.includes('service') || lowerName.includes('leistung')) return 'services';
    if (lowerName.includes('badge') || lowerName.includes('logo')) return 'badges';
    if (lowerName.includes('icon') || lowerName.includes('symbol')) return 'icons';
    if (lowerName.includes('diagram') || lowerName.includes('chart')) return 'diagrams';
    if (lowerName.includes('screenshot') || lowerName.includes('demo')) return 'screenshots';
    if (lowerName.includes('background') || lowerName.includes('bg')) return 'backgrounds';
    
    // Standard-Kategorie
    return 'general';
  }

  private generateNewFileName(originalName: string, category: string): string {
    // Entferne Dateiendung
    const nameWithoutExt = path.parse(originalName).name;
    
    // Bereinige den Namen
    let cleanName = nameWithoutExt
      .replace(/[^a-zA-Z0-9äöüßÄÖÜ\s-]/g, '') // Entferne Sonderzeichen
      .replace(/\s+/g, '-') // Ersetze Leerzeichen durch Bindestriche
      .toLowerCase();
    
    // Füge Kategorie-Präfix hinzu
    const prefix = category === 'general' ? '' : `${category}-`;
    
    return `${prefix}${cleanName}`;
  }

  private async optimizeImage(inputPath: string, outputPath: string): Promise<number> {
    try {
      // Verwende Squoosh CLI für Optimierung
      const command = `npx @squoosh/cli --webp auto -d "${path.dirname(outputPath)}" "${inputPath}"`;
      execSync(command, { stdio: 'pipe' });
      
      // Lese die optimierte Datei
      const optimizedPath = outputPath.replace(/\.[^.]+$/, '.webp');
      if (fs.existsSync(optimizedPath)) {
        const stats = fs.statSync(optimizedPath);
        return stats.size;
      }
    } catch (error) {
      console.error(`Fehler beim Optimieren von ${inputPath}:`, error);
    }
    
    return 0;
  }

  private async processImage(filePath: string): Promise<OptimizedImage | null> {
    const stats = fs.statSync(filePath);
    const fileName = path.basename(filePath);
    const category = this.getImageCategory(fileName);
    const newFileName = this.generateNewFileName(fileName, category);
    
    // Erstelle Ausgabeverzeichnis für Kategorie
    const categoryDir = path.join(this.outputDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
    
    const outputPath = path.join(categoryDir, `${newFileName}.webp`);
    
    // Optimiere das Bild
    const sizeAfter = await this.optimizeImage(filePath, outputPath);
    
    if (sizeAfter > 0) {
      return {
        originalPath: filePath,
        optimizedPath: outputPath,
        newFileName: `${newFileName}.webp`,
        category,
        sizeBefore: stats.size,
        sizeAfter
      };
    }
    
    return null;
  }

  private async findImages(dir: string): Promise<string[]> {
    const images: string[] = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
    
    const scanDirectory = (currentDir: string) => {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (extensions.includes(ext)) {
            images.push(fullPath);
          }
        }
      }
    };
    
    scanDirectory(dir);
    return images;
  }

  private async updateCodeReferences() {
    console.log('\n🔍 Suche nach Bildreferenzen im Code...');
    
    // Suche nach Bildreferenzen in allen Dateien
    const codeFiles = [
      'app/**/*.tsx',
      'app/**/*.ts',
      'components/**/*.tsx',
      'components/**/*.ts',
      'lib/**/*.ts'
    ];
    
    for (const processedImage of this.processedImages) {
      const oldPath = path.relative('public', processedImage.originalPath).replace(/\\/g, '/');
      const newPath = path.relative('public', processedImage.optimizedPath).replace(/\\/g, '/');
      
      console.log(`  ${oldPath} → ${newPath}`);
      
      // Hier würde die automatische Ersetzung in Code-Dateien erfolgen
      // (Implementierung für Sicherheit vereinfacht)
    }
  }

  public async optimizeAllImages(): Promise<void> {
    console.log('🚀 Starte Bildoptimierung...');
    console.log(`📁 Eingabe: ${this.inputDir}`);
    console.log(`📁 Ausgabe: ${this.outputDir}`);
    console.log(`📁 Archiv: ${this.archiveDir}`);
    
    // Finde alle Bilder
    const images = await this.findImages(this.inputDir);
    console.log(`\n📊 Gefunden: ${images.length} Bilder`);
    
    let processed = 0;
    let totalSizeBefore = 0;
    let totalSizeAfter = 0;
    
    for (const imagePath of images) {
      console.log(`\n🔄 Verarbeite: ${path.basename(imagePath)}`);
      
      const result = await this.processImage(imagePath);
      if (result) {
        this.processedImages.push(result);
        totalSizeBefore += result.sizeBefore;
        totalSizeAfter += result.sizeAfter;
        processed++;
        
        const savings = ((result.sizeBefore - result.sizeAfter) / result.sizeBefore * 100).toFixed(1);
        console.log(`  ✅ ${result.category}/${result.newFileName} (${savings}% kleiner)`);
      }
    }
    
    console.log('\n📈 Optimierung abgeschlossen:');
    console.log(`  📊 Verarbeitet: ${processed}/${images.length} Bilder`);
    console.log(`  💾 Größe vorher: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  💾 Größe nachher: ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  📉 Einsparung: ${((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(1)}%`);
    
    // Erstelle Bericht
    this.createReport();
    
    // Aktualisiere Code-Referenzen
    await this.updateCodeReferences();
  }

  private createReport(): void {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalImages: this.processedImages.length,
        categories: this.processedImages.reduce((acc, img) => {
          acc[img.category] = (acc[img.category] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        totalSizeBefore: this.processedImages.reduce((sum, img) => sum + img.sizeBefore, 0),
        totalSizeAfter: this.processedImages.reduce((sum, img) => sum + img.sizeAfter, 0)
      },
      images: this.processedImages.map(img => ({
        original: path.relative('public', img.originalPath),
        optimized: path.relative('public', img.optimizedPath),
        category: img.category,
        sizeBefore: img.sizeBefore,
        sizeAfter: img.sizeAfter,
        savings: ((img.sizeBefore - img.sizeAfter) / img.sizeBefore * 100).toFixed(1) + '%'
      }))
    };
    
    fs.writeFileSync(
      path.join(this.outputDir, 'optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('\n📋 Bericht erstellt: optimization-report.json');
  }
}

// Hauptausführung
async function main() {
  try {
    const optimizer = new ImageOptimizer();
    await optimizer.optimizeAllImages();
    
    console.log('\n🎉 Bildoptimierung erfolgreich abgeschlossen!');
    console.log('\n📋 Nächste Schritte:');
    console.log('  1. Prüfe die optimierten Bilder in public/images-optimized/');
    console.log('  2. Teste die Website lokal');
    console.log('  3. Ersetze public/images/ mit den optimierten Bildern');
    console.log('  4. Committe die Änderungen');
    
  } catch (error) {
    console.error('❌ Fehler bei der Bildoptimierung:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 