"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import EvalKitRadarChart from "./radar-chart"
import AIRecommendations from "./ai-recommendations"
import { type EvaluationResult, type BenchmarkData, getBenchmarkData } from "@/lib/evalkit-scoring"
import { INDUSTRIES, COMPANY_SIZES, EVALKIT_ROLES } from "@/lib/evalkit-data"
import { Download, Mail, Share2, TrendingUp, Target, Lightbulb, Award } from "lucide-react"

interface ResultsDisplayProps {
  result: EvaluationResult
  onRestart: () => void
  onNewRole: () => void
}

export default function ResultsDisplay({ result, onRestart, onNewRole }: ResultsDisplayProps) {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailData, setEmailData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    industry: "",
    companySize: "",
    networkName: "",
    newsletter: false,
    privacy: false,
  })
  const [benchmark, setBenchmark] = useState<BenchmarkData | null>(null)
  const [showBenchmark, setShowBenchmark] = useState(false)

  const role = EVALKIT_ROLES.find((r) => r.id === result.role)

  const radarData = [
    { category: "THINK", userScore: result.scores.THINK, benchmarkScore: benchmark?.averageScores.THINK, maxScore: 5 },
    {
      category: "ENABLE",
      userScore: result.scores.ENABLE,
      benchmarkScore: benchmark?.averageScores.ENABLE,
      maxScore: 5,
    },
    { category: "SHARE", userScore: result.scores.SHARE, benchmarkScore: benchmark?.averageScores.SHARE, maxScore: 5 },
    { category: "GROW", userScore: result.scores.GROW, benchmarkScore: benchmark?.averageScores.GROW, maxScore: 5 },
    {
      category: "REFLECT",
      userScore: result.scores.REFLECT,
      benchmarkScore: benchmark?.averageScores.REFLECT,
      maxScore: 5,
    },
  ]

  const handleBenchmarkUpdate = () => {
    if (emailData.industry && emailData.companySize) {
      const benchmarkData = getBenchmarkData(emailData.industry, emailData.companySize)
      setBenchmark(benchmarkData)
      setShowBenchmark(true)
    }
  }

  const handleEmailSubmit = async () => {
    if (!emailData.email || !emailData.privacy) return

    try {
      // Hier würde die E-Mail-Integration erfolgen
      console.log("E-Mail-Daten:", emailData)
      console.log("Ergebnis:", result)

      // Simuliere API-Call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Ihre Auswertung wurde erfolgreich per E-Mail versendet!")
      setShowEmailForm(false)
    } catch (error) {
      console.error("Fehler beim E-Mail-Versand:", error)
      alert("Fehler beim E-Mail-Versand. Bitte versuchen Sie es erneut.")
    }
  }

  const getLevelColor = (level: string) => {
    const colors = {
      beginner: "bg-orange-100 text-orange-800",
      intermediate: "bg-blue-100 text-blue-800",
      advanced: "bg-green-100 text-green-800",
      expert: "bg-purple-100 text-purple-800",
    }
    return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getLevelDescription = (level: string) => {
    const descriptions = {
      beginner: "Sie stehen am Anfang Ihrer KI-Reise. Perfekt, um jetzt durchzustarten!",
      intermediate: "Sie haben bereits erste Erfahrungen gesammelt und können diese ausbauen.",
      advanced: "Sie sind bereits gut aufgestellt und können andere bei ihrer KI-Entwicklung unterstützen.",
      expert: "Sie sind ein KI-Vorreiter und können als Multiplikator wirken.",
    }
    return descriptions[level as keyof typeof descriptions] || ""
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header mit Badge und Gesamtergebnis */}
      <Card className="bg-gradient-to-r from-kivisai-clear-turquoise/10 to-kivisai-vibrant-turquoise/10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Award className="w-12 h-12 text-kivisai-clear-turquoise" />
            </div>
          </div>
          <CardTitle className="text-3xl text-kivisai-deep-dark-blue mb-2">Ihre KI-Fitness Auswertung</CardTitle>
          <div className="space-y-2">
            <Badge className={`text-lg px-4 py-2 ${getLevelColor(result.level)}`}>{result.badge}</Badge>
            <p className="text-kivisai-moss-green">
              {role?.name} • Gesamtscore: {result.scores.overall.toFixed(1)}/5.0
            </p>
            <p className="text-sm text-kivisai-moss-green max-w-2xl mx-auto">{getLevelDescription(result.level)}</p>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="recommendations">KI-Empfehlungen</TabsTrigger>
          <TabsTrigger value="export">Export & Teilen</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Ihr KI-Fitness Profil
                </CardTitle>
                {showBenchmark && benchmark && (
                  <p className="text-sm text-kivisai-moss-green">
                    Verglichen mit {benchmark.industry} • {benchmark.companySize} (n={benchmark.sampleSize})
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <EvalKitRadarChart data={radarData} showBenchmark={showBenchmark} />
              </CardContent>
            </Card>

            {/* Benchmark Einstellungen */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Branchenvergleich
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="industry">Ihre Branche</Label>
                  <Select
                    value={emailData.industry}
                    onValueChange={(value) => setEmailData({ ...emailData, industry: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Branche auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRIES.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="companySize">Unternehmensgröße</Label>
                  <Select
                    value={emailData.companySize}
                    onValueChange={(value) => setEmailData({ ...emailData, companySize: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Größe auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {COMPANY_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleBenchmarkUpdate} className="w-full bg-kivisai-clear-turquoise">
                  Vergleich anzeigen
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          {/* Detaillierte Kategorie-Auswertungen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(result.scores).map(([category, score]) => {
              if (category === "overall") return null
              
              const categoryData = radarData.find(d => d.category === category)
              const benchmarkScore = categoryData?.benchmarkScore
              
              return (
                <Card key={category} className="relative overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-kivisai-deep-dark-blue">
                        {score.toFixed(1)}
                      </span>
                      <span className="text-sm text-kivisai-moss-green">/ 5.0</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-kivisai-clear-turquoise h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(score / 5) * 100}%` }}
                        />
                      </div>
                      {benchmarkScore && (
                        <div className="flex items-center justify-between text-xs text-kivisai-moss-green">
                          <span>Ihr Score</span>
                          <span>Branche: {benchmarkScore.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          {/* KI-generierte Empfehlungen */}
          <AIRecommendations
            responses={result.answers}
            roleId={result.role}
            companySize={emailData.companySize}
            industry={emailData.industry}
            currentAIUsage={result.level}
          />
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          {/* Export und Teilen Optionen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Per E-Mail erhalten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showEmailForm ? (
                  <Button 
                    onClick={() => setShowEmailForm(true)} 
                    className="w-full bg-kivisai-clear-turquoise"
                  >
                    E-Mail-Adresse eingeben
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vorname</Label>
                        <Input
                          id="firstName"
                          value={emailData.firstName}
                          onChange={(e) => setEmailData({ ...emailData, firstName: e.target.value })}
                          placeholder="Vorname"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nachname</Label>
                        <Input
                          id="lastName"
                          value={emailData.lastName}
                          onChange={(e) => setEmailData({ ...emailData, lastName: e.target.value })}
                          placeholder="Nachname"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail-Adresse *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={emailData.email}
                        onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                        placeholder="ihre.email@beispiel.de"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        value={emailData.company}
                        onChange={(e) => setEmailData({ ...emailData, company: e.target.value })}
                        placeholder="Firmenname"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={emailData.newsletter}
                        onCheckedChange={(checked) => 
                          setEmailData({ ...emailData, newsletter: checked as boolean })
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Newsletter abonnieren (optional)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={emailData.privacy}
                        onCheckedChange={(checked) => 
                          setEmailData({ ...emailData, privacy: checked as boolean })
                        }
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        Ich stimme der Datenschutzerklärung zu *
                      </Label>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleEmailSubmit} 
                        className="flex-1 bg-kivisai-clear-turquoise"
                        disabled={!emailData.email || !emailData.privacy}
                      >
                        Auswertung senden
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowEmailForm(false)}
                      >
                        Abbrechen
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  PDF Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-kivisai-moss-green">
                  Laden Sie Ihre Auswertung als PDF herunter.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  PDF herunterladen
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Weitere Aktionen */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Weitere Aktionen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Beratungstermin
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Neuen Test starten
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Fortschritt verfolgen
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRestart} variant="outline" className="flex items-center gap-2">
          <Target className="w-4 h-4" />
          Test wiederholen
        </Button>
        <Button onClick={onNewRole} className="bg-kivisai-clear-turquoise flex items-center gap-2">
          <Lightbulb className="w-4 h-4" />
          Andere Rolle testen
        </Button>
      </div>
    </div>
  )
}
