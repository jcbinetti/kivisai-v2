import { ArrowRight, Download, Calendar, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const solutions = [
  {
    id: 1,
    title: "Service-Chatbot + RAG (Retrieval-Augmented-Generation)",
    pain: "Hotline-Kosten, lange FAQ-Suche",
    gain: "24 × 7 Self-Service, 40–85 % Ticket-Deflection (desk365.io)",
    primaryGoal: "Schnelle, konsistente Kundenantworten, Entlastung Support-Team",
    tools: "Azure OpenAI + Cognitive Search, LangChain, Zendesk AI, Freshdesk Co-Pilot"
  },
  {
    id: 2,
    title: "Interner Wissens-Assistent (RAG-Knowledge-Hub)",
    pain: "Know-how in Ordnern & Mails vergraben",
    gain: "< 30 s Antworten, kürzere Einarbeitung (resources.nvidia.com, theblue.ai)",
    primaryGoal: "\"Single Source of Truth\" für Teams, reduziertes Silo-Wissen",
    tools: "Haystack, Pinecone, Weaviate, Notion-Q&A, Microsoft Fabric"
  },
  {
    id: 3,
    title: "AI-gestützte Prozess- & Dokumentenautomatisierung",
    pain: "Manuelle Rechnungs-, Bestell- oder HR-Workflows",
    gain: "30–60 % Zeitersparnis (businessinsider.com)",
    primaryGoal: "Kostensenkung, Fehlerreduktion, Compliance",
    tools: "UiPath+AI Center, Power Automate AI, Make.com, Kofax"
  },
  {
    id: 4,
    title: "Generative Marketing-Assets & Video-Ads",
    pain: "Teure Agenturen, Content-Engpässe",
    gain: "bis 14× höhere CTR mit KI-Creatives (adcreative.ai)",
    primaryGoal: "Skalierbare Kampagnen, schneller A/B-Test",
    tools: "Adcreative.ai, Meta AI Video-Ads (bloomberg.com), Canva Magic-Media"
  },
  {
    id: 5,
    title: "Social-Media Voll-Automation (Plan→Post→Analyse)",
    pain: "Hohes Zeitbudget für tägliche Posts",
    gain: "6–10 h/Woche frei, konsistentes Branding",
    primaryGoal: "Reichweite steigern, Leads günstiger gewinnen",
    tools: "Hootsuite OwlyWriter AI, Buffer IdeasAI, Sprout Social AI"
  },
  {
    id: 6,
    title: "Predictive Maintenance / Qualitätsprüfung",
    pain: "Ungeplante Maschinenstillstände",
    gain: "−30 % Ausfallkosten, +15 % OEE (verdantix.com)",
    primaryGoal: "Produktionsausfälle vermeiden, Ersatzteile just-in-time",
    tools: "AWS Lookout for Equipment, Siemens Mindsphere, Edge-Vision-AI"
  },
  {
    id: 7,
    title: "Sales- & CRM-Co-Pilot",
    pain: "Kaltakquise ineffizient, ungenaue Forecasts",
    gain: "+15 % Conversion, präzisere Pipeline (mckinsey.com)",
    primaryGoal: "Next-Best-Action & Lead-Scoring",
    tools: "HubSpot AI Assist, Dynamics 365 Sales Copilot, Salesforce Einstein-GPT"
  },
  {
    id: 8,
    title: "AI-Recruiting & HR-Assistenz",
    pain: "CV-Flut, langes Screening",
    gain: "50–70 % schnellere Shortlist, Bias-Kontrolle",
    primaryGoal: "Fachkräfte finden, Onboarding automatisieren",
    tools: "Personio AI, LinkedIn Recruiter AI, Paradox Olivia-Bot"
  },
  {
    id: 9,
    title: "TTS-Avatare & KI-Video-Trainer",
    pain: "Präsenzschulungen teuer, Lernmaterial veraltet",
    gain: "Skalierbares e-Learning, persönliche Ansprache (globenewswire.com, vidboard.ai)",
    primaryGoal: "Mitarbeiter-Upskilling, Kunden-Tutorials",
    tools: "Synthesia, HeyGen, VidBoard, ElevenLabs Voice"
  },
  {
    id: 10,
    title: "ESG- & gesetzliche Reporting-Automation",
    pain: "Hunderte Excel-Sheets, §-Konformität",
    gain: "40 % Zeitersparnis, revisionssichere Reports (profiletree.com)",
    primaryGoal: "Pflichtberichte (CSRD, ESG) fristgerecht & fehlerfrei",
    tools: "Microsoft Fabric Data Factory + Power BI, Workiva ESG, Databricks Lakehouse"
  }
];

export default function PrototypDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Top-10 KI-Lösungskonzepte
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Die mittelständischen Unternehmen (KMU) heute bis ≈ 2028 am schnellsten Wert stiften
          </p>
          
          {/* Criteria Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Hohe Reife & ROI
            </Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm">
              <Users className="w-4 h-4 mr-2" />
              KMU-Kompatibel
            </Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trendfest bis 2028
            </Badge>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-kivisai-deep-dark-blue text-white text-lg px-3 py-1">
                          {solution.id}
                        </Badge>
                        <CardTitle className="text-xl text-kivisai-deep-dark-blue">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Pain:</h4>
                        <p className="text-gray-700">{solution.pain}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Gain:</h4>
                        <p className="text-gray-700">{solution.gain}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Primäres Ziel:</h4>
                        <p className="text-gray-700">{solution.primaryGoal}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Tools / Tech-Stacks:</h4>
                        <p className="text-gray-700 text-sm">{solution.tools}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Ten Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-kivisai-deep-dark-blue">
                Warum gerade diese zehn?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Hohe Reife & ROI</h3>
                  <p className="text-gray-700">
                    Laut McKinsey erzielen Customer-Service-Chatbots, Prozessautomatisierung und Marketing-Generatives bereits die höchsten kurzfristigen Erträge im Mittelstand (mckinsey.com).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">KMU-Kompatibel</h3>
                  <p className="text-gray-700">
                    Alle Konzepte lassen sich mit off-the-shelf-SaaS oder Managed Cloud-Diensten realisieren – ohne eigenes Data-Science-Team.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2">Trendfest bis 2028</h3>
                  <p className="text-gray-700">
                    Branchenstudien zeigen, dass Generative-AI-gestützte Content- & Avatar-Lösungen sowie ESG-Automatisierung schnell wachsen, getrieben durch Regulatorik (CSRD) und Fachkräftemangel.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Direkter KIVISAI-Fit</h3>
                  <p className="text-gray-700">
                    Jede Lösung unterstützt die vier Phasen THINK → ENABLE → SHARE → GROW – und kann in INQA-geförderte Coaching-Pakete (bis 12 Tage) eingebettet werden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Check Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-kivisai-deep-dark-blue">
                Quick Check für Ihr KMU
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-kivisai-deep-dark-blue text-white text-lg px-3 py-1 mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Pain Points identifizieren</h4>
                    <p className="text-gray-700">Markieren Sie in der Tabelle die Pains, die heute am meisten Zeit oder Geld kosten.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge className="bg-kivisai-deep-dark-blue text-white text-lg px-3 py-1 mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">Klein starten</h4>
                    <p className="text-gray-700">Starten Sie mit 1–2 Lösungen, die bereits fertige SaaS-Pakete besitzen (z. B. Chatbot, Marketing-Ads).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge className="bg-kivisai-deep-dark-blue text-white text-lg px-3 py-1 mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">16-Wochen ENABLE-Sprint</h4>
                    <p className="text-gray-700">Sprint-0 Potenzialanalyse → Prototyp → Pilot → Skalierung.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge className="bg-kivisai-deep-dark-blue text-white text-lg px-3 py-1 mt-1">4</Badge>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue mb-2">INQA-Förderung prüfen</h4>
                    <p className="text-gray-700">Bis zu 80 % Zuschuss bei max. 249 Mitarbeitenden; wir stellen die Antragsunterlagen bereit.</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6 font-medium">
                So können Sie fokussiert, förderfähig und messbar in die KI-Transformation starten.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-6">
                Bereit für Ihre KI-Transformation?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Lassen Sie uns gemeinsam die passenden KI-Lösungen für Ihr Unternehmen identifizieren und mit INQA-Förderung umsetzen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-kivisai-deep-dark-blue hover:bg-kivisai-dark-blue text-white">
                  <a href="/termin">
                    <Calendar className="mr-2 h-4 w-4" />
                    Kostenlose Beratung buchen
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/leistungen/inqa-coaching/checkliste-inqa">
                    <Download className="mr-2 h-4 w-4" />
                    KI-Lösungsguide downloaden
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 