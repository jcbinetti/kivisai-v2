# KIVISAI - Essential Project Copy Script
# Kopiert alle wichtigen Dateien und Testdateien in professionelle Struktur

param(
    [string]$SourceDir = "C:\B_DEV\kivisai\kivisai-clean",
    [string]$TargetDir = "C:\B_DEV\kivisai\kivisai-website-v2"
)

Write-Host "KIVISAI - Essential Project Copy" -ForegroundColor Cyan
Write-Host "Quelle: $SourceDir" -ForegroundColor Blue
Write-Host "Ziel: $TargetDir" -ForegroundColor Blue

# Liste der wichtigsten Dateien im Root
$rootFiles = @(
    "package.json", "package-lock.json", "next.config.js", "tsconfig.json", "tailwind.config.js", "postcss.config.js", 
    ".gitignore", "README.md", "sanity.config.ts", "sanity.cli.ts", ".eslintrc", ".eslintignore"
)

foreach ($file in $rootFiles) {
    $src = Join-Path $SourceDir $file
    if (Test-Path $src) {
        Copy-Item $src -Destination $TargetDir -Force
        Write-Host "Kopiert: $file" -ForegroundColor Green
    }
}

# Wichtige Ordner
$folders = @("app", "components", "lib", "public", "sanity", "styles", "types", "hooks", "scripts", "docs")
foreach ($folder in $folders) {
    $src = Join-Path $SourceDir $folder
    if (Test-Path $src) {
        Copy-Item $src -Destination $TargetDir -Recurse -Force
        Write-Host "Kopiert Ordner: $folder" -ForegroundColor Green
    }
}

# Testdateien in __tests__
$testTarget = Join-Path $TargetDir "__tests__"
if (-not (Test-Path $testTarget)) { New-Item -ItemType Directory -Path $testTarget }
$testFiles = Get-ChildItem -Path $SourceDir -Filter "test*" -File
foreach ($testFile in $testFiles) {
    Copy-Item $testFile.FullName -Destination $testTarget -Force
    Write-Host "Kopiert Testdatei: $($testFile.Name)" -ForegroundColor Yellow
}
# Auch spezielle Testdateien
$specialTests = @("TEST-RESULTS", "TODO-LAUNCH", "tsconfig.jest")
foreach ($file in $specialTests) {
    $src = Join-Path $SourceDir $file
    if (Test-Path $src) {
        Copy-Item $src -Destination $testTarget -Force
        Write-Host "Kopiert Spezialdatei: $file" -ForegroundColor Yellow
    }
}

Write-Host "Alle wichtigen Dateien und Tests wurden kopiert!" -ForegroundColor Green 