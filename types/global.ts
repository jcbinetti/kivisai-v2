// Global TypeScript Types
export interface ServiceType {
  id: string
  title: string
  duration: string
  description: string
  calLink: string
  features: string[]
}

export interface ContactFormData {
  vorname: string
  nachname: string
  email: string
  organisation?: string
  nachricht: string
  datenschutz: boolean
}

export interface BookingData extends ContactFormData {
  company: string
  phone: string
  service: string
  message: string
  preferredDate: string
  preferredTime: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
