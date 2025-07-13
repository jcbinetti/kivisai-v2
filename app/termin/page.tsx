import { Calendar } from "lucide-react";

export const metadata = {
  title: "Termin buchen | KIVISAI",
  description: "Vereinbaren Sie jetzt einen Termin mit KIVISAI.",
};

export default function TerminPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-4 mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Termin buchen</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Vereinbaren Sie jetzt Ihr persönliches Gespräch mit KIVISAI.
            </p>
          </div>
        </div>
      </section>
      {/* Cal.com Widget */}
      <section className="py-16 bg-kivisai-light-cool-gray/60">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-kivisai-deep-dark-blue mb-2 text-center">Jetzt Termin buchen</h2>
          <p className="text-center text-kivisai-moss-green mb-8">Wähle einen freien Tag und buche dein unverbindliches Gespräch mit unseren KI-Expert:innen.</p>
          <div className="rounded-2xl shadow-2xl border-2 border-kivisai-clear-turquoise bg-white overflow-hidden">
            <iframe
              src="https://cal.com/jcbinetti/30min?embed=true"
              width="100%"
              height="910"
              frameBorder="0"
              className="cal-iframe"
              style={{ borderRadius: 0, border: 'none', background: 'white' }}
              title="KIVISAI Termin buchen"
              allow="camera; microphone; fullscreen; display-capture"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
