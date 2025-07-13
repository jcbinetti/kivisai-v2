import fs from 'fs-extra';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const REGISTRY_PATH = path.join(process.cwd(), 'image-registry.json');
const THUMB_WIDTH = 400;

async function getAllImageFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllImageFiles(res);
    } else if (entry.isFile() && !entry.name.endsWith('.webp') && !entry.name.endsWith('_thumb.webp')) {
      return [res];
    } else {
      return [];
    }
  }));
  return Array.prototype.concat(...files);
}

async function optimizeImage(filePath: string) {
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
  let registry: any[] = [];
  if (await fs.pathExists(REGISTRY_PATH)) {
    registry = await fs.readJson(REGISTRY_PATH);
  }
  const allFiles = await getAllImageFiles(IMAGES_DIR);
  const knownFiles = new Set(registry.map((img) => img.filename));
  const newFiles = allFiles.filter((f) => !knownFiles.has(path.relative(IMAGES_DIR, f)));
  let added = 0;
  for (const file of newFiles) {
    const rel = path.relative(IMAGES_DIR, file);
    const { webp, thumb } = await optimizeImage(file);
    const category = rel.split(path.sep)[0] || 'unsorted';
    const tag = path.basename(file, path.extname(file));
    registry.push({
      filename: rel,
      webp: path.relative(IMAGES_DIR, webp),
      thumbnail: path.relative(IMAGES_DIR, thumb),
      tags: [tag],
      category
    });
    added++;
  }
  await fs.writeJson(REGISTRY_PATH, registry, { spaces: 2 });
  console.log(`✅ ${added} neue Bilder optimiert. Gesamt: ${registry.length}`);
}

main().catch((err) => {
  console.error('Fehler beim Bild-Sync:', err);
  process.exit(1);
}); 