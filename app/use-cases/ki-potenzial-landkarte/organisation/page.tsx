import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Calendar,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Mail,
  Brain,
  Target,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Users,
} from "lucide-react"
import UseCaseBreadcrumb from "@/components/common/use-case-breadcrumb"

export default function OrganisationKIPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <UseCaseBreadcrumb
        currentPage="Organisation"
        parentPage="KI-Potenzial Landkarte"
        parentUrl="/use-cases/ki-potenzial-landkarte"
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                ORGANISATION
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Das adaptive Unternehmen schaffen
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              KI-gestützte Geschäftsprozesse meistern den dualen Druck – 70% weniger manuelle Arbeit durch intelligente
              Automatisierung
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KI</span>
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
                src="/images-optimized/2_KIVI_4_EBENE/KIVI_Organisation.webp"
                alt="KIVISAI Organisation - Strukturierte Transformation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">70% weniger manuelle Arbeit</span>
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
            <Card className="border-l-4 border-l-orange-500 bg-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Die KI-Transformation der Gesamtorganisation
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Auf der Ebene der Gesamtorganisation wirkt die KI-Transformation wie ein neues, zentrales
                    Nervensystem, das die Art und Weise, wie ein Unternehmen agiert und im Wettbewerb besteht,
                    fundamental verändert. Der Erfolg hängt davon ab, zwei Kräfte gleichzeitig zu meistern:
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-kivisai-deep-dark-blue">Der interne Effizienzdruck:</strong>
                        <span className="ml-2">
                          KI muss bestehende Prozesse automatisieren, Kosten senken und operative Hürden wie den
                          Fachkräftemangel oder veraltete IT-Systeme überwinden.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-kivisai-deep-dark-blue">Der externe Marktdruck:</strong>
                        <span className="ml-2">
                          Gleichzeitig muss die Organisation KI nutzen, um auf disruptive Wettbewerber zu reagieren und
                          ihre Marktposition strategisch neu zu definieren.
                        </span>
                      </div>
                    </li>
                  </ul>

                  <p className="text-lg mb-4">
                    Diese beiden Aspekte sind keine Gegensätze, sondern zwei Seiten derselben Medaille. Ein Unternehmen
                    wird erst dann wirklich adaptiv und zukunftsfähig, wenn es die operative Exzellenz im Inneren als
                    Fundament für strategische Innovationen nach außen nutzt.
                  </p>

                  <div className="bg-white border-l-4 border-l-green-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-green-600">Messbare Ergebnisse:</strong> Organisationen, die diese
                      ganzheitliche Transformation angehen, machen KI zu einem echten Werttreiber: In Studien gaben 22 %
                      der Unternehmen an, dass KI bereits heute mehr als 5 % zu ihrem Gewinn (EBIT) beiträgt.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Quelle: McKinsey & Company, "The state of AI in 2023"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anwendungsbeispiele */}
            <Card className="border-l-4 border-l-red-500 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Anwendungsbeispiele für Organisationen: Das adaptive Unternehmen schaffen
                  </h2>
                </div>

                <p className="text-kivisai-moss-green mb-8 leading-relaxed">
                  Diese Anwendungsfälle illustrieren, wie Organisationen mit KI ihre Kernprozesse verbessern und
                  gleichzeitig die strategische Agilität entwickeln, um sich an die disruptiven Marktveränderungen der
                  KI-Ära anzupassen.
                </p>

                {/* Strategische KI-Anwendungen */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-red-500" />
                    Strategische KI-Anwendungen
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Digitaler Zwilling der Organisation
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Simuliert die Auswirkungen strategischer Entscheidungen auf Finanzen und Prozesse in Echtzeit.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisierte Markttrend-Analyse
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Identifiziert aufkommende technologische und wirtschaftliche Trends aus Nachrichten und
                        Fachpublikationen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Dynamische Personalbedarfsplanung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Prognostiziert den zukünftigen Bedarf an Fachkräften und Fähigkeiten basierend auf
                        Marktentwicklungen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Optimierung der Kapitalallokation
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Gibt Empfehlungen für Investitionen mit dem höchsten strategischen ROI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operative KI-Anwendungen */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    Operative KI-Anwendungen
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Intelligentes Compliance-Monitoring
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Überwacht die Einhaltung von Vorschriften wie DSGVO und EU AI Act automatisch.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Vorausschauendes Lieferketten-Management
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Sagt Störungen in der Lieferkette voraus und schlägt Alternativen vor.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisierte ESG-Berichterstattung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Sammelt und analysiert automatisch Daten für Nachhaltigkeitsberichte.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kundenorientierte KI-Anwendungen */}
                <div>
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-500" />
                    Kundenorientierte KI-Anwendungen
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Prävention von Kundenabwanderung (Churn Prediction)
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Identifiziert Kunden mit hohem Abwanderungsrisiko und schlägt Maßnahmen zur Kundenbindung vor.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        KI-gestützte Fusions- und Übernahmeanalyse (M&A)
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Identifiziert potenzielle Übernahmeziele und analysiert deren finanzielle und kulturelle
                        Passung.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisierte Erstellung von Vorstandsvorlagen
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Fasst komplexe Analysen entscheidungsreif zusammen für das Management.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unsere Lösungen für Organisationen */}
            <Card className="border-l-4 border-l-orange-500 bg-orange-50/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unsere Lösungen für Organisationen</h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-6">
                  <p className="text-lg">
                    Wir begleiten Ihre Organisation dabei, den dualen Druck zu meistern und sowohl operative Exzellenz
                    als auch strategische Agilität zu entwickeln. Von der Potenzialanalyse bis zur vollständigen
                    Transformation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">


                  <div className="bg-white p-6 rounded-lg border border-orange-200">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-orange-500" />
                      INQA-Coaching
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Geförderte Organisationsentwicklung mit bis zu 80% Zuschuss. Professionelle Begleitung bei der
                      KI-Transformation mit zertifizierten Coaches.
                    </p>
                    <Link
                      href="/transformation/inqa-coaching"
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      INQA-Coaching entdecken <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-orange-200">
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-lg">
                    <p className="text-kivisai-moss-green font-medium text-center">
                      <strong className="text-kivisai-deep-dark-blue">Nächster Schritt:</strong>
                      Lassen Sie uns in einer kostenlosen Potenzialanalyse die spezifischen KI-Möglichkeiten für Ihre
                      Organisation identifizieren.
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
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Messbare Vorteile für Organisationen
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">70% weniger manuelle Arbeit</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Drastische Reduktion manueller Prozesse durch intelligente Automatisierung
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Adaptive Organisationsstrukturen
                        </div>
                        <div className="text-sm text-kivisai-moss-green">
                          Flexible Anpassung an Marktveränderungen und disruptive Entwicklungen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Strategische Marktposition</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Proaktive Reaktion auf Geschäftsmodell-Veränderungen in der Branche
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Operative Exzellenz</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Optimierte Prozesse als Fundament für strategische Innovationen
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
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Projekt-Team Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Entdecken Sie, wie kollaborative KI-Tools die Teamarbeit revolutionieren und Reibungsverluste
                    eliminieren.
                  </p>
                  <Link
                    href="/use-cases/ki-potenzial-landkarte/projekt-team"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Ökosysteme Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Erfahren Sie, wie intelligente Netzwerke komplexe Herausforderungen gemeinsam meistern und
                    Innovationen beschleunigen.
                  </p>
                  <Link
                    href="/use-cases/ki-potenzial-landkarte/oekosysteme"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-kivisai-deep-dark-blue font-semibold text-sm"
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
            <div className="bg-gradient-to-r from-orange-500/20 to-red-600/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                    Bereit für Ihre Organisations-KI-Transformation?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Entdecken Sie in unserer KI-Potenzialanalyse, wie Sie den dualen Druck meistern und Ihre
                    Organisation adaptiv und zukunftsfähig gestalten können. Von operativer Exzellenz zu strategischer
                    Innovation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Organisations-KI-Potenzialanalyse buchen
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors"
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
