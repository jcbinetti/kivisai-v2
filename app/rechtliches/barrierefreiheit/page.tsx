import { ContentSection } from "@/components/common/content-section"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function BarrierefreiheitPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Barrierefreiheit</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">Unser Engagement für eine zugängliche Website</p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unser Bekenntnis zur Barrierefreiheit</h2>
            </div>
            <p className="text-kivisai-moss-green leading-relaxed">
              KIVISAI ist bestrebt, seine Website für alle Menschen zugänglich zu machen, unabhängig von ihren
              Fähigkeiten oder Technologien. Wir arbeiten kontinuierlich daran, die Benutzerfreundlichkeit und
              Zugänglichkeit unserer Website zu verbessern und die entsprechenden Standards einzuhalten.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6">Standards und Richtlinien</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  WCAG 2.1
                </Badge>
                <div>
                  <h3 className="font-semibold text-lg text-kivisai-deep-dark-blue">
                    Web Content Accessibility Guidelines
                  </h3>
                  <p className="text-kivisai-moss-green">
                    Wir orientieren uns an den WCAG 2.1 Richtlinien auf Level AA, um eine hohe Zugänglichkeit zu
                    gewährleisten.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  EN 301 549
                </Badge>
                <div>
                  <h3 className="font-semibold text-lg text-kivisai-deep-dark-blue">Europäischer Standard</h3>
                  <p className="text-kivisai-moss-green">
                    Berücksichtigung der europäischen Norm für die Barrierefreiheit von IKT-Produkten und
                    -Dienstleistungen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  BITV 2.0
                </Badge>
                <div>
                  <h3 className="font-semibold text-lg text-kivisai-deep-dark-blue">
                    Barrierefreie-Informationstechnik-Verordnung
                  </h3>
                  <p className="text-kivisai-moss-green">
                    Orientierung an den deutschen Bestimmungen zur digitalen Barrierefreiheit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6">Implementierte Maßnahmen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-kivisai-moss-green">Technische Umsetzung</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Semantisches HTML für Screen Reader
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    ARIA-Labels und -Beschreibungen
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Tastaturnavigation für alle Elemente
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Focus-Indikatoren für bessere Orientierung
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Skip-Links für schnelle Navigation
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-kivisai-moss-green">Design und Inhalt</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Ausreichende Farbkontraste (4.5:1)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Skalierbare Schriftgrößen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
