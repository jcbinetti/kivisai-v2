// EVALKIT Bewertungslogik und Auswertung

export interface EvaluationResult {
  role: string
  scores: {
    THINK: number
    ENABLE: number
    SHARE: number
    GROW: number
    REFLECT: number
    overall: number
  }
  level: "beginner" | "intermediate" | "advanced" | "expert"
  badge: string
  recommendations: string[]
  strengths: string[]
  developmentAreas: string[]
  answers: Record<string, number> // Raw questionnaire responses
}

export interface BenchmarkData {
  industry: string
  companySize: string
  averageScores: {
    THINK: number
    ENABLE: number
    SHARE: number
    GROW: number
    REFLECT: number
    overall: number
  }
  sampleSize: number
}

export function calculateScores(answers: Record<string, number>, roleId: string): EvaluationResult {
  const categories = ["THINK", "ENABLE", "SHARE", "GROW", "REFLECT"] as const
  const scores = {} as any

  // Berechne Durchschnitt pro Kategorie
  categories.forEach((category) => {
    const categoryAnswers = Object.entries(answers)
      .filter(([key]) => key.includes(category.toLowerCase()))
      .map(([, value]) => value)

    scores[category] =
      categoryAnswers.length > 0 ? categoryAnswers.reduce((sum, val) => sum + val, 0) / categoryAnswers.length : 0
  })

  // Gesamtscore
  scores.overall = categories.reduce((sum, cat) => sum + scores[cat], 0) / categories.length

  // Level bestimmen
  const level = determineLevel(scores.overall)

  // Badge generieren
  const badge = generateBadge(roleId, level, scores)

  // Empfehlungen basierend auf Schwächen
  const recommendations = generateRecommendations(scores, roleId)

  // Stärken und Entwicklungsfelder
  const strengths = getStrengths(scores)
  const developmentAreas = getDevelopmentAreas(scores)

  return {
    role: roleId,
    scores,
    level,
    badge,
    recommendations,
    strengths,
    developmentAreas,
    answers,
  }
}

function determineLevel(overallScore: number): "beginner" | "intermediate" | "advanced" | "expert" {
  if (overallScore >= 4.5) return "expert"
  if (overallScore >= 3.5) return "advanced"
  if (overallScore >= 2.5) return "intermediate"
  return "beginner"
}

function generateBadge(roleId: string, level: string, scores: any): string {
  const roleBadges = {
    mensch: {
      beginner: "KI-Entdecker",
      intermediate: "KI-Anwender",
      advanced: "KI-Gestalter",
      expert: "KI-Pionier",
    },
    team: {
      beginner: "Team-Starter",
      intermediate: "Team-Enabler",
      advanced: "Team-Transformer",
      expert: "Team-Innovator",
    },
    organisation: {
      beginner: "Organisations-Scout",
      intermediate: "Organisations-Builder",
      advanced: "Organisations-Leader",
      expert: "Organisations-Visionär",
    },
    oekosystem: {
      beginner: "Netzwerk-Teilnehmer",
      intermediate: "Netzwerk-Connector",
      advanced: "Netzwerk-Orchestrator",
      expert: "Ökosystem-Architekt",
    },
  }

  return roleBadges[roleId as keyof typeof roleBadges]?.[level as keyof typeof roleBadges[keyof typeof roleBadges]] || "KI-Lernender"
}

function generateRecommendations(scores: any, roleId: string): string[] {
  const recommendations: string[] = []

  // Schwächste Kategorie identifizieren
  const weakestCategory = Object.entries(scores)
    .filter(([key]) => key !== "overall")
    .sort(([, a], [, b]) => (a as number) - (b as number))[0][0]

  const roleRecommendations = {
    mensch: {
      THINK: [
        "Besuchen Sie unsere KI-Grundlagen Webinare",
        "Lesen Sie unseren KI-Glossar",
        "Nehmen Sie an einem KI-Einsteiger Workshop teil",
      ],
      ENABLE: [
        "Starten Sie mit unserem KI-Tool Starter-Kit",
        "Buchen Sie ein persönliches KI-Coaching",
        "Probieren Sie unsere empfohlenen KI-Tools aus",
      ],
      SHARE: [
        "Treten Sie unserem AI Explorer Club bei",
        "Teilen Sie Ihre Erfahrungen in unserem Community Forum",
        "Werden Sie KI-Botschafter in Ihrem Umfeld",
      ],
      GROW: [
        "Entwickeln Sie einen persönlichen KI-Lernplan",
        "Abonnieren Sie unseren KI-Newsletter",
        "Setzen Sie sich konkrete KI-Lernziele",
      ],
      REFLECT: [
        "Reflektieren Sie Ihre KI-Ethik mit unserem Leitfaden",
        "Diskutieren Sie KI-Auswirkungen in unserem Reflexions-Circle",
        "Entwickeln Sie Ihre persönliche KI-Philosophie",
      ],
    },
    team: {
      THINK: [
        "Organisieren Sie Team-Workshops zu KI-Grundlagen",
        "Entwickeln Sie eine gemeinsame KI-Vision",
        "Analysieren Sie Ihre Teamprozesse auf KI-Potenziale",
      ],
      ENABLE: [
        "Starten Sie ein KI-Pilotprojekt im Team",
        "Etablieren Sie KI-Experimentierräume",
        "Schulen Sie Ihr Team in KI-Tools",
      ],
      SHARE: [
        "Implementieren Sie regelmäßige KI-Retrospektiven",
        "Schaffen Sie Wissensaustausch-Formate",
        "Dokumentieren Sie Ihre KI-Learnings",
      ],
      GROW: [
        "Definieren Sie Team-KI-Ziele",
        "Messen Sie Ihren KI-Fortschritt",
        "Planen Sie kontinuierliche KI-Weiterbildung",
      ],
      REFLECT: [
        "Entwickeln Sie Team-KI-Leitlinien",
        "Diskutieren Sie ethische KI-Fragen im Team",
        "Reflektieren Sie KI-Auswirkungen auf Ihre Arbeitsweise",
      ],
    },
    organisation: {
      THINK: [
        "Entwickeln Sie eine organisationsweite KI-Strategie",
        "Führen Sie eine KI-Potenzialanalyse durch",
        "Schulen Sie Ihre Führungskräfte in KI-Themen",
      ],
      ENABLE: [
        "Investieren Sie in KI-Infrastruktur",
        "Bauen Sie interne KI-Kompetenzen auf",
        "Starten Sie strategische KI-Projekte",
      ],
      SHARE: [
        "Etablieren Sie organisationsweite KI-Kommunikation",
        "Schaffen Sie KI-Communities of Practice",
        "Teilen Sie KI-Erfolgsgeschichten",
      ],
      GROW: [
        "Implementieren Sie KI-Kennzahlen",
        "Fördern Sie organisationales KI-Lernen",
        "Entwickeln Sie KI-Innovationskultur",
      ],
      REFLECT: [
        "Entwickeln Sie KI-Governance-Strukturen",
        "Implementieren Sie KI-Ethik-Guidelines",
        "Reflektieren Sie gesellschaftliche KI-Verantwortung",
      ],
    },
    oekosystem: {
      THINK: [
        "Entwickeln Sie gemeinsame KI-Visionen im Netzwerk",
        "Schaffen Sie Reflexionsräume für KI-Themen",
        "Analysieren Sie systemische KI-Potenziale",
      ],
      ENABLE: [
        "Etablieren Sie KI-Interoperabilitätsstandards",
        "Initiieren Sie gemeinsame KI-Projekte",
        "Schaffen Sie geteilte KI-Infrastrukturen",
      ],
      SHARE: [
        "Implementieren Sie offene KI-Wissensplattformen",
        "Fördern Sie transparente KI-Kommunikation",
        "Schaffen Sie multilaterale KI-Austauschformate",
      ],
      GROW: [
        "Entwickeln Sie kollektive KI-Lernformate",
        "Experimentieren Sie mit neuen Governance-Modellen",
        "Fördern Sie cross-sektorales KI-Lernen",
      ],
      REFLECT: [
        "Implementieren Sie Netzwerk-KI-Ethik",
        "Schaffen Sie Institutionen für KI-Reflexion",
        "Entwickeln Sie adaptive Governance-Strukturen",
      ],
    },
  }

  const categoryRecs = roleRecommendations[roleId as keyof typeof roleRecommendations]?.[weakestCategory as keyof typeof roleRecommendations[keyof typeof roleRecommendations]] || []
  recommendations.push(...categoryRecs.slice(0, 3))

  return recommendations
}

function getStrengths(scores: any): string[] {
  const strengths: string[] = []

  Object.entries(scores)
    .filter(([key]) => key !== "overall")
    .forEach(([category, score]) => {
      if ((score as number) >= 4.0) {
        strengths.push(getCategoryStrengthText(category, score as number))
      }
    })

  return strengths
}

function getDevelopmentAreas(scores: any): string[] {
  const areas: string[] = []

  Object.entries(scores)
    .filter(([key]) => key !== "overall")
    .forEach(([category, score]) => {
      if ((score as number) < 3.0) {
        areas.push(getCategoryDevelopmentText(category, score as number))
      }
    })

  return areas
}

function getCategoryStrengthText(category: string, score: number): string {
  const texts = {
    THINK: `Starkes konzeptionelles Verständnis von KI (${score.toFixed(1)}/5)`,
    ENABLE: `Sehr gute praktische KI-Umsetzung (${score.toFixed(1)}/5)`,
    SHARE: `Exzellenter Wissensaustausch zu KI (${score.toFixed(1)}/5)`,
    GROW: `Hervorragende KI-Lernorientierung (${score.toFixed(1)}/5)`,
    REFLECT: `Ausgeprägte KI-Reflexionsfähigkeit (${score.toFixed(1)}/5)`,
  }

  return texts[category as keyof typeof texts] || `Stärke in ${category}`
}

function getCategoryDevelopmentText(category: string, score: number): string {
  const texts = {
    THINK: `KI-Grundverständnis ausbaubar (${score.toFixed(1)}/5)`,
    ENABLE: `Praktische KI-Anwendung entwickelbar (${score.toFixed(1)}/5)`,
    SHARE: `KI-Wissensaustausch steigerbar (${score.toFixed(1)}/5)`,
    GROW: `KI-Lernhaltung verbesserbar (${score.toFixed(1)}/5)`,
    REFLECT: `KI-Reflexion vertiefbar (${score.toFixed(1)}/5)`,
  }

  return texts[category as keyof typeof texts] || `Entwicklungsfeld ${category}`
}

// Mock-Daten für Benchmarking (später durch echte Daten ersetzen)
export function getBenchmarkData(industry: string, companySize: string): BenchmarkData {
  // Simulierte Durchschnittswerte basierend auf Branche und Unternehmensgröße
  const baseScores = {
    THINK: 2.8,
    ENABLE: 2.5,
    SHARE: 2.3,
    GROW: 2.6,
    REFLECT: 2.4,
    overall: 2.5,
  }

  // Branchenmodifikatoren
  const industryModifiers = {
    "IT & Software": 0.8,
    "Beratung & Consulting": 0.6,
    "Bildung & Forschung": 0.4,
    Finanzdienstleistungen: 0.3,
    Gesundheitswesen: 0.2,
    "Produktion & Fertigung": 0.1,
    "Öffentlicher Sektor": -0.1,
    "Handel & E-Commerce": 0.2,
    "Medien & Marketing": 0.5,
    "Logistik & Transport": 0.0,
    "Non-Profit": -0.2,
    Andere: 0.0,
  }

  // Größenmodifikatoren
  const sizeModifiers = {
    "Selbstständig / Freelancer": 0.3,
    "2-10 Mitarbeitende": 0.2,
    "11-50 Mitarbeitende": 0.1,
    "51-250 Mitarbeitende": 0.0,
    "251-1000 Mitarbeitende": 0.2,
    "Über 1000 Mitarbeitende": 0.4,
  }

  const industryMod = industryModifiers[industry as keyof typeof industryModifiers] || 0
  const sizeMod = sizeModifiers[companySize as keyof typeof sizeModifiers] || 0
  const totalMod = industryMod + sizeMod

  const adjustedScores = Object.fromEntries(
    Object.entries(baseScores).map(([key, value]) => [key, Math.min(5, Math.max(1, value + totalMod))]),
  )

  return {
    industry,
    companySize,
    averageScores: adjustedScores as any,
    sampleSize: Math.floor(Math.random() * 500) + 50, // Simulierte Stichprobengröße
  }
}
