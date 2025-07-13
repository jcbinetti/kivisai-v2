"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Building2,
  Recycle,
  User,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Brain,
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  Calendar,
  Mail,
  MapPin,
} from "lucide-react"
import UseCaseBreadcrumb from "@/components/common/use-case-breadcrumb"

export default function KIPotenzialLandkartePage() {
  const [activeTab, setActiveTab] = useState("mensch")

  const ebenen = {
    mensch: {
      title: "Mensch",
      icon: User,
      image: "/images/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.png",
      color: "from-blue-500 to-purple-600",
      iconColor: "bg-blue-500",
      tabColor: "blue-500",
      herausforderung: "Kompetenzerwerb",
      details: [
        "Die Kunst der Kommunikation (Prompting) erlernen",
        "Strategisches Wissen über die richtigen Tools für spezifische Aufgaben aufbauen",
      ],
      dimensionen: [
        "Interaktiv (Dialog mit der KI)",
        "Generativ (Inhalte erstellen)",
        "Assistierend (Aufgaben erleichtern)",
      ],
      bereiche: ["GenKI (Generative KI)", "Große Sprachmodelle (LLM)", "Persönliche Aufgabenautomatisierung"],
      useCaseLink: "/use-cases/ki-potenzial-landkarte/menschen",
    },
    team: {
      title: "Projekt-Team",
      icon: Users,
      image: "/images/2_KIVI_4_EBENE/KIVI_Team_Flat.png",
      color: "from-kivisai-clear-turquoise to-teal-600",
      iconColor: "bg-kivisai-clear-turquoise",
      tabColor: "kivisai-clear-turquoise",
      herausforderung: "Überwindung von Reibungsverlusten",
      details: [
        "Fragmentiertes Wissen bündeln",
        "Manuelle Koordination durch echte Kollaboration ersetzen",
        "Umgang mit restriktiven IT- und Lizenzvorgaben",
      ],
      dimensionen: [
        "Kollaborativ (Zusammenarbeit fördern)",
        "Integrativ (Daten & Tools verbinden)",
        "Analytisch (Projektrisiken erkennen)",
      ],
      bereiche: [
        "KI-gestützte Kollaborationstools",
        "Wissensmanagement (z.B. RAG)",
        "Analytische KI",
        "Spezifische Fachanwendungen",
      ],
      useCaseLink: "/use-cases/ki-potenzial-landkarte/projekt-team",
    },
    organisation: {
      title: "Organisation",
      icon: Building2,
      image: "/images/2_KIVI_4_EBENE/KIVI_Organisation.png",
      color: "from-orange-500 to-red-600",
      iconColor: "bg-orange-500",
      tabColor: "orange-500",
      herausforderung: "Meistern des dualen Drucks",
      details: [
        "Internen Effizienzdruck (Kosten, Prozesse) bewältigen",
        "Externen Marktdruck (Disruption, Geschäftsmodelle) strategisch nutzen",
      ],
      dimensionen: [
        "Prozessual (Abläufe optimieren)",
        "Strategisch (Markt & Zukunft analysieren)",
        "Skalierbar (unternehmensweit wirken)",
      ],
      bereiche: [
        "Prozessautomatisierung (RPA, BPM)",
        "Prädiktive KI (Forecasting)",
        "Digitaler Zwilling",
        "Business Intelligence (BI) mit KI",
      ],
      useCaseLink: "/use-cases/ki-potenzial-landkarte/organisation",
    },
    netzwerk: {
      title: "Netzwerk / Ökosystem",
      icon: Recycle,
      image: "/images/2_KIVI_4_EBENE/KIVI_oekosystem.png",
      color: "from-green-500 to-emerald-600",
      iconColor: "bg-green-500",
      tabColor: "green-500",
      herausforderung: "Beherrschung übergreifender Komplexität",
      details: [
        "Riesige Daten-Netzwerke (Open Data, Forschung etc.) handhaben",
        "Langsame, manuelle Kooperationen durch intelligente, autonome Systeme ersetzen",
      ],
      dimensionen: [
        "Vernetzend (Entitäten verbinden)",
        "Autonom (selbstständig agieren)",
        "Ökosystemisch (Synergien schaffen)",
      ],
      bereiche: [
        "Autonome Agenten",
        "Multi-Agent-gesteuerte Prozesse (MCP)",
        "Prädiktive KI (im großen Stil)",
        "Föderiertes Lernen",
      ],
      useCaseLink: "/use-cases/ki-potenzial-landkarte/oekosysteme",
    },
  }

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <UseCaseBreadcrumb currentPage="KI-Potenzial Landkarte" />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                KI-POTENZIAL
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Vom Problem zur Potenzialentfaltung: Eine Landkarte der Lösungen
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Für jede Herausforderung der richtige KI-Ansatz – strukturiert nach den vier zentralen Wirkungsebenen
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-kivisai-deep-dark-blue mb-4 text-center">KI-Potenzial-Landkarte: Orientierung für Ihre Transformation</h2>
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/6_KIVI-SZENEN/KIVI_Ratlos_quer.png"
                alt="KI-Potenzial Landkarte: Orientierung für Ihre Transformation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">4 Wirkungsebenen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einleitungstext */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-8">
              <p className="text-lg">
                Ob Überlastung durch Routineaufgaben, Skepsis gegenüber den tatsächlichen Möglichkeiten von KI oder
                Sorgen um die Datensicherheit – die Hürden bei der KI-Transformation sind vielfältig und real.
              </p>
              <p className="text-lg">
                Die Komplexität kann überwältigend wirken, doch für jede dieser Herausforderungen gibt es einen
                passenden Lösungsansatz. Die folgende Übersicht dient Ihnen als Kompass: Sie ordnet die konkreten
                Schmerzpunkte den vier zentralen Wirkungsebenen zu und zeigt Ihnen, welche KI-Konzepte und -Ansätze
                gezielt Abhilfe schaffen. Finden Sie hier Ihren Ansatzpunkt für eine wirksame und zukunftssichere
                Transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wegweiser Section */}
      <section className="py-12 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Überschrift */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue">Wegweiser</h2>
              </div>
              <p className="text-kivisai-moss-green max-w-2xl mx-auto">
                Entdecke deine KI-Fitness aus der Sicht von Mensch, Team, Organisation oder Ökosystem. Unser strukturierter Test zeigt dir, wo du stehst und wie du dich weiterentwickeln kannst.
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent gap-2 h-auto p-0">
                {Object.entries(ebenen).map(([key, ebene]) => {
                  const IconComponent = ebene.icon
                  const isActive = activeTab === key

                  // Definiere Farben für jeden Tab
                  const getTabColors = (tabColor: string) => {
                    switch (tabColor) {
                      case "kivisai-clear-turquoise":
                        return { bg: "#00B4A6", hover: "#00A396" }
                      case "blue-500":
                        return { bg: "#3B82F6", hover: "#2563EB" }
                      case "orange-500":
                        return { bg: "#F97316", hover: "#EA580C" }
                      case "green-500":
                        return { bg: "#10B981", hover: "#059669" }
                      default:
                        return { bg: "#6B7280", hover: "#4B5563" }
                    }
                  }

                  const colors = getTabColors(ebene.tabColor)

                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className={`
          flex items-center gap-2 px-4 py-4 rounded-lg font-semibold transition-all duration-300 
          border-2 min-h-[60px] relative overflow-hidden group
          ${
            isActive
              ? `text-white border-transparent shadow-lg scale-105`
              : `bg-white text-kivisai-deep-dark-blue border-gray-200 hover:text-white hover:shadow-md hover:scale-102`
          }
        `}
                      style={{
                        backgroundColor: isActive ? colors.bg : "white",
                        color: isActive ? "white" : "#1E3A8A",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = colors.bg
                          e.currentTarget.style.color = "white"
                          e.currentTarget.style.borderColor = colors.bg
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = "white"
                          e.currentTarget.style.color = "#1E3A8A"
                          e.currentTarget.style.borderColor = "#E5E7EB"
                        }
                      }}
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-transform duration-300 ${!isActive ? "group-hover:scale-110" : ""}`}
                      />
                      <span className="hidden sm:inline font-medium">{ebene.title}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      )}
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {Object.entries(ebenen).map(([key, ebene]) => (
                <TabsContent key={key} value={key}>
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Bild */}
                        <div className="relative h-64 lg:h-auto">
                          <Image
                            src={ebene.image || "/placeholder.svg"}
                            alt={`KI-Transformation auf ${ebene.title}-Ebene: Moderne Arbeitsplätze mit intelligenten Assistenten und digitalen Tools für optimierte Zusammenarbeit und Effizienzsteigerung`}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${ebene.color} opacity-20`}></div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div
                              className={`w-12 h-12 ${ebene.iconColor} rounded-full flex items-center justify-center shadow-md`}
                            >
                              <ebene.icon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue">Ebene: {ebene.title}</h2>
                          </div>

                          {/* Haupt-Herausforderung */}
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                              <Target className="w-5 h-5 text-orange-500" />
                              Haupt-Herausforderung: {ebene.herausforderung}
                            </h3>
                            <ul className="space-y-2">
                              {ebene.details.map((detail, index) => (
                                <li key={index} className="flex items-start gap-2 text-kivisai-moss-green">
                                  <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dimensionen */}
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-blue-500" />
                              Dimensionen der KI-Anwendung:
                            </h3>
                            <ul className="space-y-2">
                              {ebene.dimensionen.map((dimension, index) => (
                                <li key={index} className="flex items-start gap-2 text-kivisai-moss-green">
                                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{dimension}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Relevante KI-Bereiche */}
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                              <Brain className="w-5 h-5 text-purple-500" />
                              Relevante KI-Bereiche & Konzepte:
                            </h3>
                            <ul className="space-y-2">
                              {ebene.bereiche.map((bereich, index) => (
                                <li key={index} className="flex items-start gap-2 text-kivisai-moss-green">
                                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{bereich}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <div className="pt-4 border-t border-gray-200">
                            <Link
                              href={ebene.useCaseLink}
                              className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-deep-dark-blue transition-colors"
                            >
                              KI-Nutzung und Anwendungsbeispiele entdecken
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Legende der Abkürzungen */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Legende der Abkürzungen</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">BI (Business Intelligence):</div>
                      <div className="text-sm text-kivisai-moss-green">
                        Verfahren und Prozesse zur systematischen Analyse von Geschäftsdaten.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">
                        BPM (Business Process Management):
                      </div>
                      <div className="text-sm text-kivisai-moss-green">
                        Geschäfts-Prozess-Management zur Gestaltung und Optimierung von Abläufen.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">GenKI (Generative KI):</div>
                      <div className="text-sm text-kivisai-moss-green">
                        Künstliche Intelligenz, die neue Inhalte wie Texte, Bilder oder Videos erstellt.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">LLM (Large Language Model):</div>
                      <div className="text-sm text-kivisai-moss-green">
                        Große Sprachmodelle, die die Basis für fortschrittliche Textverarbeitung und Dialogsysteme sind
                        (z.B. GPT-4).
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">
                        MCP (Multi-Agent-gesteuerte Prozesse):
                      </div>
                      <div className="text-sm text-kivisai-moss-green">
                        Komplexe Systeme, in denen mehrere autonome KI-Agenten zusammenarbeiten, um übergeordnete Ziele
                        zu erreichen.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">
                        RAG (Retrieval-Augmented Generation):
                      </div>
                      <div className="text-sm text-kivisai-moss-green">
                        Ein KI-Verfahren, das die Antworten eines Sprachmodells mit Fakten aus einer externen
                        Wissensdatenbank anreichert und absichert.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">RPA (Robotic Process Automation):</div>
                      <div className="text-sm text-kivisai-moss-green">
                        Technologie zur Automatisierung von strukturierten, regelbasierten Aufgaben am Computer.
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-kivisai-deep-dark-blue">KIVISAI:</div>
                      <div className="text-sm text-kivisai-moss-green">
                        Zukunftsagentur für KI-Transformation. Begleitet Organisationen und Menschen mit einer klaren
                        Methode, KI-Potenziale sicher zu erschließen – menschlich, strategisch und wirksam.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-kivisai-clear-turquoise/20">
                  <Link
                    href="/wissens-hub/glossar"
                    className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-deep-dark-blue transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Vollständiges KI-Glossar entdecken
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kivisai-pure-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-kivisai-clear-turquoise/20 to-kivisai-deep-dark-blue/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                    Bereit für Ihre KI-Transformation?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Lassen Sie uns gemeinsam herausfinden, welche KI-Ansätze für Ihre spezifischen Herausforderungen am
                    besten geeignet sind. Von der ersten Potenzialanalyse bis zur erfolgreichen Umsetzung – wir
                    begleiten Sie auf allen vier Ebenen.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-kivisai-deep-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Kostenlose Potenzialanalyse buchen
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-deep-dark-blue hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Unverbindlich anfragen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
