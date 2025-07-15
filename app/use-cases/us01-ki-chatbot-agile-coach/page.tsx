import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageSquare, Users, TrendingUp, Clock, Target, Lightbulb, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "KI-Chatbot Agile Coach | KIVISAI Use Case",
  description:
    "Entdecken Sie, wie ein KI-gestützter Agile Coach Teams dabei unterstützt, ihre Arbeitsweise zu optimieren und kontinuierlich zu verbessern.",
  keywords: "KI Chatbot, Agile Coach, Scrum, Kanban, Team Coaching, Künstliche Intelligenz",
}

export default function KiChatbotAgileCoachPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="bg-kivisai-deep-dark-blue text-kivisai-pure-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 bg-kivisai-pure-white/10 border-kivisai-pure-white/20 text-kivisai-pure-white text-sm font-medium"
            >
              Use Case • KI-Coaching
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">KI-Chatbot Agile Coach</h1>
            <p className="text-xl md:text-2xl text-kivisai-light-cool-gray mb-8 leading-relaxed">
              Ihr persönlicher KI-Assistent für agile Transformation und kontinuierliche Verbesserung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-kivisai-deep-dark-blue font-semibold"
              >
                <Link href="/termin">Beratungstermin buchen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-kivisai-pure-white/20 text-kivisai-pure-white hover:bg-kivisai-pure-white/10"
              >
                <Link href="/kontakt">Mehr erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Image Section */}
      <section className="py-16 bg-kivisai-light-cool-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="/images-optimized/4_KIVISAI-NAVI/KIVI_REFLECT.webp"
                  alt="KIVI Reflect"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Problem */}
              <Card className="border-kivisai-warm-red/20 bg-kivisai-warm-red/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6">Die Herausforderung</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kivisai-warm-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-kivisai-deep-dark-blue">
                        Agile Teams benötigen kontinuierliche Unterstützung bei der Optimierung ihrer Prozesse
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kivisai-warm-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-kivisai-deep-dark-blue">
                        Externe Agile Coaches sind teuer und nicht immer verfügbar
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kivisai-warm-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-kivisai-deep-dark-blue">
                        Retrospektiven und Verbesserungsmaßnahmen werden oft oberflächlich durchgeführt
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-kivisai-warm-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-kivisai-deep-dark-blue">
                        Mangelnde Konsistenz in der Anwendung agiler Praktiken
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="border-kivisai-clear-turquoise/20 bg-kivisai-clear-turquoise/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6">Die KI-Lösung</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                      <span className="text-kivisai-deep-dark-blue">
                        24/7 verfügbarer KI-Agile Coach für kontinuierliche Unterstützung
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                      <span className="text-kivisai-deep-dark-blue">
                        Personalisierte Empfehlungen basierend auf Team-Performance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                      <span className="text-kivisai-deep-dark-blue">
                        Strukturierte Retrospektiven mit datenbasierten Insights
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                      <span className="text-kivisai-deep-dark-blue">
                        Kontinuierliches Lernen und Anpassung an Team-Bedürfnisse
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-kivisai-light-cool-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">
                Funktionen des KI-Agile Coaches
              </h2>
              <p className="text-xl text-kivisai-light-cool-gray max-w-3xl mx-auto">
                Entdecken Sie die vielfältigen Möglichkeiten, wie KI Ihre agile Arbeitsweise unterstützen kann
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Interaktive Beratung</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Stellen Sie Fragen zu agilen Praktiken und erhalten Sie sofortige, fundierte Antworten
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Team-Analyse</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Bewertung der Team-Dynamik und Identifikation von Verbesserungspotenzialen
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Performance Tracking</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Kontinuierliche Überwachung und Analyse der Team-Performance
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Sprint Planning</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Unterstützung bei der Planung und Optimierung von Sprints
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Retrospektiven</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Strukturierte Retrospektiven mit actionable Insights und Verbesserungsvorschlägen
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Lightbulb className="w-12 h-12 text-kivisai-clear-turquoise mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">Best Practices</h3>
                  <p className="text-kivisai-light-cool-gray">
                    Empfehlungen basierend auf bewährten agilen Methoden und aktuellen Trends
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">Praxis-Beispiel</h2>
              <p className="text-xl text-kivisai-light-cool-gray">
                So unterstützt der KI-Agile Coach ein Entwicklungsteam
              </p>
            </div>

            <Card className="bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-deep-dark-blue/90 text-kivisai-pure-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center text-kivisai-deep-dark-blue font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Sprint Retrospektive</h3>
                      <p className="text-kivisai-light-cool-gray">
                        Das Team führt eine Retrospektive durch und der KI-Coach analysiert die Diskussion in Echtzeit
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center text-kivisai-deep-dark-blue font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Muster-Erkennung</h3>
                      <p className="text-kivisai-light-cool-gray">
                        Der Coach identifiziert wiederkehrende Probleme und schlägt konkrete Verbesserungsmaßnahmen vor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center text-kivisai-deep-dark-blue font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalisierte Empfehlungen</h3>
                      <p className="text-kivisai-light-cool-gray">
                        Basierend auf Team-Historie und aktueller Situation werden maßgeschneiderte Lösungen
                        vorgeschlagen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center text-kivisai-deep-dark-blue font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Kontinuierliches Monitoring</h3>
                      <p className="text-kivisai-light-cool-gray">
                        Der Coach überwacht die Umsetzung der Verbesserungen und passt seine Empfehlungen entsprechend
                        an
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-kivisai-light-cool-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">Vorteile für Ihr Team</h2>
              <p className="text-xl text-kivisai-light-cool-gray max-w-3xl mx-auto">
                Messbare Verbesserungen durch KI-gestütztes Agile Coaching
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <BarChart3 className="w-16 h-16 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">+35%</h3>
                  <p className="text-kivisai-light-cool-gray">Produktivitäts-steigerung</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-16 h-16 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">-50%</h3>
                  <p className="text-kivisai-light-cool-gray">Weniger Zeit für Meetings</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Target className="w-16 h-16 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">+60%</h3>
                  <p className="text-kivisai-light-cool-gray">Höhere Sprint-Ziel-Erreichung</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-16 h-16 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">+40%</h3>
                  <p className="text-kivisai-light-cool-gray">Bessere Team-Zufriedenheit</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kivisai-deep-dark-blue text-kivisai-pure-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihren KI-Agile Coach?</h2>
            <p className="text-xl text-kivisai-light-cool-gray mb-8">
              Lassen Sie uns gemeinsam erkunden, wie ein KI-gestützter Agile Coach Ihr Team transformieren kann
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-kivisai-deep-dark-blue font-semibold"
              >
                <Link href="/termin">Kostenlose Beratung buchen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-kivisai-pure-white/20 text-kivisai-pure-white hover:bg-kivisai-pure-white/10"
              >
                <Link href="/use-cases">Weitere Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
