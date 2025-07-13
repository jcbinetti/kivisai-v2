"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Copy, Edit, Layout, Plus, Trash2, Save, Download, Upload } from "lucide-react"
import { BRAND_COLORS } from "@/lib/design-system"
import { toast } from "@/hooks/use-toast"
import { templateEngine, getTemplatePreviews, exportTemplate, importTemplate, type TemplatePreview } from "@/lib/template-engine"

export function VisualTemplateManager() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [isCreating, setIsCreating] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<string | null>(null)
  const [templates, setTemplates] = useState<TemplatePreview[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Templates laden
  useEffect(() => {
    const loadTemplates = () => {
      setIsLoading(true)
      const templatePreviews = getTemplatePreviews()
      setTemplates(templatePreviews)
      setIsLoading(false)
    }

    loadTemplates()
  }, [])

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || template.status === filterStatus
    return matchesSearch && matchesStatus
  })

  // Template Aktionen
  const handlePreview = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template) {
      toast({
        title: "Template Vorschau",
        description: `Öffne Vorschau für "${template.name}"`,
      })
      // Hier würde die Vorschau-Logik implementiert
      console.log("Preview template:", templateId)
    }
  }

  const handleEdit = (templateId: string) => {
    setEditingTemplate(templateId)
    const template = templates.find(t => t.id === templateId)
    toast({
      title: "Template bearbeiten",
      description: `Bearbeite "${template?.name}"`,
    })
  }

  const handleDuplicate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template) {
      const newId = `${templateId}-copy-${Date.now()}`
      const duplicated = templateEngine.duplicateTemplate(templateId, newId)
      
      if (duplicated) {
        toast({
          title: "Template dupliziert",
          description: `"${template.name}" wurde erfolgreich dupliziert`,
        })
        // Templates neu laden
        setTemplates(getTemplatePreviews())
      } else {
        toast({
          title: "Fehler",
          description: "Template konnte nicht dupliziert werden",
          variant: "destructive"
        })
      }
    }
  }

  const handleCreateTemplate = () => {
    setIsCreating(true)
    toast({
      title: "Neues Template",
      description: "Erstelle neues Template...",
    })
  }

  const handleSaveTemplate = () => {
    setIsCreating(false)
    setEditingTemplate(null)
    toast({
      title: "Template gespeichert",
      description: "Template wurde erfolgreich gespeichert",
    })
    // Templates neu laden
    setTemplates(getTemplatePreviews())
  }

  const handleDeleteTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template) {
      const success = templateEngine.deleteTemplate(templateId)
      if (success) {
        toast({
          title: "Template gelöscht",
          description: `"${template.name}" wurde gelöscht`,
        })
        // Templates neu laden
        setTemplates(getTemplatePreviews())
      } else {
        toast({
          title: "Fehler",
          description: "Template konnte nicht gelöscht werden",
          variant: "destructive"
        })
      }
    }
  }

  const handleExportTemplate = (templateId: string) => {
    const exported = exportTemplate(templateId)
    if (exported) {
      // Download als JSON-Datei
      const blob = new Blob([exported], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${templateId}-template.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      toast({
        title: "Template exportiert",
        description: `"${templateId}" wurde als JSON exportiert`,
      })
    } else {
      toast({
        title: "Fehler",
        description: "Template konnte nicht exportiert werden",
        variant: "destructive"
      })
    }
  }

  const handleImportTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      const imported = importTemplate(content)
      
      if (imported) {
        toast({
          title: "Template importiert",
          description: `"${imported.name}" wurde erfolgreich importiert`,
        })
        // Templates neu laden
        setTemplates(getTemplatePreviews())
      } else {
        toast({
          title: "Fehler",
          description: "Template konnte nicht importiert werden",
          variant: "destructive"
        })
      }
    }
    reader.readAsText(file)
  }

  // Template-Statistiken
  const stats = templateEngine.getTemplateStats()

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">Template & Design Manager</h1>
        <p className="text-lg text-kivisai-moss-green">Visuelle Übersicht und Verwaltung aller Design-Templates</p>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{stats.total}</div>
            <div className="text-sm text-gray-600">Templates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            <div className="text-sm text-gray-600">Aktiv</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.draft}</div>
            <div className="text-sm text-gray-600">Entwurf</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{stats.deprecated}</div>
            <div className="text-sm text-gray-600">Veraltet</div>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="space-y-2">
            <Label htmlFor="search">Suchen</Label>
            <Input
              id="search"
              placeholder="Template suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle</SelectItem>
                <SelectItem value="active">Aktiv</SelectItem>
                <SelectItem value="draft">Entwurf</SelectItem>
                <SelectItem value="deprecated">Veraltet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleCreateTemplate} className="gap-2">
            <Plus className="h-4 w-4" />
            Neues Template
          </Button>
          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleImportTemplate}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="components">Komponenten</TabsTrigger>
          <TabsTrigger value="colors">Farben</TabsTrigger>
          <TabsTrigger value="usage">Verwendung</TabsTrigger>
        </TabsList>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kivisai-deep-dark-blue mx-auto"></div>
              <p className="mt-2 text-gray-600">Lade Templates...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate === template.id ? "ring-2 ring-kivisai-vibrant-light-green" : ""
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge
                        variant={template.status === "active" ? "default" : "secondary"}
                        className={
                          template.status === "active" ? "bg-kivisai-vibrant-light-green text-kivisai-deep-dark-blue" : ""
                        }
                      >
                        {template.status}
                      </Badge>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Template Preview */}
                    <div className="aspect-video bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Layout className="h-8 w-8 mx-auto text-kivisai-moss-green" />
                        <div className="text-sm text-kivisai-moss-green">Template Vorschau</div>
                      </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Sections:</div>
                      <div className="flex flex-wrap gap-1">
                        {template.sections.map((section) => (
                          <Badge key={section} variant="outline" className="text-xs">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Usage */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Verwendet auf:</div>
                      <div className="text-sm text-gray-600">{template.usedOn.join(", ") || "Noch nicht verwendet"}</div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePreview(template.id)
                        }}
                      >
                        <Eye className="h-3 w-3" />
                        Vorschau
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEdit(template.id)
                        }}
                      >
                        <Edit className="h-3 w-3" />
                        Bearbeiten
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDuplicate(template.id)
                        }}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleExportTemplate(template.id)
                        }}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-1 text-red-600 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteTemplate(template.id)
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-6">
          <ComponentLibrary />
        </TabsContent>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-6">
          <ColorPalette />
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="space-y-6">
          <UsageAnalytics />
        </TabsContent>
      </Tabs>

      {/* Selected Template Details */}
      {selectedTemplate && (
        <TemplateDetailPanel
          template={templates.find((t) => t.id === selectedTemplate)!}
          onClose={() => setSelectedTemplate(null)}
          onPreview={handlePreview}
          onEdit={handleEdit}
          onDuplicate={handleDuplicate}
          onExport={handleExportTemplate}
        />
      )}

      {/* Create/Edit Modal */}
      {(isCreating || editingTemplate) && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full">
            <CardHeader>
              <CardTitle>
                {isCreating ? "Neues Template erstellen" : "Template bearbeiten"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template-name">Template Name</Label>
                <Input id="template-name" placeholder="Template Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="template-description">Beschreibung</Label>
                <Input id="template-description" placeholder="Template Beschreibung" />
              </div>
              <div className="flex gap-2 justify-end">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsCreating(false)
                    setEditingTemplate(null)
                  }}
                >
                  Abbrechen
                </Button>
                <Button onClick={handleSaveTemplate} className="gap-2">
                  <Save className="h-4 w-4" />
                  Speichern
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

function ComponentLibrary() {
  const components = [
    { name: "HeroSection", variants: ["default", "centered", "split", "minimal"], usage: 15 },
    { name: "FeatureGrid", variants: ["cards", "minimal", "icons"], usage: 12 },
    { name: "StatsSection", variants: ["centered", "grid", "banner"], usage: 8 },
    { name: "CtaSection", variants: ["banner", "card", "minimal"], usage: 10 },
    { name: "ContentSection", variants: ["default", "narrow", "wide"], usage: 20 },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {components.map((component) => (
        <Card key={component.name}>
          <CardHeader>
            <CardTitle className="text-base">{component.name}</CardTitle>
            <CardDescription>{component.usage} mal verwendet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm font-medium">Varianten:</div>
              <div className="flex flex-wrap gap-1">
                {component.variants.map((variant) => (
                  <Badge key={variant} variant="outline" className="text-xs">
                    {variant}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ColorPalette() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(BRAND_COLORS).map(([name, color]) => (
        <Card key={name}>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="w-full h-20 rounded-lg border" style={{ backgroundColor: color }} />
              <div>
                <div className="font-semibold capitalize">{name}</div>
                <div className="text-sm text-gray-500 font-mono">{color}</div>
              </div>
              <div className="text-xs text-gray-600">{getColorUsage(name)}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function UsageAnalytics() {
  const usageData = [
    { template: "Landing Page", pages: 3, lastUsed: "2024-01-15" },
    { template: "Service Page", pages: 8, lastUsed: "2024-01-14" },
    { template: "Blog Post", pages: 25, lastUsed: "2024-01-13" },
    { template: "Contact Page", pages: 2, lastUsed: "2024-01-12" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Verwendung</CardTitle>
        <CardDescription>Übersicht über die Nutzung der verschiedenen Templates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {usageData.map((item) => (
            <div key={item.template} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">{item.template}</div>
                <div className="text-sm text-gray-500">{item.pages} Seiten</div>
              </div>
              <div className="text-right">
                <div className="text-sm">Zuletzt verwendet:</div>
                <div className="text-sm text-gray-500">{item.lastUsed}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function TemplateDetailPanel({ template, onClose, onPreview, onEdit, onDuplicate, onExport }: { template: TemplatePreview; onClose: () => void; onPreview: (templateId: string) => void; onEdit: (templateId: string) => void; onDuplicate: (templateId: string) => void; onExport: (templateId: string) => void }) {
  return (
    <Card className="border-kivisai-vibrant-light-green">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{template.name} - Details</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Beschreibung</h4>
              <p className="text-sm text-gray-600">{template.description}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Sections</h4>
              <div className="space-y-2">
                {template.sections.map((section) => (
                  <div key={section} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{section}</span>
                    <Badge variant="outline" className="text-xs">
                      Aktiv
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Verwendung</h4>
              <div className="space-y-1">
                {template.usedOn.map((page) => (
                  <div key={page} className="text-sm text-gray-600">
                    • {page}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Aktionen</h4>
              <div className="space-y-2">
                <Button 
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    onPreview(template.id)
                  }}
                >
                  <Eye className="h-4 w-4" />
                  Live Vorschau öffnen
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    onEdit(template.id)
                  }}
                >
                  <Edit className="h-4 w-4" />
                  Template bearbeiten
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDuplicate(template.id)
                  }}
                >
                  <Copy className="h-4 w-4" />
                  Template duplizieren
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    onExport(template.id)
                  }}
                >
                  <Download className="h-4 w-4" />
                  Template exportieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function getColorUsage(colorName: string): string {
  const usage: Record<string, string> = {
    deepDarkBlue: "Primäre Buttons, Header, wichtige Texte",
    clearTurquoise: "Akzente, Links, sekundäre Elemente",
    mossGreen: "Texte, subtile Akzente",
    vibrantLightGreen: "Call-to-Actions, Highlights",
    pureWhite: "Hintergründe, Cards",
    lightCoolGray: "Borders, subtile Hintergründe",
  }
  return usage[colorName] || "Verschiedene UI-Elemente"
}
