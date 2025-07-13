/**
 * Design Tokens für CSS-in-JS und Tailwind
 * Automatische Generierung von CSS-Variablen
 */

import { BRAND_COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from "./design-system"

// CSS Custom Properties Generator
export function generateCSSVariables() {
  const cssVars: Record<string, string> = {}

  // Colors
  Object.entries(BRAND_COLORS).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value
  })

  // Typography
  Object.entries(TYPOGRAPHY.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value
  })

  // Spacing
  Object.entries(SPACING).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value
  })

  // Shadows
  Object.entries(SHADOWS).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value
  })

  // Border Radius
  Object.entries(BORDER_RADIUS).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value
  })

  return cssVars
}

// Tailwind Config Generator
export function generateTailwindConfig() {
  return {
    theme: {
      extend: {
        colors: {
          ...BRAND_COLORS,
          primary: BRAND_COLORS.deepDarkBlue,
          secondary: BRAND_COLORS.vibrantTurquoise,
          accent: BRAND_COLORS.clearTurquoise,
          neutral: BRAND_COLORS.mossGreen,
        },
        fontFamily: TYPOGRAPHY.fontFamily,
        fontSize: TYPOGRAPHY.fontSize,
        fontWeight: TYPOGRAPHY.fontWeight,
        lineHeight: TYPOGRAPHY.lineHeight,
        spacing: SPACING,
        borderRadius: BORDER_RADIUS,
        boxShadow: SHADOWS,
      },
    },
  }
}

// Component Style Generator
export function generateComponentStyles(component: string, variant: string) {
  const styles: Record<string, any> = {}

  // Button Styles
  if (component === "button") {
    const buttonVariant = BRAND_COLORS as any // Type assertion for demo
    styles.backgroundColor = buttonVariant.primary || BRAND_COLORS.deepDarkBlue
    styles.color = BRAND_COLORS.pureWhite
    styles.padding = `${SPACING[3]} ${SPACING[6]}`
    styles.borderRadius = BORDER_RADIUS.md
    styles.boxShadow = SHADOWS.sm
  }

  return styles
}
