import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"
import { validateEmail, validateRequired, sanitizeInput } from "@/lib/validation"
import * as z from 'zod'
import { config } from '@/lib/config'

// Brevo (Sendinblue) API configuration
const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "noreply@kivisai.de"
const BREVO_TEAM_EMAIL = process.env.BREVO_TEAM_EMAIL || "team@kivisai.de"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  service?: string
  budget?: string
  timeline?: string
  newsletter?: boolean
}

const contactFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  organization: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(10),
  subscribe: z.boolean().optional(),
})

async function sendTransactionalEmail(data: z.infer<typeof contactFormSchema>) {
  // Check if Brevo API key is configured
  if (!config.brevo.apiKey) {
    console.warn("Brevo API key not configured - email sending disabled")
    // In development, log the email content instead of sending
    if (process.env.NODE_ENV === 'development') {
      console.log("=== DEVELOPMENT MODE: Email Content ===")
      console.log("To:", config.brevo.teamEmail)
      console.log("Subject:", `Neue Kontaktanfrage von ${data.firstName} ${data.lastName}`)
      console.log("Content:", {
        firstName: data.firstName,
        lastName: data.lastName,
        organization: data.organization,
        email: data.email,
        message: data.message,
        subscribe: data.subscribe
      })
      console.log("=== END EMAIL CONTENT ===")
      return // Don't throw error in development
    }
    throw new Error('Email service not configured')
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.brevo.apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'Kivisai Website', email: config.brevo.senderEmail },
        to: [{ email: config.brevo.teamEmail, name: 'Kivisai Team' }],
        subject: `Neue Kontaktanfrage von ${data.firstName} ${data.lastName}`,
        htmlContent: `
          <h1>Neue Kontaktanfrage</h1>
          <p><strong>Vorname:</strong> ${data.firstName}</p>
          <p><strong>Nachname:</strong> ${data.lastName}</p>
          <p><strong>Organisation:</strong> ${data.organization || 'Nicht angegeben'}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${data.message}</p>
          <p>Newsletter abonniert: ${data.subscribe ? 'Ja' : 'Nein'}</p>
        `,
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      console.error("Failed to send email:", errorData)
      throw new Error(`Email sending failed: ${errorData.message || 'Unknown error'}`)
    }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

async function addContactToBrevoList(email: string) {
  // Check if Brevo API key is configured
  if (!config.brevo.apiKey || !config.brevo.contactListId) {
    console.warn("Brevo API key or contact list ID not configured - contact list addition disabled")
    if (process.env.NODE_ENV === 'development') {
      console.log("=== DEVELOPMENT MODE: Would add to contact list ===")
      console.log("Email:", email)
      console.log("List ID:", config.brevo.contactListId)
      console.log("=== END CONTACT LIST ADDITION ===")
      return // Don't throw error in development
    }
    throw new Error('Contact list service not configured')
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.brevo.apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(config.brevo.contactListId, 10)],
        updateEnabled: true
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      console.error("Failed to add contact:", errorData)
      throw new Error(`Adding contact to list failed: ${errorData.message || 'Unknown error'}`)
    }
  } catch (error) {
    console.error("Contact list addition error:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || 'unknown')
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 })
    }

    const body = await request.json()
    const parsedData = contactFormSchema.parse(body)

    // Send email
    try {
      await sendTransactionalEmail(parsedData)
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // In development, don't fail the entire request if email fails
      if (process.env.NODE_ENV !== 'development') {
        throw emailError
      }
    }

    // Add to contact list if newsletter subscription requested
    if (parsedData.subscribe) {
      try {
        await addContactToBrevoList(parsedData.email)
      } catch (listError) {
        console.error("Contact list addition failed:", listError)
        // In development, don't fail the entire request if list addition fails
        if (process.env.NODE_ENV !== 'development') {
          throw listError
        }
      }
    }

    // Log the contact form submission
    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      firstName: parsedData.firstName,
      lastName: parsedData.lastName,
      organization: parsedData.organization,
      email: parsedData.email,
      message: parsedData.message,
      newsletterOptIn: parsedData.subscribe,
      ip: request.headers.get("x-forwarded-for") || "unknown",
    })

    return NextResponse.json({ 
      message: 'Success',
      emailSent: !!config.brevo.apiKey,
      addedToNewsletter: parsedData.subscribe && !!config.brevo.apiKey
    }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 })
    }
    console.error("Contact form error:", error)
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    }, { status: 500 })
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "contact-form",
    timestamp: new Date().toISOString(),
    brevoConfigured: !!BREVO_API_KEY,
    environment: process.env.NODE_ENV,
  })
}
