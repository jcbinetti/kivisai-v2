import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"

interface AnalyticsEvent {
  event: string
  page: string
  timestamp: string
  userAgent?: string
  referrer?: string
  sessionId?: string
  userId?: string
  properties?: Record<string, any>
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    }

    const body = await request.json()
    const { event, page, properties = {}, sessionId, userId } = body

    // Validate required fields
    if (!event || !page) {
      return NextResponse.json({ error: "Event and page are required" }, { status: 400 })
    }

    // Create analytics event
    const analyticsEvent: AnalyticsEvent = {
      event,
      page,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || undefined,
      referrer: request.headers.get("referer") || undefined,
      sessionId,
      userId,
      properties,
    }

    // Here you would typically send to your analytics service
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.

    // For now, we'll just log it
    console.log("Analytics Event:", analyticsEvent)

    // If using Matomo, you could send it here:
    // await sendToMatomo(analyticsEvent)

    // If using Google Analytics 4:
    // await sendToGA4(analyticsEvent)

    return NextResponse.json({
      success: true,
      eventId: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    })
  } catch (error) {
    console.error("Analytics Error:", error)

    return NextResponse.json({ error: "Failed to track event" }, { status: 500 })
  }
}

// Batch analytics endpoint
export async function PUT(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    }

    const body = await request.json()
    const { events } = body

    if (!Array.isArray(events) || events.length === 0) {
      return NextResponse.json({ error: "Events array is required" }, { status: 400 })
    }

    if (events.length > 50) {
      return NextResponse.json({ error: "Too many events in batch (max 50)" }, { status: 400 })
    }

    // Process batch events
    const processedEvents = events.map((event) => ({
      ...event,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || undefined,
      referrer: request.headers.get("referer") || undefined,
    }))

    // Log batch events
    console.log("Batch Analytics Events:", processedEvents)

    return NextResponse.json({
      success: true,
      processedCount: processedEvents.length,
    })
  } catch (error) {
    console.error("Batch Analytics Error:", error)

    return NextResponse.json({ error: "Failed to process batch events" }, { status: 500 })
  }
}

// Get analytics summary (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // This would typically query your analytics database
    // For now, return mock data

    const summary = {
      totalEvents: 1250,
      uniqueVisitors: 340,
      pageViews: 890,
      topPages: [
        { page: "/", views: 245 },
        { page: "/leistungen", views: 156 },
        { page: "/use-cases", views: 134 },
        { page: "/kontakt", views: 89 },
      ],
      topEvents: [
        { event: "page_view", count: 890 },
        { event: "newsletter_signup", count: 45 },
        { event: "contact_form_submit", count: 23 },
        { event: "download_click", count: 18 },
      ],
      timeRange: "7d",
    }

    return NextResponse.json(summary)
  } catch (error) {
    console.error("Analytics Summary Error:", error)

    return NextResponse.json({ error: "Failed to get analytics summary" }, { status: 500 })
  }
}
