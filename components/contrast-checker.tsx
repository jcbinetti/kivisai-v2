"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

// Funktion zur Berechnung des Kontrastverhältnisses
function calculateContrastRatio(color1: string, color2: string): number {
  // Konvertiere Hex zu RGB
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)

    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  // Berechne relative Luminanz
  const calculateLuminance = (rgb: { r: number; g: number; b: number }) => {
    const { r, g, b } = rgb
    const a = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const luminance1 = calculateLuminance(rgb1)
  const luminance2 = calculateLuminance(rgb2)

  const brightest = Math.max(luminance1, luminance2)
  const darkest = Math.min(luminance1, luminance2)

  return (brightest + 0.05) / (darkest + 0.05)
}

// Funktion zur Bestimmung des WCAG-Levels
function getWCAGLevel(ratio: number): { level: string; pass: "AA" | "AAA" | "fail" } {
  if (ratio >= 7) {
    return { level: "AAA", pass: "AAA" }
  } else if (ratio >= 4.5) {
    return { level: "AA", pass: "AA" }
  } else if (ratio >= 3) {
    return { level: "AA Large", pass: "AA" }
  } else {
    return { level: "Fail", pass: "fail" }
  }
}

export function ContrastChecker() {
  const [foreground, setForeground] = useState("#FFFFFF")
  const [background, setBackground] = useState("#001F3F")
  const [contrastRatio, setContrastRatio] = useState(0)
  const [wcagLevel, setWcagLevel] = useState({ level: "", pass: "fail" as "AA" | "AAA" | "fail" })
  const [sampleText, setSampleText] = useState("Beispieltext")

  useEffect(() => {
    const ratio = calculateContrastRatio(foreground, background)
    setContrastRatio(ratio)
    setWcagLevel(getWCAGLevel(ratio))
  }, [foreground, background])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kontrast-Checker</CardTitle>
        <CardDescription>
          Überprüfen Sie den Kontrast zwischen Text- und Hintergrundfarbe für optimale Lesbarkeit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="foreground">Textfarbe (Hex)</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="foreground"
                  value={foreground}
                  onChange={(e) => setForeground(e.target.value)}
                  className="font-mono"
                />
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: foreground }} />
              </div>
            </div>

            <div>
              <Label htmlFor="background">Hintergrundfarbe (Hex)</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="background"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="font-mono"
                />
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: background }} />
              </div>
            </div>

            <div>
              <Label htmlFor="sample-text">Beispieltext</Label>
              <Input id="sample-text" value={sampleText} onChange={(e) => setSampleText(e.target.value)} />
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Kontrastverhältnis:</span>
                <span className="font-mono">{contrastRatio.toFixed(2)}:1</span>
                {wcagLevel.pass === "AAA" ? (
                  <Badge className="bg-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    AAA
                  </Badge>
                ) : wcagLevel.pass === "AA" ? (
                  <Badge className="bg-yellow-600">
                    <Info className="h-3 w-3 mr-1" />
                    AA
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Fail
                  </Badge>
                )}
              </div>

              <p className="text-sm text-gray-600">
                {wcagLevel.pass === "AAA"
                  ? "Ausgezeichneter Kontrast! Erfüllt höchste Accessibility-Standards."
                  : wcagLevel.pass === "AA"
                    ? "Guter Kontrast. Erfüllt die grundlegenden Accessibility-Anforderungen."
                    : "Unzureichender Kontrast. Bitte wählen Sie Farben mit höherem Kontrast."}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Vorschau</h4>
              <div className="p-6 rounded-lg" style={{ backgroundColor: background, color: foreground }}>
                <p className="text-2xl font-bold mb-2">{sampleText}</p>
                <p className="mb-4">
                  Dies ist ein Beispieltext, um den Kontrast zwischen Text und Hintergrund zu demonstrieren.
                </p>
                <div
                  className="inline-block px-4 py-2 rounded font-medium"
                  style={{ backgroundColor: foreground, color: background }}
                >
                  Umgekehrter Kontrast
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">WCAG Richtlinien</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${contrastRatio >= 3 ? "bg-green-500" : "bg-red-500"}`}></span>
                  AA (Große Texte): 3:1 oder höher
                </li>
                <li className="flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${contrastRatio >= 4.5 ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  AA (Normaler Text): 4.5:1 oder höher
                </li>
                <li className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${contrastRatio >= 7 ? "bg-green-500" : "bg-red-500"}`}></span>
                  AAA (Alle Texte): 7:1 oder höher
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
