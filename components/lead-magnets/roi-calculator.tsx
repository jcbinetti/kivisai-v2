"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, Clock, Users } from "lucide-react"

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 10,
    hourlyRate: 50,
    hoursPerWeek: 5,
    automationPercentage: 30,
    implementationCost: 25000,
    email: "",
  })

  const [showResults, setShowResults] = useState(false)

  const calculateROI = () => {
    const weeklyTimeSaved = inputs.hoursPerWeek * (inputs.automationPercentage / 100)
    const weeklySavings = weeklyTimeSaved * inputs.hourlyRate * inputs.employees
    const annualSavings = weeklySavings * 52
    const roi = ((annualSavings - inputs.implementationCost) / inputs.implementationCost) * 100
    const paybackMonths = inputs.implementationCost / (weeklySavings * 4.33)

    return {
      weeklyTimeSaved: Math.round(weeklyTimeSaved * inputs.employees),
      weeklySavings: Math.round(weeklySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
    }
  }

  const results = calculateROI()

  const handleCalculate = () => {
    setShowResults(true)
  }

  const handleGetDetailedAnalysis = async () => {
    // Hier würde die E-Mail mit detaillierter Analyse gesendet
    console.log("Sending detailed analysis to:", inputs.email)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="w-6 h-6 text-kivisai-clear-turquoise" />
            <CardTitle className="text-2xl text-kivisai-deep-dark-blue">KI-ROI Rechner</CardTitle>
          </div>
          <p className="text-kivisai-moss-green">
            Berechnen Sie das Einsparpotential durch KI-Automatisierung in Ihrem Unternehmen
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="employees">Anzahl Mitarbeiter</Label>
                <Input
                  id="employees"
                  type="number"
                  value={inputs.employees}
                  onChange={(e) => setInputs((prev) => ({ ...prev, employees: Number(e.target.value) }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="hourlyRate">Durchschnittlicher Stundenlohn (€)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  value={inputs.hourlyRate}
                  onChange={(e) => setInputs((prev) => ({ ...prev, hourlyRate: Number(e.target.value) }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="hoursPerWeek">Stunden/Woche für repetitive Aufgaben (pro Person)</Label>
                <Input
                  id="hoursPerWeek"
                  type="number"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => setInputs((prev) => ({ ...prev, hoursPerWeek: Number(e.target.value) }))}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Automatisierungsgrad: {inputs.automationPercentage}%</Label>
                <Slider
                  value={[inputs.automationPercentage]}
                  onValueChange={(value) => setInputs((prev) => ({ ...prev, automationPercentage: value[0] }))}
                  max={80}
                  min={10}
                  step={5}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Konservativ (10%)</span>
                  <span>Realistisch (30%)</span>
                  <span>Optimistisch (80%)</span>
                </div>
              </div>

              <div>
                <Label htmlFor="implementationCost">Implementierungskosten (€)</Label>
                <Input
                  id="implementationCost"
                  type="number"
                  value={inputs.implementationCost}
                  onChange={(e) => setInputs((prev) => ({ ...prev, implementationCost: Number(e.target.value) }))}
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80"
              >
                ROI berechnen
              </Button>
            </div>
          </div>

          {showResults && (
            <div className="mt-8 p-6 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg border">
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4 text-center">Ihre KI-ROI Prognose</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="w-8 h-8 text-kivisai-clear-turquoise mx-auto mb-2" />
                  <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{results.weeklyTimeSaved}h</div>
                  <div className="text-sm text-kivisai-moss-green">Gesparte Zeit/Woche</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    €{results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-kivisai-moss-green">Jährliche Einsparung</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Calculator className="w-8 h-8 text-kivisai-vibrant-light-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{results.roi}%</div>
                  <div className="text-sm text-kivisai-moss-green">ROI im ersten Jahr</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-kivisai-deep-dark-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{results.paybackMonths}</div>
                  <div className="text-sm text-kivisai-moss-green">Monate bis Break-Even</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-kivisai-moss-green">
                  Möchten Sie eine detaillierte, auf Ihr Unternehmen zugeschnittene ROI-Analyse?
                </p>

                <div className="max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail für detaillierte Analyse"
                    value={inputs.email}
                    onChange={(e) => setInputs((prev) => ({ ...prev, email: e.target.value }))}
                    className="mb-3"
                  />
                  <Button
                    onClick={handleGetDetailedAnalysis}
                    disabled={!inputs.email}
                    className="w-full bg-kivisai-vibrant-light-green text-kivisai-deep-dark-blue hover:bg-kivisai-vibrant-light-green/80"
                  >
                    Kostenlose detaillierte Analyse anfordern
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
