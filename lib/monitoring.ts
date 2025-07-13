// Error tracking and monitoring utilities
export interface ErrorEvent {
  message: string
  stack?: string
  url: string
  userAgent: string
  timestamp: number
  userId?: string
  sessionId?: string
  level: "error" | "warning" | "info"
  context?: Record<string, any>
}

export interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  url: string
  userAgent: string
  context?: Record<string, any>
}

class MonitoringService {
  private errorQueue: ErrorEvent[] = []
  private performanceQueue: PerformanceMetric[] = []
  private sessionId: string
  private isOnline = true

  constructor() {
    this.sessionId = this.generateSessionId()
    this.setupEventListeners()
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  private setupEventListeners() {
    if (typeof window !== "undefined") {
      // Network status
      window.addEventListener("online", () => {
        this.isOnline = true
        this.flushQueues()
      })

      window.addEventListener("offline", () => {
        this.isOnline = false
      })

      // Unhandled errors
      window.addEventListener("error", (event) => {
        this.logError({
          message: event.message,
          stack: event.error?.stack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
          sessionId: this.sessionId,
          level: "error",
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
          },
        })
      })

      // Unhandled promise rejections
      window.addEventListener("unhandledrejection", (event) => {
        this.logError({
          message: `Unhandled Promise Rejection: ${event.reason}`,
          stack: event.reason?.stack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
          sessionId: this.sessionId,
          level: "error",
          context: {
            type: "unhandledrejection",
            reason: event.reason,
          },
        })
      })
    }
  }

  logError(error: Partial<ErrorEvent>) {
    const errorEvent: ErrorEvent = {
      message: error.message || "Unknown error",
      stack: error.stack,
      url: error.url || (typeof window !== "undefined" ? window.location.href : ""),
      userAgent: error.userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : ""),
      timestamp: error.timestamp || Date.now(),
      sessionId: this.sessionId,
      level: error.level || "error",
      context: error.context,
    }

    console.error("Monitoring Error:", errorEvent)

    if (this.isOnline) {
      this.sendError(errorEvent)
    } else {
      this.errorQueue.push(errorEvent)
    }
  }

  logPerformance(metric: Partial<PerformanceMetric>) {
    const performanceMetric: PerformanceMetric = {
      name: metric.name || "unknown",
      value: metric.value || 0,
      timestamp: metric.timestamp || Date.now(),
      url: metric.url || (typeof window !== "undefined" ? window.location.href : ""),
      userAgent: metric.userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : ""),
      context: metric.context,
    }

    console.log("Performance Metric:", performanceMetric)

    if (this.isOnline) {
      this.sendPerformanceMetric(performanceMetric)
    } else {
      this.performanceQueue.push(performanceMetric)
    }
  }

  private async sendError(error: ErrorEvent) {
    try {
      // In production, send to your error tracking service
      if (process.env.NODE_ENV === "production") {
        await fetch("/api/monitoring/errors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(error),
        })
      }
    } catch (e) {
      console.error("Failed to send error to monitoring service:", e)
      this.errorQueue.push(error)
    }
  }

  private async sendPerformanceMetric(metric: PerformanceMetric) {
    try {
      // In production, send to your analytics service
      if (process.env.NODE_ENV === "production") {
        await fetch("/api/monitoring/performance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(metric),
        })
      }
    } catch (e) {
      console.error("Failed to send performance metric:", e)
      this.performanceQueue.push(metric)
    }
  }

  private async flushQueues() {
    // Send queued errors
    while (this.errorQueue.length > 0) {
      const error = this.errorQueue.shift()
      if (error) {
        await this.sendError(error)
      }
    }

    // Send queued performance metrics
    while (this.performanceQueue.length > 0) {
      const metric = this.performanceQueue.shift()
      if (metric) {
        await this.sendPerformanceMetric(metric)
      }
    }
  }

  // Performance monitoring helpers
  measurePageLoad() {
    if (typeof window !== "undefined" && "performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

          this.logPerformance({
            name: "page_load_time",
            value: navigation.loadEventEnd - navigation.fetchStart,
            context: {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              firstPaint: this.getFirstPaint(),
              firstContentfulPaint: this.getFirstContentfulPaint(),
            },
          })
        }, 0)
      })
    }
  }

  private getFirstPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType("paint")
    const firstPaint = paintEntries.find((entry) => entry.name === "first-paint")
    return firstPaint?.startTime
  }

  private getFirstContentfulPaint(): number | undefined {
    const paintEntries = performance.getEntriesByType("paint")
    const firstContentfulPaint = paintEntries.find((entry) => entry.name === "first-contentful-paint")
    return firstContentfulPaint?.startTime
  }

  measureApiCall(url: string, startTime: number, endTime: number, success: boolean) {
    this.logPerformance({
      name: "api_call_duration",
      value: endTime - startTime,
      context: {
        url,
        success,
        method: "POST", // Could be passed as parameter
      },
    })
  }
}

// Singleton instance
export const monitoring = new MonitoringService()

// React hook for monitoring
export function useMonitoring() {
  return {
    logError: (error: Partial<ErrorEvent>) => monitoring.logError(error),
    logPerformance: (metric: Partial<PerformanceMetric>) => monitoring.logPerformance(metric),
    measureApiCall: (url: string, startTime: number, endTime: number, success: boolean) =>
      monitoring.measureApiCall(url, startTime, endTime, success),
  }
}
