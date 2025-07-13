"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DebugImagesPage() {
  const [registryInfo, setRegistryInfo] = useState<any>(null)
  const [allImages, setAllImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadRegistryInfo = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/debug/registry')
      const result = await response.json()
      
      if (result.success) {
        setRegistryInfo({
          totalKeys: result.data.totalKeys,
          keys: result.data.keys,
          registryData: result.data.registryData
        })
        setAllImages(result.data.allImages)
      } else {
        console.error('Failed to load registry:', result.error)
      }
    } catch (error) {
      console.error('Error loading registry:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRegistryInfo()
  }, [])

  const refreshData = () => {
    loadRegistryInfo()
  }

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">ImageManager Debug</h1>
        <div className="text-center">Loading registry data...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ImageManager Debug</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Registry Info */}
        <Card>
          <CardHeader>
            <CardTitle>Registry Information</CardTitle>
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
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-40">
                  {JSON.stringify(registryInfo?.keys || [], null, 2)}
                </pre>
              </div>
              <Button onClick={refreshData}>
                Daten neu laden
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* All Images */}
        <Card>
          <CardHeader>
            <CardTitle>Alle registrierten Bilder ({allImages.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-auto">
              {allImages.map((image, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                  <div><strong>ID:</strong> {image.id}</div>
                  <div><strong>Filename:</strong> {image.filename}</div>
                  <div><strong>Path:</strong> {image.path}</div>
                  <div><strong>Category:</strong> {image.category}</div>
                  <div><strong>Source:</strong> {image.source}</div>
                  <div><strong>Tags:</strong> {image.tags?.join(', ')}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Raw Registry Data */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Raw Registry Data</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-96">
            {JSON.stringify(registryInfo?.registryData || {}, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
} 