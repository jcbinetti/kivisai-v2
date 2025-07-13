"use client";

import { useState, useCallback } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Upload, 
  Image as ImageIcon,
  Tag,
  Settings,
  Check,
  X,
  AlertCircle,
  FileImage,
  Trash2,
  Download
} from "lucide-react";

export default function AdminImageUploadPage() {
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("general");

  // Drag and drop functionality
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file, index) => ({
      id: Date.now().toString() + index,
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
      tags: [],
      description: "",
      category: selectedCategory,
      status: "uploading",
      progress: 0
    }));

    setUploadedImages(prev => [...newImages, ...prev]);
  }, [selectedCategory]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    onDrop(imageFiles);
  }, [onDrop]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onDrop(files);
  }, [onDrop]);

  const updateImage = (id: string, updates: any) => {
    setUploadedImages(prev => prev.map(img => 
      img.id === id ? { ...img, ...updates } : img
    ));
  };

  const removeImage = (id: string) => {
    setUploadedImages(prev => {
      const image = prev.find(img => img.id === id);
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
      return prev.filter(img => img.id !== id);
    });
  };

  const addTag = (imageId: string, tag: string) => {
    if (tag.trim()) {
      updateImage(imageId, {
        tags: [...uploadedImages.find(img => img.id === imageId)?.tags || [], tag.trim()]
      });
    }
  };

  const removeTag = (imageId: string, tagToRemove: string) => {
    updateImage(imageId, {
      tags: uploadedImages.find(img => img.id === imageId)?.tags.filter((tag: string) => tag !== tagToRemove) || []
    });
  };

  const uploadImages = async () => {
    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < uploadedImages.length; i++) {
      const image = uploadedImages[i];
      
      // Update status to processing
      updateImage(image.id, { status: "processing" });

      try {
        // Simulate upload process
        for (let progress = 0; progress <= 100; progress += 10) {
          setUploadProgress(progress);
          updateImage(image.id, { progress });
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Simulate image processing (resize, optimize, etc.)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Update status to completed
        updateImage(image.id, { 
          status: "completed", 
          progress: 100 
        });

      } catch (error) {
        updateImage(image.id, { 
          status: "error", 
          error: "Upload fehlgeschlagen" 
        });
      }
    }

    setIsUploading(false);
    setUploadProgress(0);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploading":
        return <Upload className="h-4 w-4 animate-spin" />;
      case "processing":
        return <Settings className="h-4 w-4 animate-spin" />;
      case "completed":
        return <Check className="h-4 w-4 text-green-500" />;
      case "error":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <FileImage className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      uploading: "bg-blue-100 text-blue-800",
      processing: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800"
    };

    return (
      <Badge className={colors[status] || "bg-gray-100 text-gray-800"}>
        {status === "uploading" && "Wird hochgeladen"}
        {status === "processing" && "Wird verarbeitet"}
        {status === "completed" && "Abgeschlossen"}
        {status === "error" && "Fehler"}
      </Badge>
    );
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Bilder", "Upload"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Bilder hochladen</h2>
            <div className="flex gap-2">
              <Button 
                variant="kivisaiOutline" 
                onClick={() => setUploadedImages([])}
                disabled={uploadedImages.length === 0}
                aria-label="Alle Bilder aus Upload entfernen"
                title="Alle Bilder aus Upload entfernen"
              >
                Alle löschen
              </Button>
              <Button 
                variant="kivisai" 
                onClick={uploadImages}
                disabled={uploadedImages.length === 0 || isUploading}
                aria-label="Alle Bilder hochladen"
                title="Alle Bilder hochladen"
              >
                {isUploading ? "Wird hochgeladen..." : "Alle hochladen"}
              </Button>
            </div>
          </div>
          <p className="text-gray-600">
            Laden Sie Bilder hoch und verwalten Sie Metadaten, Tags und Kategorien
          </p>
        </div>

        {/* Upload Area */}
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors hover:border-kivisai-vibrant-turquoise"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-700 mb-2">
              Bilder per Drag & Drop hochladen
            </p>
            <p className="text-gray-500 mb-4">
              Oder wählen Sie Dateien aus
            </p>
            <p className="text-sm text-gray-400">
              Unterstützte Formate: JPG, PNG, GIF, WebP (max. 10MB pro Datei)
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <div>
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="kivisaiOutline" asChild>
                  <span>
                    <FileImage className="h-4 w-4 mr-2" />
                    Dateien auswählen
                  </span>
                </Button>
              </Label>
              <Input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
            
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="general">Allgemein</option>
                <option value="hero">Hero-Bilder</option>
                <option value="team">Team</option>
                <option value="service">Services</option>
                <option value="blog">Blog</option>
                <option value="logo">Logos</option>
              </select>
            </div>
          </div>

          {isUploading && (
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-kivisai-vibrant-turquoise h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Gesamtfortschritt: {uploadProgress}%
              </p>
            </div>
          )}
        </div>

        {/* Uploaded Images */}
        {uploadedImages.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-kivisai-deep-dark-blue">
              Hochgeladene Bilder ({uploadedImages.length})
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedImages.map((image) => (
                <Card key={image.id} className="border-kivisai-light-cool-gray">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusIcon(image.status)}
                          {getStatusBadge(image.status)}
                        </div>
                        <CardTitle className="text-sm text-kivisai-deep-dark-blue mb-2">
                          {image.name}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeImage(image.id)}
                        className="text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Image Preview */}
                      <div className="relative">
                        <img
                          src={image.preview}
                          alt={image.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        {image.status === "processing" && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            <div className="text-white text-sm">Wird verarbeitet...</div>
                          </div>
                        )}
                      </div>

                      {/* File Info */}
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>Größe: {formatFileSize(image.size)}</div>
                        <div>Typ: {image.type}</div>
                        {image.progress > 0 && (
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-kivisai-vibrant-turquoise h-1 rounded-full transition-all duration-300"
                              style={{ width: `${image.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>

                      {/* Error Message */}
                      {image.error && (
                        <div className="flex items-center gap-2 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {image.error}
                        </div>
                      )}

                      <Separator />

                      {/* Tags */}
                      <div>
                        <Label className="text-xs font-medium text-gray-500">Tags</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {image.tags.map((tag: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                              <button
                                onClick={() => removeTag(image.id, tag)}
                                className="ml-1 text-gray-400 hover:text-red-500"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-1 mt-2">
                          <Input
                            placeholder="Tag hinzufügen..."
                            className="text-xs"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                addTag(image.id, (e.target as HTMLInputElement).value);
                                (e.target as HTMLInputElement).value = '';
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <Label className="text-xs font-medium text-gray-500">Beschreibung</Label>
                        <Textarea
                          placeholder="Bildbeschreibung..."
                          value={image.description}
                          onChange={(e) => updateImage(image.id, { description: e.target.value })}
                          className="text-xs mt-1"
                          rows={2}
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <Label className="text-xs font-medium text-gray-500">Kategorie</Label>
                        <select
                          value={image.category}
                          onChange={(e) => updateImage(image.id, { category: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs mt-1"
                        >
                          <option value="general">Allgemein</option>
                          <option value="hero">Hero-Bilder</option>
                          <option value="team">Team</option>
                          <option value="service">Services</option>
                          <option value="blog">Blog</option>
                          <option value="logo">Logos</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upload Summary */}
        {uploadedImages.length > 0 && (
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    {uploadedImages.length}
                  </div>
                  <div className="text-sm text-gray-500">Gesamt</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {uploadedImages.filter(img => img.status === "completed").length}
                  </div>
                  <div className="text-sm text-gray-500">Abgeschlossen</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {uploadedImages.filter(img => img.status === "processing").length}
                  </div>
                  <div className="text-sm text-gray-500">In Bearbeitung</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">
                    {uploadedImages.filter(img => img.status === "error").length}
                  </div>
                  <div className="text-sm text-gray-500">Fehler</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
} 