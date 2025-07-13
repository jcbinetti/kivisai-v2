# KIVISAI - Essential Root Files Copy Script
# Kopiert alle wichtigen Root-Dateien in professionelle Struktur

param(
    [string]$SourceDir = "C:\B_DEV\kivisai\kivisai-clean",
    [string]$TargetDir = "C:\B_DEV\kivisai\kivisai-website-v2"
)

Write-Host "KIVISAI - Essential Root Files Copy" -ForegroundColor Cyan
Write-Host "Quelle: $SourceDir" -ForegroundColor Blue
Write-Host "Ziel: $TargetDir" -ForegroundColor Blue

# Liste der wichtigsten Root-Dateien
$rootFiles = @(
    "package.json", "package-lock.json", "next.config.js", "tsconfig.json", "tailwind.config.js", "postcss.config.js", 
    ".gitignore", "README.md", "sanity.config.ts", "sanity.cli.ts", ".eslintrc", ".eslintignore", "jest.config.js", "jest.setup.js", "tsconfig.jest"
)

foreach ($file in $rootFiles) {
    $src = Join-Path $SourceDir $file
    if (Test-Path $src) {
        Copy-Item $src -Destination $TargetDir -Force
        Write-Host "Kopiert: $file" -ForegroundColor Green
    }
}

Write-Host "Alle wichtigen Root-Dateien wurden kopiert!" -ForegroundColor Green 