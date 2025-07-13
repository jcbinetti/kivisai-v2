import { ArrowRight, CheckCircle, Users, Zap, Calendar, Target, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const steps = [
  {
    step: "Impuls-Workshop",
    benefit: "Gemeinsames Bild & Erfolgskriterien",
    description: "Stakeholder-Interviews, Ziel-Canvas, Auswahl des Kern-Use-Cases"
  },
  {
    step: "Machbarkeits-Check",
    benefit: "Klarheit über Daten & Technik",
    description: "Dateninventur, Datenschutz- und Lizenzprüfung, Proof-of-Concept-Tests"
  },
  {
    step: "Rapid Prototype",
    benefit: "Greifbarer Funktions-Schnitt",
    description: "Minimal Viable Prototype mit Chat- oder UI-Demo, Nutzerfeedback-Runde"
  },
  {
    step: "Pilot & Skalierung",
    benefit: "Wirkung im Realbetrieb",
    description: "Roll-out an eine erste Nutzer-/Maschinengruppe, Monitoring, Go-/No-Go-Entscheid"
  }
];

const promises = [
  {
    phase: "Think",
    description: "Wir starten bei Ihren Zielen, nicht bei der Technologie."
  },
  {
    phase: "Enable",
    description: "Interdisziplinäre Crews bauen Lösungen, die sofort testbar sind."
  },
  {
    phase: "Share",
    description: "Ergebnisse und Erkenntnisse werden offen geteilt, damit Ihr Team schnell lernt."
  },
  {
    phase: "Grow",
    description: "Was funktioniert, skalieren wir; was nicht passt, verwerfen wir ohne Ballast."
  }
];

const benefits = [
  "Klare Roadmap: Transparenter Ablauf mit definierten Meilensteinen, und Sprint-Rhythmus, Zeiteinsatz und Schnittstellen.",
  "Flexibler Ressourceneinsatz: Sie bestimmen, wie viel internes Know-how eingebunden wird.",
  "Messbarer MVP: Ein Prototyp, der den kompletten Wertstrom abbildet und Entscheidungssicherheit liefert.",
  "Nahtloser Übergang: Code, Daten-Pipelines und Governance sind von Anfang an MLOps-ready."
];

const nextSteps = [
  "Impuls-Workshop anfragen – 3 Stunden Remote oder vor Ort.",
  "Kick-off in 7 Tagen – erster Sprint beginnt.",
  "Pilot-Go/No-Go – nach wenigen Wochen liegt Ihr Entscheidungs-Cockpit vor."
];

export default function KIPrototypingBegleitungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Prototyping", "Begleitung"]} />
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
            KI-Prototyping mit KIVISAI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Vom ersten Impuls zum belastbaren MVP – schlank, fokussiert, menschenzentriert.
          </p>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Unser Vorgehen übersetzt den KIVISAI-Loop (Think → Enable → Share → Grow) in einen klaren Prototyping-Pfad, 
            damit Sie schnell sehen, was KI in Ihrem Alltag bewirkt – ohne sich in Details zu verlieren.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <img src="/images/4_KIVISAI-NAVI/KIVI_ENABLE.png" alt="Enable" className="w-4 h-4 mr-2" />
              Schlank & fokussiert
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <img src="/images/4_KIVISAI-NAVI/KIVI_Mensch.png" alt="Mensch" className="w-4 h-4 mr-2" />
              Menschenzentriert
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <img src="/images/4_KIVISAI-NAVI/KIVI-USECASE.png" alt="Use Case" className="w-4 h-4 mr-2" />
              MVP-orientiert
            </Badge>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Unser Prototyping-Pfad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm bg-kivisai-clear-turquoise text-white font-bold">
                      Schritt {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-kivisai-dark-blue">
                    {step.step}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Ihr Nutzen</h4>
                    <p className="text-kivisai-dark-blue text-sm">{step.benefit}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Was passiert konkret?</h4>
                    <p className="text-kivisai-moss-green text-xs leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 p-4 bg-kivisai-light-cool-gray rounded-lg">
            <p className="text-sm text-kivisai-dark-blue italic">
              * Variabel: Sprint-Rhythmus, Team-Setup und Gesamtdauer richten sich nach Komplexität des Use Cases 
              und nach den verfügbaren Ressourcen in Ihrem und unserem Netzwerk (intern / extern).
            </p>
          </div>
        </div>
      </section>

      {/* KIVISAI Promise Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Unser Versprechen – KIVISAI in jeder Phase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
                <div className="flex flex-col items-center w-20">
                  <img 
                    src={`/images/4_KIVISAI-NAVI/KIVI_${promise.phase.toUpperCase()}.png`}
                    alt={`KIVI ${promise.phase} Icon`}
                    className="w-16 h-16 mb-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2">
                    {promise.description}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Was Sie kaufen</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
                <div className="w-8 h-8 bg-kivisai-moss-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-kivisai-dark-blue leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Nächste Schritte</h2>
          <div className="space-y-4 mb-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
                <div className="w-8 h-8 bg-kivisai-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-kivisai-dark-blue leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise rounded-lg">
            <p className="text-white font-semibold text-lg mb-4">
              Handeln statt grübeln: Jede Woche Verzögerung kostet Lernkurven und Marktchancen. 
              Lassen Sie uns gemeinsam Wirkung entfalten.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Bereit für den nächsten Schritt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <img src="/images/4_KIVISAI-NAVI/KIVI_Team.png" alt="Team" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Ihr KI-Begleiter Team
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Lernen Sie unser interdisziplinäres Team kennen und erfahren Sie, 
                  wie wir Sie bei Ihrem KI-Projekt unterstützen.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/ueber-kivisai/team-netzwerk">
                    <img src="/images/4_KIVISAI-NAVI/KIVI_Team.png" alt="Team" className="w-4 h-4 mr-2" />
                    Team kennenlernen
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <img src="/images/4_KIVISAI-NAVI/KIVI-USECASE.png" alt="Use Case" className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Prototyp Beispiele
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Entdecken Sie konkrete KI-Lösungen, die bereits heute in Unternehmen 
                  erfolgreich eingesetzt werden.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/leistungen/ki-prototyping">
                    <img src="/images/4_KIVISAI-NAVI/KIVI-USECASE.png" alt="Use Case" className="w-4 h-4 mr-2" />
                    Beispiele ansehen
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 