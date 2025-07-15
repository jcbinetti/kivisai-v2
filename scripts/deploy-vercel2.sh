#!/bin/bash

# Vercel 2 Deployment Script for Unix/Linux
# This script handles deployment to Vercel 2 with proper environment setup

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}🔍 $1${NC}"
}

print_step() {
    echo -e "${GRAY}  - $1${NC}"
}

# Parse command line arguments
ENVIRONMENT="production"
FORCE=false
PREVIEW=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --environment|-e)
            ENVIRONMENT="$2"
            shift 2
            ;;
        --force|-f)
            FORCE=true
            shift
            ;;
        --preview|-p)
            PREVIEW=true
            shift
            ;;
        --help|-h)
            echo "Usage: $0 [OPTIONS]"
            echo "Options:"
            echo "  -e, --environment ENV  Set deployment environment (default: production)"
            echo "  -f, --force            Skip tests and force deployment"
            echo "  -p, --preview          Deploy to preview environment"
            echo "  -h, --help             Show this help message"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            exit 1
            ;;
    esac
done

echo -e "${GREEN}🚀 Starting Vercel 2 Deployment...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
else
    VERCEL_VERSION=$(vercel --version)
    print_status "Vercel CLI found: $VERCEL_VERSION"
fi

# Set environment variables
export NEXT_TELEMETRY_DISABLED=1
export NODE_ENV=production

# Pre-deployment checks
print_info "Running pre-deployment checks..."

# Type check
print_step "Running TypeScript check..."
if ! npm run type-check; then
    print_error "TypeScript check failed"
    exit 1
fi

# Lint check
print_step "Running ESLint check..."
if ! npm run lint; then
    print_error "ESLint check failed"
    exit 1
fi

# Test check (if not forced)
if [ "$FORCE" = false ]; then
    print_step "Running tests..."
    if ! npm run test; then
        print_error "Tests failed"
        exit 1
    fi
fi

# Build check
print_step "Running build check..."
if ! npm run build; then
    print_error "Build failed"
    exit 1
fi

print_status "All pre-deployment checks passed!"

# Determine deployment type
DEPLOY_ARGS=""

if [ "$PREVIEW" = true ]; then
    print_info "Deploying to preview environment..."
    DEPLOY_ARGS="--preview"
else
    print_info "Deploying to production environment..."
    DEPLOY_ARGS="--prod"
fi

if [ "$FORCE" = true ]; then
    DEPLOY_ARGS="$DEPLOY_ARGS --force"
fi

# Add environment-specific settings
DEPLOY_ARGS="$DEPLOY_ARGS --yes"

# Execute deployment
print_info "Deploying to Vercel 2..."
echo "Executing: vercel deploy $DEPLOY_ARGS"

if vercel deploy $DEPLOY_ARGS; then
    print_status "Deployment successful!"
    
    # Get deployment URL
    DEPLOYMENT_URL=$(vercel ls --json | jq -r '.[] | select(.state == "READY") | .url' | head -1)
    if [ -n "$DEPLOYMENT_URL" ]; then
        echo -e "${BLUE}🌐 Deployment URL: https://$DEPLOYMENT_URL${NC}"
    fi
    
    # Post-deployment checks
    print_info "Running post-deployment checks..."
    
    # Performance check
    print_step "Running performance check..."
    npm run performance-check || print_warning "Performance check failed (non-critical)"
    
    # Health check
    print_step "Running health check..."
    npm run health-check || print_warning "Health check failed (non-critical)"
    
    print_status "Deployment completed successfully!"
    
else
    print_error "Deployment failed"
    exit 1
fi

echo -e "${GREEN}✨ Vercel 2 deployment process completed!${NC}" 