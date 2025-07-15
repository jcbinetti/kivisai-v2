# Vercel 2 Deployment Guide

This guide covers deploying the KIVISAI website to Vercel 2 with optimized performance and configuration.

## 🚀 Quick Start

### Prerequisites

1. **Vercel CLI Installation**
   ```bash
   npm install -g vercel
   ```

2. **Environment Variables Setup**
   - Set up all required environment variables in Vercel dashboard
   - See `lib/config.ts` for required variables

3. **Vercel Account**
   - Create account at [vercel.com](https://vercel.com)
   - Link your GitHub repository

### Deployment Commands

#### Windows (PowerShell)
```powershell
# Production deployment
npm run deploy:vercel2

# Preview deployment
npm run deploy:vercel2 -- --preview

# Force deployment (skip tests)
npm run deploy:vercel2 -- --force
```

#### Unix/Linux/macOS
```bash
# Production deployment
npm run deploy:vercel2:unix

# Preview deployment
npm run deploy:vercel2:unix -- --preview

# Force deployment (skip tests)
npm run deploy:vercel2:unix -- --force
```

#### Manual Deployment
```bash
# Install dependencies
npm install

# Build project
npm run build

# Deploy to Vercel
vercel --prod
```

## ⚙️ Configuration

### Vercel Configuration (`vercel.json`)

The project includes a comprehensive `vercel.json` configuration with:

- **Framework Detection**: Automatically detects Next.js
- **Build Commands**: Optimized build process
- **Function Runtime**: Node.js 20.x for API routes
- **Security Headers**: Comprehensive security configuration
- **Caching**: Optimized cache headers for static assets
- **Redirects**: SEO-friendly redirects
- **Rewrites**: API endpoint routing

### Environment Variables

Required environment variables (set in Vercel dashboard):

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Brevo (Email Marketing)
BREVO_API_KEY=your_brevo_api_key
BREVO_CONTACT_LIST_ID=your_contact_list_id
BREVO_TEAM_EMAIL=info@kivisai.com
BREVO_SENDER_EMAIL=team@kivisai.com

# Graph Commons
GC_USERNAME=your_username
GC_PASSWORD=your_password
GRAPH_COMMONS_DEFAULT_GRAPH_ID=your_graph_id

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# OpenAI
OPENAI_API_KEY=your_openai_key

# Cal.com
NEXT_PUBLIC_CAL_URL=https://cal.com/your-username

# Feature Flags
NEXT_PUBLIC_NEW_COLORS=true
NEXT_PUBLIC_NEW_TYPOGRAPHY=true
NEXT_PUBLIC_NEW_COMPONENTS=true
NEXT_PUBLIC_FULL_NEW_DESIGN=true
NEXT_PUBLIC_COMING_SOON_MODE=false

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_ga_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
NEXT_PUBLIC_MATOMO_URL=your_matomo_url
NEXT_PUBLIC_MATOMO_SITE_ID=your_matomo_site_id

# Admin (Optional)
ADMIN_LOGIN=admin
ADMIN_PASSWORD=secure_password

# CRM (Optional)
CRM_API_KEY=your_crm_key
CRM_BASE_URL=your_crm_url
CRM_PROVIDER=your_crm_provider

# Error Monitoring (Optional)
SENTRY_DSN=your_sentry_dsn
```

## 🔧 Next.js Configuration

The `next.config.mjs` is optimized for Vercel 2 with:

### Vercel 2 Features
- **Turbo**: Enhanced build performance
- **Package Optimization**: Optimized imports for Radix UI and other packages
- **CSS Optimization**: Aggressive CSS optimization
- **Image Optimization**: WebP/AVIF support with aggressive caching

### Performance Optimizations
- **Bundle Splitting**: Optimized chunk splitting
- **Tree Shaking**: Enabled for smaller bundles
- **Image Optimization**: Multiple formats and sizes
- **Caching**: Aggressive caching strategies

### Security Headers
- **HSTS**: Strict transport security
- **XSS Protection**: Cross-site scripting protection
- **Content Security Policy**: Restricted content policies
- **Frame Options**: Clickjacking protection

## 📊 Performance Monitoring

### Built-in Monitoring
- **Vercel Analytics**: Automatic performance tracking
- **Core Web Vitals**: Real-time monitoring
- **Function Monitoring**: API route performance

### Custom Monitoring
```bash
# Performance check
npm run performance-check

# Health check
npm run health-check

# Full audit
npm run full-audit
```

## 🔍 Pre-deployment Checks

The deployment scripts automatically run:

1. **TypeScript Check**: Type safety verification
2. **ESLint Check**: Code quality verification
3. **Test Suite**: Unit and integration tests
4. **Build Verification**: Production build test

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

#### Environment Variables
- Verify all required variables are set in Vercel dashboard
- Check variable names match `lib/config.ts`
- Ensure no trailing spaces in values

#### API Route Issues
- Check function runtime in `vercel.json`
- Verify API route file structure
- Check environment variable access

#### Image Optimization
- Verify image domains in `next.config.mjs`
- Check image format support
- Ensure proper image sizing

### Debug Commands

```bash
# Local build test
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test

# Performance analysis
npm run analyze
```

## 📈 Optimization Tips

### Bundle Size
- Use dynamic imports for large components
- Optimize package imports
- Enable tree shaking

### Images
- Use WebP/AVIF formats
- Implement responsive images
- Optimize image sizes

### Caching
- Leverage Vercel's edge caching
- Use appropriate cache headers
- Implement stale-while-revalidate

### SEO
- Implement proper meta tags
- Use structured data
- Optimize for Core Web Vitals

## 🔄 CI/CD Integration

### GitHub Actions
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Environment Setup
1. Generate Vercel token in dashboard
2. Add secrets to GitHub repository
3. Configure deployment triggers

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel 2 Features](https://vercel.com/docs/concepts/functions/vercel-2)
- [Performance Optimization](https://vercel.com/docs/concepts/performance)

## 🆘 Support

For deployment issues:
1. Check Vercel dashboard logs
2. Review build output
3. Verify environment variables
4. Test locally with `npm run build`

For configuration questions:
- Review `lib/config.ts` for environment setup
- Check `next.config.mjs` for build configuration
- Consult Vercel documentation for platform-specific features 