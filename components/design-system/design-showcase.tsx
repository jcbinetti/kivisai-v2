/**
 * Design System Showcase
 * Interaktive Dokumentation aller Design-Komponenten
 */

"use client"

import { useState } from "react"
import { BRAND_COLORS, TYPOGRAPHY, SPACING } from "@/lib/design-system"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

export function DesignShowcase() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">KIVISAI Design System</h1>
        <p className="text-lg text-kivisai-moss-green">Konsistente Design-Sprache für alle KIVISAI-Anwendungen</p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="colors">Farben</TabsTrigger>
          <TabsTrigger value="typography">Typografie</TabsTrigger>
          <TabsTrigger value="components">Komponenten</TabsTrigger>
          <TabsTrigger value="spacing">Abstände</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Unsere Markenfarben mit semantischer Bedeutung</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(BRAND_COLORS).map(([name, color]) => (
                  <div
                    key={name}
                    className="space-y-2 cursor-pointer"
                    onClick={() => setSelectedColor(selectedColor === name ? null : name)}
                  >
                    <div
                      className="w-full h-20 rounded-lg border-2 border-gray-200 transition-transform hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-sm">
                      <div className="font-semibold capitalize">{name}</div>
                      <div className="text-gray-500 font-mono">{color}</div>
                    </div>
                    {selectedColor === name && (
                      <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">{getColorDescription(name)}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
              <CardDescription>Konsistente Schriftgrößen und -gewichte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(TYPOGRAPHY.fontSize).map(([size, value]) => (
                <div key={size} className="flex items-center space-x-4">
                  <Badge variant="outline" className="w-16 text-xs">
                    {size}
                  </Badge>
                  <div style={{ fontSize: value }} className="font-medium">
                    The quick brown fox jumps over the lazy dog
                  </div>
                  <span className="text-sm text-gray-500 font-mono">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Alle verfügbaren Button-Stile und Größen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Standard Variants */}
                <div>
                  <h4 className="font-semibold mb-3">Standard Variants</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="default">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="font-semibold mb-3">Button Sizes</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* KIVISAI Custom Styles */}
                <div>
                  <h4 className="font-semibold mb-3">KIVISAI Custom Styles</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button className="bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise">
                      Deep Dark Blue
                    </Button>
                    <Button className="bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue">
                      Clear Turquoise
                    </Button>
                    <Button className="bg-kivisai-vibrant-light-green hover:bg-kivisai-moss-green text-black">
                      Vibrant Green
                    </Button>
                    <Button variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      Outline Turquoise
                    </Button>
                    <Button variant="ghost" className="text-kivisai-deep-dark-blue hover:bg-kivisai-light-cool-gray">
                      Ghost KIVISAI
                    </Button>
                  </div>
                </div>

                {/* States */}
                <div>
                  <h4 className="font-semibold mb-3">Button States</h4>
                  <div className="flex flex-wrap gap-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button className="opacity-75">Loading State</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Variants</CardTitle>
              <CardDescription>Verschiedene Card-Stile für unterschiedliche Anwendungen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Default Card</CardTitle>
                  </CardHeader>
                  <CardContent>Standard Card mit Schatten</CardContent>
                </Card>

                <Card className="border-kivisai-vibrant-light-green">
                  <CardHeader>
                    <CardTitle>Highlighted Card</CardTitle>
                  </CardHeader>
                  <CardContent>Card mit Akzent-Border</CardContent>
                </Card>

                <Card className="bg-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle>Background Card</CardTitle>
                  </CardHeader>
                  <CardContent>Card mit Hintergrundfarbe</CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>Konsistente Abstände für Layout und Komponenten</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(SPACING)
                  .slice(0, 10)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-4">
                      <Badge variant="outline" className="w-12 text-xs">
                        {key}
                      </Badge>
                      <div className="bg-kivisai-vibrant-light-green h-4" style={{ width: value }} />
                      <span className="text-sm text-gray-500 font-mono">{value}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Templates</CardTitle>
              <CardDescription>Vordefinierte Seitenlayouts für konsistente Gestaltung</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold">Landing Page</h3>
                  <div className="text-sm text-gray-600">Hero + Features + Stats + CTA</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-kivisai-vibrant-light-green rounded w-full" />
                    <div className="h-2 bg-kivisai-clear-turquoise rounded w-3/4" />
                    <div className="h-2 bg-kivisai-moss-green rounded w-1/2" />
                    <div className="h-2 bg-kivisai-deep-dark-blue rounded w-2/3" />
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold">Service Page</h3>
                  <div className="text-sm text-gray-600">Hero + Content + Features + Next Steps</div>
                  <div className="space-y-1">
                    <div className="h-2 bg-kivisai-deep-dark-blue rounded w-full" />
                    <div className="h-2 bg-kivisai-moss-green rounded w-4/5" />
                    <div className="h-2 bg-kivisai-clear-turquoise rounded w-3/5" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getColorDescription(colorName: string): string {
  const descriptions: Record<string, string> = {
    deepDarkBlue: "Vertrauen, Professionalität, Intelligenz, Zukunft",
    clearTurquoise: "Innovation, Klarheit, Technologie, Erneuerung",
    mossGreen: "Regeneration, Wachstum, Nachhaltigkeit, Resilienz",
    vibrantLightGreen: "Energie, Aktion, Wirksamkeit, Neuanfang",
    pureWhite: "Klarheit, Modernität, Freiraum, Lesbarkeit",
    lightCoolGray: "Subtilität, Struktur, moderne Ästhetik",
  }
  return descriptions[colorName] || "Semantische Bedeutung"
}
