import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Brain,
  Target,
  Shield,
  Globe,
  Users,
  User,
  Cog,
} from "lucide-react"
import HeroSection from "@/components/common/HeroSection"
import { Button } from "@/components/ui/button"

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
  title: "KI-Lösungen für Organisationen | KIVISAI",
  description: "Entdecken Sie KI-Lösungen für die gesamte Organisation. Strategische Transformation und operative Optimierung.",
}

export default function OrganisationKIPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative pt-20 py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                ORGANISATION
              </Badge>
            </div>

            {/* Titel */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Das adaptive Unternehmen</h1>

            {/* Untertitel */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              KI-gestützte Geschäftsprozesse meistern den dualen Druck – 70% weniger manuelle Arbeit durch intelligente
              Automatisierung
            </p>

            {/* Meta-Informationen */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">KI</span>
                </div>
                <span>KIVISAI Team</span>
              </div>
              <div>2025 • 12 min</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb unter dem Hero */}
      <div className="bg-kivisai-light-cool-gray border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-kivisai-moss-green">
            <Link href="/" className="hover:text-kivisai-clear-turquoise">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/loesungen" className="hover:text-kivisai-clear-turquoise">Lösungen</Link>
            <span className="mx-2">/</span>
            <span className="text-kivisai-deep-dark-blue font-medium">Für Organisationen</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/2_KIVI_4_EBENE/KIVI_Organisation.png"
                alt="Organisationale KI-Transformation mit messbaren Erfolgen: Drei Personen vor Monitor mit KI-Symbol und Wachstumskurve für intelligente Geschäftsprozesse"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-kivisai-deep-dark-blue font-bold text-sm">70% weniger manuelle Arbeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Einleitung */}
            <Card className="border-l-4 border-l-kivisai-deep-dark-blue bg-kivisai-deep-dark-blue/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Die KI-Transformation der Gesamtorganisation
                  </h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
                  <p className="text-lg mb-4">
                    Auf der Ebene der Gesamtorganisation wirkt die KI-Transformation wie ein neues, zentrales
                    Nervensystem, das die Art und Weise, wie ein Unternehmen agiert und im Wettbewerb besteht,
                    fundamental verändert. Der Erfolg hängt davon ab, zwei Kräfte gleichzeitig zu meistern:
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-kivisai-deep-dark-blue mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-kivisai-deep-dark-blue">Der interne Effizienzdruck:</strong>
                        <span className="ml-2">
                          KI muss bestehende Prozesse automatisieren, Kosten senken und operative Hürden wie den
                          Fachkräftemangel oder veraltete IT-Systeme überwinden.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-kivisai-deep-dark-blue mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-kivisai-deep-dark-blue">Der externe Marktdruck:</strong>
                        <span className="ml-2">
                          Gleichzeitig muss die Organisation KI nutzen, um auf disruptive Wettbewerber zu reagieren und
                          ihre Marktposition strategisch neu zu definieren.
                        </span>
                      </div>
                    </li>
                  </ul>

                  <p className="text-lg mb-4">
                    Diese beiden Aspekte sind keine Gegensätze, sondern zwei Seiten derselben Medaille. Ein Unternehmen
                    wird erst dann wirklich adaptiv und zukunftsfähig, wenn es die operative Exzellenz im Inneren als
                    Fundament für strategische Innovationen nach außen nutzt.
                  </p>

                  <div className="bg-white border-l-4 border-l-green-500 p-4 rounded-r-lg">
                    <p className="text-kivisai-moss-green font-medium">
                      <strong className="text-green-600">Messbare Ergebnisse:</strong> Organisationen, die diese
                      ganzheitliche Transformation angehen, machen KI zu einem echten Werttreiber: In Studien gaben 22 %
                      der Unternehmen an, dass KI bereits heute mehr als 5 % zu ihrem Gewinn (EBIT) beiträgt.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Quelle: McKinsey & Company, "The state of AI in 2023"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unsere Lösungen für Organisationen */}
            <Card className="border-l-4 border-l-kivisai-deep-dark-blue bg-kivisai-deep-dark-blue/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-kivisai-deep-dark-blue rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">Unsere Lösungen für Organisationen</h2>
                </div>

                <div className="prose max-w-none text-kivisai-moss-green leading-relaxed mb-6">
                  <p className="text-lg">
                    Wir begleiten Ihre Organisation dabei, den dualen Druck zu meistern und sowohl operative Exzellenz
                    als auch strategische Agilität zu entwickeln. Von der Potenzialanalyse bis zur vollständigen
                    Transformation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-kivisai-deep-dark-blue/20">
                    <h3 className="text-lg font-bold text-kivisai-deep-dark-blue mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-kivisai-deep-dark-blue" />
                      INQA-Coaching
                    </h3>
                    <p className="text-kivisai-moss-green text-sm mb-4">
                      Geförderte Organisationsentwicklung mit bis zu 80% Zuschuss. Professionelle Begleitung bei der
                      KI-Transformation mit zertifizierten Coaches.
                    </p>
                    <Link
                      href="/transformation/inqa-coaching"
                      className="inline-flex items-center gap-2 text-kivisai-deep-dark-blue hover:text-kivisai-clear-turquoise font-semibold text-sm"
                    >
                      INQA-Coaching entdecken <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-kivisai-deep-dark-blue/20">
                  <div className="bg-gradient-to-r from-kivisai-deep-dark-blue/10 to-kivisai-clear-turquoise/10 p-4 rounded-lg">
                    <p className="text-kivisai-moss-green font-medium text-center">
                      <strong className="text-kivisai-deep-dark-blue">Nächster Schritt:</strong>
                      Lassen Sie uns in einer kostenlosen Potenzialanalyse die spezifischen KI-Möglichkeiten für Ihre
                      Organisation identifizieren.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messbare Ergebnisse */}
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    Messbare Vorteile für Organisationen
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">70% weniger manuelle Arbeit</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Drastische Reduktion manueller Prozesse durch intelligente Automatisierung
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">
                          Adaptive Organisationsstrukturen
                        </div>
                        <div className="text-sm text-kivisai-moss-green">
                          Flexible Anpassung an Marktveränderungen und disruptive Entwicklungen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Strategische Marktposition</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Proaktive Reaktion auf Geschäftsmodell-Veränderungen in der Branche
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-kivisai-deep-dark-blue">Operative Exzellenz</div>
                        <div className="text-sm text-kivisai-moss-green">
                          Optimierte Prozesse als Fundament für strategische Innovationen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation zwischen den 4 Ebenen */}
      <section className="py-16 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-8 text-center">
              Weitere KI-Potenziale entdecken
            </h2>
            
            {/* 4-Ebenen Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {/* Vorherige Ebene - Team */}
              <Link href="/loesungen/team" className="group">
                <div className="bg-white hover:bg-kivisai-clear-turquoise/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">Team</h3>
                      <p className="text-xs text-kivisai-moss-green">Vorherige Ebene</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images/2_KIVI_4_EBENE/KIVI_Team_Flat.png"
                      alt="Team Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

              {/* Vorherige Ebene - Mensch */}
              <Link href="/loesungen/mensch" className="group">
                <div className="bg-white hover:bg-kivisai-clear-turquoise/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">Mensch</h3>
                      <p className="text-xs text-kivisai-moss-green">Individuell</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images/2_KIVI_4_EBENE/KIVI_Menschen_Assistent_Flat.png"
                      alt="Mensch Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

              {/* Aktuelle Ebene - Organisation */}
              <div className="relative">
                <div className="bg-kivisai-deep-dark-blue text-white p-4 rounded-lg shadow-lg transform scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Cog className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Organisation</h3>
                      <p className="text-xs opacity-90">Aktuell</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images/2_KIVI_4_EBENE/KIVI_Organisation.png"
                      alt="Organisation Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Nächste Ebene - Ökosystem */}
              <Link href="/loesungen/oekosystem" className="group">
                <div className="bg-white hover:bg-kivisai-moss-green/10 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-kivisai-moss-green rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-kivisai-deep-dark-blue group-hover:text-kivisai-moss-green">Ökosystem</h3>
                      <p className="text-xs text-kivisai-moss-green">Nächste Ebene</p>
                    </div>
                  </div>
                  <div className="h-24 relative rounded overflow-hidden">
                    <Image
                      src="/images/2_KIVI_4_EBENE/KIVI_oekosystem.png"
                      alt="Ökosystem Ebene"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Beschreibung der Ebenen */}
            <div className="text-center">
              <p className="text-kivisai-moss-green mb-4">
                Entdecken Sie die verschiedenen Wirkungsebenen der KI-Transformation
              </p>
              <div className="flex justify-center gap-8 text-sm text-kivisai-moss-green">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-clear-turquoise rounded-full"></div>
                  <span>Individuell</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-deep-dark-blue rounded-full"></div>
                  <span>Organisational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kivisai-moss-green rounded-full"></div>
                  <span>Ökosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für Ihre Organisations-KI-Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entdecken Sie in unserer KI-Potenzialanalyse, wie Sie den dualen Druck meistern und Ihre Organisation adaptiv und zukunftsfähig gestalten können. Von operativer Exzellenz zu strategischer Innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Organisations-KI-Potenzialanalyse buchen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-kivisai-deep-dark-blue transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Unsere Leistungen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
