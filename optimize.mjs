import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src/assets');
const files = fs.readdirSync(assetsDir);

for (const file of files) {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const inputPath = path.join(assetsDir, file);
    const parsed = path.parse(inputPath);
    const outputPath = path.join(assetsDir, parsed.name + '.webp');
    
    console.log(`Optimizing ${file}...`);
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
      
    // Delete original to force us to update the imports
    fs.unlinkSync(inputPath);
  }
}
console.log('Done!');
