import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'image-registry.json');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

export async function POST(request: Request) {
  try {
    const { imageId, filename } = await request.json();

    if (!imageId && !filename) {
      return NextResponse.json({ 
        error: 'imageId oder filename ist erforderlich' 
      }, { status: 400 });
    }

    // Registry laden
    let registry: any[] = [];
    if (await fs.pathExists(REGISTRY_PATH)) {
      registry = await fs.readJson(REGISTRY_PATH);
    }

    // Bild in Registry finden
    const imageIndex = registry.findIndex(img => 
      img.id === imageId || img.filename === filename
    );

    if (imageIndex === -1) {
      return NextResponse.json({ 
        error: 'Bild nicht in Registry gefunden' 
      }, { status: 404 });
    }

    const image = registry[imageIndex];

    // Dateien löschen
    const filesToDelete = [
      path.join(IMAGES_DIR, image.filename),
      path.join(IMAGES_DIR, image.webp || ''),
      path.join(IMAGES_DIR, image.thumbnail || '')
    ].filter(file => file && file !== path.join(IMAGES_DIR, ''));

    for (const file of filesToDelete) {
      if (await fs.pathExists(file)) {
        await fs.remove(file);
        console.log(`Gelöscht: ${file}`);
      }
    }

    // Aus Registry entfernen
    registry.splice(imageIndex, 1);
    await fs.writeJson(REGISTRY_PATH, registry, { spaces: 2 });

    return NextResponse.json({
      success: true,
      message: 'Bild erfolgreich gelöscht',
      deletedFiles: filesToDelete,
      remainingImages: registry.length
    });

  } catch (error) {
    console.error('Fehler beim Löschen des Bildes:', error);
    return NextResponse.json({
      error: 'Fehler beim Löschen des Bildes',
      details: error instanceof Error ? error.message : 'Unbekannter Fehler'
    }, { status: 500 });
  }
}

// GET endpoint für Health Check
export async function GET() {
  try {
    const registryExists = await fs.pathExists(REGISTRY_PATH);
    let registry: any[] = [];
    
    if (registryExists) {
      registry = await fs.readJson(REGISTRY_PATH);
    }

    return NextResponse.json({
      status: "healthy",
      service: "image-delete",
      timestamp: new Date().toISOString(),
      registry: {
        exists: registryExists,
        count: registry.length
      },
      methods: {
        GET: "Health check",
        POST: "Delete image from registry and filesystem"
      }
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      service: "image-delete",
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
} 