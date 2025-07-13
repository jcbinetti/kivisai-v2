import { ArrowRight, Users, Zap, Calendar, Target, TrendingUp, ExternalLink, Clock, CheckCircle, BarChart3, Rocket, Shield, Code, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const phases = [
  {
    phase: "0 — Impact-Workshop",
    goal: "Gemeinsames Verständnis & Erfolgskriterien",
    duration: "½ Tag",
    activities: [
      "Stakeholder-Interviews",
      "\"Problem-Statement\" & Wirkungsmetriken festlegen (z. B. -30 % Bearbeitungszeit, +15 % Umsatz-Lift)"
    ],
    results: "Messbarer \"North Star\", der alle Folgeschritte lenkt"
  },
  {
    phase: "1 — Daten- & Machbarkeits-Check",
    goal: "Prüfen, ob Daten, Rechte, Technik vorhanden sind",
    duration: "3–5 Tage",
    activities: [
      "Dateninventur & Datenschutz-Review",
      "Low-code Playground (Notebooks, Prompt-Tests)"
    ],
    results: "Kurze Feasibility-Demo (\"funktioniert überhaupt\")"
  },
  {
    phase: "2 — Rapid Prototype",
    goal: "Funktionsfähiger Vertikal-Schnitt",
    duration: "1–2 Sprints à 1 Woche",
    activities: [
      "Kleinstmöglichen Use-Case wählen",
      "Modell oder Agent bauen (Open-Source, API, RAG, Fine-Tuning)",
      "UI-Mock-up oder Chat-Interface"
    ],
    results: "Klickbares Produktstück, zeigt Ende-zu-Ende-Nutzwert"
  },
  {
    phase: "3 — Pilot & Erfolgsmessung",
    goal: "Wirkung im Alltag beweisen",
    duration: "1–2 Wochen",
    activities: [
      "Roll-out bei ≤ 25 Nutzer*innen oder einer Maschine/Linie",
      "Live-Dashboards für die vorher definierten KPIs"
    ],
    results: "Erste harten Zahlen (Ticket-Deflection, Downtime-Reduktion …)"
  },
  {
    phase: "4 — Iteration & Skalierung",
    goal: "Reife, Governance, Roll-out",
    duration: "2–3 Sprints",
    activities: [
      "Feedback-loops (Prompt-Tuning, Feature-Engineering)",
      "MLOps-Pipelines, Monitoring, Bias-Tests",
      "Roll-out auf weitere Teams / Systeme"
    ],
    results: "Stabile, skalierbare Lösung, vorbereitet für Go-Live"
  }
];

const whyItWorks = [
  {
    title: "Fokus auf Impact statt Technik",
    description: "Jede Phase startet mit der Frage: \"Wie bemerken Nutzer*innen den Unterschied morgen?\""
  },
  {
    title: "Minimaler, aber realer Scope",
    description: "Ein eng gefasster Use-Case (z. B. nur Vertriebs-E-Mails, nur eine Maschinenklasse) liefert in Wochen harte Belege, statt sich monatelang zu verzetteln."
  },
  {
    title: "Interdisziplinäre Crew",
    description: "Domain-Expertinnen, Data/ML-Engineers, Prompt-Designerinnen, UX-Research und Governance arbeiten in einem Raum. So landen keine Features im Niemandsland."
  },
  {
    title: "Sichere Sandbox",
    description: "Modelle laufen zunächst isoliert (On-Prem, Private Cloud). Erst nach bestandenen Compliance-Checks kommen echte Produktionsdaten dazu."
  },
  {
    title: "MLOps ab Sprint 1",
    description: "Versionierung, automatisierte Tests und CI/CD sorgen dafür, dass Prototyp-Code ohne Neuschreiben in Produktion kann."
  }
];

const examples = [
  {
    useCase: "Wissens-Chatbot",
    metric: "Ticket-Deflection-Rate",
    result: "-50 % Routineanfragen"
  },
  {
    useCase: "Predictive Maintenance",
    metric: "Ungeplante Stillstände",
    result: "-30 %"
  },
  {
    useCase: "Marketing-Creative-Generator",
    metric: "Klickrate",
    result: "× 3–14"
  }
];

const nextSteps = [
  "Impact-Workshop buchen – wir definieren in vier Stunden Zielmetrik, Datenlage und Pilot-Scope.",
  "Kick-off in 7 Tagen – Prototyp-Sprint startet, erstes Demo-Ergebnis am Ende der ersten Woche.",
  "Pilot-Erfolg messen – Nach maximal sechs Wochen liegen belastbare KPIs für Budget- und Roll-out-Entscheidungen vor."
];

export default function KIPrototypingAblaufPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Prototyping", "Ablauf"]} />
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
            So läuft ein KI-Prototyping, das schnell Wirkung zeigt
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Ein strukturierter 5-Phasen-Ansatz, der in wenigen Wochen messbare Ergebnisse liefert – 
            von der ersten Idee bis zur produktionsreifen Lösung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Rocket className="w-4 h-4 mr-2" />
              Schnelle Wirkung
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Target className="w-4 h-4 mr-2" />
              Messbare Ergebnisse
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Sichere Umsetzung
            </Badge>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Der 5-Phasen-Ablauf</h2>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-kivisai-light-cool-gray shadow-xl border border-kivisai-blue/10">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold bg-kivisai-blue text-white shadow-md">
                      {phase.phase}
                    </div>
                    <Badge variant="outline" className="text-sm bg-kivisai-blue/10 text-kivisai-blue border-kivisai-blue/30">
                      <Clock className="w-3 h-3 mr-1" />
                      {phase.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-kivisai-dark-blue">
                    {phase.goal}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-kivisai-blue text-sm mb-2">Schlüssel-Aktivitäten</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-kivisai-dark-blue text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-kivisai-blue rounded-full mt-2 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kivisai-blue text-sm mb-2">Sichtbare Ergebnisse</h4>
                      <p className="text-kivisai-moss-green text-sm leading-relaxed font-medium">
                        {phase.results}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Warum der Ansatz wirkt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItWorks.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-kivisai-light-cool-gray rounded-lg shadow-md border border-kivisai-blue/10">
                <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-kivisai-moss-green leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Schnell sichtbare Ergebnisse – Beispiele</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-kivisai-blue/20">
                  <th className="text-left py-3 px-4 font-semibold text-kivisai-dark-blue">Use-Case</th>
                  <th className="text-left py-3 px-4 font-semibold text-kivisai-dark-blue">Metrik</th>
                  <th className="text-left py-3 px-4 font-semibold text-kivisai-dark-blue">Typisches Ergebnis nach 4–6 Wochen</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((example, index) => (
                  <tr key={index} className="border-b border-kivisai-light-cool-gray/50">
                    <td className="py-3 px-4 font-medium text-kivisai-dark-blue">{example.useCase}</td>
                    <td className="py-3 px-4 text-kivisai-blue">{example.metric}</td>
                    <td className="py-3 px-4 font-semibold text-kivisai-moss-green">{example.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <Card className="border-0 bg-gradient-to-br from-white to-kivisai-light-cool-gray shadow-xl border border-kivisai-blue/10">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Impact-Workshop buchen
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Definieren Sie in vier Stunden Zielmetrik, Datenlage und Pilot-Scope für Ihr KI-Projekt.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/termin">
                    <Calendar className="w-4 h-4 mr-2" />
                    Workshop buchen
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-white to-kivisai-light-cool-gray shadow-xl border border-kivisai-blue/10">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Prototyp Beispiele
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Entdecken Sie konkrete KI-Lösungen, die bereits heute in Unternehmen erfolgreich eingesetzt werden.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/leistungen/ki-prototyping/beispiele">
                    <ExternalLink className="w-4 h-4 mr-2" />
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