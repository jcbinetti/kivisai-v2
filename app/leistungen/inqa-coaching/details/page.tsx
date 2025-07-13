"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, FileText, Users, Target, Calendar, ArrowRight, Award, Lock, Mail } from "lucide-react"
import Link from "next/link"
import SafeImage from "@/components/safe-image"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { documents } from "@/lib/document-registry"
import DocumentGrid from "@/components/documents/document-grid"

export default function INQACoachingMethodePage() {
  const coachingTimeline = [
    {
      phase: "Vorbereitung",
      duration: "2 Wochen",
      activities: ["Erstgespräch", "Bedarfsanalyse", "Antragstellung", "Kick-off Planung"],
    },
    {
      phase: "Phase 1: Analyse",
      duration: "4 Coaching-Tage",
      activities: ["IST-Analyse", "Stakeholder-Interviews", "Prozessmapping", "Potenzialidentifikation"],
    },
    {
      phase: "Phase 2: Konzeption",
      duration: "4 Coaching-Tage",
      activities: ["Strategieentwicklung", "Roadmap-Erstellung", "Pilotprojekt-Design", "Change-Konzept"],
    },
    {
      phase: "Phase 3: Umsetzung",
      duration: "4 Coaching-Tage",
      activities: ["Pilotimplementierung", "Mitarbeiter-Schulungen", "Prozessoptimierung", "Erfolgsmessung"],
    },
    {
      phase: "Nachbetreuung",
      duration: "3 Monate",
      activities: ["Follow-up Gespräche", "Anpassungen", "Dokumentation", "Abschlussbericht"],
    },
  ]

  const inqaDocuments = documents.filter(doc => doc.category === "INQA-Coaching");

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <SafeImage
                src="/images/Badges_Autorisierter_INQA-Coach_2025-2026.png"
                alt="Autorisierter INQA-Coach 2025-2026"
                width={120}
                height={120}
                className="h-auto"
              />
            </div>
            <Badge className="mb-4 bg-white/20 text-white">INQA-Coaching Methode</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">80% Förderung für KI-Transformation</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Detaillierte Methodik und Beispielprojekt mit 12 Coaching-Tagen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/termin">
                <Button size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-white/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenlose Beratung vereinbaren
                </Button>
              </Link>
              <Link href="/leistungen/inqa-coaching">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-kivisai-deep-dark-blue"
                >
                  Zurück zur Übersicht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">
                Offizielle INQA-Dokumente
              </h2>
              <p className="text-lg text-kivisai-moss-green">
                Laden Sie alle wichtigen Unterlagen zur INQA-Coaching Förderung herunter
              </p>
            </div>

            <DocumentGrid 
              documents={inqaDocuments} 
              variant="default" 
              columns={2} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Beispielprojekt */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">
                Beispielprojekt: 12-Tage KI-Coaching
              </h2>
              <p className="text-lg text-kivisai-moss-green">
                Mittelständisches Unternehmen mit 45 Mitarbeitern - Von der Analyse bis zur Umsetzung
              </p>
            </div>

            {/* Projektübersicht */}
            <Card className="mb-12 border-l-4 border-l-kivisai-clear-turquoise">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-kivisai-clear-turquoise mb-2">12</div>
                    <div className="text-sm text-kivisai-moss-green">Coaching-Tage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-kivisai-clear-turquoise mb-2">5</div>
                    <div className="text-sm text-kivisai-moss-green">Monate Projektdauer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-kivisai-clear-turquoise mb-2">2.880€</div>
                    <div className="text-sm text-kivisai-moss-green">Eigenanteil (nach 80% Förderung)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="space-y-6">
              {coachingTimeline.map((phase, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-kivisai-light-cool-gray">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-kivisai-deep-dark-blue">{phase.phase}</CardTitle>
                        <p className="text-kivisai-moss-green">{phase.duration}</p>
                      </div>
                      <Badge className="bg-kivisai-clear-turquoise text-white">
                        {index + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise flex-shrink-0" />
                          <span className="text-kivisai-deep-dark-blue">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für Ihre KI-Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nutzen Sie die 80% INQA-Förderung und starten Sie Ihr Coaching-Projekt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/termin">
                <Button size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-white/90">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenlose Beratung vereinbaren
                </Button>
              </Link>
              <Link href="/leistungen/inqa-coaching/checkliste-inqa">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-kivisai-deep-dark-blue"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  INQA-Checkliste durchgehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
