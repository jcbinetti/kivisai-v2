/**
 * Performance-Optimierungen für KIVISAI Website
 * Verbessert Ladezeiten und Core Web Vitals
 */

// Preload wichtiger Ressourcen
export function preloadCriticalResources() {
  if (typeof document === "undefined") return

  // Preload Hero-Hintergrund
  const preloadLink = document.createElement("link")
  preloadLink.rel = "preload"
  preloadLink.as = "style"
  preloadLink.href = "/styles/hero-background.css"
  document.head.appendChild(preloadLink)

  // Preload wichtige Bilder
  const preloadImage = document.createElement("link")
  preloadImage.rel = "preload"
  preloadImage.as = "image"
  preloadImage.href = "/images/KIVISAI-NETWORK_Data_analyst.png"
  document.head.appendChild(preloadImage)

  // Preload kritische Fonts
  const preloadFont = document.createElement("link")
  preloadFont.rel = "preload"
  preloadFont.as = "font"
  preloadFont.type = "font/woff2"
  preloadFont.href = "/fonts/inter-var.woff2"
  preloadFont.crossOrigin = "anonymous"
  document.head.appendChild(preloadFont)
}

// Optimiere Rendering-Performance
export function optimizeRendering() {
  if (typeof document === "undefined") return

  // Content Visibility API für nicht-kritische Inhalte
  const nonCriticalSections = document.querySelectorAll(".non-critical-section")
  nonCriticalSections.forEach((section) => {
    section.setAttribute("style", "content-visibility: auto; contain-intrinsic-size: 1px 5000px;")
  })

  // Intersection Observer für Lazy Loading
  const lazyImages = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src!
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}

// Optimiere Core Web Vitals
export function optimizeCoreWebVitals() {
  if (typeof document === "undefined") return

  // CLS Optimierung - Reserve Platz für dynamische Inhalte
  const dynamicElements = document.querySelectorAll("[data-dynamic-height]")
  dynamicElements.forEach((element) => {
    const height = element.getAttribute("data-dynamic-height")
    if (height) {
      element.style.minHeight = height
    }
  })

  // FID Optimierung - Event Listener optimieren
  const buttons = document.querySelectorAll("button, a[role='button']")
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Verhindere doppelte Klicks
      if (button.hasAttribute("data-processing")) {
        e.preventDefault()
        return
      }
      button.setAttribute("data-processing", "true")
      setTimeout(() => button.removeAttribute("data-processing"), 1000)
    }, { passive: true })
  })
}

// LCP (Largest Contentful Paint) Optimierung
export function optimizeLCP() {
  if (typeof document === "undefined") return

  // Priorisiere Hero-Bilder
  const heroImages = document.querySelectorAll(".hero img, .hero-image")
  heroImages.forEach((img) => {
    img.setAttribute("fetchpriority", "high")
    img.setAttribute("loading", "eager")
  })

  // Optimiere kritische CSS
  const criticalStyles = document.createElement("style")
  criticalStyles.textContent = CRITICAL_CSS
  document.head.prepend(criticalStyles)
}

// Performance Monitoring
export function initPerformanceMonitoring() {
  if (typeof window === "undefined") return

  // Core Web Vitals Tracking
  if ("web-vitals" in window) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }

  // Custom Performance Marks
  performance.mark("app-init-start")
  window.addEventListener("load", () => {
    performance.mark("app-init-end")
    performance.measure("app-initialization", "app-init-start", "app-init-end")
  })
}

// Inline kritisches CSS
export const CRITICAL_CSS = `
  .bg-kivisai-gradient-ocean {
    background-image: linear-gradient(to right, #1e646e, #0d2c4e);
    will-change: transform;
    backface-visibility: hidden;
  }
  
  .hero-section {
    position: relative;
    overflow: hidden;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  
  @media (min-width: 768px) {
    .hero-section {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
  
  @media (min-width: 1024px) {
    .hero-section {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }

  /* Optimierte Font-Display */
  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: url('/fonts/inter-var.woff2') format('woff2');
  }

  /* Content Visibility für nicht-kritische Bereiche */
  .non-critical-section {
    content-visibility: auto;
    contain-intrinsic-size: 1px 5000px;
  }

  /* Optimierte Button-States */
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid #006666;
    outline-offset: 2px;
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }
`

// Service Worker für Caching
export function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return

  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("SW registered: ", registration)
    })
    .catch((registrationError) => {
      console.log("SW registration failed: ", registrationError)
    })
}

// Bundle-Analyse
export function analyzeBundleSize() {
  if (typeof window === "undefined") return

  // Einfache Bundle-Größen-Analyse
  const scripts = document.querySelectorAll("script[src]")
  let totalSize = 0

  scripts.forEach((script) => {
    const src = script.getAttribute("src")
    if (src && src.includes("chunk")) {
      // Schätze Größe basierend auf URL
      totalSize += 50 // KB Schätzung
    }
  })

  console.log(`Geschätzte Bundle-Größe: ${totalSize}KB`)
  return totalSize
}
