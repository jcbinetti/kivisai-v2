/**
 * Template Builder
 * Dynamische Erstellung von Seiten basierend auf Templates
 */

import { PAGE_TEMPLATES, COMPOSITION_RULES, RESPONSIVE_RULES } from "./template-system"
import type { PageTemplate, TemplateSection } from "./template-system"

export class TemplateBuilder {
  private template: PageTemplate
  private sections: TemplateSection[] = []

  constructor(templateId: string) {
    const template = PAGE_TEMPLATES[templateId]
    if (!template) {
      throw new Error(`Template ${templateId} not found`)
    }
    this.template = template
    this.sections = [...template.sections]
  }

  // Section hinzufügen
  addSection(section: TemplateSection): this {
    // Validierung gegen Composition Rules
    if (!this.isCompatible(section.component)) {
      throw new Error(`Component ${section.component} is not compatible`)
    }

    // Limit-Check
    const currentCount = this.sections.filter((s) => s.component === section.component).length
    const limit = COMPOSITION_RULES.limits[section.component as keyof typeof COMPOSITION_RULES.limits]

    if (limit && currentCount >= limit) {
      throw new Error(`Maximum ${limit} ${section.component} components allowed`)
    }

    this.sections.push(section)
    this.sortSections()
    return this
  }

  // Section entfernen
  removeSection(sectionId: string): this {
    const section = this.sections.find((s) => s.id === sectionId)
    if (section?.required) {
      throw new Error(`Required section ${sectionId} cannot be removed`)
    }

    this.sections = this.sections.filter((s) => s.id !== sectionId)
    return this
  }

  // Section-Props aktualisieren
  updateSection(sectionId: string, props: Record<string, any>): this {
    const sectionIndex = this.sections.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) {
      throw new Error(`Section ${sectionId} not found`)
    }

    this.sections[sectionIndex] = {
      ...this.sections[sectionIndex],
      props: { ...this.sections[sectionIndex].props, ...props },
    }
    return this
  }

  // Responsive Anpassungen anwenden
  applyResponsiveRules(breakpoint: "mobile" | "tablet" | "desktop"): this {
    if (breakpoint === "mobile") {
      this.sections.forEach((section) => {
        const mobileRules = RESPONSIVE_RULES.mobile[section.component as keyof typeof RESPONSIVE_RULES.mobile]
        if (mobileRules) {
          section.props = { ...section.props, ...mobileRules }
        }
      })
    }

    if (breakpoint === "tablet") {
      this.sections.forEach((section) => {
        const tabletRules = RESPONSIVE_RULES.tablet[section.component as keyof typeof RESPONSIVE_RULES.tablet]
        if (tabletRules) {
          section.props = { ...section.props, ...tabletRules }
        }
      })
    }

    return this
  }

  // Template validieren
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    // Required Sections Check
    const requiredSections = this.template.sections.filter((s) => s.required)
    requiredSections.forEach((required) => {
      if (!this.sections.find((s) => s.component === required.component)) {
        errors.push(`Required section ${required.component} is missing`)
      }
    })

    // Composition Rules Check
    this.sections.forEach((section) => {
      if (!this.isCompatible(section.component)) {
        errors.push(`Component ${section.component} has compatibility issues`)
      }
    })

    return {
      valid: errors.length === 0,
      errors,
    }
  }

  // Template exportieren
  export(): PageTemplate {
    return {
      ...this.template,
      sections: this.sections,
    }
  }

  // Private Hilfsmethoden
  private isCompatible(component: string): boolean {
    const compatible = COMPOSITION_RULES.compatible[component as keyof typeof COMPOSITION_RULES.compatible]
    if (!compatible) return true

    const lastSection = this.sections[this.sections.length - 1]
    if (!lastSection) return true

    return (compatible as string[]).includes(lastSection.component) || (compatible as string[]).length === 0
  }

  private sortSections(): void {
    const order = COMPOSITION_RULES.order
    this.sections.sort((a, b) => {
      const aIndex = order.indexOf(a.component)
      const bIndex = order.indexOf(b.component)

      if (aIndex === -1 && bIndex === -1) return 0
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1

      return aIndex - bIndex
    })
  }
}

// Template Builder Factory
export function createTemplate(templateId: string): TemplateBuilder {
  return new TemplateBuilder(templateId)
}

// Vordefinierte Template-Kombinationen
export const TEMPLATE_PRESETS = {
  // Schnelle Landing Page
  quickLanding: () =>
    createTemplate("landing").updateSection("hero", {
      title: "Ihre KI-Transformation beginnt hier",
      description: "Entdecken Sie die Möglichkeiten künstlicher Intelligenz für Ihr Unternehmen.",
      primaryCta: {
        text: "Kostenlose Beratung",
        href: "/kontakt",
      },
    }),

  // Service-Detail-Seite
  serviceDetail: (serviceName: string) =>
    createTemplate("service")
      .updateSection("hero", {
        title: serviceName,
        variant: "centered",
      })
      .addSection({
        id: "testimonials",
        component: "TestimonialSection",
        props: {
          variant: "carousel",
        },
      }),

  // Blog-Artikel mit Newsletter
  blogWithNewsletter: () =>
    createTemplate("blog").updateSection("newsletter", {
      title: "Bleiben Sie informiert",
      description: "Erhalten Sie wöchentliche Insights zu KI-Trends und Best Practices.",
    }),
}
