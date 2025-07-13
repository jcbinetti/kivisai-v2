import { HeroSection } from "@/components/common/hero-section"
import { ContentSection } from "@/components/common/content-section"
import { CtaSection } from "@/components/common/cta-section"
import { StatsSection } from "@/components/common/stats-section"
import { FeatureGrid } from "@/components/common/feature-grid"
import { NextStepsSection } from "@/components/common/next-steps-section"
import Breadcrumbs from "@/components/common/Breadcrumbs"

export interface ServicePageTemplateProps {
  // Hero Section
  heroTitle: string
  heroSubtitle?: string
  heroDescription?: string
  heroBackground?: "white" | "gradient" | "pattern" | "image"
  heroBackgroundImage?: string
  heroPrimaryCta?: {
    text: string
    href: string
  }
  heroSecondaryCta?: {
    text: string
    href: string
  }
  
  // Service Info
  serviceName: string
  serviceDescription: string
  serviceFeatures?: Array<{
    title: string
    description: string
    icon?: string
  }>
  
  // Content
  contentSections?: Array<{
    title: string
    content: string
    variant?: "default" | "centered"
    background?: "white" | "gray"
  }>
  
  // Stats
  stats?: Array<{
    value: string
    label: string
    description?: string
  }>
  
  // Features Grid
  features?: Array<{
    title: string
    description: string
    icon?: string
  }>
  
  // CTA
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  
  // Metadata
  metaTitle?: string
  metaDescription?: string
  
  // Custom Content
  children?: React.ReactNode
}

export function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBackground = "gradient",
  heroBackgroundImage,
  heroPrimaryCta,
  heroSecondaryCta,
  serviceName,
  serviceDescription,
  serviceFeatures,
  contentSections = [],
  stats,
  features,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  children
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <HeroSection
        variant="centered"
        size="lg"
        background={heroBackground}
        backgroundImage={heroBackgroundImage}
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        primaryCta={heroPrimaryCta}
        secondaryCta={heroSecondaryCta}
      />

      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", serviceName]} />
      </div>

      {/* Service Description */}
      <ContentSection variant="default" background="white" padding="lg">
        <div className="text-center lg:text-left">
          <p className="text-lg mb-8 text-kivisai-moss-green">
            {serviceDescription}
          </p>
          {heroPrimaryCta && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={heroPrimaryCta.href}
                className="bg-kivisai-deep-dark-blue text-kivisai-pure-white px-8 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
              >
                {heroPrimaryCta.text}
              </a>
              {heroSecondaryCta && (
                <a
                  href={heroSecondaryCta.href}
                  className="border border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-kivisai-light-cool-gray transition-colors"
                >
                  {heroSecondaryCta.text}
                </a>
              )}
            </div>
          )}
        </div>
      </ContentSection>

      {/* Service Features */}
      {serviceFeatures && serviceFeatures.length > 0 && (
        <ContentSection variant="centered" background="gray" padding="lg" title="Unsere Angebotsmodelle">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-kivisai-clear-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon && <span className="text-2xl">{feature.icon}</span>}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">{feature.title}</h3>
                <p className="text-kivisai-moss-green">{feature.description}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      )}

      {/* Custom Content Sections */}
      {contentSections.map((section, index) => (
        <ContentSection
          key={index}
          variant={section.variant || "default"}
          background={section.background || "white"}
          padding="lg"
          title={section.title}
        >
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </ContentSection>
      ))}

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <StatsSection items={stats} />
      )}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <FeatureGrid 
          items={features.map(feature => ({
            title: feature.title,
            description: feature.description
          }))} 
        />
      )}

      {/* Custom Children Content */}
      {children}

      {/* CTA Section */}
      {(ctaTitle || ctaDescription) && (
        <CtaSection
          title={ctaTitle || `Bereit für ${serviceName}?`}
          description={ctaDescription || `Lassen Sie uns gemeinsam Ihr Potenzial ausschöpfen.`}
          primaryCta={{
            text: ctaButtonText || "Termin vereinbaren",
            href: ctaButtonLink || "/termin"
          }}
        />
      )}

      {/* Next Steps Section */}
      <NextStepsSection pageType="service" />
    </div>
  )
} 