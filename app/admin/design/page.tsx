"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Palette, 
  Type, 
  Grid, 
  Download, 
  Settings,
  Eye,
  Copy,
  Check
} from "lucide-react";

export default function AdminDesignPage() {
  const [activeTab, setActiveTab] = useState("colors");

  // KIVISAI Brand Colors
  const brandColors = [
    {
      name: "Deep Dark Blue",
      hex: "#0F172A",
      rgb: "15, 23, 42",
      hsl: "220, 47%, 11%",
      usage: "Primary text, Headers"
    },
    {
      name: "Vibrant Turquoise",
      hex: "#00D4AA",
      rgb: "0, 212, 170",
      hsl: "168, 100%, 42%",
      usage: "Primary accent, CTAs"
    },
    {
      name: "Clear Turquoise",
      hex: "#00F5D4",
      rgb: "0, 245, 212",
      hsl: "172, 100%, 48%",
      usage: "Secondary accent, Highlights"
    },
    {
      name: "Light Cool Gray",
      hex: "#F8FAFC",
      rgb: "248, 250, 252",
      hsl: "210, 40%, 98%",
      usage: "Backgrounds, Cards"
    },
    {
      name: "Warm Gray",
      hex: "#F1F5F9",
      rgb: "241, 245, 249",
      hsl: "210, 40%, 98%",
      usage: "Secondary backgrounds"
    },
    {
      name: "Medium Gray",
      hex: "#64748B",
      rgb: "100, 116, 139",
      hsl: "217, 19%, 47%",
      usage: "Secondary text"
    },
    {
      name: "Moss Green",
      hex: "#10B981",
      rgb: "16, 185, 129",
      hsl: "160, 84%, 39%",
      usage: "Success states, Nature themes"
    },
    {
      name: "Coral Red",
      hex: "#F59E0B",
      rgb: "245, 158, 11",
      hsl: "43, 92%, 50%",
      usage: "Warnings, Highlights"
    },
    {
      name: "Deep Purple",
      hex: "#8B5CF6",
      rgb: "139, 92, 246",
      hsl: "262, 83%, 66%",
      usage: "Premium features, Innovation"
    },
    {
      name: "Ocean Blue",
      hex: "#3B82F6",
      rgb: "59, 130, 246",
      hsl: "217, 91%, 60%",
      usage: "Trust, Technology"
    }
  ];

  // Gradients
  const gradients = [
    {
      name: "Primary Gradient",
      colors: ["#00D4AA", "#00F5D4"],
      usage: "Hero sections, Buttons"
    },
    {
      name: "Background Gradient",
      colors: ["#F8FAFC", "#F1F5F9"],
      usage: "Page backgrounds"
    },
    {
      name: "Accent Gradient",
      colors: ["#0F172A", "#1E293B"],
      usage: "Dark sections"
    },
    {
      name: "Homepage Hero Gradient",
      colors: ["#0F172A", "#00F5D4"],
      usage: "Homepage Hero-Bereich"
    },
    {
      name: "Turquoise Flow",
      colors: ["#00D4AA", "#00F5D4", "#A7F3D0"],
      usage: "Interactive elements, Hover states"
    },
    {
      name: "Sunset Warmth",
      colors: ["#F59E0B", "#FBBF24", "#FCD34D"],
      usage: "Warm accents, Call-to-action"
    },
    {
      name: "Ocean Depth",
      colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
      usage: "Trust sections, Technology themes"
    },
    {
      name: "Nature Growth",
      colors: ["#10B981", "#34D399", "#6EE7B7"],
      usage: "Success states, Growth indicators"
    },
    {
      name: "Innovation Purple",
      colors: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
      usage: "Premium features, Innovation sections"
    }
  ];

  // Background Colors
  const backgroundColors = [
    {
      name: "Primary Background",
      hex: "#F8FAFC",
      rgb: "248, 250, 252",
      hsl: "210, 40%, 98%",
      usage: "Main page background"
    },
    {
      name: "Secondary Background",
      hex: "#F1F5F9",
      rgb: "241, 245, 249",
      hsl: "210, 40%, 98%",
      usage: "Section backgrounds"
    },
    {
      name: "Card Background",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      hsl: "0, 0%, 100%",
      usage: "Card and component backgrounds"
    },
    {
      name: "Dark Background",
      hex: "#0F172A",
      rgb: "15, 23, 42",
      hsl: "220, 47%, 11%",
      usage: "Dark sections, Footer"
    },
    {
      name: "Accent Background",
      hex: "#E0F2FE",
      rgb: "224, 242, 254",
      hsl: "204, 94%, 94%",
      usage: "Highlighted sections"
    },
    {
      name: "Success Background",
      hex: "#ECFDF5",
      rgb: "236, 253, 245",
      hsl: "152, 81%, 96%",
      usage: "Success messages, Positive feedback"
    },
    {
      name: "Warning Background",
      hex: "#FFFBEB",
      rgb: "255, 251, 235",
      hsl: "48, 100%, 96%",
      usage: "Warning messages, Alerts"
    },
    {
      name: "Error Background",
      hex: "#FEF2F2",
      rgb: "254, 242, 242",
      hsl: "0, 86%, 97%",
      usage: "Error messages, Critical alerts"
    }
  ];

  // Typography
  const typography = [
    {
      name: "Heading 1",
      size: "3rem",
      weight: "700",
      lineHeight: "1.2",
      usage: "Main page titles"
    },
    {
      name: "Heading 2",
      size: "2.25rem",
      weight: "600",
      lineHeight: "1.3",
      usage: "Section headers"
    },
    {
      name: "Heading 3",
      size: "1.875rem",
      weight: "600",
      lineHeight: "1.4",
      usage: "Subsection headers"
    },
    {
      name: "Body Large",
      size: "1.125rem",
      weight: "400",
      lineHeight: "1.6",
      usage: "Main content"
    },
    {
      name: "Body",
      size: "1rem",
      weight: "400",
      lineHeight: "1.6",
      usage: "Regular text"
    },
    {
      name: "Small",
      size: "0.875rem",
      weight: "400",
      lineHeight: "1.5",
      usage: "Captions, metadata"
    }
  ];

  // Spacing
  const spacing = [
    { name: "xs", value: "0.25rem", usage: "4px" },
    { name: "sm", value: "0.5rem", usage: "8px" },
    { name: "md", value: "1rem", usage: "16px" },
    { name: "lg", value: "1.5rem", usage: "24px" },
    { name: "xl", value: "2rem", usage: "32px" },
    { name: "2xl", value: "3rem", usage: "48px" },
    { name: "3xl", value: "4rem", usage: "64px" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Design System"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">KIVISAI Design System</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" size="sm" aria-label="Design-Token als CSS exportieren" title="Design-Token als CSS exportieren">
                <Download className="h-4 w-4 mr-2" />
                Export CSS
              </Button>
              <Button variant="kivisai" size="sm" aria-label="Design-System Einstellungen öffnen" title="Design-System Einstellungen öffnen">
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>
          <p className="text-gray-600">
            Verwalten Sie die KIVISAI Markenfarben, Typografie und Design-Tokens
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow border border-kivisai-light-cool-gray">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "colors", label: "Farben", icon: <Palette className="h-4 w-4" /> },
                { id: "backgrounds", label: "Hintergründe", icon: <Palette className="h-4 w-4" /> },
                { id: "typography", label: "Typografie", icon: <Type className="h-4 w-4" /> },
                { id: "spacing", label: "Abstände", icon: <Grid className="h-4 w-4" /> },
                { id: "gradients", label: "Verläufe", icon: <Palette className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-kivisai-vibrant-turquoise text-kivisai-deep-dark-blue"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Colors Tab */}
            {activeTab === "colors" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-4">Markenfarben</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {brandColors.map((color) => (
                      <Card key={color.name} className="border-kivisai-light-cool-gray">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-kivisai-deep-dark-blue">{color.name}</h4>
                              <p className="text-sm text-gray-500">{color.usage}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">HEX:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hex}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.hex)}
                                  aria-label="HEX kopieren"
                                  title="HEX kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">RGB:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.rgb}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.rgb)}
                                  aria-label="RGB kopieren"
                                  title="RGB kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">HSL:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hsl}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.hsl)}
                                  aria-label="HSL kopieren"
                                  title="HSL kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Background Colors Tab */}
            {activeTab === "backgrounds" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-4">Hintergrundfarben</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {backgroundColors.map((color) => (
                      <Card key={color.name} className="border-kivisai-light-cool-gray">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-gray-200"
                              style={{ backgroundColor: color.hex }}
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-kivisai-deep-dark-blue">{color.name}</h4>
                              <p className="text-sm text-gray-500">{color.usage}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">HEX:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hex}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.hex)}
                                  aria-label="HEX kopieren"
                                  title="HEX kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">RGB:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.rgb}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.rgb)}
                                  aria-label="RGB kopieren"
                                  title="RGB kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">HSL:</span>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hsl}</code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(color.hsl)}
                                  aria-label="HSL kopieren"
                                  title="HSL kopieren"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Typography Tab */}
            {activeTab === "typography" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-4">Typografie</h3>
                  <div className="space-y-4">
                    {typography.map((type) => (
                      <Card key={type.name} className="border-kivisai-light-cool-gray">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-kivisai-deep-dark-blue">{type.name}</h4>
                            <Badge variant="outline">{type.usage}</Badge>
                          </div>
                          <div 
                            className="mb-3"
                            style={{
                              fontSize: type.size,
                              fontWeight: type.weight,
                              lineHeight: type.lineHeight,
                              color: "#0F172A"
                            }}
                          >
                            The quick brown fox jumps over the lazy dog
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Size:</span> {type.size}
                            </div>
                            <div>
                              <span className="font-medium">Weight:</span> {type.weight}
                            </div>
                            <div>
                              <span className="font-medium">Line Height:</span> {type.lineHeight}
                            </div>
                            <div>
                              <span className="font-medium">Usage:</span> {type.usage}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Spacing Tab */}
            {activeTab === "spacing" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-4">Abstände</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spacing.map((space) => (
                      <Card key={space.name} className="border-kivisai-light-cool-gray">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-kivisai-deep-dark-blue">{space.name}</h4>
                            <Badge variant="outline">{space.usage}</Badge>
                          </div>
                          <div className="flex items-center gap-3">
                            <div 
                              className="bg-kivisai-vibrant-turquoise rounded"
                              style={{ 
                                width: space.value, 
                                height: space.value,
                                minWidth: space.value,
                                minHeight: space.value
                              }}
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{space.value}</div>
                              <div className="text-xs text-gray-500">{space.usage}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Gradients Tab */}
            {activeTab === "gradients" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-4">Verläufe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gradients.map((gradient) => (
                      <Card key={gradient.name} className="border-kivisai-light-cool-gray">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-kivisai-deep-dark-blue">{gradient.name}</h4>
                            <Badge variant="outline">{gradient.usage}</Badge>
                          </div>
                          <div 
                            className="w-full h-20 rounded-lg mb-3"
                            style={{
                              background: `linear-gradient(135deg, ${gradient.colors.join(', ')})`
                            }}
                          />
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Colors:</span>
                              <div className="flex gap-1">
                                {gradient.colors.map((color, index) => (
                                  <div
                                    key={index}
                                    className="w-4 h-4 rounded border border-gray-200"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">CSS:</span>
                              <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1">
                                background: linear-gradient(135deg, {gradient.colors.join(', ')})
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(`background: linear-gradient(135deg, ${gradient.colors.join(', ')})`)}
                                aria-label="Gradient CSS kopieren"
                                title="Gradient CSS kopieren"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Design Tokens Export */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="text-kivisai-deep-dark-blue">Design Tokens Export</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="kivisaiOutline" className="w-full" aria-label="CSS-Variablen exportieren" title="CSS-Variablen exportieren">
                <Download className="h-4 w-4 mr-2" />
                CSS Variables
              </Button>
              <Button variant="kivisaiOutline" className="w-full" aria-label="Tailwind-Konfiguration exportieren" title="Tailwind-Konfiguration exportieren">
                <Download className="h-4 w-4 mr-2" />
                Tailwind Config
              </Button>
              <Button variant="kivisaiOutline" className="w-full" aria-label="Figma-Tokens exportieren" title="Figma-Tokens exportieren">
                <Download className="h-4 w-4 mr-2" />
                Figma Tokens
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
} 