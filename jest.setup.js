"use client"

import { jest } from "@jest/globals"
import "@testing-library/jest-dom"

// Mock async components
jest.mock('@/app/admin/components/page-list', () => ({
    __esModule: true,
    PageList: () => <div>PageList Mock</div>,
}));

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    }
  },
}))

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return "/"
  },
}))

// Mock environment variables
process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000"
process.env.BREVO_API_KEY = "test-api-key"
process.env.BREVO_TEAM_EMAIL = "test@example.com"
process.env.BREVO_SENDER_EMAIL = "sender@example.com"

// Mock fetch
global.fetch = jest.fn()

// Mock crypto for Node.js environment
Object.defineProperty(global, "crypto", {
  value: {
    getRandomValues: (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256)
      }
      return arr
    },
  },
})
