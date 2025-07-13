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
          <TabsTrigger value="recommendations">Empfehlungen</TabsTrigger>
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

                <Button
                  onClick={handleBenchmarkUpdate}
                  disabled={!emailData.industry || !emailData.companySize}
                  className="w-full"
                >
                  Branchenvergleich anzeigen
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Schnelle Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-800 mb-2">Ihre Stärken</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {result.strengths.slice(0, 2).map((strength, index) => (
                    <li key={index}>• {strength}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Entwicklungsfelder</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  {result.developmentAreas.slice(0, 2).map((area, index) => (
                    <li key={index}>• {area}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Nächste Schritte</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {result.recommendations.slice(0, 2).map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {Object.entries(result.scores)
              .filter(([key]) => key !== "overall")
              .map(([category, score]) => (
                <Card key={category}>
                  <CardContent className="p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="w-12 h-12 bg-kivisai-light-cool-gray rounded-full flex items-center justify-center">
                        <img
                          src={`/images/KIVI_${category}.png`}
                          alt={`${category} Icon`}
                          width={32}
                          height={32}
                          className="object-contain"
                          onError={(e) => {
                            // Fallback to a simple text representation if image fails
                            e.currentTarget.style.display = "none"
                            e.currentTarget.parentElement!.innerHTML =
                              `<span class="text-kivisai-clear-turquoise font-bold text-lg">${category}</span>`
                          }}
                        />
                      </div>
                    </div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">{category}</h4>
                    <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">{score.toFixed(1)}</div>
                    <div className="text-xs text-kivisai-moss-green">von 5.0</div>
                    {benchmark && (
                      <div className="text-xs text-kivisai-moss-green mt-1">
                        ⌀ {benchmark.averageScores[category as keyof typeof benchmark.averageScores].toFixed(1)}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Ihre Stärken</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Entwicklungsfelder</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.developmentAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Ihre personalisierten Empfehlungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="p-4 bg-kivisai-light-cool-gray rounded-lg">
                    <p className="text-kivisai-deep-dark-blue">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KIVISAI Angebote basierend auf Rolle */}
          <Card>
            <CardHeader>
              <CardTitle>Passende KIVISAI Angebote für Sie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">KI-Potenzialanalyse</h4>
                  <p className="text-sm text-kivisai-moss-green mb-3">
                    Perfekt für Ihren aktuellen Stand. Identifizieren Sie konkrete KI-Anwendungsfälle.
                  </p>
                  <Button variant="outline" size="sm">
                    Mehr erfahren
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Start2Act Programm</h4>
                  <p className="text-sm text-kivisai-moss-green mb-3">
                    Schneller Einstieg in die KI-Welt mit praktischen Übungen und Tools.
                  </p>
                  <Button variant="outline" size="sm">
                    Programm ansehen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basis-Export */}
            <Card>
              <CardHeader>
                <CardTitle>Ergebnis exportieren</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  PDF herunterladen (Basis)
                </Button>

                <Button className="w-full" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Link teilen
                </Button>

                <div className="text-sm text-kivisai-moss-green">
                  <p>Basis-Export enthält:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Radar-Diagramm</li>
                    <li>Gesamtscore und Badge</li>
                    <li>Grundlegende Empfehlungen</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Premium-Export mit E-Mail */}
            <Card className="border-kivisai-clear-turquoise">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Premium-Auswertung per E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showEmailForm ? (
                  <div className="space-y-4">
                    <div className="text-sm text-kivisai-moss-green">
                      <p className="font-semibold mb-2">Premium-Auswertung enthält:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>KI-generierte Detailanalyse</li>
                        <li>Branchenvergleich</li>
                        <li>Personalisierte Lernpfade</li>
                        <li>Zugang zu exklusiven Ressourcen</li>
                      </ul>
                    </div>

                    <Button
                      onClick={() => setShowEmailForm(true)}
                      className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90"
                    >
                      Premium-Auswertung anfordern
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vorname</Label>
                        <Input
                          id="firstName"
                          value={emailData.firstName}
                          onChange={(e) => setEmailData({ ...emailData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nachname</Label>
                        <Input
                          id="lastName"
                          value={emailData.lastName}
                          onChange={(e) => setEmailData({ ...emailData, lastName: e.target.value })}
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
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        value={emailData.company}
                        onChange={(e) => setEmailData({ ...emailData, company: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Branche *</Label>
                      <select
                        id="industry"
                        value={emailData.industry}
                        onChange={(e) => setEmailData({ ...emailData, industry: e.target.value })}
                        required
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                      >
                        <option value="">Branche auswählen</option>
                        {INDUSTRIES.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="networkName">Netzwerk-Name (optional)</Label>
                      <Input
                        id="networkName"
                        value={emailData.networkName}
                        onChange={(e) => setEmailData({ ...emailData, networkName: e.target.value })}
                        placeholder="Für Gruppen-Benchmarking"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={emailData.newsletter}
                          onCheckedChange={(checked) => setEmailData({ ...emailData, newsletter: checked as boolean })}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          KIVISAI Newsletter abonnieren (empfohlen)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={emailData.privacy}
                          onCheckedChange={(checked) => setEmailData({ ...emailData, privacy: checked as boolean })}
                          required
                        />
                        <Label htmlFor="privacy" className="text-sm">
                          Ich stimme der Datenschutzerklärung zu *
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setShowEmailForm(false)} className="flex-1">
                        Abbrechen
                      </Button>
                      <Button
                        onClick={handleEmailSubmit}
                        disabled={!emailData.email || !emailData.privacy || !emailData.industry}
                        className="flex-1 bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90"
                      >
                        Auswertung senden
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Viral Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Freunde und Kollegen einladen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-kivisai-moss-green mb-4">
                Laden Sie andere ein, ebenfalls ihre KI-Fitness zu testen. Gemeinsam lernen macht mehr Spaß!
              </p>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value={`${window.location.origin}/evalkit${emailData.networkName ? `?network=${encodeURIComponent(emailData.networkName)}` : ""}`}
                  className="flex-1"
                />
                <Button variant="outline">Link kopieren</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" onClick={onNewRole}>
          Andere Rolle testen
        </Button>
        <Button variant="outline" onClick={onRestart}>
          Test wiederholen
        </Button>
        <Button className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90">
          Kostenloses Beratungsgespräch buchen
        </Button>
      </div>
    </div>
  )
}
