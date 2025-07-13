import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template"

export default function KiBegleitungPage() {
  return (
    <LeistungenPageTemplate
      heroTitle="KI-Begleitung – Ihr strategischer Sparringspartner"
      heroDescription="Nachhaltige Begleitung des Managements im KI-Wandel. Wir unterstützen Sie dabei, die KI-Transformation erfolgreich zu steuern und zu verankern."
      serviceName="KI-Begleitung"
      ctaSection={{
        title: "Bereit für strategische KI-Begleitung?",
        description: "Lassen Sie uns gemeinsam Ihre KI-Transformation nachhaltig und erfolgreich gestalten.",
        primaryCta: {
          text: "Kostenloses Erstgespräch vereinbaren",
          href: "/termin"
        },
        secondaryCta: {
          text: "Mehr zu unseren Leistungen",
          href: "/leistungen"
        }
      }}
    />
  )
}
