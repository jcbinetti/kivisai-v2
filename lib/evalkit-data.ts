// EVALKIT Fragebogen-Daten und Konfiguration

export interface Question {
  id: string
  text: string
  category: "THINK" | "ENABLE" | "SHARE" | "GROW" | "REFLECT"
}

export interface Role {
  id: string
  name: string
  description: string
  thesis: string
  questions: Question[]
}

export const EVALKIT_ROLES: Role[] = [
  {
    id: "mensch",
    name: "Mensch (Individuum)",
    description: "Individuelle Selbsteinschätzung",
    thesis:
      "Der Erfolg des Einzelnen hängt heute von zwei neuen Kernkompetenzen ab: der Kunst der Kommunikation (Prompting) und der strategischen Tool-Kenntnis. Wer diese Kompetenzen meistert, spart durchschnittlich 10 Stunden pro Monat ein.",
    questions: [
      // THINK
      { id: "m_think_1", text: "Ich verstehe die Grundlagen von KI.", category: "THINK" },
      {
        id: "m_think_2",
        text: "Ich erkenne den Unterschied zwischen generativer und analytischer KI.",
        category: "THINK",
      },
      {
        id: "m_think_3",
        text: "Ich kann einschätzen, wie KI meine berufliche Rolle verändern könnte.",
        category: "THINK",
      },
      { id: "m_think_4", text: "Ich verfolge aktiv gesellschaftliche Diskussionen über KI.", category: "THINK" },
      { id: "m_think_5", text: "Ich weiß, welche Aufgaben in meinem Job automatisierbar sind.", category: "THINK" },
      { id: "m_think_6", text: "Ich kann ethische Risiken von KI benennen.", category: "THINK" },
      { id: "m_think_7", text: "Ich reflektiere regelmäßig über digitale Tools.", category: "THINK" },
      { id: "m_think_8", text: "Ich habe eine eigene Meinung zum Einsatz von KI im Alltag.", category: "THINK" },
      { id: "m_think_9", text: "Ich kenne die wichtigsten Begriffe rund um KI.", category: "THINK" },
      { id: "m_think_10", text: "Ich sehe KI als Chance, nicht nur als Risiko.", category: "THINK" },

      // ENABLE
      {
        id: "m_enable_1",
        text: "Ich habe erste Tools wie ChatGPT, DALL·E oder Notion AI ausprobiert.",
        category: "ENABLE",
      },
      {
        id: "m_enable_2",
        text: "Ich weiß, wie ich mich bei neuen KI-Tools schnell einarbeiten kann.",
        category: "ENABLE",
      },
      { id: "m_enable_3", text: "Ich nutze mindestens ein KI-Tool regelmäßig.", category: "ENABLE" },
      { id: "m_enable_4", text: "Ich kenne meine digitalen Rechte (z. B. DSGVO, Datenschutz).", category: "ENABLE" },
      { id: "m_enable_5", text: "Ich kann selbst einfache Prompts formulieren.", category: "ENABLE" },
      { id: "m_enable_6", text: "Ich verwende KI zur Recherche oder Ideenfindung.", category: "ENABLE" },
      { id: "m_enable_7", text: "Ich bin offen für neue Arbeitsweisen durch KI.", category: "ENABLE" },
      { id: "m_enable_8", text: "Ich habe meine digitalen Tools hinterfragt oder optimiert.", category: "ENABLE" },
      {
        id: "m_enable_9",
        text: "Ich weiß, wie man KI-Tools kombiniert (z. B. Copy + Visualisierung).",
        category: "ENABLE",
      },
      { id: "m_enable_10", text: "Ich habe persönliche Ziele für meinen Umgang mit KI.", category: "ENABLE" },

      // SHARE
      { id: "m_share_1", text: "Ich spreche mit Kolleg:innen oder Freund:innen über KI.", category: "SHARE" },
      {
        id: "m_share_2",
        text: "Ich teile Erfahrungen mit KI in sozialen oder beruflichen Kontexten.",
        category: "SHARE",
      },
      { id: "m_share_3", text: "Ich habe anderen beim Einstieg in KI geholfen.", category: "SHARE" },
      { id: "m_share_4", text: "Ich interessiere mich für Best Practices aus anderen Branchen.", category: "SHARE" },
      { id: "m_share_5", text: "Ich tausche mich aktiv in Gruppen oder Foren über KI aus.", category: "SHARE" },
      { id: "m_share_6", text: "Ich formuliere meine Erkenntnisse für andere verständlich.", category: "SHARE" },
      { id: "m_share_7", text: "Ich lerne gerne im Austausch mit anderen.", category: "SHARE" },
      { id: "m_share_8", text: "Ich bin Teil einer Lern- oder Reflexionsgruppe.", category: "SHARE" },
      { id: "m_share_9", text: "Ich sehe Kommunikation über KI als Teil meiner Verantwortung.", category: "SHARE" },
      { id: "m_share_10", text: "Ich ermutige andere, eigene Erfahrungen zu machen.", category: "SHARE" },

      // GROW
      { id: "m_grow_1", text: "Ich habe ein konkretes Lernziel zum Thema KI.", category: "GROW" },
      { id: "m_grow_2", text: "Ich lese Artikel, Bücher oder Beiträge über KI.", category: "GROW" },
      { id: "m_grow_3", text: "Ich besuche Webinare oder Veranstaltungen mit KI-Bezug.", category: "GROW" },
      { id: "m_grow_4", text: "Ich reflektiere mein Verhalten beim Einsatz von KI.", category: "GROW" },
      { id: "m_grow_5", text: "Ich entwickle Routinen, um Neues auszuprobieren.", category: "GROW" },
      { id: "m_grow_6", text: "Ich dokumentiere meine Fortschritte.", category: "GROW" },
      { id: "m_grow_7", text: "Ich messe meine Entwicklung nicht nur an Effizienz.", category: "GROW" },
      { id: "m_grow_8", text: "Ich finde Freude daran, mich mit KI weiterzuentwickeln.", category: "GROW" },
      { id: "m_grow_9", text: "Ich baue systematisch Wissen auf.", category: "GROW" },
      { id: "m_grow_10", text: "Ich sehe Veränderung als Bestandteil meines Berufs.", category: "GROW" },

      // REFLECT
      {
        id: "m_reflect_1",
        text: "Ich überlege, wie ich KI sinnvoll und verantwortungsvoll einsetze.",
        category: "REFLECT",
      },
      { id: "m_reflect_2", text: "Ich hinterfrage meine eigene Haltung zur Digitalisierung.", category: "REFLECT" },
      {
        id: "m_reflect_3",
        text: "Ich setze Grenzen beim Einsatz von KI (z. B. in persönlichen Kontexten).",
        category: "REFLECT",
      },
      {
        id: "m_reflect_4",
        text: "Ich kann beschreiben, wie KI meine Autonomie stärkt oder schwächt.",
        category: "REFLECT",
      },
      { id: "m_reflect_5", text: "Ich kenne meine ethischen Leitlinien.", category: "REFLECT" },
      { id: "m_reflect_6", text: "Ich wünsche mir Mitgestaltung bei der Einführung von KI.", category: "REFLECT" },
      { id: "m_reflect_7", text: "Ich bin bereit, Haltung zu beziehen.", category: "REFLECT" },
      { id: "m_reflect_8", text: "Ich sehe mich nicht als Opfer technologischer Entwicklung.", category: "REFLECT" },
      { id: "m_reflect_9", text: "Ich vertraue meiner Fähigkeit, mit Veränderungen umzugehen.", category: "REFLECT" },
      { id: "m_reflect_10", text: "Ich bin neugierig auf das, was KI mit mir und anderen macht.", category: "REFLECT" },
    ],
  },
  {
    id: "team",
    name: "Projekt-Team",
    description: "Teamebene",
    thesis:
      "Der Erfolg eines Teams hängt davon ab, die richtigen Werkzeuge für spezifische Anforderungen zu finden und interne Hürden zu überwinden. Mit KI-Hilfe konnten sich Teams 4x schneller über verpasste Meetings informieren.",
    questions: [
      // THINK
      { id: "t_think_1", text: "Unser Team versteht die Grundkonzepte von KI.", category: "THINK" },
      {
        id: "t_think_2",
        text: "Wir reflektieren gemeinsam über die Bedeutung von KI für unser Projekt.",
        category: "THINK",
      },
      {
        id: "t_think_3",
        text: "Wir wissen, welche Prozesse im Team potenziell automatisierbar sind.",
        category: "THINK",
      },
      { id: "t_think_4", text: "Wir sprechen über ethische Fragen der KI-Nutzung.", category: "THINK" },
      { id: "t_think_5", text: "Wir verfolgen aktuelle Entwicklungen im KI-Bereich.", category: "THINK" },
      { id: "t_think_6", text: "Wir analysieren systematisch Potenziale und Risiken von KI.", category: "THINK" },
      { id: "t_think_7", text: "Wir nutzen gemeinsame Begriffe und Sprache im Umgang mit KI.", category: "THINK" },
      { id: "t_think_8", text: "Wir orientieren uns an Beispielen anderer Organisationen.", category: "THINK" },
      {
        id: "t_think_9",
        text: "Wir hinterfragen unsere bestehenden Denkweisen durch die Perspektive von KI.",
        category: "THINK",
      },
      { id: "t_think_10", text: "KI ist Teil unserer Projektvision.", category: "THINK" },

      // ENABLE
      { id: "t_enable_1", text: "Unser Team hat erste KI-Tools ausprobiert.", category: "ENABLE" },
      { id: "t_enable_2", text: "Wir dokumentieren unsere Toolnutzung.", category: "ENABLE" },
      { id: "t_enable_3", text: "Es gibt klare Verantwortlichkeiten für KI-Experimentierfelder.", category: "ENABLE" },
      {
        id: "t_enable_4",
        text: "Wir haben uns über Schulungen oder Coachings zu KI weitergebildet.",
        category: "ENABLE",
      },
      { id: "t_enable_5", text: "Unsere IT erlaubt den Einsatz innovativer Tools.", category: "ENABLE" },
      { id: "t_enable_6", text: "Wir integrieren KI-Elemente in bestehende Workflows.", category: "ENABLE" },
      { id: "t_enable_7", text: "Wir bewerten regelmäßig den Nutzen neuer Technologien.", category: "ENABLE" },
      { id: "t_enable_8", text: "Wir haben Standards für den sicheren Einsatz von KI etabliert.", category: "ENABLE" },
      { id: "t_enable_9", text: "Wir wissen, welche KI-Tools in unserer Branche relevant sind.", category: "ENABLE" },
      {
        id: "t_enable_10",
        text: "Wir setzen auf iterative Lernschleifen bei der Tool-Einführung.",
        category: "ENABLE",
      },

      // SHARE
      { id: "t_share_1", text: "Wir pflegen offene Dialoge über KI im Team.", category: "SHARE" },
      { id: "t_share_2", text: "Erfahrungen mit Tools werden systematisch ausgetauscht.", category: "SHARE" },
      { id: "t_share_3", text: "Es gibt interne Präsentationen zu Lernerfahrungen.", category: "SHARE" },
      { id: "t_share_4", text: "Feedback zur Toolnutzung ist erwünscht.", category: "SHARE" },
      { id: "t_share_5", text: "Erfolge und Fehler werden geteilt.", category: "SHARE" },
      { id: "t_share_6", text: "Wir nutzen kollaborative Plattformen für Wissenstransfer.", category: "SHARE" },
      {
        id: "t_share_7",
        text: "Kommunikationsformate (z. B. Retro, Stand-up) berücksichtigen auch KI-Themen.",
        category: "SHARE",
      },
      { id: "t_share_8", text: "Neue Mitarbeitende werden in bestehendes Wissen eingeführt.", category: "SHARE" },
      { id: "t_share_9", text: "Externe Impulse (z. B. Webinare) fließen ins Team zurück.", category: "SHARE" },
      { id: "t_share_10", text: "Wir sehen Teilen als Schlüssel zur KI-Transformation.", category: "SHARE" },

      // GROW
      { id: "t_grow_1", text: "Unser Team hat ein gemeinsames Lernziel im Bereich KI.", category: "GROW" },
      { id: "t_grow_2", text: "Wir entwickeln gemeinsame Visionen für zukünftige Arbeitsweisen.", category: "GROW" },
      { id: "t_grow_3", text: "Wir reflektieren regelmäßig unsere KI-Nutzung.", category: "GROW" },
      { id: "t_grow_4", text: "Innovationszeit ist eingeplant.", category: "GROW" },
      { id: "t_grow_5", text: "Wir messen Fortschritte (z. B. Zeitgewinn, Qualität).", category: "GROW" },
      { id: "t_grow_6", text: "Lernen wird als gemeinschaftlicher Prozess verstanden.", category: "GROW" },
      { id: "t_grow_7", text: "Wir planen Ressourcen für Weiterbildung ein.", category: "GROW" },
      { id: "t_grow_8", text: "Wir bleiben in Kontakt mit neuen Forschungsergebnissen.", category: "GROW" },
      { id: "t_grow_9", text: "Das Team bringt sich aktiv in organisationsweite KI-Themen ein.", category: "GROW" },
      { id: "t_grow_10", text: "Wir entwickeln unsere Haltung gegenüber KI weiter.", category: "GROW" },

      // REFLECT
      { id: "t_reflect_1", text: "Wir diskutieren regelmäßig ethische Aspekte des KI-Einsatzes.", category: "REFLECT" },
      {
        id: "t_reflect_2",
        text: "Wir fragen uns, welche Auswirkungen unsere Entscheidungen auf andere haben.",
        category: "REFLECT",
      },
      { id: "t_reflect_3", text: 'Wir definieren, was „gute" KI-Nutzung für uns bedeutet.', category: "REFLECT" },
      { id: "t_reflect_4", text: "Wir hinterfragen Technologietrends kritisch.", category: "REFLECT" },
      { id: "t_reflect_5", text: "Wir achten auf Vielfalt und Inklusion im Zugang zu KI.", category: "REFLECT" },
      { id: "t_reflect_6", text: "Wir sehen KI nicht als Allheilmittel.", category: "REFLECT" },
      { id: "t_reflect_7", text: "Wir gestalten Regeln für den Umgang mit KI partizipativ.", category: "REFLECT" },
      { id: "t_reflect_8", text: "Wir bewahren Menschlichkeit und Kontextbewusstsein.", category: "REFLECT" },
      { id: "t_reflect_9", text: "Unser Team versteht sich als lernendes System.", category: "REFLECT" },
      { id: "t_reflect_10", text: "Wir glauben an die Gestaltungskraft kollektiver Intelligenz.", category: "REFLECT" },
    ],
  },
  {
    id: "organisation",
    name: "Organisation",
    description: "Systemische Selbsteinschätzung",
    thesis:
      "Der Erfolg einer Organisation hängt davon ab, den internen Effizienzdruck und den externen Marktdruck durch systemischen KI-Einsatz zu meistern. 22 % der Unternehmen geben an, dass KI bereits mehr als 5 % zum Gewinn beiträgt.",
    questions: [
      // THINK
      { id: "o_think_1", text: "Unsere Organisation verfolgt eine übergreifende KI-Strategie.", category: "THINK" },
      { id: "o_think_2", text: "Die Geschäftsleitung sieht KI als strategische Priorität.", category: "THINK" },
      { id: "o_think_3", text: "Wir haben eine klare Vision für den Einsatz von KI.", category: "THINK" },
      { id: "o_think_4", text: "Unsere Mitarbeitenden kennen grundlegende Konzepte der KI.", category: "THINK" },
      { id: "o_think_5", text: "Wir beobachten und bewerten systematisch neue KI-Trends.", category: "THINK" },
      {
        id: "o_think_6",
        text: "Wir reflektieren ethische, rechtliche und gesellschaftliche Aspekte von KI.",
        category: "THINK",
      },
      { id: "o_think_7", text: "Unsere Organisation hat ihre Datenlage analysiert.", category: "THINK" },
      { id: "o_think_8", text: "Wir erkennen in welchen Bereichen KI konkret helfen kann.", category: "THINK" },
      { id: "o_think_9", text: "KI ist in unsere Innovationsstrategie integriert.", category: "THINK" },
      { id: "o_think_10", text: "Wir diskutieren regelmäßig strategische Auswirkungen von KI.", category: "THINK" },

      // ENABLE
      {
        id: "o_enable_1",
        text: "Es stehen Ressourcen (Zeit, Geld, Personal) für KI-Projekte zur Verfügung.",
        category: "ENABLE",
      },
      {
        id: "o_enable_2",
        text: "Wir haben interne oder externe Kompetenzen für die Entwicklung von KI-Anwendungen.",
        category: "ENABLE",
      },
      {
        id: "o_enable_3",
        text: "Unsere IT-Infrastruktur ist grundsätzlich für KI-Nutzung vorbereitet.",
        category: "ENABLE",
      },
      {
        id: "o_enable_4",
        text: "Wir verfügen über einen strukturierten Zugang zu internen Daten.",
        category: "ENABLE",
      },
      { id: "o_enable_5", text: "Es existieren klare Prozesse für KI-Initiativen.", category: "ENABLE" },
      { id: "o_enable_6", text: "Erste Prototypen oder Tools wurden bereits implementiert.", category: "ENABLE" },
      { id: "o_enable_7", text: "Unsere Prozesse sind dokumentiert und für KI nutzbar.", category: "ENABLE" },
      {
        id: "o_enable_8",
        text: "Schulungen und Weiterbildungen zu KI sind vorhanden oder geplant.",
        category: "ENABLE",
      },
      {
        id: "o_enable_9",
        text: "Wir nutzen Förderprogramme oder Partnerschaften zur KI-Entwicklung.",
        category: "ENABLE",
      },
      {
        id: "o_enable_10",
        text: "Wir berücksichtigen Sicherheit, Datenschutz und Fairness bei der Einführung.",
        category: "ENABLE",
      },

      // SHARE
      {
        id: "o_share_1",
        text: "Es gibt regelmäßige Kommunikation zu KI innerhalb der Organisation.",
        category: "SHARE",
      },
      { id: "o_share_2", text: "Erfolge und Misserfolge werden transparent gemacht.", category: "SHARE" },
      { id: "o_share_3", text: "Wissen über KI wird zwischen Abteilungen geteilt.", category: "SHARE" },
      { id: "o_share_4", text: "Best Practices werden gesammelt und zugänglich gemacht.", category: "SHARE" },
      { id: "o_share_5", text: "Externe Erfahrungen (z. B. aus Netzwerken) fließen ein.", category: "SHARE" },
      { id: "o_share_6", text: "Es gibt interne Communities oder Expertengruppen zum Thema KI.", category: "SHARE" },
      {
        id: "o_share_7",
        text: "Die Organisation lädt zur Diskussion über Chancen und Risiken ein.",
        category: "SHARE",
      },
      { id: "o_share_8", text: "Neue Mitarbeitende werden frühzeitig einbezogen.", category: "SHARE" },
      { id: "o_share_9", text: "KI ist Bestandteil der internen Change-Kommunikation.", category: "SHARE" },
      { id: "o_share_10", text: "Es gibt klare Verantwortlichkeiten für Wissensmanagement.", category: "SHARE" },

      // GROW
      { id: "o_grow_1", text: "Wir evaluieren regelmäßig unsere Fortschritte im Bereich KI.", category: "GROW" },
      { id: "o_grow_2", text: "KI ist Bestandteil von Innovationszielen und Kennzahlen.", category: "GROW" },
      { id: "o_grow_3", text: "Es gibt Feedbackprozesse zur kontinuierlichen Verbesserung.", category: "GROW" },
      { id: "o_grow_4", text: "Wir ermutigen Mitarbeitende, Neues auszuprobieren.", category: "GROW" },
      { id: "o_grow_5", text: "Lernziele werden auf Team- und Organisationsebene verfolgt.", category: "GROW" },
      { id: "o_grow_6", text: "Die Organisation ist offen für Experimente mit ungewissem Ausgang.", category: "GROW" },
      { id: "o_grow_7", text: "KI ist Thema in Strategieprozessen und Führungsentwicklung.", category: "GROW" },
      { id: "o_grow_8", text: "Wir analysieren aktiv, wie KI unsere Marktposition verändert.", category: "GROW" },
      {
        id: "o_grow_9",
        text: "Wir nutzen KI gezielt zur Entwicklung neuer Angebote oder Geschäftsmodelle.",
        category: "GROW",
      },
      { id: "o_grow_10", text: "Transformation wird als lernorientierter Prozess verstanden.", category: "GROW" },

      // REFLECT
      {
        id: "o_reflect_1",
        text: "Wir berücksichtigen soziale, ökologische und ethische Aspekte in der KI-Nutzung.",
        category: "REFLECT",
      },
      { id: "o_reflect_2", text: "Es existieren ethische Leitlinien zum Einsatz von KI.", category: "REFLECT" },
      { id: "o_reflect_3", text: "Wir achten auf Diversität und Inklusion in KI-Projekten.", category: "REFLECT" },
      {
        id: "o_reflect_4",
        text: "Wir prüfen technologische Entscheidungen auf langfristige Wirkung.",
        category: "REFLECT",
      },
      { id: "o_reflect_5", text: "Wir beziehen externe Stakeholder und Betroffene mit ein.", category: "REFLECT" },
      {
        id: "o_reflect_6",
        text: "Unsere Governance-Struktur ermöglicht verantwortungsvolle Entscheidungen.",
        category: "REFLECT",
      },
      { id: "o_reflect_7", text: "Transparenz ist Teil unserer Organisationskultur.", category: "REFLECT" },
      {
        id: "o_reflect_8",
        text: "Wir achten auf die Balance zwischen Effizienz und Menschlichkeit.",
        category: "REFLECT",
      },
      {
        id: "o_reflect_9",
        text: "Unsere Organisation sieht sich als aktiven Mitgestalter der digitalen Gesellschaft.",
        category: "REFLECT",
      },
      {
        id: "o_reflect_10",
        text: "Wir verstehen KI nicht nur als Technik, sondern als kulturellen Wandel.",
        category: "REFLECT",
      },
    ],
  },
  {
    id: "oekosystem",
    name: "KI-Ökosystem",
    description: "Netzwerklogik & Governance",
    thesis:
      "Die Lösung für die Datenkomplexität liegt in intelligenten Mensch-KI-Netzwerken. In forschungsintensiven Branchen kann KI die Produktentwicklung um 15–50 % verkürzen.",
    questions: [
      // THINK
      { id: "e_think_1", text: "Im Netzwerk gibt es ein gemeinsames Grundverständnis über KI.", category: "THINK" },
      {
        id: "e_think_2",
        text: "Die Zielsetzungen aller Partner in Bezug auf KI sind offen gelegt.",
        category: "THINK",
      },
      { id: "e_think_3", text: "Es existieren gemeinsame Reflexionsräume zur KI-Nutzung.", category: "THINK" },
      { id: "e_think_4", text: "Wir teilen Werte und Orientierungen zu ethischen Aspekten von KI.", category: "THINK" },
      { id: "e_think_5", text: "Wir wissen, welche Potenziale KI im Netzwerk freisetzt.", category: "THINK" },
      { id: "e_think_6", text: "Es wird regelmäßig über gesellschaftliche Wirkung diskutiert.", category: "THINK" },
      { id: "e_think_7", text: "Die Netzwerkakteure bringen systemisches Denken ein.", category: "THINK" },
      { id: "e_think_8", text: "Wir kennen wechselseitige Stärken und Grenzen beim KI-Einsatz.", category: "THINK" },
      { id: "e_think_9", text: "KI wird als kollaborative Innovationskraft verstanden.", category: "THINK" },
      { id: "e_think_10", text: "Es gibt Transparenz über bestehende Datenquellen.", category: "THINK" },

      // ENABLE
      {
        id: "e_enable_1",
        text: "Es existieren Standards zur Interoperabilität von Daten und KI-Tools.",
        category: "ENABLE",
      },
      { id: "e_enable_2", text: "Technische Schnittstellen zwischen Akteuren sind dokumentiert.", category: "ENABLE" },
      { id: "e_enable_3", text: "Es werden gemeinsam KI-Projekte initiiert.", category: "ENABLE" },
      { id: "e_enable_4", text: "Es gibt Ko-Finanzierungsmodelle für geteilte Infrastruktur.", category: "ENABLE" },
      { id: "e_enable_5", text: "Wissen zu KI wird aktiv weitergegeben.", category: "ENABLE" },
      { id: "e_enable_6", text: "Neue Akteure werden bei Zugang und Einführung unterstützt.", category: "ENABLE" },
      { id: "e_enable_7", text: "Innovationshubs oder Reallabore werden gemeinsam genutzt.", category: "ENABLE" },
      { id: "e_enable_8", text: "Gemeinsame Plattformen zur Datennutzung sind etabliert.", category: "ENABLE" },
      {
        id: "e_enable_9",
        text: "Es bestehen rechtliche Vereinbarungen zur geteilten Verantwortung.",
        category: "ENABLE",
      },
      { id: "e_enable_10", text: "Förderlogiken berücksichtigen gemeinsames Lernen.", category: "ENABLE" },

      // SHARE
      { id: "e_share_1", text: "Ergebnisse aus KI-Projekten werden offen kommuniziert.", category: "SHARE" },
      { id: "e_share_2", text: "Es gibt multilaterale Austauschformate zum Thema KI.", category: "SHARE" },
      { id: "e_share_3", text: "Erfolgsgeschichten werden gemeinsam entwickelt.", category: "SHARE" },
      {
        id: "e_share_4",
        text: "Erkenntnisse fließen in politische oder gesellschaftliche Diskurse ein.",
        category: "SHARE",
      },
      { id: "e_share_5", text: "Es werden offene Datenstandards gefördert.", category: "SHARE" },
      {
        id: "e_share_6",
        text: "Best Practices werden gesammelt und öffentlich zugänglich gemacht.",
        category: "SHARE",
      },
      { id: "e_share_7", text: "Innovationswissen wird auch außerhalb des Netzwerks geteilt.", category: "SHARE" },
      {
        id: "e_share_8",
        text: "Die Rolle von Mensch und KI wird im Verbund gemeinsam reflektiert.",
        category: "SHARE",
      },
      { id: "e_share_9", text: "Transparenz ist ein zentrales Netzwerkprinzip.", category: "SHARE" },
      { id: "e_share_10", text: "Beteiligung an Entscheidungsprozessen ist gewährleistet.", category: "SHARE" },

      // GROW
      { id: "e_grow_1", text: "Das Netzwerk reflektiert seine Rolle im gesellschaftlichen Wandel.", category: "GROW" },
      { id: "e_grow_2", text: "KI ist Bestandteil von Zukunftsszenarien und Planspielen.", category: "GROW" },
      { id: "e_grow_3", text: "Wir lernen aus Fehlschlägen systematisch.", category: "GROW" },
      { id: "e_grow_4", text: "Neue Methoden werden ausprobiert und angepasst.", category: "GROW" },
      { id: "e_grow_5", text: "Cross-Sektorales Lernen ist Teil der Netzwerk-DNA.", category: "GROW" },
      { id: "e_grow_6", text: "Das Netzwerk wächst über gemeinsame Ziele.", category: "GROW" },
      { id: "e_grow_7", text: "Es gibt kollektive Weiterbildungsformate.", category: "GROW" },
      { id: "e_grow_8", text: "Technologische, soziale und kulturelle Innovation werden verbunden.", category: "GROW" },
      { id: "e_grow_9", text: "Neue Governance-Modelle werden gemeinsam erprobt.", category: "GROW" },
      { id: "e_grow_10", text: "Es entstehen langfristige Allianzen und Lernpartnerschaften.", category: "GROW" },

      // REFLECT
      { id: "e_reflect_1", text: "Ethik ist integraler Bestandteil der Netzwerkgovernance.", category: "REFLECT" },
      { id: "e_reflect_2", text: "Es bestehen Werte-Charta oder Leitlinien zur KI-Nutzung.", category: "REFLECT" },
      { id: "e_reflect_3", text: "Vertrauen wird aktiv durch Dialog und Austausch aufgebaut.", category: "REFLECT" },
      { id: "e_reflect_4", text: "Verantwortlichkeiten im Umgang mit KI sind geklärt.", category: "REFLECT" },
      { id: "e_reflect_5", text: "Risiken werden gemeinsam bewertet und gemindert.", category: "REFLECT" },
      {
        id: "e_reflect_6",
        text: "Reflexion ist systematisch im Projekt- und Netzwerkrhythmus verankert.",
        category: "REFLECT",
      },
      {
        id: "e_reflect_7",
        text: "Das Zusammenspiel von Mensch und KI ist zentrales Gestaltungsziel.",
        category: "REFLECT",
      },
      { id: "e_reflect_8", text: "Es gibt Institutionen oder Rollen für Ethikmoderation.", category: "REFLECT" },
      { id: "e_reflect_9", text: "Machtasymmetrien werden thematisiert und reduziert.", category: "REFLECT" },
      { id: "e_reflect_10", text: "Das Netzwerk begreift sich als lernende, adaptive Struktur.", category: "REFLECT" },
    ],
  },
]

export const INDUSTRIES = [
  "Beratung & Consulting",
  "IT & Software",
  "Gesundheitswesen",
  "Bildung & Forschung",
  "Finanzdienstleistungen",
  "Handel & E-Commerce",
  "Produktion & Fertigung",
  "Logistik & Transport",
  "Medien & Marketing",
  "Öffentlicher Sektor",
  "Non-Profit",
  "Andere",
]

export const COMPANY_SIZES = [
  "Selbstständig / Freelancer",
  "2-10 Mitarbeitende",
  "11-50 Mitarbeitende",
  "51-250 Mitarbeitende",
  "251-1000 Mitarbeitende",
  "Über 1000 Mitarbeitende",
]
