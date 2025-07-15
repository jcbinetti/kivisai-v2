import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { createClient as nextSanityClient } from 'next-sanity'

// Einheitliche Sanity-Konfiguration - OPTIMIERT für Performance
const SANITY_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "kpbuonm3",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN, // Nur für Write-Operationen
}

// Sanity Client für API-Operationen - mit Caching
export const sanityClient = createClient({
  ...SANITY_CONFIG,
  // Performance-Optimierungen
  perspective: "published",
  stega: false, // Visual Editing deaktivieren
})

// Next-Sanity Client für Frontend mit optimiertem Caching
export const nextSanityClientInstance = nextSanityClient({
  ...SANITY_CONFIG,
  useCdn: process.env.NODE_ENV === "production", // CDN in Production aktivieren
  perspective: "published", // Nur veröffentlichte Inhalte
  stega: false, // Visual Editing deaktivieren für bessere Performance
  // Zusätzliche Performance-Optimierungen
  apiVersion: "2024-01-01",
  // Caching-Strategie
  cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
})

// Image URL Builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  if (!source || !source.asset) {
    return {
      url: () => '/placeholder.svg',
      width: () => ({ url: () => '/placeholder.svg' }),
      height: () => ({ url: () => '/placeholder.svg' })
    }
  }
  return builder.image(source)
}

// Helper function to calculate read time
function calculateReadTime(body: any): string {
  if (!body) return '5 Min'
  
  // Count words in body blocks
  let wordCount = 0
  body.forEach((block: any) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          wordCount += child.text.split(' ').length
        }
      })
    }
  })
  
  // Average reading speed: 200 words per minute
  const minutes = Math.ceil(wordCount / 200)
  return `${minutes} Min`
}

// Content Types
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

export interface SanityAsset {
  _id: string
  _type: "sanity.imageAsset"
  url: string
  metadata: {
    dimensions: {
      width: number
      height: number
    }
    palette: {
      dominant: {
        background: string
        foreground: string
      }
    }
  }
  originalFilename: string
  label?: string
  title?: string
  description?: string
  altText?: string
  tags?: string[]
  category?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  author?: {
    name: string
    image?: string
  }
  publishedAt: string
  categories?: Array<{
    title: string
    slug: {
      current: string
    }
  }>
  mainImage?: {
    asset: any
    alt?: string
  }
  body?: any
  readTime?: string
}

export interface UseCase {
  _id: string
  _type: "useCase"
  title: string
  slug: {
    current: string
  }
  description: string
  content: any[] // Portable Text
  category: "menschen" | "team" | "organisation" | "oekosystem"
  difficulty: "beginner" | "intermediate" | "advanced"
  timeToImplement: string
  benefits: string[]
  technologies: string[]
  image?: SanityImage
  featured: boolean
}

// GROQ Queries
export const queries = {
  // Blog Posts
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title, slug}
  }`,

  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{title, slug},
    seo
  }`,

  // Use Cases
  allUseCases: `*[_type == "useCase"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    difficulty,
    timeToImplement,
    benefits,
    technologies,
    image,
    featured
  }`,

  useCaseBySlug: `*[_type == "useCase" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    category,
    difficulty,
    timeToImplement,
    benefits,
    technologies,
    image
  }`,

  featuredUseCases: `*[_type == "useCase" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    description,
    category,
    image
  }`,
}

// API Functions
export async function getAllPosts(): Promise<BlogPost[]> {
  return await sanityClient.fetch(queries.allPosts)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await sanityClient.fetch(queries.postBySlug, { slug })
}

export async function getAllUseCases(): Promise<UseCase[]> {
  const query = `
    *[_type == "useCase"] | order(featured desc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      category,
      difficulty,
      timeToImplement,
      benefits,
      technologies,
      "image": image{
        asset,
        alt
      },
      featured
    }
  `

  try {
    const result = await nextSanityClientInstance.fetch(query)
    return result || []
  } catch (error) {
    console.error('Error fetching use cases:', error)
    return []
  }
}

export async function getUseCaseBySlug(slug: string): Promise<UseCase | null> {
  return await sanityClient.fetch(queries.useCaseBySlug, { slug })
}

export async function getFeaturedUseCases(): Promise<UseCase[]> {
  return await sanityClient.fetch(queries.featuredUseCases)
}

export async function getBlogPosts(limit: number = 20, offset: number = 0): Promise<BlogPost[]> {
  try {
    const posts = await nextSanityClientInstance.fetch(`
      *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [${offset}...${offset + limit}] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->,
          alt
        },
        publishedAt,
        author->{name, image},
        categories[]->{title, slug},
        "readTime": "5 Min" // Fixed read time for better performance
      }
    `, {}, {
      cache: 'force-cache',
      next: { revalidate: 1800 } // 30 Minuten Cache
    })

    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClient.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->,
          alt
        },
        publishedAt,
        author->{name, image},
        categories[]->{title, slug},
        body
      }
    `, { slug })

    if (!post) return null

    return {
      ...post,
      readTime: post.body ? calculateReadTime(post.body) : '5 Min'
    }
  } catch (error) {
    console.error('Error fetching blog post by slug:', error)
    return null
  }
}

export async function getCategories(): Promise<Array<{
  _id: string
  title: string
  slug: string
  description?: string
  icon?: {
    asset: any
    alt?: string
  }
  color?: string
}>> {
  const query = `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "icon": icon{
        asset,
        alt
      },
      color
    }
  `

  try {
    const result = await nextSanityClientInstance.fetch(query)
    console.log('Fetched categories:', result) // Debug log
    return result || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getAuthors(): Promise<Array<{
  _id: string
  name: string
  slug: string
  title?: string
  image?: {
    asset: any
    alt?: string
  }
  bio?: any[]
  expertise?: string[]
  linkedin?: string
  twitter?: string
  xing?: string
  website?: string
  email?: string
  company?: string
  location?: string
}>> {
  const query = `
    *[_type == "author"] {
      _id,
      name,
      "slug": slug.current,
      title,
      "image": image{
        asset,
        alt
      },
      bio,
      expertise,
      linkedin,
      twitter,
      xing,
      website,
      email,
      company,
      location
    }
  `

  try {
    const result = await nextSanityClientInstance.fetch(query)
    return result || []
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

export async function getEvents(limit: number = 10, offset: number = 0): Promise<Array<{
  _id: string
  title: string
  slug: { current: string }
  description?: string
  startDate: string
  endDate?: string
  location?: {
    name?: string
    address?: string
    city?: string
    online?: boolean
    meetingUrl?: string
  }
  image?: {
    asset: any
    alt?: string
  }
  category?: string
  status?: string
  maxParticipants?: number
  price?: {
    amount?: number
    currency?: string
    free?: boolean
  }
  organizer?: {
    name: string
    image?: any
  }
  tags?: string[]
}>> {
  const query = `
    *[_type == "event" && startDate >= now()] | order(startDate asc) [${offset}...${offset + limit}] {
      _id,
      title,
      slug,
      description,
      startDate,
      endDate,
      location,
      "image": image{
        asset,
        alt
      },
      category,
      status,
      maxParticipants,
      price,
      "organizer": organizer->{
        name,
        "image": image
      },
      tags
    }
  `

  try {
    const events = await nextSanityClientInstance.fetch(query, {}, {
      cache: 'force-cache',
      next: { revalidate: 1800 } // 30 Minuten Cache
    })
    return events
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export async function getEventBySlug(slug: string) {
  const query = `
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      content,
      startDate,
      endDate,
      location,
      "image": image{
        asset,
        alt
      },
      category,
      status,
      maxParticipants,
      price,
      "organizer": organizer->{
        name,
        "image": image,
        bio,
        expertise,
        linkedin,
        twitter,
        xing
      },
      tags,
      publishedAt
    }
  `

  try {
    const event = await nextSanityClientInstance.fetch(query, { slug })
    return event
  } catch (error) {
    console.error('Error fetching event:', error)
    return null
  }
}

// Sanity Image Management Functions
export async function getAllSanityImages(limit: number = 50, offset: number = 0): Promise<SanityAsset[]> {
  const query = `
    *[_type == "sanity.imageAsset"] | order(_createdAt desc) [${offset}...${offset + limit}] {
      _id,
      _type,
      url,
      metadata,
      originalFilename,
      label,
      title,
      description,
      altText,
      tags,
      category
    }
  `
  
  try {
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching Sanity images:', error)
    return []
  }
}

export async function getSanityImagesByCategory(category: string): Promise<SanityAsset[]> {
  const query = `
    *[_type == "sanity.imageAsset" && category == $category] | order(_createdAt desc) {
      _id,
      _type,
      url,
      metadata,
      originalFilename,
      label,
      title,
      description,
      altText,
      tags,
      category
    }
  `
  
  try {
    return await sanityClient.fetch(query, { category })
  } catch (error) {
    console.error('Error fetching Sanity images by category:', error)
    return []
  }
}

export async function searchSanityImages(searchTerm: string): Promise<SanityAsset[]> {
  const query = `
    *[_type == "sanity.imageAsset" && (
      originalFilename match "*" + $searchTerm + "*" ||
      title match "*" + $searchTerm + "*" ||
      description match "*" + $searchTerm + "*" ||
      altText match "*" + $searchTerm + "*" ||
      tags[] match "*" + $searchTerm + "*"
    )] | order(_createdAt desc) {
      _id,
      _type,
      url,
      metadata,
      originalFilename,
      label,
      title,
      description,
      altText,
      tags,
      category
    }
  `
  
  try {
    return await sanityClient.fetch(query, { searchTerm })
  } catch (error) {
    console.error('Error searching Sanity images:', error)
    return []
  }
}

export async function getSanityImageStats(): Promise<{
  total: number
  byCategory: Record<string, number>
  byFormat: Record<string, number>
}> {
  const query = `
    {
      "total": count(*[_type == "sanity.imageAsset"]),
      "byCategory": {
        "logo": count(*[_type == "sanity.imageAsset" && category == "logo"]),
        "badge": count(*[_type == "sanity.imageAsset" && category == "badge"]),
        "icon": count(*[_type == "sanity.imageAsset" && category == "icon"]),
        "hero": count(*[_type == "sanity.imageAsset" && category == "hero"]),
        "content": count(*[_type == "sanity.imageAsset" && category == "content"]),
        "placeholder": count(*[_type == "sanity.imageAsset" && category == "placeholder"])
      },
      "byFormat": {
        "png": count(*[_type == "sanity.imageAsset" && originalFilename match "*.png"]),
        "jpg": count(*[_type == "sanity.imageAsset" && originalFilename match "*.jpg"]),
        "jpeg": count(*[_type == "sanity.imageAsset" && originalFilename match "*.jpeg"]),
        "svg": count(*[_type == "sanity.imageAsset" && originalFilename match "*.svg"]),
        "webp": count(*[_type == "sanity.imageAsset" && originalFilename match "*.webp"])
      }
    }
  `
  
  try {
    return await sanityClient.fetch(query)
  } catch (error) {
    console.error('Error fetching Sanity image stats:', error)
    return {
      total: 0,
      byCategory: {},
      byFormat: {}
    }
  }
}

export async function updateSanityImageMetadata(
  imageId: string, 
  updates: {
    label?: string
    title?: string
    description?: string
    altText?: string
    tags?: string[]
    category?: string
  }
): Promise<boolean> {
  try {
    await sanityClient.patch(imageId).set(updates).commit()
    return true
  } catch (error) {
    console.error('Error updating Sanity image metadata:', error)
    return false
  }
}

export async function deleteSanityImage(imageId: string): Promise<boolean> {
  try {
    await sanityClient.delete(imageId)
    return true
  } catch (error) {
    console.error('Error deleting Sanity image:', error)
    return false
  }
}

export default nextSanityClientInstance

// Image upload and management functions
export const uploadImage = async (file: File) => {
  try {
    const result = await sanityClient.assets.upload('image', file, {
      filename: file.name,
      label: file.name,
    })
    return result
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export const getImages = async () => {
  try {
    const query = `*[_type == "sanity.imageAsset"] {
      _id,
      _createdAt,
      _updatedAt,
      originalFilename,
      label,
      title,
      description,
      alt,
      url,
      metadata {
        dimensions,
        hasAlpha,
        isOpaque,
        lqip,
        palette,
        exif
      }
    } | order(_createdAt desc)`
    
    const images = await sanityClient.fetch(query)
    return images
  } catch (error) {
    console.error('Error fetching images:', error)
    throw error
  }
}

export const updateImageMetadata = async (imageId: string, metadata: {
  title?: string
  description?: string
  alt?: string
  tags?: string[]
}) => {
  try {
    const result = await sanityClient
      .patch(imageId)
      .set({
        title: metadata.title,
        description: metadata.description,
        alt: metadata.alt,
        tags: metadata.tags,
      })
      .commit()
    return result
  } catch (error) {
    console.error('Error updating image metadata:', error)
    throw error
  }
}

export const deleteImage = async (imageId: string) => {
  try {
    const result = await sanityClient.delete(imageId)
    return result
  } catch (error) {
    console.error('Error deleting image:', error)
    throw error
  }
}

export const getImageById = async (imageId: string) => {
  try {
    const query = `*[_id == $imageId][0] {
      _id,
      _createdAt,
      _updatedAt,
      originalFilename,
      label,
      title,
      description,
      alt,
      url,
      metadata {
        dimensions,
        hasAlpha,
        isOpaque,
        lqip,
        palette,
        exif
      }
    }`
    
    const image = await sanityClient.fetch(query, { imageId })
    return image
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}

// Image categories and tags
export const getImageCategories = async () => {
  try {
    const query = `*[_type == "imageCategory"] {
      _id,
      name,
      description,
      slug
    } | order(name asc)`
    
    const categories = await sanityClient.fetch(query)
    return categories
  } catch (error) {
    console.error('Error fetching image categories:', error)
    throw error
  }
}

export const getImageTags = async () => {
  try {
    const query = `*[_type == "imageTag"] {
      _id,
      name,
      slug,
      count
    } | order(count desc)`
    
    const tags = await sanityClient.fetch(query)
    return tags
  } catch (error) {
    console.error('Error fetching image tags:', error)
    throw error
  }
}

// Image search and filtering
export const searchImages = async (searchTerm: string, filters?: {
  category?: string
  tags?: string[]
  dateFrom?: string
  dateTo?: string
}) => {
  try {
    let query = `*[_type == "sanity.imageAsset"`
    
    if (searchTerm) {
      query += ` && (originalFilename match "*${searchTerm}*" || title match "*${searchTerm}*" || description match "*${searchTerm}*")`
    }
    
    if (filters?.category) {
      query += ` && category == "${filters.category}"`
    }
    
    if (filters?.tags && filters.tags.length > 0) {
      query += ` && count(tags[@ in $tags]) > 0`
    }
    
    if (filters?.dateFrom) {
      query += ` && _createdAt >= "${filters.dateFrom}"`
    }
    
    if (filters?.dateTo) {
      query += ` && _createdAt <= "${filters.dateTo}"`
    }
    
    query += `] {
      _id,
      _createdAt,
      _updatedAt,
      originalFilename,
      label,
      title,
      description,
      alt,
      url,
      category,
      tags,
      metadata {
        dimensions,
        hasAlpha,
        isOpaque,
        lqip,
        palette,
        exif
      }
    } | order(_createdAt desc)`
    
    const images = await sanityClient.fetch(query, { tags: filters?.tags || [] })
    return images
  } catch (error) {
    console.error('Error searching images:', error)
    throw error
  }
}

// Image usage tracking
export const getImageUsage = async (imageId: string) => {
  try {
    const query = `*[references($imageId)] {
      _id,
      _type,
      title,
      slug,
      _createdAt
    } | order(_createdAt desc)`
    
    const usage = await sanityClient.fetch(query, { imageId })
    return usage
  } catch (error) {
    console.error('Error fetching image usage:', error)
    throw error
  }
}

// Image optimization and processing
export const optimizeImage = async (imageId: string, options: {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png'
}) => {
  try {
    const image = await getImageById(imageId)
    if (!image) throw new Error('Image not found')
    
    // Generate optimized URL with basic parameters
    const optimizedUrl = urlFor(image).url()
    
    return optimizedUrl
  } catch (error) {
    console.error('Error optimizing image:', error)
    throw error
  }
}

// Bulk image operations
export const bulkUpdateImages = async (imageIds: string[], updates: {
  category?: string
  tags?: string[]
  description?: string
}) => {
  try {
    const operations = imageIds.map(id => 
      sanityClient.patch(id).set(updates)
    )
    
    const results = await Promise.all(operations.map(op => op.commit()))
    return results
  } catch (error) {
    console.error('Error bulk updating images:', error)
    throw error
  }
}

export const bulkDeleteImages = async (imageIds: string[]) => {
  try {
    const operations = imageIds.map(id => sanityClient.delete(id))
    const results = await Promise.all(operations)
    return results
  } catch (error) {
    console.error('Error bulk deleting images:', error)
    throw error
  }
}

// Neue Funktion für Blog-Posts mit Pagination
export async function getBlogPostsWithPagination(page: number = 1, limit: number = 12, category?: string) {
  const offset = (page - 1) * limit
  
  try {
    console.log('Fetching blog posts with category:', category) // Debug log
    console.log('Category type:', typeof category) // Debug log
    console.log('Category value:', JSON.stringify(category)) // Debug log
    
    // Vereinfachte Abfrage für bessere Kompatibilität
    let postsQuery;
    let countQuery;
    
    if (category) {
      // Basic GROQ query for category filtering
      postsQuery = `*[_type == "post" && defined(slug.current) && $category in categories[]->slug.current] | order(publishedAt desc) [${offset}...${offset + limit}] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->,
          alt
        },
        publishedAt,
        author->{name, image},
        categories[]->{title, "slug": slug.current},
        "readTime": "5 Min"
      }`;
      
      countQuery = `count(*[_type == "post" && defined(slug.current) && $category in categories[]->slug.current])`;
    } else {
      postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [${offset}...${offset + limit}] {
        _id,
        title,
        slug,
        excerpt,
        mainImage {
          asset->,
          alt
        },
        publishedAt,
        author->{name, image},
        categories[]->{title, "slug": slug.current},
        "readTime": "5 Min"
      }`;
      
      countQuery = `count(*[_type == "post" && defined(slug.current)])`;
    }
    
    console.log('Posts query:', postsQuery) // Debug log
    console.log('Count query:', countQuery) // Debug log
    console.log('Query params:', category ? { category } : {}) // Debug log
    
    const [posts, totalCount] = await Promise.all([
      nextSanityClientInstance.fetch(postsQuery, category ? { category } : {}),
      nextSanityClientInstance.fetch(countQuery, category ? { category } : {})
    ]);

    console.log('Fetched posts:', posts.length, 'Total count:', totalCount, 'Category filter:', category) // Debug log

    return {
      posts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalPosts: totalCount,
        hasNextPage: page * limit < totalCount,
        hasPrevPage: page > 1
      }
    }
  } catch (error) {
    console.error('Error fetching blog posts with pagination:', error)
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalPosts: 0,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  }
}

// Neue Funktion für Events mit Pagination
export async function getEventsWithPagination(page: number = 1, limit: number = 8) {
  const offset = (page - 1) * limit
  
  try {
    const [events, totalCount] = await Promise.all([
      getEvents(limit, offset),
      nextSanityClientInstance.fetch(`count(*[_type == "event" && startDate >= now()])`)
    ])

    return {
      events,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalEvents: totalCount,
        hasNextPage: page * limit < totalCount,
        hasPrevPage: page > 1
      }
    }
  } catch (error) {
    console.error('Error fetching events with pagination:', error)
    return {
      events: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalEvents: 0,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  }
}

// Neue optimierte Funktion mit Pagination
export async function getUseCasesWithPagination(page: number = 1, limit: number = 12) {
  const offset = (page - 1) * limit
  
  const query = `
    *[_type == "useCase"] | order(featured desc, _createdAt desc) [${offset}...${offset + limit}] {
      _id,
      title,
      slug,
      description,
      category,
      difficulty,
      timeToImplement,
      benefits,
      technologies,
      "image": image{
        asset,
        alt
      },
      featured
    }
  `

  try {
    const [useCases, totalCount] = await Promise.all([
      nextSanityClientInstance.fetch(query),
      nextSanityClientInstance.fetch(`count(*[_type == "useCase"])`)
    ])

    return {
      useCases,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalUseCases: totalCount,
        hasNextPage: page * limit < totalCount,
        hasPrevPage: page > 1
      }
    }
  } catch (error) {
    console.error('Error fetching use cases with pagination:', error)
    return {
      useCases: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalUseCases: 0,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  }
}

// Neue optimierte Funktion mit Pagination
export async function getSanityImagesWithPagination(page: number = 1, limit: number = 20) {
  const offset = (page - 1) * limit
  
  try {
    const [images, totalCount] = await Promise.all([
      getAllSanityImages(limit, offset),
      sanityClient.fetch(`count(*[_type == "sanity.imageAsset"])`)
    ])

    return {
      images,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalImages: totalCount,
        hasNextPage: page * limit < totalCount,
        hasPrevPage: page > 1
      }
    }
  } catch (error) {
    console.error('Error fetching Sanity images with pagination:', error)
    return {
      images: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalImages: 0,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  }
}
