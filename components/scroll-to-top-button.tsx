"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { scrollToTop } from "@/lib/scroll-utils"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Zum Seitenanfang scrollen"
          className="fixed bottom-6 right-6 p-3 bg-kivisai-deep-dark-blue text-white rounded-full shadow-lg hover:bg-kivisai-clear-turquoise transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
