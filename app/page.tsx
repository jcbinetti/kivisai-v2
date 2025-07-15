import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Lightbulb,
  ShieldCheck,
  Clock,
  Brain,
  Rocket,
  TrendingUp,
  Zap,
  Users,
  Heart,
  Award,
  ArrowRight,
  CheckCircle,
  BookOpen,
} from "lucide-react"
import { EvalkitTeaserSection } from "@/components/common/evalkit-teaser-section"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
// Temporär deaktiviert für Debugging
// import { getBlogPosts, getAllUseCases } from "@/lib/sanity-client"
// import { urlFor } from "@/lib/sanity-client"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "KIVISAI - KI-Strategie & Transformation für Unternehmen",
  description: "Entdecken Sie die Potenziale von KI für Ihr Unternehmen. KIVISAI begleitet Sie bei der KI-Transformation mit Strategie, Coaching und praktischen Lösungen.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - KONSISTENT MIT TAILWIND */}
      <section className="relative py-24 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise overflow-hidden">
        <div className="hero-content">
          <div className="text-center">
            {/* KIVISAI Loop Phase */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                THINK
              </span>
            </div>

            {/* Haupttitel */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              KI-Potenziale sicher erschließen.
              <br />
              <span className="inline-block mt-2 px-4 py-2 bg-white text-kivisai-deep-dark-blue rounded-lg font-black">
                Menschlich. Strategisch.
              </span>
            </h1>

            {/* Untertitel */}
            <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed font-bold">
              Wir helfen Menschen und Organisationen, KI gewinnbringend einzusetzen – mit konsequenter Zeitersparnis und maximaler Datensicherheit.
            </p>
          </div>
        </div>

        {/* Hintergrund-Elemente */}
        <div className="absolute inset-0 z-2">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </section>

      {/* INQA-Coach Förderblock */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise flex justify-center items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Links: Badge + Text im Kasten */}
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-lg w-full bg-white/20 rounded-xl p-8 shadow-lg backdrop-blur-md gap-0 md:gap-6">
            <Image
              src="/images-optimized/Badges_Autorisierter_INQA-Coach_2025-2026.webp"
              alt="Autorisierter INQA-Coach 2025-2026"
              width={120}
              height={60}
              className="h-auto"
            />
            <span className="text-lg md:text-xl font-semibold text-white drop-shadow-lg text-left md:ml-4" style={{textShadow:'0 2px 8px #0008'}}>
              Als autorisierter INQA-Coach unterstützen wir Sie bei der digitalen Transformation.
            </span>
          </div>
          {/* Rechts: große Headline, Buttons + Förderlabel */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-left drop-shadow-lg" style={{textShadow:'0 2px 8px #0008'}}>
              Sichern Sie jetzt 80% Förderung für Ihre KI-Lernreise – Exklusiv für KMU
            </h2>
            
            {/* Förderlabel integriert */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="text-2xl">💰</div>
                <div className="text-center sm:text-left">
                  <div className="text-sm text-white/80 font-medium">Statt 14.400€</div>
                  <div className="text-xl font-bold text-white">nur 2.880€</div>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-white/80 font-medium">Dank Förderung durch das</div>
                <div className="text-lg font-bold text-white">Bundesministerium für Arbeit & Soziales</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <a
                href="/leistungen/inqa-coaching"
                className="bg-white text-kivisai-deep-dark-blue font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-white/90 transition text-center w-full sm:w-auto text-lg border-2 border-kivisai-deep-dark-blue"
              >
                Mehr zu INQA-Coaching
              </a>
              <a
                href="/leistungen/inqa-coaching/checkliste-inqa"
                className="bg-kivisai-vibrant-turquoise text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-kivisai-vibrant-turquoise/90 transition text-center w-full sm:w-auto text-lg border-2 border-kivisai-vibrant-turquoise"
              >
                Bin ich förderfähig?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - NEUES LAYOUT */}
      <section className="py-16 bg-kivisai-pure-white text-kivisai-moss-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
            Stehen Sie vor diesen Herausforderungen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Spalte 1: 2 Kästchen */}
            <div className="flex flex-col gap-6 justify-center">
              <article className="p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border border-kivisai-light-cool-gray/40">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-kivisai-clear-turquoise/20 mb-4">
                  <Clock className="w-8 h-8 text-kivisai-deep-dark-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-kivisai-deep-dark-blue drop-shadow-sm">Überlastung im Team?</h3>
                <p className="text-kivisai-gray-dark text-base">
                  Routineaufgaben rauben Zeit und Energie, während das volle Potenzial ungenutzt bleibt.
                </p>
              </article>
              <article className="p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border border-kivisai-light-cool-gray/40">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-kivisai-clear-turquoise/20 mb-4">
                  <Brain className="w-8 h-8 text-kivisai-deep-dark-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-kivisai-deep-dark-blue drop-shadow-sm">Skepsis gegenüber KI?</h3>
                <p className="text-kivisai-gray-dark text-base">
                  Unsicherheit, was wirklich geht, wie KI die eigene Expertise ergänzt und wer Ihre sensiblen Daten schützt.
                </p>
              </article>
            </div>
            {/* Spalte 2: 2 Kästchen */}
            <div className="flex flex-col gap-6 justify-center">
              <article className="p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border border-kivisai-light-cool-gray/40">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-kivisai-clear-turquoise/20 mb-4">
                  <ShieldCheck className="w-8 h-8 text-kivisai-deep-dark-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-kivisai-deep-dark-blue drop-shadow-sm">Angst vor Datenlecks?</h3>
                <p className="text-kivisai-gray-dark text-base">
                  Vertraulichkeit ist Ihr höchstes Gut, und NDAs erfordern höchste Sorgfalt beim Umgang mit Informationen.
                </p>
              </article>
              <article className="p-8 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border border-kivisai-light-cool-gray/40">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-kivisai-clear-turquoise/20 mb-4">
                  <Rocket className="w-8 h-8 text-kivisai-deep-dark-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-kivisai-deep-dark-blue drop-shadow-sm">Keine Zeit für Experimente?</h3>
                <p className="text-kivisai-gray-dark text-base">
                  Sie brauchen stabile, bewährte Lösungen, die sofort wirken und Ihr Geschäftsmodell zukunftssicher machen.
                </p>
              </article>
            </div>
            {/* Spalte 3: CTA mit Karte */}
            <div className="flex flex-col justify-start items-center text-center bg-kivisai-clear-turquoise/10 border border-kivisai-clear-turquoise/20 rounded-lg p-6 h-full">
              <img
                src="/images-optimized/KIVISAI_Schatzkarte.webp"
                alt="KIVISAI Wirkungslandkarte"
                className="rounded-lg shadow-lg object-contain max-h-80 w-full mb-4"
                style={{ background: '#eaf6f7' }}
              />
              <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">KI-Wirkungslandkarte</h3>
              <p className="text-kivisai-moss-green mb-6">
                Unsere KI-Potenzial Landkarte zeigt Ihnen strukturiert, welche Lösungen für welche Probleme geeignet sind.
              </p>
              <Link
                href="/use-cases/ki-potenzial-landkarte"
                className="inline-flex items-center gap-2 bg-kivisai-deep-dark-blue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-kivisai-clear-turquoise transition-all duration-300 transform hover:scale-105"
              >
                KI-Potenzial entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The future is now Section - MIT NATIVEN IMAGE KOMPONENTEN */}
      <section className="py-16 bg-kivisai-deep-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Die Zukunft ist jetzt. Gestalten Sie mit.
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Künstliche Intelligenz ist keine ferne Vision mehr, sondern ein konkretes Werkzeug, das heute schon die
              Spielregeln auf allen Ebenen verändert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Menschen - Persönliche KI-Assistenten */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images-optimized/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.webp"
                  alt="Persönlicher KI-Assistent unterstützt Mitarbeiter bei täglichen Aufgaben: Moderne Arbeitsplätze mit intelligenten digitalen Tools für optimierte Produktivität und Effizienzsteigerung"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-kivisai-clear-turquoise mb-2">MENSCHEN</div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Ihr persönlicher Co-Pilot.</h3>
                <p className="text-kivisai-moss-green text-sm mb-4">
                  Was wäre, wenn Sie einen Assistenten hätten, der nicht nur Ihre To-dos verwaltet, sondern Ihre
                  Karriere fördert und Ihr kreatives Potenzial freisetzt?
                  <span className="block mt-2 font-semibold">Durchschnittlich 10 Stunden pro Monat einsparen.</span>
                </p>
                <Link
                  href="/loesungen/mensch"
                  className="inline-block bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise/90 transition-colors text-sm"
                >
                  Lösungen entdecken
                </Link>
              </div>
            </div>

            {/* Projekt-Teams - Kollaborative KI-Tools */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images-optimized/2_KIVI_4_EBENE/KIVI_Team_Flat.webp"
                  alt="Team-Kollaboration - Drei Personen arbeiten gemeinsam mit KI-Tools"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-kivisai-clear-turquoise mb-2">PROJEKT-TEAMS</div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Das kollektive Gedächtnis.</h3>
                <p className="text-kivisai-moss-green text-sm mb-4">
                  Stellen Sie sich ein Team vor, in dem kein Wissen verloren geht und das Projektrisiken erkennt, bevor
                  sie entstehen. Klingt unmöglich?
                  <span className="block mt-2 font-semibold">Informationen aus Meetings 4x schneller erfassen.</span>
                </p>
                <Link
                  href="/loesungen/team"
                  className="inline-block bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise/90 transition-colors text-sm"
                >
                  Lösungen entdecken
                </Link>
              </div>
            </div>

            {/* Organisation - Intelligente Automatisierung */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images-optimized/2_KIVI_4_EBENE/KIVI_Organisation.webp"
                  alt="Organisations-KI - Team vor Monitor mit KI-Gehirn und Wachstumskurve"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-kivisai-clear-turquoise mb-2">ORGANISATION</div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Das adaptive Unternehmen.</h3>
                <p className="text-kivisai-moss-green text-sm mb-4">
                  Ihre Organisation als lebendiger Organismus, der in Echtzeit auf den Markt reagiert, sich selbst
                  optimiert und strategische Züge voraussieht.
                  <span className="block mt-2 font-semibold">Über 5 % des Gewinns (EBIT) durch KI generieren.</span>
                </p>
                <Link
                  href="/loesungen/organisation"
                  className="inline-block bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise/90 transition-colors text-sm"
                >
                  Lösungen entdecken
                </Link>
              </div>
            </div>

            {/* Netzwerken - Vernetzte KI-Systeme */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images-optimized/2_KIVI_4_EBENE/KIVI_oekosystem.webp"
                  alt="Netzwerk-Intelligenz - KIVISAI Team arbeitet an KI-Lösungen für Ökosysteme"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-kivisai-clear-turquoise mb-2">ÖKOSYSTEME</div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-3">Intelligenz durch Netzwerken.</h3>
                <p className="text-kivisai-moss-green text-sm mb-4">
                  Was passiert, wenn Ihr gesamtes Netzwerk autonom zusammenarbeitet und Synergien findet, die nie ein
                  Mensch allein gesehen hätte?
                  <span className="block mt-2 font-semibold">Produktentwicklung um bis zu 50 % beschleunigen.</span>
                </p>
                <Link
                  href="/loesungen/oekosystem"
                  className="inline-block bg-kivisai-clear-turquoise text-white px-4 py-2 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise/90 transition-colors text-sm"
                >
                  Lösungen entdecken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - OHNE BILD ÜBER DEM SIGNET */}
      <section className="py-16 bg-kivisai-light-cool-gray text-kivisai-moss-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
              Ihre Lösung: Mensch-KI-Transformation mit KIVISAI
            </h2>
            <p className="text-lg mb-8 text-kivisai-moss-green">
              Mit unserem ganzheitlichen Ansatz lösen wir nicht nur konkrete Herausforderungen, sondern erschließen zugleich neue Märkte für Ihr Unternehmen. Unsere Stärke ist die einzigartige Symbiose aus menschlicher und künstlicher Intelligenz. Der KIVISAI-Loop – THINK, ENABLE, SHARE, GROW – führt Sie strukturiert, iterativ und sicher zu nachweisbaren Ergebnissen.
            </p>

            {/* NUR DAS SIGNET, KEIN BILD DARÜBER */}
            <div className="flex justify-center mt-8">
              <a href="/ueber-kivisai" title="Zur Bedeutung & Vision von KIVISAI">
                <img src="/images-optimized/KIVISAI_signet_tr.webp" alt="KIVISAI Logo" className="w-32 h-auto hover:scale-105 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EVALKIT Teaser Section */}
      <EvalkitTeaserSection
        title="Wegweiser: Finde deinen KI-Startpunkt!"
        description="Navigieren Sie durch die vier Wirkungsebenen der KI-Transformation: Mensch, Team, Organisation und Ökosystem. Unser strukturierter Test zeigt Ihnen, auf welcher Ebene Ihre größten Hebel liegen und wie Sie gezielt Ihre nächsten Schritte planen können."
        imageSrc="/images-optimized/4_KIVISAI-NAVI/KIVI_Selbsteval_jung _breit.webp"
        imageAlt="Illustration: Selbstevaluation der KI-Fitness für Organisationen - Jung und dynamisch gestaltet"
        ctaText="Jetzt Wegweiser nutzen"
        ctaHref="/evalkit"
      />

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-kivisai-pure-white to-kivisai-light-cool-gray text-kivisai-moss-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
            So unterstützen wir Ihr KMU ganz konkret
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              number="1"
              title="KI-Potenzial-Check"
              subtitle="In nur 10 Tagen zur klaren Entscheidungsgrundlage"
              description="Wir analysieren Ihre Prozesse, zeigen Sofort-Hebel für Kostensenkung und Umsatzwachstum auf und liefern eine verständliche Kosten-Nutzen-Bewertung – risikofrei und praxisnah."
              icon={Lightbulb}
              href="/leistungen/ki-potenzialanalyse"
              variant="primary"
            />
            
            <ServiceCard
              number="2"
              title="KI-Sprint-Prototyp"
              subtitle="Vom Use Case zum lauffähigen Prototypen"
              description="Gemeinsam bauen wir einen stabilen Prototypen, den Sie live testen können. So sehen Sie früh, wie KI in Ihrem Betrieb funktioniert – und entscheiden erst danach über die Voll­implementierung."
              icon={Rocket}
                href="/leistungen/ki-prototyping"
              variant="secondary"
            />
            
            <ServiceCard
              number="3"
              title="Strategie- & Umsetzungscoaching"
              subtitle="Schritt-für-Schritt-Begleitung bis zum Erfolg"
              description="Wir entwickeln mit Ihnen eine KI-Roadmap, kümmern uns um Implementierung und Governance und bleiben an Ihrer Seite, bis messbare Ergebnisse stehen – budgetschonend und KPI-getrieben."
              icon={TrendingUp}
                href="/leistungen/strategie-coaching"
              variant="tertiary"
            />
          </div>
        </div>
      </section>

      {/* Herangehensweise Section */}
      <section className="py-16 bg-kivisai-light-cool-gray text-kivisai-moss-green">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kivisai-deep-dark-blue">Unsere Herangehensweise</h2>
            <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">
              Agil, partizipativ, nachhaltig und förderfähig
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue">Agile Methoden</h3>
              <p className="text-sm text-kivisai-moss-green">
                Schnelle Iterationen, kontinuierliches Feedback und flexible Anpassungen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue">Partizipativ</h3>
              <p className="text-sm text-kivisai-moss-green">
                Alle Stakeholder werden aktiv in den Transformationsprozess einbezogen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue">Nachhaltig</h3>
              <p className="text-sm text-kivisai-moss-green">
                Langfristige Lösungen, die Wert schaffen und Ressourcen schonen
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue">Förderfähig</h3>
              <p className="text-sm text-kivisai-moss-green">
                Unterstützung bei Förderanträgen und -abwicklung (INQA, BMDV, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototypen-Teaser-Block */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="/images-optimized/6_KIVI-SZENEN/KIVI_Prototyping_hoch.webp"
                alt="KI-Prototyping Beispiele - 12 verschiedene KI-Lösungen für Unternehmen"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kivisai-deep-dark-blue/20 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center bg-kivisai-clear-turquoise text-white border-kivisai-clear-turquoise font-bold rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  12 Beispiele
                </span>
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

      {/* Trust Section - MIT PARTNER LOGOS */}
      {false && (
      <section className="py-16 bg-kivisai-pure-white text-kivisai-moss-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
            Vertrauen, das wirkt: Unsere Partner und Stimmen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <article className="bg-kivisai-light-cool-gray p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=80&width=80&text=Testimonial+1"
                alt="Profilbild von Markus Lehmann, Geschäftsführer und KIVISAI Kunde"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <blockquote className="italic text-kivisai-moss-green mb-3">
                „KIVISAI hat uns geholfen, unsere Prozesse zu optimieren und die Skepsis gegenüber KI im Team abzubauen.
                Die Ergebnisse sind messbar und nachhaltig."
              </blockquote>
              <cite className="font-semibold text-kivisai-deep-dark-blue">Markus Lehmann, Geschäftsführer</cite>
            </article>
            <article className="bg-kivisai-light-cool-gray p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=80&width=80&text=Testimonial+2"
                alt="Profilbild von Dr. Anna Schmidt, Head of R&D und KIVISAI Kundin"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <blockquote className="italic text-kivisai-moss-green mb-3">
                „Die Zusammenarbeit mit KIVISAI war transparent und sicher. Unsere sensiblen Daten waren jederzeit
                geschützt, und wir konnten uns auf die Expertise verlassen."
              </blockquote>
              <cite className="font-semibold text-kivisai-deep-dark-blue">Dr. Anna Schmidt, Head of R&D</cite>
            </article>
          </div>
        </div>
      </section>
      )}

      {/* CTA Section */}
      <section className="bg-kivisai-clear-turquoise py-16 text-kivisai-pure-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Du hast Fragen? Sprich mit unseren KI-Expert:innen!
          </h2>
          <a
            href="/termin#booking-widget"
            className="inline-block bg-white text-kivisai-deep-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 mb-6"
          >
            Jetzt Termin buchen
          </a>
          <p className="text-lg max-w-2xl mx-auto">
            Das Gespräch ist unverbindlich und kostenlos. Wir beantworten deine Fragen und zeigen dir, wie du KI sinnvoll für dich nutzen kannst.
          </p>
        </div>
      </section>
    </div>
  )
}
