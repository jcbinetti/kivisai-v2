# KIVISAI Vercel 2 Deployment Script (PowerShell)
Write-Host "🚀 Deploying KIVISAI to Vercel 2..." -ForegroundColor Green

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "package.json not found. Please run this script from the project root."
    exit 1
}

Write-Status "Starting Vercel 2 deployment process..."

# Step 1: Clean and install dependencies
Write-Status "Step 1: Cleaning and installing dependencies..."
try {
    npm run clean 2>$null
} catch {
    npm install
}

# Step 2: Build the project
Write-Status "Step 2: Building project for production..."
$buildResult = npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed! Please check the errors above."
    exit 1
}

Write-Status "Build completed successfully!"

# Step 3: Check if Vercel CLI is installed
try {
    vercel --version | Out-Null
} catch {
    Write-Warning "Vercel CLI not found. Installing..."
    npm install -g vercel
}

# Step 4: Deploy to Vercel
Write-Status "Step 3: Deploying to Vercel..."
Write-Warning "Make sure you have set all environment variables in Vercel dashboard!"

# Deploy with production flag
$deployResult = vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Status "✅ Deployment completed successfully!"
    Write-Status "🌐 Your site should be available at: https://www.kivisai.com"
    Write-Status "📊 Check Vercel dashboard for deployment details"
} else {
    Write-Error "❌ Deployment failed! Please check the errors above."
    exit 1
}

# Step 5: Post-deployment checklist
Write-Host ""
Write-Status "📋 Post-deployment checklist:"
Write-Host "   [ ] Visit https://www.kivisai.com"
Write-Host "   [ ] Test contact form at /kontakt"
Write-Host "   [ ] Test newsletter signup"
Write-Host "   [ ] Test EVALKIT at /evalkit"
Write-Host "   [ ] Test admin area at /admin"
Write-Host "   [ ] Check all API endpoints"
Write-Host "   [ ] Verify mobile responsiveness"
Write-Host "   [ ] Test performance with Lighthouse"

Write-Status "🎉 Vercel 2 deployment process completed!"
Write-Status "📚 For detailed information, see: docs/VERCEL-2-DEPLOYMENT-GUIDE.md" 