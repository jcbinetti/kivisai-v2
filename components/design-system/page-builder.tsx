"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import clsx from "clsx"

// Demo catalogue (was already in the previous file)
const availableComponents = [
  {
    id: "hero-section",
    name: "Hero Section",
    category: "Layout",
    description: "Hauptbereich mit Titel und CTA",
    props: ["title", "subtitle", "ctaText", "backgroundImage"],
  },
  {
    id: "content-section",
    name: "Content Section",
    category: "Layout",
    description: "Flexibler Inhaltsbereich",
    props: ["variant", "background", "padding", "title"],
  },
  {
    id: "feature-grid",
    name: "Feature Grid",
    category: "Content",
    description: "Grid für Features/Services",
    props: ["columns", "features", "showIcons"],
  },
  {
    id: "stats-section",
    name: "Stats Section",
    category: "Content",
    description: "Statistiken und Zahlen",
    props: ["stats", "layout", "animated"],
  },
  {
    id: "cta-section",
    name: "CTA Section",
    category: "Conversion",
    description: "Call-to-Action Bereich",
    props: ["title", "description", "buttonText", "buttonLink"],
  },
  {
    id: "newsletter-cta",
    name: "Newsletter CTA",
    category: "Conversion",
    description: "Newsletter Anmeldung",
    props: ["title", "description", "placeholder"],
  },
  {
    id: "next-steps-section",
    name: "Next Steps",
    category: "Navigation",
    description: "Nächste Schritte für Nutzer",
    props: ["pageType", "customSteps"],
  },
]

const categories = [...new Set(availableComponents.map((c) => c.category))] as string[]

export function PageBuilder() {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all")

  const filtered =
    selectedCategory === "all"
      ? availableComponents
      : availableComponents.filter((c) => c.category === selectedCategory)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">Page-Builder Komponenten</h1>

      {/* Tabs for category filters */}
      <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as typeof selectedCategory)}>
        <TabsList className="mb-8 overflow-x-auto">
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={selectedCategory}>
          {/* Component cards */}
          <ScrollArea className="h-[60vh]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((component) => (
                <Card key={component.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{component.name}</CardTitle>
                    <Badge variant="outline" className={clsx("text-xs", "capitalize")}>
                      {component.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-kivisai-moss-green">{component.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {component.props.map((prop) => (
                        <Badge key={prop} variant="secondary">
                          {prop}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center p-8">
                  <p className="text-kivisai-moss-green">Keine Komponenten in dieser Kategorie.</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* provide both default and named export for maximum flexibility */
export default PageBuilder
