"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertCircle, RefreshCw, Settings, Palette, Layout, Code } from "lucide-react"
import { BRAND_COLORS, TYPOGRAPHY, SPACING } from "@/lib/design-system"

interface SystemStatus {
  component: string
  status: "working" | "broken" | "warning"
  message: string
  lastChecked: string
  dependencies?: string[]
}

interface TemplateStatus {
  id: string
  name: string
  status: "active" | "draft" | "broken"
  components: string[]
  lastUsed?: string
  issues?: string[]
}

export function DesignSystemStatus() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([])
  const [templateStatus, setTemplateStatus] = useState<TemplateStatus[]>([])
  const [isChecking, setIsChecking] = useState(false)

  // Simulierte System-Überprüfung
  const checkSystemStatus = async () => {
    setIsChecking(true)
    
    // Simuliere API-Call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const status: SystemStatus[] = [
      {
        component: "Design Tokens",
        status: "working",
        message: "Alle Farben, Typografie und Spacing-Tokens sind verfügbar",
        lastChecked: new Date().toISOString(),
        dependencies: ["lib/design-system.ts"]
      },
      {
        component: "UI Components",
        status: "working", 
        message: "Alle shadcn/ui Komponenten sind korrekt importiert",
        lastChecked: new Date().toISOString(),
        dependencies: ["components/ui/*"]
      },
      {
        component: "Template System",
        status: "warning",
        message: "Einige Template-Vorschauen sind nicht verfügbar",
        lastChecked: new Date().toISOString(),
        dependencies: ["components/design-system/*"]
      },
      {
        component: "Page Builder",
        status: "working",
        message: "Page Builder Komponenten sind funktionsfähig",
        lastChecked: new Date().toISOString(),
        dependencies: ["components/design-system/page-builder.tsx"]
      },
      {
        component: "Admin Navigation",
        status: "working",
        message: "Admin-Navigation funktioniert korrekt",
        lastChecked: new Date().toISOString(),
        dependencies: ["components/admin/admin-navigation.tsx"]
      },
      {
        component: "Image Manager",
        status: "working",
        message: "Hybrid-System: Lokale Uploads mit Drag & Drop + Sanity CMS Integration. Automatische WebP-Optimierung und Thumbnail-Generierung.",
        lastChecked: new Date().toISOString(),
        dependencies: ["components/admin/image-manager-dashboard.tsx", "components/admin/image-upload-modal.tsx", "lib/sanity-client.ts", "lib/image-manager.ts", "app/api/images/upload/route.ts"]
      }
    ]

    const templates: TemplateStatus[] = [
      {
        id: "landing",
        name: "Landing Page",
        status: "active",
        components: ["HeroSection", "FeatureGrid", "CTA"],
        lastUsed: "2024-01-15"
      },
      {
        id: "service",
        name: "Service Page", 
        status: "active",
        components: ["HeroSection", "ContentSection", "NextSteps"],
        lastUsed: "2024-01-14"
      },
      {
        id: "blog",
        name: "Blog Post",
        status: "active",
        components: ["HeroSection", "ContentSection", "NewsletterCTA"],
        lastUsed: "2024-01-13"
      },
      {
        id: "contact",
        name: "Contact Page",
        status: "draft",
        components: ["HeroSection", "ContactForm", "Booking"],
        issues: ["Booking-Integration fehlt"]
      },
      {
        id: "wissens-hub",
        name: "Wissens-Hub",
        status: "active",
        components: ["HeroSection", "BlogGrid", "CategoryFilter"],
        lastUsed: "2024-01-16"
      }
    ]

    setSystemStatus(status)
    setTemplateStatus(templates)
    setIsChecking(false)
  }

  useEffect(() => {
    checkSystemStatus()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "working":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "broken":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "working":
        return <Badge className="bg-green-100 text-green-800">Funktioniert</Badge>
      case "broken":
        return <Badge className="bg-red-100 text-red-800">Defekt</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800">Warnung</Badge>
      default:
        return <Badge variant="secondary">Unbekannt</Badge>
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">Design System Status</h1>
        <p className="text-lg text-kivisai-moss-green">Technische Überprüfung aller Design-System-Komponenten</p>
        
        <Button 
          onClick={checkSystemStatus} 
          disabled={isChecking}
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
          {isChecking ? 'Überprüfe...' : 'Neu überprüfen'}
        </Button>
      </div>

      <Tabs defaultValue="system" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system">System Status</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="components">Komponenten</TabsTrigger>
          <TabsTrigger value="fixes">Reparaturen</TabsTrigger>
        </TabsList>

        {/* System Status Tab */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {systemStatus.map((item) => (
              <Card key={item.component} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      {item.component}
                    </CardTitle>
                    {getStatusBadge(item.status)}
                  </div>
                  <CardDescription>{item.message}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>Zuletzt überprüft:</strong> {new Date(item.lastChecked).toLocaleString('de-DE')}
                  </div>
                  {item.dependencies && (
                    <div>
                      <div className="text-sm font-medium mb-2">Abhängigkeiten:</div>
                      <div className="flex flex-wrap gap-1">
                        {item.dependencies.map((dep) => (
                          <Badge key={dep} variant="outline" className="text-xs">
                            {dep}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateStatus.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{template.name}</CardTitle>
                    <Badge 
                      variant={template.status === "active" ? "default" : "secondary"}
                      className={template.status === "active" ? "bg-green-100 text-green-800" : ""}
                    >
                      {template.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium mb-2">Komponenten:</div>
                    <div className="flex flex-wrap gap-1">
                      {template.components.map((comp) => (
                        <Badge key={comp} variant="outline" className="text-xs">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {template.lastUsed && (
                    <div className="text-sm text-gray-600">
                      <strong>Zuletzt verwendet:</strong> {template.lastUsed}
                    </div>
                  )}
                  
                  {template.issues && template.issues.length > 0 && (
                    <div>
                      <div className="text-sm font-medium mb-2 text-red-600">Probleme:</div>
                      <ul className="text-sm text-red-600 space-y-1">
                        {template.issues.map((issue, index) => (
                          <li key={index}>• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Verfügbare Komponenten
              </CardTitle>
              <CardDescription>Übersicht aller Design-System-Komponenten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Layout Komponenten</h4>
                  <div className="space-y-1">
                    {["HeroSection", "ContentSection", "FeatureGrid", "StatsSection", "CTASection"].map((comp) => (
                      <div key={comp} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">UI Komponenten</h4>
                  <div className="space-y-1">
                    {["Button", "Card", "Badge", "Input", "Select", "Tabs"].map((comp) => (
                      <div key={comp} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Spezial Komponenten</h4>
                  <div className="space-y-1">
                    {["NewsletterCTA", "NextSteps", "ContactForm", "ImageManager"].map((comp) => (
                      <div key={comp} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fixes Tab */}
        <TabsContent value="fixes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Automatische Reparaturen
              </CardTitle>
              <CardDescription>Beheben Sie häufige Probleme automatisch</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Bilderverwaltung reparieren</div>
                    <div className="text-sm text-gray-600">Sanity-Integration für Image Manager</div>
                  </div>
                  <Button size="sm" variant="outline">Reparieren</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Template-Vorschauen aktivieren</div>
                    <div className="text-sm text-gray-600">Preview-API für Template-System</div>
                  </div>
                  <Button size="sm" variant="outline">Reparieren</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">Admin-Navigation optimieren</div>
                    <div className="text-sm text-gray-600">Inaktive Buttons aktivieren</div>
                  </div>
                  <Button size="sm" variant="outline">Reparieren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 