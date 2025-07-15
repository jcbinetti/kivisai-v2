"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { EVALKIT_ROLES } from "@/lib/evalkit-data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface QuestionnaireProps {
  roleId: string
  onComplete: (answers: Record<string, number>) => void
  onBack: () => void
}

const categoryImages = {
  THINK: "/images-optimized/4_KIVISAI-NAVI/KIVI_THINK.webp",
  ENABLE: "/images-optimized/4_KIVISAI-NAVI/KIVI_ENABLE.webp",
  SHARE: "/images-optimized/4_KIVISAI-NAVI/KIVI_SHARE.webp",
  GROW: "/images-optimized/4_KIVISAI-NAVI/KIVI_GROW.webp",
  REFLECT: "/images-optimized/4_KIVISAI-NAVI/KIVI_REFLECT.webp",
}

const categoryDescriptions = {
  THINK: "Verstehen und Reflektieren von KI-Konzepten",
  ENABLE: "Praktische Anwendung und Umsetzung",
  SHARE: "Wissensaustausch und Kommunikation",
  GROW: "Lernen und Weiterentwicklung",
  REFLECT: "Ethische Reflexion und Verantwortung",
}

export default function Questionnaire({ roleId, onComplete, onBack }: QuestionnaireProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentCategory, setCurrentCategory] = useState<string>("")

  const role = EVALKIT_ROLES.find((r) => r.id === roleId)
  const questions = role?.questions || []
  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  useEffect(() => {
    if (currentQuestion) {
      setCurrentCategory(currentQuestion.category)
    }
  }, [currentQuestion])

  const handleAnswer = (value: number) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    }
    setAnswers(newAnswers)

    // Auto-advance nach kurzer Verzögerung
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        onComplete(newAnswers)
      }
    }, 300)
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onComplete(answers)
    }
  }

  const isAnswered = answers[currentQuestion.id] !== undefined
  const canProceed = isAnswered

  // Gruppiere Fragen nach Kategorien für bessere Übersicht
  const categoryQuestions = questions.filter((q) => q.category === currentCategory)
  const categoryIndex = categoryQuestions.findIndex((q) => q.id === currentQuestion.id) + 1

  if (!role) return null

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header mit Fortschritt */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-kivisai-moss-green hover:text-kivisai-deep-dark-blue"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Zurück zur Rollenauswahl
          </Button>
          <div className="text-sm text-kivisai-moss-green">
            Frage {currentQuestionIndex + 1} von {questions.length}
          </div>
        </div>

        <Progress value={progress} className="h-2 mb-4" />

        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center mb-2">
            <Image
              src={
                role.id === "mensch"
                  ? "/images-optimized/2_KIVI_4_EBENE/KIVI_Mensch.webp"
                  : role.id === "team"
                  ? "/images-optimized/2_KIVI_4_EBENE/KIVI_Team.webp"
                  : role.id === "organisation"
                  ? "/images-optimized/2_KIVI_4_EBENE/KIVI_Orga.webp"
                  : role.id === "oekosystem"
                  ? "/images-optimized/2_KIVI_4_EBENE/KIVI_Oekosystem.webp"
                  : ""
              }
              alt={role.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">{role.name} - KI-Fitness Test</h2>
          </div>
          <p className="text-kivisai-moss-green">
            Bewerten Sie jede Aussage auf einer Skala von 1 (trifft gar nicht zu) bis 5 (trifft voll zu)
          </p>
        </div>
      </div>

      {/* Kategorie-Header mit KIVI Icons */}
      <Card className="mb-6 bg-gradient-to-r from-kivisai-light-cool-gray to-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src={categoryImages[currentCategory as keyof typeof categoryImages] || "/images-optimized/4_KIVISAI-NAVI/KIVI_THINK.webp"}
                alt={`${currentCategory} Icon`}
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-1">{currentCategory}</h3>
              <p className="text-kivisai-moss-green text-sm">
                {categoryDescriptions[currentCategory as keyof typeof categoryDescriptions]}
              </p>
              <p className="text-xs text-kivisai-moss-green mt-1">
                Frage {categoryIndex} von {categoryQuestions.length} in dieser Kategorie
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Aktuelle Frage */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-kivisai-deep-dark-blue">{currentQuestion.text}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleAnswer(value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion.id] === value
                    ? "border-kivisai-clear-turquoise bg-kivisai-clear-turquoise/10 text-kivisai-deep-dark-blue"
                    : "border-gray-200 hover:border-kivisai-clear-turquoise/50 hover:bg-kivisai-light-cool-gray/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {value} - {getScaleLabel(value)}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion.id] === value
                        ? "border-kivisai-clear-turquoise bg-kivisai-clear-turquoise"
                        : "border-gray-300"
                    }`}
                  >
                    {answers[currentQuestion.id] === value && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Vorherige Frage
        </Button>

        <div className="text-center">
          <div className="text-sm text-kivisai-moss-green mb-2">
            {Object.keys(answers).length} von {questions.length} Fragen beantwortet
          </div>
          {!isAnswered && <p className="text-sm text-orange-600">Bitte wählen Sie eine Antwort aus</p>}
        </div>

        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white"
        >
          {currentQuestionIndex === questions.length - 1 ? "Auswertung anzeigen" : "Nächste Frage"}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

function getScaleLabel(value: number): string {
  const labels = {
    1: "Trifft gar nicht zu",
    2: "Trifft eher nicht zu",
    3: "Teils/teils",
    4: "Trifft eher zu",
    5: "Trifft voll und ganz zu",
  }
  return labels[value as keyof typeof labels]
}
