// Environment configuration with validation
export const config = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // Brevo Configuration
  brevo: {
    apiKey: process.env.BREVO_API_KEY,
    contactListId: process.env.BREVO_CONTACT_LIST_ID,
    teamEmail: process.env.BREVO_TEAM_EMAIL || "info@kivisai.com",
    senderEmail: process.env.BREVO_SENDER_EMAIL || "team@kivisai.com",
  },

  // Graph Commons Configuration
  graphCommons: {
    username: process.env.GC_USERNAME,
    password: process.env.GC_PASSWORD,
    defaultGraphId: process.env.GRAPH_COMMONS_DEFAULT_GRAPH_ID,
  },

  // Sanity CMS Configuration
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiToken: process.env.SANITY_API_TOKEN,
  },

  // OpenAI Configuration
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },

  // Cal.com Configuration
  cal: {
    url: process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/jcbinetti",
  },

  // Design System Feature Flags
  features: {
    newColors: process.env.NEXT_PUBLIC_NEW_COLORS === "true",
    newTypography: process.env.NEXT_PUBLIC_NEW_TYPOGRAPHY === "true",
    newComponents: process.env.NEXT_PUBLIC_NEW_COMPONENTS === "true",
    fullNewDesign: process.env.NEXT_PUBLIC_FULL_NEW_DESIGN === "true",
    comingSoonMode: process.env.NEXT_PUBLIC_COMING_SOON_MODE === "true",
  },

  // Admin Configuration
  admin: {
    login: process.env.ADMIN_LOGIN || "admin",
    password: process.env.ADMIN_PASSWORD || "1234qwer",
  },

  // Analytics Configuration (Optional)
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
    matomo: {
      url: process.env.NEXT_PUBLIC_MATOMO_URL,
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
    },
  },

  // CRM Configuration (Optional)
  crm: {
    apiKey: process.env.CRM_API_KEY,
    baseUrl: process.env.CRM_BASE_URL,
    provider: process.env.CRM_PROVIDER,
  },

  // Error Monitoring (Optional)
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
}

// Validation function to check required environment variables
export function validateConfig() {
  const requiredVars = [
    "NEXT_PUBLIC_SITE_URL",
    "BREVO_API_KEY",
    "BREVO_CONTACT_LIST_ID",
    "GC_USERNAME",
    "GC_PASSWORD",
    "NEXT_PUBLIC_SANITY_PROJECT_ID",
    "SANITY_API_TOKEN",
    "OPENAI_API_KEY",
  ]

  const missing = requiredVars.filter((varName) => !process.env[varName])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`)
  }

  return true
}

/**
 * Liefert eine kompakte Übersicht, welche Haupt-Integrationen
 * (Brevo, GraphCommons, Analytics usw.) konfiguriert sind.
 * Diese Information nutzt die Admin-Seite /admin/environment.
 */
export function getEnvironmentStatus() {
  return {
    brevo: {
      configured: Boolean(config.brevo.apiKey) && Boolean(config.brevo.contactListId),
      contactListId: config.brevo.contactListId,
    },
    graphCommons: {
      configured: Boolean(config.graphCommons.username) && Boolean(config.graphCommons.password),
      defaultGraphId: config.graphCommons.defaultGraphId,
    },
    sanity: {
      configured: Boolean(config.sanity.projectId) && Boolean(config.sanity.apiToken),
    },
    openai: {
      configured: Boolean(config.openai.apiKey),
    },
    analytics: {
      ga4: Boolean(config.analytics.googleAnalyticsId),
      clarity: Boolean(config.analytics.clarityId),
      hotjar: Boolean(config.analytics.hotjarId),
      matomo: Boolean(config.analytics.matomo.url) && Boolean(config.analytics.matomo.siteId),
    },
    features: {
      newColors: config.features.newColors,
      newTypography: config.features.newTypography,
      newComponents: config.features.newComponents,
      fullNewDesign: config.features.fullNewDesign,
      comingSoonMode: config.features.comingSoonMode,
    },
    site: {
      url: config.siteUrl,
      calIntegration: Boolean(config.cal.url),
    },
    sentry: Boolean(config.sentry.dsn),
  }
}

// Helper function to check if we're in development mode - CLIENT SAFE
export const isDevelopment = typeof window !== "undefined" ? false : process.env.NODE_ENV === "development"
export const isProduction = typeof window !== "undefined" ? true : process.env.NODE_ENV === "production"
