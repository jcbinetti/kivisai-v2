import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"
import UseCaseBreadcrumb from "@/components/common/use-case-breadcrumb"

export default function ProjektTeamKIPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <UseCaseBreadcrumb
        currentPage="Projekt-Team"
        parentPage="KI-Potenzial Landkarte"
        parentUrl="/use-cases/ki-potenzial-landkarte"
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-clear-turquoise to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                PROJEKT-TEAM
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Maßgeschneiderte KI für maximale Wirkung
            </h1>

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
                src="/images/2_KIVI_4_EBENE/KIVI_Team_Flat.png"
                alt="KIVISAI Team - Zusammenarbeit und Netzwerk"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
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
                    Die KI-Transformation der Teamarbeit
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Für Projekt-Teams bedeutet die KI-Transformation einen Wandel, der weit über die Einführung neuer
                    Tools hinausgeht – er verändert die DNA der Zusammenarbeit. Der Erfolg eines Teams hängt heute davon
                    ab, die richtigen Werkzeuge für die spezifischen, fachlichen Anforderungen des jeweiligen Projekts
                    zu finden und zu nutzen.
                  </p>

                  <p className="text-lg mb-4">
                    Der Bedarf ist dabei vollkommen unterschiedlich: Für einen Bauingenieur im Großprojekt ist die
                    KI-gestützte Analyse von Rahmenterminplänen entscheidend. Für einen selbstständigen Designer
                    hingegen ist eine KI relevanter, die einen Werbeclip in 15 Sprachen erstellen kann.
                  </p>

                  <p className="text-lg mb-6">
                    Teams, die diese Hürden überwinden und die passenden Werkzeuge meistern, verbessern ihren
                    Informationsfluss fundamental: In Studien gaben Nutzer an, dass sie sich mit KI-Hilfe fast 4-mal
                    schneller über den Inhalt einer verpassten Besprechung informieren konnten.
                  </p>

                  <div className="bg-white border-l-4 border-l-green-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-green-600">Messbare Ergebnisse:</strong> Teams, die diese Hürden
                      überwinden und die passenden Werkzeuge meistern, verbessern ihren Informationsfluss fundamental:
                      In Studien gaben Nutzer an, dass sie sich mit KI-Hilfe fast 4-mal schneller über den Inhalt einer
                      verpassten Besprechung informieren konnten.
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
                    Anwendungsbeispiele: Maßgeschneiderte KI für maximale Wirkung
                  </h2>
                </div>

                <p className="text-kivisai-moss-green mb-8 leading-relaxed">
                  Die Anwendungsfälle für KI in Teams sind so vielfältig wie die Projekte selbst; die folgende Liste
                  zeigt Beispiele für kreative, technische und administrative Prozesse in unterschiedlichen Branchen.
                </p>

                {/* Kreative und kommunikative Prozesse */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-teal-500" />
                    Für kreative und kommunikative Prozesse (Marketing, Design, Vertrieb)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Gemeinsame Content-Erstellung</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Ein KI-System unterstützt das Team beim Entwerfen von Marketingtexten, schlägt Designvarianten
                        vor und stellt sicher, dass alle Inhalte markenkonform sind.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisierte Kampagnenplanung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Die KI analysiert Marktdaten, um Vorschläge für die Zielgruppenauswahl, Budgetverteilung und den
                        optimalen Marketing-Mix zu machen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Intelligente Vertriebsunterstützung
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Das System versorgt das Vertriebsteam in Echtzeit mit relevanten Informationen und generiert
                        personalisierte Gesprächsleitfäden.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technische und analytische Projekte */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-500" />
                    Für technische und analytische Projekte (IT, Engineering, Forschung)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">KI-gestütztes Code-Review</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Entwicklerteams nutzen KI, um Code automatisch auf Fehler, Sicherheitslücken und
                        Stil-Inkonsistenzen zu prüfen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Analyse von Simulationsdaten</h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Ingenieur- und Forschungsteams setzen KI ein, um riesige Datenmengen aus Simulationen zu
                        analysieren und Muster zu erkennen.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatische Prüfung von Bau- und Konstruktionsplänen
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        KI-Tools prüfen 3D-Modelle (BIM) automatisch auf Kollisionen und die Einhaltung von Baunormen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Organisatorische und administrative Abläufe */}
                <div>
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-teal-500" />
                    Für organisatorische und administrative Abläufe (HR, Management, Verwaltung)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Kollaborative Bewerber-Vorauswahl
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        HR-Teams nutzen KI, um Bewerbungen zu sichten und die relevantesten Kandidaten hervorzuheben.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Automatisches Meeting-Management
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Die KI fasst Diskussionen zusammen, identifiziert offene Fragen und verfolgt den Status von
                        beschlossenen Aufgaben.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Interne Wissensdatenbank für Fachfragen
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Eine KI beantwortet Anfragen von Mitarbeitenden, indem sie auf interne Richtlinien und
                        Handbücher zugreift.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">
                        Team-Stimmungs- und Auslastungsanalyse
                      </h4>
                      <p className="text-sm text-kivisai-moss-green">
                        Das System analysiert anonymisierte Projektdaten, um einen Überblick über potenzielle
                        Überlastungen im Team zu geben.
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
                      href="/leistungen/ki-prototype"
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
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Organisation Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Erfahren Sie, wie intelligente Automatisierung ganze Geschäftsprozesse transformiert und den dualen
                    Druck meistert.
                  </p>
                  <Link
                    href="/use-cases/ki-potenzial-landkarte/organisation"
                    className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Ökosysteme Ebene</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Entdecken Sie, wie intelligente Netzwerke komplexe Herausforderungen gemeinsam meistern und
                    Innovationen beschleunigen.
                  </p>
                  <Link
                    href="/use-cases/ki-potenzial-landkarte/oekosysteme"
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

      {/* CTA Section */}
      <section className="py-16 bg-kivisai-pure-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-kivisai-clear-turquoise/20 to-teal-600/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                    Bereit für Ihre Team-KI-Transformation?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Entdecken Sie in unserer KI-Potenzialanalyse, welche maßgeschneiderten KI-Lösungen für Ihr Team am
                    besten geeignet sind. Überwinden Sie Reibungsverluste und schaffen Sie die organisatorischen
                    Rahmenbedingungen für erfolgreiche KI-Integration.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Team-KI-Potenzialanalyse buchen
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-kivisai-clear-turquoise text-kivisai-clear-turquoise px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise hover:text-white transition-colors"
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
