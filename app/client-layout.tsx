"use client"

import type React from "react"
import { Suspense, useEffect } from "react"
import dynamic from "next/dynamic"
import SkipLink from "@/components/skip-link"
import ErrorBoundary from "@/components/error-boundary"
import ScrollToTopButton from "@/components/scroll-to-top-button"

// Lazy Loading für schwere Komponenten
const Header = dynamic(() => import("@/components/header"), {
  loading: () => <div className="h-16 bg-white border-b border-gray-200" />
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-32 bg-gray-900" />
})

// Nur in Development laden
const TemplateInspector = dynamic(
  () => import("@/components/design-system/template-inspector").then((m) => ({ default: m.TemplateInspector })),
  { ssr: false, loading: () => null }
)

// Toaster nur bei Bedarf laden
const Toaster = dynamic(() => import("@/components/ui/sonner").then(m => m.Toaster), { 
  ssr: false,
  loading: () => null
})

// Vereinfachte Theme Provider
const ThemeProvider = dynamic(() => import("@/components/theme-provider").then(m => m.ThemeProvider), {
  loading: () => <div className="min-h-screen bg-white" />
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Optimierte Scroll-Behandlung
    if (typeof window !== "undefined") {
      // Nur bei Navigation scrollen
      const handleRouteChange = () => {
        window.scrollTo(0, 0)
      }
      
      // Cleanup
      return () => {
        // Cleanup wenn nötig
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-gray-600">Lade KIVISAI...</p>
            </div>
          </div>
        }>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1 mt-20" role="main">
            {children}
          </main>
          <Footer />
          <ScrollToTopButton />
          
          {/* Nur in Development */}
          {process.env.NODE_ENV === "development" && <TemplateInspector />}
          
          {/* Toaster nur bei Bedarf */}
          <Toaster />
        </Suspense>
      </ThemeProvider>
    </div>
  )
}
