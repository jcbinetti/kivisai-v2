import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cog, Users, MapPin, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Lösungen | KIVISAI - KI-Strategie & Transformation",
  description: "Entdecken Sie unsere KI-Lösungen für verschiedene Bereiche: Mensch, Team, Organisation und Ökosystem.",
}

export default function LoesungenPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative pt-40 py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge mit ENABLE-Icon */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                LÖSUNGEN & USE CASES
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              KI-Lösungen für jede Wirkungsebene
            </h1>
            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Wir begleiten Unternehmen und Teams von der ersten Idee bis zur erfolgreichen KI-Implementierung.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Wirkungsebenen */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* Text wurde in den Hero-Bereich verschoben */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Menschen */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.png"
                    alt="Persönlicher KI-Assistent für Menschen"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Für den Menschen</CardTitle>
                  </div>
                  <CardDescription className="text-kivisai-moss-green">
                    Persönliche KI-Assistenten revolutionieren den Arbeitsalltag – 40% mehr Produktivität durch die
                    richtigen Kompetenzen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-kivisai-moss-green mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      Prompt Engineering & KI-Kommunikation
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      Persönliche Produktivitätssteigerung
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      KI-Tool Auswahl und Integration
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white"
                  >
                    <Link href="/loesungen/mensch">
                      Lösungen für Menschen entdecken
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Teams */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/2_KIVI_4_EBENE/KIVI_Team_Flat.png"
                    alt="Kollaborative KI-Tools für Teams"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Für Projekt-Teams</CardTitle>
                  </div>
                  <CardDescription className="text-kivisai-moss-green">
                    Kollaborative KI-Tools revolutionieren die Teamarbeit – 60% schnellere Entwicklungszyklen durch
                    intelligente Zusammenarbeit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-kivisai-moss-green mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      Kollaborative KI-Tools & Wissensmanagement
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      Reduzierte Reibungsverluste
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-clear-turquoise" />
                      Maßgeschneiderte Fachanwendungen
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white"
                  >
                    <Link href="/loesungen/team">
                      Lösungen für Teams entdecken
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Organisation */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/2_KIVI_4_EBENE/KIVI_Organisation.png"
                    alt="Intelligente Automatisierung für Organisationen"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                      <Cog className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Für Organisationen</CardTitle>
                  </div>
                  <CardDescription className="text-kivisai-moss-green">
                    KI-gestützte Geschäftsprozesse meistern den dualen Druck – 70% weniger manuelle Arbeit durch
                    intelligente Automatisierung
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-kivisai-moss-green mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-deep-dark-blue" />
                      Prozessautomatisierung & Business Intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-deep-dark-blue" />
                      Strategische KI-Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-deep-dark-blue" />
                      Adaptive Organisationsstrukturen
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white"
                  >
                    <Link href="/loesungen/organisation">
                      Lösungen für Organisationen entdecken
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Ökosysteme */}
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/2_KIVI_4_EBENE/KIVI_oekosystem.png"
                    alt="Vernetzte KI-Systeme für Ökosysteme"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-kivisai-moss-green rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <CardTitle className="text-kivisai-deep-dark-blue">Für KI-Ökosysteme</CardTitle>
                  </div>
                  <CardDescription className="text-kivisai-moss-green">
                    Intelligente Mensch-KI-Netzwerke schaffen Synergien – 15-50% schnellere Produktentwicklung durch
                    übergreifende Zusammenarbeit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-kivisai-moss-green mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-moss-green" />
                      Autonome Agenten & Multi-Agent-Systeme
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-moss-green" />
                      Vernetzte KI-Systeme
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-kivisai-moss-green" />
                      Übergreifende Komplexitätsbewältigung
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white"
                  >
                    <Link href="/loesungen/oekosystem">
                      Lösungen für Ökosysteme entdecken
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Warum KIVISAI Abschnitt */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kivisai-deep-dark-blue">Warum KIVISAI?</h2>
          <p className="text-xl text-kivisai-deep-dark-blue/90 mb-8">
            Die rasante Entwicklung Künstlicher Intelligenz eröffnet enorme Chancen – und stellt Organisationen und Menschen zugleich vor einen Existenz-Test. KIVISAI ist unsere Antwort: eine modulare Methodik, die technologische Exzellenz mit menschlicher Haltung und nachhaltiger Wirkung verbindet.
          </p>
          {/* KIVISAI Signet mit Link (Bild unter dem Text) */}
          <Link href="/ueber-kivisai" className="inline-block group mt-6">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/3_LABEL-LOGO/KIVISAI_signet_tr.png"
                alt="KIVISAI Signet"
                width={80}
                height={80}
                className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <span className="mt-2 text-kivisai-moss-green text-sm group-hover:underline">Mehr über uns erfahren</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bereit für Ihre KI-Transformation?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam die passenden KI-Lösungen für Ihre spezifischen Herausforderungen identifizieren.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-kivisai-clear-turquoise text-white hover:bg-kivisai-clear-turquoise/90 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/termin">
                  Kostenlose Erstberatung buchen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-2 border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white font-bold transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <Link href="/leistungen">Unsere Leistungen entdecken</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
