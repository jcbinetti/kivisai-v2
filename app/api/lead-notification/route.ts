import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"
import { validateEmail, validateRequired, sanitizeInput } from "@/lib/validation"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_TEAM_EMAIL = process.env.BREVO_TEAM_EMAIL || "team@kivisai.de"
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "noreply@kivisai.de"

interface LeadData {
  type: "newsletter" | "download" | "quiz" | "calculator" | "evalkit"
  email: string
  name?: string
  company?: string
  phone?: string
  source: string
  data?: Record<string, any>
}

async function sendLeadNotification(leadData: LeadData) {
  if (!BREVO_API_KEY) {
    console.warn("BREVO_API_KEY not configured, skipping lead notification")
    return { success: true, messageId: "mock-id" }
  }

  const getSubjectByType = (type: string) => {
    switch (type) {
      case "newsletter":
        return "Neue Newsletter-Anmeldung"
      case "download":
        return "Neuer Download-Lead"
      case "quiz":
        return "KI-Readiness Quiz abgeschlossen"
      case "calculator":
        return "ROI-Calculator genutzt"
      case "evalkit":
        return "EVALKIT Assessment abgeschlossen"
      default:
        return "Neuer Lead"
    }
  }

  const getContentByType = (type: string, data: any) => {
    const baseInfo = `
      <h3>Lead-Informationen:</h3>
      <ul>
        <li><strong>E-Mail:</strong> ${data.email}</li>
        ${data.name ? `<li><strong>Name:</strong> ${data.name}</li>` : ""}
        ${data.company ? `<li><strong>Unternehmen:</strong> ${data.company}</li>` : ""}
        ${data.phone ? `<li><strong>Telefon:</strong> ${data.phone}</li>` : ""}
        <li><strong>Quelle:</strong> ${data.source}</li>
        <li><strong>Zeitpunkt:</strong> ${new Date().toLocaleString("de-DE")}</li>
      </ul>
    `

    switch (type) {
      case "newsletter":
        return `
          <h2>Neue Newsletter-Anmeldung</h2>
          ${baseInfo}
          <p>Eine neue Person hat sich für den KIVISAI Newsletter angemeldet.</p>
        `

      case "download":
        return `
          <h2>Neuer Download-Lead</h2>
          ${baseInfo}
          <h3>Download-Details:</h3>
          <ul>
            <li><strong>Dokument:</strong> ${data.data?.document || "Unbekannt"}</li>
            <li><strong>Kategorie:</strong> ${data.data?.category || "Unbekannt"}</li>
          </ul>
        `

      case "quiz":
        return `
          <h2>KI-Readiness Quiz abgeschlossen</h2>
          ${baseInfo}
          <h3>Quiz-Ergebnisse:</h3>
          <ul>
            <li><strong>Score:</strong> ${data.data?.score || "N/A"}/100</li>
            <li><strong>Level:</strong> ${data.data?.level || "N/A"}</li>
            <li><strong>Empfehlung:</strong> ${data.data?.recommendation || "N/A"}</li>
          </ul>
        `

      case "calculator":
        return `
          <h2>ROI-Calculator genutzt</h2>
          ${baseInfo}
          <h3>Berechnungs-Details:</h3>
          <ul>
            <li><strong>Geschätzter ROI:</strong> ${data.data?.roi || "N/A"}%</li>
            <li><strong>Investition:</strong> ${data.data?.investment || "N/A"}€</li>
            <li><strong>Zeitrahmen:</strong> ${data.data?.timeframe || "N/A"} Monate</li>
          </ul>
        `

      case "evalkit":
        return `
          <h2>EVALKIT Assessment abgeschlossen</h2>
          ${baseInfo}
          <h3>Assessment-Ergebnisse:</h3>
          <ul>
            <li><strong>Rolle:</strong> ${data.data?.role || "N/A"}</li>
            <li><strong>Gesamt-Score:</strong> ${data.data?.totalScore || "N/A"}/100</li>
            <li><strong>Stärkste Dimension:</strong> ${data.data?.strongestDimension || "N/A"}</li>
            <li><strong>Entwicklungsbereich:</strong> ${data.data?.developmentArea || "N/A"}</li>
          </ul>
        `

      default:
        return `
          <h2>Neuer Lead</h2>
          ${baseInfo}
          ${data.data ? `<h3>Zusätzliche Daten:</h3><pre>${JSON.stringify(data.data, null, 2)}</pre>` : ""}
        `
    }
  }

  const emailData = {
    sender: {
      name: "KIVISAI Lead System",
      email: BREVO_SENDER_EMAIL,
    },
    to: [
      {
        email: BREVO_TEAM_EMAIL,
        name: "KIVISAI Team",
      },
    ],
    subject: getSubjectByType(leadData.type),
    htmlContent:
      getContentByType(leadData.type, leadData) +
      `
      <hr>
      <p><small>Automatisch generiert vom KIVISAI Lead-System</small></p>
    `,
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify(emailData),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Brevo API error: ${response.status} - ${error}`)
  }

  return await response.json()
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
    const { type, email, name, company, phone, source, data }: LeadData = body

    // Validation
    const typeValidation = validateRequired(type)
    const emailValidation = validateEmail(email)
    const sourceValidation = validateRequired(source)

    if (!typeValidation.isValid) {
      return NextResponse.json({ error: "Lead type is required" }, { status: 400 })
    }

    if (!emailValidation.isValid) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    if (!sourceValidation.isValid) {
      return NextResponse.json({ error: "Source is required" }, { status: 400 })
    }

    // Sanitize input
    const sanitizedLeadData: LeadData = {
      type: type as LeadData["type"],
      email: sanitizeInput(email),
      name: name ? sanitizeInput(name) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      phone: phone ? sanitizeInput(phone) : undefined,
      source: sanitizeInput(source),
      data: data || {},
    }

    // Send lead notification
    await sendLeadNotification(sanitizedLeadData)

    // Log the lead
    console.log("New Lead:", {
      timestamp: new Date().toISOString(),
      type: sanitizedLeadData.type,
      email: sanitizedLeadData.email,
      source: sanitizedLeadData.source,
      hasName: !!sanitizedLeadData.name,
      hasCompany: !!sanitizedLeadData.company,
      hasPhone: !!sanitizedLeadData.phone,
      hasData: !!sanitizedLeadData.data && Object.keys(sanitizedLeadData.data).length > 0,
      ip: ip,
    })

    return NextResponse.json({
      success: true,
      message: "Lead notification sent successfully",
    })
  } catch (error) {
    console.error("Lead Notification Error:", error)

    return NextResponse.json({ error: "Failed to send lead notification" }, { status: 500 })
  }
}

// Get lead statistics (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // This would typically query your database
    // For now, return mock statistics

    const stats = {
      totalLeads: 156,
      thisWeek: 23,
      thisMonth: 89,
      byType: {
        newsletter: 67,
        download: 34,
        quiz: 28,
        calculator: 15,
        evalkit: 12,
      },
      bySource: {
        organic: 45,
        "social-media": 32,
        direct: 28,
        referral: 25,
        email: 18,
        ads: 8,
      },
      conversionRate: 3.2,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Lead Stats Error:", error)

    return NextResponse.json({ error: "Failed to get lead statistics" }, { status: 500 })
  }
}
