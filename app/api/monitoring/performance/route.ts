import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"

interface PerformanceMetrics {
  url: string
  timestamp: string
  metrics: {
    // Core Web Vitals
    lcp?: number // Largest Contentful Paint
    fid?: number // First Input Delay
    cls?: number // Cumulative Layout Shift

    // Other important metrics
    fcp?: number // First Contentful Paint
    ttfb?: number // Time to First Byte

    // Navigation timing
    domContentLoaded?: number
    loadComplete?: number

    // Resource timing
    resourceCount?: number
    totalResourceSize?: number
  }
  userAgent: string
  connection?: {
    effectiveType?: string
    downlink?: number
    rtt?: number
  }
  deviceInfo?: {
    deviceMemory?: number
    hardwareConcurrency?: number
  }
  sessionId?: string
  userId?: string
}

async function logPerformanceMetrics(metrics: PerformanceMetrics) {
  // Log performance data
  console.log("Performance Metrics:", {
    url: metrics.url,
    timestamp: metrics.timestamp,
    lcp: metrics.metrics.lcp,
    fid: metrics.metrics.fid,
    cls: metrics.metrics.cls,
    fcp: metrics.metrics.fcp,
    ttfb: metrics.metrics.ttfb,
    userAgent: metrics.userAgent.substring(0, 100),
    connection: metrics.connection,
    sessionId: metrics.sessionId,
  })

  // In production, you'd send this to your analytics service
  // Examples: Google Analytics, DataDog, New Relic, etc.

  return { success: true, metricsId: `perf_${Date.now()}` }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip, 50)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Too many performance reports" }, { status: 429 })
    }

    const body = await request.json()
    const { url, metrics, connection, deviceInfo, sessionId, userId } = body

    // Basic validation
    if (!url || !metrics) {
      return NextResponse.json({ error: "URL and metrics are required" }, { status: 400 })
    }

    // Create performance report
    const performanceMetrics: PerformanceMetrics = {
      url: String(url).substring(0, 500),
      timestamp: new Date().toISOString(),
      metrics: {
        lcp: metrics.lcp ? Number(metrics.lcp) : undefined,
        fid: metrics.fid ? Number(metrics.fid) : undefined,
        cls: metrics.cls ? Number(metrics.cls) : undefined,
        fcp: metrics.fcp ? Number(metrics.fcp) : undefined,
        ttfb: metrics.ttfb ? Number(metrics.ttfb) : undefined,
        domContentLoaded: metrics.domContentLoaded ? Number(metrics.domContentLoaded) : undefined,
        loadComplete: metrics.loadComplete ? Number(metrics.loadComplete) : undefined,
        resourceCount: metrics.resourceCount ? Number(metrics.resourceCount) : undefined,
        totalResourceSize: metrics.totalResourceSize ? Number(metrics.totalResourceSize) : undefined,
      },
      userAgent: request.headers.get("user-agent") || "unknown",
      connection: connection || {},
      deviceInfo: deviceInfo || {},
      sessionId: sessionId ? String(sessionId) : undefined,
      userId: userId ? String(userId) : undefined,
    }

    // Log the metrics
    const result = await logPerformanceMetrics(performanceMetrics)

    return NextResponse.json({
      success: true,
      metricsId: result.metricsId,
      message: "Performance metrics received",
    })
  } catch (error) {
    console.error("Performance Monitoring API Error:", error)

    return NextResponse.json({ error: "Failed to process performance metrics" }, { status: 500 })
  }
}

// Get performance statistics (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // This would typically query your performance database
    // For now, return mock statistics

    const stats = {
      overview: {
        totalPageViews: 1250,
        avgLCP: 2.1,
        avgFID: 85,
        avgCLS: 0.08,
        avgFCP: 1.6,
        avgTTFB: 450,
      },
      coreWebVitals: {
        lcp: {
          good: 78, // < 2.5s
          needsImprovement: 18, // 2.5s - 4s
          poor: 4, // > 4s
        },
        fid: {
          good: 92, // < 100ms
          needsImprovement: 6, // 100ms - 300ms
          poor: 2, // > 300ms
        },
        cls: {
          good: 85, // < 0.1
          needsImprovement: 12, // 0.1 - 0.25
          poor: 3, // > 0.25
        },
      },
      topSlowPages: [
        { url: "/evalkit", avgLCP: 3.2, visits: 234 },
        { url: "/use-cases", avgLCP: 2.8, visits: 189 },
        { url: "/leistungen", avgLCP: 2.4, visits: 156 },
        { url: "/kontakt", avgLCP: 2.1, visits: 98 },
      ],
      deviceTypes: {
        desktop: { count: 720, avgLCP: 1.9 },
        mobile: { count: 450, avgLCP: 2.6 },
        tablet: { count: 80, avgLCP: 2.2 },
      },
      connectionTypes: {
        "4g": { count: 680, avgLCP: 2.1 },
        wifi: { count: 420, avgLCP: 1.8 },
        "3g": { count: 120, avgLCP: 3.4 },
        "slow-2g": { count: 30, avgLCP: 5.2 },
      },
      trends: {
        last7Days: [
          { date: "2024-06-12", avgLCP: 2.3, pageViews: 145 },
          { date: "2024-06-13", avgLCP: 2.1, pageViews: 167 },
          { date: "2024-06-14", avgLCP: 2.0, pageViews: 189 },
          { date: "2024-06-15", avgLCP: 2.2, pageViews: 156 },
          { date: "2024-06-16", avgLCP: 1.9, pageViews: 178 },
          { date: "2024-06-17", avgLCP: 2.1, pageViews: 203 },
          { date: "2024-06-18", avgLCP: 2.0, pageViews: 212 },
        ],
      },
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Performance Stats API Error:", error)

    return NextResponse.json({ error: "Failed to get performance statistics" }, { status: 500 })
  }
}

// Get detailed metrics for a specific page
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, timeRange = "7d" } = body

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Mock detailed page metrics
    const pageMetrics = {
      url,
      timeRange,
      totalViews: 234,
      metrics: {
        lcp: { avg: 2.3, p75: 2.8, p90: 3.5, p95: 4.1 },
        fid: { avg: 78, p75: 95, p90: 120, p95: 145 },
        cls: { avg: 0.06, p75: 0.08, p90: 0.12, p95: 0.18 },
        fcp: { avg: 1.8, p75: 2.1, p90: 2.6, p95: 3.2 },
        ttfb: { avg: 420, p75: 480, p90: 580, p95: 720 },
      },
      hourlyBreakdown: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        views: Math.floor(Math.random() * 20) + 5,
        avgLCP: 1.8 + Math.random() * 1.2,
      })),
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(pageMetrics)
  } catch (error) {
    console.error("Page Metrics API Error:", error)

    return NextResponse.json({ error: "Failed to get page metrics" }, { status: 500 })
  }
}
