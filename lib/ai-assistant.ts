// AI-Powered Customer Assistant
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export interface ChatMessage {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: number
  metadata?: {
    intent?: string
    confidence?: number
    leadScore?: number
    suggestedActions?: string[]
  }
}

export interface ChatSession {
  id: string
  userId?: string
  email?: string
  messages: ChatMessage[]
  context: {
    currentPage: string
    userAgent: string
    referrer: string
    sessionDuration: number
    previousVisits: number
  }
  leadProfile?: {
    score: number
    qualification: string
    interests: string[]
  }
}

class AIAssistantManager {
  private sessions: Map<string, ChatSession> = new Map()
  private knowledgeBase = {
    services: [
      {
        name: "KI-Potenzialanalyse",
        description: "Umfassende Analyse der KI-Möglichkeiten in Ihrem Unternehmen",
        price: "ab 2.500€",
        duration: "2-4 Wochen",
        keywords: ["potenzial", "analyse", "bewertung", "möglichkeiten"],
      },
      {
        name: "KI-Prototyping",
        description: "Entwicklung und Test von KI-Prototypen für Ihre Anwendungsfälle",
        price: "ab 15.000€",
        duration: "4-8 Wochen",
        keywords: ["prototyp", "entwicklung", "test", "mvp"],
      },
    ],
    faqs: [
      {
        question: "Was kostet eine KI-Beratung?",
        answer: "Die Kosten variieren je nach Umfang. Eine Potenzialanalyse startet ab 2.500€, Prototyping ab 15.000€.",
        keywords: ["kosten", "preis", "budget"],
      },
      {
        question: "Wie lange dauert ein KI-Projekt?",
        answer: "Je nach Komplexität 2-24 Wochen. Eine Potenzialanalyse dauert 2-4 Wochen, Prototyping 4-8 Wochen.",
        keywords: ["dauer", "zeit", "timeline"],
      },
    ],
  }

  async processMessage(sessionId: string, userMessage: string, context?: any): Promise<ChatMessage> {
    let session = this.sessions.get(sessionId)

    if (!session) {
      session = this.createNewSession(sessionId, context)
    }

    // Add user message
    const userMsg: ChatMessage = {
      id: this.generateId(),
      role: "user",
      content: userMessage,
      timestamp: Date.now(),
    }
    session.messages.push(userMsg)

    // Analyze intent and extract information
    const intent = await this.analyzeIntent(userMessage)
    const extractedInfo = await this.extractUserInfo(userMessage)

    // Update lead profile
    if (extractedInfo.email) {
      session.email = extractedInfo.email
      this.updateLeadProfile(session, intent, extractedInfo)
    }

    // Generate AI response
    const assistantResponse = await this.generateResponse(session, userMessage, intent)

    const assistantMsg: ChatMessage = {
      id: this.generateId(),
      role: "assistant",
      content: assistantResponse.content,
      timestamp: Date.now(),
      metadata: {
        intent: intent.name,
        confidence: intent.confidence,
        leadScore: session.leadProfile?.score,
        suggestedActions: assistantResponse.suggestedActions,
      },
    }

    session.messages.push(assistantMsg)
    this.sessions.set(sessionId, session)

    // Track interaction for analytics
    this.trackChatInteraction(session, intent, extractedInfo)

    return assistantMsg
  }

  private createNewSession(sessionId: string, context?: any): ChatSession {
    return {
      id: sessionId,
      messages: [],
      context: {
        currentPage: context?.currentPage || "/",
        userAgent: context?.userAgent || "",
        referrer: context?.referrer || "",
        sessionDuration: 0,
        previousVisits: context?.previousVisits || 0,
      },
    }
  }

  private async analyzeIntent(message: string) {
    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `
        Analysiere die folgende Nachricht und bestimme die Absicht des Nutzers.
        
        Mögliche Absichten:
        - service_inquiry: Fragen zu unseren Dienstleistungen
        - pricing_question: Fragen zu Preisen und Kosten
        - contact_request: Möchte Kontakt aufnehmen
        - demo_request: Möchte Demo oder Beratung
        - technical_question: Technische Fragen zu KI
        - general_info: Allgemeine Informationen
        - complaint: Beschwerde oder Problem
        
        Nachricht: "${message}"
        
        Antworte nur mit JSON: {"name": "intent_name", "confidence": 0.95, "entities": ["entity1", "entity2"]}
      `,
    })

    try {
      return JSON.parse(text)
    } catch {
      return { name: "general_info", confidence: 0.5, entities: [] }
    }
  }

  private async extractUserInfo(message: string) {
    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `
        Extrahiere Benutzerinformationen aus der folgenden Nachricht:
        
        Nachricht: "${message}"
        
        Suche nach:
        - E-Mail-Adressen
        - Firmennamen
        - Telefonnummern
        - Namen
        - Branche/Industrie
        
        Antworte nur mit JSON: {"email": "...", "company": "...", "phone": "...", "name": "...", "industry": "..."}
      `,
    })

    try {
      return JSON.parse(text)
    } catch {
      return {}
    }
  }

  private async generateResponse(session: ChatSession, userMessage: string, intent: any) {
    const systemPrompt = `
      Du bist ein KI-Assistent für KIVISAI, ein Unternehmen für KI-Beratung und Transformation.
      
      Unternehmensinformationen:
      - KIVISAI hilft Unternehmen bei der KI-Transformation
      - Hauptleistungen: KI-Potenzialanalyse, KI-Prototyping, Coaching & Training
      - Zielgruppe: KMU und mittelständische Unternehmen
      - Ansatz: Menschlich, regenerativ, wirksam
      
      Verfügbare Services: ${JSON.stringify(this.knowledgeBase.services)}
      
      Häufige Fragen: ${JSON.stringify(this.knowledgeBase.faqs)}
      
      Kontext der Unterhaltung:
      - Aktuelle Seite: ${session.context.currentPage}
      - Bisherige Nachrichten: ${session.messages.length}
      - Lead-Score: ${session.leadProfile?.score || 0}
      
      Erkannte Absicht: ${intent.name}
      
      Antworte freundlich, professionell und hilfreich auf Deutsch. 
      Biete konkrete nächste Schritte an, wenn angemessen.
      Halte Antworten prägnant (max. 150 Wörter).
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      messages: [
        { role: "system", content: systemPrompt },
        ...session.messages.slice(-5).map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        { role: "user", content: userMessage },
      ],
    })

    // Generate suggested actions based on intent
    const suggestedActions = this.generateSuggestedActions(intent, session)

    return {
      content: text,
      suggestedActions,
    }
  }

  private generateSuggestedActions(intent: any, session: ChatSession): string[] {
    const actions: string[] = []

    switch (intent.name) {
      case "service_inquiry":
        actions.push("Kostenlose Potenzialanalyse buchen", "Mehr über unsere Services erfahren")
        break
      case "pricing_question":
        actions.push("Individuelles Angebot anfordern", "ROI-Rechner verwenden")
        break
      case "demo_request":
        actions.push("Demo-Termin vereinbaren", "Kostenlose Beratung buchen")
        break
      case "contact_request":
        actions.push("Kontaktformular ausfüllen", "Direkten Anruf vereinbaren")
        break
      default:
        actions.push("Mehr erfahren", "Kontakt aufnehmen")
    }

    return actions
  }

  private updateLeadProfile(session: ChatSession, intent: any, extractedInfo: any) {
    if (!session.leadProfile) {
      session.leadProfile = {
        score: 0,
        qualification: "cold",
        interests: [],
      }
    }

    // Update score based on intent
    const scoreMap = {
      service_inquiry: 5,
      pricing_question: 8,
      demo_request: 15,
      contact_request: 10,
      technical_question: 3,
    }

    session.leadProfile.score += scoreMap[intent.name as keyof typeof scoreMap] || 1

    // Update interests
    if (intent.entities) {
      session.leadProfile.interests.push(...intent.entities)
    }

    // Update qualification
    if (session.leadProfile.score >= 20) {
      session.leadProfile.qualification = "hot"
    } else if (session.leadProfile.score >= 10) {
      session.leadProfile.qualification = "warm"
    }
  }

  private trackChatInteraction(session: ChatSession, intent: any, extractedInfo: any) {
    // Track in analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "chat_interaction", {
        intent: intent.name,
        confidence: intent.confidence,
        lead_score: session.leadProfile?.score || 0,
        has_email: !!extractedInfo.email,
        message_count: session.messages.length,
      })
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  getSession(sessionId: string): ChatSession | undefined {
    return this.sessions.get(sessionId)
  }

  async getSmartSuggestions(sessionId: string, currentInput: string): Promise<string[]> {
    const session = this.sessions.get(sessionId)
    if (!session) return []

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `
        Basierend auf der bisherigen Unterhaltung und der aktuellen Eingabe,
        schlage 3 hilfreiche Vervollständigungen vor.
        
        Bisherige Nachrichten: ${session.messages
          .slice(-3)
          .map((m) => m.content)
          .join(", ")}
        Aktuelle Eingabe: "${currentInput}"
        
        Antworte nur mit einem JSON-Array von Strings: ["Vorschlag 1", "Vorschlag 2", "Vorschlag 3"]
      `,
    })

    try {
      return JSON.parse(text)
    } catch {
      return []
    }
  }
}

export const aiAssistant = new AIAssistantManager()
