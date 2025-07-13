/**
 * KIVISAI Component Examples
 *
 * Beispiele für die korrekte Verwendung aller Komponenten
 */

import { HeroSection, ContentSection, CtaSection, FeatureGrid, StatsSection } from "@/lib/component-registry"
import { Brain, Users, Lightbulb, Target } from "lucide-react"

// Hero Section Beispiele
export const HeroExamples = {
  // Standard Hero für Hauptseiten
  default: (
    <HeroSection
      title="KI-Transformation für Ihr Unternehmen"
      subtitle="KIVISAI Expertise"
      description="Wir begleiten Sie auf dem Weg zur erfolgreichen KI-Integration in Ihrem Unternehmen."
      primaryCta={{
        text: "Beratung vereinbaren",
        href: "/termin",
        icon: "calendar",
      }}
      secondaryCta={{
        text: "Mehr erfahren",
        href: "/leistungen",
        icon: "arrow",
      }}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leistungen" }]}
    />
  ),

  // Split Hero mit Bild
  split: (
    <HeroSection
      variant="split"
      title="Persönliches KI-Coaching"
      description="Individuelle Begleitung für Führungskräfte und Entscheider."
      primaryCta={{
        text: "Coaching buchen",
        href: "/termin",
        icon: "calendar",
      }}
      image={{
        src: "/images/ki-coaching.jpg",
        alt: "KI-Coaching Session",
        position: "right",
      }}
    />
  ),

  // Minimaler Hero für Unterseiten
  minimal: (
    <HeroSection variant="minimal" size="md" title="Über KIVISAI" description="Ihr Partner für KI-Transformation" />
  ),
}

// Content Section Beispiele
export const ContentExamples = {
  // Standard Content-Bereich
  default: (
    <ContentSection
      title="Unsere Methodik"
      subtitle="KIVISAI Ansatz"
      description="Strukturiert und praxisorientiert zur erfolgreichen KI-Integration."
    >
      <div className="prose max-w-none">
        <p>Hier kommt der Hauptinhalt...</p>
      </div>
    </ContentSection>
  ),

  // Zentrierter Content
  centered: (
    <ContentSection
      variant="centered"
      background="gray"
      title="Warum KIVISAI?"
      description="Die Vorteile unserer Herangehensweise"
    >
      <FeatureGrid
        items={[
          {
            icon: Brain,
            title: "KI-Expertise",
            description: "Tiefes Verständnis für KI-Technologien",
          },
          {
            icon: Users,
            title: "Praxiserfahrung",
            description: "Bewährte Methoden aus der Praxis",
          },
        ]}
        columns={2}
        variant="cards"
      />
    </ContentSection>
  ),
}

// CTA Section Beispiele
export const CtaExamples = {
  // Standard CTA
  primary: (
    <CtaSection
      title="Bereit für Ihre KI-Transformation?"
      description="Lassen Sie uns gemeinsam den ersten Schritt gehen."
      primaryCta={{
        text: "Kostenlose Beratung",
        href: "/termin",
        icon: "calendar",
      }}
      secondaryCta={{
        text: "Mehr erfahren",
        href: "/leistungen",
        icon: "arrow",
      }}
    />
  ),

  // Banner CTA
  banner: (
    <CtaSection
      variant="banner"
      background="gradient"
      title="Jetzt durchstarten!"
      description="Vereinbaren Sie noch heute Ihr kostenloses Erstgespräch."
      primaryCta={{
        text: "Termin buchen",
        href: "/termin",
        icon: "calendar",
      }}
    />
  ),
}

// Feature Grid Beispiele
export const FeatureExamples = {
  // Service-Übersicht
  services: (
    <FeatureGrid
      items={[
        {
          icon: Brain,
          title: "KI-Potenzialanalyse",
          description: "Identifikation der besten KI-Anwendungsfälle",
          link: {
            href: "/leistungen/ki-potenzialanalyse",
            text: "Mehr erfahren",
          },
        },
        {
          icon: Lightbulb,
          title: "KI-Prototyping",
          description: "Schnelle Umsetzung erster KI-Lösungen",
          link: {
            href: "/leistungen/ki-prototyping",
            text: "Mehr erfahren",
          },
        },
        {
          icon: Target,
          title: "KI-Coaching",
          description: "Individuelle Begleitung für Führungskräfte",
          link: {
            href: "/leistungen/coaching-training",
            text: "Mehr erfahren",
          },
        },
      ]}
      columns={3}
      variant="cards"
    />
  ),
}

// Stats Section Beispiele
export const StatsExamples = {
  // Erfolgs-Statistiken
  success: (
    <StatsSection
      items={[
        {
          value: "50+",
          label: "Erfolgreiche Projekte",
          description: "KI-Implementierungen",
        },
        {
          value: "95%",
          label: "Kundenzufriedenheit",
          description: "Weiterempfehlungsrate",
        },
        {
          value: "3x",
          label: "Effizienzsteigerung",
          description: "Durchschnittlich",
        },
      ]}
      variant="centered"
      background="primary"
    />
  ),
}
