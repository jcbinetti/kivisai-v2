/**
 * Utility functions for handling scroll behavior
 */

/**
 * Scrolls to the top of the page
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

/**
 * Scrolls to a specific element by ID
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (in pixels)
 */
export function scrollToElement(elementId: string, offset = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * Resets scroll restoration to manual
 * This prevents browsers from restoring scroll position on navigation
 */
export function resetScrollRestoration() {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual"
  }
}
