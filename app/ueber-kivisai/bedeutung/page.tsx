import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Users, Bot, Zap, CheckCircle, ArrowRight, RefreshCw, Lightbulb, Share2, TrendingUp } from "lucide-react"
import { menuItems } from "@/lib/menu-data"
import { CtaSection } from "@/components/common/cta-section"
import Breadcrumbs from "@/components/common/Breadcrumbs"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Bedeutung | Über KIVISAI - KI-Strategie & Transformation",
  description: "Lernen Sie die Bedeutung von KIVISAI kennen - unser Name und unsere Werte für eine regenerative KI-Transformation.",
}

export default function BedeutungVisionPage() {
  const ueberKivisaiItems = menuItems.find((item) => item.name === "Über KIVISAI")?.children || []

  return (
    <main className="min-h-screen bg-kivisai-pure-white text-kivisai-moss-green">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white text-center">
        <div className="container mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">KIVISAI: Bedeutung</h1>
        <p className="text-xl md:text-2xl mb-2 font-light">Der Kompass für regenerative KI-Transformation</p>
        </div>
      </section>

      {/* Breadcrumb unter Hero */}
      <div className="container mx-auto px-4 mt-4 mb-2">
        <Breadcrumbs items={["Home", "Über KIVISAI", "Bedeutung"]} />
      </div>

      <section className="container mx-auto px-4 max-w-3xl py-12">
        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Warum KIVISAI?</h2>
        <p className="mb-6">Die rasante Entwicklung Künstlicher Intelligenz eröffnet enorme Chancen – und stellt Organisationen und Menschen zugleich vor einen Existenz-Test. <b>KIVISAI</b> ist unsere Antwort: eine modulare Methodik, die technologische Exzellenz mit menschlicher Haltung und nachhaltiger Wirkung verbindet.</p>

        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Was bedeutet KIVISAI?</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow">
            <thead className="bg-kivisai-clear-turquoise/20">
              <tr>
                <th className="p-3 font-bold">Silbe</th>
                <th className="p-3 font-bold">Ursprung</th>
                <th className="p-3 font-bold">Kernidee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">KI</td>
                <td className="p-3">Künstliche Intelligenz</td>
                <td className="p-3">Motor des Wandels</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">VIS</td>
                <td className="p-3">lat. vis = Kraft / Vision</td>
                <td className="p-3">Gestalterische Stärke & Zukunftsbild</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AI</td>
                <td className="p-3">Artificial Intelligence / Agile Impact</td>
                <td className="p-3">Globale Perspektive & agile Umsetzung</td>
              </tr>
            </tbody>
          </table>
        </div>
        <blockquote className="bg-kivisai-moss-green/10 border-l-4 border-kivisai-moss-green p-4 mb-6 italic text-lg">
          <div className="mb-2"><b>KIVI</b> (finnisch "Stein") verkörpert Stabilität.<br /><b>SAI</b> (japanisch "Talent/Fest") steht für Kreativität & gemeinsames Wachstum.</div>
          Gemeinsam symbolisieren sie ein stabiles Fundament, auf dem innovative Fähigkeiten gedeihen.
        </blockquote>

        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Unsere Werte</h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none">
          <li className="flex items-center gap-3 bg-white rounded-lg shadow p-4 border-l-4 border-kivisai-clear-turquoise animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '0ms' }}>
            <Users className="w-6 h-6 text-kivisai-clear-turquoise animate-pulse" /> 
            <span><b>Partizipation</b> – Wandel gelingt gemeinsam.</span>
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg shadow p-4 border-l-4 border-kivisai-moss-green animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '200ms' }}>
            <CheckCircle className="w-6 h-6 text-kivisai-moss-green animate-pulse" /> 
            <span><b>Wirkung</b> – Jede Maßnahme erzeugt messbaren Mehrwert.</span>
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg shadow p-4 border-l-4 border-yellow-400 animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '400ms' }}>
            <RefreshCw className="w-6 h-6 text-yellow-400 animate-spin-slow" /> 
            <span><b>Regeneration</b> – Transformation soll Systeme stärken, nicht erschöpfen.</span>
          </li>
          <li className="flex items-center gap-3 bg-white rounded-lg shadow p-4 border-l-4 border-kivisai-deep-dark-blue animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '600ms' }}>
            <Lightbulb className="w-6 h-6 text-kivisai-deep-dark-blue animate-bounce" /> 
            <span><b>Kollaboration</b> – Menschen & KI arbeiten symbiotisch.</span>
          </li>
        </ul>





        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Was KIVISAI bewirkt</h2>
        <ul className="list-disc pl-6 mb-8 space-y-1">
          <li><b>Strategische Klarheit</b>: Potenziale, Risiken & Prioritäten auf einen Blick.</li>
          <li><b>Schnelle Ergebnisse</b>: MVPs & Pilotlösungen in Wochen, nicht Jahren.</li>
          <li><b>Mensch-KI-Symbiose</b>: Technologie als Verstärker menschlicher Stärken.</li>
          <li><b>Förderfähigkeit</b>: Bis zu 80 % Zuschuss durch INQA-Coaching & weitere Programme.</li>
        </ul>

        {/* KIVISAI CTA: Zurück zur Hauptseite */}
        <div className="mt-12">
          <CtaSection
            variant="centered"
            background="gradient"
            size="md"
            title="Mehr über KIVISAI erfahren"
            description="Entdecken Sie den vollständigen KIVISAI-Loop und unsere Methoden auf der Hauptseite."
            primaryCta={{
              text: "Zurück zu Über KIVISAI",
              href: "/ueber-kivisai",
              icon: "arrow"
            }}
          />
        </div>

        <div className="text-center text-xs text-muted-foreground mb-4">
          (Alle Inhalte © 2025 KIVISAI · Eine Marke der CONVIS Consult & Marketing GmbH)
        </div>
      </section>
    </main>
  )
} 