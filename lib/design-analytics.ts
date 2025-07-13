/**
 * Design Analytics & Usage Tracking
 * Verfolgt die Nutzung von Templates und Komponenten
 */

export interface DesignUsage {
  templateId: string
  componentId?: string
  pageUrl: string
  timestamp: string
  userId?: string
  action: "view" | "edit" | "create" | "delete"
}

export interface TemplateAnalytics {
  templateId: string
  totalUsage: number
  lastUsed: string
  popularComponents: Array<{
    componentId: string
    usage: number
  }>
  conversionRate?: number
  performanceScore?: number
}

class DesignAnalyticsManager {
  private usageData: DesignUsage[] = []

  // Nutzung tracken
  trackUsage(usage: Omit<DesignUsage, "timestamp">) {
    this.usageData.push({
      ...usage,
      timestamp: new Date().toISOString(),
    })

    // Optional: An Analytics-Service senden
    this.sendToAnalytics(usage)
  }

  // Template-Analytics generieren
  getTemplateAnalytics(templateId: string): TemplateAnalytics {
    const templateUsage = this.usageData.filter((u) => u.templateId === templateId)

    const componentUsage = templateUsage
      .filter((u) => u.componentId)
      .reduce(
        (acc, usage) => {
          const componentId = usage.componentId!
          acc[componentId] = (acc[componentId] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

    const popularComponents = Object.entries(componentUsage)
      .map(([componentId, usage]) => ({ componentId, usage }))
      .sort((a, b) => b.usage - a.usage)

    return {
      templateId,
      totalUsage: templateUsage.length,
      lastUsed: templateUsage[templateUsage.length - 1]?.timestamp || "",
      popularComponents,
    }
  }

  // Alle Template-Analytics
  getAllTemplateAnalytics(): TemplateAnalytics[] {
    const templateIds = [...new Set(this.usageData.map((u) => u.templateId))]
    return templateIds.map((id) => this.getTemplateAnalytics(id))
  }

  // Performance-Metriken
  getPerformanceMetrics() {
    const totalUsage = this.usageData.length
    const uniqueTemplates = new Set(this.usageData.map((u) => u.templateId)).size
    const avgUsagePerTemplate = totalUsage / uniqueTemplates

    return {
      totalUsage,
      uniqueTemplates,
      avgUsagePerTemplate,
      mostUsedTemplate: this.getMostUsedTemplate(),
      recentActivity: this.getRecentActivity(),
    }
  }

  private getMostUsedTemplate(): string {
    const templateCounts = this.usageData.reduce(
      (acc, usage) => {
        acc[usage.templateId] = (acc[usage.templateId] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(templateCounts).sort(([, a], [, b]) => b - a)[0]?.[0] || ""
  }

  private getRecentActivity(): DesignUsage[] {
    return this.usageData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10)
  }

  private async sendToAnalytics(usage: Omit<DesignUsage, "timestamp">) {
    // Integration mit Analytics-Service (z.B. Google Analytics, Mixpanel)
    try {
      await fetch("/api/analytics/design-usage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usage),
      })
    } catch (error) {
      console.warn("Failed to send design analytics:", error)
    }
  }
}

export const designAnalytics = new DesignAnalyticsManager()

// Hook für React-Komponenten
export function useDesignAnalytics() {
  return {
    trackTemplateView: (templateId: string, pageUrl: string) =>
      designAnalytics.trackUsage({ templateId, pageUrl, action: "view" }),

    trackTemplateEdit: (templateId: string, pageUrl: string) =>
      designAnalytics.trackUsage({ templateId, pageUrl, action: "edit" }),

    trackComponentUsage: (templateId: string, componentId: string, pageUrl: string) =>
      designAnalytics.trackUsage({ templateId, componentId, pageUrl, action: "view" }),

    getAnalytics: () => designAnalytics.getAllTemplateAnalytics(),
    getMetrics: () => designAnalytics.getPerformanceMetrics(),
  }
}
