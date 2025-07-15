import { ArrowRight, Download, Calendar, CheckCircle, TrendingUp, Users, Zap, Play, ExternalLink, Map, BookOpen, Users2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeImage from '@/components/safe-image';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function KIPrototypingPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Prototyping"]} />
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
              <img src="/images-optimized/4_KIVISAI-NAVI/KIVI_ENABLE.webp" alt="Enable" className="w-4 h-4 mr-2" />
              Schlank & fokussiert
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <img src="/images-optimized/4_KIVISAI-NAVI/KIVI_Mensch.webp" alt="Mensch" className="w-4 h-4 mr-2" />
              Menschenzentriert
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <img src="/images-optimized/4_KIVISAI-NAVI/KIVI-USECASE.webp" alt="Use Case" className="w-4 h-4 mr-2" />
              MVP-orientiert
            </Badge>
          </div>
        </div>
      </section>



      {/* Unser Prototyping-Pfad */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-4">Unser Prototyping-Pfad</h2>
            <p className="text-lg text-kivisai-moss-green max-w-4xl mx-auto leading-relaxed">
              Unser strukturierter Ansatz führt Sie in vier klaren Schritten vom ersten Impuls zum belastbaren MVP. 
              Jeder Schritt baut auf dem vorherigen auf und bringt Sie näher an Ihr Ziel: eine KI-Lösung, die in Ihrem Alltag wirkt.
            </p>
          </div>
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

      {/* Was Sie kaufen Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue text-center pt-10 pb-6">Was Sie kaufen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow p-6 h-full">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-kivisai-dark-blue">Klare Roadmap</h3>
              <p className="text-kivisai-moss-green text-sm">Transparenter Ablauf mit definierten Meilensteinen, und Sprint-Rhythmus, Zeiteinsatz und Schnittstellen.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow p-6 h-full">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-kivisai-dark-blue">Flexibler Ressourceneinsatz</h3>
              <p className="text-kivisai-moss-green text-sm">Sie bestimmen, wie viel internes Know-how eingebunden wird.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow p-6 h-full">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-kivisai-dark-blue">Messbarer MVP</h3>
              <p className="text-kivisai-moss-green text-sm">Ein Prototyp, der den kompletten Wertstrom abbildet und Entscheidungssicherheit liefert.</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow p-6 h-full">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2 text-kivisai-dark-blue">Nahtloser Übergang</h3>
              <p className="text-kivisai-moss-green text-sm">Code, Daten-Pipelines und Governance sind von Anfang an MLOps-ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototypes Teaser */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <SafeImage
                src="/images-optimized/6_KIVI-SZENEN/KIVI_Prototyping_hoch.webp"
                alt="KI-Prototyping Beispiele - 12 verschiedene KI-Lösungen für Unternehmen"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kivisai-deep-dark-blue/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold">
                  <Zap className="w-4 h-4 mr-2" />
                  12 Beispiele
                </Badge>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-kivisai-deep-dark-blue mb-6">
                KI-Prototypen: Konkrete Beispiele & Inspiration
              </h2>
              <p className="text-lg text-kivisai-moss-green mb-6 leading-relaxed">
                12 bewährte KI-Lösungen, die bereits heute in Unternehmen erfolgreich eingesetzt werden. 
                Von Service-Chatbots bis hin zu Predictive Maintenance – jeder Prototyp zeigt den Weg von der Idee zur Umsetzung.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">12</div>
                  <div className="text-sm text-kivisai-moss-green">Prototypen</div>
                </div>
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">8</div>
                  <div className="text-sm text-kivisai-moss-green">Kategorien</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise" />
                  <span className="text-kivisai-moss-green">Service-Chatbot & Wissens-Assistent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise" />
                  <span className="text-kivisai-moss-green">Prozessautomatisierung & Predictive Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise" />
                  <span className="text-kivisai-moss-green">Marketing, Sales & HR-Assistenz</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-kivisai-clear-turquoise" />
                  <span className="text-kivisai-moss-green">ESG-Reporting & Video-Training</span>
                </div>
              </div>
              
              <Link href="/leistungen/ki-prototyping/beispiele" className="w-full">
                <Button size="lg" className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white font-bold py-4 text-lg group">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Alle 12 Prototypen ansehen
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
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
            {[
              {
                phase: "THINK",
                description: "Wir starten bei Ihren Zielen, nicht bei der Technologie."
              },
              {
                phase: "ENABLE",
                description: "Interdisziplinäre Crews bauen Lösungen, die sofort testbar sind."
              },
              {
                phase: "SHARE",
                description: "Ergebnisse und Erkenntnisse werden offen geteilt, damit Ihr Team schnell lernt."
              },
              {
                phase: "GROW",
                description: "Was funktioniert, skalieren wir; was nicht passt, verwerfen wir ohne Ballast."
              }
            ].map((promise, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
                <div className="flex flex-col items-center w-24">
                  <img 
                    src={`/images-optimized/4_KIVISAI-NAVI/KIVI_${promise.phase}.webp`}
                    alt={`KIVI ${promise.phase} Icon`}
                    className="w-20 h-20 mb-2 object-contain"
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

      {/* Abschluss-Statement mit Signet */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-blue/10 rounded-2xl shadow-2xl mb-12 animate-fade-in" style={{ animation: 'fadeIn 1.2s ease-in' }}>
        <p className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-8">
          Handeln statt grübeln: <span className="text-kivisai-blue">Jede Woche Verzögerung kostet Lernkurven und Marktchancen.</span><br />
          <span className="text-kivisai-moss-green">Lassen Sie uns gemeinsam Wirkung entfalten.</span>
        </p>
        <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-kivisai-clear-turquoise via-kivisai-blue to-kivisai-vibrant-turquoise bg-clip-text text-transparent mb-8 animate-pulse-slow" style={{ animation: 'pulse 2.5s infinite' }}>
          Start to act.
        </p>
        <img src="/images-optimized/KIVISAI_signet_tr.webp" alt="KIVISAI Signet" className="mx-auto w-24 h-24 opacity-80 mb-8" />
      </section>

      {/* Navigation zu Unterseiten */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">
              KI-Prototyping Navigation
            </h2>
            <p className="text-xl text-kivisai-moss-green max-w-3xl mx-auto">
              Hier finden Sie alle wichtigen Unterelemente unserer KI-Prototyping-Leistung: vom strukturierten Ablauf über konkrete Beispiele bis hin zu praktischen Ressourcen für Ihr Projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ablauf */}
            <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-clear-turquoise hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Ablauf</h3>
              <p className="text-kivisai-moss-green text-sm mb-6 leading-relaxed">
                Erfahren Sie, wie unser strukturierter KI-Prototyping-Prozess funktioniert und welche Phasen Ihr Projekt durchläuft.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">5</div>
                  <div className="text-sm text-kivisai-moss-green">Phasen</div>
                </div>
              </div>
              
              <Link href="/leistungen/ki-prototyping/ablauf" className="w-full">
                <Button size="lg" className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white font-bold py-4 text-lg group-hover:shadow-lg transition-all duration-300">
                  Ablauf entdecken
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Details */}
            <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-vibrant-light-green hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-kivisai-vibrant-light-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Beispiele</h3>
              <p className="text-kivisai-moss-green text-sm mb-6 leading-relaxed">
                Praxisnahe KI-Prototypen für verschiedene Bereiche – von Chatbots bis Automatisierung.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">12</div>
                  <div className="text-sm text-kivisai-moss-green">Prototypen</div>
                </div>
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">8</div>
                  <div className="text-sm text-kivisai-moss-green">Kategorien</div>
                </div>
              </div>
              
              <Link href="/leistungen/ki-prototyping/beispiele" className="w-full">
                <Button size="lg" className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white font-bold py-4 text-lg group">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Beispiele entdecken
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>



            {/* Team & Modelle */}
            <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-deep-dark-blue hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">Team & Modelle</h3>
              <p className="text-kivisai-moss-green text-sm mb-6 leading-relaxed">
                Unser KIVISAI Netzwerk arbeitet nach Ihren Bedürfnissen. Drei flexible Engagement-Modelle für maßgeschneiderte Unterstützung.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">3</div>
                  <div className="text-sm text-kivisai-moss-green">Rollen</div>
                </div>
                <div className="text-center p-4 bg-kivisai-light-cool-gray/50 rounded-lg">
                  <div className="text-2xl font-bold text-kivisai-clear-turquoise mb-1">3</div>
                  <div className="text-sm text-kivisai-moss-green">Modelle</div>
                </div>
              </div>
              
              <Link href="/leistungen/ki-prototyping/ressourcen" className="w-full">
                <Button size="lg" className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white font-bold py-4 text-lg group-hover:shadow-lg transition-all duration-300">
                  Team entdecken
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
