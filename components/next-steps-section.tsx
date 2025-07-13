import Link from "next/link"

interface NextStepsSectionProps {
  pageType: "potenzialanalyse" | "prototyping" | "inqa-coaching" | "strategie-coaching" // NEW
}

export default function NextStepsSection({ pageType }: NextStepsSectionProps) {
  const getContent = () => {
    switch (pageType) {
      case "potenzialanalyse":
        return {
          contact: {
            title: "Haben Sie Fragen?",
            description: "Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihren spezifischen Anforderungen.",
          },
          appointment: {
            title: "Kostenloser Info-Call",
            description:
              "Buchen Sie direkt einen 30 Min. Termin, um Ihre KI-Potenziale zu besprechen. <strong>Es ist kostenlos.</strong>",
            preselect: "beratung",
          },
          details: {
            title: "Detaillierte Informationen",
            description: "Erfahren Sie mehr über den genauen Ablauf, Nutzen und unser Consultant-Profil.",
            link: "/leistungen/ki-potenzialanalyse/details",
          },
        }

      case "prototyping":
        return {
          contact: {
            title: "Haben Sie Fragen?",
            description: "Sprechen Sie mit uns über Ihre Prototyping-Ideen und technischen Anforderungen.",
          },
          appointment: {
            title: "Prototyping-Beratung",
            description:
              "Buchen Sie einen 30 Min. Termin, um Ihr KI-Prototyping-Projekt zu besprechen. <strong>Es ist kostenlos.</strong>",
            preselect: "workshop",
          },
          details: {
            title: "Mehr zum Prototyping",
            description: "Detaillierte Infos zu unserem Prototyping-Prozess, Technologien und Erfolgsgeschichten.",
            link: "/leistungen/ki-prototyping/details",
          },
        }

      case "inqa-coaching":
        return {
          contact: {
            title: "Haben Sie Fragen?",
            description: "Lassen Sie uns Ihre Förderberechtigung prüfen und Ihre Transformationsziele besprechen.",
          },
          appointment: {
            title: "INQA-Beratungstermin",
            description:
              "Buchen Sie einen 30 Min. Termin zur Klärung Ihrer Förderung und Coaching-Möglichkeiten. <strong>Es ist kostenlos.</strong>",
            preselect: "coaching",
          },
          details: {
            title: "Mehr zum INQA-Coaching",
            description: "Detaillierte Informationen zu Förderung, Ablauf und unseren zertifizierten Coaches.",
            link: "/transformation/inqa-coaching/details",
          },
        }
      case "strategie-coaching":
        return {
          contact: {
            title: "Haben Sie Fragen?",
            description: "Lassen Sie uns gemeinsam Ihre KI-Strategie besprechen und offene Fragen klären.",
          },
          appointment: {
            title: "Kostenloses Strategiegespräch",
            description:
              "Buchen Sie direkt einen 30-minütigen Termin, um Ihre KI-Strategie zu diskutieren. <strong>Kostenlos & unverbindlich.</strong>",
            preselect: "coaching",
          },
          details: {
            title: "Mehr zum Strategie-Coaching",
            description: "Alle Details zu Programm, Ablauf und Referenzen unseres KI-Strategie-Coachings.",
            link: "/leistungen/strategie-coaching#details",
          },
        }
    }
  }

  const content = getContent()

  if (!content) {
    return null // unknown pageType – render nothing instead of crashing
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-kivisai-deep-dark-blue">Nächste Schritte</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* CTA 1: Fragen */}
        <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <div className="w-16 h-16 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-kivisai-pure-white">?</span>
            </div>
            <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">{content.contact.title}</h3>
            <p className="text-kivisai-moss-green mb-6">{content.contact.description}</p>
          </div>
          <Link
            href="/kontakt"
            className="bg-kivisai-deep-dark-blue text-kivisai-pure-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors inline-block"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* CTA 2: Termin - HERVORGEHOBENE MITTLERE BOX */}
        <div className="relative bg-gradient-to-br from-kivisai-vibrant-light-green/20 to-kivisai-clear-turquoise/20 p-8 rounded-xl shadow-xl text-center border-3 border-kivisai-vibrant-light-green hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
          {/* Glow-Effekt */}
          <div className="absolute inset-0 bg-gradient-to-br from-kivisai-vibrant-light-green/10 to-kivisai-clear-turquoise/10 rounded-xl blur-sm"></div>

          {/* Empfohlen Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-kivisai-vibrant-light-green text-kivisai-deep-dark-blue px-4 py-1 rounded-full text-sm font-bold shadow-md">
              ⭐ EMPFOHLEN
            </span>
          </div>

          <div className="relative z-10 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-kivisai-vibrant-light-green to-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">📅</span>
            </div>
            <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">{content.appointment.title}</h3>
            <p
              className="text-kivisai-moss-green mb-6 font-medium"
              dangerouslySetInnerHTML={{ __html: content.appointment.description }}
            ></p>
          </div>
          <Link
            href={`/termin?service=${content.appointment.preselect}#booking-widget`}
            className="relative z-10 bg-kivisai-deep-dark-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-kivisai-clear-turquoise transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Termin buchen →
          </Link>
        </div>

        {/* CTA 3: Mehr Infos */}
        <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-kivisai-pure-white">ℹ️</span>
            </div>
            <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-3">{content.details.title}</h3>
            <p className="text-kivisai-moss-green mb-6">{content.details.description}</p>
          </div>
          <Link
            href={content.details.link}
            className="bg-kivisai-clear-turquoise text-kivisai-pure-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise/80 transition-colors inline-block"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </div>
  )
}

// Named export for bundlers / tree-shaking friendliness
export { NextStepsSection }
