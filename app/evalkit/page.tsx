"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroSection as Hero } from "@/components/common/hero-section"
import { calculateScores } from "@/lib/evalkit-scoring"
import RoleSelection from "@/components/evalkit/role-selection"
import Questionnaire from "@/components/evalkit/questionnaire"
import ResultsDisplay from "@/components/evalkit/results-display"
import { Brain, CheckCircle, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This is a client component, so metadata should be handled in a parent layout or via hooks if needed.
// For simplicity, we'll comment it out here but it should be noted.
// export const metadata: Metadata = {
//     title: "EVALKIT | KIVISAI",
//     description: "Bin ich bereit für die KI-Zukunft? Machen Sie den Test.",
// };

type Step = "intro" | "role-selection" | "questionnaire" | "results"

export default function EvalKitPage() {
  const [currentStep, setCurrentStep] = useState<Step>("intro")
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<any>(null)

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    setCurrentStep("questionnaire")
  }

  const handleQuestionnaireComplete = (questionnaireAnswers: Record<string, number>) => {
    setAnswers(questionnaireAnswers)
    const evaluationResult = calculateScores(questionnaireAnswers, selectedRole)
    setResult(evaluationResult)
    setCurrentStep("results")
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentStep("questionnaire")
  }

  const handleNewRole = () => {
    setSelectedRole("")
    setAnswers({})
    setResult(null)
    setCurrentStep("role-selection")
  }

  const handleBackToRoles = () => {
    setCurrentStep("role-selection")
  }

  const IntroStep = () => (
    <>
      <Hero
        variant="centered"
        size="xl"
        background="gradient"
        title="EVALKIT"
        subtitle="Bin ich bereit für die KI-Zukunft?"
        description="Mit dem EVALKIT starten Sie Ihre persönliche Reise in die Welt der Künstlichen Intelligenz. Ob als Einzelperson, Team oder Organisation – diese Selbsteinschätzung hilft Ihnen, den eigenen Standort zu bestimmen, Chancen zu erkennen und nächste Schritte zu planen. Kostenlos • Anonym • Sofortige Ergebnisse."
        image={{
          src: "/images/KIVISAI_signet_tr.png",
          alt: "KIVISAI Signet",
          position: "right"
        }}
      />
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <Image
                src="/images/4_KIVISAI-NAVI/KIVI_Roles_all.png"
                alt="EVALKIT Rollen-Übersicht: MENSCH, TEAM, ORGANISATION und ÖKOSYSTEM"
                width={800}
                height={500}
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="font-semibold text-kivisai-clear-turquoise mb-2">Visuelle Auswertung</h3>
                  <p className="text-sm text-kivisai-moss-green">
                    Sofortiges Radar-Diagramm mit Ihren Stärken und Entwicklungsfeldern
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Brain className="w-8 h-8 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="font-semibold text-kivisai-clear-turquoise mb-2">KI-Kurzprofil</h3>
                  <p className="text-sm text-kivisai-moss-green">
                    Individuelles, KI-generiertes Profil mit personalisierten Empfehlungen
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-kivisai-clear-turquoise mx-auto mb-4" />
                  <h3 className="font-semibold text-kivisai-clear-turquoise mb-2">Branchenvergleich</h3>
                  <p className="text-sm text-kivisai-moss-green">
                    Vergleichen Sie sich mit anderen in Ihrer Branche und Unternehmensgröße
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-50">
              <CardHeader>
                <CardTitle className="text-kivisai-deep-dark-blue">Was Sie erwartet:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">
                      5 Dimensionen: THINK, ENABLE, SHARE, GROW, REFLECT
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">50 Fragen in ca. 10-15 Minuten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">
                      Sofortige Auswertung mit Handlungsempfehlungen
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">Optional: Premium-Auswertung per E-Mail</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">Komplett anonym nutzbar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-kivisai-moss-green">Viral-Sharing für Teams und Netzwerke</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                onClick={() => setCurrentStep("role-selection")}
                className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg"
              >
                Jetzt KI-Fitness testen
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )

  return (
    <>
      {currentStep === "intro" ? (
        <IntroStep />
      ) : (
        <>
          <main className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {currentStep === "role-selection" && <RoleSelection onRoleSelect={handleRoleSelect} />}
              {currentStep === "questionnaire" && (
                <Questionnaire roleId={selectedRole} onComplete={handleQuestionnaireComplete} onBack={handleBackToRoles} />
              )}
              {currentStep === "results" && result && (
                <ResultsDisplay result={result} onRestart={handleRestart} onNewRole={handleNewRole} />
              )}
            </div>
          </main>
        </>
      )}
    </>
  )
}
