import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, FileText, Shield, ExternalLink, Mail, Image } from "lucide-react"

export default function ImpressumPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Impressum</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Medienstaatsvertrag (MStV)
            </p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Unternehmen */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Unternehmen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">CONVIS Consult & Marketing GmbH</p>
                <p className="text-kivisai-moss-green text-sm">KIVISAI ist eine beantragte Marke der CONVIS Consult & Marketing GmbH.</p>
              </div>
              
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Vertreten durch die Geschäftsführer:</p>
                <p className="text-kivisai-moss-green">• Jean-Christophe Binetti</p>
                <p className="text-kivisai-moss-green">• Dipl.-Ing. Christian Müller</p>
              </div>
            </CardContent>
          </Card>

          {/* Rechtliche Details */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Rechtliche Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Rechtsform:</p>
                  <p className="text-kivisai-moss-green text-sm">Gesellschaft mit beschränkter Haftung (GmbH)</p>
                </div>
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Sitz der Gesellschaft:</p>
                  <p className="text-kivisai-moss-green text-sm">Berlin</p>
                </div>
              </div>
              
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Anschrift:</p>
                <p className="text-kivisai-moss-green">Auerbachstr. 10, 14193 Berlin</p>
              </div>
              
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Registereintrag:</p>
                <p className="text-kivisai-moss-green">Handelsregister: Amtsgericht Charlottenburg</p>
                <p className="text-kivisai-moss-green">Handelsregisternummer: HRB 102141 B</p>
              </div>
              
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">Umsatzsteuer-Identifikationsnummer (USt-ID):</p>
                <p className="text-kivisai-moss-green">DE812421871</p>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Kontakt</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <p className="text-kivisai-deep-dark-blue font-semibold mb-2">E-Mail:</p>
                <p className="text-kivisai-moss-green">info@kivisai.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Streitschlichtung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Streitschlichtung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p className="text-kivisai-moss-green text-sm">
                Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht
                verpflichtet und nicht bereit.
              </p>
            </CardContent>
          </Card>

          {/* Haftung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Haftung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">Haftung für Inhalte</h3>
                <p className="text-kivisai-moss-green text-sm">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                  Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
                  eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-kivisai-moss-green text-sm">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                  konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                  Inhalte umgehend entfernen.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">Haftung für Links</h3>
                <p className="text-kivisai-moss-green text-sm">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                  wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                  Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-kivisai-moss-green text-sm">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                  Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                  umgehend entfernen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Urheberrecht */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Urheberrecht</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-kivisai-moss-green text-sm">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
              
              {/* KIVISAI Marke und Logo */}
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-2">KIVISAI Marke und Logo</h3>
                <p className="text-kivisai-moss-green text-sm">
                  Die Marke "KIVISAI" ist als Wortmarke beim Deutschen Patent- und Markenamt (DPMA) registriert. 
                  Das KIVISAI-Logo und alle damit verbundenen visuellen Elemente sind urheberrechtlich geschützt und 
                  dürfen ohne ausdrückliche schriftliche Genehmigung der CONVIS Consult & Marketing GmbH weder 
                  reproduziert, verbreitet noch kommerziell genutzt werden.
                </p>
                <p className="text-kivisai-moss-green text-sm mt-2">
                  Alle Rechte an der Marke "KIVISAI" und dem zugehörigen Logo liegen bei der CONVIS Consult & Marketing GmbH.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bildrechte */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">Bildrechte</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {/* KI-generierte Illustrationen */}
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-2">KI-generierte Illustrationen</h3>
                  <p className="text-kivisai-moss-green text-sm">
                    Die auf dieser Website verwendeten Illustrationen wurden mit Hilfe von Künstlicher Intelligenz 
                    erstellt und von Jean-Christophe Binetti konzeptionell entwickelt und gestaltet. Diese Werke 
                    sind urheberrechtlich geschützt und dürfen ohne Genehmigung nicht reproduziert oder kommerziell 
                    genutzt werden.
                  </p>
                </div>

                {/* Logos und Markenzeichen Dritter */}
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-2">Logos und Markenzeichen Dritter</h3>
                  <p className="text-kivisai-moss-green text-sm">
                    Auf dieser Website verwendete Logos und Markenzeichen von Drittanbietern werden mit ausdrücklicher 
                    Genehmigung der jeweiligen Rechteinhaber verwendet. Alle Rechte an diesen Markenzeichen verbleiben 
                    bei den ursprünglichen Eigentümern. Die Verwendung erfolgt ausschließlich zu Informationszwecken 
                    und stellt keine kommerzielle Nutzung dar.
                  </p>
                </div>

                {/* Allgemeine Bildnutzung */}
                <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                  <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue mb-2">Allgemeine Bildnutzung</h3>
                  <p className="text-kivisai-moss-green text-sm">
                    Die Vervielfältigung, Verbreitung oder kommerzielle Nutzung aller auf dieser Website verwendeten 
                    Bilder, Illustrationen und visuellen Elemente ist ohne ausdrückliche schriftliche Genehmigung 
                    der CONVIS Consult & Marketing GmbH untersagt. Bei Fragen zur Bildnutzung kontaktieren Sie uns 
                    bitte unter info@kivisai.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  )
}
