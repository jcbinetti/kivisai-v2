import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { 
  Users, 
  Target, 
  GraduationCap, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  Mail,
  Phone,
  Star,
  Clock,
  Award,
  BookOpen,
  MessageSquare,
  Lightbulb,
  Shield,
  TrendingUp
} from "lucide-react";
import type { Metadata } from "next";

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Coaching & Training | KIVISAI - KI-Kompetenz für Ihr Team",
  description: "Maßgeschneiderte Schulungen und persönliches KI-Coaching, die Ihre Mitarbeitenden für spezifische KI-Werkzeuge fit machen und individuelle Souveränität entwickeln.",
}

const offerings = [
  {
    icon: Users,
    title: "KI-Trainings für Teams",
    description: "Workshops & Impulse: Von Basisschulungen bis Deep Dives (Prompt Engineering, Automatisierung, RAG, GenAI u.v.m.)",
    features: [
      "Hands-on-Übungen mit echten Business-Cases",
      "Interaktive Formate: Vor Ort, online oder hybrid"
    ]
  },
  {
    icon: Target,
    title: "Personalisiertes KI-Coaching",
    description: "1:1-Coaching für Führungskräfte, Innovator:innen, Projektleitende",
    features: [
      "Sparring zu KI-Strategien, Change Management, Tool-Auswahl",
      "Individuelle Roadmap: Von der ersten Idee bis zur konkreten Implementierung"
    ]
  },
  {
    icon: GraduationCap,
    title: "Blended Learning & Community",
    description: "Zugang zur KIVISAI Academy mit E-Learning, Webinaren und Micro-Trainings",
    features: [
      "Austausch & Best Practices im KI-Club und Community-Forum",
      "Follow-up-Sessions & individuelle Q&A"
    ]
  }
];

const process = [
  {
    step: "1",
    title: "Vorgespräch",
    description: "Klärung von Zielgruppen, IST-Stand, Wunschthemen, Reifegrad und Erwartung"
  },
  {
    step: "2", 
    title: "Curriculum-Design",
    description: "Individuelle Konzeption aller Module, Praxisbezug und Use Cases aus Ihrem Alltag"
  },
  {
    step: "3",
    title: "Durchführung", 
    description: "Live-Workshop, digitales Format oder Blended Learning"
  },
  {
    step: "4",
    title: "Follow-up",
    description: "Handout, Lernzielkontrolle, Zugang zu E-Learning und Community-Angeboten"
  }
];

const targetGroups = [
  "Geschäftsführung & Bereichsleitungen",
  "IT-/Digitalisierungsteams", 
  "HR, Kommunikation, Innovation",
  "Projektleitungen, Change-Agents, Multiplikatoren"
];

const results = [
  {
    icon: Star,
    metric: "98%",
    label: "Teilnehmerzufriedenheit"
  },
  {
    icon: Clock,
    metric: "4–12 Wochen",
    label: "bis zur sichtbaren Anwendung im Alltag"
  },
  {
    icon: Users,
    metric: "80%",
    label: "der Teams wenden KI-Tools nach 6 Wochen selbständig an"
  }
];

const faqs = [
  {
    question: "Wie wird das Training an unsere Branche angepasst?",
    answer: "Wir nutzen Ihren Geschäftsalltag, Ihre Prozesse und branchenspezifische Use Cases als Praxisbasis."
  },
  {
    question: "Welche Tools werden vermittelt?",
    answer: "Vom Einstieg in ChatGPT, MS Copilot, Notion AI bis hin zu branchenspezifischer Automatisierung."
  },
  {
    question: "Gibt es Fördermöglichkeiten?",
    answer: "Ja, z.B. über INQA-Coaching (BMAS), BMDV oder regionale Programme – wir beraten Sie zu passenden Zuschüssen."
  }
];

export default function CoachingTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "Coaching & Training"]} />
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
            KI-Kompetenz für Sie und Ihr Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Maßgeschneiderte Schulungen und persönliches KI-Coaching, die Ihre Mitarbeitenden für spezifische KI-Werkzeuge fit machen und individuelle Souveränität entwickeln.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white font-bold">
              <Link href="/termin">
                <Calendar className="w-5 h-5 mr-2" />
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-gray-100 font-bold">
              <Link href="/leistungen/inqa-coaching">
                <Award className="w-5 h-5 mr-2" />
                INQA Coaching Förderung
              </Link>
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Bereit für maßgeschneidertes KI-Training?
            </h2>
            <p className="text-white/90 text-lg">
              Machen Sie Ihr Team fit für die KI-Zukunft mit individuellen Schulungen und Coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Warum KIVISAI Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Warum KIVISAI-Coaching & Training?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                Individuell und praxiserprobt
              </h3>
              <p className="text-kivisai-moss-green">
                Unsere Programme werden exakt auf Ihre Organisation, Ihre Prozesse und Ihr Team zugeschnitten.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                Souveränität statt Überforderung
              </h3>
              <p className="text-kivisai-moss-green">
                Wir befähigen Ihre Mitarbeitenden, KI-Tools selbstbewusst und zielgerichtet einzusetzen – nicht nur heute, sondern auch in Zukunft.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                Mehr als nur Technologie
              </h3>
              <p className="text-kivisai-moss-green mb-4">
                Wir kombinieren KI-Kompetenz mit Change-Methodik, Agilität und einer menschenzentrierten Haltung.
              </p>
              <Button asChild size="sm" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white font-bold">
                <Link href="/ueber-kivisai/methode">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Angebot Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Unser Angebot</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm bg-kivisai-clear-turquoise text-white font-bold">
                      Angebot {index + 1}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <offering.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-kivisai-dark-blue">
                      {offering.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-kivisai-dark-blue text-sm leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-kivisai-moss-green">
                        <CheckCircle className="w-4 h-4 text-kivisai-clear-turquoise mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Wie läuft Ihr KI-Training ab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-kivisai-dark-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-kivisai-moss-green text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white font-bold">
              <Link href="/termin">
                <Calendar className="w-5 h-5 mr-2" />
                Jetzt kostenloses Erstgespräch vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Zielgruppen Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Typische Zielgruppen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetGroups.map((group, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
                <Users className="w-6 h-6 text-kivisai-clear-turquoise" />
                <span className="text-kivisai-dark-blue font-medium">{group}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Unsere Coaches & Trainer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
              <h3 className="text-lg font-bold text-kivisai-dark-blue mb-2">
                Autorisierte KI-Coaches
              </h3>
              <p className="text-kivisai-moss-green text-sm">
                u.a. INQA-Coaching, TÜV-Zertifikat, Agile Coach IHK
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-kivisai-moss-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-kivisai-dark-blue mb-2">
                Praxiserprobt
              </h3>
              <p className="text-kivisai-moss-green text-sm">
                in Industrie, Mittelstand, öffentlichem Sektor
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-kivisai-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-kivisai-dark-blue mb-2">
                Netzwerkorientiert
              </h3>
              <p className="text-kivisai-moss-green text-sm">
                Zugriff auf 50+ Expert:innen in der KIVISAI-Community
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white">
              <Link href="/ueber-kivisai/team-netzwerk">
                <ArrowRight className="w-4 h-4 mr-2" />
                Team & Netzwerk ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ergebnisse Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Ergebnisse & Wirkung</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <result.icon className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
                <div className="text-3xl font-bold text-kivisai-dark-blue mb-2">
                  {result.metric}
                </div>
                <p className="text-kivisai-moss-green text-sm">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-kivisai-dark-blue font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-kivisai-moss-green">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Kontakt & Einstieg
          </h2>
          <div className="text-center mb-8">
            <p className="text-xl text-kivisai-dark-blue mb-6">
              Sie möchten Ihre KI-Kompetenz auf das nächste Level bringen?
            </p>
            <p className="text-kivisai-moss-green mb-8">
              Sichern Sie sich jetzt ein kostenloses Vorgespräch mit unseren Coaches – wir finden das passende Format für Ihr Team.
            </p>
          </div>
          <div className="bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-blue rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Starten Sie jetzt mit KIVISAI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button asChild size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-gray-100 font-bold text-lg py-6">
                <Link href="/termin">
                  <Calendar className="w-6 h-6 mr-3" />
                  Kostenloses Erstgespräch
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-kivisai-moss-green hover:bg-kivisai-moss-green/90 text-white font-bold text-lg py-6">
                <Link href="/leistungen/inqa-coaching">
                  <Award className="w-6 h-6 mr-3" />
                  INQA Coaching Förderung
                </Link>
              </Button>
            </div>
            <p className="text-white/90 text-center mt-4 text-sm">
              ✓ Unverbindlich ✓ Kostenlos ✓ Individuell auf Sie zugeschnitten
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
