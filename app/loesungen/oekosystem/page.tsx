import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Calendar, TrendingUp, CheckCircle, ArrowRight, Mail, Brain, Network, Target } from "lucide-react"
import HeroSection from "@/components/common/HeroSection"
import { Button } from "@/components/ui/button"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "KI-Lösungen für Ökosysteme | KIVISAI",
  description: "Entdecken Sie KI-Lösungen für komplexe Ökosysteme. Vernetzung, Kooperation und Innovation durch KI.",
}

export default function OekosystemKIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                ÖKOSYSTEM
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">KI-Ökosysteme: Komplexe Herausforderungen gemeinsam meistern</h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Manche Herausforderungen sind zu groß für ein einzelnes Unternehmen. Im Netzwerk werden neue Synergien und Lösungen geschaffen.
            </p>
          </div>
        </div>
      </section>
      {/* Breadcrumb unter dem Hero */}
      <div className="bg-kivisai-light-cool-gray border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-kivisai-moss-green">
            <Link href="/" className="hover:text-kivisai-clear-turquoise">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/loesungen" className="hover:text-kivisai-clear-turquoise">Lösungen</Link>
            <span className="mx-2">/</span>
            <span className="text-kivisai-deep-dark-blue font-medium">Für KI-Ökosysteme</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/2_KIVI_4_EBENE/KIVI_oekosystem.png"
                alt="Vernetzte KI-Systeme schaffen gesellschaftliche Synergien: Diverse Gruppe arbeitet an nachhaltigen, globalen KI-Lösungen mit Fokus auf Umweltverantwortung"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">
                  15-50% schnellere Produktentwicklung
                </span>
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
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Recycle className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    KI-Ökosysteme: Komplexe Herausforderungen gemeinsam meistern
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Manche Herausforderungen sind zu groß für ein einzelnes Unternehmen. Auf dieser umfassendsten Ebene
                    der Transformation geht es darum, im Netzwerk an gemeinsamen Zielen zu arbeiten und einen Bogen zu
                    etwas Größerem zu schaffen – sei es bei der Schaffung resilienter Lieferketten in der Wirtschaft
                    oder bei der Bewältigung gesellschaftlicher Belange wie der Digitalisierung der Verwaltung.
                  </p>

                  <p className="text-lg mb-4">
                    Die Notwendigkeit dafür ergibt sich aus zwei Realitäten: der wachsenden Daten-Komplexität durch die
                    Vernetzung von Quellen wie Open-Data und Forschung sowie den Grenzen traditioneller Netzwerke, die
                    dieser Komplexität manuell nicht mehr gewachsen sind.
                  </p>

                  <p className="text-lg mb-6">
                    Die Lösung liegt in der Schaffung von intelligenten Mensch-KI-Netzwerken. Hier analysiert prädiktive
                    KI die riesigen Datenmengen, während autonome KI-Agenten und Multi-Agent-gesteuerte Prozesse (MCP)
                    Muster erkennen. Der Mensch gibt dabei die strategische Richtung, die ethischen Leitplanken und den
                    übergeordneten Zweck vor.
                  </p>

                  <div className="bg-white border-l-4 border-l-purple-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-purple-600">Messbare Auswirkungen:</strong> Solche intelligenten
                      Ökosysteme können Innovationen fundamental beschleunigen: In forschungsintensiven Branchen hat KI
                      das Potenzial, die Zeit für die Entwicklung neuer Produkte um 15 % bis 50 % zu verkürzen.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Quelle: Boston Consulting Group (BCG), "AI in R&D: The New Innovation Engine", 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unsere Lösungen für Ökosysteme */}
            <Card className="border-l-4 border-l-green-500 bg-green-50/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unsere Lösungen für Ökosysteme</h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-6">
                  <p className="text-lg">
                    Wir unterstützen Sie dabei, intelligente Netzwerke aufzubauen und zu koordinieren. Von der
                    strategischen Planung bis zur technischen Umsetzung komplexer Multi-Stakeholder-Projekte.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Network className="w-5 h-5 text-green-500" />
                      Ökosystem-Strategieberatung
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Entwicklung von Strategien für branchenübergreifende KI-Kooperationen und intelligente
                      Netzwerkstrukturen. Identifikation der richtigen Partner und Governance-Modelle.
                    </p>
                    <Link
                      href="/leistungen/strategie-coaching"
                      className="inline-flex items-center gap-2 text-green-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Strategieberatung entdecken <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-green-500" />
                      Multi-Agent-Systeme
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Entwicklung und Implementierung von KI-Agenten-Netzwerken für komplexe, übergreifende Aufgaben.
                      Von der Konzeption bis zur produktiven Nutzung.
                    </p>
                    <Link
                      href="/leistungen/ki-prototyping"
                      className="inline-flex items-center gap-2 text-green-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Multi-Agent-Systeme entwickeln <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-green-200">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-lg">
                    <p className="text-kivisai-moss-green font-medium text-center">
                      <strong className="text-kivisai-deep-dark-blue">Nächster Schritt:</strong>
                      Lassen Sie uns in einer kostenlosen Potenzialanalyse die Möglichkeiten für intelligente
                      Ökosystem-Kooperationen in Ihrem Bereich identifizieren.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messbare Ergebnisse */}
            <Card className="border-l-4 border-l-purple-500 bg-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Messbare Vorteile für Ökosysteme</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          15-50% schnellere Produktentwicklung
                        </div>
                        <div className="text-sm text-kivisai-moss-green">
                          Drastische Beschleunigung von Innovationszyklen durch intelligente Kooperation
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Übergreifende Synergien</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Neue Wertschöpfung durch branchenübergreifende Zusammenarbeit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Resiliente Netzwerke</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Robuste Strukturen für komplexe Herausforderungen und Krisen
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Gesellschaftlicher Impact</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Positive Auswirkungen auf Nachhaltigkeit und gesellschaftliche Herausforderungen
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

      {/* Related Use Cases */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-8 text-center">
              Weitere KI-Potenziale entdecken
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Menschen Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Entdecken Sie, wie persönliche KI-Assistenten die individuelle Produktivität revolutionieren und
                    neue Kompetenzen schaffen.
                  </p>
                  <Link
                    href="/loesungen/mensch"
                    className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Organisation Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Erfahren Sie, wie intelligente Automatisierung ganze Geschäftsprozesse transformiert und den dualen
                    Druck meistert.
                  </p>
                  <Link
                    href="/loesungen/organisation"
                    className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für die Ökosystem-Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entdecken Sie in unserer KI-Potenzialanalyse, wie Sie intelligente Netzwerke aufbauen und komplexe, übergreifende Herausforderungen gemeinsam meistern können. Von der Strategie bis zur Umsetzung.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Ökosystem-KI-Potenzialanalyse buchen
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
    </>
  )
}
