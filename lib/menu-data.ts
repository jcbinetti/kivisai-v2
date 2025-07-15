export interface MenuItem {
  name: string
  href: string
  description?: string
  children?: MenuItem[]
  isHighlighted?: boolean
  requiresAuth?: boolean
  requiresAdmin?: boolean
}

export const menuItems: MenuItem[] = [
  {
    name: "Leistungen",
    href: "/leistungen",
    description: "Unsere Services für Ihre KI-Transformation",
    children: [
      {
        name: "KI-Potenzialanalyse",
        href: "/leistungen/ki-potenzialanalyse",
        description: "Strukturierter Workshop zur Identifikation Ihrer wertvollsten KI-Anwendungsfälle",
      },
      {
        name: "Strategie-Coaching",
        href: "/leistungen/strategie-coaching",
        description: "Vertrauliches 1:1-Sparring für Führungskräfte zur KI-Vision",
      },
      {
        name: "KI-Prototyping",
        href: "/leistungen/ki-prototyping",
        description: "Agile Entwicklung eines ersten funktionierenden KI-Prototyps",
        children: [
          {
            name: "Übersicht",
            href: "/leistungen/ki-prototyping",
            description: "Strukturierter Ansatz vom Impuls zum MVP",
          },

          {
            name: "Ablauf",
            href: "/leistungen/ki-prototyping/ablauf",
            description: "5-Phasen-Ansatz für schnelle Wirkung",
          },
          {
            name: "Beispiele",
            href: "/leistungen/ki-prototyping/beispiele",
            description: "12 konkrete KI-Prototypen und Anwendungsfälle",
          },
          {
            name: "Ressourcen",
            href: "/leistungen/ki-prototyping/ressourcen",
            description: "Tools, Templates und praktische Ressourcen",
          },
        ],
      },
      {
        name: "Coaching & Training",
        href: "/leistungen/coaching-training",
        description: "Maßgeschneiderte Schulungen und persönliches KI-Coaching",
      },
      {
        name: "INQA-Coaching",
        href: "/leistungen/inqa-coaching",
        description: "Staatlich gefördertes Programm zur nachhaltigen Digitalisierung",
      },

    ],
  },
  {
    name: "Lösungen",
    href: "/loesungen",
    description: "KI-Lösungen für verschiedene Wirkungsebenen",
    children: [
      {
        name: "Für den Menschen",
        href: "/loesungen/mensch",
        description: "Persönliche KI-Assistenten und individuelle Kompetenzentwicklung",
      },
      {
        name: "Für Projekt-Teams",
        href: "/loesungen/team",
        description: "Kollaborative KI-Tools und Wissensmanagement",
      },
      {
        name: "Für Organisationen",
        href: "/loesungen/organisation",
        description: "Prozessautomatisierung und strategische KI-Integration",
      },
      {
        name: "Für KI-Ökosysteme",
        href: "/loesungen/oekosystem",
        description: "Vernetzte KI-Systeme und autonome Agenten",
      },
    ],
  },

  {
    name: "Wissen-Hub",
    href: "/wissens-hub",
    description: "Zentrale Plattform für alle KI-Artikel und Ressourcen",
    children: [
      {
        name: "Alle Artikel",
        href: "/wissens-hub/blog",
        description: "Übersicht aller veröffentlichten Artikel und Beiträge",
      },
      {
        name: "Kategorien",
        href: "/wissens-hub/kategorien",
        description: "Artikel nach Themen und Kategorien durchsuchen",
      },

      {
        name: "Events",
        href: "/wissens-hub/events",
        description: "Veranstaltungen, Webinare und Termine",
      },
      {
        name: "Downloads",
        href: "/wissens-hub/download",
        description: "Kostenlose Ressourcen, Checklisten und Dokumente",
      },
      {
        name: "Glossar",
        href: "/wissens-hub/glossar",
        description: "Begriffe und Abkürzungen rund um KI, Agilität, Transformation und mehr"
      },
    ],
  },
  {
    name: "Über KIVISAI",
    href: "/ueber-kivisai",
    description: "Unsere Vision, Methode und das Team",
    children: [
      {
        name: "Bedeutung & Vision",
        href: "/ueber-kivisai/bedeutung",
        description: "Was KIVISAI bedeutet und wofür wir stehen",
      },
      {
        name: "Prinzipien",
        href: "/ueber-kivisai/prinzipien",
        description: "Unsere Grundsätze und Arbeitsweise",
      },
      {
        name: "Methode",
        href: "/ueber-kivisai/methode",
        description: "Der KIVISAI-Loop: Unser bewährter Transformationsansatz",
      },
      {
        name: "Team & Netzwerk",
        href: "/ueber-kivisai/team-netzwerk",
        description: "Die Menschen hinter KIVISAI und unser Partnernetzwerk",
      },
    ],
  },
  {
    name: "Kontakt",
    href: "/kontakt",
    description: "Sprechen wir miteinander",
    children: [
      {
        name: "Newsletter",
        href: "/kontakt/newsletter",
        description: "Aktuelle KI-Insights und Updates abonnieren",
      },
    ],
  },
  {
    name: "EVALKIT",
    href: "/evalkit",
    description: "Kostenloser KI-Fitness-Test",
    isHighlighted: true,
  },
  {
    name: "Admin",
    href: "/admin",
    description: "Administrative Funktionen und Tests",
    requiresAuth: true,
    requiresAdmin: true,
    children: [
      {
        name: "Dashboard",
        href: "/admin",
        description: "Übersicht und Statistiken",
        requiresAuth: true,
        requiresAdmin: true,
      },
      {
        name: "Website-Test",
        href: "/comprehensive-test.html",
        description: "Umfassender System-Test",
        requiresAuth: true,
        requiresAdmin: true,
      },
      {
        name: "Schneller Test",
        href: "/simple-test.html",
        description: "Schneller Technik-Test",
        requiresAuth: true,
        requiresAdmin: true,
      },
    ],
  },
]

// Helper function to filter menu items based on authentication
export function getFilteredMenuItems(isAuthenticated: boolean, isAdmin: boolean): MenuItem[] {
  return menuItems.filter(item => {
    // Check if item requires authentication
    if (item.requiresAuth && !isAuthenticated) {
      return false;
    }
    
    // Check if item requires admin privileges
    if (item.requiresAdmin && !isAdmin) {
      return false;
    }
    
    // Filter children recursively
    if (item.children) {
      item.children = item.children.filter(child => {
        if (child.requiresAuth && !isAuthenticated) {
          return false;
        }
        if (child.requiresAdmin && !isAdmin) {
          return false;
        }
        return true;
      });
      
      // Only show parent if it has visible children or doesn't require auth
      if (item.requiresAuth && item.children.length === 0) {
        return false;
      }
    }
    
    return true;
  });
}
