#!/bin/bash

# Legacy Design Deployment Script
echo "🔄 Deploying Legacy Design..."

# Checkout legacy branch
git checkout legacy-design

# Deploy to Vercel with custom alias
vercel --prod --alias legacy-design.kivisai.vercel.app

echo "✅ Legacy Design deployed to: https://legacy-design.kivisai.vercel.app"
