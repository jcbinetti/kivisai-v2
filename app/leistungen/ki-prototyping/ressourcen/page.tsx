import { ArrowRight, Users, Zap, Calendar, Target, TrendingUp, ExternalLink, UserCheck, Code, GraduationCap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Image from 'next/image';

const roles = [
  {
    role: "KI-Consultant",
    task: "Strategischer Lotse: Use-Case-Priorisierung, Architektur-Roadmap, Förderberatung",
    usage: "in allen drei Modellen"
  },
  {
    role: "KI-Builder",
    task: "Hands-on-Entwicklung von Modellen, RAG-Pipelines, Automatisierungen",
    usage: "Solution & Full-Service"
  },
  {
    role: "KI-Trainer",
    task: "Befähigt Ihr Team im Alltag mit GenAI-Skills & Change-Formaten",
    usage: "optional ab Solution, fest in Full-Service"
  }
];

const models = [
  {
    name: "Coaching \"Begleitet\"",
    description: "1 Consultant coacht Ihr internes Team durch alle Sprints",
    when: "Sie wollen selbst bauen & lernen"
  },
  {
    name: "Expert Support \"Solution\"",
    description: "Consultant + Builder entwickeln den MVP, Ihr Team lernt \"am lebenden Objekt\"",
    when: "Sie haben begrenzte Dev-Kapazität, möchten aber Wissen aufbauen"
  },
  {
    name: "Schlüsselfertig \"Full Service\"",
    description: "Komplettes Delivery-Team (Consultant, Builder, Trainer, Ops) liefert und betreibt die Lösung",
    when: "Sie brauchen schnelle Wirkung ohne interne Belastung"
  }
];

export default function KIPrototypingRessourcenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-dark-blue to-kivisai-blue">
      {/* Breadcrumbs */}
      <div className="absolute top-20 left-4 right-4 z-20">
        <Breadcrumbs items={["Home", "Leistungen", "KI-Prototyping", "Ressourcen"]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Unser Team – Ihr Spielraum
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            KIVISAI greift auf ein kuratiertes Netzwerk von KI-Spezialist·innen und Coaches & Berater·innen zurück. 
            Für jedes Projekt kombinieren wir genau die Rollen, die Ihren Reifegrad und Ihre Ressourcen bestmöglich ergänzen – 
            nicht mehr, nicht weniger.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-2" />
              Kuratiertes Netzwerk
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Target className="w-4 h-4 mr-2" />
              Maßgeschneidert
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Flexibel skalierbar
            </Badge>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Unsere Rollen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm bg-kivisai-blue text-white">
                      Rolle {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-kivisai-dark-blue">
                    {role.role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Aufgabe im Projekt</h4>
                    <p className="text-kivisai-dark-blue text-sm leading-relaxed">{role.task}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Typischer Einsatz</h4>
                    <p className="text-kivisai-moss-green text-sm font-medium">{role.usage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Drei Engagement-Modelle – so viel Unterstützung, wie Sie brauchen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm bg-kivisai-blue text-white">
                      Modell {index + 1}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-kivisai-dark-blue">
                    {model.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Wer macht was?</h4>
                    <p className="text-kivisai-dark-blue text-sm leading-relaxed">{model.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kivisai-blue text-sm mb-1">Wann sinnvoll?</h4>
                    <p className="text-kivisai-moss-green text-sm leading-relaxed">{model.when}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 p-4 bg-kivisai-light-cool-gray rounded-lg">
            <p className="text-sm text-kivisai-dark-blue italic">
              Flexibel: Sprint-Frequenz, Teamgröße und Gesamtdauer richten sich nach Use-Case-Komplexität und Ihren internen Kapazitäten.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">Warum KIVISAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2">
                  Erfahrene Spezialisten
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Unser Netzwerk umfasst KI-Experten mit jahrelanger Praxiserfahrung in verschiedenen Branchen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
              <div className="w-12 h-12 bg-kivisai-moss-green rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2">
                  Hands-on Entwicklung
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Wir entwickeln nicht nur Konzepte, sondern liefern funktionsfähige Prototypen und Lösungen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
              <div className="w-12 h-12 bg-kivisai-clear-turquoise rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2 flex items-center gap-2">
                  Wissenstransfer
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Wir befähigen Ihr Team, damit Sie langfristig unabhängig werden und selbst weiterentwickeln können.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg">
              <div className="w-12 h-12 bg-kivisai-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-2">
                  Flexible Skalierung
                </h3>
                <p className="text-kivisai-moss-green leading-relaxed">
                  Von Coaching bis Full-Service: Wir passen uns Ihren Ressourcen und Zielen an.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-kivisai-light-cool-gray to-white rounded-lg shadow-lg col-span-1 md:col-span-2">
            <Image
              src="/images-optimized/KIVISAI_signet_tr.webp"
              alt="KIVISAI Signet"
              width={120}
              height={120}
              className="w-32 h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-kivisai-dark-blue mb-8 text-center">
            Bereit für die Zusammenarbeit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Termin buchen
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Vereinbaren Sie ein unverbindliches Gespräch und lassen Sie uns Ihr KI-Projekt besprechen.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/termin">
                    <Calendar className="w-4 h-4 mr-2" />
                    Termin vereinbaren
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-kivisai-light-cool-gray to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-kivisai-clear-turquoise mx-auto mb-4" />
                <h3 className="text-xl font-bold text-kivisai-dark-blue mb-3">
                  Unser Team
                </h3>
                <p className="text-kivisai-moss-green mb-6">
                  Lernen Sie die Menschen hinter KIVISAI kennen und erfahren Sie mehr über unsere Expertise.
                </p>
                <Button variant="kivisai" size="lg" className="w-full" asChild>
                  <a href="/ueber-kivisai/team-netzwerk">
                    <Users className="w-4 h-4 mr-2" />
                    Team kennenlernen
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 