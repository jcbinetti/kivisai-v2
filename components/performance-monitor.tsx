"use client"

import { useEffect } from "react"
import { monitoring } from "@/lib/monitoring"
import { 
  preloadCriticalResources, 
  optimizeRendering, 
  optimizeCoreWebVitals, 
  optimizeLCP,
  initPerformanceMonitoring,
  registerServiceWorker,
  analyzeBundleSize
} from "@/lib/performance-optimization"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Start monitoring page load performance
    monitoring.measurePageLoad()

    // Performance-Optimierungen initialisieren
    preloadCriticalResources()
    optimizeRendering()
    optimizeCoreWebVitals()
    optimizeLCP()
    initPerformanceMonitoring()

    // Service Worker registrieren
    registerServiceWorker()

    // Bundle-Größe analysieren
    const bundleSize = analyzeBundleSize()

    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "web-vitals" in window) {
      import("web-vitals").then((mod) => {
        const getCLS = (mod as any).getCLS;
        const getFID = (mod as any).getFID;
        const getFCP = (mod as any).getFCP;
        const getLCP = (mod as any).getLCP;
        const getTTFB = (mod as any).getTTFB;
        
        // CLS (Cumulative Layout Shift)
        getCLS((metric: any) => {
          monitoring.logPerformance({
            name: "cumulative_layout_shift",
            value: metric.value,
            context: { 
              rating: metric.rating,
              target: 0.1,
              category: "Core Web Vitals"
            },
          })
          
          // Warnung bei schlechtem CLS
          if (metric.value > 0.1) {
            console.warn(`CLS zu hoch: ${metric.value.toFixed(3)}`)
          }
        })

        // FID (First Input Delay)
        getFID((metric: any) => {
          monitoring.logPerformance({
            name: "first_input_delay",
            value: metric.value,
            context: { 
              rating: metric.rating,
              target: 100,
              category: "Core Web Vitals"
            },
          })
          
          // Warnung bei schlechtem FID
          if (metric.value > 100) {
            console.warn(`FID zu hoch: ${metric.value.toFixed(0)}ms`)
          }
        })

        // FCP (First Contentful Paint)
        getFCP((metric: any) => {
          monitoring.logPerformance({
            name: "first_contentful_paint",
            value: metric.value,
            context: { 
              rating: metric.rating,
              target: 1800,
              category: "Core Web Vitals"
            },
          })
          
          // Warnung bei schlechtem FCP
          if (metric.value > 1800) {
            console.warn(`FCP zu hoch: ${metric.value.toFixed(0)}ms`)
          }
        })

        // LCP (Largest Contentful Paint)
        getLCP((metric: any) => {
          monitoring.logPerformance({
            name: "largest_contentful_paint",
            value: metric.value,
            context: { 
              rating: metric.rating,
              target: 2500,
              category: "Core Web Vitals"
            },
          })
          
          // Warnung bei schlechtem LCP
          if (metric.value > 2500) {
            console.warn(`LCP zu hoch: ${metric.value.toFixed(0)}ms`)
          }
        })

        // TTFB (Time to First Byte)
        getTTFB((metric: any) => {
          monitoring.logPerformance({
            name: "time_to_first_byte",
            value: metric.value,
            context: { 
              rating: metric.rating,
              target: 600,
              category: "Core Web Vitals"
            },
          })
          
          // Warnung bei schlechtem TTFB
          if (metric.value > 600) {
            console.warn(`TTFB zu hoch: ${metric.value.toFixed(0)}ms`)
          }
        })
      })
      .catch((error) => {
        console.warn("Failed to load web-vitals:", error)
      })
    }

    // Zusätzliche Performance-Metriken
    if (typeof window !== "undefined") {
      // DOM Content Loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const domLoadTime = performance.now()
          monitoring.logPerformance({
            name: "dom_content_loaded",
            value: domLoadTime,
            context: { category: "Page Load" }
          })
        })
      }

      // Window Load
      window.addEventListener('load', () => {
        const loadTime = performance.now()
        monitoring.logPerformance({
          name: "window_load",
          value: loadTime,
          context: { category: "Page Load" }
        })

        // Resource Timing API
        if ('performance' in window && 'getEntriesByType' in performance) {
          const resources = performance.getEntriesByType('resource')
          resources.forEach((resource: any) => {
            if (resource.initiatorType === 'img' && resource.duration > 1000) {
              console.warn(`Langsames Bild: ${resource.name} (${resource.duration.toFixed(0)}ms)`)
            }
          })
        }

        // Memory Usage (falls verfügbar)
        if ('memory' in performance) {
          const memory = (performance as any).memory
          monitoring.logPerformance({
            name: "memory_usage",
            value: memory.usedJSHeapSize / 1024 / 1024, // MB
            context: { 
              category: "Memory",
              total: memory.totalJSHeapSize / 1024 / 1024,
              limit: memory.jsHeapSizeLimit / 1024 / 1024
            }
          })
        }
      })

      // Intersection Observer für Lazy Loading Performance
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const loadTime = performance.now()
            monitoring.logPerformance({
              name: "lazy_load",
              value: loadTime,
              context: { 
                category: "Lazy Loading",
                element: entry.target.tagName
              }
            })
          }
        })
      })

      // Beobachte alle Bilder für Lazy Loading
      const images = document.querySelectorAll('img[loading="lazy"]')
      images.forEach(img => observer.observe(img))

      // Network Information API (falls verfügbar)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        monitoring.logPerformance({
          name: "network_info",
          value: connection.effectiveType === '4g' ? 1 : 0,
          context: { 
            category: "Network",
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt
          }
        })
      }

      // Service Worker Status
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          monitoring.logPerformance({
            name: "service_worker_status",
            value: 1,
            context: { 
              category: "Service Worker",
              active: !!registration.active,
              installing: !!registration.installing,
              waiting: !!registration.waiting
            }
          })
        }).catch(() => {
          monitoring.logPerformance({
            name: "service_worker_status",
            value: 0,
            context: { category: "Service Worker", error: "Registration failed" }
          })
        })
      }

      // Error Tracking
      window.addEventListener('error', (event) => {
        monitoring.logError({
          message: event.message
        })
      })

      // Unhandled Promise Rejections
      window.addEventListener('unhandledrejection', (event) => {
        monitoring.logError({
          message: 'Unhandled Promise Rejection'
        })
      })
    }

    // Cleanup
    return () => {
      // Cleanup Observer falls vorhanden
      if (typeof window !== "undefined") {
        const observer = (window as any).__performanceObserver
        if (observer) {
          observer.disconnect()
        }
      }
    }
  }, [])

  return null // This component doesn't render anything
}
