import { urlFor } from './sanity-client'

export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export function getImageUrl(image: any): string {
  if (!image || !image.asset) {
    return '/placeholder.svg'
  }

  try {
    return urlFor(image).url()
  } catch (error) {
    console.error('Error generating image URL:', error)
    return '/placeholder.svg'
  }
}

export function getImageAlt(image: any, fallback: string = 'Bild'): string {
  return image?.alt || fallback
}

export function isValidImage(image: any): boolean {
  return !!(image && image.asset && image.asset._ref)
}

export function getImageDimensions(image: any): { width: number; height: number } | null {
  if (!image || !image.asset) return null
  
  try {
    // Try to get dimensions from metadata if available
    if (image.asset.metadata?.dimensions) {
      return {
        width: image.asset.metadata.dimensions.width,
        height: image.asset.metadata.dimensions.height
      }
    }
    
    // Fallback to default dimensions
    return { width: 800, height: 600 }
  } catch (error) {
    console.error('Error getting image dimensions:', error)
    return null
  }
}

export function getOptimizedImageUrl(image: any, width: number, height?: number): string {
  if (!image || !image.asset) return '/placeholder.svg'
  try {
    return urlFor(image).url()
  } catch {
    return '/placeholder.svg'
  }
}

export function getThumbnailUrl(image: any, size: number = 150): string {
  if (!image || !image.asset) return '/placeholder.svg'
  try {
    return urlFor(image).url()
  } catch {
    return '/placeholder.svg'
  }
} 