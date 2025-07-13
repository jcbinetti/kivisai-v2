import { NextResponse } from 'next/server';
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

// GET endpoint für Health Check und Status
export async function GET() {
  try {
    const registryExists = await fs.pathExists(REGISTRY_PATH);
    let registry: any[] = [];
    
    if (registryExists) {
      registry = await fs.readJson(REGISTRY_PATH);
    }

    const imagesDirExists = await fs.pathExists(IMAGES_DIR);
    
    return NextResponse.json({
      status: "healthy",
      service: "image-sync",
      timestamp: new Date().toISOString(),
      registry: {
        exists: registryExists,
        count: registry.length
      },
      imagesDir: {
        exists: imagesDirExists,
        path: IMAGES_DIR
      },
      methods: {
        GET: "Health check and status",
        POST: "Sync and optimize images"
      }
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      service: "image-sync",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}

export async function POST() {
  // 1. Registry laden oder leeres Array
  let registry: any[] = [];
  if (await fs.pathExists(REGISTRY_PATH)) {
    const loaded = await fs.readJson(REGISTRY_PATH);
    // Konvertiere Objekt zu Array falls nötig
    if (Array.isArray(loaded)) {
      registry = loaded;
    } else if (typeof loaded === 'object' && loaded !== null) {
      // Konvertiere Objekt zu Array
      registry = Object.values(loaded).map((item: any) => ({
        filename: item.filename || item.path?.replace('/images/', ''),
        webp: item.filename?.replace(/\.[^/.]+$/, '.webp'),
        thumbnail: item.filename?.replace(/\.[^/.]+$/, '_thumb.webp'),
        tags: item.tags || [],
        category: item.category || 'unsorted'
      }));
    }
  }
  
  // 2. Alle Bilddateien finden
  const allFiles = await getAllImageFiles(IMAGES_DIR);
  
  // 3. Neue Bilder filtern
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
  
  // 4. Registry als Array speichern
  await fs.writeJson(REGISTRY_PATH, registry, { spaces: 2 });
  
  return NextResponse.json({ 
    added, 
    total: registry.length,
    message: `Successfully synced ${added} new images. Total: ${registry.length}`
  });
} 