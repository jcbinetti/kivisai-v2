import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Calendar,
  TrendingUp,
  Target,
  Lightbulb,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Mail,
  Play,
  ExternalLink,
} from "lucide-react"

export default function NetzwerkGraphPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <div className="bg-kivisai-light-cool-gray border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-kivisai-moss-green">
            <Link href="/" className="hover:text-kivisai-clear-turquoise">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/use-cases" className="hover:text-kivisai-clear-turquoise">
              Use Cases
            </Link>
            <span className="mx-2">/</span>
            <span className="text-kivisai-deep-dark-blue font-medium">Netzwerk-Graph Visualisierung</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                USE-CASES
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Netzwerk-Graph: Interaktive Visualisierung komplexer Beziehungen
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entdecken Sie versteckte Verbindungen und Muster in Ihren Unternehmensnetzwerken durch innovative
              Graph-Visualisierung.
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KT</span>
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>22-08-2024 • 8 min</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images-optimized/UC_Netzwerkpexels-kindelmedia-7054722.webp"
                alt="Komplexe, verworrene Netzwerkstrukturen - Metapher für unstrukturierte Daten"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Use Case Steckbrief */}
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Use Case Steckbrief</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Unternehmen:</div>
                      <div className="text-kivisai-deep-dark-blue">KIVISAI Netzwerk</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Größe:</div>
                      <div className="text-kivisai-deep-dark-blue">50+ Netzwerk-Partner</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Implementierung:</div>
                      <div className="text-kivisai-deep-dark-blue">4 Wochen Entwicklung</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Branche:</div>
                      <div className="text-kivisai-deep-dark-blue">Beratung & Technologie</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Investition:</div>
                      <div className="text-kivisai-deep-dark-blue">Nur monatliche Tool-Kosten</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Status:</div>
                      <div className="text-kivisai-deep-dark-blue">Wartet auf GF-Entscheidung</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ausgangssituation */}
            <Card className="border-l-4 border-l-orange-400 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Ausgangssituation & Herausforderung
                  </h2>
                </div>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Komplexe Netzwerkstrukturen und Beziehungen zwischen Partnern, Mitarbeitern und Stakeholdern waren in
                  verschiedenen, unstrukturierten Quellen verstreut: veraltete Organigramme, Excel-Listen von
                  Mitarbeitern, Partnerkontakte, deren Angebote, Web-Broschüren und weitere Dokumente. Diese
                  Informationen lagen ohne Rücksicht auf Form und Struktur an verschiedenen Orten vor.
                </p>
                <p className="text-kivisai-moss-green leading-relaxed mt-4">
                  Das Management benötigte eine Möglichkeit, diese verworrenen Beziehungen zu entwirren und in einer
                  verständlichen, visuellen Form darzustellen, um interne Strukturen transparent zu machen und
                  strategische Partnerschaften zu identifizieren.
                </p>
              </CardContent>
            </Card>

            {/* KI-Lösung */}
            <Card className="border-l-4 border-l-yellow-400 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">KI-Lösung</h2>
                </div>
                <p className="text-kivisai-moss-green mb-6 leading-relaxed">
                  KI-gestützte Transformation unstrukturierter Netzwerkdaten in eine interaktive Graph-Visualisierung
                  durch einen mehrstufigen Prozess:
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Eingesetzte Technologien:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      D3.js
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      Graph Commons API
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      Network Analysis
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      React
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-kivisai-moss-green mb-6 leading-relaxed">
                    **Schritt 1: Datenkonsolidierung** Alle Informationen wurden zunächst in einer Vektordatenbank
                    gespeichert, unabhängig von ihrer ursprünglichen Form und Struktur.
                  </p>
                  <p className="text-kivisai-moss-green mb-6 leading-relaxed">
                    **Schritt 2: KI-Strukturierung** Mit Hilfe von KI wurden die Beziehungen analysiert und in zwei
                    strukturierte Tabellen organisiert: - **Nodes (Knoten):** Einzelne Entitäten wie Personen,
                    Unternehmen oder Abteilungen, die als Punkte im Netzwerk dargestellt werden - **Edges (Kanten):**
                    Verbindungen zwischen den Knoten, die Beziehungen, Abhängigkeiten oder Interaktionen repräsentieren
                  </p>
                  <p className="text-kivisai-moss-green mb-6 leading-relaxed">
                    **Schritt 3: KI-Anreicherung** - **ChatGPT Projects:** Strukturierte Arbeitsräume in ChatGPT, die es
                    ermöglichen, komplexe Aufgaben in organisierte Projekte zu unterteilen und Kontext über mehrere
                    Gespräche hinweg zu behalten - **Perplexity Integration:** Erweiterte Recherche von Informationen
                    über Partnerfirmen im Internet sowie automatische Logo-Beschaffung - Aus unserem vorhandenen Wissen
                    über die Entitäten wurden mit KI weitere Informationen verknüpft und angereichert
                  </p>
                  <p className="text-kivisai-moss-green mb-6 leading-relaxed">
                    **Schritt 4: Visualisierung** Mit einer strukturierten und kuratierten Input-Datei wurde über die
                    Graph Commons API eine professionelle Netzwerk-Visualisierung erstellt.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video/Demo Sektion */}
            <Card className="border-l-4 border-l-blue-400 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Demo & Visualisierung</h2>
                </div>

                <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images-optimized/2_KIVI_4_EBENE/KIVI_oekosystem.webp"
                    alt="KIVISAI Netzwerk-Graph Visualisierung"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Funktionsweise</h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Der Graph visualisiert komplexe Netzwerkbeziehungen als interaktive Knoten und Verbindungen.
                      KI-Algorithmen identifizieren automatisch Cluster, zentrale Akteure und versteckte
                      Beziehungsmuster aus unstrukturierten Datenquellen.
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Live-Demo anfragen <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Was der Graph generiert</h3>
                    <ul className="text-kivisai-moss-green text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Automatische Erkennung von Schlüsselpersonen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Visualisierung versteckter Partnerschaften</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Interaktive Exploration von Netzwerkstrukturen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messbare Ergebnisse */}
            <Card className="border-l-4 border-l-green-400 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Messbare Ergebnisse</h2>
                </div>

                <div className="mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-kivisai-deep-dark-blue">
                            4 Wochen strukturierte Entwicklung
                          </div>
                          <div className="text-sm text-kivisai-moss-green">
                            Woche 1: Workshops (2x 4h), Woche 2: Datenaufbereitung, Woche 3: API-Integration, Woche 4:
                            Testing
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-kivisai-deep-dark-blue">Minimale Investitionskosten</div>
                          <div className="text-sm text-kivisai-moss-green">
                            Nur monatliche Kosten für ChatGPT, Perplexity und Manus
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-kivisai-deep-dark-blue">
                            Vollständige Netzwerk-Transparenz
                          </div>
                          <div className="text-sm text-kivisai-moss-green">
                            Interne Strukturen für alle Mitarbeiter verständlich gemacht
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-kivisai-deep-dark-blue">
                            Strategische Partner-Identifikation
                          </div>
                          <div className="text-sm text-kivisai-moss-green">
                            Automatische Erkennung von Schlüsselpartnern im Netzwerk
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-kivisai-moss-green italic mb-3">
                        "Die Anwendung liegt noch bei der Entscheidung der Geschäftsführung, die die Tragweite der neuen
                        Möglichkeiten evaluiert. Das Potenzial für unser Netzwerkmanagement ist jedoch bereits jetzt
                        erkennbar."
                      </p>
                      <p className="text-sm font-semibold text-kivisai-deep-dark-blue">
                        — Jean-Christophe B., Projektleiter Netzwerk-Visualisierung
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lessons Learned */}
            <Card className="border-l-4 border-l-purple-400 bg-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Lessons Learned</h2>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Interaktivität ist entscheidend für die Nutzerakzeptanz von Datenvisualisierungen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Performance-Optimierung bei großen Datensätzen erfordert spezielle Algorithmen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Benutzerfreundliche Filter und Suchfunktionen sind essentiell
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Echtzeit-Updates erhöhen den Wert der Visualisierung erheblich
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-8 text-center">
              Weitere Use Cases entdecken
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">KI-Chatbot für Agile Coaches</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Automatisierte Beratung und Coaching-Unterstützung durch intelligente KI-Systeme.
                  </p>
                  <Link
                    href="/use-cases/us01-ki-chatbot-agile-coach"
                    className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Handwerker LI Assistent</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    KI-gestützte Lead-Generierung und Kundenakquise auf LinkedIn für Handwerksbetriebe.
                  </p>
                  <Link
                    href="/use-cases/uc04-handwerker-li-assistent"
                    className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interessiert an einer ähnlichen Lösung - CTA */}
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
                    Interessiert an einer ähnlichen Lösung?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Wir entwickeln maßgeschneiderte Datenvisualisierungen für Ihr Unternehmen. Kontaktieren Sie uns für
                    eine kostenlose Potenzialanalyse und erfahren Sie, wie interaktive Visualisierungen Ihre
                    Entscheidungsfindung verbessern können.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-kivisai-deep-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Kostenfreien Termin buchen
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-deep-dark-blue hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Kontakt aufnehmen
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
