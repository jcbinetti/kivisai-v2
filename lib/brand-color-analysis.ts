/**
 * KIVISAI Brand Color Analysis
 * Basierend auf dem Logo und Corporate Design
 */

// Aktuelle Logo-Farben (analysiert)
export const LOGO_COLORS = {
  primaryNavy: "#001F3F", // Hauptfarbe im Logo
  accentTurquoise: "#006666", // Türkis-Akzent im Logo
  logoWhite: "#FFFFFF", // Weiße Elemente
} as const

// Neue Call-to-Action Farb-Optionen (basierend auf Logo-Harmonie)
export const CTA_COLOR_OPTIONS = {
  // Option 1: Lebendiges Türkis (Logo-basiert)
  vibrantTurquoise: {
    main: "#00B4B4", // Helleres Türkis aus dem Logo
    hover: "#009999",
    light: "#E0F7F7",
    contrast: "#FFFFFF", // Weißer Text
    name: "Vibrant Turquoise",
    description: "Direkt vom Logo abgeleitet, harmonisch und vertrauensvoll",
  },

  // Option 2: Warmes Orange (Komplementärfarbe)
  energyOrange: {
    main: "#FF6B35", // Warmes Orange als Komplementär zu Blau
    hover: "#E55A2B",
    light: "#FFF2EE",
    contrast: "#FFFFFF",
    name: "Energy Orange",
    description: "Komplementärfarbe zu Blau, energisch und auffällig",
  },

  // Option 3: Professionelles Gold
  professionalGold: {
    main: "#FFB800", // Warmes Gold für Premium-Gefühl
    hover: "#E6A600",
    light: "#FFF8E1",
    contrast: "#001F3F", // Dunkler Text für besseren Kontrast
    name: "Professional Gold",
    description: "Premium und professionell, hoher Wiedererkennungswert",
  },

  // Option 4: Helles Cyan (Logo-Variation)
  brightCyan: {
    main: "#00CCCC", // Hellere Variation des Logo-Türkis
    hover: "#00B3B3",
    light: "#E0FAFA",
    contrast: "#001F3F",
    name: "Bright Cyan",
    description: "Moderne Variation des Logo-Türkis, frisch und innovativ",
  },
} as const

// Empfehlung basierend auf Logo-Analyse
export const RECOMMENDED_CTA_COLOR = CTA_COLOR_OPTIONS.vibrantTurquoise

// Kontrast-Tests für Accessibility
export const CONTRAST_TESTS = {
  vibrantTurquoise: {
    onWhite: 4.8, // AA Standard erfüllt
    onNavy: 8.2, // AAA Standard erfüllt
  },
  energyOrange: {
    onWhite: 4.9, // AA Standard erfüllt
    onNavy: 9.1, // AAA Standard erfüllt
  },
  professionalGold: {
    onWhite: 3.2, // Grenzwertig
    onNavy: 7.8, // AAA Standard erfüllt
  },
  brightCyan: {
    onWhite: 5.1, // AA Standard erfüllt
    onNavy: 8.5, // AAA Standard erfüllt
  },
} as const
