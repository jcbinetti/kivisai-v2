import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Calendar,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Mail,
  Brain,
  Palette,
  Code,
  Settings,
  GraduationCap,
  Target,
  User,
  Cog,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "KI-Lösungen für Teams | KIVISAI",
  description: "Entdecken Sie KI-Lösungen für effektive Teamarbeit. Kollaboration, Kommunikation und Produktivität durch KI-Tools.",
}

export default function TeamKIPage() {
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
            <Link href="/loesungen" className="hover:text-kivisai-clear-turquoise">
              Lösungen
            </Link>
            <span className="mx-2">/</span>
            <span className="text-kivisai-deep-dark-blue font-medium">Für Projekt-Teams</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                PROJEKT-TEAMS
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Das kollektive Gedächtnis</h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Kollaborative KI-Tools revolutionieren die Teamarbeit – 60% schnellere Entwicklungszyklen durch
              intelligente Zusammenarbeit
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KI</span>
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>2025 • 10 min</div>
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
                src="/images-optimized/2_KIVI_4_EBENE/KIVI_Team_Flat.webp"
                alt="Kollaborative KI-Tools für Projekt-Teams: Moderne Arbeitsplätze mit intelligenten Systemen für optimierte Teamarbeit, Wissensmanagement und effiziente Projektabwicklung"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">60% schnellere Entwicklung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Einleitung */}
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Maßgeschneiderte KI für maximale Wirkung
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Für Projekt-Teams bedeutet die KI-Transformation einen Wandel, der weit über die Einführung neuer
                    Tools hinausgeht – er verändert die DNA der Zusammenarbeit. Der Erfolg eines Teams hängt heute davon
                    ab, die richtigen Werkzeuge für die spezifischen, fachlichen Anforderungen des jeweiligen Projekts
                    zu finden und zu nutzen.
                  </p>

                  <p className="text-lg mb-6">
                    Teams, die diese Hürden überwinden und die passenden Werkzeuge meistern, verbessern ihren
                    Informationsfluss fundamental: In Studien gaben Nutzer an, dass sie sich mit KI-Hilfe fast 4-mal
                    schneller über den Inhalt einer verpassten Besprechung informieren konnten.
                  </p>

                  <div className="bg-white border-l-4 border-l-green-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-green-600">Messbare Ergebnisse:</strong> Teams mit optimaler
                      KI-Integration erreichen 60% schnellere Entwicklungszyklen und reduzieren Reibungsverluste um bis
                      zu 70%.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Quelle: Microsoft Work Trend Index, Special Report, 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anwendungsbeispiele */}
            <Card className="border-l-4 border-l-teal-500 bg-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    KI-Lösungen für verschiedene Team-Bereiche
                  </h2>
                </div>

                <p className="text-kivisai-moss-green mb-8 leading-relaxed">
                  Die Anwendungsfälle für KI in Teams sind so vielfältig wie die Projekte selbst. Hier finden Sie
                  Beispiele für kreative, technische und administrative Prozesse in unterschiedlichen Branchen.
                </p>

                {/* Kreative und kommunikative Prozesse */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-teal-500" />
                    Kreative und kommunikative Prozesse
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Gemeinsame Content-Erstellung</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI unterstützt beim Entwerfen von Marketingtexten, schlägt Designvarianten vor und stellt
                        Markenkonsistenz sicher.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisierte Kampagnenplanung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI analysiert Marktdaten für optimale Zielgruppenauswahl, Budgetverteilung und Marketing-Mix.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Intelligente Vertriebsunterstützung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Echtzeit-Informationen und personalisierte Gesprächsleitfäden für das Vertriebsteam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technische und analytische Projekte */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-500" />
                    Technische und analytische Projekte
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">KI-gestütztes Code-Review</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Automatische Prüfung auf Fehler, Sicherheitslücken und Stil-Inkonsistenzen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Analyse von Simulationsdaten</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI analysiert riesige Datenmengen aus Simulationen und erkennt komplexe Muster.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Automatische Planprüfung (BIM)</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI prüft 3D-Modelle automatisch auf Kollisionen und Normen-Einhaltung.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Organisatorische und administrative Abläufe */}
                <div>
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-teal-500" />
                    Organisatorische und administrative Abläufe
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Kollaborative Bewerber-Vorauswahl
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI unterstützt HR-Teams beim Sichten von Bewerbungen und Identifizieren relevanter Kandidaten.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisches Meeting-Management
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI fasst Diskussionen zusammen, identifiziert offene Fragen und verfolgt Aufgaben-Status.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Interne Wissensdatenbank</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI beantwortet Mitarbeiter-Anfragen basierend auf internen Richtlinien und Handbüchern.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Team-Stimmungs- und Auslastungsanalyse
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Anonymisierte Analyse von Projektdaten zur Erkennung von Überlastungen im Team.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unsere Lösungen für Teams */}
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unsere Lösungen für Teams</h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-6">
                  <p className="text-lg">
                    Wir unterstützen Ihr Team dabei, die richtigen KI-Tools zu identifizieren, zu implementieren und
                    optimal zu nutzen. Von der Analyse der Teamanforderungen bis zur Schulung und Begleitung bei der
                    Einführung.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-kivisai-clear-turquoise/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-kivisai-clear-turquoise" />
                      KI-Prototyping für Teams
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Entwicklung maßgeschneiderter KI-Lösungen für Ihre spezifischen Teamanforderungen. Von der Idee
                      bis zum funktionsfähigen Prototyp.
                    </p>
                    <Link
                      href="/leistungen/ki-prototyping"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      KI-Prototyping entdecken <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-kivisai-clear-turquoise/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-kivisai-clear-turquoise" />
                      Team-Coaching & Training
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Praxisorientierte Schulungen für Ihr gesamtes Team. Lernen Sie gemeinsam die effektive Nutzung von
                      KI-Tools für Ihre Projekte.
                    </p>
                    <Link
                      href="/leistungen/coaching-training"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Team-Training buchen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-kivisai-clear-turquoise/20">
                  <div className="bg-gradient-to-r from-kivisai-clear-turquoise/10 to-teal-500/10 p-4 rounded-lg">
                    <p className="text-kivisai-moss-green font-medium text-center">
                      <strong className="text-kivisai-deep-dark-blue">Nächster Schritt:</strong>
                      Lassen Sie uns in einer kostenlosen Potenzialanalyse die spezifischen KI-Möglichkeiten für Ihr
                      Team identifizieren.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messbare Ergebnisse */}
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Messbare Vorteile für Teams</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">60% schnellere Entwicklung</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Drastische Verkürzung der Entwicklungs- und Lösungszyklen
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Reduzierte Reibungsverluste</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Weniger manuelle Koordination durch intelligente Kollaboration
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Bessere Wissensverteilung</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Fragmentiertes Wissen wird gebündelt und allen zugänglich gemacht
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Höhere Projektqualität</div>
                        <div className="text-sm text-kivisai-moss-green">
                          KI-gestützte Qualitätssicherung und automatische Prüfungen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation zwischen den 4 Ebenen */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-8 text-center">
              Weitere KI-Potenziale entdecken
            </h2>
            
            {/* 4-Ebenen Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {/* Vorherige Ebene - Mensch */}
              <Link href="/loesungen/mensch" className="group">
                <div className="bg-white hover:bg-kivisai-clear-turquoise/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">Mensch</h3>
                      <p className="text-xs text-kivisai-moss-green">Vorherige Ebene</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images-optimized/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.webp"
                      alt="Mensch Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

              {/* Aktuelle Ebene - Team */}
              <div className="relative">
                <div className="bg-kivisai-clear-turquoise text-white p-4 rounded-lg shadow-lg transform scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Team</h3>
                      <p className="text-xs opacity-90">Aktuell</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images-optimized/2_KIVI_4_EBENE/KIVI_Team_Flat.webp"
                      alt="Team Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Nächste Ebene - Organisation */}
              <Link href="/loesungen/organisation" className="group">
                <div className="bg-white hover:bg-kivisai-deep-dark-blue/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                      <Cog className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-deep-dark-blue">Organisation</h3>
                      <p className="text-xs text-kivisai-moss-green">Nächste Ebene</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images-optimized/2_KIVI_4_EBENE/KIVI_Organisation.webp"
                      alt="Organisation Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

              {/* Ökosystem */}
              <Link href="/loesungen/oekosystem" className="group">
                <div className="bg-white hover:bg-kivisai-moss-green/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-moss-green rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-moss-green">Ökosystem</h3>
                      <p className="text-xs text-kivisai-moss-green">Höchste Ebene</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images-optimized/2_KIVI_4_EBENE/KIVI_oekosystem.webp"
                      alt="Ökosystem Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Beschreibung der Ebenen */}
            <div className="text-center">
              <p className="text-kivisai-moss-green mb-4">
                Entdecken Sie die verschiedenen Wirkungsebenen der KI-Transformation
              </p>
              <div className="flex justify-center gap-8 text-sm text-kivisai-moss-green">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-clear-turquoise rounded-full"></div>
                  <span>Individuell</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-deep-dark-blue rounded-full"></div>
                  <span>Organisational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-moss-green rounded-full"></div>
                  <span>Ökosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für Ihre Team-KI-Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entdecken Sie in unserer KI-Potenzialanalyse, welche maßgeschneiderten KI-Lösungen für Ihr Team am
              besten geeignet sind. Überwinden Sie Reibungsverluste und schaffen Sie die organisatorischen
              Rahmenbedingungen für erfolgreiche KI-Integration.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Team-KI-Potenzialanalyse buchen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-kivisai-deep-dark-blue transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Unsere Leistungen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
