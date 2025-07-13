/**
 * KIVISAI Template Engine
 * Zentrale Verwaltung und Ausführung von Design-Templates
 */

import { BRAND_COLORS, TYPOGRAPHY, SPACING } from "./design-system"

export interface TemplateSection {
  id: string
  type: "hero" | "content" | "cta" | "features" | "stats" | "navigation" | "footer" | "blog" | "sidebar"
  component: string
  props: Record<string, any>
  order: number
}

export interface Template {
  id: string
  name: string
  description: string
  sections: TemplateSection[]
  metadata: {
    author: string
    created: string
    lastModified: string
    version: string
    status: "active" | "draft" | "deprecated"
  }
  styles: {
    colors: string[]
    typography: string[]
    spacing: string[]
  }
  pages: string[] // Welche Seiten verwenden dieses Template
}

export interface TemplatePreview {
  id: string
  name: string
  description: string
  preview: string
  sections: string[]
  usedOn: string[]
  lastModified: string
  status: "active" | "draft" | "deprecated"
}

// Verfügbare Templates
export const AVAILABLE_TEMPLATES: Template[] = [
  {
    id: "landing",
    name: "Landing Page",
    description: "Vollständige Landing Page mit Hero, Features und CTA",
    sections: [
      {
        id: "hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Willkommen bei KIVISAI",
          subtitle: "KI-Transformation für Ihr Unternehmen",
          ctaText: "Jetzt starten",
          ctaLink: "/kontakt",
          backgroundImage: "/images/hero-bg.jpg"
        },
        order: 1
      },
      {
        id: "features",
        type: "features",
        component: "FeatureGrid",
        props: {
          title: "Unsere Services",
          features: [
            { title: "KI-Potenzialanalyse", description: "Identifizieren Sie KI-Möglichkeiten", icon: "chart" },
            { title: "KI-Prototyping", description: "Schnelle Prototypen entwickeln", icon: "code" },
            { title: "KI-Coaching", description: "Personalisierte Beratung", icon: "users" }
          ],
          columns: 3
        },
        order: 2
      },
      {
        id: "cta",
        type: "cta",
        component: "CTASection",
        props: {
          title: "Bereit für die KI-Transformation?",
          description: "Lassen Sie uns gemeinsam Ihr Potenzial ausschöpfen",
          buttonText: "Termin vereinbaren",
          buttonLink: "/termin"
        },
        order: 3
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-15",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/", "/leistungen", "/loesungen"]
  },
  {
    id: "service",
    name: "Service Page",
    description: "Detailseite für einzelne Services mit strukturiertem Aufbau",
    sections: [
      {
        id: "hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Service Name",
          subtitle: "Service Beschreibung",
          ctaText: "Mehr erfahren",
          ctaLink: "#details"
        },
        order: 1
      },
      {
        id: "content",
        type: "content",
        component: "ContentSection",
        props: {
          title: "Über diesen Service",
          content: "Detaillierte Beschreibung des Services...",
          variant: "default"
        },
        order: 2
      },
      {
        id: "next-steps",
        type: "cta",
        component: "NextStepsSection",
        props: {
          pageType: "service",
          customSteps: [
            "Kostenlose Beratung",
            "Maßgeschneiderte Lösung",
            "Umsetzung & Support"
          ]
        },
        order: 3
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-14",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "mossGreen", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/leistungen/ki-potenzialanalyse", "/leistungen/ki-prototyping", "/leistungen/ki-coaching"]
  },
  {
    id: "wissens-hub",
    name: "Wissens-Hub",
    description: "Wissens-Hub mit Blog, Kategorien und Autoren",
    sections: [
      {
        id: "hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "KIVISAI Wissens-Hub",
          subtitle: "KI-Insights, Artikel und Ressourcen",
          ctaText: "Blog durchsuchen",
          ctaLink: "/wissens-hub/blog"
        },
        order: 1
      },
      {
        id: "blog-grid",
        type: "content",
        component: "BlogGrid",
        props: {
          title: "Neueste Artikel",
          limit: 6,
          showCategories: true
        },
        order: 2
      },
      {
        id: "category-filter",
        type: "navigation",
        component: "CategoryFilter",
        props: {
          categories: ["KI-Strategie", "Transformation", "Tools", "Best Practices"]
        },
        order: 3
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub"]
  },
  {
    id: "blog-listing",
    name: "Blog Listing",
    description: "Blog-Übersichtsseite mit Artikeln und Filter",
    sections: [
      {
        id: "hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "KIVISAI Blog",
          subtitle: "KI-Insights und Best Practices",
          ctaText: "Newsletter abonnieren",
          ctaLink: "/newsletter"
        },
        order: 1
      },
      {
        id: "blog-list",
        type: "blog",
        component: "BlogList",
        props: {
          showPagination: true,
          itemsPerPage: 12,
          showCategories: true,
          showSearch: true
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub/blog", "/wissen/blog"]
  },
  {
    id: "blog-article",
    name: "Blog Article",
    description: "Einzelner Blog-Artikel mit Leseroptimierung",
    sections: [
      {
        id: "article-header",
        type: "hero",
        component: "ArticleHeader",
        props: {
          showAuthor: true,
          showDate: true,
          showReadingTime: true,
          showCategories: true
        },
        order: 1
      },
      {
        id: "article-content",
        type: "content",
        component: "ArticleContent",
        props: {
          showTableOfContents: true,
          showShareButtons: true,
          showAuthorBio: true
        },
        order: 2
      },
      {
        id: "related-articles",
        type: "content",
        component: "RelatedArticles",
        props: {
          limit: 3,
          showCategories: true
        },
        order: 3
      },
      {
        id: "newsletter-cta",
        type: "cta",
        component: "NewsletterCTA",
        props: {
          title: "Weitere KI-Insights erhalten",
          description: "Bleiben Sie auf dem Laufenden mit unserem Newsletter"
        },
        order: 4
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub/blog/[slug]", "/wissen/blog/[slug]"]
  },
  {
    id: "category-page",
    name: "Category Page",
    description: "Kategorie-Seite mit Artikeln einer bestimmten Kategorie",
    sections: [
      {
        id: "category-header",
        type: "hero",
        component: "CategoryHeader",
        props: {
          showDescription: true,
          showArticleCount: true
        },
        order: 1
      },
      {
        id: "category-articles",
        type: "blog",
        component: "CategoryArticles",
        props: {
          showPagination: true,
          itemsPerPage: 9
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub/kategorien/[slug]"]
  },
  {
    id: "author-page",
    name: "Author Page",
    description: "Autor-Seite mit Profil und Artikeln",
    sections: [
      {
        id: "author-profile",
        type: "hero",
        component: "AuthorProfile",
        props: {
          showBio: true,
          showSocialLinks: true,
          showStats: true
        },
        order: 1
      },
      {
        id: "author-articles",
        type: "blog",
        component: "AuthorArticles",
        props: {
          showPagination: true,
          itemsPerPage: 6
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub/autoren"]
  },
  {
    id: "events-page",
    name: "Events Page",
    description: "Events-Übersichtsseite mit Veranstaltungen",
    sections: [
      {
        id: "events-hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "KIVISAI Events",
          subtitle: "Webinare, Workshops und Konferenzen",
          ctaText: "Event anmelden",
          ctaLink: "/events/register"
        },
        order: 1
      },
      {
        id: "events-list",
        type: "content",
        component: "EventsList",
        props: {
          showFilters: true,
          showCalendar: true,
          itemsPerPage: 12
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/wissens-hub/events"]
  },
  {
    id: "contact-page",
    name: "Contact Page",
    description: "Kontaktseite mit Formularen und Buchungsoptionen",
    sections: [
      {
        id: "contact-hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Kontaktieren Sie uns",
          subtitle: "Lassen Sie uns über Ihre KI-Transformation sprechen",
          ctaText: "Termin vereinbaren",
          ctaLink: "/termin"
        },
        order: 1
      },
      {
        id: "contact-form",
        type: "content",
        component: "ContactForm",
        props: {
          showBooking: true,
          showMap: true,
          showOfficeHours: true
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-12",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/kontakt", "/termin"]
  },
  {
    id: "about-page",
    name: "About Page",
    description: "Über uns Seite mit Team und Geschichte",
    sections: [
      {
        id: "about-hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Über KIVISAI",
          subtitle: "Ihr Partner für KI-Transformation",
          ctaText: "Team kennenlernen",
          ctaLink: "#team"
        },
        order: 1
      },
      {
        id: "about-content",
        type: "content",
        component: "AboutContent",
        props: {
          showTimeline: true,
          showValues: true,
          showTeam: true
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/ueber-kivisai", "/ueber-kivisai/methode", "/ueber-kivisai/prinzipien", "/ueber-kivisai/team-netzwerk"]
  },
  {
    id: "use-case-page",
    name: "Use Case Page",
    description: "Use Case Detailseite mit Beispielen",
    sections: [
      {
        id: "usecase-hero",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Use Case Name",
          subtitle: "Beschreibung des Use Cases",
          ctaText: "Mehr erfahren",
          ctaLink: "#details"
        },
        order: 1
      },
      {
        id: "usecase-content",
        type: "content",
        component: "UseCaseContent",
        props: {
          showSteps: true,
          showResults: true,
          showTechnologies: true
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/use-cases/ki-potenzial-landkarte", "/use-cases/uc04-handwerker-li-assistent", "/use-cases/us01-ki-chatbot-agile-coach"]
  },
  {
    id: "legal-page",
    name: "Legal Page",
    description: "Rechtliche Seiten wie Impressum, Datenschutz, AGB",
    sections: [
      {
        id: "legal-header",
        type: "hero",
        component: "HeroSection",
        props: {
          title: "Rechtliche Informationen",
          subtitle: "Transparenz und Compliance",
          ctaText: "Kontakt",
          ctaLink: "/kontakt"
        },
        order: 1
      },
      {
        id: "legal-content",
        type: "content",
        component: "LegalContent",
        props: {
          showLastUpdated: true,
          showContactInfo: true,
          showVersion: true
        },
        order: 2
      }
    ],
    metadata: {
      author: "KIVISAI Team",
      created: "2024-01-01",
      lastModified: "2024-01-16",
      version: "1.0.0",
      status: "active"
    },
    styles: {
      colors: ["deepDarkBlue", "clearTurquoise", "vibrantTurquoise"],
      typography: ["heading", "body"],
      spacing: ["section", "component"]
    },
    pages: ["/impressum", "/datenschutz", "/agb", "/barrierefreiheit"]
  }
]

// Template Engine Funktionen
export class TemplateEngine {
  private templates: Template[] = AVAILABLE_TEMPLATES

  // Add missing functions for admin pages
  getAvailableTemplates(): Template[] {
    return this.templates
  }

  getAvailableSections(): Array<{type: string, name: string, icon?: any}> {
    return [
      { type: "hero", name: "Hero Section", icon: "LayoutTemplate" },
      { type: "content", name: "Content Section", icon: "FileText" },
      { type: "cta", name: "Call to Action", icon: "ArrowRight" },
      { type: "features", name: "Features Grid", icon: "Grid" },
      { type: "stats", name: "Statistics", icon: "BarChart3" },
      { type: "navigation", name: "Navigation", icon: "Menu" },
      { type: "footer", name: "Footer", icon: "Globe" },
      { type: "blog", name: "Blog Section", icon: "FileText" },
      { type: "sidebar", name: "Sidebar", icon: "Sidebar" }
    ]
  }

  // Template abrufen
  getTemplate(id: string): Template | undefined {
    return this.templates.find(t => t.id === id)
  }

  // Alle Templates abrufen
  getAllTemplates(): Template[] {
    return this.templates
  }

  // Template erstellen
  createTemplate(template: Omit<Template, "metadata">): Template {
    const newTemplate: Template = {
      ...template,
      metadata: {
        author: "KIVISAI Team",
        created: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        version: "1.0.0",
        status: "draft"
      }
    }
    
    this.templates.push(newTemplate)
    return newTemplate
  }

  // Template aktualisieren
  updateTemplate(id: string, updates: Partial<Template>): Template | null {
    const index = this.templates.findIndex(t => t.id === id)
    if (index === -1) return null

    const updatedTemplate: Template = {
      ...this.templates[index],
      ...updates,
      metadata: {
        ...this.templates[index].metadata,
        lastModified: new Date().toISOString()
      }
    }

    this.templates[index] = updatedTemplate
    return updatedTemplate
  }

  // Template löschen
  deleteTemplate(id: string): boolean {
    const index = this.templates.findIndex(t => t.id === id)
    if (index === -1) return false

    this.templates.splice(index, 1)
    return true
  }

  // Template duplizieren
  duplicateTemplate(id: string, newId: string): Template | null {
    const original = this.getTemplate(id)
    if (!original) return null

    const duplicated: Template = {
      ...original,
      id: newId,
      name: `${original.name} (Kopie)`,
      metadata: {
        ...original.metadata,
        created: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        status: "draft"
      }
    }

    this.templates.push(duplicated)
    return duplicated
  }

  // Template validieren
  validateTemplate(template: Template): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!template.id) errors.push("Template ID ist erforderlich")
    if (!template.name) errors.push("Template Name ist erforderlich")
    if (!template.sections || template.sections.length === 0) {
      errors.push("Mindestens eine Section ist erforderlich")
    }

    // Sections validieren
    template.sections.forEach((section, index) => {
      if (!section.id) errors.push(`Section ${index + 1}: ID ist erforderlich`)
      if (!section.component) errors.push(`Section ${index + 1}: Component ist erforderlich`)
      if (section.order < 1) errors.push(`Section ${index + 1}: Order muss > 0 sein`)
    })

    return {
      valid: errors.length === 0,
      errors
    }
  }

  // Template rendern (für Preview)
  renderTemplate(template: Template): string {
    const sections = template.sections
      .sort((a, b) => a.order - b.order)
      .map(section => this.renderSection(section))
      .join('\n')

    return `
      <div class="template-${template.id}">
        ${sections}
      </div>
    `
  }

  private renderSection(section: TemplateSection): string {
    return `
      <section class="template-section" data-section-id="${section.id}">
        <div class="component-${section.component.toLowerCase()}">
          <!-- ${section.component} Component würde hier gerendert -->
          <div class="preview-placeholder">
            ${section.component}: ${JSON.stringify(section.props)}
          </div>
        </div>
      </section>
    `
  }

  // Template-Statistiken
  getTemplateStats(): {
    total: number
    active: number
    draft: number
    deprecated: number
    mostUsed: string[]
  } {
    const stats = {
      total: this.templates.length,
      active: this.templates.filter(t => t.metadata.status === "active").length,
      draft: this.templates.filter(t => t.metadata.status === "draft").length,
      deprecated: this.templates.filter(t => t.metadata.status === "deprecated").length,
      mostUsed: this.templates
        .filter(t => t.metadata.status === "active")
        .slice(0, 5)
        .map(t => t.name)
    }

    return stats
  }
}

// Globale Template Engine Instanz
export const templateEngine = new TemplateEngine()

// Hilfsfunktionen für Template-Previews
export function getTemplatePreviews(): TemplatePreview[] {
  return templateEngine.getAllTemplates().map(template => ({
    id: template.id,
    name: template.name,
    description: template.description,
    preview: `/api/template-preview/${template.id}.png`,
    sections: template.sections.map(s => s.component),
    usedOn: [], // Würde aus Analytics kommen
    lastModified: template.metadata.lastModified,
    status: template.metadata.status
  }))
}

// Template-Export/Import
export function exportTemplate(templateId: string): string | null {
  const template = templateEngine.getTemplate(templateId)
  if (!template) return null

  return JSON.stringify(template, null, 2)
}

export function importTemplate(templateJson: string): Template | null {
  try {
    const template = JSON.parse(templateJson) as Template
    const validation = templateEngine.validateTemplate(template)
    
    if (!validation.valid) {
      console.error("Template validation failed:", validation.errors)
      return null
    }

    return templateEngine.createTemplate(template)
  } catch (error) {
    console.error("Template import failed:", error)
    return null
  }
} 