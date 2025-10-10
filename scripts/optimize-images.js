const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const files = fs.readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
);

async function optimizeImages() {
  console.log('Starting image optimization...\n');
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.toLowerCase());
    
    try {
      const stats = fs.statSync(inputPath);
      const sizeBefore = (stats.size / 1024).toFixed(2);
      
      await sharp(inputPath)
        .resize(1200, null, { // Max width 1200px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 80, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(outputPath);
      
      const statsAfter = fs.statSync(outputPath);
      const sizeAfter = (statsAfter.size / 1024).toFixed(2);
      const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);
      
      console.log(`✓ ${file}`);
      console.log(`  ${sizeBefore}KB → ${sizeAfter}KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
  console.log(`Optimized images saved to: ${outputDir}`);
}

optimizeImages();
