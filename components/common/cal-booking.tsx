'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from '@/components/ui/label';

type CalEvent = {
  label: string;
  link: string;
  duration: number;
  category: string;
  description: string;
};

const calEvents: CalEvent[] = [
  { 
    label: 'Kennenlerngespräch (30 min)', 
    link: 'jcbinetti/30min', 
    duration: 30,
    category: 'Erstkontakt',
    description: 'Lernen Sie uns kennen und besprechen Sie Ihre ersten Fragen zur KI-Transformation'
  },
  { 
    label: 'Strategie-Session (60 min)', 
    link: 'jcbinetti/60min-pro', 
    duration: 60,
    category: 'Strategie',
    description: 'Entwickeln Sie Ihre KI-Strategie und definieren Sie konkrete nächste Schritte'
  },
  { 
    label: 'INQA-Coaching Erstgespräch', 
    link: 'jcbinetti/inqa-coaching', 
    duration: 30,
    category: 'INQA-Coaching',
    description: 'Spezifisches Coaching für INQA-Prozesse und Qualitätsmanagement'
  },
  { 
    label: 'KI-Potenzialanalyse Beratung', 
    link: 'jcbinetti/ki-potenzialanalyse', 
    duration: 45,
    category: 'Analyse',
    description: 'Identifizieren Sie KI-Potenziale in Ihrem Unternehmen'
  },
  { 
    label: 'KI-Prototyping Session', 
    link: 'jcbinetti/ki-prototyping', 
    duration: 60,
    category: 'Prototyping',
    description: 'Entwickeln Sie erste KI-Prototypen für Ihre spezifischen Anwendungsfälle'
  },
  { 
    label: 'Transformation-Coaching', 
    link: 'jcbinetti/transformation-coaching', 
    duration: 90,
    category: 'Transformation',
    description: 'Begleitung bei der digitalen Transformation mit Fokus auf KI-Integration'
  },
  { 
    label: 'Team-Coaching Session', 
    link: 'jcbinetti/team-coaching', 
    duration: 60,
    category: 'Team',
    description: 'Coaching für Teams bei der Einführung und Nutzung von KI-Tools'
  },
  { 
    label: 'Follow-up Gespräch', 
    link: 'jcbinetti/follow-up', 
    duration: 30,
    category: 'Follow-up',
    description: 'Nachbesprechung und Weiterentwicklung bereits begonnener Projekte'
  },
];

export const CalBooking = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalEvent | null>(calEvents[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = async () => {
    if (!selectedEvent) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Try to load Cal.com API dynamically
      let cal: any = null;
      
      try {
        const { getCalApi } = await import("@calcom/embed-react");
        cal = await getCalApi();
      } catch (importError) {
        console.log('Cal.com API not available, using direct link fallback');
      }
      
      if (cal && typeof cal === 'function') {
        // Configure Cal.com UI
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

        // Show the booking interface using modal
        cal("modal", {
          "calLink": selectedEvent.link,
          "height": "800px",
          "width": "90vw"
        });
      } else {
        // Fallback: open Cal.com link directly
        window.open(`https://cal.com/${selectedEvent.link}`, '_blank');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setError('Buchungssystem konnte nicht geöffnet werden');
      
      // Final fallback: open Cal.com link directly
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
    <div className="bg-gray-50 p-8 rounded-lg border">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue">
            Terminbuchung
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Wählen Sie die passende Terminart für Ihr Anliegen. Alle Termine finden online statt.
          </p>
        </div>

        <div>
          <Label htmlFor="event-type" className="text-sm font-medium">
            Wählen Sie die Art des Gesprächs:
          </Label>
          <Select
            onValueChange={(value) => setSelectedEvent(calEvents.find(e => e.link === value) || null)}
            defaultValue={selectedEvent?.link}
          >
            <SelectTrigger id="event-type" className="mt-2">
              <SelectValue placeholder="Terminart wählen..." />
            </SelectTrigger>
            <SelectContent>
              {calEvents.map(event => (
                <SelectItem key={event.link} value={event.link}>
                  <div className="flex flex-col">
                    <span className="font-medium">{event.label}</span>
                    <span className="text-xs text-gray-500">{event.category} • {event.duration} min</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedEvent && (
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-kivisai-deep-dark-blue mb-2">
              {selectedEvent.label}
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              {selectedEvent.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-kivisai-clear-turquoise rounded-full"></span>
                {selectedEvent.category}
              </span>
              <span>•</span>
              <span>{selectedEvent.duration} Minuten</span>
            </div>
          </div>
        )}
        
        <Button 
          onClick={handleBooking} 
          disabled={!selectedEvent || isLoading} 
          className="w-full bg-kivisai-deep-dark-blue hover:bg-kivisai-dark-blue"
        >
          {isLoading ? 'Öffne Buchungssystem...' : 'Termin online buchen'}
        </Button>
        
        {error && (
          <div className="text-sm text-red-600 text-center p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
        
        <div className="text-xs text-gray-500 text-center">
          <p>Falls das Buchungssystem nicht funktioniert, kontaktieren Sie uns direkt:</p>
          <p className="mt-1">
            <a href="mailto:info@kivisai.de" className="text-blue-600 hover:underline">
              info@kivisai.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}; 