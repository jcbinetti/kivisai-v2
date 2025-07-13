import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, User, Server, Mail, Calendar, Cookie, ExternalLink, FileText } from "lucide-react"

export default function DatenschutzPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Datenschutzerklärung</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
            </p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Einleitung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardContent className="p-6">
              <p className="text-kivisai-moss-green leading-relaxed">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie
                ausführlich darüber, welche Daten bei der Nutzung unserer Website erhoben und verarbeitet werden.
              </p>
            </CardContent>
          </Card>

          {/* Verantwortlicher */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">1. Verantwortlicher für die Datenverarbeitung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold">CONVIS Consult & Marketing GmbH</p>
                <p className="text-kivisai-moss-green">Auerbachstr. 10, 14193 Berlin</p>
                <p className="text-kivisai-moss-green">E-Mail: binetti@convis.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Datenschutzbeauftragter */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">2. Datenschutzbeauftragter</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-kivisai-moss-green leading-relaxed">
                Ein externer oder interner Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen
                hierfür nicht vorliegen. Bei Fragen zum Datenschutz können Sie sich direkt an die oben genannte
                Kontaktadresse wenden.
              </p>
            </CardContent>
          </Card>

          {/* Rechte */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">3. Ihre Rechte als betroffene Person</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-kivisai-moss-green leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung
                dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
                Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                zuständigen Aufsichtsbehörde zu.
              </p>
            </CardContent>
          </Card>

          {/* Datenverarbeitung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">4. Datenverarbeitung auf dieser Website</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Server-Logfiles */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">a) Server-Logfiles</h3>
                <p className="text-kivisai-moss-green">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die
                  Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <ul className="space-y-1 text-kivisai-moss-green">
                    <li>• Browsertyp und Browserversion</li>
                    <li>• verwendetes Betriebssystem</li>
                    <li>• Referrer URL</li>
                    <li>• Hostname des zugreifenden Rechners</li>
                    <li>• Uhrzeit der Serveranfrage</li>
                    <li>• IP-Adresse</li>
                  </ul>
                </div>
                <p className="text-kivisai-moss-green text-sm">
                  Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
                  Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                  f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und
                  der Optimierung seiner Website – hierfür müssen Server-Logfiles erfasst werden.
                </p>
              </div>

              {/* Kontaktformulare */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">b) Kontaktformulare</h3>
                <p className="text-kivisai-moss-green">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                  Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-kivisai-moss-green text-sm">
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage
                  Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu
                  reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p className="text-kivisai-moss-green text-sm">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                  Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach
                  abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                  Aufbewahrungsfristen – bleiben unberührt. Eine Löschung der Daten ist jederzeit nach E-Mail-Anfrage an
                  binetti@kivisai.com möglich.
                </p>
              </div>

              {/* Cal.com */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">c) Online-Terminbuchung mit Cal.com</h3>
                <p className="text-kivisai-moss-green">
                  Wir nutzen den Dienst Cal.com für die Online-Terminbuchung auf unserer Website. Anbieter ist Cal.com, Inc.,
                  eine US-amerikanische Gesellschaft.
                </p>
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20 space-y-3">
                  <div>
                    <strong className="text-kivisai-deep-dark-blue">Zweck der Verarbeitung:</strong>
                    <p className="text-kivisai-moss-green text-sm mt-1">
                      Cal.com ermöglicht es Ihnen, Termine mit uns online zu buchen und zu verwalten. Dies umfasst die
                      Koordination von verfügbaren Zeiten, die Speicherung von Termindetails und die Integration mit unseren
                      Kalendern.
                    </p>
                  </div>
                  <div>
                    <strong className="text-kivisai-deep-dark-blue">Betroffene Datenkategorien:</strong>
                    <ul className="text-kivisai-moss-green text-sm mt-1 space-y-1">
                      <li>• Stammdaten (z.B. Name, E-Mail-Adresse)</li>
                      <li>• Kommunikationsdaten (z.B. Terminwunsch, Betreff, Nachrichten)</li>
                      <li>• Nutzungsdaten (z.B. Zeitstempel der Buchung, IP-Adresse)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-kivisai-deep-dark-blue">Weitere Informationen:</strong>
                    <p className="text-kivisai-moss-green text-sm mt-1">
                      Details zu den Datenschutzbestimmungen von Cal.com finden Sie unter:{" "}
                      <a
                        href="https://cal.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue underline"
                      >
                        https://cal.com/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Brevo */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">d) E-Mail-Versand und Marketing-Automation mit Brevo</h3>
                <p className="text-kivisai-moss-green">
                  Wir nutzen die Dienste der Brevo GmbH (ehemals Sendinblue) für den Versand unserer Newsletter, für
                  E-Mail-Marketing-Kampagnen und zur Automatisierung unserer Marketing-Kommunikation. Anbieter ist die Brevo
                  GmbH, Köpenicker Str. 126, 10179 Berlin, Deutschland.
                </p>
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <p className="text-kivisai-moss-green text-sm">
                    <strong className="text-kivisai-deep-dark-blue">Zweck der Verarbeitung:</strong> Brevo ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Die
                    von Ihnen zum Zwecke des Newsletter-Empfangs eingegebenen Daten (z.B. E-Mail-Adresse) werden auf den Servern
                    von Brevo in der EU gespeichert.
                  </p>
                  <p className="text-kivisai-moss-green text-sm mt-2">
                    <strong className="text-kivisai-deep-dark-blue">Weitere Informationen:</strong> Details zu den Datenschutzbestimmungen von Brevo finden Sie unter:{" "}
                    <a
                      href="https://www.brevo.com/de/datenschutz-uebersicht/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue underline"
                    >
                      https://www.brevo.com/de/datenschutz-uebersicht/
                    </a>
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">e) Cookies</h3>
                <p className="text-kivisai-moss-green">
                  Unsere Website verwendet Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät
                  abgelegt werden. Einige der von uns verwendeten Cookies sind so genannte &quot;Session-Cookies&quot;. Sie werden nach
                  Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
                  diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                </p>
                <p className="text-kivisai-moss-green text-sm">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
                  nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das
                  automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
                  kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
              </div>

              {/* Externe Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">f) Externe Links</h3>
                <p className="text-kivisai-moss-green">
                  Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              {/* Änderungen */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">g) Änderungen der Datenschutzerklärung</h3>
                <p className="text-kivisai-moss-green">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets den aktuellen
                  rechtlichen Anforderungen anzupassen oder Änderungen unserer Leistungen in der Datenschutzerklärung
                  umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
                  Datenschutzerklärung.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardContent className="p-6">
              <p className="text-kivisai-moss-green font-semibold mb-2">Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025.</p>
              <p className="text-kivisai-moss-green text-sm">
                Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter{" "}
                <a href="/datenschutz" className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue underline">
                  www.kivisai.de/datenschutz
                </a>{" "}
                von Ihnen abgerufen und ausgedruckt werden.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  )
}
