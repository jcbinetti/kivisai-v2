# KIVISAI Internal Linking System

## 🎯 **Übersicht**

Das KIVISAI Internal Linking System ermöglicht es dir, schnell und einfach interne Verlinkungen zwischen allen KIVISAI-Seiten zu erstellen. Mit der intelligenten Vorschlagsliste findest du sofort die richtige Seite.

---

## 🔗 **Verlinkungs-Typen**

### **1. KIVISAI Services**
- **Verlinkung zu:** Alle Leistungen und Services
- **Beispiele:** KI-Coaching, INQA-Coaching, KI-Potenzialanalyse
- **URL-Pattern:** `/leistungen/[service-slug]`

### **2. Blog Articles**
- **Verlinkung zu:** Alle Blog-Artikel im Wissens-Hub
- **Beispiele:** "KI für Selbstständige", "Digitalisierung im Mittelstand"
- **URL-Pattern:** `/wissens-hub/blog/[article-slug]`

### **3. Use Cases**
- **Verlinkung zu:** Alle Praxisbeispiele und Anwendungsfälle
- **Beispiele:** "KI-Potenzial-Landkarte", "Handwerker-LI-Assistent"
- **URL-Pattern:** `/use-cases/[usecase-slug]`

### **4. About Pages**
- **Verlinkung zu:** Alle Über-KIVISAI-Seiten
- **Vorschlagsliste:**
  - Über KIVISAI (`/ueber-kivisai`)
  - Bedeutung (`/ueber-kivisai/bedeutung`)
  - Methode (`/ueber-kivisai/methode`)
  - Prinzipien (`/ueber-kivisai/prinzipien`)
  - Team & Netzwerk (`/ueber-kivisai/team-netzwerk`)

### **5. Contact & Booking**
- **Verlinkung zu:** Kontakt- und Buchungsseiten
- **Vorschlagsliste:**
  - Kontakt (`/kontakt`)
  - Termin buchen (`/termin`)
  - Newsletter (`/kontakt/newsletter`)

### **6. Knowledge Hub**
- **Verlinkung zu:** Alle Wissens-Hub-Bereiche
- **Vorschlagsliste:**
  - Wissens-Hub (`/wissens-hub`)
  - Blog (`/wissens-hub/blog`)
  - Downloads (`/wissens-hub/downloads`)
  - Events (`/wissens-hub/events`)
  - Glossar (`/wissens-hub/glossar`)

---

## 🎨 **KIVISAI Design Integration**

### **Link-Styling**
- **Farbe:** KIVISAI Clear Turquoise (`#00B4D8`)
- **Hover:** KIVISAI Deep Dark Blue (`#1E3A8A`)
- **Unterstrichen:** Für bessere Sichtbarkeit
- **Font-Weight:** Medium für bessere Lesbarkeit

### **Verlinkungs-Beispiele**
```html
<!-- Service-Link -->
<a href="/leistungen/ki-coaching" class="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium">
  KI-Coaching für Ihr Unternehmen
</a>

<!-- Blog-Link -->
<a href="/wissens-hub/blog/ki-fuer-selbststaendige" class="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium">
  Mehr über KI für Selbstständige
</a>

<!-- About-Link -->
<a href="/ueber-kivisai/methode" class="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium">
  Unsere KIVISAI-Methode
</a>
```

---

## 📝 **Verwendung im Sanity Studio**

### **Schritt 1: Text markieren**
1. Wähle den Text aus, der verlinkt werden soll
2. Klicke auf das Link-Symbol in der Toolbar

### **Schritt 2: Link-Typ wählen**
- **External URL:** Für externe Links
- **Internal Link:** Für KIVISAI-interne Verlinkungen

### **Schritt 3: Kategorie auswählen**
Wähle eine der 6 Kategorien:
- KIVISAI Services
- Blog Articles
- Use Cases
- About Pages
- Contact & Booking
- Knowledge Hub

### **Schritt 4: Spezifische Seite wählen**
- **Services:** Dropdown mit allen verfügbaren Services
- **Blog:** Dropdown mit allen Blog-Artikeln
- **Use Cases:** Dropdown mit allen Use Cases
- **About/Contact/Knowledge:** Vordefinierte Listen

### **Schritt 5: Optional anpassen**
- **Custom Link Text:** Eigener Text für den Link
- **Open in new tab:** Link in neuem Tab öffnen

---

## 🎯 **Content-Strategie mit Internal Linking**

### **SEO-Vorteile**
- **Bessere Indexierung:** Google findet alle Seiten
- **Reduced Bounce Rate:** Besucher bleiben länger
- **Topic Clusters:** Zusammenhängende Inhalte
- **Page Authority:** Stärkere interne Seiten

### **User Experience**
- **Navigation:** Einfache Orientierung
- **Discovery:** Besucher finden relevante Inhalte
- **Engagement:** Mehr Interaktion mit der Website
- **Conversion:** Bessere Lead-Generierung

### **KIVISAI-spezifische Verlinkungs-Strategie**

#### **Service-Artikel verlinken**
```
"Erfahren Sie mehr über unser KI-Coaching in unserem detaillierten Guide."
→ Link zu: KI-Coaching Service
```

#### **Blog-Artikel verlinken**
```
"Lesen Sie unseren Artikel über KI für Selbstständige."
→ Link zu: Blog-Artikel "KI für Selbstständige"
```

#### **Use Cases verlinken**
```
"Sehen Sie, wie wir einem Handwerksbetrieb geholfen haben."
→ Link zu: Use Case "Handwerker-LI-Assistent"
```

#### **About-Pages verlinken**
```
"Lernen Sie unsere KIVISAI-Methode kennen."
→ Link zu: /ueber-kivisai/methode
```

---

## 🔧 **Technische Implementation**

### **Schema-Struktur**
```typescript
interface InternalLink {
  linkType: 'services' | 'blog' | 'usecases' | 'about' | 'contact' | 'knowledge'
  service?: Reference // Für Services
  blogPost?: Reference // Für Blog-Artikel
  useCase?: Reference // Für Use Cases
  aboutPage?: string // Für About-Pages
  contactPage?: string // Für Contact-Pages
  knowledgePage?: string // Für Knowledge-Pages
  customText?: string // Optionaler Link-Text
  openInNewTab?: boolean // Neuer Tab
}
```

### **URL-Generierung**
```typescript
const getInternalUrl = (linkData: InternalLink) => {
  switch (linkData.linkType) {
    case 'services':
      return `/leistungen/${linkData.service?.slug?.current}`
    case 'blog':
      return `/wissens-hub/blog/${linkData.blogPost?.slug?.current}`
    case 'usecases':
      return `/use-cases/${linkData.useCase?.slug?.current}`
    case 'about':
      return linkData.aboutPage
    case 'contact':
      return linkData.contactPage
    case 'knowledge':
      return linkData.knowledgePage
  }
}
```

### **Frontend-Rendering**
```tsx
const InternalLinkComponent = ({ value, children }) => {
  const url = getInternalUrl(value)
  const linkText = value.customText || children
  
  return (
    <a
      href={url}
      target={value.openInNewTab ? '_blank' : '_self'}
      className="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium"
    >
      {linkText}
    </a>
  )
}
```

---

## 📊 **Best Practices**

### **Verlinkungs-Regeln**
1. **Relevanz:** Nur thematisch passende Links
2. **Kontext:** Links müssen zum Inhalt passen
3. **Anker-Text:** Beschreibende Link-Texte
4. **Balance:** Nicht zu viele Links pro Artikel

### **KIVISAI-spezifische Regeln**
1. **Service-Links:** Immer mit Call-to-Action
2. **Blog-Links:** Für weiterführende Informationen
3. **Use Case-Links:** Für Praxisbeispiele
4. **About-Links:** Für Vertrauensbildung

### **Link-Dichte**
- **Optimal:** 2-3 interne Links pro 1000 Wörter
- **Maximum:** 5 interne Links pro Artikel
- **Qualität:** Besser wenige relevante als viele schwache Links

---

## 🚀 **Nächste Schritte**

### **Erweiterte Features**
1. **Link-Analytics:** Tracking der Klick-Raten
2. **Broken Link Detection:** Automatische Überprüfung
3. **Link-Suggestions:** KI-basierte Vorschläge
4. **Link-Preview:** Vorschau der Zielseite

### **Integration**
1. **SEO-Tools:** Integration mit Google Analytics
2. **Content Calendar:** Planung von Verlinkungen
3. **A/B Testing:** Verschiedene Link-Strategien
4. **Performance Tracking:** Impact auf Conversions

---

**Fazit:** Das KIVISAI Internal Linking System macht es einfach, professionelle interne Verlinkungen zu erstellen, die sowohl SEO als auch User Experience verbessern - alles im Einklang mit dem KIVISAI Design System. 