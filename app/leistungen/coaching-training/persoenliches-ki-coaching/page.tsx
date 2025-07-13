import Link from "next/link"
import { Target, Shield, CheckCircle } from "lucide-react"
import { ContentSection } from "@/components/common/content-section"

export default function PersoenlichesKiCoachingPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Persönliches KI-Coaching</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vom KI-Chaos zur persönlichen Klarheit: Ihr individuelles Coaching für die digitale Transformation
            </p>
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
              <Link href="/leistungen" className="hover:text-kivisai-clear-turquoise">
                Leistungen
              </Link>
            </li>
            <li className="text-kivisai-light-cool-gray">/</li>
            <li>
              <Link href="/leistungen/coaching-training" className="hover:text-kivisai-clear-turquoise">
                Coaching & Training
              </Link>
            </li>
            <li className="text-kivisai-light-cool-gray">/</li>
            <li className="text-kivisai-deep-dark-blue font-medium">Persönliches KI-Coaching</li>
          </ol>
        </nav>
      </div>

      <ContentSection variant="default" background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-kivisai-deep-dark-blue">
              Vom KI-Chaos zur persönlichen Klarheit: Ihr individuelles Coaching
            </h2>
            <div className="space-y-4 text-kivisai-moss-green leading-relaxed">
              <p>
                Die Welt der Künstlichen Intelligenz ist faszinierend und überwältigend zugleich. Sie spüren die Neugier
                und den Enthusiasmus für die neuen Möglichkeiten, fühlen sich aber vielleicht auch von der
                Geschwindigkeit der Veränderungen überfordert. Unsicherheit, Ängste und Blockaden sind normale
                Reaktionen auf eine so tiefgreifende Transformation.
              </p>
              <p>
                Genau hier setzt unser persönliches KI-Coaching an. Es ist ein geschützter Raum, der nur Ihnen gehört.
                Hier geht es nicht um Tools oder fertige Lösungen, sondern um Sie als Mensch. Gemeinsam mit einem
                erfahrenen Coach können Sie offen über Ihre Zweifel und Ihre Ziele sprechen, eine persönliche Strategie
                entwickeln und so die KI-Transformation als Chance für Ihre ganz persönliche Entwicklung begreifen.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        variant="centered"
        background="white"
        padding="lg"
        title="Für wen ist dieses 1:1-Coaching gedacht?"
        description="Wir adressieren mit diesem Angebot bewusst zwei Gruppen, denn jeder Mensch startet von einem anderen Punkt:"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Gruppe 1: Neugierige und Zögernde */}
          <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-kivisai-vibrant-light-green rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-kivisai-deep-dark-blue" />
              </div>
              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">
                Für die Neugierigen und Zögernden...
              </h3>
            </div>
            <p className="text-kivisai-moss-green leading-relaxed">
              Ihnen schwirrt der Kopf und Sie wissen nicht, wo Sie anfangen sollen? Sie haben Sorge, den Anschluss zu
              verlieren oder machen sich Gedanken über die Sicherheit von Daten? In unserem Coaching finden Sie einen
              vertrauensvollen Partner, um diese Fragen ohne Druck zu sortieren, grundlegende Blockaden zu lösen und
              erste, sichere Schritte in die Welt der KI zu wagen.
            </p>
          </div>

          {/* Gruppe 2: Ambitionierte und Entblockte */}
          <div className="bg-kivisai-light-cool-gray p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-kivisai-pure-white" />
              </div>
              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue">
                Für die Ambitionierten und "Entblockten"...
              </h3>
            </div>
            <p className="text-kivisai-moss-green leading-relaxed">
              Sie nutzen bereits KI, wollen sich aber aber einen echten strategischen Vorteil verschaffen? Sie fragen
              sich: Wie kann ich lernen, ohne dass mein Wissen morgen schon veraltet ist? Was ist meine persönliche
              Strategie, um den Überblick zu behalten? Und wie kann ich als Mitarbeiter oder Manager meine Firma dazu
              bewegen, sich mit KI zu beschäftigen, damit ich besser arbeiten kann? Wir helfen Ihnen, von der reinen
              Anwendung zur strategischen Gestaltung zu kommen.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        variant="centered"
        background="gray"
        padding="lg"
        title="Was wir gemeinsam in Ihrem Coaching erreichen:"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-kivisai-vibrant-light-green/20">
            <CheckCircle className="w-6 h-6 text-kivisai-vibrant-light-green mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Wir schaffen Klarheit</h3>
              <p className="text-kivisai-moss-green text-sm">
                Wir ordnen das Chaos, trennen Hype von Substanz und finden heraus, was für Sie persönlich wirklich
                relevant ist.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-kivisai-vibrant-light-green/20">
            <CheckCircle className="w-6 h-6 text-kivisai-vibrant-light-green mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Wir bauen Ihre persönliche Strategie</h3>
              <p className="text-kivisai-moss-green text-sm">
                Wir definieren Ihre individuellen Lernziele und gestalten eine nachhaltige Lernreise, die zu Ihrem Leben
                und Ihrem Tempo passt.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-kivisai-vibrant-light-green/20">
            <CheckCircle className="w-6 h-6 text-kivisai-vibrant-light-green mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-kivisai-deep-dark-blue mb-2">Wir fördern Ihre Selbstbewusstsein</h3>
              <p className="text-kivisai-moss-green text-sm">
                Wir helfen Ihnen, Ihre Fähigkeiten und Stärken zu erkennen und zu nutzen, um erfolgreich mit KI
                umzugehen.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
