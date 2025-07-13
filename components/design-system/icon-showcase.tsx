"use client"

import {
  Lightbulb,
  Rocket,
  Users,
  Target,
  Brain,
  ShieldCheck,
  UserPlus,
  TrendingUp,
  CheckCircle,
  Calendar,
  ArrowRight,
  Search,
  BarChart,
  Share2,
  Leaf,
  Zap,
  Cog,
  Euro,
  Clock,
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Book,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const KIVISAI_ICONS = {
  // Service Icons
  service: [
    { name: "Lightbulb", icon: Lightbulb, usage: "KI-Potenzialanalyse, Ideen, Innovation" },
    { name: "Rocket", icon: Rocket, usage: "KI-Prototyping, Start, Umsetzung" },
    { name: "Users", icon: Users, usage: "Team, Coaching, Zusammenarbeit" },
    { name: "UserPlus", icon: UserPlus, usage: "Persönliches Coaching, 1:1 Betreuung" },
    { name: "Brain", icon: Brain, usage: "Strategie, Intelligenz, Denken" },
    { name: "Target", icon: Target, usage: "Ziele, Fokus, Analyse" },
  ],

  // Process Icons
  process: [
    { name: "Search", icon: Search, usage: "Analyse, Recherche, Untersuchung" },
    { name: "BarChart", icon: BarChart, usage: "Daten, Statistiken, Ergebnisse" },
    { name: "TrendingUp", icon: TrendingUp, usage: "Wachstum, Erfolg, Verbesserung" },
    { name: "Share2", icon: Share2, usage: "Teilen, Kollaboration, Vernetzung" },
    { name: "Leaf", icon: Leaf, usage: "Nachhaltigkeit, Wachstum, Entwicklung" },
    { name: "Zap", icon: Zap, usage: "Energie, Schnelligkeit, Power" },
    { name: "Cog", icon: Cog, usage: "Konfiguration, Einstellungen, Technik" },
  ],

  // UI Icons
  ui: [
    { name: "CheckCircle", icon: CheckCircle, usage: "Bestätigung, Erfolg, Abgeschlossen" },
    { name: "ArrowRight", icon: ArrowRight, usage: "Navigation, Weiter, Call-to-Action" },
    { name: "Calendar", icon: Calendar, usage: "Termine, Planung, Zeitmanagement" },
    { name: "Clock", icon: Clock, usage: "Zeit, Dauer, Zeitplan" },
    { name: "MapPin", icon: MapPin, usage: "Ort, Standort, Lokalisierung" },
  ],

  // Communication Icons
  communication: [
    { name: "Phone", icon: Phone, usage: "Telefon, Kontakt, Anruf" },
    { name: "Mail", icon: Mail, usage: "E-Mail, Nachricht, Kontakt" },
    { name: "Download", icon: Download, usage: "Herunterladen, Ressourcen" },
    { name: "ExternalLink", icon: ExternalLink, usage: "Externe Links, Weiterleitung" },
  ],

  // Security & Trust Icons
  security: [
    { name: "ShieldCheck", icon: ShieldCheck, usage: "Sicherheit, Vertrauen, Schutz" },
    { name: "Shield", icon: Shield, usage: "Schutz, Sicherheit, Verteidigung" },
    { name: "Book", icon: Book, usage: "Wissen, Dokumentation, Lernen" },
    { name: "Euro", icon: Euro, usage: "Preise, Kosten, Finanzen" },
  ],
}

export function IconShowcase() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue">KIVISAI Icon System</h1>
        <p className="text-lg text-kivisai-moss-green">Konsistente Icon-Sprache basierend auf Lucide React Icons</p>
      </div>

      {Object.entries(KIVISAI_ICONS).map(([category, icons]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="capitalize">{category} Icons</CardTitle>
            <CardDescription>
              Icons für{" "}
              {category === "service"
                ? "Services und Leistungen"
                : category === "process"
                  ? "Prozesse und Workflows"
                  : category === "ui"
                    ? "Benutzeroberfläche und Navigation"
                    : category === "communication"
                      ? "Kommunikation und Kontakt"
                      : "Sicherheit und Vertrauen"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {icons.map(({ name, icon: Icon, usage }) => (
                <div key={name} className="flex items-start space-x-4 p-4 bg-kivisai-light-cool-gray rounded-lg">
                  <div className="w-12 h-12 bg-kivisai-deep-dark-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-kivisai-deep-dark-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {name}
                      </Badge>
                    </div>
                    <p className="text-sm text-kivisai-moss-green">{usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>Icon Guidelines</CardTitle>
          <CardDescription>Richtlinien für die Verwendung von Icons im KIVISAI Design System</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Größen</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-4 h-4 text-kivisai-deep-dark-blue" />
                  <span className="text-sm">16px - Inline Text</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-kivisai-deep-dark-blue" />
                  <span className="text-sm">24px - Standard UI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-8 h-8 text-kivisai-deep-dark-blue" />
                  <span className="text-sm">32px - Feature Icons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-12 h-12 text-kivisai-deep-dark-blue" />
                  <span className="text-sm">48px - Hero Icons</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Farben</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-kivisai-deep-dark-blue" />
                  <span className="text-sm">Deep Dark Blue - Primary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-kivisai-clear-turquoise" />
                  <span className="text-sm">Clear Turquoise - Accent</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-kivisai-moss-green" />
                  <span className="text-sm">Moss Green - Secondary</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-6 h-6 text-kivisai-vibrant-light-green" />
                  <span className="text-sm">Vibrant Light Green - Success</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-kivisai-vibrant-light-green/10 rounded-lg border border-kivisai-vibrant-light-green/20">
            <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Wichtige Hinweise</h4>
            <ul className="text-sm text-kivisai-moss-green space-y-1">
              <li>• Alle Icons stammen aus der Lucide React Bibliothek für Konsistenz</li>
              <li>• Icons sollten semantisch korrekt verwendet werden</li>
              <li>• Verwenden Sie Icons sparsam und gezielt</li>
              <li>• Achten Sie auf ausreichenden Kontrast für Barrierefreiheit</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
