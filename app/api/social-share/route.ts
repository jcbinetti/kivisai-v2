import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostBySlug } from '@/lib/sanity-client'

export async function POST(request: NextRequest) {
  try {
    const { platform, slug, customText, hashtags } = await request.json()

    // Get article data from Sanity
    const article = await getBlogPostBySlug(slug)
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    // Prepare share content
    const shareText = customText || article.title
    const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/wissens-hub/blog/${slug}`
    const hashtagString = hashtags?.length ? hashtags.join(' ') : ''

    // Platform-specific share URLs
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(articleUrl)}${hashtagString ? `&hashtags=${encodeURIComponent(hashtagString)}` : ''}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(articleUrl)}`, // Instagram doesn't support direct sharing via URL
    }

    const shareUrl = shareUrls[platform as keyof typeof shareUrls]
    
    if (!shareUrl) {
      return NextResponse.json({ error: 'Unsupported platform' }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      shareUrl,
      platform,
      shareText,
      articleUrl,
      hashtags: hashtagString,
    })

  } catch (error) {
    console.error('Social share error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const platform = searchParams.get('platform')
  const slug = searchParams.get('slug')
  const customText = searchParams.get('customText')
  const hashtags = searchParams.get('hashtags')?.split(',')

  if (!platform || !slug) {
    return NextResponse.json({ error: 'Missing platform or slug' }, { status: 400 })
  }

  try {
    const article = await getBlogPostBySlug(slug)
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    const shareText = customText || article.title
    const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/wissens-hub/blog/${slug}`
    const hashtagString = hashtags?.length ? hashtags.join(' ') : ''

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(articleUrl)}${hashtagString ? `&hashtags=${encodeURIComponent(hashtagString)}` : ''}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(articleUrl)}`,
    }

    const shareUrl = shareUrls[platform as keyof typeof shareUrls]
    
    if (!shareUrl) {
      return NextResponse.json({ error: 'Unsupported platform' }, { status: 400 })
    }

    // Redirect to the share URL
    return NextResponse.redirect(shareUrl)

  } catch (error) {
    console.error('Social share error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 