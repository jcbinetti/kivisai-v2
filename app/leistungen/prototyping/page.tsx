import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template"
import { ContentSection } from "@/components/common/content-section"
import { Rocket, CheckCircle, TrendingUp, Users, Zap, Cog } from "lucide-react"
import GatedDownloadSection from "@/components/gated-download-section"

export default function PrototypingPage() {
  return (
    <LeistungenPageTemplate
      heroTitle="KI-Prototyping – Von der Idee zum einsatzfähigen MVP"
      heroDescription="Mit unserem agilen Prototyping-Sprint entwickeln wir gemeinsam mit Ihrem Team genau die KI-Lösung, die Ihre Organisation jetzt braucht. Dafür stellen wir erfahrene KI-Coaches, Consultants und Builder bereit – passgenau zu Ihrer Strategie und Ihren internen Ressourcen."
      serviceName="KI-Prototyping"
      ctaSection={{
        title: "Bereit für Ihren KI-Prototyp?",
        description: "Lassen Sie uns gemeinsam herausfinden, welcher Schritt für Sie jetzt der richtige ist.",
        primaryCta: {
          text: "Prototyp-Sprint starten",
          href: "/termin"
        },
        secondaryCta: {
          text: "Top-10 KI-Lösungskonzepte",
          href: "/prototyp/detail"
        }
      }}
    >
      <ContentSection variant="default" background="white" padding="lg">
        <div className="text-center lg:text-left">
          <p className="text-lg mb-8 text-kivisai-moss-green">
            Ob Chatbot, RAG-System, Generative-KI-Anwendung, Prozess-Automatisierung oder semantische Suche – wir
            liefern ein funktionierendes MVP, das messbare Wirkung entfaltet und sofort getestet werden kann.
          </p>
          <p className="text-lg mb-12 text-kivisai-moss-green">
            Der Sprint folgt der KIVISAI-Methode, ist{" "}
            <strong className="text-kivisai-deep-dark-blue">förderfähig</strong> und eignet sich perfekt für kleine
            Projektteams, Fachabteilungen oder interdisziplinäre Innovationsgruppen.
          </p>
        </div>
      </ContentSection>

      <ContentSection variant="centered" background="gray" padding="lg" title="Unsere Angebotsmodelle">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-kivisai-clear-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-kivisai-clear-turquoise" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Schnell startklar</h3>
            <p className="text-kivisai-moss-green">In ≤ 4 Wochen liegt ein einsatzfähiges MVP auf dem Tisch.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-kivisai-deep-dark-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-kivisai-deep-dark-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Wirtschaftlich & förderfähig</h3>
            <p className="text-kivisai-moss-green">
              Bis zu 80 % Zuschuss (INQA u. a.) – klarer Business-Case, kein Kostenrisiko.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-kivisai-clear-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-kivisai-clear-turquoise" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Co-Creation mit Ihrem Team</h3>
            <p className="text-kivisai-moss-green">Wir bauen gemeinsam – Know-how bleibt im Haus, Akzeptanz steigt.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-kivisai-deep-dark-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-kivisai-deep-dark-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Skalierbar & compliant</h3>
            <p className="text-kivisai-moss-green">Architektur, Datenschutz & Governance von Anfang an mitgedacht.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        variant="centered"
        background="white"
        padding="lg"
        title="Drei Modelle – je nach Reifegrad & Ressourcen"
      >
        <div className="space-y-6 mt-8">
          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Cog className="w-6 h-6 text-kivisai-deep-dark-blue mr-3" />
              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">ENABLE Coaching</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Sie entwickeln selbst – wir coachen & moderieren</p>
            <p className="text-sm text-kivisai-moss-green italic">Ideal für: Selbstorganisierte Teams mit Lernfokus</p>
          </div>
          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Rocket className="w-6 h-6 text-kivisai-deep-dark-blue mr-3" />
              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">ENABLE Solution</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Umsetzung mit KI-Buildern & Know-how-Transfer</p>
            <p className="text-sm text-kivisai-moss-green italic">
              Ideal für: Wenn zusätzlich technische Expertise gebraucht wird
            </p>
          </div>
          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Zap className="w-6 h-6 text-kivisai-deep-dark-blue mr-3" />
              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">ENABLE Full Service</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir liefern die Lösung als Paket</p>
            <p className="text-sm text-kivisai-moss-green italic">
              Ideal für: Bei Zeitdruck oder fehlenden IT-Ressourcen
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        variant="centered"
        background="gray"
        padding="lg"
        title="Warum KIVISAI für die Entwicklung Ihrer KI-Solution"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-kivisai-deep-dark-blue">Bewährte Methodik</h3>
            <p className="text-kivisai-moss-green">
              Unsere KIVISAI-Methode kombiniert agile Entwicklung mit KI-Expertise und hat sich in über 100 Projekten
              bewährt und passt sich jeder Anforderung an.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-kivisai-deep-dark-blue">Erfahrenes Team</h3>
            <p className="text-kivisai-moss-green">
              Data Scientists, KI-Coaches und Entwickler mit jahrelanger Erfahrung und als KI-Experten fortgebildet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-kivisai-deep-dark-blue">Nachhaltige Lösungen</h3>
            <p className="text-kivisai-moss-green">
              Wir entwickeln nicht nur Prototypen, sondern schaffen die Grundlage für skalierbare, produktive
              KI-Systeme.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Gated Download Section */}
      <div className="container mx-auto px-4 py-16">
        <GatedDownloadSection />
      </div>
    </LeistungenPageTemplate>
  )
}
