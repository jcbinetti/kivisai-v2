import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Calendar, Download, Eye, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Newsletter-Archiv | KIVISAI - Alle Ausgaben im Überblick",
  description:
    "Durchsuchen Sie alle KIVISAI Newsletter-Ausgaben mit KI-Insights, Praxistipps und Community-Updates für regenerative Transformation.",
}

// Mock data - In production würde das aus einer Datenbank oder CMS kommen
const newsletters = [
  {
    id: "2024-12",
    title: "KI-Trends 2025: Was Unternehmen jetzt wissen müssen",
    description:
      "Unsere Jahresendausgabe mit den wichtigsten KI-Entwicklungen und Prognosen für 2025. Plus: Exklusive Insights aus unserem Netzwerk.",
    date: "2024-12-15",
    category: "Trends",
    readTime: "8 Min",
    featured: true,
    topics: ["KI-Trends", "Prognosen", "Strategie"],
    downloadUrl: "/downloads/newsletter-2024-12.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-12",
  },
  {
    id: "2024-11",
    title: "Regenerative KI: Nachhaltigkeit in der Praxis",
    description:
      "Wie Unternehmen KI-Systeme entwickeln, die nicht nur effizient sind, sondern auch regenerativ wirken. Mit Fallstudien und Umsetzungstipps.",
    date: "2024-11-15",
    category: "Praxis",
    readTime: "6 Min",
    featured: false,
    topics: ["Nachhaltigkeit", "Regenerative KI", "Fallstudien"],
    downloadUrl: "/downloads/newsletter-2024-11.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-11",
  },
  {
    id: "2024-10",
    title: "KI-Ethik im Mittelstand: Leitfaden für verantwortungsvolle Implementierung",
    description:
      "Praktische Ansätze für ethische KI-Entwicklung in kleineren und mittleren Unternehmen. Inklusive Checkliste und Bewertungsframework.",
    date: "2024-10-15",
    category: "Ethik",
    readTime: "7 Min",
    featured: false,
    topics: ["KI-Ethik", "Mittelstand", "Leitfaden"],
    downloadUrl: "/downloads/newsletter-2024-10.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-10",
  },
  {
    id: "2024-09",
    title: "Community Spotlight: Erfolgsgeschichten aus dem KIVISAI-Netzwerk",
    description:
      "Drei inspirierende Transformationsgeschichten von Unternehmen, die KI erfolgreich und nachhaltig implementiert haben.",
    date: "2024-09-15",
    category: "Community",
    readTime: "5 Min",
    featured: false,
    topics: ["Erfolgsgeschichten", "Transformation", "Community"],
    downloadUrl: "/downloads/newsletter-2024-09.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-09",
  },
  {
    id: "2024-08",
    title: "KI-Tools für den Arbeitsalltag: Produktivität steigern ohne Überforderung",
    description:
      "Eine kuratierte Auswahl praktischer KI-Tools für verschiedene Unternehmensbereiche. Mit Bewertungen und Implementierungstipps.",
    date: "2024-08-15",
    category: "Tools",
    readTime: "9 Min",
    featured: false,
    topics: ["KI-Tools", "Produktivität", "Praxis"],
    downloadUrl: "/downloads/newsletter-2024-08.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-08",
  },
  {
    id: "2024-07",
    title: "Datenschutz und KI: DSGVO-konforme Implementierung",
    description:
      "Rechtliche Aspekte der KI-Nutzung in Deutschland und Europa. Mit praktischen Tipps für datenschutzkonforme KI-Projekte.",
    date: "2024-07-15",
    category: "Recht",
    readTime: "6 Min",
    featured: false,
    topics: ["Datenschutz", "DSGVO", "Compliance"],
    downloadUrl: "/downloads/newsletter-2024-07.pdf",
    webUrl: "/wissen/newsletter/ausgaben/2024-07",
  },
]

const categories = ["Alle", "Trends", "Praxis", "Ethik", "Community", "Tools", "Recht"]

export default function NewsletterArchivPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-moss-green to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-10 h-10 text-kivisai-vibrant-light-green" />
              <h1 className="text-3xl md:text-5xl font-bold">Newsletter-Archiv</h1>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Durchsuchen Sie alle KIVISAI Newsletter-Ausgaben mit wertvollen KI-Insights, Praxistipps und Updates aus
              unserer Community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {newsletters.length} Ausgaben verfügbar
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Monatlich neue Inhalte
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                PDF & Web-Version
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter und Suche */}
      <section className="py-8 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kivisai-moss-green w-5 h-5" />
                  <Input placeholder="Newsletter durchsuchen..." className="pl-10 bg-white" />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Alle" ? "default" : "outline"}
                    size="sm"
                    className={
                      category === "Alle" ? "bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80" : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Liste */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {newsletters.map((newsletter, index) => (
                <article
                  key={newsletter.id}
                  className={`bg-white rounded-lg shadow-sm border transition-all hover:shadow-md ${
                    newsletter.featured ? "border-kivisai-clear-turquoise border-2" : "border-gray-200"
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="secondary"
                              className={`${
                                newsletter.category === "Trends"
                                  ? "bg-kivisai-clear-turquoise/10 text-kivisai-clear-turquoise"
                                  : newsletter.category === "Praxis"
                                    ? "bg-kivisai-vibrant-light-green/10 text-kivisai-vibrant-light-green"
                                    : newsletter.category === "Ethik"
                                      ? "bg-kivisai-moss-green/10 text-kivisai-moss-green"
                                      : newsletter.category === "Community"
                                        ? "bg-kivisai-deep-dark-blue/10 text-kivisai-deep-dark-blue"
                                        : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {newsletter.category}
                            </Badge>
                            {newsletter.featured && (
                              <Badge className="bg-kivisai-clear-turquoise text-white">Featured</Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-kivisai-moss-green">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(newsletter.date).toLocaleDateString("de-DE", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold mb-3 text-kivisai-deep-dark-blue">
                          {newsletter.title}
                        </h2>

                        <p className="text-kivisai-moss-green mb-4 leading-relaxed">{newsletter.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {newsletter.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-3 py-1 bg-kivisai-light-cool-gray text-kivisai-deep-dark-blue text-sm rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-sm text-kivisai-moss-green mb-6">
                          <Eye className="w-4 h-4 mr-1" />
                          Lesezeit: {newsletter.readTime}
                        </div>
                      </div>

                      <div className="lg:w-64 flex flex-col gap-3">
                        <Link href={newsletter.webUrl}>
                          <Button className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise">
                            <Eye className="w-4 h-4 mr-2" />
                            Online lesen
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={newsletter.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            PDF herunterladen
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Weitere Newsletter laden
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Anmeldung CTA */}
      <section className="py-16 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-moss-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Verpassen Sie keine Ausgabe!</h2>
          <p className="text-xl mb-8 opacity-90">
            Abonnieren Sie unseren Newsletter und erhalten Sie monatlich neue KI-Insights direkt in Ihr Postfach.
          </p>
          <Link href="/wissen/newsletter">
            <Button size="lg" className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white">
              <Mail className="w-5 h-5 mr-2" />
              Jetzt Newsletter abonnieren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
