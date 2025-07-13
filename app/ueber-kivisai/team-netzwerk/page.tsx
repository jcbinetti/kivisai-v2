import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Team-Leitung & Netzwerk | KIVISAI",
  description: "JC BINETTI orchestriert das KIVISAI-Netzwerk individuell für jedes Projekt.",
};

export default function TeamNetzwerkPage() {
  return (
    <div className="min-h-screen bg-kivisai-pure-white text-kivisai-moss-green">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Das KIVISAI-Netzwerk</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Moderne Projekte leben von starken Einzelkompetenzen – sowohl von Menschen als auch von Organisationen. <br />
            KIVISAI bringt für jedes Projekt die passenden Expert:innen, Partner und Tools flexibel zusammen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Netzwerk-Graph Block */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-kivisai-deep-dark-blue">Unser Netzwerk</h2>
          <p className="text-lg mb-8 text-muted-foreground text-center">
            Für jedes Projekt wird das Netzwerk flexibel angepasst – mit Partnern, Spezialisten und Tools aus verschiedenen Branchen.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden border">
              <iframe
                src="https://graphcommons.com/graphs/d18c406a-1b04-46ff-b766-220adf268065"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="KIVISAI Netzwerk"
                className="w-full h-full"
                suppressHydrationWarning={true}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button asChild className="bg-kivisai-clear-turquoise hover:bg-kivisai-deep-dark-blue text-white">
                <a
                  href="https://graphcommons.com/graphs/d18c406a-1b04-46ff-b766-220adf268065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Netzwerk in neuem Tab öffnen
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Leitung Block (verschoben) */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-kivisai-clear-turquoise shadow-lg">
              <Image src="/images/Profil_BINETTI.webp" alt="JC BINETTI" fill className="object-cover object-center" priority />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-kivisai-deep-dark-blue">JC BINETTI</h2>
            <div className="text-lg text-kivisai-moss-green font-medium">Team-Leitung & Netzwerk-Orchestrierung</div>
          </div>
          <p className="text-lg mb-6 text-muted-foreground">Jedes Projekt erhält ein maßgeschneidertes Netzwerk aus Expert:innen, Partnern und Tools – orchestriert von JC BINETTI für maximale Wirkung und passgenaue Lösungen.</p>
          <Button asChild variant="kivisaiOutline" size="lg">
            <a href="/ueber-kivisai/team-netzwerk/jc-binetti">Profil JC BINETTI ansehen</a>
          </Button>
        </div>

        {/* Partner Block */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center text-kivisai-deep-dark-blue">Unsere Partner</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src="/images/Logo_sqlxpert.png" alt="SQLXpert" width={120} height={60} />
            <Image src="/images/Logo_mobileatmedia.jpg" alt="Mobile ad media" width={120} height={60} />
            <Image src="/images/CONVIS_Logo_RGB_72dpi_web.jpg" alt="CONVIS" width={120} height={60} />
            <Image src="/images/Logo_TfT.png" alt="Tools for tomorrow" width={120} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
