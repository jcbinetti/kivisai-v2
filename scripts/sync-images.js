const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const REGISTRY_PATH = path.join(process.cwd(), 'image-registry.json');
const THUMB_WIDTH = 400;
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff'];

async function getAllImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllImageFiles(res);
    } else if (
      entry.isFile() &&
      SUPPORTED_FORMATS.includes(path.extname(entry.name).toLowerCase()) &&
      !entry.name.endsWith('.webp') &&
      !entry.name.endsWith('_thumb.webp')
    ) {
      return [res];
    } else {
      return [];
    }
  }));
  return Array.prototype.concat(...files);
}

async function optimizeImage(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, path.extname(filePath));
  const webpPath = path.join(dir, base + '.webp');
  const thumbPath = path.join(dir, base + '_thumb.webp');
  // WebP
  await sharp(filePath).toFile(webpPath);
  // Thumbnail
  await sharp(filePath).resize({ width: THUMB_WIDTH }).toFile(thumbPath);
  return { webp: webpPath, thumb: thumbPath };
}

async function main() {
  let registry = {};
  if (await fs.pathExists(REGISTRY_PATH)) {
    registry = await fs.readJson(REGISTRY_PATH);
  }
  const allFiles = await getAllImageFiles(IMAGES_DIR);
  const knownFiles = new Set(Object.values(registry).map((img) => img.filename));
  const newFiles = allFiles.filter((f) => !knownFiles.has(path.relative(IMAGES_DIR, f)));
  let added = 0;
  for (const file of newFiles) {
    try {
      const rel = path.relative(IMAGES_DIR, file);
      const { webp, thumb } = await optimizeImage(file);
      const category = rel.split(path.sep)[0] || 'unsorted';
      const tag = path.basename(file, path.extname(file));
      const key = tag.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
      registry[key] = {
        id: key,
        filename: rel,
        path: `/images/${rel.replace(/\\/g, '/')}`,
        alt: tag,
        width: null,
        height: null,
        format: path.extname(file).replace('.', ''),
        category,
        tags: [tag],
        lastModified: new Date().toISOString().slice(0, 10),
        optimized: true,
        source: 'local',
        webp: path.relative(IMAGES_DIR, webp),
        thumbnail: path.relative(IMAGES_DIR, thumb)
      };
      added++;
    } catch (err) {
      console.error(`Fehler bei ${file}:`, err.message);
    }
  }
  await fs.writeJson(REGISTRY_PATH, registry, { spaces: 2 });
  console.log(`✅ ${added} neue Bilder optimiert. Gesamt: ${Object.keys(registry).length}`);
}

main().catch((err) => {
  console.error('Fehler beim Bild-Sync:', err);
  process.exit(1);
}); 