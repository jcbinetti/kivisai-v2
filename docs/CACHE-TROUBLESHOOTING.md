# Cache Troubleshooting Guide

## Häufige Probleme und Lösungen

### 1. ChunkLoadErrors / Build-Fehler

**Symptome:**
- Seiten laden nicht oder zeigen Fehler
- `ChunkLoadError: Loading chunk X failed`
- Build-Prozess schlägt fehl
- Port-Konflikte (3000, 3001, 3002...)

**Sofortige Lösung:**
```bash
# 1. Alle Node-Prozesse beenden
taskkill /f /im node.exe

# 2. Cache und Dependencies löschen
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# 3. Neu installieren
npm install

# 4. Dev-Server starten
npm run dev
```

### 2. Port-Konflikte

**Prüfung:**
```bash
netstat -ano | findstr :3000
```

**Lösung:**
- Alle Node-Prozesse beenden
- Oder spezifischen Port verwenden: `npm run dev -- -p 3001`

### 3. Styling-Probleme

**Häufige Ursachen:**
- Tailwind CSS Cache korrupt
- CSS-Module nicht neu kompiliert

**Lösung:**
```bash
# Tailwind Cache löschen
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

## Präventive Maßnahmen

### 1. Regelmäßige Cache-Bereinigung
```bash
# Wöchentlich ausführen
npm run clean
```

### 2. Package.json Script hinzufügen
```json
{
  "scripts": {
    "clean": "Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue && Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue && npm install",
    "dev-clean": "npm run clean && npm run dev"
  }
}
```

### 3. Monitoring
- Port 3000 regelmäßig prüfen
- Build-Logs überwachen
- Bei ersten Anzeichen von Problemen sofort Cache löschen

## Wann zum Arzt?

Bei folgenden Problemen sofort Cache löschen:
- ✅ ChunkLoadErrors
- ✅ Build-Fehler
- ✅ Port-Konflikte
- ✅ Styling-Probleme
- ✅ Hydration-Fehler

## Backup-Strategie

Vor größeren Änderungen:
```bash
# Backup erstellen
Copy-Item -Recurse .next .next.backup
Copy-Item package-lock.json package-lock.json.backup
```

## Automatisierung

Für automatische Cache-Bereinigung bei Problemen:
```bash
# PowerShell Script: clean-cache.ps1
if (Test-Path .next) {
    Write-Host "Cleaning Next.js cache..."
    Remove-Item -Recurse -Force .next
}
if (Test-Path node_modules) {
    Write-Host "Cleaning node_modules..."
    Remove-Item -Recurse -Force node_modules
}
if (Test-Path package-lock.json) {
    Write-Host "Removing package-lock.json..."
    Remove-Item package-lock.json
}
Write-Host "Installing dependencies..."
npm install
Write-Host "Cache cleanup complete!"
``` 