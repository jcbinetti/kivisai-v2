// Design System Constants
export const COLORS = {
  primary: {
    deepDarkBlue: "#001F3F",
    clearTurquoise: "#006666",
    mossGreen: "#36454F",
    vibrantLightGreen: "#90FF20",
    pureWhite: "#FFFFFF",
    lightCoolGray: "#F0F0F0",
  },
} as const

export const TYPOGRAPHY = {
  hero: "text-4xl md:text-5xl font-bold",
  sectionTitle: "text-2xl md:text-3xl font-bold",
  cardTitle: "text-lg md:text-xl font-semibold",
  body: "text-base leading-relaxed",
  small: "text-sm",
} as const

export const SPACING = {
  section: "py-16",
  card: "p-6 md:p-8",
  button: "px-6 py-3",
} as const

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const
