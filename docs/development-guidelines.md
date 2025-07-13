# KIVISAI Entwicklungsrichtlinien

## 📋 Übersicht

Diese Richtlinien definieren Standards für die Entwicklung und Wartung der KIVISAI-Website.

## 🏗️ Projektstruktur

\`\`\`
app/
├── (routes)/           # App Router Seiten
├── api/               # API Routes
├── globals.css        # Globale Styles
└── layout.tsx         # Root Layout

components/
├── common/            # Wiederverwendbare Komponenten
├── ui/               # shadcn/ui Komponenten
├── header.tsx        # Header Komponente
└── footer.tsx        # Footer Komponente

lib/
├── utils.ts          # Utility Funktionen
├── constants.ts      # Konstanten
└── component-registry.ts  # Komponenten-Registry

docs/
├── component-examples.tsx  # Komponenten-Beispiele
└── development-guidelines.md  # Diese Datei
\`\`\`

## 🎨 Komponenten-Standards

### 1. Komponenten-Hierarchie

\`\`\`typescript
// 1. Common Components (Wiederverwendbar)
components/common/hero-section.tsx
components/common/content-section.tsx
components/common/cta-section.tsx

// 2. UI Components (shadcn/ui)
components/ui/button.tsx
components/ui/card.tsx

// 3. Specialized Components (KIVISAI-spezifisch)
components/kivisai-cycle.tsx
components/cal-booking-widget.tsx
\`\`\`

### 2. Namenskonventionen

\`\`\`typescript
// Komponenten: PascalCase
export function HeroSection() {}

// Props Interfaces: ComponentNameProps
export interface HeroSectionProps {}

// Dateien: kebab-case
hero-section.tsx
content-section.tsx

// CSS Klassen: kebab-case mit Präfix
.kivisai-hero-section
.kivisai-cta-button
\`\`\`

### 3. Props-Design

\`\`\`typescript
// Immer TypeScript Interfaces verwenden
export interface ComponentProps {
  // Pflichtfelder zuerst
  title: string
  
  // Optionale Felder mit Defaults
  variant?: 'default' | 'centered' | 'split'
  size?: 'sm' | 'md' | 'lg'
  
  // Komplexe Objekte typisieren
  primaryCta?: {
    text: string
    href: string
    icon?: string
  }
  
  // Standard React Props
  className?: string
  children?: ReactNode
}
\`\`\`

## 🎯 Verwendungsrichtlinien

### Hero Sections

\`\`\`typescript
// ✅ Richtig: Strukturierte Props
<HeroSection
  title="Hauptüberschrift"
  subtitle="Kategorie"
  description="Beschreibung"
  primaryCta={{
    text: "Hauptaktion",
    href: "/ziel",
    icon: "calendar"
  }}
  variant="split"
  size="lg"
/>

// ❌ Falsch: Unstrukturierte Props
<HeroSection
  title="Titel"
  buttonText="Button"
  buttonLink="/link"
  hasImage={true}
/>
\`\`\`

### Content Sections

\`\`\`typescript
// ✅ Richtig: Klare Struktur
<ContentSection
  title="Abschnittstitel"
  variant="centered"
  background="gray"
>
  <FeatureGrid items={features} columns={3} />
</ContentSection>

// ❌ Falsch: Inline Styles
<div style={{padding: '2rem', backgroundColor: 'gray'}}>
  <h2>Titel</h2>
  {/* Content */}
</div>
\`\`\`

## 🔧 Code-Standards

### 1. TypeScript

\`\`\`typescript
// ✅ Richtig: Explizite Typen
interface User {
  id: string
  name: string
  email: string
}

function getUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`).then(res => res.json())
}

// ❌ Falsch: Any Types
function getUser(id: any): any {
  return fetch(`/api/users/${id}`).then(res => res.json())
}
\`\`\`

### 2. React Patterns

\`\`\`typescript
// ✅ Richtig: Functional Components mit Hooks
export function MyComponent({ title, items }: MyComponentProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="my-component">
      <h2>{title}</h2>
      {/* Component content */}
    </div>
  )
}

// ❌ Falsch: Class Components (außer bei Error Boundaries)
class MyComponent extends React.Component {
  // Avoid unless necessary
}
\`\`\`

### 3. CSS/Tailwind

\`\`\`typescript
// ✅ Richtig: Tailwind mit cn() Utility
import { cn } from '@/lib/utils'

<div className={cn(
  'base-classes',
  variant === 'primary' && 'primary-classes',
  className
)}>

// ❌ Falsch: Inline Styles
<div style={{color: 'red', padding: '1rem'}}>
\`\`\`

## 📱 Responsive Design

### Breakpoints (Tailwind)

\`\`\`typescript
// Mobile First Approach
sm: '640px'   // Tablet
md: '768px'   // Desktop
lg: '1024px'  // Large Desktop
xl: '1280px'  // Extra Large

// ✅ Richtig: Mobile First
<div className="text-sm md:text-base lg:text-lg">

// ❌ Falsch: Desktop First
<div className="text-lg md:text-base sm:text-sm">
\`\`\`

## ♿ Barrierefreiheit

### ARIA und Semantik

\`\`\`typescript
// ✅ Richtig: Semantische HTML-Elemente
<nav aria-label="Hauptnavigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <h1>Seitentitel</h1>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Abschnittstitel</h2>
  </section>
</main>

// ❌ Falsch: Div-Suppe ohne Semantik
<div className="nav">
  <div className="nav-item">Home</div>
</div>
\`\`\`

## 🚀 Performance

### Bildoptimierung

\`\`\`typescript
// ✅ Richtig: Next.js Image Component
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Beschreibender Alt-Text"
  width={800}
  height={600}
  priority={isAboveTheFold}
/>

// ❌ Falsch: Standard img Tag
<img src="/images/hero.jpg" alt="Bild" />
\`\`\`

### Code Splitting

\`\`\`typescript
// ✅ Richtig: Dynamic Imports für große Komponenten
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />
})

// ❌ Falsch: Alle Komponenten statisch importieren
import HeavyComponent from './HeavyComponent'
\`\`\`

## 🧪 Testing

### Component Tests

\`\`\`typescript
// ✅ Richtig: Testbare Komponenten
export function Button({ children, onClick, variant = 'default' }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }))}
      onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  )
}

// Test
test('Button renders with correct variant', () => {
  render(<Button variant="primary">Click me</Button>)
  expect(screen.getByTestId('button')).toHaveClass('button-primary')
})
\`\`\`

## 📝 Dokumentation

### Komponenten dokumentieren

\`\`\`typescript
/**
 * HeroSection Component
 * 
 * Flexible Hero-Sektion für alle Seitentypen
 * 
 * @param title - Hauptüberschrift (Pflicht)
 * @param variant - Layout-Variante ('default' | 'centered' | 'split')
 * @param size - Größe der Sektion ('sm' | 'md' | 'lg' | 'xl')
 * 
 * @example
 * <HeroSection
 *   title="Willkommen"
 *   variant="centered"
 *   primaryCta={{ text: "Start", href: "/start" }}
 * />
 */
export function HeroSection({ title, variant = 'default', ...props }: HeroSectionProps) {
  // Implementation
}
\`\`\`

## 🔄 Refactoring-Prioritäten

### Phase 1: Komponenten-Konsolidierung
1. Hero Sections vereinheitlichen
2. CTA-Bereiche standardisieren
3. Content-Sections strukturieren

### Phase 2: Performance-Optimierung
1. Bildoptimierung
2. Code-Splitting
3. Lazy Loading

### Phase 3: Qualitätssicherung
1. Tests implementieren
2. Accessibility-Audit
3. SEO-Optimierung

## 📋 Checkliste für neue Komponenten

- [ ] TypeScript Interface definiert
- [ ] Props dokumentiert
- [ ] Responsive Design implementiert
- [ ] Accessibility-Attribute gesetzt
- [ ] Performance optimiert (Bilder, Code)
- [ ] Tests geschrieben
- [ ] Beispiele in Storybook/Docs
- [ ] Code Review durchgeführt

Diese Richtlinien helfen dabei, eine konsistente, wartbare und skalierbare Codebasis zu entwickeln.
