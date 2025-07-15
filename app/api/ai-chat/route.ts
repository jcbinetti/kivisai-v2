import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limiter"
import { validateRequired, sanitizeInput } from "@/lib/validation"
import OpenAI from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// KIVISAI-specific system prompt
const KIVISAI_SYSTEM_PROMPT = `Du bist ein KI-Assistent von KIVISAI, einem Beratungsunternehmen für KI-Transformation und strategisches Coaching.

Deine Rolle:
- Berate Unternehmen bei KI-Implementierung und digitaler Transformation
- Erkläre KIVISAI-Leistungen: Coaching, Training, KI-Begleitung, Prototyping
- Beantworte Fragen zu INQA-Coaching und Förderungen
- Leite Interessenten zu passenden Kontaktmöglichkeiten weiter

KIVISAI-Leistungen:
- Strategisches Coaching & Training
- KI-Begleitung und Potenzialanalyse
- KI-Prototyping und -Entwicklung
- INQA-Coaching (gefördert)
- Transformationsberatung

Antworte freundlich, professionell und auf Deutsch. Bei konkreten Anfragen für Beratung, leite zu einem Termin oder Kontakt weiter.

Maximale Antwortlänge: 300 Wörter.`

// Generate AI response using OpenAI
const generateAIResponse = async (message: string, context?: string): Promise<string> => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key not configured")
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo" for cost optimization
      messages: [
        {
          role: "system",
          content: KIVISAI_SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `Kontext: ${context || "Allgemeine Anfrage"}\n\nNachricht: ${message}`
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren."
  } catch (error) {
    console.error("OpenAI API Error:", error)
    
    // Fallback responses if OpenAI fails
    const fallbackResponses = [
      "Das ist eine interessante Frage zur KI-Transformation. Lassen Sie uns das gemeinsam durchdenken. Möchten Sie einen Termin für ein persönliches Gespräch vereinbaren?",
      "Basierend auf unserer Erfahrung bei KIVISAI können wir Ihnen folgende Perspektive anbieten. Für eine detaillierte Beratung empfehle ich ein Coaching-Gespräch.",
      "KI-Implementierung erfordert eine strategische Herangehensweise. Ich kann Ihnen gerne einen Termin mit einem unserer Experten vermitteln.",
    ]
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    const rateLimitResult = await rateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }, { status: 429 })
    }

    const body = await request.json()
    const { message, context } = body

    // Validation
    const messageValidation = validateRequired(message)
    if (!messageValidation.isValid) {
      return NextResponse.json({ error: "Nachricht ist erforderlich" }, { status: 400 })
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message)
    const sanitizedContext = context ? sanitizeInput(JSON.stringify(context)) : ""

    // Check message length
    if (sanitizedMessage.length > 1000) {
      return NextResponse.json({ error: "Nachricht ist zu lang (max. 1000 Zeichen)" }, { status: 400 })
    }

    // Generate AI response
    const aiResponse = await generateAIResponse(sanitizedMessage, sanitizedContext)

    // Log interaction (optional - for analytics)
    console.log("AI Chat Interaction:", {
      timestamp: new Date().toISOString(),
      messageLength: sanitizedMessage.length,
      hasContext: !!sanitizedContext,
      ip: ip,
    })

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString(),
      context: "kivisai-assistant",
    })
  } catch (error) {
    console.error("AI Chat Error:", error)

    return NextResponse.json({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }, { status: 500 })
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "ai-chat",
    timestamp: new Date().toISOString(),
    openaiConfigured: !!process.env.OPENAI_API_KEY,
  })
}
