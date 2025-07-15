"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, Lightbulb, Clock, Target, TrendingUp, Calendar } from "lucide-react"

interface Recommendation {
  title: string
  description: string
  timeframe: string
  impact: string
  nextSteps: string
}

interface AIRecommendationsProps {
  responses: Record<string, number>
  roleId: string
  companySize?: string
  industry?: string
  currentAIUsage?: string
}

export default function AIRecommendations({ 
  responses, 
  roleId, 
  companySize, 
  industry, 
  currentAIUsage 
}: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    generateRecommendations()
  }, [])

  const generateRecommendations = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Convert responses to the format expected by the API
      const responseArray = Object.entries(responses).map(([questionId, answer]) => ({
        questionId,
        answer,
        category: getCategoryFromQuestionId(questionId)
      }))

      const response = await fetch("/api/evalkit/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          responses: responseArray,
          companySize,
          industry,
          currentAIUsage,
          roleId
        }),
      })

      if (!response.ok) {
        throw new Error("Fehler bei der Empfehlungsgenerierung")
      }

      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (err) {
      console.error("Recommendation generation error:", err)
      setError("Fehler bei der Generierung der Empfehlungen. Bitte versuchen Sie es erneut.")
    } finally {
      setIsLoading(false)
    }
  }

  const getCategoryFromQuestionId = (questionId: string): string => {
    // This would need to be updated based on your actual question structure
    const categoryMap: Record<string, string> = {
      // Add mapping based on your EVALKIT data structure
      "think_1": "THINK",
      "enable_1": "ENABLE",
      "share_1": "SHARE",
      "grow_1": "GROW",
      "reflect_1": "REFLECT",
    }
    return categoryMap[questionId] || "ALLGEMEIN"
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "immediate":
        return <Target className="w-5 h-5 text-red-500" />
      case "strategic":
        return <TrendingUp className="w-5 h-5 text-yellow-500" />
      case "longTerm":
        return <Calendar className="w-5 h-5 text-blue-500" />
      default:
        return <Lightbulb className="w-5 h-5 text-green-500" />
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "immediate":
        return "Sofortige Maßnahmen"
      case "strategic":
        return "Strategische Planung"
      case "longTerm":
        return "Langfristige Entwicklung"
      default:
        return "Empfehlungen"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "immediate":
        return "bg-red-100 text-red-800 border-red-200"
      case "strategic":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "longTerm":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  if (isLoading) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-kivisai-clear-turquoise mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
              KI-generiert Ihre personalisierten Empfehlungen...
            </h3>
            <p className="text-kivisai-moss-green">
              Basierend auf Ihren Antworten erstellen wir maßgeschneiderte Handlungsempfehlungen.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <Lightbulb className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
              Fehler bei der Empfehlungsgenerierung
            </h3>
            <p className="text-kivisai-moss-green mb-4">{error}</p>
            <Button onClick={generateRecommendations} className="bg-kivisai-clear-turquoise">
              Erneut versuchen
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!recommendations) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
          Ihre KI-Empfehlungen
        </h2>
        <p className="text-kivisai-moss-green max-w-2xl mx-auto">
          Basierend auf Ihren EVALKIT-Antworten haben wir personalisierte Empfehlungen für Ihre KI-Transformation erstellt.
        </p>
      </div>

      {/* Recommendations by Priority */}
      {Object.entries(recommendations).map(([priority, recs]: [string, any]) => {
        if (!recs || recs.length === 0) return null

        return (
          <Card key={priority} className="border-2 border-kivisai-light-cool-gray">
            <CardHeader className="bg-gradient-to-r from-kivisai-light-cool-gray to-white">
              <div className="flex items-center gap-3">
                {getPriorityIcon(priority)}
                <CardTitle className="text-xl text-kivisai-deep-dark-blue">
                  {getPriorityLabel(priority)}
                </CardTitle>
                <Badge className={getPriorityColor(priority)}>
                  {recs.length} Empfehlung{recs.length !== 1 ? 'en' : ''}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recs.map((rec: string, index: number) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: rec.replace(/\n/g, '<br/>') }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      })}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button 
          className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80"
          onClick={() => window.open('/termin', '_blank')}
        >
          Termin für Beratung vereinbaren
        </Button>
        <Button 
          variant="outline" 
          className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/10"
          onClick={() => window.open('/leistungen', '_blank')}
        >
          Mehr über unsere Leistungen
        </Button>
      </div>

      {/* Disclaimer */}
      <div className="text-center text-sm text-kivisai-moss-green mt-6">
        <p>
          Diese Empfehlungen wurden von KI generiert und dienen als Orientierung. 
          Für eine detaillierte Beratung empfehlen wir ein persönliches Gespräch.
        </p>
      </div>
    </div>
  )
} 