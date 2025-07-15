// Advanced SEO utilities
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
  }
  structuredData?: any
  robots?: {
    index?: boolean
    follow?: boolean
    maxSnippet?: number
    maxImagePreview?: 'none' | 'standard' | 'large'
    maxVideoPreview?: number
  }
}

export class SEOManager {
  static generateMetadata(data: SEOData) {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords?.join(", "),
      canonical: data.canonical,
      robots: {
        index: data.robots?.index ?? true,
        follow: data.robots?.follow ?? true,
        maxSnippet: data.robots?.maxSnippet ?? -1,
        maxImagePreview: data.robots?.maxImagePreview ?? 'large',
        maxVideoPreview: data.robots?.maxVideoPreview ?? -1,
      },
      openGraph: {
        title: data.openGraph?.title || data.title,
        description: data.openGraph?.description || data.description,
        image: data.openGraph?.image || "https://www.kivisai.com/images/KIVISAI_og_image.png",
        type: data.openGraph?.type || "website",
        siteName: "KIVISAI",
        locale: "de_DE",
        url: data.canonical || "https://www.kivisai.com",
      },
      twitter: {
        card: data.twitter?.card || "summary_large_image",
        title: data.twitter?.title || data.title,
        description: data.twitter?.description || data.description,
        image: data.twitter?.image || "https://www.kivisai.com/images/KIVISAI_twitter_image.png",
        creator: "@kivisai",
        site: "@kivisai",
      },
      alternates: {
        canonical: data.canonical || "https://www.kivisai.com",
        languages: {
          'de-DE': data.canonical || "https://www.kivisai.com",
        },
      },
      verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
        yahoo: "your-yahoo-verification-code",
      },
    }
  }

  static generateStructuredData(type: string, data: any) {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    }

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: "KIVISAI",
          url: "https://kivisai.com",
          logo: "https://kivisai.com/images-optimized/KIVISAI_logo_TR.webp",
          description: "KI-Beratung und Transformation für Unternehmen",
          address: {
            "@type": "PostalAddress",
            addressCountry: "DE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "info@kivisai.com",
            telephone: "+49-XXX-XXXXXXX",
          },
          sameAs: [
            "https://www.linkedin.com/company/kivisai",
            "https://twitter.com/kivisai",
            "https://www.xing.com/companies/kivisai",
          ],
          ...data,
        }

      case "Service":
        return {
          ...baseData,
          provider: {
            "@type": "Organization",
            name: "KIVISAI",
          },
          areaServed: "DE",
          serviceType: "KI-Beratung und Transformation",
          ...data,
        }

      case "Article":
        return {
          ...baseData,
          publisher: {
            "@type": "Organization",
            name: "KIVISAI",
            logo: {
              "@type": "ImageObject",
              url: "https://kivisai.com/images-optimized/KIVISAI_logo_TR.webp",
            },
          },
          author: {
            "@type": "Person",
            name: "KIVISAI Team",
            url: "https://kivisai.com/ueber-kivisai/team-netzwerk",
          },
          ...data,
        }

      case "FAQPage":
        return {
          ...baseData,
          mainEntity: data.faqs?.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })) || [],
        }

      case "BreadcrumbList":
        return {
          ...baseData,
          itemListElement: data.breadcrumbs?.map((breadcrumb: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.url,
          })) || [],
        }

      case "LocalBusiness":
        return {
          ...baseData,
          name: "KIVISAI",
          description: "KI-Beratung und Transformation für Unternehmen",
          url: "https://kivisai.com",
          telephone: "+49-XXX-XXXXXXX",
          email: "info@kivisai.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "DE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "52.5200",
            longitude: "13.4050",
          },
          ...data,
        }

      default:
        return { ...baseData, ...data }
    }
  }

  // Breadcrumb-Generator
  static generateBreadcrumbs(path: string, titles: Record<string, string>) {
    const segments = path.split('/').filter(Boolean)
    const breadcrumbs = [
      { name: "Startseite", url: "https://www.kivisai.com" }
    ]

    let currentPath = ""
    segments.forEach((segment) => {
      currentPath += `/${segment}`
      const title = titles[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      breadcrumbs.push({
        name: title,
        url: `https://www.kivisai.com${currentPath}`
      })
    })

    return breadcrumbs
  }

  // FAQ-Generator für häufige Fragen
  static generateFAQData() {
    return [
      {
        question: "Was ist KIVISAI?",
        answer: "KIVISAI ist eine Beratungsfirma, die Unternehmen bei der KI-Transformation unterstützt. Wir bieten Strategie, Coaching und praktische Lösungen für eine regenerative und wirksame Zukunft."
      },
      {
        question: "Welche Leistungen bietet KIVISAI?",
        answer: "Wir bieten KI-Potenzialanalyse, Strategie-Coaching, KI-Prototyping, KI-Begleitung, Coaching & Training sowie INQA-Coaching für nachhaltige Arbeitsgestaltung."
      },
      {
        question: "Wie läuft eine KI-Potenzialanalyse ab?",
        answer: "Die KI-Potenzialanalyse umfasst eine umfassende Bewertung Ihrer aktuellen Situation, Identifikation von KI-Möglichkeiten und Entwicklung einer maßgeschneiderten Transformationsstrategie."
      },
      {
        question: "Ist KIVISAI DSGVO-konform?",
        answer: "Ja, alle unsere Services und die Website sind vollständig DSGVO-konform. Wir legen höchsten Wert auf Datenschutz und Transparenz."
      }
    ]
  }

  // Sitemap-Generator
  static generateSitemapData() {
    return [
      {
        url: "https://www.kivisai.com",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 1.0
      },
      {
        url: "https://www.kivisai.com/leistungen",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.9
      },
      {
        url: "https://www.kivisai.com/leistungen/ki-potenzialanalyse",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8
      },
      {
        url: "https://www.kivisai.com/leistungen/ki-prototyping",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8
      },
      {
        url: "https://www.kivisai.com/leistungen/inqa-coaching",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8
      },
      {
        url: "https://www.kivisai.com/loesungen",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8
      },
      {
        url: "https://www.kivisai.com/use-cases",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.7
      },
      {
        url: "https://www.kivisai.com/wissens-hub",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.7
      },
      {
        url: "https://www.kivisai.com/ueber-kivisai",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.6
      },
      {
        url: "https://www.kivisai.com/evalkit",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8
      },
      {
        url: "https://www.kivisai.com/kontakt",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.6
      },
      {
        url: "https://www.kivisai.com/termin",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7
      }
    ]
  }

  // Meta-Tags für Social Media
  static generateSocialMetaTags(data: SEOData) {
    return {
      // Open Graph
      "og:title": data.openGraph?.title || data.title,
      "og:description": data.openGraph?.description || data.description,
      "og:image": data.openGraph?.image || "https://www.kivisai.com/images/KIVISAI_og_image.png",
      "og:type": data.openGraph?.type || "website",
      "og:url": data.canonical || "https://www.kivisai.com",
      "og:site_name": "KIVISAI",
      "og:locale": "de_DE",

      // Twitter
      "twitter:card": data.twitter?.card || "summary_large_image",
      "twitter:title": data.twitter?.title || data.title,
      "twitter:description": data.twitter?.description || data.description,
      "twitter:image": data.twitter?.image || "https://www.kivisai.com/images/KIVISAI_twitter_image.png",
      "twitter:creator": "@kivisai",
      "twitter:site": "@kivisai",

      // Weitere Meta-Tags
      "author": "KIVISAI Team",
      "publisher": "KIVISAI",
      "robots": `${data.robots?.index ? 'index' : 'noindex'}, ${data.robots?.follow ? 'follow' : 'nofollow'}`,
      "googlebot": `${data.robots?.index ? 'index' : 'noindex'}, ${data.robots?.follow ? 'follow' : 'nofollow'}`,
    }
  }
}
