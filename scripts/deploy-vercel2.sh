#!/bin/bash

# KIVISAI Vercel 2 Deployment Script
echo "🚀 Deploying KIVISAI to Vercel 2..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "Starting Vercel 2 deployment process..."

# Step 1: Clean and install dependencies
print_status "Step 1: Cleaning and installing dependencies..."
npm run clean 2>/dev/null || npm install

# Step 2: Build the project
print_status "Step 2: Building project for production..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed! Please check the errors above."
    exit 1
fi

print_status "Build completed successfully!"

# Step 3: Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Step 4: Deploy to Vercel
print_status "Step 3: Deploying to Vercel..."
print_warning "Make sure you have set all environment variables in Vercel dashboard!"

# Deploy with production flag
vercel --prod

if [ $? -eq 0 ]; then
    print_status "✅ Deployment completed successfully!"
    print_status "🌐 Your site should be available at: https://www.kivisai.com"
    print_status "📊 Check Vercel dashboard for deployment details"
else
    print_error "❌ Deployment failed! Please check the errors above."
    exit 1
fi

# Step 5: Post-deployment checklist
echo ""
print_status "📋 Post-deployment checklist:"
echo "   [ ] Visit https://www.kivisai.com"
echo "   [ ] Test contact form at /kontakt"
echo "   [ ] Test newsletter signup"
echo "   [ ] Test EVALKIT at /evalkit"
echo "   [ ] Test admin area at /admin"
echo "   [ ] Check all API endpoints"
echo "   [ ] Verify mobile responsiveness"
echo "   [ ] Test performance with Lighthouse"

print_status "🎉 Vercel 2 deployment process completed!"
print_status "📚 For detailed information, see: docs/VERCEL-2-DEPLOYMENT-GUIDE.md" 