"use client"

import React from "react"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
  level?: "page" | "component" | "critical"
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // Log to external service in production
    if (process.env.NODE_ENV === "production") {
      // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
      this.logErrorToService(error, errorInfo)
    }

    this.setState({ errorInfo })
  }

  private logErrorToService(error: Error, errorInfo: React.ErrorInfo) {
    // Implementation for external error logging
    console.log("Would log to external service:", { error, errorInfo })
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      const level = this.props.level || "component"

      return (
        <div
          className={`flex items-center justify-center bg-kivisai-pure-white p-4 ${
            level === "page" ? "min-h-screen" : "min-h-[200px]"
          }`}
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-md w-full text-center">
            <AlertTriangle
              className={`text-red-500 mx-auto mb-4 ${level === "page" ? "w-16 h-16" : "w-8 h-8"}`}
              aria-hidden="true"
            />

            <h1 className={`font-bold text-kivisai-deep-dark-blue mb-2 ${level === "page" ? "text-2xl" : "text-lg"}`}>
              {level === "critical" ? "Kritischer Fehler" : "Etwas ist schiefgelaufen"}
            </h1>

            <p className="text-kivisai-moss-green mb-6">
              {level === "critical"
                ? "Ein kritischer Fehler ist aufgetreten. Bitte laden Sie die Seite neu."
                : "Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten."}
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-4 text-left bg-gray-100 p-3 rounded text-sm">
                <summary className="cursor-pointer font-medium">Fehlerdetails (Development)</summary>
                <pre className="mt-2 whitespace-pre-wrap text-xs">{this.state.error.stack}</pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button
                onClick={this.resetError}
                className="bg-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise text-white"
                aria-label="Komponente neu laden"
              >
                <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                Erneut versuchen
              </Button>

              {level === "page" && (
                <Button
                  asChild
                  variant="outline"
                  className="border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-light-cool-gray"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                    Zur Startseite
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// HOC für einfache Verwendung
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  level: "page" | "component" | "critical" = "component",
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary level={level}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
}

export default ErrorBoundary
