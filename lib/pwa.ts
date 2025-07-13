// Progressive Web App utilities
export class PWAManager {
  private deferredPrompt: any = null

  initialize() {
    if (typeof window === "undefined") return

    // Register service worker
    this.registerServiceWorker()

    // Handle install prompt
    this.setupInstallPrompt()

    // Handle app updates
    this.setupUpdateHandler()
  }

  private async registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js")
        console.log("Service Worker registered:", registration)

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                this.showUpdateAvailable()
              }
            })
          }
        })
      } catch (error) {
        console.error("Service Worker registration failed:", error)
      }
    }
  }

  private setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      this.deferredPrompt = e
      this.showInstallButton()
    })

    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed")
      this.hideInstallButton()
    })
  }

  private setupUpdateHandler() {
    navigator.serviceWorker?.addEventListener("controllerchange", () => {
      window.location.reload()
    })
  }

  async promptInstall() {
    if (!this.deferredPrompt) return false

    this.deferredPrompt.prompt()
    const { outcome } = await this.deferredPrompt.userChoice

    if (outcome === "accepted") {
      console.log("User accepted the install prompt")
    }

    this.deferredPrompt = null
    return outcome === "accepted"
  }

  private showInstallButton() {
    // Show install button in UI
    const event = new CustomEvent("pwa-install-available")
    window.dispatchEvent(event)
  }

  private hideInstallButton() {
    // Hide install button in UI
    const event = new CustomEvent("pwa-install-completed")
    window.dispatchEvent(event)
  }

  private showUpdateAvailable() {
    // Show update notification
    const event = new CustomEvent("pwa-update-available")
    window.dispatchEvent(event)
  }

  async updateApp() {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
    }
  }
}

export const pwa = new PWAManager()
