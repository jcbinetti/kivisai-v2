#!/bin/bash

# New Design Deployment Script
echo "🎨 Deploying New UX Design..."

# Checkout feature branch
git checkout feature/new-ux-styleguide

# Deploy to Vercel with custom alias
vercel --alias new-ux.kivisai.vercel.app

echo "✅ New Design deployed to: https://new-ux.kivisai.vercel.app"
