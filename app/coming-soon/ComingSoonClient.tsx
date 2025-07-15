"use client"

import type React from "react"

import Image from "next/image"
import { Mail, Brain, Award, Target } from "lucide-react"
import { useState } from "react"

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreedToPrivacy) {
      setMessage({ type: "error", text: "Bitte stimmen Sie der Datenschutzerklärung zu." })
      return
    }

    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Bitte geben Sie eine gültige E-Mail-Adresse ein." })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      console.log("Submitting newsletter form with email:", email)

      const requestBody = {
        email,
        source: "coming-soon",
        interests: ["KI-Transformation", "Coming Soon Updates"],
        doubleOptIn: true,
      }

      console.log("Request body:", requestBody)

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      console.log("Response status:", response.status)
      console.log("Response headers:", Object.fromEntries(response.headers.entries()))

      let result = {}
      const contentType = response.headers.get("content-type")

      if (contentType && contentType.includes("application/json")) {
        try {
          result = await response.json()
          console.log("Response JSON:", result)
        } catch (jsonError) {
          console.error("Failed to parse JSON response:", jsonError)
          const text = await response.text()
          console.log("Response text:", text)
        }
      } else {
        const text = await response.text()
        console.log("Non-JSON response:", text)
      }

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Vielen Dank! Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anmeldung.",
        })
        setEmail("")
        setAgreedToPrivacy(false)
      } else {
        setMessage({
          type: "error",
          text: (result as any)?.error || `Server-Fehler (${response.status}). Bitte versuchen Sie es erneut.`,
        })
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setMessage({
        type: "error",
        text: "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-white">Bleiben Sie informiert</h3>
      <p className="text-white/80 mb-6 text-sm">
        Erhalten Sie exklusive Updates und seien Sie die Ersten, die von unserem Launch erfahren.
      </p>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm ${
            message.type === "success"
              ? "bg-green-100/20 text-green-200 border border-green-200/30"
              : "bg-red-100/20 text-red-200 border border-red-200/30"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email || !agreedToPrivacy}
            className="px-6 py-3 bg-white text-kivisai-deep-dark-blue rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Mail className="w-4 h-4 mr-2" />
            {isSubmitting ? "Wird gesendet..." : "Anmelden"}
          </button>
        </div>

        {/* Datenschutz Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy-coming-soon"
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            className="mt-1 mr-2"
            required
          />
          <label htmlFor="privacy-coming-soon" className="text-sm text-white/80">
            Ich habe die{" "}
            <a
              href="/datenschutz"
              className="text-white hover:underline font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zu. *
          </label>
        </div>
      </form>
    </div>
  )
}

export default function ComingSoonClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise overflow-hidden min-h-screen flex items-center">
        <div className="hero-content">
          <div className="text-center">
            {/* KIVISAI Logo */}
            <div className="mb-8">
              <Image
                src="/images-optimized/KIVISAI_logo_TR.webp"
                alt="KIVISAI Logo"
                width={300}
                height={100}
                className="mx-auto h-auto"
                priority
              />
            </div>

            {/* KIVISAI Loop Phase */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm">
                <Brain className="w-4 h-4 mr-2" />
                KIVISAI Loop: COMING SOON
              </span>
            </div>

            {/* Haupttitel */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-white">
              KI-Potenziale sicher erschließen.
              <br />
              <span className="inline-block mt-2 px-4 py-2 bg-white text-kivisai-deep-dark-blue rounded-lg font-black">
                Bald verfügbar.
              </span>
            </h1>

            {/* Newsletter Signup - Jetzt funktionsfähig */}
            <NewsletterForm />

            {/* Features Preview - Mit INQA-Coaching */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">KI-Potenzialanalyse</h4>
                <p className="text-white/70 text-sm">
                  Klarheit gewinnen: Wo KI Ihr Unternehmen wirklich voranbringt – sicher und zielgerichtet.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">KI-Prototyping</h4>
                <p className="text-white/70 text-sm">
                  Von der Idee zur stabilen Anwendung – schnell und sicher mit unserem Netzwerk von Fachexperten.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">INQA-Coaching</h4>
                <p className="text-white/70 text-sm">
                  Staatlich geförderte Beratung für Arbeitsqualität und Zukunftsfähigkeit – bis zu 80% Förderung
                  möglich.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-12">
              <p className="text-white/80 text-sm mb-4">Haben Sie Fragen? Kontaktieren Sie uns bereits jetzt:</p>
              <a
                href="mailto:info@kivisai.com"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@kivisai.com
              </a>
            </div>

            {/* Footer-Texte direkt im Hero-Bereich */}
            <div className="border-t border-white/20 pt-8 mt-8">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images-optimized/KIVISAI_logo_TR.webp"
                  alt="KIVISAI Logo"
                  width={200}
                  height={80}
                  className="h-auto opacity-90"
                />
              </div>

              <div className="space-y-4 text-white">
                <p className="text-xl font-bold">Zukunft gestalten. Regenerativ. Wirksam.</p>
                <p className="text-lg leading-relaxed opacity-90">
                  Wir gestalten Ihre Transformation mit menschlicher und künstlicher Intelligenz.
                </p>
                <p className="text-2xl font-bold">Start to act.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hintergrund-Elemente */}
        <div className="absolute inset-0 z-2">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </section>
    </div>
  )
}
