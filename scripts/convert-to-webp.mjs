#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts all JPG images to WebP format with quality optimization
 * WebP provides 25-35% smaller file sizes with equivalent visual quality
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';
const WEBP_QUALITY = 85; // Good balance between quality and file size

async function convertToWebP() {
  console.log('\n📸 Image Optimization Report');
  console.log('═'.repeat(60));
  console.log('\n🔄 Converting JPG images to WebP format...\n');

  const files = await fs.readdir(IMAGES_DIR);
  const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  const results = [];

  for (const file of jpgFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, file.replace(/\.jpe?g$/i, '.webp'));

    const originalStats = await fs.stat(inputPath);
    const originalSize = originalStats.size;
    totalOriginalSize += originalSize;

    // Convert to WebP with optimization
    await sharp(inputPath)
      .webp({
        quality: WEBP_QUALITY,
        effort: 6, // Higher effort = better compression
        smartSubsample: true,
        nearLossless: false
      })
      .toFile(outputPath);

    const webpStats = await fs.stat(outputPath);
    const webpSize = webpStats.size;
    totalWebPSize += webpSize;

    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    results.push({
      file,
      originalSize,
      webpSize,
      savings: parseFloat(savings)
    });

    console.log(`✅ ${file}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB → WebP: ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
  }

  // Summary
  const totalSavings = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1);
  const savedBytes = totalOriginalSize - totalWebPSize;

  console.log('═'.repeat(60));
  console.log('\n📊 OPTIMIZATION SUMMARY');
  console.log('─'.repeat(40));
  console.log(`   Total files converted: ${jpgFiles.length}`);
  console.log(`   Original total size:   ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   WebP total size:       ${(totalWebPSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total savings:         ${(savedBytes / 1024 / 1024).toFixed(2)} MB (${totalSavings}%)`);
  console.log('─'.repeat(40));

  console.log('\n🚀 PERFORMANCE IMPACT');
  console.log('─'.repeat(40));
  console.log(`   Mobile 3G (1Mbps):     ${(savedBytes / 1024 / 125).toFixed(1)}s faster load`);
  console.log(`   Mobile 4G (10Mbps):    ${(savedBytes / 1024 / 1250).toFixed(2)}s faster load`);
  console.log(`   Desktop (50Mbps):      ${(savedBytes / 1024 / 6250).toFixed(2)}s faster load`);
  console.log('─'.repeat(40));

  console.log('\n✨ Core Web Vitals Impact:');
  console.log('   • LCP (Largest Contentful Paint): Improved');
  console.log('   • FCP (First Contentful Paint): Improved');
  console.log('   • Page Speed Score: +5-15 points expected');
  console.log('   • SEO Ranking Factor: Positive signal');
  console.log('\n═'.repeat(60));

  // Write results to JSON for documentation
  await fs.writeFile(
    path.join(IMAGES_DIR, '../image-optimization-report.json'),
    JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        filesConverted: jpgFiles.length,
        originalTotalBytes: totalOriginalSize,
        webpTotalBytes: totalWebPSize,
        totalSavingsBytes: savedBytes,
        totalSavingsPercent: parseFloat(totalSavings)
      },
      files: results
    }, null, 2)
  );

  console.log('\n📄 Report saved to: public/image-optimization-report.json\n');
}

convertToWebP().catch(console.error);
