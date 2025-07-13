import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Download, Share2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NewsletterPageProps {
  params: Promise<{ id: string }>
}

// Mock data - würde normalerweise aus Datenbank kommen
const getNewsletterById = (id: string) => {
  const newsletters = {
    "2024-12": {
      id: "2024-12",
      title: "KI-Trends 2025: Was Unternehmen jetzt wissen müssen",
      description: "Unsere Jahresendausgabe mit den wichtigsten KI-Entwicklungen und Prognosen für 2025.",
      date: "2024-12-15",
      category: "Trends",
      readTime: "8 Min",
      content: `
        <h2>Die wichtigsten KI-Trends für 2025</h2>
        <p>Das Jahr 2024 war geprägt von bahnbrechenden Entwicklungen in der Künstlichen Intelligenz. Während wir auf 2025 blicken, zeichnen sich bereits die nächsten großen Trends ab, die Unternehmen auf dem Radar haben sollten.</p>
        
        <h3>1. Multimodale KI wird zum Standard</h3>
        <p>KI-Systeme, die Text, Bilder, Audio und Video gleichzeitig verarbeiten können, werden 2025 in vielen Unternehmensbereichen zum Standard. Diese Entwicklung ermöglicht natürlichere Interaktionen und vielseitigere Anwendungen.</p>
        
        <h3>2. Edge AI für mehr Datenschutz</h3>
        <p>Die Verarbeitung von KI-Modellen direkt auf Endgeräten (Edge Computing) wird zunehmen. Dies bietet Vorteile in puncto Datenschutz, Latenz und Offline-Verfügbarkeit.</p>
        
        <h3>3. Regenerative KI-Ansätze</h3>
        <p>Unternehmen setzen verstärkt auf KI-Systeme, die nicht nur effizient sind, sondern auch regenerativ wirken – sowohl für Menschen als auch für die Umwelt.</p>
        
        <h2>Praxistipps für Ihr Unternehmen</h2>
        <ul>
          <li>Entwickeln Sie eine KI-Strategie für 2025</li>
          <li>Investieren Sie in die Weiterbildung Ihrer Teams</li>
          <li>Prüfen Sie Ihre Dateninfrastruktur</li>
          <li>Berücksichtigen Sie ethische Aspekte von Anfang an</li>
        </ul>
        
        <h2>Community-Insights</h2>
        <p>Aus unserem Netzwerk hören wir, dass besonders mittelständische Unternehmen 2025 den Sprung in die KI-Transformation wagen möchten. Die wichtigsten Erfolgsfaktoren sind dabei:</p>
        <ul>
          <li>Klare Zielsetzung und realistische Erwartungen</li>
          <li>Schrittweise Implementierung</li>
          <li>Enge Zusammenarbeit zwischen IT und Fachbereichen</li>
          <li>Kontinuierliches Lernen und Anpassen</li>
        </ul>
      `,
      downloadUrl: "/downloads/newsletter-2024-12.pdf",
    },
  }

  return newsletters[id as keyof typeof newsletters] || null
}

export async function generateMetadata({ params }: NewsletterPageProps): Promise<Metadata> {
  const { id } = await params
  const newsletter = getNewsletterById(id)

  if (!newsletter) {
    return {
      title: "Newsletter nicht gefunden | KIVISAI",
    }
  }

  return {
    title: `${newsletter.title} | KIVISAI Newsletter`,
    description: newsletter.description,
  }
}

export default async function NewsletterDetailPage({ params }: NewsletterPageProps) {
  const { id } = await params
  const newsletter = getNewsletterById(id)

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-kivisai-pure-white">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Newsletter nicht gefunden
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Die angeforderte Newsletter-Ausgabe konnte nicht gefunden werden.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 text-center">
          <Link href="/wissen/newsletter/archiv">
            <Button>Zurück zum Archiv</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white">{newsletter.category}</Badge>
              <div className="flex items-center text-sm text-white/80">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(newsletter.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{newsletter.title}</h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">{newsletter.description}</p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-white/20 hover:bg-white/30 text-white">
                <a href={newsletter.downloadUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  PDF herunterladen
                </a>
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="w-4 h-4 mr-2" />
                Teilen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-kivisai-moss-green">
            <li>
              <Link href="/" className="hover:text-kivisai-clear-turquoise">
                Home
              </Link>
            </li>
            <li className="text-kivisai-light-cool-gray">/</li>
            <li>
              <Link href="/kontakt" className="hover:text-kivisai-clear-turquoise">
                Kontakt
              </Link>
            </li>
            <li className="text-kivisai-light-cool-gray">/</li>
            <li>
              <Link href="/wissen/newsletter/archiv" className="hover:text-kivisai-clear-turquoise">
                Newsletter Archiv
              </Link>
            </li>
            <li className="text-kivisai-light-cool-gray">/</li>
            <li className="text-kivisai-deep-dark-blue font-medium">{newsletter.title}</li>
          </ol>
        </nav>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-kivisai-deep-dark-blue prose-p:text-kivisai-moss-green prose-a:text-kivisai-clear-turquoise"
              dangerouslySetInnerHTML={{ __html: newsletter.content }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-moss-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Gefällt Ihnen unser Newsletter?</h2>
          <p className="text-xl mb-8 opacity-90">
            Abonnieren Sie jetzt und erhalten Sie monatlich neue KI-Insights direkt in Ihr Postfach.
          </p>
          <Link href="/wissen/newsletter">
            <Button size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Newsletter abonnieren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
