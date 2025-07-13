#V6 KIVISAI Website - Next.js 14 Project

## 🚀 Über das Projekt

KIVISAI ist eine moderne Website für KI-Beratung und Transformation, gebaut mit Next.js 14, TypeScript und Tailwind CSS.

## 🛠️ Tech 
Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Matomo, Google Analytics
- **Email**: Brevo (Sendinblue)
- **Deployment**: Vercel

## 📁 Projektstruktur

\`\`\`
├── app/                    # Next.js App Router
│   ├── (pages)/           # Gruppierte Routen
│   ├── api/               # API Routes
│   └── globals.css        # Globale Styles
├── components/            # React Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   ├── common/           # Wiederverwendbare Komponenten
│   └── specific/         # Seitenspezifische Komponenten
├── lib/                  # Utility Funktionen
├── public/               # Statische Assets
└── types/                # TypeScript Definitionen
\`\`\`

## 🛡️ Next.js Fehlerbehebung

### Wenn `TypeError: Cannot read properties of undefined (reading 'clientModules')`:

1. **Alle Node-Prozesse beenden:**
   taskkill /f /im node.exe
2. **Cache & node_modules löschen:**
   npm run clean
3. **Neu installieren:**
   npm install
4. **Nur mit**
   npm run dev
   **oder**
   npx next dev -p 3000
   **starten!**
5. **Wenn der Fehler bleibt:**
   - npm ls next
   - npm uninstall next
   - npm install next@latest
   - npm audit fix --force

> **WICHTIG:**
> Niemals `next dev 3000` oder `next dev 3333` verwenden! Das führt zu genau diesem Fehler.
> Immer `npm run dev` oder `npx next dev -p 3000` nutzen.

##  Design System

### KIVISAI Brand Colors
- **Primary**: Deep Blue (#1a365d) - Hauptfarbe für Navigation, Buttons, Links
- **Secondary**: Green (#38a169) - Akzentfarbe für CTAs, Highlights
- **Accent**: Orange (#ed8936) - Warme Akzentfarbe für Hover-Effekte
- **Neutral**: Gray (#4a5568) - Text und UI-Elemente

### KIVISAI Gradients
- **Primary Gradient**: `linear-gradient(135deg, #1a365d 0%, #2d3748 100%)`
- **Secondary Gradient**: `linear-gradient(135deg, #38a169 0%, #48bb78 100%)`
- **Accent Gradient**: `linear-gradient(135deg, #ed8936 0%, #f6ad55 100%)`

### Typography
- **Font**: Inter (Google Fonts) - Modern, clean, highly readable
- **Scale**: Responsive typography scale (text-sm to text-6xl)
- **Headings**: Bold weight for hierarchy
- **Body**: Regular weight for optimal readability

### KIVISAI Design Elements
- **Rounded corners**: Consistent border-radius (md, lg, xl)
- **Shadows**: Subtle elevation with box-shadows
- **Spacing**: 8px grid system (4, 8, 16, 24, 32, 48, 64px)
- **Icons**: Heroicons integration for consistency
- **Animations**: Smooth transitions and hover effects

## 🚀 Installation & Setup

\`\`\`bash
# Repository klonen
git clone [repository-url]
cd kivisai-website

# Dependencies installieren
npm install

# Environment Variables konfigurieren
cp .env.example .env.local

# Development Server starten
npm run dev
\`\`\`

## 🔧 Environment Variables

\`\`\`env
# Brevo Email Service
BREVO_API_KEY=your_brevo_api_key
BREVO_TEAM_EMAIL=team@kivisai.de
BREVO_SENDER_EMAIL=noreply@kivisai.de

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_MATOMO_URL=your_matomo_url
NEXT_PUBLIC_MATOMO_SITE_ID=your_site_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://kivisai.de
\`\`\`

## 📦 Verfügbare Scripts

\`\`\`bash
npm run dev          # Development Server
npm run dev-clean    # Cache löschen + Dev Server starten
npm run clean        # Cache und Dependencies neu installieren
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint Check
npm run type-check   # TypeScript Check
npm test             # Jest Tests
\`\`\`

## 🧹 Cache Troubleshooting

Bei Problemen mit ChunkLoadErrors, Build-Fehlern oder Styling-Problemen:

\`\`\`bash
# Automatische Cache-Bereinigung
npm run clean

# Oder manuell
.\scripts\clean-cache.ps1
\`\`\`

**Symptome für Cache-Probleme:**
- Seiten laden nicht oder zeigen Fehler
- \`ChunkLoadError: Loading chunk X failed\`
- Port-Konflikte (3000, 3001, 3002...)
- Styling-Probleme nach Änderungen

**Sofortige Lösung:**
1. Alle Node-Prozesse beenden: \`taskkill /f /im node.exe\`
2. Cache löschen: \`npm run clean\`
3. Dev-Server neu starten: \`npm run dev\`

## 🧪 Testing

\`\`\`bash
# Unit Tests
npm test

# E2E Tests (Playwright)
npm run test:e2e

# Accessibility Tests
npm run test:a11y
\`\`\`