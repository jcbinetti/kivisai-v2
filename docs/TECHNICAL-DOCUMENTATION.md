# KIVISAI Website - Technische Dokumentation

## Architektur-Übersicht

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Validierung**: Zod
- **Email**: Brevo (Sendinblue)
- **Analytics**: Matomo + Google Analytics
- **Deployment**: Vercel

### Ordnerstruktur
\`\`\`
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── (pages)/           # Website-Seiten
│   └── globals.css        # Globale Styles
├── components/            # React Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   ├── common/           # Wiederverwendbare Komponenten
│   └── design-system/    # Design-System Komponenten
├── lib/                  # Utility-Funktionen
├── hooks/                # Custom React Hooks
├── types/                # TypeScript Definitionen
└── public/               # Statische Assets
\`\`\`

## Komponenten-Architektur

### Kern-Komponenten
1. **Header/Navigation** - Responsive, mehrsprachig
2. **Footer** - Links, Zertifikate, Partner
3. **SafeImage** - Fehlerbehandlung für Bilder
4. **ErrorBoundary** - Umfassende Fehlerbehandlung

### Business-Komponenten
1. **EVALKIT** - KI-Bewertungstool
2. **AI-Chat-Widget** - Intelligenter Chat
3. **Newsletter-CTA** - Lead-Generierung
4. **Cal-Booking-Widget** - Terminbuchung

## API-Endpunkte

### Kontakt & Newsletter
- `POST /api/contact` - Kontaktformular
- `POST /api/newsletter` - Newsletter-Anmeldung
- `GET /api/newsletter-confirm` - Double-Opt-In

### Analytics & Monitoring
- `POST /api/analytics` - Custom Event-Tracking
- `POST /api/monitoring/errors` - Error-Logging
- `POST /api/monitoring/performance` - Performance-Metriken

### Integrationen
- `POST /api/ai-chat` - KI-Chat Backend
- `GET /api/graph-commons` - Netzwerk-Daten

## Sicherheit

### Implementierte Maßnahmen
- Rate Limiting auf allen API-Endpunkten
- Input Sanitization mit Zod-Schemas
- CSP Headers für XSS-Schutz
- HTTPS-Erzwingung
- Environment Variable Validation

### DSGVO-Konformität
- Double-Opt-In für Newsletter
- Datenschutz-Checkboxen
- Cookie-freie Analytics-Option
- Datenminimierung

## Performance

### Optimierungen
- Next.js Image-Optimierung
- Automatisches Code-Splitting
- Lazy Loading für Komponenten
- CDN-Caching über Vercel

### Monitoring
- Core Web Vitals Tracking
- Error Boundary Logging
- Performance-Metriken API

## Deployment

### Vercel-Konfiguration
\`\`\`json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
\`\`\`

### Environment Variables
\`\`\`
BREVO_API_KEY=***
BREVO_TEAM_EMAIL=info@kivisai.com
NEXT_PUBLIC_SITE_URL=https://www.kivisai.com
\`\`\`

## Wartung & Updates

### Regelmäßige Tasks
1. Dependency Updates
2. Security Patches
3. Performance Monitoring
4. Content Updates

### Monitoring-Dashboards
- Vercel Analytics
- Custom Error-Tracking
- Performance-Metriken
