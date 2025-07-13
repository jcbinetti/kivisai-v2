"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle, Loader2, Sparkles, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

interface NewsletterCTAProps {
  variant?: "compact" | "full" | "sidebar"
  title?: string
  description?: string
  showBenefits?: boolean
}

export default function NewsletterCTA({
  variant = "full",
  title = "KIVISAI Newsletter abonnieren",
  description = "Bleiben Sie auf dem Laufenden mit den neuesten KI-Trends und Insights.",
  showBenefits = true,
}: NewsletterCTAProps) {
  const [formData, setFormData] = useState({
    email: "",
    vorname: "",
    nachname: "",
    organisation: "",
    interessen: "",
    datenschutz: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Sende die Formulardaten als JSON
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          email: "",
          vorname: "",
          nachname: "",
          organisation: "",
          interessen: "",
          datenschutz: false,
        })
      } else {
        setError(result.error || "Ein Fehler ist aufgetreten.")
      }
    } catch (error) {
      console.error("Newsletter-Anmeldung Fehler:", error)
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5 text-kivisai-clear-turquoise" />,
      title: "KI-Trends & Insights",
      description: "Aktuelle Entwicklungen und Trends in der KI-Welt",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-kivisai-vibrant-light-green" />,
      title: "Praxisnahe Tipps",
      description: "Konkrete Anwendungen für Ihr Unternehmen",
    },
    {
      icon: <Users className="w-5 h-5 text-kivisai-deep-dark-blue" />,
      title: "Exklusive Inhalte",
      description: "Zugang zu Webinaren und Expertenrunden",
    },
  ]

  if (variant === "compact") {
    return (
      <div className="bg-kivisai-light-cool-gray p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-kivisai-clear-turquoise" />
          <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">{title}</h3>
        </div>
        <p className="text-kivisai-moss-green mb-4">{description}</p>

        {isSuccess ? (
          <div className="flex items-center gap-2 text-kivisai-vibrant-light-green">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Erfolgreich angemeldet!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3" suppressHydrationWarning>
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-kivisai-pure-white"
              suppressHydrationWarning
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter-datenschutz"
                checked={formData.datenschutz}
                onCheckedChange={(checked) => setFormData({ ...formData, datenschutz: checked as boolean })}
                required
              />
              <Label htmlFor="newsletter-datenschutz" className="text-sm text-kivisai-moss-green">
                Ich stimme der{" "}
                <Link href="/rechtliches/datenschutz" className="text-kivisai-clear-turquoise hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                zu.
              </Label>
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button
              type="submit"
              disabled={isSubmitting || !formData.datenschutz}
              className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Anmelden...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Newsletter abonnieren
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    )
  }

  if (variant === "sidebar") {
    return (
      <Card className="bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white border-kivisai-clear-turquoise/20">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-kivisai-clear-turquoise" />
            <CardTitle className="text-lg text-kivisai-deep-dark-blue">{title}</CardTitle>
          </div>
          <CardDescription className="text-kivisai-moss-green">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-kivisai-vibrant-light-green mx-auto mb-3" />
              <p className="text-kivisai-deep-dark-blue font-medium">Erfolgreich angemeldet!</p>
              <p className="text-sm text-kivisai-moss-green">Sie erhalten eine Bestätigungs-E-Mail.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
              <div>
                <Input
                  type="email"
                  placeholder="E-Mail-Adresse *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-kivisai-pure-white"
                  suppressHydrationWarning
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="text"
                  placeholder="Vorname"
                  value={formData.vorname}
                  onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                  className="bg-kivisai-pure-white"
                  suppressHydrationWarning
                />
                <Input
                  type="text"
                  placeholder="Nachname"
                  value={formData.nachname}
                  onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                  className="bg-kivisai-pure-white"
                  suppressHydrationWarning
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sidebar-datenschutz"
                  checked={formData.datenschutz}
                  onCheckedChange={(checked) => setFormData({ ...formData, datenschutz: checked as boolean })}
                  required
                />
                <Label htmlFor="sidebar-datenschutz" className="text-xs text-kivisai-moss-green">
                  <Link href="/rechtliches/datenschutz" className="text-kivisai-clear-turquoise hover:underline">
                    Datenschutz
                  </Link>{" "}
                  akzeptiert
                </Label>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.datenschutz}
                className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white"
                size="sm"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Abonnieren"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    )
  }

  // Full variant
  return (
    <section className="py-16 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-kivisai-clear-turquoise" />
              <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue">{title}</h2>
            </div>
            <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">{description}</p>
          </div>

          {showBenefits && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">{benefit.title}</h3>
                  <p className="text-sm text-kivisai-moss-green">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}

          <Card className="max-w-2xl mx-auto bg-kivisai-pure-white border-kivisai-clear-turquoise/20">
            <CardContent className="p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-kivisai-vibrant-light-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
                    Vielen Dank für Ihre Anmeldung!
                  </h3>
                  <p className="text-kivisai-moss-green mb-4">
                    Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Informationen.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white"
                  >
                    Weitere Anmeldung
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-kivisai-deep-dark-blue">
                        E-Mail-Adresse *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-1"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <Label htmlFor="vorname" className="text-kivisai-deep-dark-blue">
                        Vorname
                      </Label>
                      <Input
                        id="vorname"
                        type="text"
                        value={formData.vorname}
                        onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                        className="mt-1"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <Label htmlFor="nachname" className="text-kivisai-deep-dark-blue">
                        Nachname
                      </Label>
                      <Input
                        id="nachname"
                        type="text"
                        value={formData.nachname}
                        onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                        className="mt-1"
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <Label htmlFor="organisation" className="text-kivisai-deep-dark-blue">
                        Organisation
                      </Label>
                      <Input
                        id="organisation"
                        type="text"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interessen" className="text-kivisai-deep-dark-blue">
                      Ihre Interessen (optional)
                    </Label>
                    <Textarea
                      id="interessen"
                      value={formData.interessen}
                      onChange={(e) => setFormData({ ...formData, interessen: e.target.value })}
                      placeholder="Welche KI-Themen interessieren Sie besonders?"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="full-datenschutz"
                      checked={formData.datenschutz}
                      onCheckedChange={(checked) => setFormData({ ...formData, datenschutz: checked as boolean })}
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="full-datenschutz" className="text-sm text-kivisai-moss-green leading-relaxed">
                      Ich stimme der{" "}
                      <Link href="/rechtliches/datenschutz" className="text-kivisai-clear-turquoise hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu und möchte den KIVISAI Newsletter erhalten. Die Abmeldung ist jederzeit möglich.
                    </Label>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.datenschutz}
                    className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white py-3"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Newsletter wird abonniert...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Newsletter abonnieren
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
