#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ImageInfo {
  path: string;
  size: number;
  type: string;
  isOptimized: boolean;
}

interface PerformanceReport {
  totalImages: number;
  optimizedImages: number;
  nonOptimizedImages: number;
  totalSize: number;
  optimizedSize: number;
  nonOptimizedSize: number;
  savings: number;
  recommendations: string[];
}

async function auditImages(): Promise<PerformanceReport> {
  const report: PerformanceReport = {
    totalImages: 0,
    optimizedImages: 0,
    nonOptimizedImages: 0,
    totalSize: 0,
    optimizedSize: 0,
    nonOptimizedSize: 0,
    savings: 0,
    recommendations: []
  };

  // Find all image files
  const imageFiles = await glob('public/images/**/*.{png,jpg,jpeg,webp}', { nodir: true });
  
  for (const file of imageFiles) {
    const stats = fs.statSync(file);
    const size = stats.size;
    const ext = path.extname(file).toLowerCase();
    const isOptimized = ext === '.webp';
    
    report.totalImages++;
    report.totalSize += size;
    
    if (isOptimized) {
      report.optimizedImages++;
      report.optimizedSize += size;
    } else {
      report.nonOptimizedImages++;
      report.nonOptimizedSize += size;
    }
  }

  // Calculate savings
  report.savings = report.nonOptimizedSize - report.optimizedSize;

  // Generate recommendations
  if (report.nonOptimizedImages > 0) {
    report.recommendations.push(`Convert ${report.nonOptimizedImages} non-optimized images to WebP format`);
  }

  if (report.totalSize > 10 * 1024 * 1024) { // 10MB
    report.recommendations.push('Total image size is large. Consider further compression or lazy loading');
  }

  return report;
}

async function auditCodeFiles(): Promise<string[]> {
  const recommendations: string[] = [];
  
  // Check for large imports
  const tsxFiles = await glob('app/**/*.tsx', { nodir: true });
  
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Check for large component imports
    if (content.includes('import * as') || content.includes('import {') && content.split('import {')[0].length > 500) {
      recommendations.push(`Consider splitting imports in ${file}`);
    }
    
    // Check for inline styles
    if (content.includes('style={{') && content.split('style={{').length > 5) {
      recommendations.push(`Consider moving inline styles to CSS classes in ${file}`);
    }
  }

  return recommendations;
}

async function main() {
  console.log('🔍 KIVISAI Performance Audit\n');
  
  // Audit images
  const imageReport = await auditImages();
  console.log('📊 Image Analysis:');
  console.log(`   Total Images: ${imageReport.totalImages}`);
  console.log(`   Optimized (WebP): ${imageReport.optimizedImages}`);
  console.log(`   Non-optimized: ${imageReport.nonOptimizedImages}`);
  console.log(`   Total Size: ${(imageReport.totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimized Size: ${(imageReport.optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Non-optimized Size: ${(imageReport.nonOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Potential Savings: ${(imageReport.savings / 1024 / 1024).toFixed(2)} MB`);
  
  // Audit code
  const codeRecommendations = await auditCodeFiles();
  
  console.log('\n💡 Recommendations:');
  imageReport.recommendations.forEach(rec => console.log(`   • ${rec}`));
  codeRecommendations.forEach(rec => console.log(`   • ${rec}`));
  
  // Overall performance score
  const optimizationRatio = imageReport.optimizedImages / imageReport.totalImages;
  const performanceScore = Math.round(optimizationRatio * 100);
  
  console.log(`\n📈 Performance Score: ${performanceScore}/100`);
  
  if (performanceScore < 80) {
    console.log('⚠️  Performance needs improvement. Focus on image optimization first.');
  } else if (performanceScore < 95) {
    console.log('✅ Good performance. Consider minor optimizations.');
  } else {
    console.log('🚀 Excellent performance!');
  }
}

main().catch(console.error); 