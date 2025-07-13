/**
 * KIVISAI Component Registry
 *
 * Zentrale Registrierung aller wiederverwendbaren Komponenten
 * für bessere Wartbarkeit und Konsistenz
 */

// Common Components
export { HeroSection } from "@/components/common/hero-section"
export { ContentSection } from "@/components/common/content-section"
export { CtaSection } from "@/components/common/cta-section"
export { FeatureGrid } from "@/components/common/feature-grid"
export { StatsSection } from "@/components/common/stats-section"

// Specialized Components
export { default as KivisaiCycle } from "@/components/kivisai-cycle"
export { default as NewsletterCta } from "@/components/newsletter-cta"
export { default as NextStepsSection } from "@/components/next-steps-section"

// UI Components (shadcn/ui)
export { Button } from "@/components/ui/button"
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
export { Badge } from "@/components/ui/badge"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Layout Components
export { default as Header } from "@/components/header"
export { default as Footer } from "@/components/footer"

/**
 * Component Usage Guidelines:
 *
 * 1. HeroSection: Für alle Seiten-Header mit flexiblen Varianten
 * 2. ContentSection: Für strukturierte Inhaltsabschnitte
 * 3. CtaSection: Für Call-to-Action Bereiche
 * 4. FeatureGrid: Für Feature-Listen und Service-Übersichten
 * 5. StatsSection: Für Zahlen und Statistiken
 */

export const COMPONENT_VARIANTS = {
  hero: {
    default: "Standard Hero mit Text links",
    centered: "Zentrierter Hero für Landing Pages",
    split: "Hero mit Bild-Text-Aufteilung",
    minimal: "Minimaler Hero für Unterseiten",
  },
  cta: {
    default: "Standard CTA-Bereich",
    centered: "Zentrierter CTA",
    split: "CTA mit Bild",
    banner: "Vollbreiter Banner-CTA",
  },
  content: {
    default: "Standard Content-Bereich",
    centered: "Zentrierter Content",
    wide: "Breiter Content-Bereich",
    narrow: "Schmaler Content-Bereich",
  },
} as const
