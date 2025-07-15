import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  User,
  Users,
  Calendar,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Mail,
  Brain,
  Target,
  Zap,
  GraduationCap,
  Cog,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "KI-Lösungen für den Menschen | KIVISAI",
  description: "Entdecken Sie KI-Lösungen, die den Menschen in den Mittelpunkt stellen. Persönliche Entwicklung und Empowerment durch KI.",
}

export default function MenschKIPage() {
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
            <span className="text-kivisai-deep-dark-blue font-medium">Für den Menschen</span>
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
                MENSCHEN
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ihr persönlicher KI-Co-Pilot
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Persönliche KI-Assistenten revolutionieren den Arbeitsalltag – 40% mehr Produktivität durch die richtigen
              Kompetenzen
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KI</span>
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>2025 • 8 min</div>
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
                src="/images-optimized/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.webp"
                alt="Persönlicher KI-Assistent unterstützt Menschen bei täglichen Aufgaben: Moderne Arbeitsplätze mit intelligenten digitalen Tools für optimierte Produktivität und Kompetenzentwicklung"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">40% mehr Produktivität</span>
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
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Die entscheidende KI-Kompetenz für den Menschen
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Die Zukunft der Arbeit wird von Menschen geprägt, die KI als persönlichen Assistenten nutzen können.
                    Es geht nicht darum, ersetzt zu werden, sondern darum, die eigenen Fähigkeiten zu erweitern und das
                    kreative Potenzial freizusetzen.
                  </p>

                  <p className="text-lg mb-6">
                    Der Schlüssel liegt in der Entwicklung der richtigen Kompetenzen: Wie kommuniziere ich effektiv mit
                    KI? Welche Tools sind für welche Aufgaben geeignet? Wie integriere ich KI nahtlos in meinen
                    Arbeitsalltag?
                  </p>

                  <div className="bg-white border-l-4 border-l-green-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-green-600">Messbare Ergebnisse:</strong> Studien zeigen: Mitarbeiter mit
                      KI-Kompetenz sind 40% produktiver und zufriedener in ihrem Job. Sie sparen durchschnittlich 10
                      Stunden pro Monat bei Routineaufgaben.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Quelle: MIT Sloan Management Review, "The Future of Work with AI", 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kompetenz-Bereiche */}
            <Card className="border-l-4 border-l-kivisai-deep-dark-blue bg-kivisai-deep-dark-blue/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Die 4 Säulen der persönlichen KI-Kompetenz
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-kivisai-deep-dark-blue/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-kivisai-deep-dark-blue" />
                      Prompt Engineering
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Die Kunst, KI richtig zu "fragen" und präzise Anweisungen zu formulieren.
                    </p>
                    <ul className="space-y-2 text-sm text-kivisai-moss-green">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                        Effektive Prompts formulieren
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                        Kontext richtig setzen
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                        Iterative Verbesserung
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-kivisai-deep-dark-blue/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-kivisai-deep-dark-blue" />
                      KI-Tool Auswahl
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Das richtige Werkzeug für jede Aufgabe identifizieren und effektiv einsetzen.
                    </p>
                    <ul className="space-y-2 text-sm text-kivisai-moss-green">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        ChatGPT für Texte und Analyse
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Midjourney für Bildgenerierung
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        GitHub Copilot für Code
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      Workflow Integration
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      KI nahtlos in den persönlichen Arbeitsalltag einbauen.
                    </p>
                    <ul className="space-y-2 text-sm text-kivisai-moss-green">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Automatisierung von Routinen
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        KI-gestützte Entscheidungen
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Kontinuierliche Verbesserung
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-500" />
                      Ethik & Verantwortung
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Verantwortungsvoller und bewusster Umgang mit KI-Technologien.
                    </p>
                    <ul className="space-y-2 text-sm text-kivisai-moss-green">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Datenschutz beachten
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Bias erkennen und vermeiden
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Menschliche Kontrolle behalten
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unsere Lösungen für Menschen */}
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unsere Lösungen für Menschen</h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-6">
                  <p className="text-lg">
                    Wir unterstützen Sie dabei, KI-Kompetenzen aufzubauen und Ihren persönlichen KI-Co-Piloten zu
                    entwickeln. Von den Grundlagen bis zur Meisterschaft.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-kivisai-clear-turquoise/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-kivisai-clear-turquoise" />
                      Persönliches KI-Coaching
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Individuelle Begleitung zur Stärkung Ihrer KI-Souveränität. Lernen Sie, KI als persönlichen
                      Assistenten zu nutzen.
                    </p>
                    <Link
                      href="/leistungen/coaching-training/persoenliches-ki-coaching"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Persönliches Coaching buchen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-kivisai-clear-turquoise/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-kivisai-clear-turquoise" />
                      KI-Kompetenz Training
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Praxisorientierte Workshops und Trainings für Einzelpersonen und kleine Gruppen. Sofort
                      anwendbares Wissen.
                    </p>
                    <Link
                      href="/leistungen/coaching-training"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Training buchen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-kivisai-clear-turquoise/20">
                  <div className="bg-gradient-to-r from-kivisai-clear-turquoise/10 to-kivisai-deep-dark-blue/10 p-4 rounded-lg">
                    <p className="text-kivisai-moss-green font-medium text-center">
                      <strong className="text-kivisai-deep-dark-blue">Nächster Schritt:</strong>
                      Lassen Sie uns in einer kostenlosen Potenzialanalyse Ihre individuellen KI-Möglichkeiten
                      identifizieren.
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
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Messbare Vorteile für Menschen</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">40% mehr Produktivität</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Deutliche Steigerung der persönlichen Effizienz durch KI-Unterstützung
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">10 Stunden pro Monat gespart</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Weniger Zeit für Routineaufgaben, mehr Zeit für kreative und strategische Arbeit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Höhere Jobzufriedenheit</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Weniger Stress durch Automatisierung repetitiver Aufgaben
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Erweiterte Kompetenzen</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Neue Fähigkeiten und bessere Karrierechancen durch KI-Expertise
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
              {/* Aktuelle Ebene - Mensch */}
              <div className="relative">
                <div className="bg-kivisai-clear-turquoise text-white p-4 rounded-lg shadow-lg transform scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Mensch</h3>
                      <p className="text-xs opacity-90">Aktuell</p>
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
              </div>

              {/* Nächste Ebene - Team */}
              <Link href="/loesungen/team" className="group">
                <div className="bg-white hover:bg-kivisai-clear-turquoise/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">Team</h3>
                      <p className="text-xs text-kivisai-moss-green">Nächste Ebene</p>
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
              </Link>

              {/* Organisation */}
              <Link href="/loesungen/organisation" className="group">
                <div className="bg-white hover:bg-kivisai-deep-dark-blue/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                      <Cog className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-deep-dark-blue">Organisation</h3>
                      <p className="text-xs text-kivisai-moss-green">Übernächste Ebene</p>
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
              Bereit für Ihre persönliche KI-Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entdecken Sie in unserer KI-Potenzialanalyse, wie Sie KI als persönlichen Co-Piloten nutzen können.
              Entwickeln Sie die Kompetenzen, die Sie für die Zukunft der Arbeit brauchen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Persönliche KI-Potenzialanalyse buchen
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
