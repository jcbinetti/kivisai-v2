import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Users, Target, Zap, CheckCircle, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "KI-Potenzialanalyse Workshop - Details & Methoden | KIVISAI",
  description: "Detaillierte Informationen zum KI-Potenzialanalyse Workshop: Agenda, Methoden, Beispiele und nächste Schritte.",
}

export default function KiPotenzialanalyseDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
              <Link href="/leistungen/ki-potenzialanalyse">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Workshop-Details & Methoden
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Erfahren Sie mehr über unseren strukturierten Workshop-Ansatz und die verwendeten Methoden.
            </p>
          </div>
        </div>
      </section>

      {/* Agenda Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
              Workshop-Agenda (09:00 - 17:00 Uhr)
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600">09:00</span>
                </div>
                <h3 className="font-semibold mb-2 text-blue-800">Kick-off & Einführung</h3>
                <p className="text-sm text-blue-700">Ziele, Erwartungen, Team-Vorstellung</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-green-600">10:30</span>
                </div>
                <h3 className="font-semibold mb-2 text-green-800">Prozessanalyse</h3>
                <p className="text-sm text-green-700">Identifikation von Optimierungspotenzialen</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-purple-600">14:00</span>
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">KI-Ideen & ROI</h3>
                <p className="text-sm text-purple-700">Bewertung und Priorisierung</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-orange-600">16:00</span>
                </div>
                <h3 className="font-semibold mb-2 text-orange-800">Roadmap & Next Steps</h3>
                <p className="text-sm text-orange-700">Umsetzungsplan und Handlungsempfehlungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
              Unsere Methoden
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Target className="w-16 h-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">SWOT-Canvas</h3>
                  <p className="text-kivisai-moss-green mb-4">
                    Systematische Analyse der Stärken, Schwächen, Chancen und Risiken für KI in Ihrem Unternehmen.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800">Analyse-Methode</Badge>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">ROI-Scoring-Matrix</h3>
                  <p className="text-kivisai-moss-green mb-4">
                    Bewertung von KI-Ideen nach Aufwand, Nutzen und Umsetzbarkeit mit konkreten Zahlen.
                  </p>
                  <Badge className="bg-green-100 text-green-800">Bewertungs-Tool</Badge>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Star className="w-16 h-16 text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">Roadmap-Poster</h3>
                  <p className="text-kivisai-moss-green mb-4">
                    Visuelle Darstellung der Umsetzungsphasen und Meilensteine für Ihre KI-Transformation.
                  </p>
                  <Badge className="bg-purple-100 text-purple-800">Planungs-Tool</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beispiel Output */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
              Beispiel-Output
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-kivisai-deep-dark-blue">Mock-PDF-Cover</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">KI-Potenzialanalyse</h3>
                    <p className="text-gray-600">[Unternehmensname]</p>
                    <p className="text-sm text-gray-500 mt-4">Erstellt am: [Datum]</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-kivisai-deep-dark-blue">Spider-Chart Screenshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">Spider</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">KI-Potenzial-Bewertung</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-kivisai-moss-green">
                <strong>35% schnellere Entscheidungsfindung</strong> bei KMU X durch implementierte KI-Lösungen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weiter-Box */}
      <section className="py-16 bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nächster Schritt: ENABLE-Sprint
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Nach der Potenzialanalyse können Sie mit unserem KI-Prototyping direkt in die Umsetzung gehen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-white/90">
                <Link href="/leistungen/ki-prototyping">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Zu KI-Prototyping
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/termin?service=potenzialanalyse">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin vereinbaren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
              Bereit für den nächsten Schritt?
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 px-8 py-4">
                <Link href="/termin?service=potenzialanalyse">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin buchen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-deep-dark-blue/10 px-8 py-4">
                <Link href="/leistungen/ki-prototyping">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Zu KI-Prototyping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
