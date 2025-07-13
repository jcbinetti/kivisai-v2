import React from "react"
import { ServiceCard } from "@/components/ui/service-card"
import { Lightbulb, Rocket, TrendingUp, Users, Shield, Zap } from "lucide-react"

export function ServiceCardShowcase() {
  return (
    <div className="py-16 bg-gradient-to-br from-kivisai-pure-white to-kivisai-light-cool-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kivisai-deep-dark-blue">
            ServiceCard Komponente
          </h2>
          <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
            Wiederverwendbare Service-Karten im KIVISAI Design-System mit drei Varianten und vollständiger Animation.
          </p>
        </div>

        {/* Varianten Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            number="1"
            title="KI-Potenzial-Check"
            subtitle="In nur 10 Tagen zur klaren Entscheidungsgrundlage"
            description="Wir analysieren Ihre Prozesse, zeigen Sofort-Hebel für Kostensenkung und Umsatzwachstum auf und liefern eine verständliche Kosten-Nutzen-Bewertung – risikofrei und praxisnah."
            icon={Lightbulb}
            href="/leistungen/ki-potenzialanalyse"
            variant="primary"
          />
          
          <ServiceCard
            number="2"
            title="KI-Sprint-Prototyp"
            subtitle="Vom Use Case zum lauffähigen Prototypen"
            description="Gemeinsam bauen wir einen stabilen Prototypen, den Sie live testen können. So sehen Sie früh, wie KI in Ihrem Betrieb funktioniert – und entscheiden erst danach über die Voll­implementierung."
            icon={Rocket}
            href="/leistungen/ki-prototyping"
            variant="secondary"
          />
          
          <ServiceCard
            number="3"
            title="Strategie- & Umsetzungscoaching"
            subtitle="Schritt-für-Schritt-Begleitung bis zum Erfolg"
            description="Wir entwickeln mit Ihnen eine KI-Roadmap, kümmern uns um Implementierung und Governance und bleiben an Ihrer Seite, bis messbare Ergebnisse stehen – budgetschonend und KPI-getrieben."
            icon={TrendingUp}
            href="/leistungen/strategie-coaching"
            variant="tertiary"
          />
        </div>

        {/* Zusätzliche Beispiele */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            number="4"
            title="Team-Coaching"
            subtitle="Menschliche Transformation begleiten"
            description="Wir unterstützen Ihr Team dabei, KI-Tools effektiv zu nutzen und die menschliche Expertise zu stärken. Gemeinsam entwickeln wir neue Arbeitsweisen und Kompetenzen."
            icon={Users}
            href="/leistungen/coaching-training"
            variant="primary"
          />
          
          <ServiceCard
            number="5"
            title="Sicherheits-Audit"
            subtitle="Datenschutz und Compliance sicherstellen"
            description="Wir prüfen Ihre KI-Lösungen auf Datenschutzkonformität und Sicherheitsstandards. So können Sie KI sicher und vertrauensvoll einsetzen."
            icon={Shield}
            href="/leistungen/ki-prototyping"
            variant="secondary"
          />
        </div>

        {/* Verwendungscode */}
        <div className="mt-16 bg-kivisai-deep-dark-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Verwendung:</h3>
          <pre className="bg-kivisai-moss-green/20 rounded-lg p-4 overflow-x-auto text-sm">
{`import { ServiceCard } from "@/components/ui/service-card"
import { Lightbulb } from "lucide-react"

<ServiceCard
  number="1"
  title="KI-Potenzial-Check"
  subtitle="In nur 10 Tagen zur klaren Entscheidungsgrundlage"
  description="Wir analysieren Ihre Prozesse..."
  icon={Lightbulb}
  href="/leistungen/ki-potenzialanalyse"
  variant="primary" // "primary" | "secondary" | "tertiary"
/>`}
          </pre>
        </div>
      </div>
    </div>
  )
} 