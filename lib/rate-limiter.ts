// Simple in-memory rate limiter (für Production sollte Redis verwendet werden)
const requests = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  identifier: string,
  maxRequests = 5,
  windowMs = 60000, // 1 minute
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const windowStart = now - windowMs

  // Clean old entries
  for (const [key, value] of requests.entries()) {
    if (value.resetTime < now) {
      requests.delete(key)
    }
  }

  const current = requests.get(identifier)

  if (!current || current.resetTime < now) {
    requests.set(identifier, { count: 1, resetTime: now + windowMs })
    return { success: true, remaining: maxRequests - 1, resetTime: now + windowMs }
  }

  if (current.count >= maxRequests) {
    return { success: false, remaining: 0, resetTime: current.resetTime }
  }

  current.count++
  return { success: true, remaining: maxRequests - current.count, resetTime: current.resetTime }
}
