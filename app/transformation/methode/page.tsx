import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Rocket, Share2, Leaf } from "lucide-react"

export default function MethodePage() {
  return (
    <div className="min-h-screen py-16 bg-kivisai-pure-white text-kivisai-moss-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-4xl font-bold mb-8 text-center text-kivisai-deep-dark-blue">
            Der KIVISAI-Loop: Ihr bewährter Weg zur menschlich-KI-gestützten Transformation.
          </h1>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-kivisai-moss-green">
            Erfahren Sie mehr über unseren bewährten Ansatz: THINK, ENABLE, SHARE, GROW.
          </p>

          {/* Detaillierte Erklärung des KIVISAI-Loops */}
          <div className="space-y-16">
            {/* Phase 1: THINK */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md flex items-center justify-center h-64">
                  <Lightbulb className="w-24 h-24 text-kivisai-deep-dark-blue" />
                  <p className="sr-only">Illustration einer Glühbirne, die Ideen symbolisiert.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
                  Phase 1: THINK – Potenziale erkennen, Strategie entwickeln
                </h2>
                <p className="text-kivisai-moss-green leading-relaxed">
                  In dieser Phase identifizieren wir gemeinsam Ihre spezifischen Herausforderungen und ungenutzten
                  Potenziale. Mit wissenschaftlicher Tiefe und unserer praxiserprobten Toolbox erarbeiten wir eine klare
                  KI-Strategie, die auf Ihre Unternehmensziele einzahlt. Keine Experimente, sondern fundierte Analysen
                  für stabile Entscheidungen.
                </p>
              </div>
            </div>

            {/* Phase 2: ENABLE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md flex items-center justify-center h-64">
                  <Rocket className="w-24 h-24 text-kivisai-deep-dark-blue" />
                  <p className="sr-only">Illustration einer Rakete, die Umsetzung symbolisiert.</p>
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
                  Phase 2: ENABLE – Lösungen umsetzen, Prototypen entwickeln
                </h2>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Basierend auf der Strategie setzen wir im agilen Prototyping-Sprint Ihre KI-Ideen schnell in
                  funktionierende MVPs um. Unser erfahrenes Team aus Data Scientists und Entwicklern sorgt für eine
                  effiziente und zielgerichtete Realisierung, die sofort getestet werden kann.
                </p>
              </div>
            </div>

            {/* Phase 3: SHARE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md flex items-center justify-center h-64">
                  <Share2 className="w-24 h-24 text-kivisai-deep-dark-blue" />
                  <p className="sr-only">Illustration von zwei Pfeilen, die Teilen symbolisieren.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
                  Phase 3: SHARE – Wissen teilen, Akzeptanz schaffen
                </h2>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Wir fördern den Wissenstransfer und die Akzeptanz innerhalb Ihres Teams. Durch Co-Creation und
                  gezielte Schulungen stellen wir sicher, dass Ihre Mitarbeiter die KI-Lösungen verstehen, aktiv
                  mitgestalten und souverän nutzen können.
                </p>
              </div>
            </div>

            {/* Phase 4: GROW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md flex items-center justify-center h-64">
                  <Leaf className="w-24 h-24 text-kivisai-deep-dark-blue" />
                  <p className="sr-only">Illustration eines Blattes, das Wachstum symbolisiert.</p>
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
                  Phase 4: GROW – Skalieren, nachhaltig wirken
                </h2>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Nach dem erfolgreichen Prototyping unterstützen wir Sie bei der Skalierung Ihrer KI-Lösungen. Wir
                  entwickeln robuste Architekturen und integrieren die KI nahtlos in Ihre bestehenden Systeme, um
                  langfristigen, nachhaltigen Erfolg zu sichern.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg mt-16 mb-12 text-center max-w-3xl mx-auto text-kivisai-moss-green">
            Der KIVISAI-Loop betont die Iteration, das kontinuierliche Lernen und die stabile, schrittweise Umsetzung,
            die Risiken minimiert und messbare Ergebnisse liefert.
          </p>

          {/* Mensch-KI-Synergie */}
          <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
              Der Mensch im Mittelpunkt: KI als Ihr leistungsstarker Assistent
            </h2>
            <p className="text-lg mb-8 text-kivisai-moss-green">
              Wir verstehen Ihre Skepsis. Deshalb integrieren wir KI als intelligenten Assistenten, der Ihre über Jahre
              aufgebaute Expertise ergänzt und verstärkt. Durch gezieltes Coaching und Training befähigen wir Ihre
              Mitarbeiter, die neuen Tools souverän zu nutzen und ihre Produktivität spürbar zu steigern – ohne
              Zeitdruck und mit voller Kontrolle.
            </p>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mensch-KI-Kollaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/kontakt"
              className="bg-kivisai-deep-dark-blue text-kivisai-pure-white px-8 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors text-lg"
            >
              Ihre Transformation starten
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
