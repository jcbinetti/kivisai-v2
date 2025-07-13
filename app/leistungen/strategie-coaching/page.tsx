import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template"
import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Eye,
  Heart,
  Award,
  Network,
  Clock,
  Scale
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Breadcrumbs from "@/components/common/Breadcrumbs"
import Image from "next/image"

// Statische Generierung für bessere Performance
export const dynamic = "force-static"
export const revalidate = 3600 // Alle 60 Minuten neu bauen

export const metadata = {
  title: "Strategie-Coaching | KIVISAI",
  description: "Strategisches Coaching für die KI-Transformation. Entwickeln Sie eine klare KI-Strategie und Roadmap für Ihr Unternehmen.",
}

export default function StrategieCoachingPage() {
  return (
    <LeistungenPageTemplate
      heroTitle="Strategie-Coaching für Entscheider:innen"
      heroSubtitle="Navigieren Sie Ihre KI-Zukunft mit Klarheit, Mut und Verantwortung."
      heroDescription="Wir begleiten Sie als Gründer:in, Inhaber:in oder Führungskraft bei der Entwicklung einer tragfähigen KI-Vision – strategisch, partnerschaftlich, individuell."
      serviceName="Strategie-Coaching"
      heroBackground="gradient"
      ctaSection={{
        variant: "centered",
        background: "gradient",
        size: "lg",
        title: "Bereit für strategisches KI-Coaching?",
        description: "Entwickeln Sie gemeinsam mit uns eine tragfähige KI-Vision für Ihr Unternehmen.",
        primaryCta: {
          text: "Kostenloses Erstgespräch vereinbaren",
          href: "/termin",
          icon: "calendar"
        },
        secondaryCta: {
          text: "Mehr zu unseren Leistungen",
          href: "/leistungen",
          icon: "arrow"
        }
      }}
    >
      {/* Was erwartet Sie? Section */}
      <ContentSection
        background="white"
        padding="xl"
        title="Was erwartet Sie?"
        description="Ein diskretes 1:1-Sparring mit einem erfahrenen KI-Consultant auf Augenhöhe. Gemeinsam analysieren wir die strategischen Chancen der KI für Ihr Geschäftsmodell – pragmatisch, ethisch und zukunftsorientiert."
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-2">
                  Diskretes 1:1-Sparring
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed" style={{ color: '#36454F' }}>
                  Vertrauliche Beratung mit einem erfahrenen KI-Consultant auf Augenhöhe. Wir schaffen einen geschützten Raum für offene strategische Gespräche.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-kivisai-vibrant-light-green rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-2">
                  Strategische Chancenanalyse
                </h3>
                <p className="text-kivisai-deep-dark-blue leading-relaxed" style={{ color: '#001F3F' }}>
                  Gemeinsam analysieren wir die strategischen Chancen der KI für Ihr spezifisches Geschäftsmodell und entwickeln maßgeschneiderte Lösungen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-kivisai-vibrant-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-2">
                  Pragmatisch, ethisch, zukunftsorientiert
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed" style={{ color: '#36454F' }}>
                  Wir bringen technologische Tiefe mit wirtschaftlichem Weitblick zusammen und berücksichtigen dabei ethische Aspekte und langfristige Nachhaltigkeit.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-kivisai-clear-turquoise/10 to-kivisai-vibrant-turquoise/10 rounded-2xl p-8 border border-kivisai-clear-turquoise/20">
              <Image
                src="/images-optimized/4_KIVISAI-NAVI/KIVI-Begleitung.webp"
                alt="KIVISAI Begleitung"
                width={400}
                height={200}
                className="rounded-xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Wozu Strategie-Coaching? Section */}
      <ContentSection
        background="gray"
        padding="xl"
        title="Wozu Strategie-Coaching?"
        description="Entwickeln Sie Klarheit, Sicherheit und Impulse für Ihre KI-Transformation."
      >
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-l-4 border-l-kivisai-clear-turquoise hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Klarheit</h3>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Klarheit über Ihre strategischen Handlungsfelder in der KI-Transformation und eine strukturierte Roadmap für die Umsetzung.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="bg-kivisai-clear-turquoise/10 text-kivisai-clear-turquoise">
                  Strategische Prioritäten
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-kivisai-vibrant-light-green hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kivisai-vibrant-light-green rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Sicherheit</h3>
              </div>
              <p className="text-kivisai-deep-dark-blue leading-relaxed" style={{ color: '#001F3F' }}>
                Sicherheit im Umgang mit neuen Technologien, rechtlichen Fragen und kulturellem Wandel in Ihrem Unternehmen.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="bg-kivisai-vibrant-light-green/10 text-kivisai-vibrant-light-green">
                  Recht & Kultur
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-kivisai-vibrant-turquoise hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Impulse</h3>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Konkrete Impulse für Führung, Organisationsentwicklung und Innovationskraft in der KI-Ära.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary" className="bg-kivisai-vibrant-turquoise/10 text-kivisai-vibrant-turquoise">
                  Führung & Innovation
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Für wen ist das Coaching gemacht? Section */}
      <ContentSection
        background="white"
        padding="xl"
        title="Für wen ist das Coaching gemacht?"
        description="Das Angebot richtet sich an Entscheider:innen, die ihre KI-Zukunft aktiv gestalten möchten."
      >
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-l-4 border-l-kivisai-clear-turquoise hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Geschäftsführer:innen, Vorständ:innen und Bereichsleitungen</h3>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Als Führungskraft tragen Sie die Verantwortung für die strategische Ausrichtung. Wir unterstützen Sie bei der Entwicklung einer tragfähigen KI-Vision.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-kivisai-vibrant-light-green hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-kivisai-vibrant-light-green rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Gründer:innen mit Ambitionen zur Skalierung</h3>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Sie haben eine innovative Idee und möchten KI von Anfang an strategisch in Ihr Wachstum integrieren. Wir helfen Ihnen dabei.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-kivisai-vibrant-turquoise hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-kivisai-vibrant-turquoise rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-kivisai-deep-dark-blue">Inhaber:innen, die Innovation mit Verantwortung verbinden möchten</h3>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Sie möchten Ihr Unternehmen zukunftsfähig machen und dabei ethische Verantwortung und nachhaltige Entwicklung im Blick behalten.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* Ihr Nutzen auf einen Blick Section */}
      <ContentSection
        background="gray"
        padding="xl"
        title="Ihr Nutzen auf einen Blick"
        description="Konkrete Ergebnisse, die Sie von unserem Strategie-Coaching erwarten können."
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-kivisai-clear-turquoise/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-2">
                    Entwicklung einer individuellen KI-Vision und Roadmap
                  </h3>
                  <p className="text-kivisai-moss-green leading-relaxed">
                    Eine maßgeschneiderte Strategie, die zu Ihrem Unternehmen und Ihren Zielen passt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-kivisai-vibrant-light-green/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kivisai-vibrant-light-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-2">
                    Übersetzung von Technologietrends in wirtschaftliche Chancen
                  </h3>
                  <p className="text-kivisai-deep-dark-blue leading-relaxed" style={{ color: '#001F3F' }}>
                    Wir machen komplexe KI-Entwicklungen für Sie greifbar und zeigen konkrete Geschäftsmöglichkeiten auf.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-kivisai-vibrant-turquoise/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kivisai-vibrant-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-2">
                    Reflexion von Führungsstil, Kultur und ethischer Verantwortung
                  </h3>
                  <p className="text-kivisai-moss-green leading-relaxed">
                    Gemeinsam reflektieren wir, wie Sie als Führungskraft den Wandel verantwortungsvoll gestalten können.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-kivisai-deep-dark-blue/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-kivisai-deep-dark-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-2">
                    Optional: Integration in geförderte Programme wie INQA-Coaching
                  </h3>
                  <p className="text-kivisai-moss-green leading-relaxed">
                    Nutzen Sie zusätzlich geförderte Programme für eine umfassende Begleitung Ihrer Transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Warum mit KIVISAI?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Wir stehen für eine KI-Strategieberatung, die nicht im Elfenbeinturm entsteht – sondern in der Realität Ihrer Organisation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">30 Jahre Beratungserfahrung</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Skalierbares Expertennetzwerk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Klare Methodik</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">Wirkungsvolle Begleitung</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-kivisai-deep-dark-blue mb-4">
                Ihr Weg zur KI-Strategie
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue">Erstgespräch & Analyse</h4>
                    <p className="text-sm text-kivisai-moss-green">Kennenlernen und erste Einschätzung Ihrer Situation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-kivisai-vibrant-light-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue">Strategieentwicklung</h4>
                    <p className="text-sm text-kivisai-moss-green">Gemeinsame Entwicklung Ihrer KI-Vision und Roadmap</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-deep-dark-blue">Umsetzung & Begleitung</h4>
                    <p className="text-sm text-kivisai-moss-green">Praktische Unterstützung bei der Implementierung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Strategie-Coaching als Transformationsbegleitung Section */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kivisai-deep-dark-blue">Strategie-Coaching als Transformationsbegleitung</h2>
          <p className="text-xl text-kivisai-deep-dark-blue/90 mb-8">
            Im Rahmen von KIVISAI begleiten wir Individuen und Teams dabei, sich sicher im Unbekannten zu bewegen. Unser Ansatz hilft, persönliche und organisationale Strategien zu entwickeln, um Veränderungen aktiv und selbstbewusst zu gestalten. Gemeinsam identifizieren wir Potenziale, setzen klare Ziele und schaffen Orientierung für nachhaltigen Erfolg im Wandel.
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
    </LeistungenPageTemplate>
  )
}
