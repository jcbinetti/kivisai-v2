// KIVISAI Service Worker
// Verbessert Performance durch intelligentes Caching

const CACHE_NAME = 'kivisai-v1.0.0'
const STATIC_CACHE = 'kivisai-static-v1.0.0'
const DYNAMIC_CACHE = 'kivisai-dynamic-v1.0.0'

// Kritische Assets für sofortiges Laden
const CRITICAL_ASSETS = [
  '/',
  '/offline',
  '/images/KIVISAI_logo_TR.png',
  '/images/KIVISAI_signet_tr.png',
  '/styles/hero-background.css',
]

// Statische Assets für Caching
const STATIC_ASSETS = [
  '/leistungen',
  '/loesungen',
  '/use-cases',
  '/wissens-hub',
  '/ueber-kivisai',
  '/evalkit',
  '/kontakt',
  '/termin',
  '/images/KIVISAI-NETWORK_Data_analyst.png',
  '/images/KIVISAI_Schatzkarte.png',
  '/fonts/inter-var.woff2',
]

// API-Endpunkte die gecacht werden sollen
const CACHEABLE_APIS = [
  '/api/sitemap',
  '/api/robots',
]

// Install Event - Cache kritische Assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    Promise.all([
      // Cache kritische Assets
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching critical assets')
        return cache.addAll(CRITICAL_ASSETS)
      }),
      
      // Cache statische Assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
    ])
  )
  
  // Sofort aktivieren
  self.skipWaiting()
})

// Activate Event - Cleanup alte Caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  
  // Sofort Kontrolle übernehmen
  self.clients.claim()
})

// Fetch Event - Intelligentes Caching
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Nur GET-Requests cachen
  if (request.method !== 'GET') {
    return
  }
  
  // API-Routes
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request))
    return
  }
  
  // Statische Assets
  if (isStaticAsset(url.pathname)) {
    event.respondWith(handleStaticAsset(request))
    return
  }
  
  // HTML-Seiten
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(handleHtmlRequest(request))
    return
  }
  
  // Bilder
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
    return
  }
  
  // Fonts
  if (request.destination === 'font') {
    event.respondWith(handleFontRequest(request))
    return
  }
  
  // CSS/JS
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(handleResourceRequest(request))
    return
  }
})

// API Request Handler
async function handleApiRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)
  const url = new URL(request.url)
  
  // Prüfe ob API gecacht werden soll
  if (CACHEABLE_APIS.some(api => url.pathname.startsWith(api))) {
    try {
      // Network First für APIs
      const response = await fetch(request)
      if (response.ok) {
        cache.put(request, response.clone())
      }
      return response
    } catch (error) {
      // Fallback zu Cache
      const cachedResponse = await cache.match(request)
      if (cachedResponse) {
        return cachedResponse
      }
      throw error
    }
  }
  
  // Normale API-Requests
  return fetch(request)
}

// Static Asset Handler
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE)
  
  try {
    // Cache First für statische Assets
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    // Fallback zu kritischen Assets
    const criticalCache = await caches.open(CACHE_NAME)
    const fallbackResponse = await criticalCache.match('/offline')
    return fallbackResponse || new Response('Offline', { status: 503 })
  }
}

// HTML Request Handler
async function handleHtmlRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)
  
  try {
    // Network First für HTML
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    // Fallback zu Cache
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Offline-Seite
    const offlineResponse = await cache.match('/offline')
    return offlineResponse || new Response('Offline', { status: 503 })
  }
}

// Image Request Handler
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)
  
  try {
    // Cache First für Bilder
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    // Fallback zu Placeholder
    return new Response('', { status: 404 })
  }
}

// Font Request Handler
async function handleFontRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  
  try {
    // Cache First für Fonts
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    throw error
  }
}

// Resource Request Handler (CSS/JS)
async function handleResourceRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  
  try {
    // Cache First für CSS/JS
    const cachedResponse = await cache.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    throw error
  }
}

// Helper Functions
function isStaticAsset(pathname) {
  return STATIC_ASSETS.some(asset => pathname.startsWith(asset))
}

// Background Sync für Offline-Funktionalität
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Hier können Offline-Aktionen synchronisiert werden
    console.log('Service Worker: Background sync completed')
  } catch (error) {
    console.error('Service Worker: Background sync failed:', error)
  }
}

// Push Notifications (falls benötigt)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data?.text() || 'Neue Nachricht von KIVISAI',
    icon: '/images/KIVISAI_signet_tr.png',
    badge: '/images/KIVISAI_signet_tr.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ansehen',
        icon: '/images/KIVISAI_signet_tr.png'
      },
      {
        action: 'close',
        title: 'Schließen',
        icon: '/images/KIVISAI_signet_tr.png'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification('KIVISAI', options)
  )
})

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Message Handler für Client-Kommunikation
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
}) 