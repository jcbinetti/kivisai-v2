import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template";
import { ContentSection } from "@/components/common/content-section";
import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, Users, ShieldCheck, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Leistungen | KIVISAI - KI-Strategie & Transformation",
  description: "Entdecken Sie unsere umfassenden Leistungen für die KI-Transformation: Von Strategie-Coaching über Potenzialanalyse bis hin zu praktischem Prototyping.",
}

export default function LeistungenPage() {
  return (
    <LeistungenPageTemplate
      heroTitle="Leistungen"
      heroSubtitle="Unsere Angebote für Ihre KI-Transformation."
      heroDescription="Wir begleiten Sie ganzheitlich auf Ihrer KI-Transformation – von der Potenzialanalyse über Coaching und Prototyping bis zur nachhaltigen Implementierung. Unsere Leistungen sind modular, förderfähig und orientieren sich an den Phasen der KIVISAI-Methode."
      serviceName="Leistungen"
      heroBackground="gradient"
      ctaSection={{
        variant: "centered",
        background: "gradient",
        size: "lg",
        title: "Jetzt Beratung anfragen",
        description: "Lassen Sie uns gemeinsam Ihre KI-Transformation starten!",
        primaryCta: {
          text: "Beratungstermin vereinbaren",
          href: "/termin",
          icon: "calendar"
        },
        secondaryCta: {
          text: "Alle Lösungen entdecken",
          href: "/loesungen",
          icon: "arrow"
        }
      }}
    >
      <ContentSection variant="default" background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. KI-Potenzialanalyse */}
          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-clear-turquoise hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-kivisai-deep-dark-blue">KI-Potenzialanalyse</h2>
            <p className="text-kivisai-moss-green mb-6">Identifizieren Sie die wichtigsten Hebel für KI in Ihrem Unternehmen. Wir analysieren Prozesse, Daten und Kompetenzen und zeigen konkrete Anwendungsfälle auf.</p>
            <Link href="/leistungen/ki-potenzialanalyse" className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-kivisai-deep-dark-blue hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
              Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 2. KI-Prototyping */}
          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-vibrant-turquoise hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-white" />
          </div>
            <h2 className="text-2xl font-semibold mb-2 text-kivisai-deep-dark-blue">KI-Prototyping</h2>
            <p className="text-kivisai-moss-green mb-6">Von der Idee zum funktionierenden Prototypen. Wir entwickeln mit Ihnen konkrete KI-Lösungen und testen sie in der Praxis.</p>
            <Link href="/leistungen/ki-prototyping" className="inline-flex items-center gap-2 bg-kivisai-vibrant-turquoise text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-kivisai-deep-dark-blue hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
              Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 3. INQA-Coaching */}
          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-kivisai-deep-dark-blue">INQA-Coaching</h2>
            <p className="text-kivisai-moss-green mb-6">80% gefördert: Begleitetes Coaching für nachhaltige Arbeitsgestaltung, Digitalisierung und KI-Transformation – mit autorisierten INQA-Coaches.</p>
            <Link href="/leistungen/inqa-coaching" className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
              Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 4. Strategie-Coaching */}
          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-vibrant-turquoise hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-kivisai-deep-dark-blue">Strategie-Coaching</h2>
            <p className="text-kivisai-moss-green mb-6">Vertrauliches 1:1-Sparring für Entscheider:innen. Wir begleiten Sie bei der Entwicklung einer tragfähigen KI-Vision und strategischen Roadmap.</p>
            <Link href="/leistungen/strategie-coaching" className="inline-flex items-center gap-2 bg-kivisai-vibrant-turquoise text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-kivisai-deep-dark-blue hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
              Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 5. Coaching & Training */}
          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-kivisai-moss-green hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-kivisai-moss-green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-kivisai-deep-dark-blue">Coaching & Training</h2>
            <p className="text-kivisai-moss-green mb-6">Individuelle Coachings und praxisnahe Trainings für Teams und Führungskräfte – damit KI-Kompetenz im Unternehmen wächst.</p>
            <Link href="/leistungen/coaching-training" className="inline-flex items-center gap-2 bg-kivisai-moss-green text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-kivisai-deep-dark-blue hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
              Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </ContentSection>
    </LeistungenPageTemplate>
  );
}
