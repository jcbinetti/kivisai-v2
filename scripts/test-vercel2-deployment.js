#!/usr/bin/env node

/**
 * Vercel 2 Deployment Test Script
 * Tests the deployment configuration and identifies potential issues
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

function log(message, color = 'white') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  try {
    if (fs.existsSync(filePath)) {
      log(`✅ ${description}`, 'green');
      return true;
    } else {
      log(`❌ ${description} - File not found`, 'red');
      return false;
    }
  } catch (error) {
    log(`❌ ${description} - Error: ${error.message}`, 'red');
    return false;
  }
}

function checkPackageJson() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check required scripts
    const requiredScripts = ['build', 'dev', 'start'];
    const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);
    
    if (missingScripts.length > 0) {
      log(`❌ Missing required scripts: ${missingScripts.join(', ')}`, 'red');
      return false;
    }
    
    // Check deployment scripts
    const deploymentScripts = ['deploy:vercel2', 'deploy:vercel2:unix'];
    const missingDeploymentScripts = deploymentScripts.filter(script => !packageJson.scripts[script]);
    
    if (missingDeploymentScripts.length > 0) {
      log(`⚠️  Missing deployment scripts: ${missingDeploymentScripts.join(', ')}`, 'yellow');
    }
    
    log('✅ Package.json configuration', 'green');
    return true;
  } catch (error) {
    log(`❌ Package.json error: ${error.message}`, 'red');
    return false;
  }
}

function checkVercelConfig() {
  try {
    const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
    
    // Check required fields
    const requiredFields = ['version', 'framework', 'buildCommand'];
    const missingFields = requiredFields.filter(field => !vercelConfig[field]);
    
    if (missingFields.length > 0) {
      log(`❌ Missing required vercel.json fields: ${missingFields.join(', ')}`, 'red');
      return false;
    }
    
    // Check framework
    if (vercelConfig.framework !== 'nextjs') {
      log(`⚠️  Framework should be 'nextjs', found: ${vercelConfig.framework}`, 'yellow');
    }
    
    log('✅ Vercel configuration', 'green');
    return true;
  } catch (error) {
    log(`❌ Vercel config error: ${error.message}`, 'red');
    return false;
  }
}

function checkEnvironmentVariables() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_SITE_URL',
    'BREVO_API_KEY',
    'BREVO_CONTACT_LIST_ID',
    'GC_USERNAME',
    'GC_PASSWORD',
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'SANITY_API_TOKEN',
    'OPENAI_API_KEY'
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    log(`⚠️  Missing environment variables: ${missingVars.join(', ')}`, 'yellow');
    log('   These should be set in Vercel dashboard for production', 'cyan');
    return false;
  }
  
  log('✅ Environment variables', 'green');
  return true;
}

function checkNextConfig() {
  try {
    const nextConfigPath = 'next.config.mjs';
    if (!fs.existsSync(nextConfigPath)) {
      log('❌ Next.js configuration file not found', 'red');
      return false;
    }
    
    const configContent = fs.readFileSync(nextConfigPath, 'utf8');
    
    // Check for Vercel 2 optimizations
    const optimizations = [
      'turbo',
      'optimizePackageImports',
      'optimizeCss',
      'serverComponentsExternalPackages',
      'bundlePagesExternals'
    ];
    
    const missingOptimizations = optimizations.filter(opt => !configContent.includes(opt));
    
    if (missingOptimizations.length > 0) {
      log(`⚠️  Missing Vercel 2 optimizations: ${missingOptimizations.join(', ')}`, 'yellow');
    }
    
    log('✅ Next.js configuration', 'green');
    return true;
  } catch (error) {
    log(`❌ Next.js config error: ${error.message}`, 'red');
    return false;
  }
}

function checkDeploymentScripts() {
  const scripts = [
    { path: 'scripts/deploy-vercel2.ps1', name: 'PowerShell deployment script' },
    { path: 'scripts/deploy-vercel2.sh', name: 'Unix deployment script' }
  ];
  
  let allExist = true;
  scripts.forEach(script => {
    if (!checkFile(script.path, script.name)) {
      allExist = false;
    }
  });
  
  return allExist;
}

function checkVercelIgnore() {
  return checkFile('.vercelignore', 'Vercel ignore file');
}

function checkDocumentation() {
  return checkFile('docs/VERCEL-2-DEPLOYMENT-GUIDE.md', 'Deployment documentation');
}

function main() {
  log('🚀 Vercel 2 Deployment Configuration Test', 'cyan');
  log('==========================================', 'cyan');
  
  const checks = [
    { name: 'Package.json', fn: checkPackageJson },
    { name: 'Vercel Configuration', fn: checkVercelConfig },
    { name: 'Next.js Configuration', fn: checkNextConfig },
    { name: 'Deployment Scripts', fn: checkDeploymentScripts },
    { name: 'Vercel Ignore File', fn: checkVercelIgnore },
    { name: 'Documentation', fn: checkDocumentation },
    { name: 'Environment Variables', fn: checkEnvironmentVariables }
  ];
  
  let passed = 0;
  let total = checks.length;
  
  checks.forEach(check => {
    log(`\n🔍 Testing ${check.name}...`, 'blue');
    if (check.fn()) {
      passed++;
    }
  });
  
  log('\n📊 Test Results', 'cyan');
  log('==============', 'cyan');
  log(`Passed: ${passed}/${total}`, passed === total ? 'green' : 'yellow');
  
  if (passed === total) {
    log('\n🎉 All tests passed! Your Vercel 2 configuration is ready for deployment.', 'green');
    log('\nNext steps:', 'cyan');
    log('1. Set up environment variables in Vercel dashboard', 'white');
    log('2. Run: npm run deploy:vercel2 (Windows) or npm run deploy:vercel2:unix (Unix)', 'white');
    log('3. Monitor deployment in Vercel dashboard', 'white');
  } else {
    log('\n⚠️  Some tests failed. Please fix the issues above before deploying.', 'yellow');
    log('\nFor detailed information, see: docs/VERCEL-2-DEPLOYMENT-GUIDE.md', 'cyan');
  }
  
  log('\n✨ Test completed!', 'cyan');
}

// Run the test
if (require.main === module) {
  main();
}

module.exports = {
  checkFile,
  checkPackageJson,
  checkVercelConfig,
  checkEnvironmentVariables,
  checkNextConfig,
  checkDeploymentScripts,
  checkVercelIgnore,
  checkDocumentation
}; 