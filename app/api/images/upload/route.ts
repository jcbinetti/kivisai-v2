import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'
import { ImageManager } from '@/lib/image-manager'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'Keine Datei gefunden' },
        { status: 400 }
      )
    }

    // Validierung
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Nur Bilddateien sind erlaubt' },
        { status: 400 }
      )
    }

    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Datei ist zu groß (max. 10MB)' },
        { status: 400 }
      )
    }

    // Dateiname generieren
    const timestamp = Date.now()
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const baseName = originalName.split('.')[0]
    const extension = originalName.split('.').pop()?.toLowerCase()
    
    // Verzeichnisse erstellen - direkt in public/images
    const imagesDir = join(process.cwd(), 'public', 'images')
    const thumbnailsDir = join(imagesDir, 'thumbnails')
    const optimizedDir = join(imagesDir, 'optimized')
    
    await mkdir(imagesDir, { recursive: true })
    await mkdir(thumbnailsDir, { recursive: true })
    await mkdir(optimizedDir, { recursive: true })

    // Original-Datei speichern
    const originalPath = join(imagesDir, `${timestamp}_${originalName}`)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(originalPath, buffer)

    // Bildoptimierung mit Sharp
    const image = sharp(buffer)
    const metadata = await image.metadata()

    // Optimierte Version (WebP)
    const optimizedName = `${timestamp}_${baseName}_optimized.webp`
    const optimizedPath = join(optimizedDir, optimizedName)
    await image
      .webp({ quality: 85, effort: 6 })
      .resize(metadata.width && metadata.width > 1920 ? 1920 : undefined, undefined, {
        withoutEnlargement: true
      })
      .toFile(optimizedPath)

    // Thumbnail (300x300)
    const thumbnailName = `${timestamp}_${baseName}_thumb.webp`
    const thumbnailPath = join(thumbnailsDir, thumbnailName)
    await sharp(buffer)
      .webp({ quality: 80 })
      .resize(300, 300, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(thumbnailPath)

    // Medium Version (800px)
    const mediumName = `${timestamp}_${baseName}_medium.webp`
    const mediumPath = join(optimizedDir, mediumName)
    await sharp(buffer)
      .webp({ quality: 85 })
      .resize(800, undefined, {
        withoutEnlargement: true
      })
      .toFile(mediumPath)

    // Response-Daten - Pfade anpassen
    const imageData = {
      id: timestamp.toString(),
      originalName: originalName,
      filename: optimizedName,
      originalPath: `/images/${timestamp}_${originalName}`,
      optimizedPath: `/images/optimized/${optimizedName}`,
      thumbnailPath: `/images/thumbnails/${thumbnailName}`,
      mediumPath: `/images/optimized/${mediumName}`,
      size: file.size,
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      uploadedAt: new Date().toISOString(),
      source: 'local'
    }

    // Bild im ImageManager registrieren
    const imageManager = ImageManager.getInstance()
    await imageManager.registerLocalUpload(imageData)

    return NextResponse.json({
      success: true,
      image: imageData,
      message: 'Bild erfolgreich hochgeladen und optimiert'
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload fehlgeschlagen' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Upload endpoint ready' })
} 