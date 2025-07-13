import { monitoring } from "./monitoring"

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export class ApiClient {
  private baseUrl: string

  constructor(baseUrl = "") {
    this.baseUrl = baseUrl
  }

  async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const startTime = performance.now()
    const url = `${this.baseUrl}${endpoint}`

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        signal: AbortSignal.timeout(10000), // 10 second timeout
      })

      const endTime = performance.now()
      monitoring.measureApiCall(url, startTime, endTime, response.ok)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      const endTime = performance.now()
      monitoring.measureApiCall(url, startTime, endTime, false)

      monitoring.logError({
        message: `API Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        level: "error",
        context: {
          endpoint,
          method: options.method || "GET",
          duration: endTime - startTime,
        },
      })

      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  async post<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async postFormData<T = any>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: formData,
      headers: {}, // Don't set Content-Type for FormData
    })
  }

  async get<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" })
  }
}

export const apiClient = new ApiClient()
