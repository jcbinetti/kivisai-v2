'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      suppressHydrationWarning
    >
      {children}
    </NextThemesProvider>
  )
}
