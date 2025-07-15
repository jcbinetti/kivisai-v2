import type { Metadata } from "next"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "KI-Potenzialanalyse | KIVISAI",
  description: "Ihr 1-Tages-Sprint für KI-Chancen. Kompakter Workshop, Use-Case-Backlog, ROI-Schätzung, Roadmap & Förderung."
};

export default function KIPotenzialanalysePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Potenzialanalyse"]} />
      </div>
      
      {/* Hero Section */}
      <section className="py-20 pt-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KI‑Potenzialanalyse</h1>
          <p className="text-xl mb-2 text-white/90 max-w-2xl mx-auto">Ihr 1‑Tages‑Sprint mit KIVISAI</p>
        </div>
      </section>



      {/* Block 1: Bild + Definition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="bg-gradient-to-br from-kivisai-clear-turquoise/10 to-kivisai-vibrant-turquoise/10 rounded-2xl p-8 border border-kivisai-clear-turquoise/20">
              <Image 
                src="/images-optimized/6_KIVI-SZENEN/KIVI-Coaching.webp" 
                alt="KIVI Coaching" 
                width={400} 
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue mb-4">Was ist die KI‑Potenzialanalyse?</h2>
            <p className="text-lg mb-4 text-kivisai-dark-blue">
              Die KI‑Potenzialanalyse ist Sprint 0 unserer Beratungs­methode – ein kompakter, moderierter Workshop, der in nur einem Tag:
            </p>
            <ul className="list-disc pl-6 text-kivisai-dark-blue mb-4 space-y-1">
              <li>den Ist‑Zustand Ihrer Prozesse, Daten und Ziele erfasst,</li>
              <li>konkrete KI‑Use‑Cases (Anwendungs­fälle) generiert & bewertet und</li>
              <li>einen priorisierten Maßnahmen‑Backlog samt Return‑on‑Investment (ROI)‑Schätzung liefert.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-block bg-kivisai-clear-turquoise text-white font-bold rounded-full px-4 py-1 shadow">Kompakt & partizipativ</span>
              <span className="inline-block bg-kivisai-clear-turquoise text-white font-bold rounded-full px-4 py-1 shadow">Individuelle Roadmap</span>
              <span className="inline-block bg-kivisai-clear-turquoise text-white font-bold rounded-full px-4 py-1 shadow">Fördermittel-Check</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf des 1-Tages-Sprints */}
      <section className="py-16 bg-gradient-to-br from-kivisai-light-cool-gray to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-kivisai-dark-blue">Ablauf des 1‑Tages‑Sprints</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-kivisai-clear-turquoise text-white">
                  <th className="py-3 px-4">Zeit</th>
                  <th className="py-3 px-4">Phase</th>
                  <th className="py-3 px-4">Ziele & Methoden*</th>
                </tr>
              </thead>
              <tbody className="text-kivisai-dark-blue">
                <tr><td className="py-2 px-4">09:00 – 09:30</td><td>Kick‑off</td><td>Erwartungs­abgleich, Zieldefinition</td></tr>
                <tr className="bg-kivisai-light-cool-gray/60"><td className="py-2 px-4">09:30 – 11:00</td><td>Analyse</td><td>SWOT‑Canvas, Digital‑Maturity‑Score</td></tr>
                <tr><td className="py-2 px-4">11:15 – 12:30</td><td>Impulse</td><td>Branchen‑Benchmarks, Zukunftsbild‑Canvas</td></tr>
                <tr className="bg-kivisai-light-cool-gray/60"><td className="py-2 px-4">13:30 – 15:00</td><td>Ideation</td><td>Brainwriting, Journey Mapping, JTBD</td></tr>
                <tr><td className="py-2 px-4">15:15 – 16:30</td><td>Priorisierung</td><td>Impact‑Effort‑Matrix, Dot‑Voting</td></tr>
                <tr className="bg-kivisai-light-cool-gray/60"><td className="py-2 px-4">16:30 – 17:00</td><td>Roadmap</td><td>Quick‑Win‑Plan, Förder­mittel‑Check</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-kivisai-moss-green mt-2">*Remote möglich: 2 × ½ Tage über Microsoft Teams & Miro.</p>
          </div>
      </div>
      </section>

      {/* Methoden & Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-kivisai-dark-blue">Modernste Methoden & Tools</h2>
          <p className="text-center text-lg text-kivisai-dark-blue mb-8 max-w-2xl mx-auto">
            Unsere KI-Potenzialanalyse vereint pragmatisches Agile Coaching, Design Thinking und datengetriebene Entscheidungsfindung mit kollaborativen KI-Werkzeugen. So entsteht ein partizipatives Format, das Menschen, kollektive Intelligenz und Künstliche Intelligenz nahtlos verbindet – für schnelle, messbare Ergebnisse.
          </p>
          
          {/* KIVISAI Signet zentriert */}
          <div className="flex justify-center mt-12">
            <a href="/ueber-kivisai" title="Zur Bedeutung & Vision von KIVISAI">
              <img src="/images-optimized/KIVISAI_signet_tr.webp" alt="KIVISAI Logo" className="w-32 h-auto hover:scale-105 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* Partizipative Methoden für kollektive Intelligenz */}
      <section className="py-16 bg-gradient-to-br from-kivisai-light-cool-gray to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-kivisai-dark-blue">Partizipative Methoden – Ihr Team im Driver Seat</h2>
          <p className="text-center text-lg text-kivisai-dark-blue mb-10 max-w-3xl mx-auto">
            Im Workshop wählen wir gezielt die passenden Formate, um das Know-how aller einzubinden und gemeinsam zu belastbaren Entscheidungen zu kommen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Zukunftsbilder */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 flex items-center justify-center">
                <Image src="/images-optimized/5_Kivisai_Bilder/KIVI-PA-VIS-Steuerbüro.webp" alt="Zukunftsbilder" width={220} height={160} className="rounded cursor-pointer hover:scale-105 transition-transform object-cover h-full w-full" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-kivisai-clear-turquoise">Zukunftsbilder</h3>
              <p className="text-kivisai-dark-blue text-center">Visuelle Szenarien verdeutlichen Chancen und Risiken und schaffen eine gemeinsame Zielvorstellung.</p>
            </div>
            {/* Brainwriting 6-3-5 */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 flex items-center justify-center">
                <Image src="/images-optimized/6_KIVI-SZENEN/kivi_brainwriting.webp" alt="Brainwriting 6-3-5" width={220} height={160} className="rounded cursor-pointer hover:scale-105 transition-transform object-cover h-full w-full" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-kivisai-clear-turquoise">Brainwriting 6-3-5</h3>
              <p className="text-kivisai-dark-blue text-center">Strukturierter Ideation-Sprint: 6 Personen, 3 Ideen, 5 Minuten pro Runde – liefert in kurzer Zeit über 100 frische Use-Cases.</p>
            </div>
            {/* Nutzen-Aufwand-Canvas */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 flex items-center justify-center">
                <Image src="/images-optimized/6_KIVI-SZENEN/KIVI_Erfolg.webp" alt="Nutzen-Aufwand-Canvas" width={220} height={160} className="rounded cursor-pointer hover:scale-105 transition-transform object-cover h-full w-full" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-kivisai-clear-turquoise">Nutzen-Aufwand-Canvas</h3>
              <p className="text-kivisai-dark-blue text-center">Kollektive Bewertung von Wirkung und Aufwand bringt schnell Klarheit über die Top-Prioritäten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnisse & Lieferobjekte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-kivisai-dark-blue">Ergebnisse & Lieferobjekte</h2>
          <div className="max-w-4xl mx-auto">
            {/* Kompakte Dokumentation & Report */}
            <div className="bg-kivisai-light-cool-gray rounded-lg p-8 shadow mb-8">
              <h3 className="font-semibold text-xl mb-4 text-kivisai-clear-turquoise">Kompakte Dokumentation & Report – alles in einem Paket</h3>
              <p className="text-kivisai-dark-blue text-lg leading-relaxed mb-6">
                Statt dutzender Seiten liefern wir ein schlankes, digitales Doku-Report-Bundle, das exakt die Schwerpunkte Ihres Workshops widerspiegelt. Ob KI-SWOT, Customer-Journey-Map, Pain-Day-Analyse oder andere bereits entwickelte Formate – jede Methode wird so aufbereitet, dass Ergebnisse, Learnings und Entscheidungsgrundlagen sofort nachvollziehbar sind.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Ergebnis-Module nach Bedarf */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-semibold text-lg mb-3 text-kivisai-clear-turquoise">Ergebnis-Module nach Bedarf</h4>
                  <p className="text-kivisai-dark-blue">
                    Wir dokumentieren nur, was in der Session relevant war – keine Standardfolien, kein Ballast.
                  </p>
                </div>

                {/* Use-Case-Cluster & Roadmap */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-semibold text-lg mb-3 text-kivisai-clear-turquoise">Use-Case-Cluster & Roadmap</h4>
                  <p className="text-kivisai-dark-blue">
                    Priorisierte Use Cases erscheinen direkt mit der dazugehörigen Umsetzungs­roadmap, sodass nächste Schritte klar ersichtlich sind.
                  </p>
                </div>

                {/* Digital-first & teilbar */}
                <div className="bg-white rounded-lg p-6 shadow">
                  <h4 className="font-semibold text-lg mb-3 text-kivisai-clear-turquoise">Digital-first & teilbar</h4>
                  <p className="text-kivisai-dark-blue">
                    Interaktive Links, Grafiken und kurze Erläuterungen machen das Paket leicht zu navigieren und sofort präsentationsfähig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Förderung & ROI */}
      <section className="py-16 bg-gradient-to-br from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Förderung & Return on Investment</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Bis zu 80 % Zuschuss durch INQA‑Coaching – wir prüfen kostenfrei Ihre Förder­fähigkeit und übernehmen die Antragstellung.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            <span className="font-bold">Beispiel:</span> Schon bei unserem 12-Tage-Coaching inklusive KI-Potenzialanalyse liegt Ihr Eigenanteil nach Förderung bei lediglich 2 880 € – ein Quick-Win von 20 000 € pro Jahr ergibt damit einen ROI von rund 700 % im ersten Jahr.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-kivisai-dark-blue">Häufig gestellte Fragen (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq1">
              <AccordionTrigger>Brauche ich Vorkenntnisse in KI?</AccordionTrigger>
              <AccordionContent>Nein, der Workshop richtet sich an Fach‑ und Führungs­kräfte ohne technische KI‑Expertise.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>Wie viele Personen können teilnehmen?</AccordionTrigger>
              <AccordionContent>Optimal sind 6 – 12 inter­disziplinäre Teilnehmende.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Welche Daten müssen wir vorbereiten?</AccordionTrigger>
              <AccordionContent>Ein erster Einblick in Prozesse und Kennzahlen genügt; alles Weitere klären wir im Vorgespräch.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Was passiert nach dem Workshop?</AccordionTrigger>
              <AccordionContent>Sie erhalten alle Unterlagen digital und können sofort in ein Prototyping‑Projekt starten oder intern weiterarbeiten.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>Wie hoch ist der ROI bei einem 12-Tage-Paket mit KI-Potenzialanalyse & INQA-Coaching?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p><strong>Paket:</strong> 2-tägige KI-Potenzialanalyse + 10 Tage INQA-Coaching = 12 Tage × 1.200 € = 14.400 €</p>
                  <p><strong>Förderung:</strong> 80% INQA-Zuschuss = 11.520 €</p>
                  <p><strong>Ihr Eigenanteil:</strong> 2.880 €</p>
                  <p><strong>Typischer Quick-Win:</strong> 4h Routinearbeit/Woche automatisieren = 20.800 € Ersparnis/Jahr</p>
                  <p><strong>ROI im ersten Jahr:</strong> ≈ 700%</p>
                  <p><strong>Pay-back-Zeit:</strong> ca. 7 Wochen</p>
                  <p className="text-sm text-gray-600 mt-2">Schon wenige entfallene Routinestunden pro Woche machen Ihre Investition in kürzester Zeit wett – alles danach ist Gewinn.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jetzt unverbindlich beraten lassen oder direkt durchstarten!</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button asChild size="lg" className="bg-white text-kivisai-deep-dark-blue hover:bg-white/90 font-bold shadow-lg">
              <Link href="/termin?service=potenzialanalyse">Kostenloses Erstgespräch</Link>
            </Button>
            <Button asChild size="lg" className="bg-kivisai-clear-turquoise text-white hover:bg-kivisai-clear-turquoise/90 font-bold shadow-lg">
              <Link href="/leistungen/ki-prototyping">Potenzial schon priorisiert ?- &gt; Prototyping starten</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
