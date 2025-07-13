import { CtaSection } from "@/components/common/cta-section";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KIVISAI-Methode | Der TESG-Loop",
  description: "Der KIVISAI-Loop: THINK, ENABLE, SHARE, GROW - Ihr bewährter Weg zur menschlich-KI-gestützten Transformation.",
};

export default function MethodePage() {
  return (
    <main className="min-h-screen bg-kivisai-pure-white text-kivisai-moss-green">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Die KIVISAI-Methode</h1>
          <p className="text-xl md:text-2xl mb-2 font-light">Der TESG-Loop: Ihr bewährter Weg zur menschlich-KI-gestützten Transformation</p>
          <p className="text-lg opacity-90">THINK • ENABLE • SHARE • GROW</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Phase 1: THINK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center h-32 w-32 border border-kivisai-deep-dark-blue">
              <Image 
                src="/images/4_KIVISAI-NAVI/KIVI_THINK.png" 
                alt="KIVISAI THINK Prinzip" 
                width={80} 
                height={80} 
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-semibold text-lg mb-2">THINK – Potenziale erkennen, gemeinsamen Konsens entwickeln</h3>
            <p className="mb-2">In einem strukturierten Workshop mit dem betroffenen Team identifizieren wir spezifische Herausforderungen und bislang ungenutzte Potenziale.<br/>
            Gemeinsam entwickeln wir ein klares Zielbild und einen geteilten Konsens: Wo stehen wir? Wo wollen wir hin? Welche Wirkung streben wir an?</p>
            <p className="mb-2">Dabei nutzen wir Methoden der strategischen Vorausschau, Systemtheorie und Theory of Change.<br/>
            Das Ergebnis ist eine fundierte, geteilte KI-Strategie – wissenschaftlich fundiert, praxisnah und anschlussfähig.</p>
            <p className="mb-2">KIVISAI steht hier für gemeinsames Denken, partizipatives Zielbild und systemisches Verstehen.</p>
          </div>
        </div>

        {/* Phase 2: ENABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center h-32 w-32 border border-kivisai-clear-turquoise">
              <Image 
                src="/images/4_KIVISAI-NAVI/KIVI_ENABLE.png" 
                alt="KIVISAI ENABLE Prinzip" 
                width={80} 
                height={80} 
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-semibold text-lg mb-2">ENABLE – Teams befähigen, Prototype gestalten, KI-Lösungen umsetzen</h3>
            <p className="mb-2">Auf Basis der THINK-Phase entscheiden Sie, welche Rolle KIVISAI übernehmen soll:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Als Expert:innen, die beraten und gezielt Impulse geben</li>
              <li>Als Coachs, die Ihr Team in der Umsetzung befähigen</li>
              <li>Als Full-Service-Partner, der gemeinsam mit Ihnen eine komplette Lösung realisiert</li>
            </ul>
            <p className="mb-2">In einem agilen Sprintprozess entwickeln wir gemeinsam funktionierende Prototypen (MVPs).<br/>
            Unsere KI-Consultants und KI-Builder sorgen für technische Präzision, methodische Klarheit und Mensch-zentrierte Umsetzung.</p>
            <p className="mb-2">ENABLE steht für Handlungskompetenz, individuelle Begleitung und passgenaue Umsetzung.</p>
          </div>
        </div>

        {/* Phase 3: SHARE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center h-32 w-32 border border-orange-500">
              <Image 
                src="/images/4_KIVISAI-NAVI/KIVI_SHARE.png" 
                alt="KIVISAI SHARE Prinzip" 
                width={80} 
                height={80} 
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-semibold text-lg mb-2">SHARE – Wissen verankern, Kommunikation aktivieren</h3>
            <p className="mb-2">KIVISAI fördert eine offene Lern- und Wirkungskultur: Wissen wird nicht nur intern geteilt, sondern bewusst verankert und weitergegeben.</p>
            <p className="mb-2">Wir begleiten Sie bei:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>gezieltem Know-how-Transfer in Teams</li>
              <li>Co-Creation mit Stakeholdern</li>
              <li>aktivierender interner Kommunikation (z. B. durch Storytelling, Use-Case-Galerien, Feedbackformate)</li>
            </ul>
            <p className="mb-2">Ziel ist es, Vertrauen in KI aufzubauen und Beteiligung zu ermöglichen – innerhalb und außerhalb Ihrer Organisation.<br/>
            So entsteht Akzeptanz – nicht durch Anordnung, sondern durch Beteiligung.</p>
            <p className="mb-2">SHARE steht für geteilte Verantwortung, lernende Netzwerke und kulturelle Verankerung.</p>
          </div>
        </div>

        {/* Phase 4: GROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center h-32 w-32 border border-kivisai-moss-green">
              <Image 
                src="/images/4_KIVISAI-NAVI/KIVI_GROW.png" 
                alt="KIVISAI GROW Prinzip" 
                width={80} 
                height={80} 
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-semibold text-lg mb-2">GROW – Regenerativ skalieren, Systeme verbinden</h3>
            <p className="mb-2">Nach dem erfolgreichen Prototyping geht es nicht nur um technische Skalierung, sondern um regeneratives Wachstum:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>KI-Lösungen werden in Ihre bestehende Systemlandschaft integriert</li>
              <li>Wir schaffen Schnittstellen zu angrenzenden Bereichen und Ökosystemen</li>
              <li>Die Organisation lernt aus dem Prozess und wird widerstandsfähiger</li>
            </ul>
            <p className="mb-2">GROW heißt, Wirkung nachhaltig zu verankern – nicht nur für heute, sondern für die Zukunft.<br/>
            In jeder neuen Iteration wächst Ihre Organisation mit – resilienter, lernender, vernetzter.</p>
            <p className="mb-2">GROW steht für nachhaltige Wirkung, Systemintegration und evolutionäres Lernen.</p>
          </div>
        </div>

        {/* KIVISAI Loop Visual & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full">
              <Image 
                src="/images/KIVISAI-LOOP_01_Gradient.png"
                alt="KIVISAI Loop Visual"
                width={600}
                height={600}
                className="w-full h-auto rounded-xl shadow-md"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-semibold text-lg mb-2">Der KIVISAI-Loop: THINK – ENABLE – SHARE – GROW</h3>
            <p className="mb-2">KIVISAI verbindet Strategie, Technologie und Kultur zu einem lebendigen Transformationsansatz – menschlich, systemisch und wirkungsvoll. Die vier Phasen sind zyklisch, anschlussfähig und individuell adaptierbar.</p>
          </div>
        </div>
      </div>

      {/* Mensch-KI-Synergie Section */}
      <div className="bg-kivisai-light-cool-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-12 max-w-3xl mx-auto text-kivisai-moss-green">
            Der KIVISAI-Loop betont die Iteration, das kontinuierliche Lernen und die stabile, schrittweise Umsetzung.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto border-t-4 border-kivisai-clear-turquoise">
            <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">
              Der Mensch im Mittelpunkt: KI als Ihr leistungsstarker Assistent
            </h2>
            <p className="text-lg mb-8 text-kivisai-moss-green">
              Wir integrieren KI als intelligenten Assistenten, der Ihre Expertise ergänzt und verstärkt. Durch gezieltes Coaching befähigen wir Sie, Ihr Team, Ihre Organisation und Ihre Ökosysteme, die neuen Tools souverän zu nutzen und den richtigen Mindset zu entwickeln.
            </p>
          </div>
        </div>
      </div>

      {/* KIVISAI CTA */}
      <div className="mt-12">
        <CtaSection
          variant="centered"
          background="gradient"
          size="md"
          title="Ihre Transformation starten"
          description="Lassen Sie uns gemeinsam herausfinden, welcher Schritt für Sie jetzt der richtige ist."
          primaryCta={{
            text: "Kostenloses Erstgespräch vereinbaren",
            href: "/termin",
            icon: "calendar"
          }}
        />
      </div>
    </main>
  );
} 