# KIVISAI Cache Cleanup Script
# Verwendung: .\scripts\clean-cache.ps1

Write-Host "🧹 KIVISAI Cache Cleanup gestartet..." -ForegroundColor Cyan

# Alle Node-Prozesse beenden
Write-Host "📋 Beende alle Node-Prozesse..." -ForegroundColor Yellow
taskkill /f /im node.exe 2>$null

# Next.js Cache löschen
if (Test-Path .next) {
    Write-Host "🗑️ Lösche Next.js Cache (.next)..." -ForegroundColor Red
    Remove-Item -Recurse -Force .next
} else {
    Write-Host "✅ Next.js Cache bereits gelöscht" -ForegroundColor Green
}

# Node modules löschen
if (Test-Path node_modules) {
    Write-Host "🗑️ Lösche node_modules..." -ForegroundColor Red
    Remove-Item -Recurse -Force node_modules
} else {
    Write-Host "✅ node_modules bereits gelöscht" -ForegroundColor Green
}

# Package-lock.json löschen
if (Test-Path package-lock.json) {
    Write-Host "🗑️ Lösche package-lock.json..." -ForegroundColor Red
    Remove-Item package-lock.json
} else {
    Write-Host "✅ package-lock.json bereits gelöscht" -ForegroundColor Green
}

# Dependencies neu installieren
Write-Host "📦 Installiere Dependencies neu..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Cache-Bereinigung erfolgreich abgeschlossen!" -ForegroundColor Green
    Write-Host "🚀 Starte Dev-Server mit: npm run dev" -ForegroundColor Cyan
} else {
    Write-Host "❌ Fehler bei der Installation. Bitte manuell prüfen." -ForegroundColor Red
} 