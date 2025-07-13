// Advanced Analytics and Tracking
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  customParameters?: Record<string, any>
}

export interface ConversionEvent {
  eventName: string
  value?: number
  currency?: string
  items?: Array<{
    item_id: string
    item_name: string
    category: string
    quantity?: number
    price?: number
  }>
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

class AnalyticsManager {
  private isInitialized = false
  private queue: AnalyticsEvent[] = []

  initialize() {
    if (typeof window === "undefined" || this.isInitialized) return

    // Google Analytics 4
    if (process.env.NEXT_PUBLIC_GA_ID) {
      this.initializeGA4()
    }

    // Microsoft Clarity
    if (process.env.NEXT_PUBLIC_CLARITY_ID) {
      this.initializeClarity()
    }

    // Hotjar
    if (process.env.NEXT_PUBLIC_HOTJAR_ID) {
      this.initializeHotjar()
    }

    this.isInitialized = true
    this.flushQueue()
  }

  private initializeGA4() {
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = (...args: any[]) => {
      window.dataLayer.push(args)
    }
    window.gtag("js", new Date())
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }

  private initializeClarity() {
    ((c: any, l: any, a: any, r: any, i: any, t: any, y: any) => {
      c[a] =
        c[a] ||
        ((...args: any[]) => {
          ;(c[a].q = c[a].q || []).push(args)
        })
      t = l.createElement(r)
      t.async = 1
      t.src = "https://www.clarity.ms/tag/" + i
      y = l.getElementsByTagName(r)[0]
      y.parentNode.insertBefore(t, y)
    })(window, document, "clarity", "script", process.env.NEXT_PUBLIC_CLARITY_ID, undefined, undefined)
  }

  private initializeHotjar() {
    ((h: any, o: any, t: any, j: any, a: any, r: any) => {
      h.hj =
        h.hj ||
        ((...args: any[]) => {
          ;(h.hj.q = h.hj.q || []).push(args)
        })
      h._hjSettings = { hjid: process.env.NEXT_PUBLIC_HOTJAR_ID, hjsv: 6 }
      a = o.getElementsByTagName("head")[0]
      r = o.createElement("script")
      r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=", undefined, undefined)
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event)
      return
    }

    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters,
      })
    }

    // Custom analytics endpoint
    this.sendToCustomAnalytics(event)
  }

  trackConversion(event: ConversionEvent) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event.eventName, {
        value: event.value,
        currency: event.currency || "EUR",
        items: event.items,
      })
    }
  }

  trackPageView(url: string, title: string) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }

  private async sendToCustomAnalytics(event: AnalyticsEvent) {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...event,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      })
    } catch (error) {
      console.error("Failed to send analytics event:", error)
    }
  }

  private flushQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift()
      if (event) {
        this.trackEvent(event)
      }
    }
  }

  // Lead scoring and qualification
  trackLeadAction(action: string, score: number) {
    this.trackEvent({
      action: "lead_action",
      category: "lead_scoring",
      label: action,
      value: score,
      customParameters: {
        lead_score: score,
        action_type: action,
      },
    })
  }

  // Form analytics
  trackFormInteraction(formName: string, fieldName: string, action: "focus" | "blur" | "error") {
    this.trackEvent({
      action: `form_${action}`,
      category: "form_analytics",
      label: `${formName}_${fieldName}`,
      customParameters: {
        form_name: formName,
        field_name: fieldName,
      },
    })
  }
}

export const analytics = new AnalyticsManager()

// React hooks for analytics
export function useAnalytics() {
  return {
    trackEvent: (event: AnalyticsEvent) => analytics.trackEvent(event),
    trackConversion: (event: ConversionEvent) => analytics.trackConversion(event),
    trackPageView: (url: string, title: string) => analytics.trackPageView(url, title),
    trackLeadAction: (action: string, score: number) => analytics.trackLeadAction(action, score),
    trackFormInteraction: (formName: string, fieldName: string, action: "focus" | "blur" | "error") =>
      analytics.trackFormInteraction(formName, fieldName, action),
  }
}
