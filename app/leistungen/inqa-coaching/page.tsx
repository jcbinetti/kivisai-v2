import type { Metadata } from "next"
import { Users, Target, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SafeImage from "@/components/safe-image";
import Image from "next/image";
import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template";
import { ContentSection } from "@/components/common/content-section";
import { DownloadCards } from "@/components/documents/download-cards";
import { LightboxImage } from "@/components/ui/lightbox-image";
import React, { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export const dynamic = "force-static"
export const revalidate = 3600 // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "INQA-Coaching | Zertifizierte Beratung für nachhaltige Arbeitsgestaltung | KIVISAI",
  description:
    "Professionelles INQA-Coaching für nachhaltige Arbeitsgestaltung und Organisationsentwicklung. Zertifizierte Beratung für Ihr Unternehmen.",
  keywords: "INQA-Coaching, Arbeitsgestaltung, Organisationsentwicklung, Nachhaltigkeit, Beratung",
}

export default function INQACoachingPage() {
  // INQA-Coaching Dokumente
  const inqaCoachingDocuments = [
    {
      id: "inqa-flyer",
      title: "INQA-Coaching Flyer",
      description: "Übersicht über das staatlich geförderte INQA-Coaching Programm für nachhaltige Digitalisierung",
      filePath: "/downloads/250411_INQA_Coaching_Flyer_Online_FINAL.pdf",
      fileSize: "252 KB",
      fileType: "pdf",
      downloadCount: 45,
      lastUpdated: "2024-01-15"
    },
    {
      id: "inqa-checkliste",
      title: "INQA-Checkliste Förderfähigkeit",
      description: "Praktische Checkliste zur Prüfung der Förderfähigkeit für INQA-Coaching",
      filePath: "/downloads/INQA_Checkliste_Foerderfaehigkeit.pdf",
      fileSize: "395 KB",
      fileType: "pdf",
      downloadCount: 32,
      lastUpdated: "2024-01-10"
    },
    {
      id: "kmu-definition",
      title: "Benutzerleitfaden KMU-Definition",
      description: "Leitfaden zur Definition von Klein- und Mittelunternehmen (KMU) für Förderprogramme",
      filePath: "/downloads/Benutzerleitfaden_zur_Definition_von_KMU.pdf",
      fileSize: "1.1 MB",
      fileType: "pdf",
      downloadCount: 28,
      lastUpdated: "2024-01-08"
    },
    {
      id: "esf-erklaerung",
      title: "ESF-Erklärung GRC",
      description: "Offizielle ESF-Dokumente und Erklärungen für das INQA-Coaching Programm",
      filePath: "/downloads/1_INQA-COACHING/ESF-00-24-01_Dokument_-_Erklaerung_GRC_ohne_TN_1_.pdf",
      fileSize: "1.0 MB",
      fileType: "pdf",
      downloadCount: 15,
      lastUpdated: "2024-01-05"
    },
    {
      id: "de-minimis-erklaerung",
      title: "De-minimis Erklärung",
      description: "De-minimis Erklärung für staatliche Förderprogramme und Beihilfen",
      filePath: "/downloads/1_INQA-COACHING/ESF-25-83-02-_Dok_ex_De-minimis-Erklaerung.pdf",
      fileSize: "947 KB",
      fileType: "pdf",
      downloadCount: 12,
      lastUpdated: "2024-01-03"
    },
    {
      id: "inqa-coaching-ic",
      title: "INQA-Coaching IC Dokument",
      description: "Detaillierte Informationen zum INQA-Coaching Programm und Ablauf",
      filePath: "/downloads/1_INQA-COACHING/INQA-Coaching-IC2524674.pdf",
      fileSize: "185 KB",
      fileType: "pdf",
      downloadCount: 38,
      lastUpdated: "2024-01-12"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Mitarbeiter-Zentrierung",
      description: "Fokus auf die Bedürfnisse und das Wohlbefinden Ihrer Mitarbeiter",
    },
    {
      icon: Target,
      title: "Zielgerichtete Entwicklung",
      description: "Systematische Verbesserung der Arbeitsqualität und -organisation",
    },
    {
      icon: TrendingUp,
      title: "Nachhaltige Ergebnisse",
      description: "Langfristige positive Veränderungen in Ihrer Organisation",
    },
    {
      icon: Award,
      title: "Zertifizierte Qualität",
      description: "Autorisierte INQA-Coaches mit nachgewiesener Expertise",
    },
  ]

  const coachingAreas = [
    "Führungskultur und -kompetenz",
    "Gesunde Arbeitsgestaltung",
    "Digitale Transformation",
    "Diversity und Inklusion",
    "Work-Life-Balance",
    "Organisationsentwicklung",
    "Change Management",
    "Teamdynamik und Zusammenarbeit",
  ]

  const process = [
    {
      step: "1",
      title: "Erstberatung",
      description: "Kostenlose Analyse Ihrer aktuellen Situation und Herausforderungen",
    },
    {
      step: "2",
      title: "Bedarfsanalyse",
      description: "Detaillierte Bewertung und Entwicklung eines maßgeschneiderten Coaching-Plans",
    },
    {
      step: "3",
      title: "Coaching",
      description: "Systematische Umsetzung mit regelmäßigen Feedback-Schleifen",
    },
    {
      step: "4",
      title: "Bericht",
      description: "Langfristige Begleitung und Sicherstellung der Ergebnisse",
    },
  ]

  return (
    <LeistungenPageTemplate
      heroTitle="INQA-Coaching"
      heroSubtitle="Zertifizierte Beratung für nachhaltige Arbeitsgestaltung"
      heroDescription="Nachhaltige Arbeitsgestaltung für eine zukunftsfähige Organisation. Professionelles INQA-Coaching für nachhaltige Arbeitsgestaltung und Organisationsentwicklung."
      serviceName="INQA-Coaching"
      heroBackground="gradient"
      ctaSection={{
        variant: "centered",
        background: "gradient",
        size: "lg",
        title: "Bereit für INQA-Coaching?",
        description: "Lassen Sie uns gemeinsam Ihre Arbeitsqualität nachhaltig verbessern und zukunftsfähige Arbeitsstrukturen entwickeln.",
        primaryCta: {
          text: "Beratungstermin vereinbaren",
          href: "/termin?service=inqa-coaching",
          icon: "calendar"
        },
        secondaryCta: {
          text: "Details zum INQA-Coaching",
          href: "/leistungen/inqa-coaching/details",
          icon: "arrow"
        }
      }}
    >
      {/* INQA Badge Section */}
      <ContentSection variant="centered" background="white" padding="lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto mb-6">
          <SafeImage
            src="/images/Badges_Autorisierter_INQA-Coach_2025-2026.png"
            alt="Autorisierter INQA-Coach 2025-2026"
            width={120}
            height={120}
            className="h-auto"
          />
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="text-left">
              <h2 className="text-xl font-bold text-kivisai-deep-dark-blue mb-1">INQA-Coaching: Qualität für die Arbeitswelt der Zukunft</h2>
              <p className="text-lg text-kivisai-moss-green leading-relaxed">
                INQA-Coaching ist ein zertifiziertes Beratungsangebot der Initiative Neue Qualität der Arbeit (INQA).<br />
                Es unterstützt Unternehmen dabei, ihre Arbeitsqualität nachhaltig zu verbessern und zukunftsfähige Arbeitsstrukturen zu entwickeln.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Vorteile Section */}
      <ContentSection variant="centered" background="gradient" className="text-white bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise" padding="lg" title={<span className="text-white">Unsere Vorteile</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>

      {/* INQA Prozess Visualisierung */}
      <ContentSection variant="default" background="white" padding="lg" title="INQA-Coaching Arbeitsphasen">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <LightboxImage
              src="/images/INQA-Prozessschritte.png"
              alt="INQA-Coaching Arbeitsphasen: 3 strukturierte Phasen mit Planungssitzungen, Bewertungen und Fortschrittsberichten"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              caption="Klicken Sie zum Vergrößern"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue leading-tight">
              Eine erprobte agile Coaching-Methode um Ihre digitale Transformation zu boostern
            </h2>
            <p className="text-lg text-kivisai-moss-green leading-relaxed">
              Das INQA-Coaching folgt einer bewährten 3-Phasen-Methodik, die systematisch Ihre digitale Transformation vorantreibt. 
              Von der initialen Analyse bis zur nachhaltigen Implementierung begleiten wir Sie durch jeden Schritt.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-kivisai-moss-green">Strukturierte Arbeitsphasen mit klaren Meilensteinen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-kivisai-moss-green">Regelmäßige Bewertungen und Anpassungen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-kivisai-moss-green">Nachhaltige Ergebnisse durch kontinuierliche Begleitung</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Arbeit der Zukunft Section */}
      <ContentSection variant="default" background="gradient" className="text-white bg-gradient-to-br from-kivisai-clear-turquoise to-kivisai-deep-dark-blue" padding="lg" title="Die Arbeit der Zukunft">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Die Arbeit der Zukunft ist mit dem KI-disruptiven Momentum eng verzahnt
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Unsere KI-Coaching-Ansätze verbinden traditionelle Arbeitsgestaltung mit der disruptiven Kraft der künstlichen Intelligenz. 
              Wir bereiten Sie und Ihr Team auf die Arbeitswelt von morgen vor – wo Mensch und KI harmonisch zusammenarbeiten.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                </div>
                <p className="text-white/90">KI-Integration in bestehende Arbeitsprozesse</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                </div>
                <p className="text-white/90">Mensch-KI-Kollaboration für optimale Ergebnisse</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-kivisai-deep-dark-blue" />
                </div>
                <p className="text-white/90">Zukunftssichere Kompetenzentwicklung</p>
              </div>
            </div>
          </div>
          <div>
            <LightboxImage
              src="/images/1_INQA_COACHING/INQA-Arbeitderzukunft.png"
              alt="Die Arbeit der Zukunft: KI-Integration und menschliche Kompetenzen im Einklang"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              caption="Klicken Sie zum Vergrößern"
            />
          </div>
        </div>
      </ContentSection>

      {/* Konkretes Beispiel */}
      <ContentSection variant="default" background="gray" padding="lg" title="Konkretes Beispiel: KI-Transformation im Mittelstand">
        <Card className="border-l-4 border-l-green-500 bg-green-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-green-500" />
              Erfolgreiche Transformation
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-3">Ausgangssituation</h4>
                <ul className="space-y-2 text-kivisai-moss-green">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Mittelständisches Unternehmen mit 45 Mitarbeitern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Veraltete Prozesse und Fachkräftemangel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Digitalisierungsrückstand gegenüber Wettbewerbern</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-3">INQA-Coaching Ergebnisse</h4>
                <ul className="space-y-2 text-kivisai-moss-green">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">30% Effizienzsteigerung durch Prozessoptimierung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">KI-Integration in 3 Kernprozessen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Verbesserte Mitarbeiterzufriedenheit um 25%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </ContentSection>

      {/* Coaching-Bereiche */}
      <ContentSection variant="centered" background="white" padding="lg" title="INQA Themenfelder & KIVISAI Ansatz">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-kivisai-deep-dark-blue mb-4">Vier Themenfelder – ein Ziel: Mensch im Mittelpunkt</h2>
          <p className="text-lg text-kivisai-moss-green">
            Digitale Transformation wirkt auf alle vier INQA-Themenfelder: Führung, Gesundheit, Chancengleichheit & Diversity sowie Wissen & Kompetenz. <br />
            Im KIVISAI-Ansatz steht der Mensch im Vordergrund – für nachhaltige, zukunftsfähige Arbeitswelten.
          </p>
        </div>
        <div className="flex justify-center">
          <LightboxImage
            src="/images/1_INQA_COACHING/INQA-Themenfelder.png"
            alt="INQA Themenfelder: Führung, Gesundheit, Chancengleichheit & Diversity, Wissen & Kompetenz"
            width={700}
            height={400}
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            caption="Klicken zum Vergrößern"
          />
        </div>
      </ContentSection>

      {/* Prozess */}
      <ContentSection variant="centered" background="gradient" className="text-white bg-gradient-to-br from-kivisai-clear-turquoise to-kivisai-deep-dark-blue" padding="lg" title="Unser INQA-Coaching Prozess">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {process.map((step, index) => (
            <Card key={index} className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <div className="w-12 h-12 bg-kivisai-vibrant-turquoise text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <CardTitle className="text-lg text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>

      {/* Download Cards */}
      <DownloadCards 
        documents={inqaCoachingDocuments}
        title="INQA-Coaching Dokumente"
        description="Alle wichtigen Informationen und Dokumente zum INQA-Coaching Programm"
      />
    </LeistungenPageTemplate>
  )
}
