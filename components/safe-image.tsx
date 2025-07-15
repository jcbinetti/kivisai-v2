"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import { urlFor } from '@/lib/sanity-client'

interface SafeImageProps {
  src: any // Sanity image object or string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

function SafeImage({ 
  src, 
  alt, 
  width = 400, 
  height = 300, 
  className = '', 
  priority = false,
  fallbackSrc = '/placeholder.svg'
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(fallbackSrc)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Handle string URLs
    if (typeof src === 'string') {
      setImgSrc(src || fallbackSrc)
      return
    }
    
    // Handle Sanity image objects
    if (src && src.asset) {
      try {
        const sanityUrl = urlFor(src).url()
        setImgSrc(sanityUrl)
      } catch (error) {
        console.error('Error generating image URL:', error)
        setImgSrc(fallbackSrc)
      }
    } else {
      setImgSrc(fallbackSrc)
    }
  }, [src, fallbackSrc])

  const handleError = () => {
    setImgSrc(fallbackSrc)
  }

  // SSR: For static images (logo etc.), render directly
  if (typeof src === 'string' && src.startsWith('/images-optimized/')) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={handleError}
      />
    )
  }

  // For SSR, render with fallback to avoid hydration mismatch for dynamic images
  if (!isMounted) {
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={handleError}
    />
  )
}

// Fallback Image Component
function FallbackImage({ 
  alt, 
  width = 400, 
  height = 300, 
  className = '' 
}: Omit<SafeImageProps, 'src'>) {
  return (
    <div 
      className={`bg-kivisai-light-cool-gray flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <svg 
        className="w-12 h-12 text-kivisai-moss-green" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    </div>
  )
}

// Only default export to avoid conflicts
export default SafeImage
