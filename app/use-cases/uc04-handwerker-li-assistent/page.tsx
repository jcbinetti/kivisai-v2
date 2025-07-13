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

export default function HandwerkerLiAssistentPage() {
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
            <span className="text-kivisai-deep-dark-blue font-medium">Handwerker LI Assistent</span>
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
              Handwerker LI Assistent: KI-gestützte Lead-Generierung
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Automatisierte Kundenakquise und Projektfindung auf LinkedIn für Handwerksbetriebe durch intelligente
              KI-Algorithmen.
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KT</span>
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>2024-12-07 • 8 min</div>
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
                src="/images/4_KIVISAI-NAVI/KIVI_SHARE.png"
                alt="KI-Assistent in der Werkstatt - Praktische Anwendung"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">24</span>
              </div>
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
                      <div className="text-kivisai-deep-dark-blue">Schreinerei Müller & Partner</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Größe:</div>
                      <div className="text-kivisai-deep-dark-blue">2 Mitarbeiter</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Implementierung:</div>
                      <div className="text-kivisai-deep-dark-blue">1 Monat Implementierung</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Branche:</div>
                      <div className="text-kivisai-deep-dark-blue">Handwerk & Bau</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Investition:</div>
                      <div className="text-kivisai-deep-dark-blue">€5.500</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">ROI:</div>
                      <div className="text-kivisai-deep-dark-blue">180% nach 8 Monaten</div>
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
                  Die traditionelle Kundenakquise über Mundpropaganda und lokale Werbung reicht nicht mehr aus, um
                  spezifische Zielgruppen zu erreichen. Die Schreinerei Müller & Partner hat Schwierigkeiten, neue
                  Kunden zu finden, die angemessene höhere Preise zu bezahlen bereit sind. Die Auftragsbücher sind zwar
                  voll, aber das Unternehmen möchte höherwertige Dienstleistungen anbieten und entsprechende Kunden
                  gewinnen. LinkedIn wird als Plattform nicht genutzt, obwohl dort viele potenzielle Geschäftskunden mit
                  höherem Budget aktiv sind.
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
                  KI-gestützter LinkedIn-Assistent für automatisierte Lead-Generierung und Kundenakquise mit Fokus auf
                  hochwertige Zielgruppen
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Eingesetzte Technologien:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      LinkedIn API
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      Natural Language Processing
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise">
                      CRM Integration
                    </Badge>
                  </div>
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

                <div className="mb-6">
                  <div className="relative w-full max-w-3xl mx-auto">
                    <Image
                      src="/images/2_KIVI_4_EBENE/KIVI_Organisation.png"
                      alt="Moderne Schreinerwerkstatt mit digitalen Tools - Potenzielle Kunden identifizieren, Kontaktaufnahme automatisieren, Interaktionen verfolgen"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Funktionsweise</h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Der LI Assistent analysiert LinkedIn-Profile und identifiziert potenzielle Kunden mit höherem
                      Budget basierend auf definierten Kriterien. Er automatisiert die personalisierte Kontaktaufnahme
                      und verfolgt alle Interaktionen systematisch.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Live-Demo anfragen <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Technische Details</h3>
                    <ul className="text-kivisai-moss-green text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>KI-basierte Zielgruppenanalyse für Premium-Kunden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Automatisierte, personalisierte Nachrichtenerstellung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Echtzeit-Tracking von Interaktionen und Follow-ups</span>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Hochwertige Leads um 250% gesteigert
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Akquisitionszeit um 60% reduziert
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Durchschnittlicher Auftragswert um 85% erhöht
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Kosten pro qualifiziertem Lead um 45% gesenkt
                        </div>
                      </div>
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
                      Personalisierung der Nachrichten ist entscheidend für hohe Response-Raten bei Premium-Zielgruppen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Kontinuierliche Optimierung der KI-Algorithmen für Zielgruppenselektion notwendig
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Integration in bestehende CRM-Systeme vereinfacht Adoption erheblich
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      Schulung der Mitarbeiter für qualifizierte Nachfassgespräche ist erfolgskritisch
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
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Netzwerk-Graph Visualisierung</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">
                    Interaktive Darstellung komplexer Unternehmensnetzwerke und Beziehungen.
                  </p>
                  <Link
                    href="/use-cases/us02-netzwerk-graph"
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
                    Wir entwickeln maßgeschneiderte KI-Lösungen für Ihr Unternehmen. Kontaktieren Sie uns für eine
                    kostenlose Potenzialanalyse und erfahren Sie, wie KI Ihre Kundenakquise revolutionieren kann.
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
