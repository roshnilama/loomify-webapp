const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const outFile = path.join(process.cwd(), 'src', 'lib', 'image-manifest.json');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

async function main() {
  try {
    const files = await fs.promises.readdir(imagesDir);
    const imgs = files.filter(f => exts.has(path.extname(f).toLowerCase()))
      .sort((a,b) => a.localeCompare(b))
      .slice(0, 20)
      .map(f => ({ src: `/images/${f}`, alt: f.replace(/[._-]+/g, ' ').replace(/\.[^/.]+$/, '') }));

    await fs.promises.mkdir(path.dirname(outFile), { recursive: true });
    await fs.promises.writeFile(outFile, JSON.stringify(imgs, null, 2), 'utf8');
    console.log('Wrote', outFile);
  } catch (err) {
    console.error('Failed to generate image manifest:', err.message || err);
    process.exit(1);
  }
}

main();
