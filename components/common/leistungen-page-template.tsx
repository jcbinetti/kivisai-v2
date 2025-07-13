import { CtaSection } from "@/components/common/cta-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/common/Breadcrumbs"

export interface LeistungenPageTemplateProps {
  // Hero Section
  heroTitle: string
  heroSubtitle?: string
  heroDescription: string
  heroBackground?: "gradient" | "solid"
  showHero?: boolean
  
  // Service Info
  serviceName: string
  
  // Content
  contentSections?: React.ReactNode[]
  
  // CTA - Jetzt flexibel mit CtaSection
  ctaSection?: {
    variant?: "default" | "centered" | "split" | "banner"
    background?: "primary" | "secondary" | "gradient" | "white" | "gray"
    size?: "sm" | "md" | "lg"
    title?: string
    description?: string
    primaryCta?: {
      text: string
      href: string
      variant?: "default" | "outline" | "ghost"
      icon?: "arrow" | "calendar" | "download" | "external" | "phone" | "mail"
    }
    secondaryCta?: {
      text: string
      href: string
      variant?: "default" | "outline" | "ghost"
      icon?: "arrow" | "calendar" | "download" | "external" | "phone" | "mail"
    }
    image?: {
      src: string
      alt: string
    }
    children?: React.ReactNode
  }
  
  // Custom Content
  children?: React.ReactNode
}

export function LeistungenPageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBackground = "gradient",
  showHero = true,
  serviceName,
  contentSections = [],
  ctaSection,
  children
}: LeistungenPageTemplateProps) {
  const heroBgClass = heroBackground === "gradient" 
    ? "bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise"
    : "bg-kivisai-deep-dark-blue"

  // Default CTA-Section falls keine angegeben
  const defaultCtaSection = {
    variant: "centered" as const,
    background: "gradient" as const,
    size: "md" as const,
    title: `Bereit für ${serviceName}?`,
    description: "Lassen Sie uns gemeinsam Ihr Potenzial ausschöpfen.",
    primaryCta: {
      text: "Kostenloses Erstgespräch vereinbaren",
      href: "/termin",
      icon: "calendar" as const
    },
    secondaryCta: {
      text: "Unsere Methode kennenlernen",
      href: "/leistungen/inqa-coaching/details",
      icon: "arrow" as const
    }
  }

  const finalCtaSection = {
    ...defaultCtaSection,
    ...ctaSection,
    title: ctaSection?.title || defaultCtaSection.title
  }

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      {showHero && (
        <section className={`relative pt-40 pb-16 ${heroBgClass}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {heroTitle}
              </h1>
              {heroSubtitle && (
                <p className="text-2xl text-white/90 mb-4 leading-relaxed">
                  {heroSubtitle}
                </p>
              )}
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {heroDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", serviceName]} />
      </div>

      {/* Content Sections */}
      {contentSections.map((section, index) => (
        <div key={index}>
          {section}
        </div>
      ))}

      {/* Custom Children Content */}
      {children}

      {/* Flexible CTA Section */}
      <CtaSection {...finalCtaSection} />

    </div>
  )
} 