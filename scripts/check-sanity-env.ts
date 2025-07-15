// scripts/check-sanity-env.ts
const fs = require('fs')
const path = require('path')

const ENV_PATHS = [
  path.join(process.cwd(), '.env.local'),
  path.join(process.cwd(), 'sanity', 'kivisai', '.env.local'),
]

const VERCEL_ENV_VARS = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
  'SANITY_API_TOKEN',
]

/**
 * @param {any} filePath
 */
function parseEnvFile(filePath: any) {
  if (!fs.existsSync(filePath)) return {}
  const content = fs.readFileSync(filePath, 'utf-8')
  return Object.fromEntries(
    content
      .split('\n')
      .filter((line: any) => line.trim() && !line.trim().startsWith('#'))
      .map((line: any) => {
        const [key, ...rest] = line.split('=')
        return [key.trim(), rest.join('=').trim()]
      })
  )
}

function checkSanityEnv() {
  let found = false
  for (const envPath of ENV_PATHS) {
    if (fs.existsSync(envPath)) {
      found = true
      console.log(`\nPrüfe: ${envPath}`)
      const envVars = parseEnvFile(envPath)
      for (const key of VERCEL_ENV_VARS) {
        if (envVars[key]) {
          console.log(`✅ ${key} = ${envVars[key]}`)
        } else {
          console.warn(`❌ ${key} NICHT gesetzt!`)
        }
      }
    }
  }
  if (!found) {
    console.warn('⚠️  Keine .env.local Datei gefunden!')
  }
  console.log('\nVergleiche diese Werte mit den Vercel-Umgebungsvariablen im Dashboard!')
}

checkSanityEnv() 