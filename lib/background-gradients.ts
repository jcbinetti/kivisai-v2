/**
 * Hintergrund-Verlauf Definitionen für KIVISAI
 * Alle verfügbaren Gradient-Optionen mit CSS und Beschreibungen
 */

export const BACKGROUND_GRADIENTS = {
  // Empfohlene Hauptverläufe
  kivisaiClassic: {
    name: "KIVISAI Classic",
    description: "Navy → Türkis Verlauf - Markentreu und professionell",
    css: "linear-gradient(135deg, #001F3F 0%, #006666 100%)",
    cssClass: "bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise",
    recommended: true,
    usage: "Hero-Sections, wichtige Call-to-Action Bereiche",
  },

  oceanDepth: {
    name: "Ocean Depth",
    description: "Tiefes Blau → Helles Türkis - Vertrauen und Innovation",
    css: "linear-gradient(135deg, #001F3F 0%, #00B4B4 100%)",
    cssClass: "bg-gradient-to-br from-kivisai-deep-dark-blue to-[#00B4B4]",
    recommended: false,
    usage: "Alternative Hero-Sections, Feature-Bereiche",
  },

  professionalGradient: {
    name: "Professional Gradient",
    description: "Navy → Grau → Türkis - Sehr professionell",
    css: "linear-gradient(135deg, #001F3F 0%, #36454F 50%, #006666 100%)",
    cssClass: "bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-moss-green to-kivisai-clear-turquoise",
    recommended: false,
    usage: "Über uns Seiten, Team-Bereiche",
  },

  subtleBrand: {
    name: "Subtle Brand",
    description: "Dezenter Verlauf für optimale Text-Lesbarkeit",
    css: "linear-gradient(135deg, #001F3F 0%, #002B5C 100%)",
    cssClass: "bg-gradient-to-br from-kivisai-deep-dark-blue to-[#002B5C]",
    recommended: false,
    usage: "Text-lastige Bereiche, Blog-Header",
  },

  // Zusätzliche Varianten
  modernTech: {
    name: "Modern Tech",
    description: "Türkis → Navy - Umgekehrter Verlauf für Abwechslung",
    css: "linear-gradient(135deg, #006666 0%, #001F3F 100%)",
    cssClass: "bg-gradient-to-br from-kivisai-clear-turquoise to-kivisai-deep-dark-blue",
    recommended: false,
    usage: "Service-Seiten, Testimonials",
  },

  lightAccent: {
    name: "Light Accent",
    description: "Heller Verlauf mit Türkis-Akzent",
    css: "linear-gradient(135deg, #E0F7F7 0%, #00B4B4 100%)",
    cssClass: "bg-gradient-to-br from-[#E0F7F7] to-[#00B4B4]",
    recommended: false,
    usage: "Newsletter-Bereiche, Footer",
  },
} as const

// Utility-Funktionen
export function getGradientCSS(gradientKey: keyof typeof BACKGROUND_GRADIENTS): string {
  return BACKGROUND_GRADIENTS[gradientKey].css
}

export function getGradientClass(gradientKey: keyof typeof BACKGROUND_GRADIENTS): string {
  return BACKGROUND_GRADIENTS[gradientKey].cssClass
}

export function getRecommendedGradients() {
  return Object.entries(BACKGROUND_GRADIENTS)
    .filter(([_, gradient]) => gradient.recommended)
    .map(([key, gradient]) => ({ key, ...gradient }))
}

export function getAllGradients() {
  return Object.entries(BACKGROUND_GRADIENTS).map(([key, gradient]) => ({ key, ...gradient }))
}
