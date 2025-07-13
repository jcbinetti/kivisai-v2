#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

interface OptimizedImage {
  originalPath: string;
  optimizedPath: string;
  thumbnailPath: string;
  fileName: string;
  category: string;
  sizeBefore: number;
  sizeAfter: number;
  thumbnailSize: number;
}

class ImageOptimizer {
  private inputDir = 'public/images';
  private outputDir = 'public/images-optimized';
  private processedImages: OptimizedImage[] = [];

  constructor() {
    this.ensureDirectories();
  }

  private ensureDirectories() {
    // Erstelle Ausgabeverzeichnisse
    const categories = ['general', 'team', 'icons', 'badges', 'logos', 'scenes', 'photos'];
    categories.forEach(category => {
      const dir = path.join(this.outputDir, category);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  private getImageCategory(fileName: string, filePath: string): string {
    // Bestimme Kategorie basierend auf Dateiname und Pfad
    const lowerFileName = fileName.toLowerCase();
    const relativePath = path.relative(this.inputDir, filePath).toLowerCase();

    if (relativePath.includes('1_inqa_coaching') || lowerFileName.includes('inqa')) {
      return 'badges';
    }
    if (relativePath.includes('2_kivi_4_ebene') || lowerFileName.includes('kivi')) {
      return 'scenes';
    }
    if (relativePath.includes('3_label-logo') || lowerFileName.includes('logo')) {
      return 'logos';
    }
    if (relativePath.includes('4_kivisai-navi')) {
      return 'icons';
    }
    if (relativePath.includes('5_kivisai_bilder')) {
      return 'general';
    }
    if (relativePath.includes('6_kivi-szenen')) {
      return 'scenes';
    }
    if (relativePath.includes('7_fotos')) {
      return 'photos';
    }
    if (relativePath.includes('9_network')) {
      return 'general';
    }
    if (lowerFileName.includes('profil') || lowerFileName.includes('binetti')) {
      return 'team';
    }
    if (lowerFileName.includes('badge') || lowerFileName.includes('siegel')) {
      return 'badges';
    }
    if (lowerFileName.includes('logo')) {
      return 'logos';
    }

    return 'general';
  }

  private generateFileName(originalName: string, category: string): string {
    // Entferne Dateiendung und erstelle sauberen Namen
    const baseName = path.basename(originalName, path.extname(originalName));
    const cleanName = baseName
      .replace(/[^a-zA-Z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    return `${category}-${cleanName}`;
  }

  private async optimizeImage(inputPath: string, outputPath: string, thumbnailPath: string): Promise<{ sizeAfter: number; thumbnailSize: number }> {
    try {
      // Optimiere Hauptbild (WebP, 85% Qualität)
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      // Erstelle Thumbnail (400px Breite, WebP, 80% Qualität)
      await sharp(inputPath)
        .resize(400, undefined, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(thumbnailPath);

      // Lese Dateigrößen
      const optimizedStats = fs.statSync(outputPath);
      const thumbnailStats = fs.statSync(thumbnailPath);

      return {
        sizeAfter: optimizedStats.size,
        thumbnailSize: thumbnailStats.size
      };
    } catch (error) {
      console.error(`Fehler beim Optimieren von ${inputPath}:`, error);
      throw error;
    }
  }

  private async findImages(dir: string): Promise<string[]> {
    const images: string[] = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
    
    const scanDirectory = (currentDir: string) => {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          // Nur Original-Bilder, keine bereits optimierten
          if (extensions.includes(ext) && !item.includes('_thumb') && !item.endsWith('.webp')) {
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
    
    // Hier würde die automatische Ersetzung in Code-Dateien erfolgen
    // Für jetzt nur Logging
    for (const processedImage of this.processedImages) {
      const oldPath = path.relative('public', processedImage.originalPath).replace(/\\/g, '/');
      const newPath = path.relative('public', processedImage.optimizedPath).replace(/\\/g, '/');
      
      console.log(`  ${oldPath} → ${newPath}`);
    }
  }

  private createReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalImages: this.processedImages.length,
        categories: {} as Record<string, number>,
        totalSizeBefore: 0,
        totalSizeAfter: 0,
        totalThumbnailSize: 0
      },
      images: this.processedImages
    };

    // Berechne Statistiken
    for (const image of this.processedImages) {
      report.summary.totalSizeBefore += image.sizeBefore;
      report.summary.totalSizeAfter += image.sizeAfter;
      report.summary.totalThumbnailSize += image.thumbnailSize;
      
      if (!report.summary.categories[image.category]) {
        report.summary.categories[image.category] = 0;
      }
      report.summary.categories[image.category]++;
    }

    // Speichere Bericht
    const reportPath = path.join(this.outputDir, 'optimization-report.json');
    fs.writeJsonSync(reportPath, report, { spaces: 2 });
    
    console.log('\n📊 Optimierungsbericht:');
    console.log(`  📁 Kategorien: ${Object.keys(report.summary.categories).join(', ')}`);
    console.log(`  📊 Bilder pro Kategorie:`);
    Object.entries(report.summary.categories).forEach(([category, count]) => {
      console.log(`    ${category}: ${count} Bilder`);
    });
    console.log(`  💾 Gesamtgröße vorher: ${(report.summary.totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  💾 Gesamtgröße nachher: ${(report.summary.totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  💾 Thumbnail-Größe: ${(report.summary.totalThumbnailSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  📉 Einsparung: ${((report.summary.totalSizeBefore - report.summary.totalSizeAfter) / report.summary.totalSizeBefore * 100).toFixed(1)}%`);
  }

  public async optimizeAllImages(): Promise<void> {
    console.log('🚀 Starte Bildoptimierung...');
    console.log(`📁 Eingabe: ${this.inputDir}`);
    console.log(`📁 Ausgabe: ${this.outputDir}`);
    
    // Finde alle Bilder
    const images = await this.findImages(this.inputDir);
    console.log(`\n📊 Gefunden: ${images.length} Bilder`);
    
    if (images.length === 0) {
      console.log('❌ Keine Bilder zum Optimieren gefunden!');
      return;
    }
    
    let processed = 0;
    let errors = 0;
    
    for (const imagePath of images) {
      try {
        console.log(`\n🔄 Verarbeite: ${path.basename(imagePath)}`);
        
        const stats = fs.statSync(imagePath);
        const fileName = path.basename(imagePath);
        const category = this.getImageCategory(fileName, imagePath);
        const newFileName = this.generateFileName(fileName, category);
        
        // Erstelle Ausgabepfade
        const outputPath = path.join(this.outputDir, category, `${newFileName}.webp`);
        const thumbnailPath = path.join(this.outputDir, category, `${newFileName}_thumb.webp`);
        
        // Optimiere das Bild
        const { sizeAfter, thumbnailSize } = await this.optimizeImage(imagePath, outputPath, thumbnailPath);
        
        this.processedImages.push({
          originalPath: imagePath,
          optimizedPath: outputPath,
          thumbnailPath: thumbnailPath,
          fileName: newFileName,
          category,
          sizeBefore: stats.size,
          sizeAfter,
          thumbnailSize
        });
        
        processed++;
        
        const savings = ((stats.size - sizeAfter) / stats.size * 100).toFixed(1);
        console.log(`  ✅ ${category}/${newFileName}.webp (${savings}% kleiner)`);
        console.log(`  📱 Thumbnail: ${category}/${newFileName}_thumb.webp`);
        
      } catch (error) {
        console.error(`  ❌ Fehler bei ${path.basename(imagePath)}:`, error);
        errors++;
      }
    }
    
    console.log('\n📈 Optimierung abgeschlossen:');
    console.log(`  ✅ Erfolgreich: ${processed} Bilder`);
    console.log(`  ❌ Fehler: ${errors} Bilder`);
    
    if (processed > 0) {
      // Erstelle Bericht
      this.createReport();
      
      // Aktualisiere Code-Referenzen
      await this.updateCodeReferences();
    }
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
    console.log('  3. Ersetze Bildreferenzen im Code');
    console.log('  4. Committe die Änderungen');
    
  } catch (error) {
    console.error('❌ Fehler bei der Bildoptimierung:', error);
    process.exit(1);
  }
}

main(); 