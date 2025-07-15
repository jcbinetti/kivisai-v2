# KIVISAI Admin Guide

## 🔐 **Admin-Zugang**

### **URL:**
```
http://localhost:3002/admin
```

### **Login-Daten:**
- **Passwort:** `1234qwer` (aus .env.local: `ADMIN_PASSWORD=1234qwer`)
- **Alternative:** Environment Variable `NEXT_PUBLIC_ADMIN_PASSWORD`

---

## 🎯 **Admin Dashboard Features**

### **1. Sanity Studio Zugang**
- **Direkter Link:** Ein-Klick-Öffnung von Sanity Studio
- **URL:** `http://localhost:3333`
- **Funktionen:** Artikel erstellen, bearbeiten, verwalten

### **2. Content Management**
- **Blog-Artikel:** Erstellen, bearbeiten, kategorisieren
- **Custom Blocks:** Buttons, Callouts, Quotes, Social Share
- **Internal Linking:** Intelligente Verlinkungen zwischen Seiten
- **Rich Text:** Listen, Links, Formatierung

### **3. System Status**
- **Website:** Online/Offline Status
- **Sanity Studio:** Verfügbarkeit prüfen
- **Content Stats:** Anzahl Artikel und Kategorien
- **Performance:** System-Überwachung

---

## 📝 **Sanity Studio Features**

### **Verfügbare Custom Blocks:**

#### **Button Block**
- **Styles:** Primary (KIVISAI Turquoise), Secondary (Dark Blue), Outline
- **Features:** Custom Text, URL, neuer Tab
- **Design:** KIVISAI Corporate Colors

#### **Callout Box**
- **Typen:** Info (Blau), Success (Grün), Warning (Orange), Tip (KIVISAI Turquoise)
- **Features:** Titel, Rich-Text-Inhalt, farbkodierte Rahmen

#### **Quote Block**
- **Styles:** Standard, Large, With Background
- **Features:** Autor, Quelle, KIVISAI-Design

#### **Social Share Block**
- **Platforms:** LinkedIn, Twitter, Facebook, Instagram
- **Features:** Custom Text, Hashtags, automatisches Sharing

#### **Internal Linking System**
- **6 Kategorien:** Services, Blog, Use Cases, About, Contact, Knowledge
- **Vorschlagslisten:** Dropdown-Menüs mit allen Seiten
- **KIVISAI Design:** Turquoise Links mit Hover-Effekten

---

## 🎨 **KIVISAI Design Integration**

### **Farbschema:**
- **Primary:** KIVISAI Clear Turquoise (`#00B4D8`)
- **Secondary:** KIVISAI Deep Dark Blue (`#1E3A8A`)
- **Accent:** KIVISAI Vibrant Turquoise (`#00D4FF`)
- **Text:** KIVISAI Moss Green (`#4A5568`)

### **Link-Styling:**
```css
.text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium
```

---

## 🔧 **Technische Details**

### **Admin Security:**
- **Passwortschutz:** Client-side mit Environment Variable
- **No Index:** `robots: 'noindex, nofollow'` im Layout
- **Session:** Client-side State Management

### **Sanity Studio:**
- **Port:** 3333
- **URL:** `http://localhost:3333`
- **Status:** ✅ Online und funktionsfähig
- **Version:** 3.98.1

### **Frontend Integration:**
- **Port:** 3002/3003
- **URL:** `http://localhost:3002`
- **Next.js:** 15.x mit App Router
- **Tailwind CSS:** KIVISAI Design System

---

## 📊 **Content Workflow**

### **1. Artikel erstellen:**
1. **Admin Dashboard** → "Sanity Studio" klicken
2. **Sanity Studio** → "Post" → "Create new"
3. **Felder ausfüllen:**
   - Title, Slug, Excerpt
   - Main Image (mit Alt-Text)
   - Categories
   - Body (Rich Text mit Custom Blocks)

### **2. Custom Blocks hinzufügen:**
1. **Rich Text Editor** → "+" Symbol
2. **Block wählen:** Button, Callout, Quote, Social Share
3. **Konfigurieren:** Styling, Content, Links

### **3. Interne Links erstellen:**
1. **Text markieren** → Link-Symbol
2. **"Internal Link"** wählen
3. **Kategorie** auswählen
4. **Spezifische Seite** aus Dropdown wählen

### **4. Artikel veröffentlichen:**
1. **Publish** in Sanity Studio
2. **Frontend** → Automatische Aktualisierung (SSR)
3. **Testen:** Artikel auf Website prüfen

---

## 🚀 **Quick Actions**

### **Admin Dashboard:**
- **"Neuen Artikel erstellen"** → Direkt zu Sanity Studio
- **"Blog anzeigen"** → Frontend Blog-Übersicht
- **"Website anzeigen"** → Hauptseite

### **Sanity Studio:**
- **Content Types:** Post, Author, Category, Event
- **Custom Blocks:** Alle neuen Features verfügbar
- **Media Library:** Bilder mit Optimierung

---

## 🔍 **Troubleshooting**

### **Sanity Studio nicht erreichbar:**
```bash
cd sanity/kivisai
npm run dev -- --port 3333
```

### **Admin Passwort vergessen:**
- **Check:** `.env.local` → `ADMIN_PASSWORD`
- **Default:** `1234qwer`

### **Custom Blocks nicht verfügbar:**
- **Restart:** Sanity Studio neu starten
- **Check:** Schema-Dateien korrekt importiert

### **Links funktionieren nicht:**
- **Check:** Internal Link Schema korrekt
- **Verify:** URL-Generierung in Frontend

---

## 📈 **Monitoring & Analytics**

### **System Status:**
- **Website:** Online/Offline
- **Sanity Studio:** Verfügbarkeit
- **Content:** Artikel- und Kategorie-Anzahl
- **Performance:** Ladezeiten

### **Content Metrics:**
- **Blog Posts:** 4 Artikel verfügbar
- **Categories:** 6 Kategorien (THINK, ENABLE, SHARE, GROW, REFLECT, Use Case)
- **Authors:** Verfügbare Autoren
- **Media:** Optimierte Bilder

---

## 🔐 **Security Best Practices**

### **Admin-Zugang:**
- **Starkes Passwort:** Komplexe Kombination verwenden
- **HTTPS:** In Produktion immer HTTPS
- **Session Timeout:** Automatische Abmeldung
- **Access Logs:** Zugriffe protokollieren

### **Content Security:**
- **Input Validation:** Alle Eingaben validieren
- **XSS Protection:** Sanitize User Input
- **CSRF Protection:** Cross-Site Request Forgery Schutz

---

## 🎯 **Nächste Schritte**

### **Geplante Features:**
1. **User Management:** Mehrere Admin-Benutzer
2. **Analytics Dashboard:** Detaillierte Statistiken
3. **Content Calendar:** Planungstool
4. **Automated Backups:** Automatische Sicherungen
5. **Performance Monitoring:** Real-time Metrics

### **Optimierungen:**
1. **Caching:** Bessere Performance
2. **CDN:** Content Delivery Network
3. **Image Optimization:** Automatische Bildoptimierung
4. **SEO Tools:** Erweiterte SEO-Funktionen

---

**Fazit:** Das KIVISAI Admin System bietet einen sicheren, benutzerfreundlichen Zugang zu allen Content-Management-Funktionen mit nahtloser Integration in das KIVISAI Design System. 