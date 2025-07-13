import { CtaSection } from "@/components/common/cta-section"

export function CtaVariantsDemo() {
  return (
    <div className="space-y-16">
      {/* 1. Standard Gradient CTA */}
      <CtaSection
        variant="centered"
        background="gradient"
        size="md"
        title="Bereit für Ihre KI-Transformation?"
        description="Lassen Sie uns gemeinsam Ihr Potenzial ausschöpfen und den Grundstein für Ihre erfolgreiche KI-Transformation legen."
        primaryCta={{
          text: "Kostenloses Erstgespräch vereinbaren",
          href: "/termin",
          icon: "calendar"
        }}
        secondaryCta={{
          text: "Mehr zu unseren Leistungen",
          href: "/leistungen",
          icon: "arrow"
        }}
      />

      {/* 2. Split Layout mit Bild */}
      <CtaSection
        variant="split"
        background="primary"
        size="lg"
        title="KI-Potenzialanalyse"
        description="Systematische Analyse Ihrer Prozesse, Daten und Kompetenzen. Wir identifizieren konkrete Anwendungsfälle für KI in Ihrem Unternehmen."
        primaryCta={{
          text: "Beratung vereinbaren",
          href: "/termin?service=potenzialanalyse",
          icon: "calendar"
        }}
        secondaryCta={{
          text: "Mehr erfahren",
          href: "/leistungen/ki-potenzialanalyse",
          icon: "arrow"
        }}
        image={{
          src: "/images/ki-potenzialanalyse-cta.jpg",
          alt: "KI-Potenzialanalyse Visualisierung"
        }}
      />

      {/* 3. Banner Style für wichtige CTAs */}
      <CtaSection
        variant="banner"
        background="secondary"
        size="lg"
        title="Jetzt KI-Strategie entwickeln!"
        description="Nutzen Sie die Chance, Ihr Unternehmen zukunftssicher aufzustellen. Unsere Experten begleiten Sie Schritt für Schritt."
        primaryCta={{
          text: "Strategie-Workshop buchen",
          href: "/termin?service=strategie",
          icon: "calendar"
        }}
      />

      {/* 4. Minimaler CTA */}
      <CtaSection
        variant="default"
        background="white"
        size="sm"
        title="Haben Sie Fragen zu unseren Leistungen?"
        description="Unser Team steht Ihnen gerne für ein persönliches Gespräch zur Verfügung."
        primaryCta={{
          text: "Kontakt aufnehmen",
          href: "/kontakt",
          icon: "mail"
        }}
        secondaryCta={{
          text: "FAQ durchsuchen",
          href: "/faq",
          icon: "external"
        }}
      />

      {/* 5. Grauer Hintergrund für subtile CTAs */}
      <CtaSection
        variant="centered"
        background="gray"
        size="md"
        title="Newsletter abonnieren"
        description="Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen im Bereich KI und erhalten Sie exklusive Insights."
        primaryCta={{
          text: "Newsletter abonnieren",
          href: "/newsletter",
          icon: "mail"
        }}
      />

      {/* 6. Download CTA */}
      <CtaSection
        variant="centered"
        background="primary"
        size="md"
        title="KI-Readiness Checkliste"
        description="Laden Sie unsere kostenlose Checkliste herunter und prüfen Sie, ob Ihr Unternehmen bereit für KI ist."
        primaryCta={{
          text: "Checkliste herunterladen",
          href: "/downloads/ki-readiness-checklist.pdf",
          icon: "download"
        }}
        secondaryCta={{
          text: "Mehr Downloads",
          href: "/downloads",
          icon: "arrow"
        }}
      />
    </div>
  )
} 