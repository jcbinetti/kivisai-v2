import { NextResponse } from 'next/server'
import { ImageManager } from '@/lib/image-manager'

export async function GET() {
  try {
    const imageManager = ImageManager.getInstance()
    const images = imageManager.getAllLocalImages()
    
    // Access the registry directly
    const registry = (imageManager as any).registry || {}
    
    return NextResponse.json({
      success: true,
      data: {
        totalKeys: Object.keys(registry).length,
        keys: Object.keys(registry),
        registryData: registry,
        allImages: images
      }
    })
  } catch (error) {
    console.error('Error loading registry:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to load registry'
    }, { status: 500 })
  }
} 