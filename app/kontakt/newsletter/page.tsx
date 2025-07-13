import Header from "@/components/header";
import { HeroSection as Hero } from "@/components/common/hero-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CtaSection as CTA } from "@/components/common/cta-section";
import NewsletterCTA from "@/components/newsletter-cta";
import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Users, Sparkles, Calendar, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Newsletter | KIVISAI",
  description: "Neuigkeiten und Impulse aus unserer Community für verantwortungsvolle KI-Transformation.",
};

const benefits = [
    {
      icon: TrendingUp,
      title: "KI-Trend Analysen",
      description: "Tiefgehende Analysen aktueller KI-Entwicklungen und deren Auswirkungen auf Organisationen.",
    },
    {
      icon: Lightbulb,
      title: "Praxisnahe Tipps",
      description: "Konkrete Anwendungsfälle, Erfolgsgeschichten und umsetzbare Strategien für Ihre KI-Transformation.",
    },
    {
      icon: Users,
      title: "Community-Insights",
      description: "Erfahrungen und Learnings aus unserem Netzwerk von KI-Pionieren und Transformation-Experten.",
    },
    {
      icon: Calendar,
      title: "Exklusive Events",
      description: "Frühe Einladungen zu Webinaren, Workshops und anderen KIVISAI-Events für Community-Mitglieder.",
    },
    {
      icon: BookOpen,
      title: "Ressourcen & Tools",
      description: "Exklusive Downloads, Checklisten und Tools für Ihre KI-Projekte und Transformationsprozesse.",
    },
    {
      icon: Sparkles,
      title: "Innovation Updates",
      description: "Neueste Entwicklungen in der regenerativen KI und nachhaltige Innovationen aus unserem Netzwerk.",
    },
];

const faqItems = [
    {
        question: "Wie oft erhalte ich den Newsletter?",
        answer: "Unser Newsletter erscheint monatlich mit den wichtigsten KI-Updates, Community-Insights und praktischen Tipps für Ihre Transformation."
    },
    {
        question: "Kann ich mich jederzeit abmelden?",
        answer: "Ja, Sie können sich jederzeit mit einem Klick abmelden. Der Abmelde-Link befindet sich in jeder E-Mail."
    },
    {
        question: "Werden meine Daten weitergegeben?",
        answer: "Nein, Ihre Daten werden ausschließlich für den Newsletter verwendet und nicht an Dritte weitergegeben. Weitere Informationen finden Sie in unserer Datenschutzerklärung."
    }
]

export default function NewsletterPage() {
  return (
    <>
        <Header />
        <Hero
            title="KIVISAI Newsletter"
            subtitle="Wissen. Impulse. Community."
            background="gradient"
            description="Bleiben Sie informiert über die neuesten Entwicklungen in der KI, erhalten Sie praxisnahe Tipps und werden Sie Teil unserer wachsenden Community."
        />
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/kontakt">Kontakt</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Newsletter</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <section className="py-16 bg-kivisai-pure-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            <div className="max-w-2xl mx-auto bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white p-8 rounded-lg shadow-lg border border-kivisai-clear-turquoise/20">
                                <h2 className="text-2xl font-bold text-center mb-4 text-kivisai-deep-dark-blue">Jetzt Newsletter abonnieren</h2>
                                <p className="text-center text-kivisai-moss-green mb-6">Werde Teil unserer Community für regenerative KI-Transformation.</p>
                                <div className="bg-kivisai-clear-turquoise/10 border border-kivisai-clear-turquoise/30 rounded-lg p-4 mb-6">
                                    <div className="flex items-center gap-2 text-kivisai-deep-dark-blue font-semibold mb-2">
                                        <Sparkles className="w-5 h-5 text-kivisai-clear-turquoise" />
                                        Exklusiver Vorteil für Newsletter-Abonnenten
                                    </div>
                                    <p className="text-sm text-kivisai-moss-green">
                                        Als Newsletter-Abonnent erhalten Sie automatisch Zugang zu allen exklusiven Downloads, Checklisten und Tools aus unserem Wissens-Hub – kostenlos und ohne zusätzliche Anmeldung.
                                    </p>
                                </div>
                                <NewsletterCTA variant="full" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <NewsletterCTA variant="sidebar" />

                            <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
                                <CardHeader>
                                    <h3 className="font-bold text-kivisai-deep-dark-blue">Newsletter-Archiv</h3>
                                </CardHeader>
                                <div className="p-6">
                                    <Link href="/kontakt/newsletter/archiv" className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue hover:underline">
                                        Zum Archiv...
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">
                        Was Sie in unserem Newsletter erwartet
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="bg-kivisai-pure-white p-8 rounded-lg shadow-lg border border-kivisai-clear-turquoise/20 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <benefit.icon className="w-8 h-8 text-kivisai-clear-turquoise" />
                                    <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">{benefit.title}</h3>
                                </div>
                                <p className="text-kivisai-moss-green leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 bg-kivisai-pure-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-kivisai-deep-dark-blue">Häufige Fragen</h2>
                    <div className="space-y-4">
                        {faqItems.map((item) => (
                            <div key={item.question} className="bg-gradient-to-r from-kivisai-light-cool-gray to-kivisai-pure-white p-6 rounded-lg border border-kivisai-clear-turquoise/20">
                                <h3 className="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue">{item.question}</h3>
                                <p className="text-kivisai-moss-green">
                                    {item.question === "Werden meine Daten weitergegeben?" ? (
                                        <>
                                            Nein, Ihre Daten werden ausschließlich für den Newsletter verwendet und nicht an Dritte weitergegeben. Weitere Informationen finden Sie in unserer{" "}
                                            <Link href="/rechtliches/datenschutz" className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue hover:underline">
                                                Datenschutzerklärung
                                            </Link>
                                            .
                                        </>
                                    ) : item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <CTA title="Bereit für den nächsten Schritt?"
            description="Lassen Sie uns gemeinsam die Potenziale von KI für Ihr Unternehmen erschließen."
            primaryCta={{
                text: "Jetzt Kontakt aufnehmen",
                href: "/kontakt",
                icon: "arrow",
            }}
            secondaryCta={{
                text: "Newsletter-Archiv ansehen",
                href: "/kontakt/newsletter/archiv",
                icon: "mail"
            }}
            background="gradient"
            variant="centered"
        />
        <section className="py-16 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-kivisai-deep-dark-blue mb-4">Was finde ich im Newsletter-Archiv?</h2>
                    <p className="text-lg text-kivisai-moss-green mb-6">Im Archiv finden Sie alle bisherigen Ausgaben unseres Newsletters – mit KI-Trends, Praxisbeispielen, Community-Insights und exklusiven Downloads. Ideal zum Nachlesen und Inspirieren lassen!</p>
                    <a href="/kontakt/newsletter/archiv" className="inline-block bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-deep-dark-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-kivisai-clear-turquoise/50">Newsletter-Archiv ansehen</a>
                </div>
            </div>
        </section>
    </>
  )
}
