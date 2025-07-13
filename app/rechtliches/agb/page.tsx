import { ContentSection } from "@/components/common/content-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Handshake, CreditCard, Shield, Users, Mail } from "lucide-react"

export default function AGBPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">KIVISAI GmbH - Stand: Juni 2024</p>
          </div>
        </div>
      </section>

      <ContentSection variant="default" background="white" padding="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Geltungsbereich */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 1 Geltungsbereich</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der KIVISAI GmbH (nachfolgend
                &quot;KIVISAI&quot;) und ihren Auftraggebern über die Erbringung von Beratungsleistungen im Bereich Künstliche
                Intelligenz, Transformation und strategische Unternehmensberatung.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Abweichende Bedingungen des Auftraggebers werden nur wirksam, wenn sie von KIVISAI ausdrücklich schriftlich
                anerkannt werden.
              </p>
            </CardContent>
          </Card>

          {/* Vertragsgegenstand */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 2 Vertragsgegenstand</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green">KIVISAI erbringt Beratungsleistungen in folgenden Bereichen:</p>
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20">
                <ul className="space-y-2 text-kivisai-moss-green">
                  <li>• KI-Potenzialanalyse und Strategieentwicklung</li>
                  <li>• KI-Prototyping und Implementierungsbegleitung</li>
                  <li>• Coaching und Training im Bereich Künstliche Intelligenz</li>
                  <li>• Transformationsbegleitung und Change Management</li>
                  <li>• INQA-Coaching &quot;Agil in die digitale Zukunft&quot;</li>
                </ul>
              </div>
              <p className="text-kivisai-moss-green leading-relaxed">
                Der konkrete Leistungsumfang wird in individuellen Angeboten oder Projektvereinbarungen definiert.
              </p>
            </CardContent>
          </Card>

          {/* Vertragsschluss */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 3 Vertragsschluss</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                Angebote von KIVISAI sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich
                bezeichnet. Der Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung
                zustande.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung, um wirksam zu werden.
              </p>
            </CardContent>
          </Card>

          {/* Leistungserbringung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 4 Leistungserbringung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                KIVISAI erbringt ihre Leistungen nach den anerkannten Regeln der Technik und den Standards professioneller
                Unternehmensberatung. Die Leistungen werden persönlich oder durch qualifizierte Mitarbeiter erbracht.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Der Auftraggeber stellt die erforderlichen Informationen, Unterlagen und Ressourcen rechtzeitig zur
                Verfügung und gewährleistet die Mitwirkung seiner Mitarbeiter.
              </p>
            </CardContent>
          </Card>

          {/* Vergütung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 5 Vergütung und Zahlungsbedingungen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                Die Vergütung richtet sich nach der jeweiligen Projektvereinbarung. Alle Preise verstehen sich zuzüglich der
                gesetzlichen Mehrwertsteuer.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig. Bei
                Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Reisekosten und Spesen werden nach Aufwand in Rechnung gestellt, sofern nicht anders vereinbart.
              </p>
            </CardContent>
          </Card>

          {/* Vertraulichkeit */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 6 Vertraulichkeit</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                KIVISAI verpflichtet sich, alle im Rahmen der Geschäftsbeziehung erlangten Informationen vertraulich zu
                behandeln und nicht an Dritte weiterzugeben. Diese Verpflichtung besteht auch nach Beendigung des
                Vertragsverhältnisses fort.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Der Auftraggeber erklärt sich damit einverstanden, dass KIVISAI das Projekt in anonymisierter Form als
                Referenz verwenden darf.
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
                <CardTitle className="text-kivisai-deep-dark-blue">§ 7 Haftung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                KIVISAI haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit
                ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt werden.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Die Haftung ist der Höhe nach auf die Vertragssumme begrenzt. Für mittelbare Schäden, entgangenen Gewinn und
                Folgeschäden wird nicht gehaftet.
              </p>
            </CardContent>
          </Card>

          {/* Kündigung */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 8 Kündigung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                Der Vertrag kann von beiden Parteien mit einer Frist von 4 Wochen zum Monatsende gekündigt werden, soweit
                keine abweichenden Regelungen getroffen wurden.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Bereits erbrachte Leistungen
                sind in jedem Fall zu vergüten.
              </p>
            </CardContent>
          </Card>

          {/* Schlussbestimmungen */}
          <Card className="border-kivisai-clear-turquoise/20 bg-gradient-to-br from-kivisai-light-cool-gray to-kivisai-pure-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-kivisai-deep-dark-blue">§ 9 Schlussbestimmungen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kivisai-moss-green leading-relaxed">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist der Sitz von KIVISAI.
              </p>
              <p className="text-kivisai-moss-green leading-relaxed">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
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
              <div className="bg-kivisai-pure-white p-4 rounded-lg border border-kivisai-clear-turquoise/20 space-y-2">
                <p className="text-kivisai-deep-dark-blue font-semibold">KIVISAI GmbH</p>
                <p className="text-kivisai-moss-green text-sm">Geschäftsführer: [Name]</p>
                <p className="text-kivisai-moss-green text-sm">Adresse: [Vollständige Adresse]</p>
                <p className="text-kivisai-moss-green text-sm">Telefon: [Telefonnummer]</p>
                <p className="text-kivisai-moss-green text-sm">E-Mail: info@kivisai.de</p>
                <p className="text-kivisai-moss-green text-sm">Handelsregister: [HRB Nummer]</p>
                <p className="text-kivisai-moss-green text-sm">USt-IdNr.: [Umsatzsteuer-ID]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  )
}
