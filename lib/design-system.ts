/**
 * KIVISAI Design System
 * Zentrale Definition aller Design-Tokens, Komponenten-Varianten und Regeln
 */

// Brand Colors - Exakte Definitionen
export const BRAND_COLORS = {
  // Primary Colors
  deepDarkBlue: "#001F3F", // Vertrauen, Professionalität, Intelligenz
  clearTurquoise: "#006666", // Innovation, Klarheit, Technologie
  mossGreen: "#36454F", // Regeneration, Wachstum, Nachhaltigkeit

  // NEW: Vibrant Turquoise als Hauptakzentfarbe (ersetzt VibrantLightGreen)
  vibrantTurquoise: "#00B4B4", // Energie, Aktion, Wirksamkeit, Call-to-Action
  vibrantTurquoiseHover: "#009999", // Hover-Zustand
  vibrantTurquoiseLight: "#E0F7F7", // Helle Variante für Hintergründe

  // Neutral Colors
  pureWhite: "#FFFFFF", // Klarheit, Modernität, Freiraum
  lightCoolGray: "#F0F0F0", // Subtilität, Struktur, moderne Ästhetik

  // Semantic Colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
} as const

// Typography Scale
export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    primary: ["var(--font-inter)", "sans-serif"],
    heading: ["var(--font-inter)", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
  },

  // Font Sizes (rem)
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const

// Spacing Scale (rem)
export const SPACING = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
} as const

// Border Radius
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  full: "9999px",
} as const

// Shadows
export const SHADOWS = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const

// Component Variants
export const COMPONENT_VARIANTS = {
  button: {
    primary: {
      bg: BRAND_COLORS.deepDarkBlue,
      text: BRAND_COLORS.pureWhite,
      hover: "#002A5C",
      border: "transparent",
    },
    // CTA-Buttons mit Vibrant Turquoise
    cta: {
      bg: BRAND_COLORS.vibrantTurquoise, // #00B4B4
      text: BRAND_COLORS.pureWhite,
      hover: BRAND_COLORS.vibrantTurquoiseHover, // #009999
      border: "transparent",
    },
    secondary: {
      bg: "transparent",
      text: BRAND_COLORS.vibrantTurquoise, // Neue Farbe für sekundäre Buttons
      hover: BRAND_COLORS.vibrantTurquoiseLight,
      border: BRAND_COLORS.vibrantTurquoise,
    },
    outline: {
      bg: "transparent",
      text: BRAND_COLORS.deepDarkBlue,
      hover: BRAND_COLORS.lightCoolGray,
      border: BRAND_COLORS.deepDarkBlue,
    },
    ghost: {
      bg: "transparent",
      text: BRAND_COLORS.mossGreen,
      hover: BRAND_COLORS.lightCoolGray,
      border: "transparent",
    },
  },

  card: {
    default: {
      bg: BRAND_COLORS.pureWhite,
      border: BRAND_COLORS.lightCoolGray,
      shadow: SHADOWS.base,
    },
    elevated: {
      bg: BRAND_COLORS.pureWhite,
      border: "transparent",
      shadow: SHADOWS.lg,
    },
    outlined: {
      bg: BRAND_COLORS.pureWhite,
      border: BRAND_COLORS.vibrantTurquoise, // Neue Akzentfarbe für Card-Borders
      shadow: "none",
    },
    highlighted: {
      bg: BRAND_COLORS.vibrantTurquoiseLight, // Heller Hintergrund
      border: BRAND_COLORS.vibrantTurquoise,
      shadow: SHADOWS.base,
    },
  },
} as const

// Layout Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

// Animation Durations
export const ANIMATIONS = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",

  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const

// Z-Index Scale
export const Z_INDEX = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const
