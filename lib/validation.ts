import { z } from "zod"

// Validation Schemas für bessere Type Safety und Validierung
export const contactFormSchema = z.object({
  vorname: z.string().min(1, "Vorname ist erforderlich").max(50, "Vorname zu lang"),
  nachname: z.string().min(1, "Nachname ist erforderlich").max(50, "Nachname zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  organisation: z.string().max(100, "Organisation zu lang").optional(),
  nachricht: z.string().min(10, "Nachricht zu kurz").max(1000, "Nachricht zu lang"),
  datenschutz: z.boolean().refine((val) => val === true, "Datenschutz muss akzeptiert werden"),
})

export const newsletterFormSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  vorname: z.string().max(50, "Vorname zu lang").optional(),
  nachname: z.string().max(50, "Nachname zu lang").optional(),
  organisation: z.string().max(100, "Organisation zu lang").optional(),
  interessen: z.string().max(500, "Interessen zu lang").optional(),
  datenschutz: z.boolean().refine((val) => val === true, "Datenschutz muss akzeptiert werden"),
})

export const bookingFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich").max(100, "Name zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().max(100, "Unternehmen zu lang").optional(),
  phone: z.string().max(20, "Telefonnummer zu lang").optional(),
  service: z.enum(["allgemein", "ki-potenzialanalyse", "ki-prototyping", "inqa-coaching"]),
  message: z.string().max(1000, "Nachricht zu lang").optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  datenschutz: z.boolean().refine((val) => val === true, "Datenschutz muss akzeptiert werden"),
})

// Input Sanitization
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
    .replace(/[<>]/g, "") // Remove < and > characters
    .substring(0, 1000) // Limit length
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

// Erweiterte Validierungsfunktionen mit besserer Typisierung
export interface ValidationResult {
  isValid: boolean
  error?: string
}

export function validateRequired(value: unknown): ValidationResult {
  const isValid = !(value === undefined || value === null || (typeof value === "string" && value.trim() === ""))
  return {
    isValid,
    error: isValid ? undefined : "Dieses Feld ist erforderlich",
  }
}

export function validateMinLength(value: string, min: number): ValidationResult {
  const isValid = typeof value === "string" && value.trim().length >= min
  return {
    isValid,
    error: isValid ? undefined : `Mindestens ${min} Zeichen erforderlich`,
  }
}

export function validateMaxLength(value: string, max: number): ValidationResult {
  const isValid = typeof value === "string" && value.trim().length <= max
  return {
    isValid,
    error: isValid ? undefined : `Maximal ${max} Zeichen erlaubt`,
  }
}

export function validateEmail(email: string): ValidationResult {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  return {
    isValid,
    error: isValid ? undefined : "Ungültige E-Mail-Adresse",
  }
}

export function validatePhone(phone: string): ValidationResult {
  const isValid = /^(\+|00)?[0-9\s\-$$$$]{6,20}$/.test(phone.trim())
  return {
    isValid,
    error: isValid ? undefined : "Ungültige Telefonnummer",
  }
}

export function validateUrl(url: string): ValidationResult {
  try {
    new URL(url.trim())
    return { isValid: true }
  } catch {
    return {
      isValid: false,
      error: "Ungültige URL",
    }
  }
}

// Composite Validierung für komplexe Formulare
export function validateContactForm(data: any): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  const nameValidation = validateRequired(data.name)
  if (!nameValidation.isValid) errors.name = nameValidation.error!

  const emailValidation = validateEmail(data.email || "")
  if (!emailValidation.isValid) errors.email = emailValidation.error!

  const messageValidation = validateRequired(data.message)
  if (!messageValidation.isValid) errors.message = messageValidation.error!

  if (data.phone) {
    const phoneValidation = validatePhone(data.phone)
    if (!phoneValidation.isValid) errors.phone = phoneValidation.error!
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
