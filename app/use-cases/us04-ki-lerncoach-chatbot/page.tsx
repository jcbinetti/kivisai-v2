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
  Clock,
  Brain,
  FileText,
  Video,
  Globe,
} from "lucide-react"

export default function KiLerncoachChatbotPage() {
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
            <span className="text-kivisai-deep-dark-blue font-medium">KI Lerncoach Chatbot</span>
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
              KI Lerncoach Chatbot: Persönlicher Lernassistent in 4 Stunden
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Wie Jean-Christophe Binetti mit ChatGPT einen maßgeschneiderten Lerncoach für seine TÜV-Zertifizierung
              entwickelte und eine Woche Vorbereitungszeit sparte.
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">JCB</span>
                </div>
                <span>Jean-Christophe Binetti</span>
              </div>
              <div>08.12.2024 • 6 min</div>
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
                alt="KI-Lerncoach Chatbot"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">4h</span>
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
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Person:</div>
                      <div className="text-kivisai-deep-dark-blue">Jean-Christophe Binetti, KIVISAI Gründer</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Zertifizierung:</div>
                      <div className="text-kivisai-deep-dark-blue">TÜV-Zertifizierung (6-monatiger Kurs)</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Entwicklungszeit:</div>
                      <div className="text-kivisai-deep-dark-blue">4 Stunden Setup</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Materialien:</div>
                      <div className="text-kivisai-deep-dark-blue">PDFs, Word, Videos, Miro-Boards, Web-Links</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Investition:</div>
                      <div className="text-kivisai-deep-dark-blue">20€ (ChatGPT Plus, 1 Monat)</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Zeitersparnis:</div>
                      <div className="text-kivisai-deep-dark-blue">1 Woche Vorbereitungszeit</div>
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
                <p className="text-kivisai-moss-green leading-relaxed mb-4">
                  Jean-Christophe stand vor einer TÜV-Zertifizierungsprüfung nach einem 6-monatigen Kurs. Die
                  Kursmaterialien waren über verschiedene Formate verstreut: PDFs, Word-Dokumente, Videos, Miro-Boards
                  und Web-Links. Die größte Herausforderung war nicht nur das Lernen selbst, sondern:
                </p>
                <ul className="space-y-2 text-kivisai-moss-green">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Ein strukturiertes Lernkompendium aus allen Materialien zu erstellen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Prüfungssimulationen und Tests zu entwickeln</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Alle Prüfkriterien systematisch abzudecken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>Zeit: Normalerweise hätte dies eine ganze Woche Arbeit bedeutet</span>
                  </li>
                </ul>
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
                  Entwicklung eines personalisierten ChatGPT-Lerncoaches mit allen Kursmaterialien als Wissensbasis
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      Zeitaufwand:
                    </h3>
                    <ul className="space-y-2 text-kivisai-moss-green text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span>1 Stunde: Material-Upload (längste Phase: Dokumente finden)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span>3 Stunden: Prompt-Entwicklung und Chatbot-Konfiguration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-yellow-400" />
                      Verarbeitete Materialien:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <FileText className="w-3 h-3 mr-1" />
                        PDFs
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <FileText className="w-3 h-3 mr-1" />
                        Word-Docs
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <Video className="w-3 h-3 mr-1" />
                        Videos
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <Brain className="w-3 h-3 mr-1" />
                        Miro-Boards
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <Globe className="w-3 h-3 mr-1" />
                        Web-Links
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Der entscheidende Prompt */}
                <div className="bg-kivisai-deep-dark-blue/5 border border-kivisai-deep-dark-blue/20 rounded-lg p-6">
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-kivisai-deep-dark-blue" />
                    Der entscheidende Prompt:
                  </h3>
                  <div className="bg-white border-l-4 border-l-kivisai-clear-turquoise p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green italic text-sm leading-relaxed">
                      "Aus dem gesamten Inhalt und{" "}
                      <span className="font-bold text-kivisai-deep-dark-blue">nur aus diesen Informationen</span>, die
                      ich als Kursinhalt erhalten habe, erstelle mir ein Lernkompendium mit Steckbriefen und ein Quiz,
                      womit ich alles trainieren kann. Berücksichtige dabei alle Prüfkriterien, die ich dir mitgegeben
                      habe."
                    </p>
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
                      src="/images-optimized/4_KIVISAI-NAVI/KIVI_GROW.webp"
                      alt="KI-Lerncoach Chatbot Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Funktionsweise</h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Der Lerncoach-Chatbot analysiert alle hochgeladenen Kursmaterialien und erstellt daraus
                      strukturierte Lernmodule: Steckbriefe für Wissensvermittlung, QCM-Tests für die
                      Prüfungsvorbereitung und interaktive Lerneinheiten.
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Ich zeige Ihnen, wie Sie Ihren eigenen Lerncoach erstellen <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Lernmodule</h3>
                    <ul className="text-kivisai-moss-green text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>#01 Steckbriefe Wissen: Strukturierte Wissensvermittlung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>#02 QCM ACAQ 23: Prüfungssimulation mit Multiple Choice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>04 Lernen: Interaktive Lerneinheiten und Vertiefung</span>
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

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Prüfung leicht bestanden</div>
                        <div className="text-sm text-kivisai-moss-green">Dank strukturierter Vorbereitung</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">1 Woche Zeitersparnis</div>
                        <div className="text-sm text-kivisai-moss-green">Statt manueller Kompendium-Erstellung</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">ROI: 4.000%</div>
                        <div className="text-sm text-kivisai-moss-green">20€ Investment vs. 1 Woche Arbeitszeit</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Strukturiertes Lernen</div>
                        <div className="text-sm text-kivisai-moss-green">Alle Prüfkriterien systematisch abgedeckt</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold text-center">
                    💡 Jean-Christophes Fazit: "MEGA! Das war die beste Investition für meine Prüfungsvorbereitung."
                  </p>
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
                      <strong>Dokumenten-Organisation ist der Flaschenhals:</strong> Das Wiederfinden und Sammeln der
                      Materialien dauerte am längsten (1 Stunde von 4)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>Spezifische Prompts sind erfolgskritisch:</strong> "Nur aus diesen Informationen"
                      verhindert Halluzinationen und stellt Prüfungsrelevanz sicher
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>ChatGPT Plus lohnt sich:</strong> 20€ für einen Monat sind eine minimale Investition für
                      maximalen Nutzen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>Prüfkriterien explizit einbinden:</strong> Alle Bewertungskriterien müssen dem Chatbot
                      bekannt sein für optimale Vorbereitung
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
                    Möchten Sie Ihren eigenen Lerncoach entwickeln?
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    Wir zeigen Ihnen, wie Sie in wenigen Stunden einen personalisierten KI-Lerncoach für Ihre
                    Weiterbildung, Zertifizierung oder Ihr Team erstellen. Sparen Sie Zeit und lernen Sie effizienter.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-kivisai-deep-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Workshop buchen
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
