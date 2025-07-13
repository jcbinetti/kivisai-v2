"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeOff, Layout, Layers } from "lucide-react"

interface TemplateBlock {
  name: string
  type: "hero" | "content" | "cta" | "navigation" | "footer" | "feature" | "stats"
  component: string
  description: string
}

interface PageTemplate {
  name: string
  path: string
  template: string
  blocks: TemplateBlock[]
}

const pageTemplates: PageTemplate[] = [
  {
    name: "Homepage",
    path: "/",
    template: "LandingPageTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "Hauptbereich mit Titel und CTA" },
      { name: "Stats Section", type: "stats", component: "StatsSection", description: "Kennzahlen und Erfolge" },
      { name: "Feature Grid", type: "feature", component: "FeatureGrid", description: "Leistungsübersicht" },
      { name: "CTA Section", type: "cta", component: "CtaSection", description: "Handlungsaufforderung" },
    ],
  },
  {
    name: "Leistungen Übersicht",
    path: "/leistungen",
    template: "ServiceOverviewTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "Service Hero mit Badge" },
      { name: "Service Grid", type: "feature", component: "ServiceGrid", description: "Leistungskarten" },
      { name: "CTA Section", type: "cta", component: "CtaSection", description: "Terminbuchung CTA" },
    ],
  },
  {
    name: "Service Detail",
    path: "/leistungen/*",
    template: "ServiceDetailTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "Service-spezifischer Hero" },
      { name: "Service Breadcrumb", type: "navigation", component: "ServiceBreadcrumb", description: "Navigation" },
      { name: "Content Section", type: "content", component: "ContentSection", description: "Service Details" },
      { name: "CTA Section", type: "cta", component: "CtaSection", description: "Breite CTA mit Buttons" },
    ],
  },
  {
    name: "Lösungen Übersicht",
    path: "/loesungen",
    template: "SolutionsOverviewTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "Lösungen Hero" },
      { name: "Solution Cards", type: "feature", component: "SolutionCards", description: "4 Wirkungsebenen" },
      { name: "CTA Section", type: "cta", component: "CtaSection", description: "Transformation CTA" },
    ],
  },
  {
    name: "Über KIVISAI",
    path: "/ueber-kivisai/*",
    template: "AboutTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "About Hero" },
      { name: "Content Section", type: "content", component: "ContentSection", description: "Über uns Inhalte" },
      { name: "CTA Section", type: "cta", component: "CtaSection", description: "Kontakt CTA" },
    ],
  },
  {
    name: "EVALKIT",
    path: "/evalkit",
    template: "EvalKitTemplate",
    blocks: [
      { name: "Hero Section", type: "hero", component: "HeroSection", description: "EVALKIT Hero" },
      { name: "Quiz Component", type: "feature", component: "KiReadinessQuiz", description: "Interaktiver Test" },
      { name: "Results Display", type: "content", component: "ResultsDisplay", description: "Ergebnisanzeige" },
    ],
  },
]

export function TemplateInspector() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  if (!isVisible) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={() => setIsVisible(true)} size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
          <Layout className="w-4 h-4 mr-2" />
          Design Mode
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold">Template & Block Inspector</h2>
            </div>
            <Button onClick={() => setIsVisible(false)} variant="outline" size="sm">
              <EyeOff className="w-4 h-4 mr-2" />
              Design Mode beenden
            </Button>
          </div>

          <div className="grid gap-4">
            {pageTemplates.map((template) => (
              <Card
                key={template.path}
                className={`cursor-pointer transition-all ${
                  selectedTemplate === template.path ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedTemplate(selectedTemplate === template.path ? null : template.path)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {template.name}
                        <Badge variant="outline">{template.template}</Badge>
                      </CardTitle>
                      <CardDescription>{template.path}</CardDescription>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">{template.blocks.length} Blöcke</Badge>
                  </div>
                </CardHeader>

                {selectedTemplate === template.path && (
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Template Blöcke:
                      </h4>
                      <div className="grid gap-2">
                        {template.blocks.map((block, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">{block.name}</div>
                              <div className="text-sm text-gray-600">{block.description}</div>
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                variant={
                                  block.type === "hero" ? "default" : block.type === "cta" ? "destructive" : "secondary"
                                }
                              >
                                {block.type}
                              </Badge>
                              <Badge variant="outline" className="font-mono text-xs">
                                {block.component}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
