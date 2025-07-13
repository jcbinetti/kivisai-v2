import type { Metadata } from "next"
import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata = {
  title: "KI-Coaching | KIVISAI",
  description: "Persönliches KI-Coaching für Führungskräfte und Teams. Individuelle Begleitung bei der KI-Transformation mit praktischen Tools und Methoden.",
};

export default function KICoachingPage() {
  return (
    <LeistungenPageTemplate
      heroTitle="KI-Coaching"
      heroSubtitle="Individuelle Begleitung auf Ihrem Weg zur erfolgreichen KI-Integration."
      heroDescription="Persönliches KI-Coaching für Führungskräfte und Teams. Individuelle Begleitung bei der KI-Transformation mit praktischen Tools und Methoden."
      serviceName="KI-Coaching"
      ctaSection={{
        title: "Bereit für KI-Coaching?",
        description: "Lassen Sie uns gemeinsam Ihre KI-Kompetenz entwickeln.",
        primaryCta: {
          text: "Coaching vereinbaren",
          href: "/termin"
        },
        secondaryCta: {
          text: "Mehr zu unseren Leistungen",
          href: "/leistungen"
        }
      }}
    />
  );
} 