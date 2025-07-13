// Page Template Types
export interface PageTemplate {
  id: string
  name: string
  description: string
  sections: TemplateSection[]
  metadata: PageMetadata
}

export interface TemplateSection {
  id: string
  component: string
  props: Record<string, any>
  variants?: string[]
  required?: boolean
}

export interface PageMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

// Vordefinierte Page Templates
export const PAGE_TEMPLATES: Record<string, PageTemplate> = {
  // Landing Page Template
  landing: {
    id: "landing",
    name: "Landing Page",
    description: "Vollständige Landing Page mit Hero, Features, CTA",
    sections: [
      {
        id: "hero",
        component: "HeroSection",
        props: {
          variant: "split",
          size: "xl",
          background: "gradient",
        },
        required: true,
      },
      {
        id: "features",
        component: "FeatureGrid",
        props: {
          columns: 3,
          variant: "cards",
        },
      },
      {
        id: "stats",
        component: "StatsSection",
        props: {
          variant: "centered",
          background: "primary",
        },
      },
      {
        id: "cta",
        component: "CtaSection",
        props: {
          variant: "banner",
          background: "gradient",
        },
        required: true,
      },
    ],
    metadata: {
      title: "KIVISAI - Zukunft gestalten. Regenerativ. Wirksam.",
      description: "Wir gestalten Ihre Transformation mit menschlicher und künstlicher Intelligenz.",
      keywords: ["KI", "Transformation", "Beratung", "Innovation"],
    },
  },

  // Service Page Template
  service: {
    id: "service",
    name: "Service Page",
    description: "Detailseite für einzelne Services",
    sections: [
      {
        id: "hero",
        component: "HeroSection",
        props: {
          variant: "centered",
          size: "lg",
          background: "white",
        },
        required: true,
      },
      {
        id: "content",
        component: "ContentSection",
        props: {
          variant: "narrow",
          padding: "lg",
        },
        required: true,
      },
      {
        id: "features",
        component: "FeatureGrid",
        props: {
          columns: 2,
          variant: "minimal",
        },
      },
      {
        id: "next-steps",
        component: "NextStepsSection",
        props: {},
      },
    ],
    metadata: {
      title: "",
      description: "",
      keywords: [],
    },
  },

  // Blog Post Template
  blog: {
    id: "blog",
    name: "Blog Post",
    description: "Template für Blog-Artikel",
    sections: [
      {
        id: "hero",
        component: "HeroSection",
        props: {
          variant: "minimal",
          size: "md",
          background: "white",
        },
        required: true,
      },
      {
        id: "content",
        component: "ContentSection",
        props: {
          variant: "narrow",
          padding: "xl",
        },
        required: true,
      },
      {
        id: "newsletter",
        component: "NewsletterCta",
        props: {},
      },
    ],
    metadata: {
      title: "",
      description: "",
      keywords: [],
    },
  },

  // Contact Page Template
  contact: {
    id: "contact",
    name: "Contact Page",
    description: "Kontaktseite mit Formularen und Informationen",
    sections: [
      {
        id: "hero",
        component: "HeroSection",
        props: {
          variant: "split",
          size: "lg",
          background: "gradient",
        },
        required: true,
      },
      {
        id: "contact-form",
        component: "ContactForm",
        props: {},
        required: true,
      },
      {
        id: "booking",
        component: "CalBookingWidget",
        props: {},
      },
    ],
    metadata: {
      title: "Kontakt - KIVISAI",
      description: "Nehmen Sie Kontakt mit uns auf für Ihre KI-Transformation.",
      keywords: ["Kontakt", "Beratung", "Termin"],
    },
  },
}

// Component Composition Rules
export const COMPOSITION_RULES = {
  // Welche Komponenten können zusammen verwendet werden
  compatible: {
    HeroSection: ["FeatureGrid", "StatsSection", "ContentSection"],
    FeatureGrid: ["CtaSection", "StatsSection", "ContentSection"],
    StatsSection: ["CtaSection", "FeatureGrid"],
    ContentSection: ["NewsletterCta", "NextStepsSection", "FeatureGrid"],
    CtaSection: [], // Meist am Ende
  },

  // Empfohlene Reihenfolge
  order: [
    "HeroSection",
    "FeatureGrid",
    "StatsSection",
    "ContentSection",
    "NewsletterCta",
    "NextStepsSection",
    "CtaSection",
  ],

  // Maximale Anzahl pro Seite
  limits: {
    HeroSection: 1,
    CtaSection: 2,
    StatsSection: 1,
    NewsletterCta: 1,
  },
}

// Responsive Behavior Rules
export const RESPONSIVE_RULES = {
  // Automatische Anpassungen für mobile Geräte
  mobile: {
    HeroSection: {
      size: "md", // Kleinere Hero auf Mobile
      variant: "centered", // Zentriert auf Mobile
    },
    FeatureGrid: {
      columns: 1, // Einzelne Spalte auf Mobile
    },
    StatsSection: {
      variant: "centered", // Zentriert auf Mobile
    },
  },

  // Tablet-spezifische Anpassungen
  tablet: {
    FeatureGrid: {
      columns: 2, // Zwei Spalten auf Tablet
    },
  },
}
