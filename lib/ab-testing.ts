// A/B Testing Framework
export interface ABTest {
  id: string
  name: string
  variants: Array<{
    id: string
    name: string
    weight: number
  }>
  active: boolean
  targetAudience?: {
    countries?: string[]
    devices?: string[]
    userTypes?: string[]
  }
}

class ABTestingManager {
  private tests: Map<string, ABTest> = new Map()
  private userVariants: Map<string, string> = new Map()

  constructor() {
    this.loadTests()
    this.loadUserVariants()
  }

  private loadTests() {
    // In production, load from API or config
    const tests: ABTest[] = [
      {
        id: "hero_cta_test",
        name: "Hero CTA Button Test",
        variants: [
          { id: "control", name: "Jetzt starten", weight: 50 },
          { id: "variant_a", name: "Kostenlos testen", weight: 50 },
        ],
        active: true,
      },
      {
        id: "newsletter_form_test",
        name: "Newsletter Form Position",
        variants: [
          { id: "control", name: "Sidebar", weight: 50 },
          { id: "variant_a", name: "Bottom", weight: 50 },
        ],
        active: true,
      },
    ]

    tests.forEach((test) => this.tests.set(test.id, test))
  }

  private loadUserVariants() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("ab_test_variants")
      if (stored) {
        try {
          const variants = JSON.parse(stored)
          Object.entries(variants).forEach(([testId, variantId]) => {
            this.userVariants.set(testId, variantId as string)
          })
        } catch (error) {
          console.error("Failed to load AB test variants:", error)
        }
      }
    }
  }

  private saveUserVariants() {
    if (typeof window !== "undefined") {
      const variants = Object.fromEntries(this.userVariants)
      localStorage.setItem("ab_test_variants", JSON.stringify(variants))
    }
  }

  getVariant(testId: string): string {
    const test = this.tests.get(testId)
    if (!test || !test.active) {
      return "control"
    }

    // Check if user already has a variant
    if (this.userVariants.has(testId)) {
      return this.userVariants.get(testId)!
    }

    // Assign new variant based on weights
    const variant = this.assignVariant(test)
    this.userVariants.set(testId, variant)
    this.saveUserVariants()

    // Track assignment
    this.trackVariantAssignment(testId, variant)

    return variant
  }

  private assignVariant(test: ABTest): string {
    const random = Math.random() * 100
    let cumulative = 0

    for (const variant of test.variants) {
      cumulative += variant.weight
      if (random <= cumulative) {
        return variant.id
      }
    }

    return test.variants[0].id // Fallback
  }

  private trackVariantAssignment(testId: string, variantId: string) {
    // Track in analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ab_test_assignment", {
        test_id: testId,
        variant_id: variantId,
      })
    }
  }

  trackConversion(testId: string, conversionType: string) {
    const variant = this.userVariants.get(testId)
    if (!variant) return

    // Track conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ab_test_conversion", {
        test_id: testId,
        variant_id: variant,
        conversion_type: conversionType,
      })
    }
  }
}

export const abTesting = new ABTestingManager()

// React hook for A/B testing
export function useABTest(testId: string) {
  const variant = abTesting.getVariant(testId)

  return {
    variant,
    trackConversion: (conversionType: string) => abTesting.trackConversion(testId, conversionType),
  }
}
