#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

class ImageOptimizer {
  constructor() {
    this.inputDir = 'public/images';
    this.outputDir = 'public/images-optimized';
    this.processedImages = [];
    this.ensureDirectories();
  }

  ensureDirectories() {
    // Erstelle das Hauptausgabeverzeichnis
    fs.ensureDirSync(this.outputDir);
  }

  async processImage(filePath, relativePath) {
    try {
      const fileName = path.basename(filePath, path.extname(filePath));
      const ext = path.extname(filePath).toLowerCase();
      
      // Überspringe bereits verarbeitete Dateien
      if (ext === '.webp' || ext === '.svg') {
        console.log(`⏭️  Überspringe bereits optimierte Datei: ${relativePath}`);
        return;
      }

      // Bestimme den Ausgabeordner basierend auf der bestehenden Struktur
      const outputSubDir = path.dirname(relativePath);
      const outputDir = path.join(this.outputDir, outputSubDir);
      fs.ensureDirSync(outputDir);

      const outputPath = path.join(outputDir, `${fileName}.webp`);
      const thumbnailPath = path.join(outputDir, `${fileName}_thumb.webp`);

      // Prüfe ob bereits optimiert
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Bereits optimiert: ${relativePath}`);
        return;
      }

      console.log(`🔄 Verarbeite: ${relativePath}`);

      // Lade das Bild
      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Erstelle optimierte Version
      const optimizedBuffer = await image
        .webp({ 
          quality: 80, 
          effort: 6,
          nearLossless: true
        })
        .toBuffer();

      // Erstelle Thumbnail
      const thumbnailBuffer = await image
        .resize(300, 300, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 70, 
          effort: 4 
        })
        .toBuffer();

      // Speichere Dateien
      await fs.writeFile(outputPath, optimizedBuffer);
      await fs.writeFile(thumbnailPath, thumbnailBuffer);

      // Sammle Statistiken
      const originalStats = fs.statSync(filePath);
      const optimizedStats = fs.statSync(outputPath);
      const thumbnailStats = fs.statSync(thumbnailPath);

      this.processedImages.push({
        originalPath: relativePath,
        optimizedPath: path.join(outputSubDir, `${fileName}.webp`),
        thumbnailPath: path.join(outputSubDir, `${fileName}_thumb.webp`),
        fileName: fileName,
        category: outputSubDir,
        sizeBefore: originalStats.size,
        sizeAfter: optimizedStats.size,
        thumbnailSize: thumbnailStats.size
      });

      console.log(`✅ Optimiert: ${relativePath} → ${path.join(outputSubDir, `${fileName}.webp`)}`);

    } catch (error) {
      console.error(`❌ Fehler bei ${filePath}:`, error.message);
    }
  }

  async processDirectory(dirPath, relativePath = '') {
    const items = await fs.readdir(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const itemRelativePath = path.join(relativePath, item);
      const stats = await fs.stat(fullPath);

      if (stats.isDirectory()) {
        // Rekursiv Unterordner verarbeiten
        await this.processDirectory(fullPath, itemRelativePath);
      } else if (stats.isFile()) {
        // Prüfe ob es ein Bild ist
        const ext = path.extname(item).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(ext)) {
          await this.processImage(fullPath, itemRelativePath);
        }
      }
    }
  }

  generateReport() {
    const totalOriginalSize = this.processedImages.reduce((sum, img) => sum + img.sizeBefore, 0);
    const totalOptimizedSize = this.processedImages.reduce((sum, img) => sum + img.sizeAfter, 0);
    const totalThumbnailSize = this.processedImages.reduce((sum, img) => sum + img.thumbnailSize, 0);
    const savings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalImages: this.processedImages.length,
        totalOriginalSize: totalOriginalSize,
        totalOptimizedSize: totalOptimizedSize,
        totalThumbnailSize: totalThumbnailSize,
        savingsPercent: savings,
        savingsMB: ((totalOriginalSize - totalOptimizedSize) / (1024 * 1024)).toFixed(2)
      },
      images: this.processedImages,
      categories: this.processedImages.reduce((acc, img) => {
        acc[img.category] = (acc[img.category] || 0) + 1;
        return acc;
      }, {})
    };

    fs.writeFileSync(
      path.join(this.outputDir, 'optimization-report.json'), 
      JSON.stringify(report, null, 2)
    );

    return report;
  }

  async run() {
    console.log('🚀 Starte Bildoptimierung...');
    console.log(`📁 Eingabe: ${this.inputDir}`);
    console.log(`📁 Ausgabe: ${this.outputDir}`);
    console.log('');

    try {
      await this.processDirectory(this.inputDir);
      
      if (this.processedImages.length === 0) {
        console.log('ℹ️  Keine neuen Bilder zum Optimieren gefunden.');
        return;
      }

      const report = this.generateReport();
      
      console.log('');
      console.log('📊 Optimierung abgeschlossen!');
      console.log(`📈 ${report.summary.totalImages} Bilder verarbeitet`);
      console.log(`💾 ${report.summary.savingsPercent}% Speicherplatz gespart (${report.summary.savingsMB} MB)`);
      console.log(`📁 Kategorien: ${Object.keys(report.categories).length}`);
      console.log('');
      console.log('📋 Kategorien:');
      Object.entries(report.categories).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} Bilder`);
      });
      console.log('');
      console.log(`📄 Detaillierter Bericht: ${this.outputDir}/optimization-report.json`);

    } catch (error) {
      console.error('❌ Fehler bei der Optimierung:', error);
    }
  }
}

// Skript ausführen
const optimizer = new ImageOptimizer();
optimizer.run(); 