import { ContentSection } from "@/components/common/content-section"

export default function KIPolicyPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              KI-Policy: Unsere Verpflichtung zu verantwortungsvoller KI
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Unser Bekenntnis zu ethischer und verantwortungsvoller Künstlicher Intelligenz
            </p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="prose max-w-none text-kivisai-moss-green leading-relaxed">
          <p>
            Bei KIVISAI sind wir davon überzeugt, dass Künstliche Intelligenz das Potenzial hat, unsere Welt nachhaltig
            positiv zu verändern. Gleichzeitig sind wir uns der damit verbundenen Verantwortung bewusst. Unsere
            KI-Policy legt die Grundsätze fest, nach denen wir KI-Systeme beraten, entwickeln und implementieren – stets
            im Einklang mit unseren Werten &quot;strategisch, menschlich, wirksam&quot;.
          </p>

          <p>
            <strong>Unsere Kernprinzipien für verantwortungsvolle KI:</strong>
          </p>

          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-kivisai-deep-dark-blue">🔍 Transparenz & Erklärbarkeit</h3>
            <p>
              Wir streben danach, die Funktionsweise von KI-Systemen verständlich und nachvollziehbar zu gestalten,
              sodass Entscheidungen nicht in einer &apos;Black Box&apos; getroffen werden.
            </p>
          </div>

          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-kivisai-deep-dark-blue">⚖️ Fairness & Nicht-Diskriminierung</h3>
            <p>
              Wir setzen uns aktiv für die Minimierung von Verzerrungen (Bias) in KI-Modellen ein, um faire und
              diskriminierungsfreie Ergebnisse für alle Nutzer sicherzustellen.
            </p>
          </div>

          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-kivisai-deep-dark-blue">🔒 Datenschutz & Sicherheit</h3>
            <p>
              Der Schutz Ihrer Daten und die Sicherheit der KI-Systeme haben oberste Priorität. Wir halten uns streng an
              die DSGVO und implementieren robuste Sicherheitsmaßnahmen.
            </p>
          </div>

          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-kivisai-deep-dark-blue">
              👥 Menschliche Aufsicht (Human Oversight)
            </h3>
            <p>
              Wir stellen sicher, dass der Mensch stets die Kontrolle über die KI-Systeme behält und die finale
              Entscheidungsinstanz bleibt, insbesondere bei Hochrisiko-Anwendungen.
            </p>
          </div>

          <div className="bg-kivisai-light-cool-gray p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-kivisai-deep-dark-blue">🌱 Nachhaltigkeit</h3>
            <p>
              Wir berücksichtigen ökologische und soziale Nachhaltigkeit bei der Entwicklung und dem Einsatz von
              KI-Lösungen.
            </p>
          </div>

          <p>
            <strong>Unser Umgang mit dem EU AI Act:</strong>
          </p>
          <p>
            Wir kennen und berücksichtigen die Anforderungen des EU AI Acts und beraten unsere Kunden aktiv dabei, ihre
            KI-Lösungen gesetzeskonform zu gestalten. Dies umfasst insbesondere die Risikobewertung von KI-Anwendungen
            und die Einhaltung der damit verbundenen Compliance-Pflichten.
          </p>

          <p>
            <strong>Integration in unsere Services:</strong>
          </p>
          <p>
            Diese Prinzipien leiten uns in unserer täglichen Arbeit und sind integraler Bestandteil unserer
            KI-Begleitung, unseres Prototypings und unseres Coachings.
          </p>

          <p>
            <strong>Kontinuierliche Weiterentwicklung & Dialog:</strong>
          </p>
          <p>
            KI ist ein dynamisches Feld. Daher überprüfen und passen wir unsere KI-Policy regelmäßig an. Wir laden Sie
            herzlich ein, uns Feedback zu geben und mit uns in den Dialog zu treten.
          </p>

          <div className="mt-8 p-6 bg-kivisai-clear-turquoise/10 border-l-4 border-kivisai-clear-turquoise rounded-lg">
            <p className="text-kivisai-deep-dark-blue font-semibold">
              Haben Sie Fragen zu unserer KI-Policy oder möchten Sie mit uns über verantwortungsvolle KI diskutieren?
            </p>
            <p className="mt-2">
              Kontaktieren Sie uns unter:{" "}
              <a
                href="mailto:info@kivisai.com"
                className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue font-semibold"
              >
                info@kivisai.com
              </a>
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
