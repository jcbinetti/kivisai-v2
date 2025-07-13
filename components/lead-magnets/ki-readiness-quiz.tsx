"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: { value: number; label: string }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "data-quality",
    question: "Wie bewerten Sie die Qualität Ihrer Unternehmensdaten?",
    options: [
      { value: 3, label: "Sehr gut strukturiert und gepflegt" },
      { value: 2, label: "Teilweise strukturiert, aber verbesserungsfähig" },
      { value: 1, label: "Wenig strukturiert, viele Datensilos" },
      { value: 0, label: "Keine klare Datenstruktur vorhanden" },
    ],
  },
  {
    id: "team-readiness",
    question: "Wie steht Ihr Team zu neuen Technologien?",
    options: [
      { value: 3, label: "Sehr aufgeschlossen und lernbereit" },
      { value: 2, label: "Grundsätzlich offen, aber vorsichtig" },
      { value: 1, label: "Eher skeptisch, braucht Überzeugung" },
      { value: 0, label: "Starker Widerstand gegen Veränderungen" },
    ],
  },
  {
    id: "budget",
    question: "Welches Budget steht für KI-Projekte zur Verfügung?",
    options: [
      { value: 3, label: "Über 50.000€ pro Jahr" },
      { value: 2, label: "10.000€ - 50.000€ pro Jahr" },
      { value: 1, label: "5.000€ - 10.000€ pro Jahr" },
      { value: 0, label: "Unter 5.000€ pro Jahr" },
    ],
  },
  {
    id: "processes",
    question: "Wie viele repetitive Prozesse haben Sie identifiziert?",
    options: [
      { value: 3, label: "Viele (>10 Prozesse)" },
      { value: 2, label: "Einige (5-10 Prozesse)" },
      { value: 1, label: "Wenige (2-5 Prozesse)" },
      { value: 0, label: "Keine oder unbekannt" },
    ],
  },
]

export default function KIReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [email, setEmail] = useState("")

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = quizQuestions.length * 3
    return Math.round((totalScore / maxScore) * 100)
  }

  const getRecommendation = (score: number) => {
    if (score >= 80) {
      return {
        level: "Hoch",
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        message: "Ihr Unternehmen ist bereit für KI! Starten Sie mit einem Prototyping-Projekt.",
        nextStep: "KI-Prototyping Beratung buchen",
        color: "bg-green-50 border-green-200",
      }
    } else if (score >= 50) {
      return {
        level: "Mittel",
        icon: <AlertCircle className="w-8 h-8 text-yellow-500" />,
        message: "Gute Basis vorhanden. Eine KI-Potenzialanalyse hilft beim nächsten Schritt.",
        nextStep: "Kostenlose KI-Potenzialanalyse",
        color: "bg-yellow-50 border-yellow-200",
      }
    } else {
      return {
        level: "Niedrig",
        icon: <XCircle className="w-8 h-8 text-red-500" />,
        message: "Erst die Grundlagen schaffen. Wir helfen bei der Vorbereitung.",
        nextStep: "Strategieberatung vereinbaren",
        color: "bg-red-50 border-red-200",
      }
    }
  }

  if (showResult) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-kivisai-deep-dark-blue">
            Wie fit bin ich für die KI-Transformation?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-kivisai-clear-turquoise mb-2">{score}%</div>
            <div className="flex items-center justify-center gap-2">
              {recommendation.icon}
              <span className="text-xl font-semibold">KI-Bereitschaft: {recommendation.level}</span>
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${recommendation.color}`}>
            <p className="text-center mb-4">{recommendation.message}</p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="E-Mail für detaillierte Analyse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
              <Button className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80">
                {recommendation.nextStep}
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers({})
                setShowResult(false)
              }}
            >
              Quiz wiederholen
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  const question = quizQuestions[currentQuestion]

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              Frage {currentQuestion + 1} von {quizQuestions.length}
            </span>
            <span>{Math.round(progress)}% abgeschlossen</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-xl text-kivisai-deep-dark-blue">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto p-4 hover:bg-kivisai-clear-turquoise hover:text-white border-2 border-kivisai-clear-turquoise text-kivisai-deep-dark-blue font-medium transition-all duration-200"
              onClick={() => handleAnswer(question.id, option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
