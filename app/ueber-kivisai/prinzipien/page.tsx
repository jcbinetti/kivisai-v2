import { CtaSection as CTA } from "@/components/common/cta-section";;
import Header from "@/components/header";
import { HeroSection as Hero } from "@/components/common/hero-section";;
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Prinzipien | KIVISAI",
  description: "Unsere Grundsätze und Arbeitsweise",
};

export default function PrinzipienPage() {
  return (
    <>
      <Header />
      <Hero
        title="Unsere Prinzipien"
        subtitle="Leitlinien für unsere Arbeit"
        description="Charta der KIVISAI-Werte und Prinzipien – Für eine menschliche, ethische und regenerative KI-Transformation."
        background="gradient"
        size="xl"
        variant="centered"
        image={{
          src: "/images-optimized/KIVISAI_signet_tr.webp",
          alt: "KIVISAI Signet",
          position: "right"
        }}
        className="mb-0"
      />
      
      {/* Breadcrumb unter Hero */}
      <div className="container mx-auto px-4 mt-4 mb-2">
        <Breadcrumbs items={["Home", "Über KIVISAI", "Prinzipien"]} />
      </div>
      
      <section className="container mx-auto px-4 max-w-3xl py-12">
        {/* Präambel */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">Charta der KIVISAI-Werte und Prinzipien</h2>
          <p className="text-lg text-kivisai-moss-green mb-2 font-semibold">Präambel</p>
          <div className="bg-gradient-to-r from-kivisai-clear-turquoise/10 to-kivisai-moss-green/10 rounded-xl p-6 md:p-8 mb-4 shadow">
            <p className="text-base md:text-lg text-kivisai-deep-dark-blue">
              In der Ära der Künstlichen Intelligenz stehen wir vor der Herausforderung und Chance, eine Transformation zu gestalten, die technologischen Fortschritt mit menschlicher Haltung und nachhaltiger Wirkung verbindet. Diese Charta dient als Leitfaden für die Anwendung der KIVISAI-Methode und verpflichtet uns, unsere Handlungen an den folgenden Werten und Prinzipien auszurichten.
            </p>
          </div>
        </section>

        {/* Prinzipien Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 1. Partizipation */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-kivisai-clear-turquoise flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-kivisai-clear-turquoise/20 animate-pulse">
                {/* Users-2 Lucide Icon */}
                <svg className="w-7 h-7 text-kivisai-clear-turquoise" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">1. Partizipation</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir glauben an die Kraft der kollektiven Intelligenz und fördern die aktive Beteiligung aller Stakeholder an der Gestaltung der KI-Transformation.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir streben nach Transparenz und Inklusion in allen Entscheidungsprozessen.</li>
              <li>Wir schaffen Räume für Dialog, Zusammenarbeit und den Austausch unterschiedlicher Perspektiven.</li>
              <li>Wir hören aktiv zu und berücksichtigen die Bedürfnisse und Anliegen aller Beteiligten.</li>
            </ul>
          </div>

          {/* 2. Wirkung */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-400 flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 animate-pulse">
                {/* Lucide Target Icon */}
                <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">2. Wirkung</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Unser Ziel ist es, durch die KI-Transformation einen positiven und nachhaltigen Beitrag zu leisten, der über rein wirtschaftliche Interessen hinausgeht.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir konzentrieren uns auf die Schaffung von echtem Mehrwert und messbaren Ergebnissen.</li>
              <li>Wir streben nach Lösungen, die soziale und ökologische Herausforderungen adressieren.</li>
              <li>Wir messen und kommunizieren die Wirkung unserer Aktivitäten transparent.</li>
            </ul>
          </div>

          {/* 3. Regeneration */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-kivisai-moss-green flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-kivisai-moss-green/20 animate-spin-slow">
                {/* Lucide Leaf Icon */}
                <svg className="w-7 h-7 text-kivisai-moss-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 22s0-4 4-8 8-4 8-4 4 0 8 4-4 8-8 8-8-4-8-8z"/><path d="M12 2v8"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">3. Regeneration</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir gestalten die KI-Transformation so, dass sie nicht nur Bestehendes ersetzt, sondern Systeme erneuert, stärkt und widerstandsfähiger macht.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir fördern eine Kultur des kontinuierlichen Lernens und der Anpassungsfähigkeit.</li>
              <li>Wir berücksichtigen die langfristigen Auswirkungen unserer Entscheidungen auf Mensch, Organisation und Umwelt.</li>
              <li>Wir streben nach Lösungen, die nachhaltige Entwicklung und Kreislaufwirtschaft fördern.</li>
            </ul>
          </div>

          {/* 4. Kollaboration */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-kivisai-clear-turquoise flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-kivisai-clear-turquoise/20 animate-bounce">
                {/* Lucide Handshake Icon */}
                <svg className="w-7 h-7 text-kivisai-clear-turquoise" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17l6 6 6-6"/><path d="M12 3v14"/><path d="M2 12h20"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">4. Kollaboration</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir erkennen die Komplexität der KI-Transformation an und setzen auf Zusammenarbeit und Vernetzung über traditionelle Grenzen hinweg.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir bauen auf Vertrauen, Offenheit und gegenseitige Unterstützung.</li>
              <li>Wir fördern den Wissensaustausch und die Synergieeffekte zwischen verschiedenen Disziplinen und Perspektiven.</li>
              <li>Wir gestalten eine Kultur der gemeinsamen Verantwortung und des gemeinsamen Erfolgs.</li>
            </ul>
          </div>

          {/* 5. Ethische Verantwortung */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-400 flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '800ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 animate-pulse">
                {/* Lucide Scale Icon */}
                <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M6 7l6 6 6-6"/><path d="M6 17h12"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">5. Ethische Verantwortung</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir verpflichten uns zu einem ethischen und verantwortungsvollen Umgang mit Künstlicher Intelligenz.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir achten die Würde und Autonomie des Menschen und stellen sicher, dass KI nicht zu Diskriminierung oder Ausgrenzung führt.</li>
              <li>Wir sorgen für Transparenz und Nachvollziehbarkeit bei KI-Entscheidungen und -Prozessen.</li>
              <li>Wir schützen personenbezogene Daten und gewährleisten die Sicherheit und Integrität von KI-Systemen.</li>
            </ul>
          </div>

          {/* 6. Kontinuierliche Verbesserung */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-kivisai-moss-green flex flex-col gap-2 animate-fade-in-up hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '1000ms' }}>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-kivisai-moss-green/20 animate-spin-slow">
                {/* Lucide RefreshCcw Icon */}
                <svg className="w-7 h-7 text-kivisai-moss-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.13-3.36L21 8"/><path d="M20.49 15A9 9 0 0 1 5.87 18.36L3 16"/></svg>
              </span>
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue">6. Kontinuierliche Verbesserung</h3>
            </div>
            <p className="text-kivisai-moss-green mb-2">Wir sind bestrebt, unsere Methodik und unsere Dienstleistungen kontinuierlich zu verbessern und uns an neue Erkenntnisse und Entwicklungen anzupassen.</p>
            <ul className="list-disc pl-5 text-kivisai-moss-green text-base space-y-1">
              <li>Wir sammeln und analysieren Feedback von Anwendern und Stakeholdern.</li>
              <li>Wir forschen und entwickeln, um innovative Lösungen und Ansätze zu finden.</li>
              <li>Wir teilen unser Wissen und unsere Erfahrungen, um die Weiterentwicklung der KI-Transformation voranzutreiben.</li>
            </ul>
          </div>
        </div>

        {/* Verpflichtung */}
        <section className="bg-gradient-to-r from-kivisai-clear-turquoise/20 to-kivisai-moss-green/20 rounded-xl p-8 md:p-10 shadow-lg text-center animate-fade-in-up hover:shadow-xl transition-all duration-300 ease-out" style={{ animationDelay: '1200ms' }}>
          <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">Verpflichtung</h3>
          <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">
            Alle, die die KIVISAI-Methode anwenden, sind aufgefordert, sich an diese Charta zu halten und die Werte und Prinzipien in ihrem Handeln zu verkörpern. Wir sind gemeinsam dafür verantwortlich, eine KI-Transformation zu gestalten, die menschlich, ethisch und regenerativ ist.
          </p>
        </section>
      </section>
      <CTA
        title="Unterzeichner der KIVISAI-Charta werden?"
        description="Vereinbaren Sie ein Gespräch und werden Sie Teil unserer Community für ethische und regenerative KI-Transformation."
        primaryCta={{
          text: "Termin für Unterzeichnung vereinbaren",
          href: "/termin"
        }}
        secondaryCta={{
          text: "Mehr über KIVISAI erfahren",
          href: "/ueber-kivisai"
        }}
      />
    </>
  );
}
