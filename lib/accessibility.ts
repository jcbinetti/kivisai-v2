// Accessibility Helper Functions
export const ARIA_LABELS = {
  navigation: {
    main: "Hauptnavigation",
    mobile: "Mobile Navigation",
    breadcrumb: "Breadcrumb Navigation",
    skip: "Zum Hauptinhalt springen",
  },
  buttons: {
    menu: "Menü öffnen/schließen",
    booking: "Termin buchen",
    contact: "Kontakt aufnehmen",
    submit: "Formular absenden",
    close: "Schließen",
    back: "Zurück",
    next: "Weiter",
    previous: "Vorherige",
  },
  forms: {
    required: "Pflichtfeld",
    email: "E-Mail-Adresse eingeben",
    message: "Ihre Nachricht eingeben",
    name: "Vor- und Nachname eingeben",
    phone: "Telefonnummer eingeben",
    company: "Firmenname eingeben",
  },
  content: {
    loading: "Lädt...",
    error: "Fehler aufgetreten",
    success: "Erfolgreich",
    warning: "Warnung",
    info: "Information",
  },
  media: {
    play: "Video abspielen",
    pause: "Video pausieren",
    stop: "Video stoppen",
    volume: "Lautstärke",
    mute: "Stummschalten",
    fullscreen: "Vollbildmodus",
  },
} as const

export const SCREEN_READER_ONLY = "sr-only absolute -inset-px w-px h-px overflow-hidden whitespace-nowrap border-0"

export function announceToScreenReader(message: string) {
  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", "polite")
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = SCREEN_READER_ONLY
  announcement.textContent = message
  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Focus Management
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  })
}

// Keyboard Navigation
export function handleKeyboardNavigation(event: KeyboardEvent, onEnter?: () => void, onEscape?: () => void) {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      onEnter?.()
      break
    case 'Escape':
      event.preventDefault()
      onEscape?.()
      break
  }
}

// Color Contrast Checker
export function checkColorContrast(foreground: string, background: string): number {
  // Einfache Kontrast-Berechnung (WCAG 2.1)
  const getLuminance = (color: string) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255
    
    const [rs, gs, bs] = [r, g, b].map(c => {
      if (c <= 0.03928) return c / 12.92
      return Math.pow((c + 0.055) / 1.055, 2.4)
    })
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }
  
  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

// Accessibility Validator
export function validateAccessibility(element: HTMLElement): string[] {
  const issues: string[] = []
  
  // Prüfe Alt-Texte für Bilder
  const images = element.querySelectorAll('img')
  images.forEach((img, index) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Bild ${index + 1} hat keinen Alt-Text`)
    }
  })
  
  // Prüfe Label für Formulare
  const inputs = element.querySelectorAll('input, select, textarea')
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id')
    const label = element.querySelector(`label[for="${id}"]`)
    const ariaLabel = input.getAttribute('aria-label')
    
    if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
      issues.push(`Input ${index + 1} hat kein Label`)
    }
  })
  
  // Prüfe Heading-Hierarchie
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let previousLevel = 0
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1))
    if (level > previousLevel + 1) {
      issues.push(`Heading-Hierarchie übersprungen: ${heading.tagName} nach h${previousLevel}`)
    }
    previousLevel = level
  })
  
  // Prüfe Focus-Indikatoren
  const focusableElements = element.querySelectorAll('button, a, input, select, textarea')
  focusableElements.forEach((el, index) => {
    const style = window.getComputedStyle(el)
    if (style.outline === 'none' && !el.classList.contains('focus-visible')) {
      issues.push(`Element ${index + 1} hat keinen sichtbaren Focus-Indikator`)
    }
  })
  
  return issues
}

// Skip Link Generator
export function createSkipLink(targetId: string, text: string = "Zum Hauptinhalt springen") {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
  skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-kivisai-deep-dark-blue text-white px-4 py-2 rounded z-50'
  skipLink.setAttribute('tabindex', '0')
  
  return skipLink
}

// Live Region für dynamische Inhalte
export function createLiveRegion(politeness: 'polite' | 'assertive' = 'polite') {
  const liveRegion = document.createElement('div')
  liveRegion.setAttribute('aria-live', politeness)
  liveRegion.setAttribute('aria-atomic', 'true')
  liveRegion.className = SCREEN_READER_ONLY
  
  return liveRegion
}

// ARIA-Label Generator
export function generateAriaLabel(baseText: string, context?: string): string {
  if (!context) return baseText
  return `${baseText}, ${context}`
}

// Focus Restoration
export function saveFocus() {
  const activeElement = document.activeElement as HTMLElement
  if (activeElement) {
    activeElement.setAttribute('data-previous-focus', 'true')
  }
}

export function restoreFocus() {
  const previousFocus = document.querySelector('[data-previous-focus]') as HTMLElement
  if (previousFocus) {
    previousFocus.focus()
    previousFocus.removeAttribute('data-previous-focus')
  }
}

// Accessibility Announcements
export const ACCESSIBILITY_ANNOUNCEMENTS = {
  formSubmitted: "Formular erfolgreich abgesendet",
  formError: "Fehler beim Absenden des Formulars",
  loadingStarted: "Lädt Inhalte",
  loadingFinished: "Inhalte geladen",
  navigationOpened: "Navigation geöffnet",
  navigationClosed: "Navigation geschlossen",
  modalOpened: "Dialog geöffnet",
  modalClosed: "Dialog geschlossen",
  tabActivated: (tabName: string) => `Tab ${tabName} aktiviert`,
  accordionExpanded: (sectionName: string) => `${sectionName} erweitert`,
  accordionCollapsed: (sectionName: string) => `${sectionName} eingeklappt`,
} as const

// High Contrast Mode Detection
export function isHighContrastMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Prüfe CSS Media Query
  const mediaQuery = window.matchMedia('(prefers-contrast: high)')
  return mediaQuery.matches
}

// Reduced Motion Detection
export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

// Accessibility Event Listeners
export function setupAccessibilityListeners() {
  if (typeof document === 'undefined') return
  
  // Skip Link Funktionalität
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation')
    }
  })
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation')
  })
  
  // Focus Management für Modals
  const modals = document.querySelectorAll('[role="dialog"]')
  modals.forEach(modal => {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length > 0) {
      trapFocus(modal as HTMLElement)
    }
  })
}

// Accessibility Utilities für React
export const accessibilityUtils = {
  // Button mit korrekter ARIA-Rolle
  createAccessibleButton: (props: {
    onClick: () => void
    children: React.ReactNode
    'aria-label'?: string
    disabled?: boolean
  }) => ({
    role: 'button',
    tabIndex: props.disabled ? -1 : 0,
    'aria-label': props['aria-label'],
    'aria-disabled': props.disabled,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!props.disabled) {
          props.onClick()
        }
      }
    },
    onClick: props.disabled ? undefined : props.onClick,
    children: props.children,
  }),
  
  // Link mit korrekter ARIA-Rolle
  createAccessibleLink: (props: {
    href: string
    children: React.ReactNode
    'aria-label'?: string
    external?: boolean
  }) => ({
    href: props.href,
    'aria-label': props['aria-label'],
    ...(props.external && {
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-describedby': 'external-link-description',
    }),
    children: (
      <>
        {props.children}
        {props.external && (
          <span id="external-link-description" className={SCREEN_READER_ONLY}>
            (Öffnet in neuem Tab)
          </span>
        )}
      </>
    ),
  }),
}
