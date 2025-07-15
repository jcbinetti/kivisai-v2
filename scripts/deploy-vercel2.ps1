# Vercel 2 Deployment Script for PowerShell
# This script handles deployment to Vercel 2 with proper environment setup

param(
    [string]$Environment = "production",
    [switch]$Force,
    [switch]$Preview
)

Write-Host "🚀 Starting Vercel 2 Deployment..." -ForegroundColor Green

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Set environment variables
$env:NEXT_TELEMETRY_DISABLED = "1"
$env:NODE_ENV = "production"

# Pre-deployment checks
Write-Host "🔍 Running pre-deployment checks..." -ForegroundColor Blue

# Type check
Write-Host "  - Running TypeScript check..." -ForegroundColor Gray
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript check failed" -ForegroundColor Red
    exit 1
}

# Lint check
Write-Host "  - Running ESLint check..." -ForegroundColor Gray
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ESLint check failed" -ForegroundColor Red
    exit 1
}

# Test check (if not forced)
if (-not $Force) {
    Write-Host "  - Running tests..." -ForegroundColor Gray
    npm run test
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Tests failed" -ForegroundColor Red
        exit 1
    }
}

# Build check
Write-Host "  - Running build check..." -ForegroundColor Gray
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ All pre-deployment checks passed!" -ForegroundColor Green

# Determine deployment type
$deployArgs = @()

if ($Preview) {
    Write-Host "📋 Deploying to preview environment..." -ForegroundColor Yellow
    $deployArgs += "--preview"
} else {
    Write-Host "🚀 Deploying to production environment..." -ForegroundColor Green
    $deployArgs += "--prod"
}

if ($Force) {
    $deployArgs += "--force"
}

# Add environment-specific settings
$deployArgs += "--yes"

# Execute deployment
Write-Host "🌐 Deploying to Vercel 2..." -ForegroundColor Blue
try {
    $deployCommand = "vercel deploy " + ($deployArgs -join " ")
    Write-Host "Executing: $deployCommand" -ForegroundColor Gray
    Invoke-Expression $deployCommand
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Deployment successful!" -ForegroundColor Green
        
        # Get deployment URL
        $deploymentUrl = vercel ls --json | ConvertFrom-Json | Where-Object { $_.state -eq "READY" } | Select-Object -First 1 | ForEach-Object { $_.url }
        if ($deploymentUrl) {
            Write-Host "🌐 Deployment URL: https://$deploymentUrl" -ForegroundColor Cyan
        }
        
        # Post-deployment checks
        Write-Host "🔍 Running post-deployment checks..." -ForegroundColor Blue
        
        # Performance check
        Write-Host "  - Running performance check..." -ForegroundColor Gray
        npm run performance-check
        
        # Health check
        Write-Host "  - Running health check..." -ForegroundColor Gray
        npm run health-check
        
        Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
        
    } else {
        Write-Host "❌ Deployment failed" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Deployment error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "✨ Vercel 2 deployment process completed!" -ForegroundColor Green 