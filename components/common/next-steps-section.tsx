import Link from "next/link"
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react"

interface NextStepsSectionProps {
  pageType?: "service" | "contact" | "about"
  customSteps?: string[]
  className?: string
}

export function NextStepsSection({ 
  pageType = "service", 
  customSteps,
  className = "" 
}: NextStepsSectionProps) {
  const defaultSteps = {
    service: [
      "Kostenlose Erstberatung vereinbaren",
      "Maßgeschneiderte Lösung entwickeln",
      "Umsetzung und kontinuierliche Begleitung"
    ],
    contact: [
      "Kontaktformular ausfüllen",
      "Wir melden uns innerhalb von 24 Stunden",
      "Persönliches Gespräch vereinbaren"
    ],
    about: [
      "Mehr über unsere Methode erfahren",
      "Team und Netzwerk kennenlernen",
      "Kontakt aufnehmen für Fragen"
    ]
  }

  const steps = customSteps || defaultSteps[pageType]

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="h-5 w-5" />
      case 1:
        return <Phone className="h-5 w-5" />
      case 2:
        return <Mail className="h-5 w-5" />
      default:
        return <ArrowRight className="h-5 w-5" />
    }
  }

  const getStepLink = (index: number) => {
    switch (index) {
      case 0:
        return "/termin"
      case 1:
        return "/kontakt"
      case 2:
        return "/leistungen"
      default:
        return "/kontakt"
    }
  }

  return (
    <section className={`py-16 bg-kivisai-light-cool-gray ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">
            Nächste Schritte
          </h2>
          <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">
            So einfach kommen Sie zu Ihrer KI-Transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-kivisai-clear-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {getStepIcon(index)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">
                Schritt {index + 1}
              </h3>
              <p className="text-kivisai-moss-green mb-4">
                {step}
              </p>
              <Link
                href={getStepLink(index)}
                className="inline-flex items-center gap-2 text-kivisai-clear-turquoise font-semibold hover:underline"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/termin"
            className="bg-kivisai-deep-dark-blue text-kivisai-pure-white px-8 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors inline-flex items-center gap-2"
          >
            Jetzt starten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
} 