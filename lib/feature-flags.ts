// Feature Flag System für schrittweise Umstellung
export const FEATURE_FLAGS = {
  NEW_COLOR_SYSTEM: process.env.NEXT_PUBLIC_NEW_COLORS === "true",
  NEW_TYPOGRAPHY: process.env.NEXT_PUBLIC_NEW_TYPOGRAPHY === "true",
  NEW_COMPONENTS: process.env.NEXT_PUBLIC_NEW_COMPONENTS === "true",
  FULL_NEW_DESIGN: process.env.NEXT_PUBLIC_FULL_NEW_DESIGN === "true",
} as const

export function useFeatureFlag(flag: keyof typeof FEATURE_FLAGS): boolean {
  return FEATURE_FLAGS[flag] || false
}

// Usage in components:
// const hasNewColors = useFeatureFlag('NEW_COLOR_SYSTEM')
