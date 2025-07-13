import { LeistungenPageTemplate } from "@/components/common/leistungen-page-template"
import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  Rocket,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Database,
  Sparkles,
  Cog,
  Search,
} from "lucide-react"
import Image from "next/image"

export default function KIPrototypePage() {
  const useCases = [
    {
      title: "Chatbots & Intelligente Assistenten",
      description: "Conversational AI für Kundenservice, interne Beratung und Prozessunterstützung",
      icon: MessageSquare,
      image: "/placeholder.svg?height=300&width=400",
      features: ["24/7 Verfügbarkeit", "Natürliche Sprache", "Kontextverständnis"],
    },
    {
      title: "RAG-Systeme",
      description: "Retrieval-Augmented Generation für wissensbasierte KI-Anwendungen",
      icon: Database,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Aktuelle Informationen", "Quellenangaben", "Domänen-Expertise"],
    },
    {
      title: "Generative KI-Anwendungen",
      description: "Text-, Bild- und Code-Generierung für kreative und produktive Anwendungen",
      icon: Sparkles,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Text-Generierung", "Bild-Erstellung", "Code-Assistenz"],
    },
    {
      title: "Prozessautomatisierung",
      description: "KI-gestützte Automatisierung komplexer Geschäftsprozesse",
      icon: Cog,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Workflow-Optimierung", "Entscheidungslogik", "Integration"],
    },
    {
      title: "Semantische Suche",
      description: "Intelligente Suche und Wissensmanagement mit KI-Verstehen",
      icon: Search,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Bedeutungssuche", "Wissensextraktion", "Smart Filtering"],
    },
  ]

  const benefits = [
    {
      icon: Lightbulb,
      title: "Schnelle Ergebnisse",
      description: "Funktionsfähiger Prototyp in ≤ 4 Wochen",
    },
    {
      icon: Rocket,
      title: "Agile Entwicklung",
      description: "Flexibel und anpassungsfähig an Ihre Anforderungen",
    },
    {
      icon: CheckCircle,
      title: "Messbarer Nutzen",
      description: "Fokus auf konkrete, wertschöpfende Anwendungen",
    },
    {
      icon: TrendingUp,
      title: "Skalierbare Basis",
      description: "Grundlage für zukünftige, produktive KI-Systeme",
    },
  ]

  return (
    <LeistungenPageTemplate
      heroTitle="KI-Prototyping – Von der Idee zum MVP"
      heroDescription="Mit unserem agilen Prototyping-Sprint entwickeln wir gemeinsam mit Ihrem Team genau die KI-Lösung, die Ihre Organisation jetzt braucht. Wir liefern ein funktionierendes MVP (Minimum Viable Product), das messbare Wirkung entfaltet und sofort getestet werden kann."
      serviceName="KI-Prototyping"
      ctaSection={{
        title: "Bereit für Ihren KI-Prototyp?",
        description: "Lassen Sie uns gemeinsam Ihre KI-Idee in wenigen Wochen zum Leben erwecken.",
        primaryCta: {
          text: "Prototyp-Sprint starten",
          href: "/termin"
        },
        secondaryCta: {
          text: "Mehr zu Prototyping",
          href: "/leistungen/prototyping"
        }
      }}
    >
      {/* Process Overview */}
      <ContentSection variant="wide" padding="lg" background="white">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Unser Prozess
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-kivisai-deep-dark-blue">Agiler Prototyping-Sprint</h2>
          <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
            Der KIVISAI-Prototyping-Sprint ist ein intensiver, fokussierter Prozess, der darauf abzielt, Ihre KI-Idee
            schnell in die Realität umzusetzen. In nur wenigen Wochen entwickeln wir einen funktionsfähigen Prototyp,
            der die Kernfunktionalitäten Ihrer zukünftigen KI-Anwendung demonstriert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-kivisai-light-cool-gray">
              <CardContent className="pt-6">
                <benefit.icon className="w-12 h-12 text-kivisai-deep-dark-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">{benefit.title}</h3>
                <p className="text-kivisai-moss-green">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>

      {/* Use Cases Section */}
      <ContentSection variant="wide" padding="xl" background="gradient">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-kivisai-vibrant-light-green text-kivisai-deep-dark-blue">
            Anwendungsfälle
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-kivisai-deep-dark-blue">Typische KI-Prototyping Projekte</h2>
          <p className="text-xl text-kivisai-moss-green max-w-4xl mx-auto">
            Von Chatbots bis zu komplexen KI-Systemen – wir entwickeln Prototypen für die verschiedensten
            Anwendungsbereiche und bringen Ihre KI-Vision zum Leben.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src={useCase.image || "/placeholder.svg"} alt={useCase.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <div className="bg-kivisai-deep-dark-blue text-white p-2 rounded-lg">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-kivisai-deep-dark-blue">{useCase.title}</CardTitle>
                <CardDescription className="text-kivisai-moss-green text-base">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Co-Creation Highlight */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Co-Creation
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-kivisai-deep-dark-blue">
                Gemeinsam entwickeln, gemeinsam lernen
              </h3>
              <p className="text-kivisai-moss-green leading-relaxed mb-6">
                Dabei setzen wir auf Co-Creation: Ihr Team ist aktiv in den Prozess eingebunden, um sicherzustellen,
                dass die entwickelte Lösung perfekt auf Ihre Bedürfnisse zugeschnitten ist und das Know-how in Ihrem
                Unternehmen verbleibt.
              </p>
              <ul className="space-y-2 text-kivisai-moss-green">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-kivisai-vibrant-light-green" />
                  Aktive Einbindung Ihres Teams
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-kivisai-vibrant-light-green" />
                  Know-how-Transfer während der Entwicklung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-kivisai-vibrant-light-green" />
                  Höhere Akzeptanz durch Beteiligung
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Co-Creation Prozess"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </ContentSection>
    </LeistungenPageTemplate>
  )
}
