"use client"

import type React from "react"

import { Eye, Rocket, Share2, Recycle, CheckCircle } from "lucide-react"
import Link from "next/link"

interface CyclePhase {
  id: number
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: "turquoise" | "dark"
  features: string[]
}

const phases: CyclePhase[] = [
  {
    id: 1,
    title: "THINK",
    subtitle: "vorausschauend",
    description:
      "Wir denken systemisch, klären Ziele und Potenziale – mit strategischer Weitsicht, Haltung und Datenbewusstsein.",
    icon: <Eye className="w-8 h-8" />,
    color: "turquoise",
    features: ["Strategische Analyse", "Potenzialidentifikation", "Ethische Bewertung"],
  },
  {
    id: 2,
    title: "ENABLE",
    subtitle: "befähigend",
    description: "Wir machen den Wandel möglich – durch befähigende Prototypen, agile Umsetzung und Kompetenzaufbau.",
    icon: <Rocket className="w-8 h-8" />,
    color: "dark",
    features: ["Prototyping & Testing", "Kompetenzentwicklung", "Change Management"],
  },
  {
    id: 3,
    title: "SHARE",
    subtitle: "wirkungsorientiert",
    description:
      "Wir teilen Erkenntnisse und Wirkung – für Betroffene lernen, Transparenz und gemeinsame Verantwortung.",
    icon: <Share2 className="w-8 h-8" />,
    color: "turquoise",
    features: ["Wissenstransfer", "Community Building", "Impact Measurement"],
  },
  {
    id: 4,
    title: "GROW",
    subtitle: "regenerativ",
    description:
      "Wir entwickeln weiter – systemisch, nachhaltig und mit Blick auf Resilienz, Kultur und langfristige Wirkung.",
    icon: <Recycle className="w-8 h-8" />,
    color: "dark",
    features: ["Kontinuierliche Verbesserung", "Skalierung & Adaption", "Nachhaltige Wirkung"],
  },
]

export default function KivisaiCycle() {
  return (
    <section className="py-16 bg-kivisai-pure-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kivisai-deep-dark-blue">
              Der KIVISAI-Zyklus – 4 Phasen für echten Wandel
            </h2>
            <p className="text-lg md:text-xl text-kivisai-moss-green max-w-4xl mx-auto leading-relaxed">
              Unsere Methode ist zyklisch und lernend aufgebaut. Jede Phase baut auf der vorherigen auf – und mündet
              wieder in die nächste. So bleibt Wandel lebendig und anpassungsfähig.
            </p>
          </div>

          {/* Cycle Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {phases.map((phase) => (
              <div key={phase.id} className="flex flex-col">
                {/* Phase Card */}
                <div
                  className={`
                    w-full p-8 rounded-lg text-white
                    ${phase.color === "turquoise" ? "bg-[#2D8B8B]" : "bg-[#0F2A2E]"}
                  `}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {phase.icon}
                  </div>

                  {/* Phase Label */}
                  <div className="text-sm font-bold text-white mb-2">Phase {phase.id}</div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-normal text-white mb-1">{phase.title}</h3>
                    <p className="text-sm font-bold text-white">{phase.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed text-left">{phase.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-left">
                        <CheckCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text & CTA */}
          <div className="text-center">
            <p className="text-lg text-kivisai-moss-green mb-8 font-medium">
              <span className="font-bold">Zyklisch und lernend:</span> Jede Phase mündet in die nächste und schafft so
              kontinuierlichen, nachhaltigen Wandel.
            </p>

            <Link
              href="/transformation/evalkit"
              className="inline-flex items-center gap-2 bg-[#2D8B8B] hover:bg-[#2D8B8B]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              EVALKIT kostenloses testen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
