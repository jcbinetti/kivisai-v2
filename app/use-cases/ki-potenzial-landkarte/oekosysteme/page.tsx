import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Recycle,
  Calendar,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Mail,
  Brain,
  Network,
  Target,
} from "lucide-react"
import UseCaseBreadcrumb from "@/components/common/use-case-breadcrumb"

export default function OekosystemeKIPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <UseCaseBreadcrumb
        currentPage="Ökosysteme"
        parentPage="KI-Potenzial Landkarte"
        parentUrl="/use-cases/ki-potenzial-landkarte"
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                ÖKOSYSTEME
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              KI-Ökosysteme: Komplexe Herausforderungen gemeinsam meistern
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Intelligente Mensch-KI-Netzwerke schaffen Synergien und lösen übergreifende Herausforderungen – 15-50%
              schnellere Produktentwicklung
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>2025 • 12 min</div>
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

            {/* Anwendungsbeispiele */}
            <Card className="border-l-4 border-l-emerald-500 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Intelligenz ohne Grenzen: 10 Anwendungsfälle für Ökosysteme
                  </h2>
                </div>

                <p className="text-kivisai-moss-green mb-8 leading-relaxed">
                  Die folgenden Beispiele zeigen, wie KI die Zusammenarbeit zwischen verschiedenen Akteuren ermöglicht,
                  um Wertschöpfung neu zu denken und komplexe, übergreifende Herausforderungen zu meistern:
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Resiliente Lieferketten durch KI-Netzwerke",
                      description:
                        "Unternehmen verschiedener Branchen teilen anonymisierte Daten über Lieferengpässe und Risiken. KI-Systeme analysieren diese Informationen, um alternative Lieferwege und Backup-Lieferanten zu identifizieren.",
                    },
                    {
                      title: "Kollaborative Forschung und Entwicklung",
                      description:
                        "Forschungseinrichtungen, Universitäten und Unternehmen nutzen gemeinsam KI-gestützte Plattformen, um wissenschaftliche Durchbrüche zu beschleunigen und Doppelarbeit zu vermeiden.",
                    },
                    {
                      title: "Intelligente Stadtentwicklung (Smart Cities)",
                      description:
                        "Städte, Verkehrsbetriebe und Energieversorger koordinieren ihre Systeme über KI, um Verkehrsflüsse zu optimieren, Energieverbrauch zu reduzieren und die Lebensqualität zu verbessern.",
                    },
                    {
                      title: "Nachhaltigkeits-Ökosysteme",
                      description:
                        "Unternehmen entlang der Wertschöpfungskette nutzen KI, um CO2-Emissionen zu verfolgen, Kreislaufwirtschaft zu optimieren und gemeinsam Nachhaltigkeitsziele zu erreichen.",
                    },
                    {
                      title: "Digitale Verwaltung und E-Government",
                      description:
                        "Verschiedene Behörden und öffentliche Einrichtungen nutzen KI, um Bürgerdienste zu verbessern, Anträge automatisch zu bearbeiten und Verwaltungsprozesse zu beschleunigen.",
                    },
                    {
                      title: "Gesundheits-Ökosysteme",
                      description:
                        "Krankenhäuser, Forschungseinrichtungen und Pharmaunternehmen teilen anonymisierte Gesundheitsdaten, um Behandlungen zu verbessern und neue Therapien zu entwickeln.",
                    },
                    {
                      title: "Bildungs-Netzwerke",
                      description:
                        "Schulen, Universitäten und Bildungsanbieter nutzen KI, um personalisierte Lernpfade zu erstellen und Bildungsressourcen optimal zu verteilen.",
                    },
                    {
                      title: "Finanz-Ökosysteme für KMU",
                      description:
                        "Banken, Fintech-Unternehmen und Beratungsdienstleister arbeiten zusammen, um kleinen und mittleren Unternehmen besseren Zugang zu Finanzierungen und Beratung zu bieten.",
                    },
                    {
                      title: "Landwirtschafts- und Ernährungs-Netzwerke",
                      description:
                        "Landwirte, Lebensmittelproduzenten und Händler nutzen KI, um Ernteerträge zu optimieren, Lebensmittelverschwendung zu reduzieren und nachhaltige Praktiken zu fördern.",
                    },
                    {
                      title: "Katastrophenschutz und Krisenmanagement",
                      description:
                        "Rettungsdienste, Behörden und internationale Organisationen koordinieren ihre Reaktion auf Naturkatastrophen und Krisen mithilfe von KI-gestützten Vorhersage- und Koordinationssystemen.",
                    },
                  ].map((example, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">{example.title}</h4>
                      <p className="text-sm text-kivisai-moss-green">{example.description}</p>
                    </div>
                  ))}
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
                      href="/leistungen/ki-prototype"
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
                    href="/use-cases/ki-potenzial-landkarte/menschen"
                    className="inline-flex items-center gap-2 text-green-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
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
                    href="/use-cases/ki-potenzial-landkarte/organisation"
                    className="inline-flex items-center gap-2 text-green-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
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
      <section className="py-16 bg-kivisai-pure-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                    Bereit für die Ökosystem-Transformation?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Entdecken Sie in unserer KI-Potenzialanalyse, wie Sie intelligente Netzwerke aufbauen und komplexe,
                    übergreifende Herausforderungen gemeinsam meistern können. Von der Strategie bis zur Umsetzung.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Ökosystem-KI-Potenzialanalyse buchen
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
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
