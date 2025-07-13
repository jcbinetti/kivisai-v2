# ServiceCard Komponente

Die `ServiceCard` ist eine wiederverwendbare Komponente im KIVISAI Design-System für die Darstellung von Service-Leistungen mit einheitlichem Design und Animationen.

## Verwendung

```tsx
import { ServiceCard } from "@/components/ui/service-card"
import { Lightbulb } from "lucide-react"

<ServiceCard
  number="1"
  title="KI-Potenzial-Check"
  subtitle="In nur 10 Tagen zur klaren Entscheidungsgrundlage"
  description="Wir analysieren Ihre Prozesse, zeigen Sofort-Hebel für Kostensenkung und Umsatzwachstum auf und liefern eine verständliche Kosten-Nutzen-Bewertung – risikofrei und praxisnah."
  icon={Lightbulb}
  href="/leistungen/ki-potenzialanalyse"
  variant="primary"
/>
```

## Props

| Prop | Typ | Beschreibung | Standard |
|------|-----|--------------|----------|
| `number` | `string` | Nummer der Service-Karte | - |
| `title` | `string` | Titel der Service-Karte | - |
| `subtitle` | `string` | Untertitel/Badge-Text | - |
| `description` | `string` | Beschreibungstext | - |
| `icon` | `LucideIcon` | Lucide Icon-Komponente | - |
| `href` | `string` | Link-Ziel | - |
| `variant` | `"primary" \| "secondary" \| "tertiary"` | Design-Variante | `"primary"` |
| `className` | `string` | Zusätzliche CSS-Klassen | `""` |

## Varianten

### Primary (Standard)
- **Farben**: KIVISAI Clear Turquoise → Vibrant Turquoise
- **Verwendung**: Hauptleistungen, erste Priorität

### Secondary
- **Farben**: KIVISAI Vibrant Turquoise → Deep Dark Blue
- **Verwendung**: Zweitrangige Leistungen

### Tertiary
- **Farben**: KIVISAI Deep Dark Blue → Clear Turquoise
- **Verwendung**: Ergänzende Leistungen

## Design-Features

### Animationen
- **Hover-Effekt**: Karte hebt sich nach oben (`hover:-translate-y-2`)
- **Icon-Animation**: Icon vergrößert sich beim Hover (`group-hover:scale-110`)
- **Button-Animation**: Button vergrößert sich und Pfeil bewegt sich (`hover:scale-105`, `group-hover:translate-x-1`)
- **Schatten-Effekt**: Schatten wird beim Hover verstärkt (`hover:shadow-2xl`)

### Visuelle Elemente
- **Gradient-Hintergründe**: Subtile Farbverläufe für jede Variante
- **Rounded Corners**: Abgerundete Ecken für modernes Design
- **Icon-Container**: Gradient-Hintergrund für Icons mit abgerundeten Ecken
- **Badge-Styling**: Subtitle wird als Badge mit Hintergrundfarbe dargestellt

## Beispiele

### Startseite
Die ServiceCard wird auf der Startseite für die drei Hauptleistungen verwendet:

1. **KI-Potenzial-Check** (Primary)
2. **KI-Sprint-Prototyp** (Secondary)
3. **Strategie- & Umsetzungscoaching** (Tertiary)

### Showcase
Eine vollständige Demo ist verfügbar unter:
```tsx
import { ServiceCardShowcase } from "@/components/design-system/service-card-showcase"
```

## Best Practices

1. **Konsistente Nummerierung**: Verwende aufeinanderfolgende Nummern
2. **Kurze Titel**: Halte Titel kurz und prägnant
3. **Aussagekräftige Subtitles**: Verwende Subtitles für Zeitangaben oder kurze Beschreibungen
4. **Passende Icons**: Wähle Icons, die zum Service passen
5. **Varianten-Rotation**: Verwende verschiedene Varianten für visuelle Abwechslung

## Technische Details

- **Framework**: React mit TypeScript
- **Styling**: Tailwind CSS mit KIVISAI Farbpalette
- **Icons**: Lucide React Icons
- **Animationen**: CSS Transitions und Transforms
- **Zugänglichkeit**: ARIA-Labels und semantische HTML-Struktur 