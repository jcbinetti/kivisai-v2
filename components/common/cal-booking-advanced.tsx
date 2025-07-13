'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCalApi } from "@calcom/embed-react";

type CalEvent = {
  label: string;
  link: string;
  duration: number;
  category: string;
  description: string;
  price?: string;
  recommended?: boolean;
};

const calEvents: CalEvent[] = [
  { 
    label: 'Kennenlerngespräch (30 min)', 
    link: 'jcbinetti/30min', 
    duration: 30,
    category: 'Erstkontakt',
    description: 'Lernen Sie uns kennen und besprechen Sie Ihre ersten Fragen zur KI-Transformation',
    price: 'Kostenlos',
    recommended: true
  },
  { 
    label: 'Strategie-Session (60 min)', 
    link: 'jcbinetti/60min-pro', 
    duration: 60,
    category: 'Strategie',
    description: 'Entwickeln Sie Ihre KI-Strategie und definieren Sie konkrete nächste Schritte',
    price: '€150'
  },
  { 
    label: 'INQA-Coaching Erstgespräch', 
    link: 'jcbinetti/inqa-coaching', 
    duration: 30,
    category: 'INQA-Coaching',
    description: 'Spezifisches Coaching für INQA-Prozesse und Qualitätsmanagement',
    price: '€75'
  },
  { 
    label: 'KI-Potenzialanalyse Beratung', 
    link: 'jcbinetti/ki-potenzialanalyse', 
    duration: 45,
    category: 'Analyse',
    description: 'Identifizieren Sie KI-Potenziale in Ihrem Unternehmen',
    price: '€120'
  },
  { 
    label: 'KI-Prototyping Session', 
    link: 'jcbinetti/ki-prototyping', 
    duration: 60,
    category: 'Prototyping',
    description: 'Entwickeln Sie erste KI-Prototypen für Ihre spezifischen Anwendungsfälle',
    price: '€200'
  },
  { 
    label: 'Transformation-Coaching', 
    link: 'jcbinetti/transformation-coaching', 
    duration: 90,
    category: 'Transformation',
    description: 'Begleitung bei der digitalen Transformation mit Fokus auf KI-Integration',
    price: '€250'
  },
  { 
    label: 'Team-Coaching Session', 
    link: 'jcbinetti/team-coaching', 
    duration: 60,
    category: 'Team',
    description: 'Coaching für Teams bei der Einführung und Nutzung von KI-Tools',
    price: '€180'
  },
  { 
    label: 'Follow-up Gespräch', 
    link: 'jcbinetti/follow-up', 
    duration: 30,
    category: 'Follow-up',
    description: 'Nachbesprechung und Weiterentwicklung bereits begonnener Projekte',
    price: '€75'
  },
];

const categories = Array.from(new Set(calEvents.map(event => event.category)));

export const CalBookingAdvanced = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalEvent | null>(calEvents[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [isCalReady, setIsCalReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredEvents = selectedCategory === 'Alle' 
    ? calEvents 
    : calEvents.filter(event => event.category === selectedCategory);

  useEffect(() => {
    const initCal = async () => {
      try {
        const cal = await getCalApi();
        if (cal && typeof cal === 'function') {
          setIsCalReady(true);
          setError(null);
        }
      } catch (error) {
        console.error('Failed to initialize Cal.com API:', error);
        setError('Cal.com konnte nicht geladen werden');
      }
    };

    initCal().catch((error) => {
      console.error('Cal.com initialization error:', error);
      setError('Cal.com konnte nicht initialisiert werden');
    });
  }, []);

  const handleBooking = async () => {
    if (!selectedEvent || !isCalReady) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const cal = await getCalApi();
      
      if (!cal || typeof cal !== 'function') {
        throw new Error('Cal.com API nicht verfügbar');
      }
      
      cal("ui", {
        "styles": { 
          "branding": { 
            "brandColor": "#001F3F" 
          } 
        },
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "height": "800px",
        "width": "100%"
      });

      cal("floatingButton", {
        "calLink": selectedEvent.link
      });

      cal("modal", {
        "calLink": selectedEvent.link,
        "height": "800px",
        "width": "90vw"
      });
    } catch (error) {
      console.error('Cal.com booking error:', error);
      setError('Buchungssystem konnte nicht geöffnet werden');
      
      if (selectedEvent) {
        try {
          window.open(`https://cal.com/${selectedEvent.link}`, '_blank');
        } catch (fallbackError) {
          console.error('Fallback booking failed:', fallbackError);
          setError('Buchungssystem nicht verfügbar. Bitte kontaktieren Sie uns direkt.');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">
          Terminbuchung
        </h2>
        <p className="text-gray-600">
          Wählen Sie die passende Terminart für Ihr Anliegen. Alle Termine finden online statt.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Kategorie-Filter */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kategorien</CardTitle>
              <CardDescription>Filtern Sie nach Ihrem Interessensbereich</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant={selectedCategory === 'Alle' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('Alle')}
                className="w-full justify-start"
              >
                Alle Kategorien
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="w-full justify-start"
                >
                  {category}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Terminarten */}
        <div className="md:col-span-2">
          <div className="grid gap-4">
            {filteredEvents.map(event => (
              <Card 
                key={event.link} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedEvent?.link === event.link ? 'ring-2 ring-kivisai-clear-turquoise' : ''
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {event.label}
                        {event.recommended && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Empfohlen
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {event.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-kivisai-deep-dark-blue">
                        {event.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.duration} min
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{event.category}</Badge>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(event);
                        handleBooking();
                      }}
                      disabled={!isCalReady || isLoading}
                    >
                      Buchen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Buchungsbutton für ausgewählten Termin */}
      {selectedEvent && (
        <div className="mt-8 text-center">
          <Button 
            onClick={handleBooking} 
            disabled={!isCalReady || isLoading} 
            size="lg"
            className="bg-kivisai-deep-dark-blue hover:bg-kivisai-dark-blue px-8"
          >
            {isLoading ? 'Lade Buchungssystem...' : `Termin buchen: ${selectedEvent.label}`}
          </Button>
        </div>
      )}
      
      {error && (
        <div className="mt-4 text-sm text-red-600 text-center p-3 bg-red-50 rounded-lg">
          {error}
        </div>
      )}
      
      {!isCalReady && (
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>Falls das Buchungssystem nicht lädt, kontaktieren Sie uns direkt:</p>
          <p className="mt-1">
            <a href="mailto:info@kivisai.de" className="text-blue-600 hover:underline">
              info@kivisai.de
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
