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
  Globe,
} from "lucide-react"
import { sanityClient } from "@/lib/sanity-client"
import { groq } from "next-sanity"

interface UseCase {
  title: string;
  description: string;
  // Fügen Sie hier bei Bedarf weitere Felder aus dem Schema hinzu
}

// Datenabfrage für einen spezifischen Use Case
const fetchUseCaseData = async (slug: string): Promise<UseCase | null> => {
  const query = groq`*[_type == "useCase" && slug.current == $slug][0]{
    title,
    description
  }`;
  try {
    const useCase = await sanityClient.fetch<UseCase>(query, { slug });
    return useCase;
  } catch (error) {
    console.error("Failed to fetch Use Case data from Sanity:", error);
    return null;
  }
};

export default async function UseCaseTemplatePage() {
  // Beispiel-Slug. In einer echten dynamischen Seite käme dies aus den URL-Parametern.
  const useCaseData = await fetchUseCaseData("ki-assistent-fuer-handwerker");

  const pageTitle = useCaseData?.title || "[HAUPTTITEL: Problemlösungsorientiert, max. 60 Zeichen]";
  const pageDescription = useCaseData?.description || "[UNTERTITEL: Konkrete Ergebnisse und Zeitrahmen, max. 120 Zeichen. Beschreibt den Nutzen und das Ergebnis.]";

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
            <span className="text-kivisai-deep-dark-blue font-medium">{pageTitle}</span>
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
              {pageTitle}
            </h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {pageDescription}
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">[AB]</span>
                </div>
                <span>[Autor Vorname Nachname]</span>
              </div>
              <div>[DD.MM.YYYY] • [X] min</div>
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
                src="/placeholder.svg?height=600&width=800&text=Hero+Image+16:9"
                alt="[ALT-TEXT: Beschreibend und SEO-optimiert, erklärt was auf dem Bild zu sehen ist]"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">[Zeitangabe]</span>
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
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Anwender:</div>
                      <div className="text-kivisai-deep-dark-blue">[Zielgruppe/Person]</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Branche/Kontext:</div>
                      <div className="text-kivisai-deep-dark-blue">[Branche oder Anwendungsbereich]</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Entwicklungszeit:</div>
                      <div className="text-kivisai-deep-dark-blue">[Zeitaufwand für Umsetzung]</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Technologie:</div>
                      <div className="text-kivisai-deep-dark-blue">[Verwendete KI-Tools/Technologien]</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Investition:</div>
                      <div className="text-kivisai-deep-dark-blue">[Kosten in Euro]</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-kivisai-moss-green mb-1">Zeitersparnis/ROI:</div>
                      <div className="text-kivisai-deep-dark-blue">[Messbare Ergebnisse]</div>
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
                  [PROBLEMDARSTELLUNG: Beschreibung der Ausgangssituation in Ich-Form. Was war die konkrete
                  Herausforderung? Welche Probleme gab es? Warum war eine Lösung nötig?]
                </p>
                <ul className="space-y-2 text-kivisai-moss-green">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>[Herausforderung 1: Konkrete Problembeschreibung]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>[Herausforderung 2: Zeitaufwand/Kosten]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>[Herausforderung 3: Qualität/Effizienz]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                    <span>[Herausforderung 4: Skalierbarkeit/Nachhaltigkeit]</span>
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
                  [LÖSUNGSBESCHREIBUNG: Kurze Zusammenfassung der entwickelten KI-Lösung]
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      Umsetzungsschritte:
                    </h3>
                    <ul className="space-y-2 text-kivisai-moss-green text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span>[Schritt 1: Zeitaufwand und Beschreibung]</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span>[Schritt 2: Zeitaufwand und Beschreibung]</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span>[Schritt 3: Zeitaufwand und Beschreibung]</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-yellow-400" />
                      Verwendete Technologien:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <FileText className="w-3 h-3 mr-1" />
                        [Tool 1]
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <Brain className="w-3 h-3 mr-1" />
                        [Tool 2]
                      </Badge>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                        <Globe className="w-3 h-3 mr-1" />
                        [Tool 3]
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Der entscheidende Prompt/Ansatz */}
                <div className="bg-kivisai-deep-dark-blue/5 border border-kivisai-deep-dark-blue/20 rounded-lg p-6">
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-kivisai-deep-dark-blue" />
                    Der entscheidende Prompt/Ansatz:
                  </h3>
                  <div className="bg-white border-l-4 border-l-kivisai-clear-turquoise p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green italic text-sm leading-relaxed">
                      "[PROMPT/ANSATZ: Der konkrete Prompt oder Ansatz, der zum Erfolg geführt hat. Wichtige
                      Formulierungen hervorheben.]"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Demo & Visualisierung */}
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
                      src="/placeholder.svg?height=600&width=800&text=Demo+Screenshot"
                      alt="[ALT-TEXT: Beschreibung des Demo-Screenshots]"
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
                      [FUNKTIONSBESCHREIBUNG: Wie funktioniert die Lösung? Was passiert im Hintergrund?]
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                    >
                      Ich zeige Ihnen, wie es funktioniert <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kivisai-deep-dark-blue mb-3">Kernfunktionen</h3>
                    <ul className="text-kivisai-moss-green text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>[Funktion 1: Beschreibung der Hauptfunktion]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>[Funktion 2: Beschreibung der zweiten Funktion]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>[Funktion 3: Beschreibung der dritten Funktion]</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messbare Ergebnisse + Testimonial */}
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
                        <div className="font-semibold text-kivisai-deep-dark-blue">[Ergebnis 1]</div>
                        <div className="text-sm text-kivisai-moss-green">[Konkrete Zahlen/Beschreibung]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">[Ergebnis 2]</div>
                        <div className="text-sm text-kivisai-moss-green">[Konkrete Zahlen/Beschreibung]</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">[Ergebnis 3]</div>
                        <div className="text-sm text-kivisai-moss-green">[ROI/Zeitersparnis]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">[Ergebnis 4]</div>
                        <div className="text-sm text-kivisai-moss-green">[Qualitative Verbesserung]</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-green-100 rounded-lg p-6 border-l-4 border-l-green-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">"</span>
                    </div>
                    <div>
                      <p className="text-green-700 font-medium mb-3 italic">
                        "[TESTIMONIAL: Direktes Zitat des Anwenders, 1-2 Sätze, max. 150 Zeichen. Authentisch,
                        emotional, ergebnisorientiert.]"
                      </p>
                      <div className="text-green-600 font-semibold text-sm">— [Vorname N.], [Rolle/Branche]</div>
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
                      <strong>[Erkenntnis 1]:</strong> [Beschreibung der wichtigsten Lernerfahrung]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>[Erkenntnis 2]:</strong> [Technische oder prozessuale Erkenntnis]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>[Erkenntnis 3]:</strong> [Empfehlung für andere Anwender]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-kivisai-moss-green">
                      <strong>[Erkenntnis 4]:</strong> [Kritischer Erfolgsfaktor]
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
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">[Related Use Case 1]</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">[Kurze Beschreibung des verwandten Use Cases]</p>
                  <Link
                    href="/use-cases/[slug]"
                    className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold text-sm"
                  >
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">[Related Use Case 2]</h3>
                  <p className="text-kivisai-moss-green text-sm mb-4">[Kurze Beschreibung des verwandten Use Cases]</p>
                  <Link
                    href="/use-cases/[slug]"
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
            <div className="bg-gradient-to-r from-kivisai-clear-turquoise/20 to-kivisai-deep-dark-blue/10 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                    [CTA HEADLINE: Personalisierte Headline basierend auf dem Use Case]
                  </h2>
                  <p className="text-kivisai-moss-green mb-6">
                    [CTA BESCHREIBUNG: Nutzenorientierte Beschreibung, die zum Handeln motiviert. Bezug zum Use Case und
                    konkreter Nutzen für den Leser.]
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/termin#booking-widget"
                      className="inline-flex items-center gap-2 bg-kivisai-deep-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      [Primärer CTA Text]
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 border border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-deep-dark-blue hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      [Sekundärer CTA Text]
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
