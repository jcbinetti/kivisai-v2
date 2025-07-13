"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronRight, FileText, Layout, Search, Filter, Edit, Eye } from "lucide-react"
import { templateEngine, type Template } from "@/lib/template-engine"

interface PageInfo {
  path: string
  name: string
  template: string
  status: "active" | "draft" | "missing"
  lastModified: string
  filePath: string
  hasHero?: boolean
  heroType?: string
}

interface MenuSection {
  name: string
  pages: PageInfo[]
  expanded: boolean
}

export function PagesTemplateOverview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTemplate, setFilterTemplate] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["Hauptseiten"]))

  // Alle verfügbaren Templates
  const templates = templateEngine.getAllTemplates()
  
  // Seiten-Daten mit detaillierten Informationen
  const pagesData: PageInfo[] = [
    // Hauptseiten
    { path: "/", name: "Startseite", template: "landing", status: "active", lastModified: "2024-01-15", filePath: "app/page.tsx", hasHero: true, heroType: "HeroSection" },
    
    // Leistungen
    { path: "/leistungen", name: "Leistungen Übersicht", template: "landing", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/page.tsx", hasHero: false },
    { path: "/leistungen/ki-potenzialanalyse", name: "KI-Potenzialanalyse", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/ki-potenzialanalyse/page.tsx", hasHero: false },
    { path: "/leistungen/ki-prototyping", name: "KI-Prototyping", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/ki-prototyping/page.tsx", hasHero: true, heroType: "Custom Hero" },
    { path: "/leistungen/ki-prototyping/details", name: "KI-Prototyping Details", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/ki-prototyping/details/page.tsx", hasHero: true, heroType: "HeroSection" },
    { path: "/leistungen/ki-coaching", name: "KI-Coaching", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/ki-coaching/page.tsx", hasHero: false },
    { path: "/leistungen/strategie-coaching", name: "Strategie Coaching", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/strategie-coaching/page.tsx", hasHero: false },
    { path: "/leistungen/inqa-coaching", name: "INQA-Coaching", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/inqa-coaching/page.tsx", hasHero: true, heroType: "HeroSection" },
    { path: "/leistungen/inqa-coaching/details", name: "INQA-Coaching Details", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/leistungen/inqa-coaching/details/page.tsx", hasHero: true, heroType: "HeroSection" },
    
    // Lösungen
    { path: "/loesungen", name: "Lösungen Übersicht", template: "landing", status: "active", lastModified: "2024-01-14", filePath: "app/loesungen/page.tsx", hasHero: false },
    { path: "/loesungen/mensch", name: "Mensch", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/loesungen/mensch/page.tsx", hasHero: true, heroType: "HeroSection" },
    { path: "/loesungen/organisation", name: "Organisation", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/loesungen/organisation/page.tsx", hasHero: false },
    { path: "/loesungen/oekosystem", name: "Ökosystem", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/loesungen/oekosystem/page.tsx", hasHero: false },
    { path: "/loesungen/team", name: "Team", template: "service", status: "active", lastModified: "2024-01-14", filePath: "app/loesungen/team/page.tsx", hasHero: true, heroType: "HeroSection" },
    
    // Wissens-Hub
    { path: "/wissens-hub", name: "Wissens-Hub", template: "wissens-hub", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/page.tsx", hasHero: true, heroType: "HeroSection" },
    { path: "/wissens-hub/blog", name: "Blog Übersicht", template: "blog-listing", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/blog/page.tsx", hasHero: false },
    { path: "/wissens-hub/blog/[slug]", name: "Blog Artikel", template: "blog-article", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/blog/[slug]/page.tsx", hasHero: false },
    { path: "/wissens-hub/kategorien", name: "Kategorien", template: "category-page", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/kategorien/page.tsx", hasHero: false },
    { path: "/wissens-hub/kategorien/[slug]", name: "Kategorie Detail", template: "category-page", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/kategorien/[slug]/page.tsx", hasHero: false },
    { path: "/wissens-hub/autoren", name: "Autoren", template: "author-page", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/autoren/page.tsx", hasHero: false },
    { path: "/wissens-hub/events", name: "Events", template: "events-page", status: "active", lastModified: "2024-01-16", filePath: "app/wissens-hub/events/page.tsx", hasHero: false },
    
    // Wissen (Legacy)
    { path: "/wissen", name: "Wissen (Legacy)", template: "landing", status: "draft", lastModified: "2024-01-10", filePath: "app/wissen/page.tsx", hasHero: false },
    { path: "/wissen/blog", name: "Wissen Blog (Legacy)", template: "blog-listing", status: "draft", lastModified: "2024-01-10", filePath: "app/wissen/blog/page.tsx", hasHero: false },
    { path: "/wissen/blog/[slug]", name: "Wissen Artikel (Legacy)", template: "blog-article", status: "draft", lastModified: "2024-01-10", filePath: "app/wissen/blog/[slug]/page.tsx", hasHero: false },
    
    // Use Cases
    { path: "/use-cases", name: "Use Cases Übersicht", template: "landing", status: "active", lastModified: "2024-01-14", filePath: "app/use-cases/page.tsx", hasHero: false },
    { path: "/use-cases/ki-potenzial-landkarte", name: "KI-Potenzial Landkarte", template: "use-case-page", status: "active", lastModified: "2024-01-14", filePath: "app/use-cases/ki-potenzial-landkarte/page.tsx", hasHero: false },
    { path: "/use-cases/uc04-handwerker-li-assistent", name: "Handwerker KI-Assistent", template: "use-case-page", status: "active", lastModified: "2024-01-14", filePath: "app/use-cases/uc04-handwerker-li-assistent/page.tsx", hasHero: false },
    { path: "/use-cases/us01-ki-chatbot-agile-coach", name: "KI-Chatbot Agile Coach", template: "use-case-page", status: "active", lastModified: "2024-01-14", filePath: "app/use-cases/us01-ki-chatbot-agile-coach/page.tsx", hasHero: false },
    
    // Über uns
    { path: "/ueber-kivisai", name: "Über KIVISAI", template: "about-page", status: "active", lastModified: "2024-01-14", filePath: "app/ueber-kivisai/page.tsx", hasHero: false },
    { path: "/ueber-kivisai/methode", name: "Methode", template: "about-page", status: "active", lastModified: "2024-01-14", filePath: "app/ueber-kivisai/methode/page.tsx", hasHero: false },
    { path: "/ueber-kivisai/prinzipien", name: "Prinzipien", template: "about-page", status: "active", lastModified: "2024-01-14", filePath: "app/ueber-kivisai/prinzipien/page.tsx", hasHero: false },
    { path: "/ueber-kivisai/team-netzwerk", name: "Team & Netzwerk", template: "about-page", status: "active", lastModified: "2024-01-14", filePath: "app/ueber-kivisai/team-netzwerk/page.tsx", hasHero: false },
    
    // Kontakt
    { path: "/kontakt", name: "Kontakt", template: "contact-page", status: "active", lastModified: "2024-01-12", filePath: "app/kontakt/page.tsx", hasHero: false },
    { path: "/termin", name: "Termin", template: "contact-page", status: "active", lastModified: "2024-01-12", filePath: "app/termin/page.tsx", hasHero: false },
    
    // Rechtliches
    { path: "/rechtliches/impressum", name: "Impressum", template: "legal-page", status: "active", lastModified: "2024-01-16", filePath: "app/rechtliches/impressum/page.tsx", hasHero: false },
    { path: "/rechtliches/datenschutz", name: "Datenschutz", template: "legal-page", status: "active", lastModified: "2024-01-16", filePath: "app/rechtliches/datenschutz/page.tsx", hasHero: false },
    { path: "/rechtliches/agb", name: "AGB", template: "legal-page", status: "active", lastModified: "2024-01-16", filePath: "app/rechtliches/agb/page.tsx", hasHero: false },
    { path: "/rechtliches/barrierefreiheit", name: "Barrierefreiheit", template: "legal-page", status: "active", lastModified: "2024-01-16", filePath: "app/rechtliches/barrierefreiheit/page.tsx", hasHero: false },
  ]

  // Seiten nach Menüpunkten gruppieren
  const menuSections: MenuSection[] = [
    {
      name: "Hauptseiten",
      pages: pagesData.filter(p => ["/", "/leistungen", "/loesungen"].includes(p.path)),
      expanded: expandedSections.has("Hauptseiten")
    },
    {
      name: "Leistungen",
      pages: pagesData.filter(p => p.path.startsWith("/leistungen/")),
      expanded: expandedSections.has("Leistungen")
    },
    {
      name: "Lösungen",
      pages: pagesData.filter(p => p.path.startsWith("/loesungen/")),
      expanded: expandedSections.has("Lösungen")
    },
    {
      name: "Wissens-Hub",
      pages: pagesData.filter(p => p.path.startsWith("/wissens-hub")),
      expanded: expandedSections.has("Wissens-Hub")
    },
    {
      name: "Wissen (Legacy)",
      pages: pagesData.filter(p => p.path.startsWith("/wissen")),
      expanded: expandedSections.has("Wissen (Legacy)")
    },
    {
      name: "Use Cases",
      pages: pagesData.filter(p => p.path.startsWith("/use-cases")),
      expanded: expandedSections.has("Use Cases")
    },
    {
      name: "Über uns",
      pages: pagesData.filter(p => p.path.startsWith("/ueber-kivisai")),
      expanded: expandedSections.has("Über uns")
    },
    {
      name: "Kontakt",
      pages: pagesData.filter(p => ["/kontakt", "/termin"].includes(p.path)),
      expanded: expandedSections.has("Kontakt")
    },
    {
      name: "Rechtliches",
      pages: pagesData.filter(p => ["/rechtliches/impressum", "/rechtliches/datenschutz", "/rechtliches/agb", "/rechtliches/barrierefreiheit"].includes(p.path)),
      expanded: expandedSections.has("Rechtliches")
    }
  ]

  // Filter-Funktionen
  const filteredSections = menuSections.map(section => ({
    ...section,
    pages: section.pages.filter(page => {
      const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           page.path.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTemplate = filterTemplate === "all" || page.template === filterTemplate
      const matchesStatus = filterStatus === "all" || page.status === filterStatus
      return matchesSearch && matchesTemplate && matchesStatus
    })
  })).filter(section => section.pages.length > 0)

  const toggleSection = (sectionName: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionName)) {
      newExpanded.delete(sectionName)
    } else {
      newExpanded.add(sectionName)
    }
    setExpandedSections(newExpanded)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Aktiv</Badge>
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Entwurf</Badge>
      case "missing":
        return <Badge className="bg-red-100 text-red-800">Fehlt</Badge>
      default:
        return <Badge variant="secondary">Unbekannt</Badge>
    }
  }

  const getTemplateBadge = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (!template) {
      return <Badge variant="outline" className="text-red-600">Template fehlt</Badge>
    }
    return <Badge variant="outline">{template.name}</Badge>
  }

  const getHeroBadge = (page: PageInfo) => {
    if (!page.hasHero) {
      return <Badge variant="outline" className="text-gray-500">Kein Hero</Badge>
    }
    return <Badge variant="outline" className="text-green-600">{page.heroType}</Badge>
  }

  // Template-Konsistenz-Analyse
  const templateConsistencyIssues = pagesData.filter(page => {
    const template = templates.find(t => t.id === page.template)
    if (!template) return true
    
    // Prüfe ob Service-Seiten Hero haben sollten
    if (page.template === "service" && !page.hasHero) return true
    
    return false
  })

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">Seiten & Templates Übersicht</h1>
        <p className="text-lg text-kivisai-moss-green">Alle Seiten und ihre Template-Zuordnungen im Überblick</p>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{pagesData.length}</div>
            <div className="text-sm text-gray-600">Seiten</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{pagesData.filter(p => p.status === "active").length}</div>
            <div className="text-sm text-gray-600">Aktiv</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{pagesData.filter(p => p.status === "draft").length}</div>
            <div className="text-sm text-gray-600">Entwurf</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{templateConsistencyIssues.length}</div>
            <div className="text-sm text-gray-600">Template-Probleme</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="consistency">Konsistenz</TabsTrigger>
          <TabsTrigger value="hero-analysis">Hero-Analyse</TabsTrigger>
        </TabsList>

        {/* Übersicht Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">Suche</Label>
              <Input
                id="search"
                placeholder="Seite oder Pfad suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="template-filter">Template</Label>
              <Select value={filterTemplate} onValueChange={setFilterTemplate}>
                <SelectTrigger id="template-filter" className="mt-1">
                  <SelectValue placeholder="Alle Templates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Templates</SelectItem>
                  {templates.map(template => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status-filter">Status</Label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger id="status-filter" className="mt-1">
                  <SelectValue placeholder="Alle Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Status</SelectItem>
                  <SelectItem value="active">Aktiv</SelectItem>
                  <SelectItem value="draft">Entwurf</SelectItem>
                  <SelectItem value="missing">Fehlt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seiten-Liste */}
          <div className="space-y-4">
            {filteredSections.map((section) => (
              <Card key={section.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(section.name)}
                        className="p-1 h-auto"
                      >
                        {expandedSections.has(section.name) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                      {section.name}
                      <Badge variant="secondary">{section.pages.length}</Badge>
                    </CardTitle>
                  </div>
                </CardHeader>
                
                {expandedSections.has(section.name) && (
                  <CardContent>
                    <div className="space-y-3">
                      {section.pages.map((page) => (
                        <div key={page.path} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <div>
                              <div className="font-medium">{page.name}</div>
                              <div className="text-sm text-gray-500">{page.path}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTemplateBadge(page.template)}
                            {getHeroBadge(page)}
                            {getStatusBadge(page.status)}
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    {template.name}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{template.metadata.status}</Badge>
                    <Badge variant="secondary">v{template.metadata.version}</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Verwendet auf:</strong> {template.pages.length} Seiten
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Sektionen:</strong> {template.sections.length}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Konsistenz Tab */}
        <TabsContent value="consistency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Template-Konsistenz Probleme</CardTitle>
              <CardDescription>
                {templateConsistencyIssues.length} Seiten haben Template-Konsistenz-Probleme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {templateConsistencyIssues.map((page) => (
                  <div key={page.path} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <div className="font-medium text-red-800">{page.name}</div>
                      <div className="text-sm text-red-600">{page.path}</div>
                    </div>
                    <div className="text-sm text-red-600">
                      {!templates.find(t => t.id === page.template) ? "Template fehlt" : "Hero-Section fehlt"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hero-Analyse Tab */}
        <TabsContent value="hero-analysis" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero-Section Verteilung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Mit Hero-Section:</span>
                    <span className="font-bold text-green-600">{pagesData.filter(p => p.hasHero).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ohne Hero-Section:</span>
                    <span className="font-bold text-gray-600">{pagesData.filter(p => !p.hasHero).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard HeroSection:</span>
                    <span className="font-bold text-blue-600">{pagesData.filter(p => p.heroType === "HeroSection").length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom Hero:</span>
                    <span className="font-bold text-orange-600">{pagesData.filter(p => p.heroType && p.heroType !== "HeroSection").length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Empfohlene Aktionen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-medium text-yellow-800">Service-Seiten standardisieren</div>
                    <div className="text-sm text-yellow-600">Alle Service-Seiten sollten HeroSection verwenden</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="font-medium text-blue-800">Template-System erweitern</div>
                    <div className="text-sm text-blue-600">Fehlende Templates erstellen</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 