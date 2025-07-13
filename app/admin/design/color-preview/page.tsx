"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Vereinfachte Farbdefinitionen
const BRAND_COLORS = {
  deepDarkBlue: "#001F3F",
  clearTurquoise: "#006666",
  mossGreen: "#36454F",
  pureWhite: "#FFFFFF",
  lightCoolGray: "#F8F9FA",
}

const COLOR_OPTIONS = [
  {
    id: "vibrant-turquoise",
    name: "Vibrant Turquoise",
    main: "#00B4B4",
    hover: "#009999",
    light: "#E0F7F7",
    contrast: "#FFFFFF",
    description: "Logo-harmonisch, vertrauensvoll, professionell",
    psychology: "Vertrauen + Innovation + Klarheit",
    accessibility: "AAA (4.8:1)",
    recommended: true,
  },
  {
    id: "energy-orange",
    name: "Energy Orange",
    main: "#FF6B35",
    hover: "#E55A2B",
    light: "#FFF2ED",
    contrast: "#FFFFFF",
    description: "Energisch, auffällig, handlungsfördernd",
    psychology: "Energie + Optimismus + Handlung",
    accessibility: "AA (3.2:1)",
    recommended: false,
  },
  {
    id: "professional-gold",
    name: "Professional Gold",
    main: "#FFB800",
    hover: "#E6A600",
    light: "#FFF8E1",
    contrast: "#000000",
    description: "Premium, hochwertig, luxuriös",
    psychology: "Qualität + Erfolg + Wertigkeit",
    accessibility: "AA (3.1:1)",
    recommended: false,
  },
  {
    id: "bright-cyan",
    name: "Bright Cyan",
    main: "#00CCCC",
    hover: "#00B3B3",
    light: "#E0FFFF",
    contrast: "#FFFFFF",
    description: "Modern, frisch, innovativ",
    psychology: "Innovation + Frische + Modernität",
    accessibility: "AAA (5.2:1)",
    recommended: false,
  },
]

export default function ColorPreviewPage() {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">KIVISAI Farbauswahl</h1>
          <p className="text-xl opacity-90">Wählen Sie die perfekte Call-to-Action Farbe für Ihr Branding</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Farbauswahl */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Farboptionen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLOR_OPTIONS.map((color) => (
              <Card
                key={color.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedColor.id === color.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{color.name}</CardTitle>
                    {color.recommended && <Badge className="bg-green-100 text-green-800">Empfohlen</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Farbvorschau */}
                  <div className="space-y-2">
                    <div className="w-full h-16 rounded-lg border" style={{ backgroundColor: color.main }} />
                    <div className="text-sm font-mono text-gray-600">{color.main}</div>
                  </div>

                  {/* Eigenschaften */}
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Psychologie:</span>
                      <div className="text-gray-600">{color.psychology}</div>
                    </div>
                    <div>
                      <span className="font-medium">Accessibility:</span>
                      <div className="text-gray-600">{color.accessibility}</div>
                    </div>
                  </div>

                  {/* Test Button */}
                  <Button
                    className="w-full"
                    style={{
                      backgroundColor: color.main,
                      color: color.contrast,
                      border: "none",
                    }}
                  >
                    Test Button
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Vorschau */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Live Vorschau: {selectedColor.name}</h2>

          {/* Hero Section Beispiel */}
          <Card>
            <CardHeader>
              <CardTitle>Hero Section Beispiel</CardTitle>
              <CardDescription>So würde Ihre Hauptseite aussehen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-8 rounded-lg text-white" style={{ backgroundColor: BRAND_COLORS.deepDarkBlue }}>
                <h3 className="text-3xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
                  KI-Potenzialanalyse
                </h3>
                <p className="text-lg mb-6 opacity-90" style={{ color: "#FFFFFF" }}>
                  Entdecken Sie die KI-Möglichkeiten in Ihrem Unternehmen
                </p>
                <Button
                  size="lg"
                  style={{
                    backgroundColor: selectedColor.main,
                    color: selectedColor.contrast,
                    border: "none",
                  }}
                >
                  Analyse starten
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service Card Beispiel */}
          <Card>
            <CardHeader>
              <CardTitle>Service Card Beispiel</CardTitle>
              <CardDescription>So würden Ihre Service-Karten aussehen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6 bg-white">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">KI-Prototyping</h4>
                  <p className="text-gray-600 mb-4">Entwickeln Sie funktionsfähige KI-Prototypen für Ihr Unternehmen</p>
                  <Button
                    style={{
                      backgroundColor: selectedColor.main,
                      color: selectedColor.contrast,
                      border: "none",
                    }}
                  >
                    Mehr erfahren
                  </Button>
                </div>
                <div className="border rounded-lg p-6 bg-white">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">KI-Begleitung</h4>
                  <p className="text-gray-600 mb-4">Professionelle Begleitung bei der KI-Implementierung</p>
                  <Button
                    variant="outline"
                    style={{
                      borderColor: selectedColor.main,
                      color: selectedColor.main,
                    }}
                  >
                    Beratung buchen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter CTA Beispiel */}
          <Card>
            <CardHeader>
              <CardTitle>Newsletter CTA Beispiel</CardTitle>
              <CardDescription>So würde Ihr Newsletter-Bereich aussehen</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-lg text-center" style={{ backgroundColor: selectedColor.light }}>
                <h4 className="text-2xl font-bold mb-3 text-gray-900">Bleiben Sie auf dem Laufenden</h4>
                <p className="text-gray-600 mb-4">Erhalten Sie die neuesten KI-Insights direkt in Ihr Postfach</p>
                <Button
                  size="lg"
                  style={{
                    backgroundColor: selectedColor.main,
                    color: selectedColor.contrast,
                    border: "none",
                  }}
                >
                  Newsletter abonnieren
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Entscheidungshilfe */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Warum {selectedColor.name}?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h5 className="font-bold mb-2">Beschreibung</h5>
                <p className="text-gray-600">{selectedColor.description}</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Psychologische Wirkung</h5>
                <p className="text-gray-600">{selectedColor.psychology}</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Accessibility</h5>
                <p className="text-gray-600">Kontrastverhältnis: {selectedColor.accessibility}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aktions-Buttons */}
        <div className="flex gap-4 justify-center mt-12">
          <Button
            size="lg"
            style={{
              backgroundColor: selectedColor.main,
              color: selectedColor.contrast,
              border: "none",
            }}
          >
            Diese Farbe verwenden
          </Button>
          <Button variant="outline" size="lg">
            Weitere Tests
          </Button>
        </div>
      </div>
    </div>
  )
}
