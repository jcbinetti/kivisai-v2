import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Building2, Scale, Accessibility } from "lucide-react"
import Link from "next/link"

export default function RechtlichesPage() {
  const legalPages = [
    {
      title: "Impressum",
      description: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Medienstaatsvertrag (MStV)",
      icon: Building2,
      href: "/rechtliches/impressum",
      color: "from-kivisai-clear-turquoise to-kivisai-deep-dark-blue"
    },
    {
      title: "Datenschutzerklärung",
      description: "Informationen zum Schutz Ihrer personenbezogenen Daten",
      icon: Shield,
      href: "/rechtliches/datenschutz",
      color: "from-kivisai-deep-dark-blue to-kivisai-clear-turquoise"
    },
    {
      title: "Allgemeine Geschäftsbedingungen",
      description: "AGB für Beratungsleistungen im Bereich KI und Transformation",
      icon: FileText,
      href: "/rechtliches/agb",
      color: "from-kivisai-clear-turquoise to-kivisai-deep-dark-blue"
    },
    {
      title: "Barrierefreiheit",
      description: "Unser Engagement für eine zugängliche Website",
      icon: Accessibility,
      href: "/rechtliches/barrierefreiheit",
      color: "from-kivisai-deep-dark-blue to-kivisai-clear-turquoise"
    }
  ]

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-sm font-semibold">
                RECHTLICHES
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Rechtliche Informationen</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Alle wichtigen rechtlichen Informationen und Dokumente auf einen Blick
            </p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
              Rechtliche Grundlagen
            </h2>
            <p className="text-kivisai-moss-green text-lg max-w-3xl mx-auto">
              Hier finden Sie alle wichtigen rechtlichen Informationen, die für die Nutzung unserer Website und Dienstleistungen relevant sind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalPages.map((page, index) => {
              const IconComponent = page.icon
              return (
                <Card key={index} className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${page.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-kivisai-deep-dark-blue text-xl">{page.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-kivisai-moss-green leading-relaxed">
                      {page.description}
                    </p>
                    <Link href={page.href}>
                      <Button className="w-full bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white">
                        Zum Dokument
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white p-8 rounded-lg border border-kivisai-clear-turquoise/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
                Haben Sie Fragen?
              </h3>
              <p className="text-kivisai-moss-green mb-6">
                Bei Fragen zu unseren rechtlichen Informationen oder wenn Sie weitere Auskünfte benötigen, 
                stehen wir Ihnen gerne zur Verfügung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white">
                    Kontakt aufnehmen
                  </Button>
                </Link>
                <Link href="mailto:info@kivisai.com">
                  <Button className="bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white">
                    E-Mail senden
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
} 