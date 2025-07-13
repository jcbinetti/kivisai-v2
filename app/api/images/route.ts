import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllSanityImages, 
  getSanityImagesByCategory, 
  searchSanityImages, 
  getSanityImageStats,
  updateSanityImageMetadata,
  deleteSanityImage,
  getSanityImagesWithPagination
} from '@/lib/sanity-client'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const stats = searchParams.get('stats')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    if (stats === 'true') {
      const imageStats = await getSanityImageStats()
      return NextResponse.json(imageStats)
    }

    if (category) {
      const images = await getSanityImagesByCategory(category)
      return NextResponse.json(images)
    }

    if (search) {
      const images = await searchSanityImages(search)
      return NextResponse.json(images)
    }

    const imagesData = await getSanityImagesWithPagination(page, limit)
    return NextResponse.json(imagesData)
  } catch (error) {
    console.error('Error fetching images:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { imageId, updates } = body

    if (!imageId || !updates) {
      return NextResponse.json(
        { error: 'Missing imageId or updates' },
        { status: 400 }
      )
    }

    const success = await updateSanityImageMetadata(imageId, updates)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Failed to update image metadata' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error updating image metadata:', error)
    return NextResponse.json(
      { error: 'Failed to update image metadata' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const imageId = searchParams.get('id')

    if (!imageId) {
      return NextResponse.json(
        { error: 'Missing image ID' },
        { status: 400 }
      )
    }

    const success = await deleteSanityImage(imageId)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Failed to delete image' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error deleting image:', error)
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    )
  }
} 