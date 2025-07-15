"use client"

import { useState, useEffect } from 'react'
import SafeImage from "@/components/safe-image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageManager } from "@/lib/image-manager"

export default function TestImagesPage() {
  const [allImages, setAllImages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [registryInfo, setRegistryInfo] = useState<any>(null)

  const testImages = [
    {
      src: "/images-optimized/KIVI_Selbsteval_jung_breit.webp",
      alt: "KIVI Selbstevaluation Jung Breit",
      title: "KIVI Selbstevaluation Jung Breit"
    },
    {
      src: "/images-optimized/KIVISAI_logo_TR.webp",
      alt: "KIVISAI Logo",
      title: "KIVISAI Logo"
    },
    {
      src: "/images-optimized/AI-Explorer-Club-Logo.webp",
      alt: "AI Explorer Club Logo",
      title: "AI Explorer Club Logo"
    }
  ]

  useEffect(() => {
    const loadAllImages = () => {
      try {
        const imageManager = ImageManager.getInstance()
        const images = imageManager.getAllLocalImages()
        setAllImages(images)
        
        // Registry-Info sammeln
        const registry = (imageManager as any).registry || {}
        setRegistryInfo({
          totalKeys: Object.keys(registry).length,
          keys: Object.keys(registry),
          images: images.map(img => ({ id: img.id, filename: img.filename, path: img.path }))
        })
        
        console.log('All registered images:', images)
        console.log('Registry info:', registry)
      } catch (error) {
        console.error('Error loading images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAllImages()
  }, [])

  const refreshImages = () => {
    setIsLoading(true)
    const imageManager = ImageManager.getInstance()
    const images = imageManager.getAllLocalImages()
    setAllImages(images)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Bild-Test-Seite</h1>
      
      {/* Registry Debug Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>ImageManager Registry Debug</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <strong>Registry Keys:</strong> {registryInfo?.totalKeys || 0}
            </div>
            <div>
              <strong>Loaded Images:</strong> {allImages.length}
            </div>
            <div>
              <strong>Registry Keys:</strong>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                {JSON.stringify(registryInfo?.keys || [], null, 2)}
              </pre>
            </div>
            <div>
              <strong>Loaded Images:</strong>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                {JSON.stringify(registryInfo?.images || [], null, 2)}
              </pre>
            </div>
            <Button onClick={refreshImages} disabled={isLoading}>
              {isLoading ? 'Lade...' : 'Bilder neu laden'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Test Images */}
        {testImages.map((image, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{image.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <SafeImage
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Registered Images */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Alle registrierten Bilder ({allImages.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-sm">{image.filename}</CardTitle>
              </CardHeader>
              <CardContent>
                <SafeImage
                  src={image.path}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-2 text-xs text-gray-600">
                  <div>ID: {image.id}</div>
                  <div>Path: {image.path}</div>
                  <div>Category: {image.category}</div>
                  <div>Source: {image.source}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 