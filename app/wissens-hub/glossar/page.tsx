import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Users, 
  TrendingUp, 
  User, 
  BookOpen, 
  Lightbulb,
  Sparkles,
  Target,
  Zap,
  Globe,
  ArrowRight,
  Award
} from "lucide-react";
import { CtaSection } from "@/components/common/cta-section";
import Breadcrumbs from "@/components/common/Breadcrumbs";

// Erweiterte Glossar-Daten mit Kategorien
const GLOSSARY_DATA = {
  "Künstliche Intelligenz": [
    { term: "AI (Künstliche Intelligenz)", description: "Maschinelle Systeme, die Aufgaben ausführen, die normalerweise menschliche Intelligenz erfordern." },
    { term: "GenKI (Generative KI)", description: "Künstliche Intelligenz, die neue Inhalte wie Texte, Bilder oder Videos erstellt." },
    { term: "LLM (Large Language Model)", description: "Große Sprachmodelle, die die Basis für fortschrittliche Textverarbeitung und Dialogsysteme sind (z.B. GPT-4)." },
    { term: "RAG (Retrieval-Augmented Generation)", description: "Ein KI-Verfahren, das die Antworten eines Sprachmodells mit Fakten aus einer externen Wissensdatenbank anreichert und absichert." },
    { term: "RPA (Robotic Process Automation)", description: "Technologie zur Automatisierung von strukturierten, regelbasierten Aufgaben am Computer." },
    { term: "MCP (Multi-Agent-gesteuerte Prozesse)", description: "Komplexe Systeme, in denen mehrere autonome KI-Agenten zusammenarbeiten, um übergeordnete Ziele zu erreichen." },
    { term: "BI (Business Intelligence)", description: "Verfahren und Prozesse zur systematischen Analyse von Geschäftsdaten." },
    { term: "BPM (Business Process Management)", description: "Geschäfts-Prozess-Management zur Gestaltung und Optimierung von Abläufen." },
    { term: "Prompting", description: "Die Kunst der Kommunikation mit KI-Systemen durch präzise Anweisungen und Kontext." },
    { term: "Digitaler Zwilling", description: "Digitale Repräsentation eines physischen Objekts oder Systems für Simulation und Optimierung." },
    { term: "Use Case", description: "Konkrete Anwendungsfälle, in denen KI-Lösungen spezifische Geschäftsprobleme lösen oder Prozesse verbessern." },
    { term: "Quick-Win", description: "Schnell umsetzbare Maßnahmen mit sofortigem, messbarem Nutzen für das Unternehmen." },
    { term: "ROI (Return on Investment)", description: "Kennzahl zur Bewertung der Rentabilität einer Investition, gemessen als Verhältnis von Gewinn zu eingesetztem Kapital." },
    { term: "MVP (Minimum Viable Product)", description: "Die kleinstmögliche Version eines Produkts mit den wichtigsten Funktionen." },
    { term: "Digital Maturity Score", description: "Bewertungssystem zur Messung der digitalen Reife und KI-Readiness eines Unternehmens." }
  ],
  "KIVISAI Methoden": [
    { term: "KIVISAI-Loop", description: "Unser vierphasiger Ansatz: THINK (Analysieren), ENABLE (Ermöglichen), SHARE (Teilen), GROW (Wachsen) für nachhaltige KI-Transformation." },
    { term: "THINK", description: "Erste Phase des KIVISAI-Loops: Analyse der aktuellen Situation, Identifikation von Chancen und Entwicklung einer klaren Vision." },
    { term: "ENABLE", description: "Zweite Phase des KIVISAI-Loops: Schaffung der notwendigen Voraussetzungen und Kompetenzen für die KI-Transformation." },
    { term: "SHARE", description: "Dritte Phase des KIVISAI-Loops: Weitergabe von Wissen, Erfahrungen und Best Practices im Team und Ökosystem." },
    { term: "GROW", description: "Vierte Phase des KIVISAI-Loops: Skalierung erfolgreicher Ansätze und kontinuierliche Weiterentwicklung." },
    { term: "KI-Potenzialanalyse", description: "1-Tages-Sprint zur systematischen Erfassung von KI-Chancen im Unternehmen mit konkreten Use-Cases und ROI-Schätzung." },
    { term: "KI-Prototyping", description: "Schnelle Entwicklung funktionsfähiger KI-Lösungen zur Validierung von Ideen und Konzepten." },
    { term: "Brainwriting 6-3-5", description: "Strukturierte Kreativitätsmethode: 6 Personen entwickeln in 5 Minuten je 3 Ideen pro Runde." },
    { term: "Zukunftsbilder", description: "Visuelle Szenarien zur Verdeutlichung von Chancen und Risiken der KI-Transformation." },
    { term: "Nutzen-Aufwand-Canvas", description: "Bewertungsmethode zur kollektiven Einschätzung von Wirkung und Aufwand bei KI-Projekten." },
    { term: "Impact-Effort-Matrix", description: "Priorisierungstool zur Bewertung von Projekten nach Wirkung und Aufwand." },
    { term: "SWOT-Analyse", description: "Strukturierte Analyse von Stärken, Schwächen, Chancen und Risiken im KI-Kontext." },
    { term: "Customer Journey Mapping", description: "Visualisierung der Kundeninteraktionen zur Identifikation von KI-Optimierungspotenzialen." },
    { term: "JTBD (Jobs to be Done)", description: "Methodik zur Identifikation der eigentlichen Aufgaben, die Kunden mit Produkten oder Services lösen wollen." }
  ],
  "Agilität": [
    { term: "Agil", description: "Eine iterative, inkrementelle Vorgehensweise in Projekten, die Flexibilität und Anpassungsfähigkeit fördert." },
    { term: "Backlog", description: "Eine priorisierte Liste von Aufgaben oder Anforderungen in agilen Projekten." },
    { term: "Sprint", description: "Ein fester Zeitraum (meist 1-4 Wochen) für die Entwicklung spezifischer Features in agilen Methoden." },
    { term: "Scrum", description: "Ein agiles Framework für die Entwicklung komplexer Produkte mit kurzen Iterationszyklen." },
    { term: "Kanban", description: "Eine visuelle Methode zur Steuerung des Arbeitsflusses und zur Optimierung der Durchlaufzeit." },
    { term: "Retrospective", description: "Regelmäßige Reflexion über Team-Prozesse zur kontinuierlichen Verbesserung." },
    { term: "User Story", description: "Eine kurze Beschreibung einer Funktion aus der Perspektive des Endnutzers." },
    { term: "Dot Voting", description: "Partizipative Entscheidungsmethode, bei der Teilnehmer Punkte auf verschiedene Optionen verteilen." }
  ],
  "Transformation": [
    { term: "Digitale Transformation", description: "Der strategische Prozess der Integration digitaler Technologien in alle Bereiche eines Unternehmens." },
    { term: "Change Management", description: "Systematische Begleitung von Veränderungsprozessen in Organisationen." },
    { term: "Disruption", description: "Fundamentale Veränderung bestehender Geschäftsmodelle durch neue Technologien oder Ansätze." },
    { term: "Innovation", description: "Entwicklung und Implementierung neuer Ideen, Prozesse oder Produkte." },
    { term: "Skalierung", description: "Systematische Vergrößerung erfolgreicher Prozesse oder Geschäftsmodelle." },
    { term: "Ökosystem", description: "Netzwerk von Organisationen, die zusammenarbeiten, um gemeinsame Ziele zu erreichen." },
    { term: "Synergie", description: "Zusätzlicher Nutzen, der entsteht, wenn verschiedene Elemente zusammenwirken." },
    { term: "Roadmap", description: "Strategischer Plan mit konkreten Meilensteinen und Zeitvorgaben für die Umsetzung von Projekten." },
    { term: "North Star", description: "Klarer, messbarer Zielwert, der alle Aktivitäten und Entscheidungen eines Projekts oder Unternehmens lenkt." }
  ],
  "Förderung & Finanzierung": [
    { term: "INQA-Coaching", description: "Zertifiziertes Beratungsangebot der Initiative Neue Qualität der Arbeit für nachhaltige Arbeitsgestaltung mit staatlicher Förderung." },
    { term: "ESF (Europäischer Sozialfonds)", description: "EU-Förderprogramm zur Unterstützung von Beschäftigung und sozialer Integration." },
    { term: "De-minimis", description: "EU-Regelung für kleine staatliche Beihilfen, die ohne Genehmigung gewährt werden dürfen." },
    { term: "KMU (Klein- und Mittelunternehmen)", description: "Unternehmen mit weniger als 250 Beschäftigten und einem Jahresumsatz unter 50 Millionen Euro." },
    { term: "Förderfähigkeit", description: "Prüfung, ob ein Unternehmen oder Projekt die Voraussetzungen für staatliche Förderung erfüllt." }
  ],
  "Persönliche Entwicklung": [
    { term: "Kompetenzerwerb", description: "Systematischer Aufbau von Fähigkeiten und Wissen in einem bestimmten Bereich." },
    { term: "Lifelong Learning", description: "Kontinuierliches Lernen über die gesamte Lebensspanne hinweg." },
    { term: "Growth Mindset", description: "Einstellung, dass Fähigkeiten durch Anstrengung und Lernen entwickelt werden können." },
    { term: "Resilienz", description: "Fähigkeit, sich von Rückschlägen zu erholen und gestärkt daraus hervorzugehen." },
    { term: "Adaptivität", description: "Fähigkeit, sich an veränderte Bedingungen anzupassen." },
    { term: "Kollaboration", description: "Zusammenarbeit mit anderen zur Erreichung gemeinsamer Ziele." },
    { term: "Kommunikation", description: "Austausch von Informationen und Ideen zwischen Personen oder Gruppen." },
    { term: "Kollektive Intelligenz", description: "Intelligenz, die aus der Zusammenarbeit und dem Austausch vieler Individuen entsteht." }
  ],
  "Technologie & Tools": [
    { term: "Chatbot", description: "KI-gestützte Software zur automatisierten Beantwortung von Kundenanfragen und Support." },
    { term: "Wissens-Assistent", description: "KI-System zur intelligenten Suche und Bereitstellung von Unternehmenswissen." },
    { term: "Predictive Maintenance", description: "Vorausschauende Wartung basierend auf Datenanalyse und KI-Prognosen." },
    { term: "OEE (Overall Equipment Effectiveness)", description: "Kennzahl zur Messung der Gesamtanlageneffektivität in der Produktion." },
    { term: "CRM (Customer Relationship Management)", description: "Systeme zur Verwaltung und Optimierung der Kundenbeziehungen." },
    { term: "TTS (Text-to-Speech)", description: "Technologie zur automatischen Umwandlung von Text in gesprochene Sprache." },
    { term: "ESG (Environmental, Social, Governance)", description: "Nachhaltigkeitskriterien für Umwelt, Soziales und Unternehmensführung." },
    { term: "CSRD (Corporate Sustainability Reporting Directive)", description: "EU-Richtlinie zur Nachhaltigkeitsberichterstattung von Unternehmen." }
  ]
};

// Zufällige Auswahl für "Definition des Tages" und "Inspiration"
const getRandomEntries = () => {
  const allEntries = Object.entries(GLOSSARY_DATA).flatMap(([category, terms]) =>
    terms.map(term => ({ ...term, category }))
  );
  
  const shuffled = allEntries.sort(() => Math.random() - 0.5);
  const definitionOfDay = shuffled[0];
  const inspiration = shuffled.find(entry => entry.category !== definitionOfDay.category) || shuffled[1];
  
  return { definitionOfDay, inspiration };
};

export default function GlossarPage() {
  const { definitionOfDay, inspiration } = getRandomEntries();

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                WISSENS-HUB
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Glossar
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Begriffe und Abkürzungen rund um KI, Agilität, Transformation und mehr
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb unter Hero */}
      <div className="container mx-auto px-4 mt-4 mb-2">
        <Breadcrumbs items={["Home", "Wissens-Hub", "Glossar"]} />
      </div>

      {/* Featured Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Definition des Tages */}
            <Card className="border-l-4 border-l-kivisai-clear-turquoise bg-gradient-to-br from-kivisai-clear-turquoise/10 to-kivisai-deep-dark-blue/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Definition des Tages</CardTitle>
                    <Badge variant="secondary" className="text-xs">{definitionOfDay.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">
                  {definitionOfDay.term}
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  {definitionOfDay.description}
                </p>
              </CardContent>
            </Card>

            {/* Inspiration */}
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-500/10 to-orange-600/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Inspiration</CardTitle>
                    <Badge variant="secondary" className="text-xs">{inspiration.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">
                  {inspiration.term}
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  {inspiration.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Glossar Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="Künstliche Intelligenz" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-gray-100 overflow-x-auto">
                <TabsTrigger value="Künstliche Intelligenz" className="flex items-center gap-2 whitespace-nowrap">
                  <Brain className="w-4 h-4" />
                  <span className="hidden md:inline">KI</span>
                </TabsTrigger>
                <TabsTrigger value="KIVISAI Methoden" className="flex items-center gap-2 whitespace-nowrap">
                  <Target className="w-4 h-4" />
                  <span className="hidden md:inline">KIVISAI</span>
                </TabsTrigger>
                <TabsTrigger value="Agilität" className="flex items-center gap-2 whitespace-nowrap">
                  <Users className="w-4 h-4" />
                  <span className="hidden md:inline">Agilität</span>
                </TabsTrigger>
                <TabsTrigger value="Transformation" className="flex items-center gap-2 whitespace-nowrap">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden md:inline">Transformation</span>
                </TabsTrigger>
                <TabsTrigger value="Förderung & Finanzierung" className="flex items-center gap-2 whitespace-nowrap">
                  <Award className="w-4 h-4" />
                  <span className="hidden md:inline">Förderung</span>
                </TabsTrigger>
                <TabsTrigger value="Persönliche Entwicklung" className="flex items-center gap-2 whitespace-nowrap">
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">Entwicklung</span>
                </TabsTrigger>
                <TabsTrigger value="Technologie & Tools" className="flex items-center gap-2 whitespace-nowrap">
                  <Zap className="w-4 h-4" />
                  <span className="hidden md:inline">Tools</span>
                </TabsTrigger>
              </TabsList>

              {Object.entries(GLOSSARY_DATA).map(([category, terms]) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid gap-6">
                    {terms.map((term, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-kivisai-clear-turquoise/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-4 h-4 text-kivisai-clear-turquoise" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-2">
                                {term.term}
                              </h3>
                              <p className="text-kivisai-moss-green leading-relaxed">
                                {term.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Mehr Wissen entdecken"
        description="Das Glossar wird kontinuierlich erweitert. Haben Sie einen Begriff vermisst oder möchten Sie mehr über ein bestimmtes Thema erfahren?"
        background="gradient"
        primaryCta={{
          text: "Begriff vorschlagen",
          href: "/kontakt",
          icon: "mail"
        }}
        secondaryCta={{
          text: "Zum Wissens-Hub",
          href: "/wissens-hub",
          icon: "arrow"
        }}
      />
    </div>
  );
} 