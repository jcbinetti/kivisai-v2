import Image from "next/image";
import { Quote, Users, Briefcase, Star, Target, BookOpen, Handshake, Leaf } from "lucide-react";
import { CtaSection } from "@/components/common/cta-section";

export const metadata = {
  title: "JC BINETTI | KIVISAI Team",
  description: "Profil von JC BINETTI, KI-Consultant, Agile Coach, Sustainable Strategies.",
};

export default function JCBinettiProfilePage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white text-kivisai-moss-green">
      {/* Hero-Banner */}
      <section className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/KIVI-PA-WS-Team.png" // Bannerbild: The Future is Now
          alt="The Future is Now. Start to Act. BINETTI."
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-kivisai-deep-dark-blue/60 flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
          <div className="text-left md:mt-0 mt-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">The Future is Now.<br /><span className="font-light text-2xl md:text-3xl">Start to Act.</span></h1>
            <div className="mt-2 text-white text-xl font-semibold tracking-wider">BINETTI</div>
          </div>
          <div className="flex flex-col gap-6 items-end md:items-end mt-8 md:mt-0">
            <div className="flex items-center gap-3 flex-row-reverse">
              <span className="text-white text-lg font-medium">KI-Consultant</span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/90 text-white font-bold text-lg">
                AI
              </span>
              {/* Badges unter KI-Consultant */}
              <div className="flex gap-2 mt-2">
                <Image
                  src="/images/Badge_TÜV_JC.png"
                  alt="TÜV-zertifiziert"
                  width={40}
                  height={40}
                  title="TÜV-zertifiziert"
                  className="rounded shadow border border-gray-200 bg-white p-1"
                />
                <Image
                  src="/images/Badges_Autorisierter_INQA-Coach_2025-2026.png"
                  alt="INQA-Coach"
                  width={40}
                  height={40}
                  title="INQA-Coach"
                  className="rounded shadow border border-gray-200 bg-white p-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-row-reverse">
              <span className="text-white text-lg font-medium">Agile Coach</span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-400/90 text-white font-bold text-lg">
                AC
              </span>
            </div>
            <div className="flex items-center gap-3 flex-row-reverse">
              <span className="text-white text-lg font-medium">Sustainable Strategies</span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600/90 text-white font-bold text-lg">
                SS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Profilfoto & Claim */}
      <section className="container mx-auto px-4 flex flex-col items-center -mt-24 md:-mt-32 mb-8">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl bg-white">
          <Image
            src="/images/Profil_BINETTI.jpeg"
            alt="JC BINETTI Profilfoto"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-kivisai-deep-dark-blue">Jean-Christophe Binetti</h2>
        <div className="mt-2 text-lg text-kivisai-moss-green font-medium">Gemeinsam Projekte der Zukunft gestalten – Mit Sinn und KI.</div>
      </section>

      {/* Über mich */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Wer ich bin</h3>
        <p className="mb-4">Jean-Christophe Binetti – KI-Consultant, Unternehmer und erfahrener Projektmanager mit 30 Jahren internationaler Erfahrung. Mein Fokus liegt darauf, Unternehmen und Organisationen dabei zu unterstützen, Künstliche Intelligenz strategisch, pragmatisch und menschenzentriert einzusetzen – für echte Effizienzgewinne, nachhaltige Innovationen und starke Teams.</p>
        <p className="mb-4">Mit tiefem technischen Verständnis, umfassender Projekterfahrung und einem flexiblen Expertennetzwerk bringe ich KI-Lösungen nicht nur in Unternehmen – ich bringe sie in erfolgreiche Umsetzung.</p>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-kivisai-clear-turquoise/10 rounded-xl p-6 flex flex-col gap-4 shadow">
            <div className="flex items-center gap-2 text-kivisai-clear-turquoise font-bold"><Quote className="w-6 h-6" /> Vision</div>
            <blockquote className="italic text-lg">„Ich glaube an eine Zukunft, in der Künstliche Intelligenz dazu beiträgt, menschliche Kreativität zu entfalten, Gemeinschaften zu stärken und unsere Welt regenerativ und gerecht zu gestalten.“<br /><br />KI soll nicht der Ersatz menschlicher Intelligenz sein, sondern ihr bester Verbündeter: im Denken, im Handeln, im Gestalten nachhaltiger Zukünfte.“</blockquote>
          </div>
          <div className="bg-kivisai-moss-green/10 rounded-xl p-6 flex flex-col gap-4 shadow">
            <div className="flex items-center gap-2 text-kivisai-moss-green font-bold"><Target className="w-6 h-6" /> Mission</div>
            <blockquote className="italic text-lg">„Ich befähige Organisationen, KI als Instrument für pragmatische Innovation, ethisches Wachstum und kollektive Intelligenz zu nutzen – vom ersten Pilotprojekt bis zur skalierbaren Transformation.“<br /><br />Meine Mission ist es, Technologie nicht einfach zu integrieren, sondern sinnvoll einzusetzen: um Geschäftsmodelle resilienter zu machen, Projekte menschenzentrierter und effektiver zu steuern und Innovationen zu schaffen, die der Gesellschaft und dem Planeten dienen.“</blockquote>
          </div>
        </div>
      </section>

      {/* Meine Reise mit KI */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Meine Reise mit KI</h3>
        <p className="mb-4">Meine erste intensive Begegnung mit Künstlicher Intelligenz begann Anfang der 2000er Jahre im Rahmen des EU-Projekts TRUST. Gemeinsam mit Microsoft-nahen Partnern aus Frankreich, Italien, Portugal und Polen entwickelten wir eine multilinguale semantische Suchmaschine, die nicht einfach nach Stichwörtern suchte, sondern den Bedeutungszusammenhang von Fragen erkannte.<br />Damals schon war das Ziel, mithilfe von KI relevante Antworten zu liefern – nicht nur Ergebnisse. TRUST war ein Vorreiter in der sprachorientierten KI, lange bevor "Chatbots" ein Begriff waren.</p>
        <p className="mb-4">In den Jahren danach habe ich diese Vision weitergetragen: als Berater für Geschäftsmodellinnovationen, als Projektsteuerer technischer Plattformen und als agiler Coach.</p>
        <p className="mb-4">Heute setze ich KI in deutlich komplexeren Zusammenhängen ein – etwa im Projekt AI-Healthy Ship, bei dem prädiktive KI eingesetzt wird, um Gesundheitsdaten von Schiffsbesatzungen zu analysieren und Handlungsempfehlungen zu generieren. Hier geht es nicht nur um Effizienz, sondern um konkrete Verbesserung der Lebensbedingungen und Arbeitsqualität – datenbasiert, ethisch und mit direkter Wirkung.</p>
        <p className="mb-4">Diese Entwicklung begleitet mich auch als Mitglied des Aufsichtsrats von "Wir bauen Zukunft e.G." – einer Genossenschaft, die zukunftsfähige Lebens- und Arbeitsformen mit regenerativen Technologien gestaltet. KI sehe ich hier nicht als Selbstzweck, sondern als Werkzeug für nachhaltige Transformation, im Einklang mit Menschen, Umwelt und Organisation.</p>
      </section>

      {/* Beratungsansatz */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Mein Beratungsansatz</h3>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
          <li>Projekte als Motor: Jedes KI-Projekt wird als Pilot gestaltet, der operativen Nutzen beweist und die Grundlage für spätere Skalierungen legt.</li>
          <li>Menschenzentrierte KI: Technologie ergänzt den Menschen – sie ersetzt ihn nicht.</li>
          <li>Agil und skalierbar: Ich arbeite in agilen Formaten (Scrum, Kanban, hybride Modelle) und steuere die Umsetzung operativ bis zum Erfolg.</li>
          <li>Technischer Projektsteuerer: Als Product Owner und Projektsteuerer verstehe ich die technische Tiefe und die geschäftlichen Anforderungen gleichermaßen.</li>
          <li>Nachhaltig und compliant: Ich integriere KI stets DSGVO-konform, ethisch fundiert und auf betriebswirtschaftliche Wirkung ausgerichtet.</li>
        </ul>
      </section>

      {/* Leistungen */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Meine Leistungen</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Entwicklung von KI-Strategien und Roadmaps</li>
          <li>Integration von KI in agiles Projektmanagement</li>
          <li>Optimierung und Innovation von Geschäftsmodellen mit KI</li>
          <li>Steuerung und Skalierung von Pilotprojekten</li>
          <li>Coaching von Teams und Führungskräften</li>
          <li>Operative Projektsteuerung und Product Ownership für technische KI-Implementierungen</li>
        </ul>
      </section>

      {/* Kompetenzen */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Funktionen & Kompetenzen</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Strategischer Projektmanager für Innovations- und Förderprojekte</li>
          <li>Entwickler eigener Softwarelösungen (CWTB CONVIS Webtool BOX)</li>
          <li>KI-Spezialist und Product Owner für Chatbots, RAG-Plattformen und Automatisierungen</li>
          <li>Berater für Geschäftsmodelloptimierung und agile Transformation</li>
          <li>Trainer für kollektive Intelligenz und New Work Methoden</li>
          <li>Compliance- und Datenschutzberater (ISO 9001/14001, DSGVO)</li>
        </ul>
      </section>

      {/* Kunden & Einsatzszenarien */}
      <section className="container mx-auto px-4 max-w-5xl pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-kivisai-deep-dark-blue mb-2">Typische Kunden</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mittelständische Unternehmen (50–1000 MA)</li>
              <li>Start-ups mit Fokus auf skalierbare Innovation</li>
              <li>Organisationen im öffentlichen Bereich (EU-, EFRE-, ESF-Programme und Projekte)</li>
              <li>Bau-, Umwelt- und Technologieunternehmen</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-kivisai-deep-dark-blue mb-2">Typische Einsatzszenarien</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pilotprojekte zur Erprobung von KI-Anwendungen</li>
              <li>Agile Projektsteuerung und Transparenz mit KI</li>
              <li>Skalierung bewährter KI-Lösungen</li>
              <li>Daten- und KI-gestützte Geschäftsmodellinnovationen</li>
              <li>Entwicklung nachhaltiger Transformationsprozesse mit KI-Unterstützung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projektbeispiele */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">Projektbeispiele (Auswahl)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>AI-Healthy Ship: Projektsteuerung für KI-gestütztes Crew-Health-System</li>
          <li>Chatbot WBZ: KI-basierte Kommunikationsoptimierung für Genossenschaft</li>
          <li>Reallabor Zukunft: Innovation zu dem nachhaltigen Wirken</li>
          <li>Potenzialanalyse und Businessskalierung mit KI für marktführende mittelständische Firma</li>
        </ul>
      </section>

      {/* Warum ich? */}
      <section className="container mx-auto px-4 max-w-3xl pb-12">
        <div className="bg-kivisai-deep-dark-blue/90 rounded-xl p-8 text-white shadow-lg text-center text-xl font-semibold">
          "Ich bringe Unternehmen erfolgreich in die KI-Welt – nicht nur mit Strategie, sondern mit echter Umsetzungskraft. 30 Jahre Praxiserfahrung, technologische Tiefe und menschenzentrierte Beratung bilden die Basis für nachhaltigen KI-Erfolg."
        </div>
      </section>

      {/* Werte & Leitsprüche */}
      <section className="container mx-auto px-4 max-w-5xl pb-24">
        <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6">Meine Werte & Leitsprüche</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-kivisai-moss-green">
            <Users className="w-8 h-8 text-kivisai-moss-green mb-2" />
            <div className="font-bold text-lg mb-1">Menschlichkeit</div>
            <div className="italic text-sm">"Technologie entfaltet ihren wahren Wert erst, wenn sie den Menschen dient."</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-kivisai-clear-turquoise">
            <Leaf className="w-8 h-8 text-kivisai-clear-turquoise mb-2" />
            <div className="font-bold text-lg mb-1">Nachhaltigkeit</div>
            <div className="italic text-sm">"Wirklicher Fortschritt misst sich daran, was wir der Zukunft hinterlassen."</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-yellow-400">
            <Star className="w-8 h-8 text-yellow-400 mb-2" />
            <div className="font-bold text-lg mb-1">Pragmatismus</div>
            <div className="italic text-sm">"Große Ideen brauchen konkrete Wege. Ich denke mutig und handle bodenständig."</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-orange-400">
            <Briefcase className="w-8 h-8 text-orange-400 mb-2" />
            <div className="font-bold text-lg mb-1">Verantwortung</div>
            <div className="italic text-sm">"Freiheit in der Innovation braucht Verantwortung in der Umsetzung."</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-kivisai-deep-dark-blue">
            <BookOpen className="w-8 h-8 text-kivisai-deep-dark-blue mb-2" />
            <div className="font-bold text-lg mb-1">Lernfreude</div>
            <div className="italic text-sm">"Ich bin ein lebenslanger Praktikant – offen, neugierig, immer im Werden."</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-kivisai-moss-green">
            <Handshake className="w-8 h-8 text-kivisai-moss-green mb-2" />
            <div className="font-bold text-lg mb-1">Kooperation & Gemeinschaft</div>
            <div className="italic text-sm">"Wahre Stärke entsteht, wenn sich Intelligenz und Vertrauen verbinden."</div>
          </div>
        </div>
      </section>

      {/* KIVISAI CTA: Termin-Gespräch */}
      <div className="mt-12">
        <CtaSection
          variant="centered"
          background="gradient"
          size="md"
          title="Jetzt persönliches Kennenlern-Gespräch sichern!"
          description="Lassen Sie uns gemeinsam Ihr KI-Potenzial entdecken. Vereinbaren Sie ein kostenloses, unverbindliches Erstgespräch mit JC BINETTI."
          primaryCta={{
            text: "Kostenloses Erstgespräch vereinbaren",
            href: "/termin",
            icon: "calendar"
          }}
        />
      </div>
    </div>
  );
} 