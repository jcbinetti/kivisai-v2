import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lightbulb, Users, Target, RefreshCw, Building2, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContentSection } from "@/components/common/content-section"
import { CtaSection } from "@/components/common/cta-section"
import Breadcrumbs from "@/components/common/Breadcrumbs"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "Über KIVISAI | KI-Strategie & Transformation",
  description: "Lernen Sie KIVISAI kennen - Ihr Partner für KI-Strategie und Transformation. Unser Team, unsere Methoden und unsere Vision.",
}

export default function UeberKivisaiPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Über KIVISAI"]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                ÜBER KIVISAI
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Über KIVISAI</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ihr Partner für regenerative KI-Transformation - technologische Exzellenz mit menschlicher Haltung
            </p>
          </div>
        </div>
      </section>



      {/* Was ist KIVISAI? */}
      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">Was ist KIVISAI?</h2>
            <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
              KIVISAI ist unsere Antwort auf die Herausforderungen der KI-Transformation: eine modulare Methodik, 
              die technologische Exzellenz mit menschlicher Haltung und nachhaltiger Wirkung verbindet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white p-6 rounded-lg border border-kivisai-clear-turquoise/20 animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center animate-pulse">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">Unsere Mission</h3>
              </div>
              <p className="text-kivisai-moss-green">
                Wir führen Organisationen, Teams und Einzelpersonen durch einen lernenden KI-Transformationsprozess, 
                der Sicherheit und Entfaltung gleichermaßen fördert.
              </p>
            </div>

            <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white p-6 rounded-lg border border-kivisai-clear-turquoise/20 animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kivisai-moss-green rounded-full flex items-center justify-center animate-bounce">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">Unsere Vision</h3>
              </div>
              <p className="text-kivisai-moss-green">
                Eine Zukunft, in der KI menschliche Kreativität entfesselt, kollektive Intelligenz stärkt 
                und nachhaltigen Wohlstand ermöglicht.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white p-8 rounded-lg border border-kivisai-clear-turquoise/20 mb-12">
            <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4 text-center">Der KIVISAI-Loop (T E S G)</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 border-t-4 border-kivisai-clear-turquoise animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '0ms' }}>
                <Image src="/images/4_KIVISAI-NAVI/KIVI_THINK.png" alt="Think Icon" width={56} height={56} className="mb-2 w-14 h-14 object-contain animate-pulse" />
                <div className="font-bold">THINK</div>
                <div className="text-sm text-center">Vorausschauend analysieren & strategische KI-Roadmap entwickeln.</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 border-t-4 border-kivisai-moss-green animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '200ms' }}>
                <Image src="/images/4_KIVISAI-NAVI/KIVI_ENABLE.png" alt="Enable Icon" width={56} height={56} className="mb-2 w-14 h-14 object-contain animate-pulse" />
                <div className="font-bold">ENABLE</div>
                <div className="text-sm text-center">Teams befähigen, Prototypen bauen, Agilität leben.</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 border-t-4 border-yellow-400 animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '400ms' }}>
                <Image src="/images/4_KIVISAI-NAVI/KIVI_SHARE.png" alt="Share Icon" width={56} height={56} className="mb-2 w-14 h-14 object-contain animate-bounce" />
                <div className="font-bold">SHARE</div>
                <div className="text-sm text-center">Wissen verbreiten, Akzeptanz sichern, Wirkung skalieren.</div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 border-t-4 border-kivisai-deep-dark-blue animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out" style={{ animationDelay: '600ms' }}>
                <Image src="/images/4_KIVISAI-NAVI/KIVI_GROW.png" alt="Grow Icon" width={56} height={56} className="mb-2 w-14 h-14 object-contain animate-spin-slow" />
                <div className="font-bold">GROW</div>
                <div className="text-sm text-center">Erfolge verankern, Systeme regenerativ weiterentwickeln.</div>
              </div>
            </div>
            <p className="text-center text-muted-foreground">Jede Phase ist eigenständig nutzbar, wirkt aber am stärksten im zyklischen Gesamtprozess.</p>
          </div>
        </div>
      </ContentSection>

      {/* Unterseiten Teaser */}
      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
              Entdecken Sie KIVISAI
            </h2>
            <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
              Lernen Sie unsere Methoden, Werte und das Team kennen, das hinter KIVISAI steht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Bedeutung & Vision */}
            <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-kivisai-deep-dark-blue">Bedeutung & Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-kivisai-moss-green leading-relaxed">
                  Entdecken Sie die Bedeutung unseres Namens, unsere Werte und die Vision für eine regenerative KI-Transformation.
                </p>
                <ul className="space-y-2 text-sm text-kivisai-moss-green">
                  <li>• Was bedeutet KIVISAI?</li>
                  <li>• Unsere Mission & Vision</li>
                  <li>• Unsere Werte</li>
                </ul>
                <Link href="/ueber-kivisai/bedeutung">
                  <Button className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white">
                    Bedeutung entdecken
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Prinzipien */}
            <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kivisai-moss-green rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-kivisai-deep-dark-blue">Prinzipien</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-kivisai-moss-green leading-relaxed">
                  Unsere Grundsätze und Arbeitsweise für eine erfolgreiche KI-Transformation.
                </p>
                <ul className="space-y-2 text-sm text-kivisai-moss-green">
                  <li>• Mensch-zentrierte KI</li>
                  <li>• Nachhaltige Transformation</li>
                  <li>• Kollaborative Entwicklung</li>
                  <li>• Wirkungsorientierung</li>
                </ul>
                <Link href="/ueber-kivisai/prinzipien">
                  <Button className="w-full bg-kivisai-moss-green hover:bg-kivisai-deep-dark-blue text-white">
                    Prinzipien entdecken
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Methode */}
            <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-kivisai-deep-dark-blue">Methode</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-kivisai-moss-green leading-relaxed">
                  Der KIVISAI-Loop: Unser bewährter Transformationsansatz für nachhaltige KI-Integration.
                </p>
                <ul className="space-y-2 text-sm text-kivisai-moss-green">
                  <li>• THINK - Strategische Analyse</li>
                  <li>• ENABLE - Teams befähigen</li>
                  <li>• SHARE - Wissen teilen</li>
                  <li>• GROW - Nachhaltig wachsen</li>
                </ul>
                <Link href="/ueber-kivisai/methode">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                    Methode entdecken
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Team & Netzwerk */}
            <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-kivisai-deep-dark-blue">Team & Netzwerk</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-kivisai-moss-green leading-relaxed">
                  Die Menschen hinter KIVISAI und unser Partnernetzwerk für Ihre KI-Transformation.
                </p>
                <ul className="space-y-2 text-sm text-kivisai-moss-green">
                  <li>• Unser Team</li>
                  <li>• Partner & Netzwerk</li>
                  <li>• Expertise & Erfahrung</li>
                  <li>• Kontakt & Beratung</li>
                </ul>
                <Link href="/ueber-kivisai/team-netzwerk">
                  <Button className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white">
                    Team entdecken
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
          <CtaSection
            variant="centered"
            background="gradient"
        size="lg"
        title="Bereit für Ihre KI-Transformation?"
        description="Lassen Sie uns gemeinsam die passenden Lösungen für Ihre spezifischen Herausforderungen identifizieren."
            primaryCta={{
          text: "Kostenlose Erstberatung buchen",
          href: "/termin",
          icon: "calendar"
        }}
        secondaryCta={{
          text: "Unsere Leistungen entdecken",
          href: "/leistungen",
              icon: "arrow"
            }}
          />
        </div>
  )
}
