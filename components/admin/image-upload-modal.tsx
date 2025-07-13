"use client"

import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Image, X, CheckCircle, AlertCircle, Upload, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface UploadFile {
  id: string
  file: File
  preview: string
  progress: number
  status: 'uploading' | 'success' | 'error'
  error?: string
  result?: any
}

interface ImageUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUploadComplete: () => void
}

export function ImageUploadModal({ isOpen, onClose, onUploadComplete }: ImageUploadModalProps) {
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  // Drag & Drop Handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    
    if (imageFiles.length > 0) {
      addFilesToUpload(imageFiles)
    } else {
      toast({
        title: "Keine Bilder gefunden",
        description: "Bitte ziehen Sie nur Bilddateien hierher.",
        variant: "destructive",
      })
    }
  }, [toast])

  const addFilesToUpload = (files: File[]) => {
    const newUploadFiles: UploadFile[] = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      progress: 0,
      status: 'uploading'
    }))
    
    setUploadFiles(prev => [...prev, ...newUploadFiles])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      addFilesToUpload(files)
    }
  }

  const uploadFile = async (fileToUpload: UploadFile): Promise<boolean> => {
    try {
      const formData = new FormData()
      formData.append('file', fileToUpload.file)

      // Progress tracking
      const xhr = new XMLHttpRequest()
      
      return new Promise((resolve) => {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const progress = Math.round((e.loaded / e.total) * 100)
            setUploadFiles(prev => prev.map(f => 
              f.id === fileToUpload.id ? { ...f, progress } : f
            ))
          }
        })

        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            setUploadFiles(prev => prev.map(f => 
              f.id === fileToUpload.id ? { 
                ...f, 
                status: 'success', 
                progress: 100,
                result: response.image
              } : f
            ))
            resolve(true)
          } else {
            const error = JSON.parse(xhr.responseText)?.error || 'Upload fehlgeschlagen'
            setUploadFiles(prev => prev.map(f => 
              f.id === fileToUpload.id ? { 
                ...f, 
                status: 'error', 
                error 
              } : f
            ))
            resolve(false)
          }
        })

        xhr.addEventListener('error', () => {
          setUploadFiles(prev => prev.map(f => 
            f.id === fileToUpload.id ? { 
              ...f, 
              status: 'error', 
              error: 'Netzwerkfehler' 
            } : f
          ))
          resolve(false)
        })

        xhr.open('POST', '/api/images/upload')
        xhr.send(formData)
      })

    } catch (error) {
      console.error('Upload error:', error)
      setUploadFiles(prev => prev.map(f => 
        f.id === fileToUpload.id ? { 
          ...f, 
          status: 'error', 
          error: 'Upload fehlgeschlagen' 
        } : f
      ))
      return false
    }
  }

  const uploadAllFiles = async () => {
    if (uploadFiles.length === 0) return

    setIsUploading(true)
    const filesToUpload = uploadFiles.filter(f => f.status === 'uploading')

    let successCount = 0
    let errorCount = 0

    for (const fileToUpload of filesToUpload) {
      const success = await uploadFile(fileToUpload)
      if (success) {
        successCount++
        toast({
          title: "Bild hochgeladen",
          description: `${fileToUpload.file.name} wurde erfolgreich hochgeladen und optimiert.`,
        })
      } else {
        errorCount++
        toast({
          title: "Upload fehlgeschlagen",
          description: `${fileToUpload.file.name} konnte nicht hochgeladen werden.`,
          variant: "destructive",
        })
      }
    }

    setIsUploading(false)

    // Nach erfolgreichem Upload
    if (successCount > 0) {
      setTimeout(() => {
        setUploadFiles([])
        onClose()
        onUploadComplete()
      }, 2000)
    }
  }

  const removeUploadFile = (id: string) => {
    setUploadFiles(prev => {
      const file = prev.find(f => f.id === id)
      if (file) {
        URL.revokeObjectURL(file.preview)
      }
      return prev.filter(f => f.id !== id)
    })
  }

  const handleClose = () => {
    if (!isUploading) {
      setUploadFiles([])
      onClose()
    }
  }

  const canUpload = uploadFiles.some(f => f.status === 'uploading') && !isUploading

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Bilder hochladen & optimieren</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Drag & Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Image className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium mb-2">Bilder hierher ziehen</p>
            <p className="text-sm text-gray-600 mb-4">
              Automatische Optimierung: WebP, Thumbnails, responsive Größen
            </p>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button variant="outline" asChild>
                <span>Dateien auswählen</span>
              </Button>
            </label>
          </div>

          {/* Upload Progress */}
          {uploadFiles.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-medium">Upload-Status</h3>
              {uploadFiles.map((uploadFile) => (
                <div key={uploadFile.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <img 
                    src={uploadFile.preview} 
                    alt="Preview" 
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{uploadFile.file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(uploadFile.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {uploadFile.result && (
                      <p className="text-xs text-green-600">
                        Optimiert: {uploadFile.result.width}x{uploadFile.result.height}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {uploadFile.status === 'uploading' && (
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadFile.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{uploadFile.progress}%</span>
                      </div>
                    )}
                    {uploadFile.status === 'success' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {uploadFile.status === 'error' && (
                      <div className="flex items-center gap-1">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-xs text-red-500">{uploadFile.error}</span>
                      </div>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeUploadFile(uploadFile.id)}
                      disabled={uploadFile.status === 'uploading'}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <Button 
                  onClick={uploadAllFiles}
                  disabled={!canUpload || isUploading}
                  className="flex-1"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Hochladen...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Alle hochladen
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleClose}
                  disabled={isUploading}
                >
                  Abbrechen
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 