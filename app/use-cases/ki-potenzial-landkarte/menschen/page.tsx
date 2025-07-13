import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Brain, Target, TrendingUp } from "lucide-react"
import UseCaseBreadcrumb from "@/components/common/use-case-breadcrumb"

export default function MenschenKIKompetenzPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumb */}
      <UseCaseBreadcrumb
        currentPage="Menschen"
        parentPage="KI-Potenzial Landkarte"
        parentUrl="/use-cases/ki-potenzial-landkarte"
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                MENSCHEN
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Die entscheidende KI-Kompetenz für den Menschen
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Persönliche KI-Assistenten revolutionieren den Arbeitsalltag – 40% mehr Produktivität durch die richtigen
              Kompetenzen
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Für alle Mitarbeiter</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>KI-Kompetenz aufbauen</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Sofort umsetzbar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Einführung */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-6">
                Warum KI-Kompetenz für Menschen entscheidend ist
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Die Zukunft der Arbeit wird von Menschen geprägt, die KI als persönlichen Assistenten nutzen können.
                Studien zeigen: Mitarbeiter mit KI-Kompetenz sind 40% produktiver und zufriedener in ihrem Job.
              </p>
            </div>

            {/* Kompetenz-Bereiche */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-kivisai-vibrant-light-green" />
                    Prompt Engineering
                  </CardTitle>
                  <CardDescription>Die Kunst, KI richtig zu "fragen"</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Effektive Prompts formulieren</li>
                    <li>• Kontext richtig setzen</li>
                    <li>• Iterative Verbesserung</li>
                    <li>• Spezifische Anweisungen geben</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-kivisai-vibrant-light-green" />
                    KI-Tool Auswahl
                  </CardTitle>
                  <CardDescription>Das richtige Tool für jede Aufgabe</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ChatGPT für Texte</li>
                    <li>• Claude für Analyse</li>
                    <li>• Midjourney für Bilder</li>
                    <li>• GitHub Copilot für Code</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-kivisai-vibrant-light-green" />
                    Workflow Integration
                  </CardTitle>
                  <CardDescription>KI nahtlos in den Arbeitsalltag einbauen</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automatisierung von Routinen</li>
                    <li>• KI-gestützte Entscheidungen</li>
                    <li>• Qualitätskontrolle</li>
                    <li>• Kontinuierliche Verbesserung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-kivisai-vibrant-light-green" />
                    Ethik & Verantwortung
                  </CardTitle>
                  <CardDescription>Verantwortungsvoller Umgang mit KI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Datenschutz beachten</li>
                    <li>• Bias erkennen und vermeiden</li>
                    <li>• Transparenz schaffen</li>
                    <li>• Menschliche Kontrolle behalten</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-kivisai-vibrant-light-green to-kivisai-clear-turquoise rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Bereit für die KI-Revolution?</h3>
              <p className="text-white/90 mb-6">
                Lassen Sie uns gemeinsam die KI-Kompetenzen Ihrer Mitarbeiter entwickeln.
              </p>
              <Button asChild size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-gray-100">
                <Link href="/termin">
                  Beratungstermin vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
