import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../public/images/hero-port-background.jpg');
const outputPath = join(__dirname, '../public/images/hero-port-background-optimized.jpg');

async function compressImage() {
  try {
    const inputStats = statSync(inputPath);
    console.log(`Original size: ${(inputStats.size / 1024).toFixed(2)} KB`);

    // Compress to high quality JPEG under 100KB
    await sharp(inputPath)
      .resize(1920, 960, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 75,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    const outputStats = statSync(outputPath);
    console.log(`Compressed size: ${(outputStats.size / 1024).toFixed(2)} KB`);
    console.log(`Reduction: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%`);

    // If still over 100KB, compress more aggressively
    if (outputStats.size > 100 * 1024) {
      console.log('Still over 100KB, compressing more...');
      await sharp(inputPath)
        .resize(1600, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 60,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);

      const finalStats = statSync(outputPath);
      console.log(`Final size: ${(finalStats.size / 1024).toFixed(2)} KB`);
    }

    console.log('Image compressed successfully!');
    console.log(`Output: ${outputPath}`);
  } catch (error) {
    console.error('Error compressing image:', error);
    process.exit(1);
  }
}

compressImage();
