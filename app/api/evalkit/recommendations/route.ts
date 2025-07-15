import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface EvalkitResponse {
  questionId: string
  answer: string | number
  category: string
}

interface RecommendationRequest {
  responses: EvalkitResponse[]
  companySize?: string
  industry?: string
  currentAIUsage?: string
}

// EVALKIT-specific system prompt for recommendations
const EVALKIT_SYSTEM_PROMPT = `Du bist ein KI-Experte von KIVISAI, der basierend auf EVALKIT-Fragebögen personalisierte Empfehlungen für KI-Transformation gibt.

Deine Aufgabe:
- Analysiere die Antworten aus dem EVALKIT-Fragebogen
- Erstelle personalisierte, praktische Empfehlungen
- Priorisiere die Empfehlungen nach Dringlichkeit und Impact
- Berücksichtige Unternehmensgröße, Branche und aktuellen KI-Status

Empfehlungskategorien:
1. SOFORTIGE MASSNAHMEN (hohe Priorität)
2. STRATEGISCHE PLANUNG (mittlere Priorität)  
3. LANGFRISTIGE ENTWICKLUNG (niedrige Priorität)

Für jede Empfehlung gib an:
- Titel
- Kurze Beschreibung (max. 100 Wörter)
- Geschätzte Umsetzungszeit
- Erwarteter Nutzen
- Nächste Schritte

Antworte strukturiert und auf Deutsch. Maximal 5 Empfehlungen pro Kategorie.`

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ 
        error: "OpenAI API nicht konfiguriert" 
      }, { status: 500 })
    }

    const body: RecommendationRequest = await request.json()
    const { responses, companySize, industry, currentAIUsage } = body

    if (!responses || responses.length === 0) {
      return NextResponse.json({ 
        error: "Keine Antworten für Analyse bereitgestellt" 
      }, { status: 400 })
    }

    // Prepare context for AI analysis
    const context = `
Unternehmenskontext:
- Größe: ${companySize || "Nicht angegeben"}
- Branche: ${industry || "Nicht angegeben"}
- Aktueller KI-Status: ${currentAIUsage || "Nicht angegeben"}

EVALKIT-Antworten:
${responses.map(r => `- ${r.category}: ${r.answer}`).join('\n')}
    `.trim()

    // Generate AI recommendations
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: EVALKIT_SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `Analysiere diese EVALKIT-Antworten und erstelle personalisierte Empfehlungen:\n\n${context}`
        }
      ],
      max_tokens: 1500,
      temperature: 0.7,
    })

    const aiResponse = completion.choices[0]?.message?.content || "Keine Empfehlungen verfügbar."

    // Parse and structure the response
    const recommendations = parseRecommendations(aiResponse)

    return NextResponse.json({
      success: true,
      recommendations,
      rawResponse: aiResponse,
      timestamp: new Date().toISOString(),
      analysisContext: {
        totalResponses: responses.length,
        categories: [...new Set(responses.map(r => r.category))],
        companySize,
        industry,
        currentAIUsage
      }
    })

  } catch (error) {
    console.error("EVALKIT Recommendations Error:", error)
    
    return NextResponse.json({ 
      error: "Fehler bei der Empfehlungsgenerierung. Bitte versuchen Sie es erneut." 
    }, { status: 500 })
  }
}

// Helper function to parse AI response into structured recommendations
function parseRecommendations(aiResponse: string) {
  const recommendations = {
    immediate: [],
    strategic: [],
    longTerm: []
  }

  // Simple parsing - in production, you might want more sophisticated parsing
  const sections = aiResponse.split(/(?:SOFORTIGE MASSNAHMEN|STRATEGISCHE PLANUNG|LANGFRISTIGE ENTWICKLUNG)/i)
  
  if (sections.length >= 2) {
    recommendations.immediate = extractRecommendations(sections[1])
  }
  if (sections.length >= 3) {
    recommendations.strategic = extractRecommendations(sections[2])
  }
  if (sections.length >= 4) {
    recommendations.longTerm = extractRecommendations(sections[3])
  }

  return recommendations
}

function extractRecommendations(text: string) {
  // Simple extraction - look for numbered items or bullet points
  const lines = text.split('\n').filter(line => 
    line.trim().length > 0 && 
    (line.match(/^\d+\./) || line.match(/^[-•]/) || line.match(/^Titel:/))
  )
  
  return lines.slice(0, 5) // Limit to 5 recommendations per category
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "evalkit-recommendations",
    timestamp: new Date().toISOString(),
    openaiConfigured: !!process.env.OPENAI_API_KEY,
  })
} 