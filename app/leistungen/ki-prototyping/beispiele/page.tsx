"use client";

import { ArrowRight, Download, Calendar, CheckCircle, TrendingUp, Users, Zap, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeImage from '@/components/safe-image';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const prototypes = [
  {
    id: 1,
    title: "Service-Chatbot",
    description: "Ein KI-Chatbot beantwortet Routinefragen rund um die Uhr und lenkt bis zu 70 % der Tickets in den Self-Service (helpshift.com). Damit lässt sich sogar die komplette Website einer Stadt – inklusive aller beteiligten Akteure – als Wissensquelle anbinden; Antworten werden auf Wunsch klar verständlich in jeder gewünschten Sprache ausgegeben.",
    image: "/images/6_KIVI-SZENEN/KIVI_Prototyp.png",
    category: "Customer Service",
    difficulty: "Mittel",
    timeToValue: "7-9 Wochen",
  },
  {
    id: 2,
    title: "Interner Wissens-Assistent",
    description: "Bislang verbringen Beschäftigte im Schnitt 1,8 Stunden pro Tag mit der Suche nach verstreuten Informationen.Unser Wissens-Assistent legt sämtliche Dokumente sicher hinter Ihrer Firewall ab und nutzt Retrieval-Augmented Generation (RAG) in einem unternehmens­eigenen Large-Language-Model. So erhalten Ihre Teams präzise Antworten in Sekunden – ohne dass vertrauliche Daten Ihr Haus verlassen.",
    image: "/images/6_KIVI-SZENEN/kivi_doc_rag.png",
    category: "Knowledge Management",
    difficulty: "Mittel",
    timeToValue: "6-8 Wochen",
  },
  {
    id: 3,
    title: "Dokumenten & Prozessautomatisierung",
    description: "Automatisierte Workflows verkürzen Bearbeitungszeiten um ≈ 60 % (redwood.com). Automation und KI sind sehr starke Hebel im operativen Einsatz. Autonome Agenten nutzen KI nur innerhalb der Daten- und Rechtegrenzen, die Sie definieren, um Aufgaben komplett selbstständig zu erledigen.",
    image: "/images/6_KIVI-SZENEN/KIVI-AUtomation.png",
    category: "Operations",
    difficulty: "Fortgeschritten",
    timeToValue: "8-24 Wochen",
  },
  {
    id: 4,
    title: "Generative Kommunikations-Assets & Video-Ads",
    description: "KI-Creatives erzielen laut Anbieter bis zu 14× höhere Klickraten (adcreative.ai). Kurze Filme – ob mit eigenem Material oder vollständig generiert – lassen sich mit konsistenten Charakteren mühelos erstellen und sofort ausspielen.",
    image: "/images/6_KIVI-SZENEN/KIVI_Bilder.png",
    category: "Kommunikation",
    difficulty: "Mittel",
    timeToValue: "6-7 Wochen",
  },
  {
    id: 5,
    title: "Social-Media-Automation",
    description: "Automation spart 6–7 h Posting-Aufwand pro Woche (sprinklr.com). Auf Basis Ihres Fachwissens und einer ausgeklügelten Posting¬strategie entstehen hochwertige, multimediale Beiträge, die sich qualitativ kaum von rein menschlich erstellten Inhalten unterscheiden.",
    image: "/images/6_KIVI-SZENEN/KIVI_Socialmedia.png",
    category: "Marketing",
    difficulty: "Einfach",
    timeToValue: "5-6 Wochen",
  },
  {
    id: 6,
    title: "Predictive Maintenance / Qualitätsprüfung",
    description: "Sensor- und KI-gestützte Wartung senkt ungeplante Stillstände um ≈ 30 % (llumin.com) und hebt die OEE um 5–15 % (connectpoint.eu). Dank erkannter Muster liefert das System nicht nur Prognosen, sondern gleich konkrete Handlungsempfehlungen.",
    image: "/images/6_KIVI-SZENEN/KIVI_Prediktiv-maintenance.png",
    category: "Manufacturing",
    difficulty: "Fortgeschritten",
    timeToValue: "10-12 Wochen",
  },
  {
    id: 7,
    title: "Sales- & CRM-Co-Pilot",
    description: "Personalisierte Next-Best-Action-Algorithmen steigern Umsätze typischerweise um 10–15 % (mckinsey.com). Auch individuell zugeschnittene Angebote lassen sich nun in Echtzeit passgenau für jede niche persona erstellen.",
    image: "/images/6_KIVI-SZENEN/KIVI_Verkauf.png",
    category: "Sales",
    difficulty: "Mittel",
    timeToValue: "7-8 Wochen",
  },
  {
    id: 8,
    title: "AI-Recruiting & HR-Assistenz",
    description: "Unternehmen berichten von 50–70 % kürzerer Time-to-Hire (promap.ai). Bei sorgsamem Umgang mit Personen¬daten unterstützt KI den gesamten HR-Prozess – von Vorauswahl bis Onboarding – verlässlich und bias-reduziert.",
    image: "/images/6_KIVI-SZENEN/KIVI_HR.png",
    category: "HR",
    difficulty: "Mittel",
    timeToValue: "8-10 Wochen",
  },
  {
    id: 9,
    title: "TTS-Avatare & KI-Video-Trainer",
    description: "Teleperformance spart im Schnitt 5 Tage Produktionszeit pro Trainings¬video (synthesia.io). Schulungs¬unterlagen entstehen inzwischen überwiegend KI-gestützt – das Lernen selbst zieht rasch nach.",
    image: "/images/6_KIVI-SZENEN/KIVI_Bilder.png",
    category: "Training",
    difficulty: "Mittel",
    timeToValue: "6-7 Wochen",
  },
  {
    id: 10,
    title: "ESG- & CSRD-Reporting-Automation",
    description: "Automatisierte Nachhaltigkeits¬berichte reduzieren den Zeitaufwand um > 40 % (teils sogar bis 70 %) (karomia.eu). KI hilft nicht nur beim Sammeln und Visualisieren großer Datenmengen, sondern liefert auch fundierte Vorschläge für die nächsten Schritte.",
    image: "/images/6_KIVI-SZENEN/KIVI_Reporting.png",
    category: "Compliance",
    difficulty: "Fortgeschritten",
    timeToValue: "9-11 Wochen",
  },
  {
    id: 11,
    title: "Ihr KI-Potenzial entdecken",
    description: "Sie haben die Beispiele gesehen – aber wo liegt Ihr größtes Potenzial? Finden Sie es heraus! Mit unserer KI-Potenzialanalyse entdecken Sie Chancen für sich, Ihr Team, Ihre Organisation und Ihr Ökosystem. Jetzt aktiv werden und StART2ACT!",
    image: "/images/6_KIVI-SZENEN/KIVI_Ratlos_quer.png",
    category: "Analyse & Strategie",
    difficulty: "Individuell",
    timeToValue: "2-8 Wochen",
    cta: {
      label: "KI-Potenzial entdecken",
      href: "/leistungen/ki-potenzialanalyse"
    }
  },
  {
    id: 12,
    title: "Ihren KI-Prototyp verwirklichen",
    description: "Sie wissen, was Sie brauchen! Wir begleiten Sie oder machen es für Sie fertig. Je nach dem, was Ihr Team übernimmt. Wir passen uns an.",
    image: "/images/6_KIVI-SZENEN/KIVI_Prototyping_hoch.png",
    category: "Umsetzung",
    difficulty: "Individuell",
    timeToValue: "nach Bedarf",
    cta: {
      label: "Ihr KIVISAI Team-Netzwerk",
      href: "/leistungen/ki-prototyping/ressourcen"
    }
  },
];

export default function KIPrototypingDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Prototyping", "Beispiele"]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            KI-Prototypen: Beispiele & Inspiration
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Entdecken Sie konkrete KI-Lösungen, die bereits heute in Unternehmen erfolgreich eingesetzt werden. 
            Jeder Prototyp zeigt den Weg von der Idee zur Umsetzung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold">
              <Zap className="w-4 h-4 mr-2" />
              Sofort umsetzbar
            </Badge>
            <Badge variant="secondary" className="bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold">
              <CheckCircle className="w-4 h-4 mr-2" />
              Bewährt in der Praxis
            </Badge>
            <Badge variant="secondary" className="bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold">
              <TrendingUp className="w-4 h-4 mr-2" />
              Messbare Ergebnisse
            </Badge>
          </div>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prototypes.map((prototype) => (
            <Card key={prototype.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <SafeImage
                  src={prototype.image}
                  alt={prototype.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold">
                    {prototype.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-kivisai-dark-blue group-hover:text-kivisai-blue transition-colors">
                  {prototype.title}
                </CardTitle>
                <p className="text-kivisai-moss-green text-sm leading-relaxed">
                  {prototype.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs bg-kivisai-moss-green text-white font-bold">
                      {prototype.difficulty}
                    </Badge>
                  </div>
                  <div className="text-xs text-kivisai-dark-blue font-semibold">
                    ⏱️ {prototype.timeToValue}
                  </div>
                </div>
                {prototype.cta && (
                <div className="flex gap-2">
                    <Button size="sm" variant="kivisai" className="flex-1" asChild>
                      <a href={prototype.cta.href}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                        {prototype.cta.label}
                    </a>
                  </Button>
                </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für Ihren KI-Prototyp?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Lassen Sie uns gemeinsam Ihr erstes KI-Projekt entwickeln. 
            Mit unserer Erfahrung und Ihrem Know-how schaffen wir messbare Ergebnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-kivisai-dark-blue font-bold px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Beratungstermin vereinbaren
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-kivisai-deep-dark-blue bg-white hover:bg-kivisai-light-cool-gray hover:text-kivisai-deep-dark-blue font-bold px-8 py-4" asChild>
              <a href="/kontakt">
                <ArrowRight className="w-5 h-5 mr-2" />
                Bedarf mitteilen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 