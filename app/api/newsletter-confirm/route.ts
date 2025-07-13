import type { NextRequest } from "next/server"
import { validateEmail, sanitizeInput } from "@/lib/validation"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_CONTACT_LIST_ID = process.env.BREVO_CONTACT_LIST_ID || "1"

async function confirmNewsletterSubscription(email: string, token: string) {
  if (!BREVO_API_KEY) {
    console.warn("BREVO_API_KEY not configured, skipping newsletter confirmation")
    return { success: true, message: "Newsletter confirmation simulated" }
  }

  // In a real implementation, you'd:
  // 1. Verify the token against your database
  // 2. Update the contact's status in Brevo
  // 3. Send a welcome email

  // For now, we'll just add the contact to the list
  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [Number.parseInt(BREVO_CONTACT_LIST_ID)],
        updateEnabled: true,
        attributes: {
          CONFIRMED: true,
          CONFIRMED_DATE: new Date().toISOString(),
          SOURCE: "website_confirmation",
        },
      }),
    })

    if (!response.ok && response.status !== 400) {
      // 400 might mean contact already exists
      const error = await response.text()
      throw new Error(`Brevo API error: ${response.status} - ${error}`)
    }

    return { success: true, message: "Newsletter subscription confirmed" }
  } catch (error) {
    console.error("Newsletter confirmation error:", error)
    throw error
  }
}

async function sendWelcomeEmail(email: string) {
  if (!BREVO_API_KEY) return { success: true }

  const welcomeEmailData = {
    sender: {
      name: "KIVISAI Team",
      email: process.env.BREVO_SENDER_EMAIL || "noreply@kivisai.de",
    },
    to: [
      {
        email: email,
        name: email.split("@")[0], // Use email prefix as name fallback
      },
    ],
    subject: "Willkommen beim KIVISAI Newsletter! 🚀",
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #001F3F;">Willkommen bei KIVISAI!</h1>
        
        <p>Vielen Dank für Ihre Anmeldung zu unserem Newsletter. Sie erhalten ab sofort:</p>
        
        <ul>
          <li>🎯 <strong>KI-Insights:</strong> Praktische Tipps für den KI-Einsatz in Ihrem Unternehmen</li>
          <li>📊 <strong>Use Cases:</strong> Erfolgsgeschichten und Anwendungsbeispiele</li>
          <li>🔧 <strong>Tools & Methoden:</strong> Bewährte Ansätze für die KI-Transformation</li>
          <li>📅 <strong>Events:</strong> Einladungen zu Webinaren und Workshops</li>
          <li>💡 <strong>Trends:</strong> Die neuesten Entwicklungen im KI-Bereich</li>
        </ul>
        
        <h2 style="color: #4A5D23;">Ihre nächsten Schritte:</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>🎯 Kostenlose KI-Bewertung</h3>
          <p>Nutzen Sie unser <a href="https://kivisai.de/evalkit" style="color: #E67E22;">EVALKIT</a> für eine erste Einschätzung Ihres KI-Potentials.</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>📚 Wissensbereich erkunden</h3>
          <p>Stöbern Sie in unserem <a href="https://kivisai.de/wissen" style="color: #E67E22;">Wissensbereich</a> mit Artikeln, Downloads und Insights.</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>💬 Persönliches Gespräch</h3>
          <p>Buchen Sie ein <a href="https://kivisai.de/termin" style="color: #E67E22;">kostenloses Erstgespräch</a> für Ihre individuelle KI-Strategie.</p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        
        <p>Bei Fragen antworten Sie einfach auf diese E-Mail - wir helfen gerne weiter!</p>
        
        <p>Beste Grüße<br>
        <strong>Ihr KIVISAI Team</strong></p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>KIVISAI GmbH | E-Mail: info@kivisai.de | Web: https://kivisai.de</p>
          <p>Sie erhalten diese E-Mail, weil Sie sich für unseren Newsletter angemeldet haben.</p>
          <p><a href="{{unsubscribe}}" style="color: #666;">Abmelden</a></p>
        </div>
      </div>
    `,
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(welcomeEmailData),
    })

    return response.ok ? await response.json() : { success: false }
  } catch (error) {
    console.error("Welcome email error:", error)
    return { success: false }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const token = searchParams.get("token")

    if (!email || !token) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ungültiger Link - KIVISAI</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .error { color: #dc3545; background: #f8d7da; padding: 15px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <h1>Ungültiger Bestätigungslink</h1>
          <div class="error">
            <p>Der Bestätigungslink ist ungültig oder unvollständig.</p>
          </div>
          <p><a href="https://kivisai.de">Zurück zur Website</a></p>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      )
    }

    // Validate email
    const emailValidation = validateEmail(email)
    if (!emailValidation.isValid) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Ungültige E-Mail - KIVISAI</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .error { color: #dc3545; background: #f8d7da; padding: 15px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <h1>Ungültige E-Mail-Adresse</h1>
          <div class="error">
            <p>Die E-Mail-Adresse ist ungültig.</p>
          </div>
          <p><a href="https://kivisai.de">Zurück zur Website</a></p>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      )
    }

    // Sanitize input
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedToken = sanitizeInput(token)

    try {
      // Confirm subscription
      await confirmNewsletterSubscription(sanitizedEmail, sanitizedToken)

      // Send welcome email
      await sendWelcomeEmail(sanitizedEmail)

      // Log successful confirmation
      console.log("Newsletter confirmation successful:", {
        email: sanitizedEmail,
        timestamp: new Date().toISOString(),
        ip: request.headers.get("x-forwarded-for") || "unknown",
      })

      // Return success page
      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Newsletter bestätigt - KIVISAI</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { 
              font-family: Arial, sans-serif; 
              max-width: 600px; 
              margin: 50px auto; 
              padding: 20px; 
              background: linear-gradient(135deg, #001F3F 0%, #4A5D23 100%);
              color: white;
              min-height: 100vh;
            }
            .container {
              background: rgba(255, 255, 255, 0.95);
              color: #333;
              padding: 40px;
              border-radius: 10px;
              text-align: center;
            }
            .success { 
              color: #28a745; 
              background: #d4edda; 
              padding: 20px; 
              border-radius: 8px; 
              margin: 20px 0;
            }
            .btn {
              display: inline-block;
              background: #E67E22;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 5px;
              margin: 10px;
            }
            .btn:hover { background: #d35400; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🎉 Newsletter erfolgreich bestätigt!</h1>
            <div class="success">
              <p><strong>Vielen Dank!</strong> Ihre E-Mail-Adresse <strong>${sanitizedEmail}</strong> wurde erfolgreich bestätigt.</p>
            </div>
            
            <p>Sie erhalten in Kürze eine Willkommens-E-Mail mit wertvollen Informationen und Ihren nächsten Schritten.</p>
            
            <h2>Was Sie jetzt tun können:</h2>
            
            <a href="https://kivisai.de/evalkit" class="btn">🎯 EVALKIT nutzen</a>
            <a href="https://kivisai.de/wissen" class="btn">📚 Wissen erkunden</a>
            <a href="https://kivisai.de/termin" class="btn">💬 Termin buchen</a>
            
            <p style="margin-top: 30px;">
              <a href="https://kivisai.de">← Zurück zur KIVISAI Website</a>
            </p>
          </div>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      )
    } catch (error) {
      console.error("Newsletter confirmation error:", error)

      return new Response(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Fehler bei Bestätigung - KIVISAI</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .error { color: #dc3545; background: #f8d7da; padding: 15px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <h1>Fehler bei der Bestätigung</h1>
          <div class="error">
            <p>Es ist ein Fehler bei der Newsletter-Bestätigung aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.</p>
          </div>
          <p><a href="https://kivisai.de/kontakt">Kontakt aufnehmen</a> | <a href="https://kivisai.de">Zur Website</a></p>
        </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        },
      )
    }
  } catch (error) {
    console.error("Newsletter confirmation route error:", error)

    return new Response(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Systemfehler - KIVISAI</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
          .error { color: #dc3545; background: #f8d7da; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>Systemfehler</h1>
        <div class="error">
          <p>Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.</p>
        </div>
        <p><a href="https://kivisai.de">Zurück zur Website</a></p>
      </body>
      </html>
    `,
      {
        headers: { "Content-Type": "text/html" },
      },
    )
  }
}
