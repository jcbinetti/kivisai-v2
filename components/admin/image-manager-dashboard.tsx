"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Upload, Eye, Edit, Trash2, Download, Database, Cloud, RefreshCw, CheckCircle } from "lucide-react"
import { ImageManager, type ImageAsset } from "@/lib/image-manager"
import SafeImage from "@/components/safe-image"
import { useToast } from "@/hooks/use-toast"
import { ImageUploadModal } from "./image-upload-modal"
import { useRouter } from "next/navigation"

export function ImageManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null)
  const [allImages, setAllImages] = useState<ImageAsset[]>([])
  const [stats, setStats] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const { toast } = useToast()
  const [syncing, setSyncing] = useState(false)
  const [syncResult, setSyncResult] = useState<string | null>(null)
  const router = useRouter()

  const imageManager = ImageManager.getInstance()

  // Bilder laden
  const loadImages = useCallback(async () => {
    try {
      setIsLoading(true)
      console.log('Loading images from API...')
      
      // API endpoint verwenden
      const response = await fetch('/api/debug/registry')
      const result = await response.json()
      
      if (result.success) {
        const localImages = result.data.allImages
        console.log('Images loaded from API:', localImages.length)
        console.log('Image IDs:', localImages.map((img: any) => img.id))
        
        // Stats für lokale Bilder
        const imageStats = {
          total: localImages.length,
          local: localImages.length,
          sanity: 0,
          byCategory: localImages.reduce((acc: any, img: any) => {
            acc[img.category] = (acc[img.category] || 0) + 1
            return acc
          }, {} as Record<string, number>),
          byFormat: localImages.reduce((acc: any, img: any) => {
            const format = img.filename.split('.').pop()?.toLowerCase() || 'unknown'
            acc[format] = (acc[format] || 0) + 1
            return acc
          }, {} as Record<string, number>),
          bySource: {
            local: localImages.length,
            sanity: 0
          }
        }
        
        setAllImages(localImages)
        setStats(imageStats)
        
        console.log('Images loaded successfully:', {
          total: localImages.length,
          categories: Object.keys(imageStats.byCategory),
          formats: Object.keys(imageStats.byFormat),
          images: localImages.map((img: any) => ({ id: img.id, filename: img.filename }))
        })
      } else {
        console.error('Failed to load images from API:', result.error)
        toast({
          title: "Fehler beim Laden der Bilder",
          description: "Die Bilder konnten nicht geladen werden.",
          variant: "destructive",
        })
      }
      
    } catch (error) {
      console.error('Error loading images:', error)
      toast({
        title: "Fehler beim Laden der Bilder",
        description: "Die lokalen Bilder konnten nicht geladen werden.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  // Sanity-Integration deaktiviert
  const testSanityConnection = async () => {
    toast({
      title: "Sanity-Integration deaktiviert",
      description: "Das Dashboard zeigt nur lokale Bilder an.",
    })
  }

  // Upload Modal Handler
  const handleUploadComplete = async () => {
    console.log('Upload complete, reloading images...')
    setIsLoading(true)
    
    try {
      // Kurze Verzögerung, um sicherzustellen, dass das Bild gespeichert wurde
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Bilder neu laden nach Upload
      await loadImages()
      
      // Zusätzliche Verzögerung für UI-Update
      await new Promise(resolve => setTimeout(resolve, 500))
      
      console.log('Images reloaded after upload, total count:', allImages.length)
      console.log('Current images in state:', allImages.map((img: any) => ({ id: img.id, filename: img.filename })))
      
      toast({
        title: "Upload erfolgreich",
        description: `Das Bild wurde hochgeladen. Jetzt sind ${allImages.length} Bilder verfügbar.`,
      })
    } catch (error) {
      console.error('Error reloading images after upload:', error)
      toast({
        title: "Upload erfolgreich",
        description: "Das Bild wurde hochgeladen, aber es gab einen Fehler beim Neuladen der Liste.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSync = useCallback(async () => {
    setSyncing(true)
    setSyncResult(null)
    try {
      const res = await fetch("/api/admin/image-sync", { method: "POST" })
      const data = await res.json()
      setSyncResult(`✅ ${data.added} neue Bilder optimiert. Gesamt: ${data.total}`)
    } catch (e) {
      setSyncResult("❌ Fehler beim Synchronisieren!")
    } finally {
      setSyncing(false)
    }
  }, [])

  useEffect(() => {
    loadImages()
    // Automatischer Sync, wenn ?sync=1 in der URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("sync") === "1") {
        handleSync();
      }
    }
  }, [loadImages, handleSync])

  const filteredImages = allImages.filter((image) => {
    const matchesSearch =
      image.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some((tag: any) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleImageAction = async (action: string, image: ImageAsset) => {
    switch (action) {
      case 'view':
        setSelectedImage(image)
        break
      case 'edit':
        // TODO: Implement edit modal
        toast({
          title: "Bearbeitung",
          description: "Bildbearbeitung wird implementiert...",
        })
        break
      case 'download':
        // TODO: Implement download
        toast({
          title: "Download",
          description: "Download wird implementiert...",
        })
        break
      case 'delete':
        const confirmed = confirm(`Möchten Sie das Bild "${image.filename}" wirklich löschen?`)
        if (confirmed) {
          try {
            if (image.source === 'sanity' && image.sanityId) {
              // Sanity-Bild löschen
              const success = await imageManager.deleteSanityImage(image.sanityId)
              if (success) {
                toast({
                  title: "Bild gelöscht",
                  description: "Das Bild wurde erfolgreich aus Sanity entfernt.",
                })
                await loadImages()
              } else {
                toast({
                  title: "Fehler beim Löschen",
                  description: "Das Bild konnte nicht gelöscht werden.",
                  variant: "destructive",
                })
              }
            } else {
              // Lokales Bild löschen
              const response = await fetch('/api/admin/image-delete', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  imageId: image.id,
                  filename: image.filename
                }),
              })

              const result = await response.json()

              if (result.success) {
                toast({
                  title: "Bild gelöscht",
                  description: `Das Bild wurde erfolgreich gelöscht. ${result.remainingImages} Bilder verbleiben.`,
                })
                await loadImages()
              } else {
                toast({
                  title: "Fehler beim Löschen",
                  description: result.error || "Das Bild konnte nicht gelöscht werden.",
                  variant: "destructive",
                })
              }
            }
          } catch (error) {
            toast({
              title: "Fehler beim Löschen",
              description: "Ein unerwarteter Fehler ist aufgetreten.",
              variant: "destructive",
            })
          }
        }
        break
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">Bilderverwaltung</h1>
          <p className="text-lg text-kivisai-moss-green">Lade Bilder...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header + Sync-Button + Zurück-Link */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">Bilderverwaltung</h1>
          <Button asChild variant="outline" size="sm">
            <a href="/admin">Zurück zum Dashboard</a>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSync} disabled={syncing} variant="kivisaiOutline" size="lg" className="gap-2 px-8 py-3 text-lg">
            <RefreshCw className={syncing ? "animate-spin" : ""} />
            {syncing ? "Synchronisiere..." : "Bilder synchronisieren"}
          </Button>
          {syncResult && (
            <span className="ml-4 text-sm text-green-600 self-center">{syncResult}</span>
          )}
        </div>
      </div>

      {/* Prominent Upload Section */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-dashed border-blue-300">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Neue Bilder hochladen</h2>
            <p className="text-kivisai-moss-green mb-4">
              Drag & Drop Upload mit automatischer WebP-Optimierung und Thumbnail-Generierung
            </p>
          </div>
          <Button 
            size="lg" 
            className="gap-3 px-8 py-3 text-lg"
            onClick={() => setIsUploadModalOpen(true)}
          >
            <Upload className="h-5 w-5" />
            Bilder hochladen
          </Button>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Automatische Optimierung
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              WebP Konvertierung
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Thumbnail-Generierung
            </div>
          </div>
        </div>
      </Card>

      {/* Sanity Status & Actions */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            <div>
              <div className="font-semibold text-blue-900">Sanity CMS Integration</div>
              <div className="text-sm text-blue-700">
                {stats.bySource?.sanity || 0} Sanity-Bilder, {stats.bySource?.local || 0} lokale Bilder
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={testSanityConnection}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Sanity synchronisieren
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{stats.total || 0}</div>
            <div className="text-sm text-gray-600">Bilder gesamt</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-kivisai-vibrant-light-green">{stats.optimized || 0}</div>
            <div className="text-sm text-gray-600">Optimiert</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-kivisai-clear-turquoise">{stats.byCategory?.logo || 0}</div>
            <div className="text-sm text-gray-600">Logos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-kivisai-moss-green">{stats.byCategory?.badge || 0}</div>
            <div className="text-sm text-gray-600">Badges</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{stats.bySource?.sanity || 0}</div>
            <div className="text-sm text-gray-600">Sanity-Bilder</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Bilder suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Kategorien</SelectItem>
              <SelectItem value="logo">Logos</SelectItem>
              <SelectItem value="badge">Badges</SelectItem>
              <SelectItem value="icon">Icons</SelectItem>
              <SelectItem value="content">Content</SelectItem>
              <SelectItem value="placeholder">Placeholder</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsUploadModalOpen(true)}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      {/* Debug Section - Temporär */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800">Debug Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div><strong>Alle Bilder:</strong> {allImages.length}</div>
            <div><strong>Gefilterte Bilder:</strong> {filteredImages.length}</div>
            <div><strong>Suchbegriff:</strong> "{searchTerm}"</div>
            <div><strong>Ausgewählte Kategorie:</strong> "{selectedCategory}"</div>
            <div><strong>Alle Bild-IDs:</strong> {allImages.map((img: any) => img.id).join(', ')}</div>
            <div><strong>Gefilterte Bild-IDs:</strong> {filteredImages.map((img: any) => img.id).join(', ')}</div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList>
          <TabsTrigger value="grid">Raster-Ansicht</TabsTrigger>
          <TabsTrigger value="list">Listen-Ansicht</TabsTrigger>
          <TabsTrigger value="categories">Nach Kategorien</TabsTrigger>
          <TabsTrigger value="sources">Nach Quellen</TabsTrigger>
        </TabsList>

        {/* Grid View */}
        <TabsContent value="grid" className="space-y-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image: any) => (
              <Card
                key={image.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <SafeImage
                      src={image.path}
                      alt={image.alt}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-sm truncate">{image.filename}</div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {image.category}
                      </Badge>
                      <Badge 
                        variant={image.source === 'sanity' ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {image.source === 'sanity' ? <Cloud className="w-3 h-3" /> : <Database className="w-3 h-3" />}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageAction('view', image)
                        }}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageAction('edit', image)
                        }}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageAction('download', image)
                        }}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleImageAction('delete', image)
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list" className="space-y-4">
          {filteredImages.map((image: any) => (
            <Card key={image.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <SafeImage
                      src={image.path}
                      alt={image.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{image.filename}</div>
                    <div className="text-sm text-gray-600 truncate">{image.alt}</div>
                    <div className="flex gap-2 mt-1">
                      {image.tags.slice(0, 3).map((tag: any) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{image.category}</Badge>
                    <Badge variant={image.source === 'sanity' ? 'default' : 'secondary'}>
                      {image.source === 'sanity' ? 'Sanity' : 'Lokal'}
                    </Badge>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" onClick={() => handleImageAction('view', image)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleImageAction('edit', image)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleImageAction('download', image)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleImageAction('delete', image)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Categories View */}
        <TabsContent value="categories" className="space-y-6">
          {Object.entries(stats.byCategory || {}).map(([category, count]: [any, any]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize flex items-center justify-between">
                  {category}
                  <Badge>{count}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredImages
                    .filter((img: any) => img.category === category)
                    .map((image: any) => (
                    <div key={image.id} className="text-center">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                        <SafeImage
                          src={image.path}
                          alt={image.alt}
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs truncate">{image.filename}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Sources View */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Local Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Lokale Bilder ({stats.bySource?.local || 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {filteredImages
                    .filter((img: any) => img.source === 'local')
                    .slice(0, 6)
                    .map((image: any) => (
                    <div key={image.id} className="text-center">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                        <SafeImage
                          src={image.path}
                          alt={image.alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs truncate">{image.filename}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sanity Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Sanity-Bilder ({stats.bySource?.sanity || 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {filteredImages
                    .filter((img: any) => img.source === 'sanity')
                    .slice(0, 6)
                    .map((image: any) => (
                    <div key={image.id} className="text-center">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                        <SafeImage
                          src={image.path}
                          alt={image.alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs truncate">{image.filename}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Image Detail Modal */}
      {selectedImage && <ImageDetailModal image={selectedImage} onClose={() => setSelectedImage(null)} />}

      {/* Upload Modal */}
      <ImageUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  )
}

function ImageDetailModal({ image, onClose }: { image: ImageAsset; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{image.filename}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <SafeImage
              src={image.path}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Dateiname</Label>
              <div className="text-sm">{image.filename}</div>
            </div>
            <div className="space-y-2">
              <Label>Format</Label>
              <div className="text-sm uppercase">{image.format}</div>
            </div>
            <div className="space-y-2">
              <Label>Kategorie</Label>
              <Badge variant="outline">{image.category}</Badge>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Badge variant={image.optimized ? "default" : "secondary"}>
                {image.optimized ? "Optimiert" : "Nicht optimiert"}
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Alt-Text</Label>
            <div className="text-sm">{image.alt}</div>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex flex-wrap gap-1">
              {image.tags.map((tag: any) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Pfad</Label>
            <div className="text-sm font-mono bg-gray-100 p-2 rounded">{image.path}</div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1">
              <Edit className="h-4 w-4 mr-2" />
              Bearbeiten
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Herunterladen
            </Button>
            <Button variant="outline">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
