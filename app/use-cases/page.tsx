import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Use Cases | KIVISAI - Praktische KI-Anwendungen",
  description: "Entdecken Sie praktische KI-Use Cases und Anwendungsbeispiele. Von Chatbots bis zu Analyse-Tools - echte Lösungen für echte Probleme.",
}

export default function UseCasePage() {
  return (
    <div className="min-h-screen py-16 bg-kivisai-pure-white text-kivisai-moss-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-kivisai-deep-dark-blue">Use Cases</h1>
          <p className="text-lg text-kivisai-moss-green">
            Erfolgsgeschichten und Anwendungsbeispiele unserer KI-Lösungen.
          </p>
        </div>
      </div>
    </div>
  )
}
