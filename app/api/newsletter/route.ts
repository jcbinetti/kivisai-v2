import { NextResponse, type NextRequest } from "next/server"
import { validateEmail, sanitizeInput } from "@/lib/validation"
import { rateLimit } from "@/lib/rate-limiter"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_CONTACT_LIST_ID = process.env.BREVO_CONTACT_LIST_ID || "1"
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "noreply@kivisai.de"

interface NewsletterSubscription {
  email: string
  name?: string
  company?: string
  interests?: string[]
  source?: string
  doubleOptIn?: boolean
}

// --- helper: safely decode JSON body ----------------------------------------
async function safeJson(req: NextRequest) {
  try {
    const text = await req.text()
    if (!text || text.trim() === "") {
      console.log("Empty request body received")
      return null
    }
    return JSON.parse(text)
  } catch (error) {
    console.error("JSON parsing error:", error)
    return null
  }
}

// liest sicher den Body einer Response ein und gibt {} zurück, falls nichts da ist
async function safeParseResponseJSON(res: Response) {
  const ct = res.headers.get("content-type") || ""
  if (!ct.includes("application/json")) return {}
  const txt = await res.text()
  if (!txt || txt.trim() === "") return {}
  try {
    return JSON.parse(txt)
  } catch {
    return {}
  }
}

async function addToBrevoList(subscription: NewsletterSubscription) {
  if (!BREVO_API_KEY) {
    console.log("BREVO_API_KEY not configured, using mock mode")
    return { success: true, contactId: "mock-id" }
  }

  console.log("Adding to Brevo list:", subscription.email)

  const contactData = {
    email: subscription.email,
    listIds: [Number.parseInt(BREVO_CONTACT_LIST_ID)],
    updateEnabled: true,
    attributes: {
      FIRSTNAME: subscription.name || "",
      COMPANY: subscription.company || "",
      INTERESTS: subscription.interests?.join(", ") || "",
      SOURCE: subscription.source || "website",
      SIGNUP_DATE: new Date().toISOString(),
      DOUBLE_OPT_IN: subscription.doubleOptIn || false,
    },
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    })

    console.log("Brevo API response status:", response.status)

    if (!response.ok && response.status !== 400) {
      const error = await response.text()
      console.error("Brevo API error:", error)
      throw new Error(`Brevo API error: ${response.status} - ${error}`)
    }

    const result = response.status === 400 ? { id: "existing" } : await safeParseResponseJSON(response)
    console.log("Brevo result:", result)
    return { success: true, contactId: result.id }
  } catch (error) {
    console.error("Error in addToBrevoList:", error)
    throw error
  }
}

async function sendConfirmationEmail(subscription: NewsletterSubscription) {
  if (!BREVO_API_KEY || !subscription.doubleOptIn) {
    return { success: true }
  }

  // Generate confirmation token (in production, store this in database)
  const confirmationToken = Buffer.from(`${subscription.email}:${Date.now()}`).toString("base64")
  const confirmationUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://kivisai.de"}/api/newsletter-confirm?email=${encodeURIComponent(subscription.email)}&token=${confirmationToken}`

  const confirmationEmailData = {
    sender: {
      name: "KIVISAI Team",
      email: BREVO_SENDER_EMAIL,
    },
    to: [
      {
        email: subscription.email,
        name: subscription.name || subscription.email.split("@")[0],
      },
    ],
    subject: "Bitte bestätigen Sie Ihre Newsletter-Anmeldung",
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #001F3F;">Newsletter-Anmeldung bestätigen</h1>
        
        <p>Hallo${subscription.name ? ` ${subscription.name}` : ""},</p>
        
        <p>vielen Dank für Ihr Interesse an unserem KIVISAI Newsletter!</p>
        
        <p>Um Ihre Anmeldung abzuschließen, klicken Sie bitte auf den folgenden Link:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${confirmationUrl}" 
             style="background: #E67E22; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
            ✅ Newsletter-Anmeldung bestätigen
          </a>
        </div>
        
        <p>Oder kopieren Sie diesen Link in Ihren Browser:</p>
        <p style="word-break: break-all; background: #f8f9fa; padding: 10px; border-radius: 4px;">
          ${confirmationUrl}
        </p>
        
        <h2 style="color: #4A5D23;">Was Sie erwartet:</h2>
        <ul>
          <li>🎯 Praktische KI-Insights für Ihr Unternehmen</li>
          <li>📊 Erfolgsgeschichten und Use Cases</li>
          <li>🔧 Tools und Methoden für die KI-Transformation</li>
          <li>📅 Einladungen zu exklusiven Events</li>
          <li>💡 Die neuesten KI-Trends und Entwicklungen</li>
        </ul>
        
        <p>Falls Sie sich nicht für unseren Newsletter angemeldet haben, können Sie diese E-Mail einfach ignorieren.</p>
        
        <p>Beste Grüße<br>
        <strong>Ihr KIVISAI Team</strong></p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        
        <p style="font-size: 12px; color: #666;">
          KIVISAI GmbH | E-Mail: info@kivisai.de | Web: https://kivisai.de
        </p>
      </div>
    `,
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify(confirmationEmailData),
  })

  return response.ok ? await safeParseResponseJSON(response) : { success: false }
}

export async function POST(request: NextRequest) {
  console.log("Newsletter API called - Headers:", Object.fromEntries(request.headers.entries()))

  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 })
    }

    console.log("Parsing request body...")
    const body = await safeJson(request)
    console.log("Parsed body:", body)

    if (!body) {
      console.log("No valid body found")
      return NextResponse.json({ error: "Leerer oder ungültiger Request-Body" }, { status: 400 })
    }

    const { email, name, company, interests, source, doubleOptIn = true }: NewsletterSubscription = body

    // Validation
    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      return NextResponse.json({ error: "Gültige E-Mail-Adresse ist erforderlich" }, { status: 400 })
    }

    // Sanitize input
    const sanitizedSubscription: NewsletterSubscription = {
      email: sanitizeInput(email),
      name: name ? sanitizeInput(name) : undefined,
      company: company ? sanitizeInput(company) : undefined,
      interests: interests?.map((interest: string) => sanitizeInput(interest)) || [],
      source: source ? sanitizeInput(source) : "website",
      doubleOptIn,
    }

    try {
      // Add to Brevo list
      const brevoResult = await addToBrevoList(sanitizedSubscription)

      // Send confirmation email if double opt-in is enabled
      let confirmationResult = { success: true }
      if (doubleOptIn) {
        confirmationResult = await sendConfirmationEmail(sanitizedSubscription)
      }

      // Log the subscription
      console.log("Newsletter Subscription:", {
        timestamp: new Date().toISOString(),
        email: sanitizedSubscription.email,
        name: sanitizedSubscription.name,
        company: sanitizedSubscription.company,
        source: sanitizedSubscription.source,
        doubleOptIn,
        brevoContactId: brevoResult.contactId,
        confirmationSent: confirmationResult.success,
        ip: request.headers.get("x-forwarded-for") || "unknown",
      })

      const responseMessage = doubleOptIn
        ? "Vielen Dank! Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anmeldung."
        : "Vielen Dank für Ihre Newsletter-Anmeldung!"

      return NextResponse.json({
        success: true,
        message: responseMessage,
        doubleOptIn,
        confirmationSent: doubleOptIn ? confirmationResult.success : false,
      })
    } catch (error) {
      console.error("Newsletter subscription error:", error)

      return NextResponse.json(
        { error: "Fehler bei der Newsletter-Anmeldung. Bitte versuchen Sie es erneut." },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Newsletter API Error:", error)

    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 },
    )
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ error: "E-Mail-Adresse ist erforderlich" }, { status: 400 })
    }

    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      return NextResponse.json({ error: "Gültige E-Mail-Adresse ist erforderlich" }, { status: 400 })
    }

    if (!BREVO_API_KEY) {
      return NextResponse.json({ success: true, message: "Abmeldung verarbeitet (Demo-Modus)" })
    }

    // Remove from Brevo list
    const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
    })

    if (!response.ok && response.status !== 404) {
      // 404 means contact doesn't exist
      const error = await response.text()
      throw new Error(`Brevo API error: ${response.status} - ${error}`)
    }

    // Log the unsubscription
    console.log("Newsletter Unsubscription:", {
      timestamp: new Date().toISOString(),
      email: sanitizeInput(email),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    })

    return NextResponse.json({
      success: true,
      message: "Sie wurden erfolgreich vom Newsletter abgemeldet.",
    })
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error)

    return NextResponse.json({ error: "Fehler bei der Abmeldung. Bitte versuchen Sie es erneut." }, { status: 500 })
  }
}

// Get newsletter statistics (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json({
        totalSubscribers: 0,
        totalBlacklisted: 0,
        uniqueSubscribers: 0,
        message: "Brevo not configured",
      })
    }

    // Get list statistics from Brevo
    const response = await fetch(`https://api.brevo.com/v3/contacts/lists/${BREVO_CONTACT_LIST_ID}`, {
      headers: {
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
    })

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.status}`)
    }

    const listData = await response.json()

    return NextResponse.json({
      totalSubscribers: listData.totalSubscribers || 0,
      totalBlacklisted: listData.totalBlacklisted || 0,
      uniqueSubscribers: listData.uniqueSubscribers || 0,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Newsletter stats error:", error)

    return NextResponse.json({ error: "Failed to get newsletter statistics" }, { status: 500 })
  }
}
