"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export default function TestUploadPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<any>(null)
  const { toast } = useToast()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setUploadedImage(result.image)
        toast({
          title: "Upload erfolgreich!",
          description: `Bild "${result.image.originalName}" wurde hochgeladen.`,
        })
      } else {
        const error = await response.json()
        toast({
          title: "Upload fehlgeschlagen",
          description: error.error || "Unbekannter Fehler",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Upload fehlgeschlagen",
        description: "Netzwerkfehler beim Upload",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-2">
          Bild-Upload Test
        </h1>
        <p className="text-kivisai-moss-green">
          Teste den Bild-Upload und die Optimierung
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bild hochladen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="flex-1"
            />
            {isUploading && (
              <div className="text-kivisai-moss-green">
                Upload läuft...
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {uploadedImage && (
        <Card>
          <CardHeader>
            <CardTitle>Hochgeladenes Bild</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Original</h3>
                <img
                  src={uploadedImage.originalPath}
                  alt="Original"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-1">
                  {uploadedImage.originalName}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optimiert (WebP)</h3>
                <img
                  src={uploadedImage.optimizedPath}
                  alt="Optimized"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-1">
                  {uploadedImage.filename}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Bild-Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>ID: {uploadedImage.id}</div>
                <div>Größe: {Math.round(uploadedImage.size / 1024)} KB</div>
                <div>Breite: {uploadedImage.width}px</div>
                <div>Höhe: {uploadedImage.height}px</div>
                <div>Format: {uploadedImage.format}</div>
                <div>Upload: {new Date(uploadedImage.uploadedAt).toLocaleString()}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 