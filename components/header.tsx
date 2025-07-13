"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { menuItems } from "@/lib/menu-data"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([])
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (!pathname) return false
    return pathname === path || (path !== "/" && pathname.startsWith(path))
  }

  // Close menu on escape key (mobile)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
        setExpandedMobileItems([])
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setExpandedMobileItems([])
    }
  }

  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-kivisai-pure-white shadow-md z-50" role="banner">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise rounded-md"
            aria-label="KIVISAI Startseite"
            scroll={true}
          >
            <SafeImage
              src="/images/KIVISAI_logo_TR.png"
              alt="KIVISAI Logo - Zukunft gestalten. Regenerativ. Wirksam."
              width={150}
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 items-center" role="navigation" aria-label="Hauptnavigation">
            {menuItems?.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md font-semibold transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-kivisai-deep-dark-blue bg-gray-100"
                      : item.name === "EVALKIT" 
                        ? "text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue hover:bg-gray-100"
                        : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-gray-100"
                  } flex items-center gap-1`}
                  scroll={true}
                >
                  {item.name}
                  {item.children && item.children.length > 0 && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>
                {/* Dropdown */}
                {item.children && item.children.length > 0 && (
                  <div className="absolute left-0 top-full min-w-[320px] bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-lg border border-gray-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 p-2">
                    {item.children.map((child) => (
                      <div key={child.name} className="relative group/child">
                      <Link
                        href={child.href}
                        className={`block px-4 py-3 text-sm rounded-md transition-all duration-150 hover:shadow-md ${
                          isActive(child.href)
                            ? "text-kivisai-deep-dark-blue bg-kivisai-clear-turquoise bg-opacity-20 border-l-4 border-kivisai-clear-turquoise"
                            : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise hover:bg-opacity-10"
                        }`}
                        scroll={true}
                      >
                          <div className="font-semibold flex items-center justify-between">
                            {child.name}
                            {child.children && child.children.length > 0 && (
                              <ChevronDown className="w-3 h-3 ml-2 group-hover/child:rotate-180 transition-transform" />
                            )}
                          </div>
                        {child.description && (
                          <div className="text-xs text-gray-600 mt-1 leading-tight">
                            {child.description}
                          </div>
                        )}
                      </Link>
                        {/* Nested Dropdown for children */}
                        {child.children && child.children.length > 0 && (
                          <div className="absolute left-full top-0 ml-1 min-w-[280px] bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-lg border border-gray-200 opacity-0 group-hover/child:opacity-100 group-hover/child:translate-x-0 translate-x-2 pointer-events-none group-hover/child:pointer-events-auto transition-all duration-200 z-50 p-2">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.name}
                                href={grandchild.href}
                                className={`block px-4 py-3 text-sm rounded-md transition-all duration-150 hover:shadow-md ${
                                  isActive(grandchild.href)
                                    ? "text-kivisai-deep-dark-blue bg-kivisai-clear-turquoise bg-opacity-20 border-l-4 border-kivisai-clear-turquoise"
                                    : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise hover:bg-opacity-10"
                                }`}
                                scroll={true}
                              >
                                <div className="font-semibold">{grandchild.name}</div>
                                {grandchild.description && (
                                  <div className="text-xs text-gray-600 mt-1 leading-tight">
                                    {grandchild.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Hamburger menu button - only on mobile */}
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise rounded-md md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-kivisai-moss-green" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-kivisai-moss-green" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Overlay */}
        {isMenuOpen && (
          <div
            id="main-menu"
            className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col p-6 md:hidden overflow-y-auto"
            role="navigation"
            aria-label="Hauptnavigation"
          >
            <div className="flex justify-between items-center mb-6">
              <SafeImage
                src="/images/KIVISAI_logo_TR.png"
                alt="KIVISAI Logo - Zukunft gestalten. Regenerativ. Wirksam."
                width={120}
                height={40}
                className="h-auto"
              />
              <button
                className="p-2 focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise rounded-md"
                onClick={toggleMenu}
                aria-label="Menü schließen"
              >
                <X className="w-6 h-6 text-kivisai-moss-green" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {menuItems && menuItems.map((item) => {
                if (!item) return null
                
                const hasChildren = item.children && item.children.length > 0
                const isExpanded = expandedMobileItems.includes(item.name)
                
                return (
                  <div key={item.name} className="">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-3 rounded-md font-semibold text-lg transition-colors ${
                          isActive(item.href)
                            ? "text-kivisai-deep-dark-blue bg-gray-100"
                            : item.name === "EVALKIT"
                              ? "text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue hover:bg-gray-100"
                              : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-gray-100"
                        }`}
                        onClick={() => {
                          if (!hasChildren) {
                            setIsMenuOpen(false)
                          }
                        }}
                        scroll={true}
                      >
                        {item.name}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="p-2 text-kivisai-moss-green hover:text-kivisai-deep-dark-blue"
                          aria-label={`${isExpanded ? 'Untermenü schließen' : 'Untermenü öffnen'} für ${item.name}`}
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {hasChildren && isExpanded && item.children && (
                      <div className="pl-6 mt-2 space-y-1">
                        {item.children.map((child) => {
                          if (!child) return null
                          
                          const hasGrandchildren = child.children && child.children.length > 0
                          const isChildExpanded = expandedMobileItems.includes(`${item.name}-${child.name}`)
                          
                          return (
                            <div key={child.name}>
                              <div className="flex items-center justify-between">
                            <Link
                              href={child.href}
                                  className={`flex-1 px-4 py-3 text-base rounded-md transition-all duration-150 bg-gradient-to-r from-gray-50 to-white border-l-4 border-kivisai-clear-turquoise ${
                                isActive(child.href)
                                  ? "text-kivisai-deep-dark-blue bg-kivisai-clear-turquoise bg-opacity-20"
                                  : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise hover:bg-opacity-10"
                              }`}
                                  onClick={() => {
                                    if (!hasGrandchildren) {
                                      setIsMenuOpen(false)
                                    }
                                  }}
                              scroll={true}
                            >
                              <div className="font-semibold">{child.name}</div>
                              {child.description && (
                                <div className="text-sm text-gray-600 mt-1 leading-tight">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                                {hasGrandchildren && (
                                  <button
                                    onClick={() => toggleMobileSubmenu(`${item.name}-${child.name}`)}
                                    className="p-2 text-kivisai-moss-green hover:text-kivisai-deep-dark-blue"
                                    aria-label={`${isChildExpanded ? 'Untermenü schließen' : 'Untermenü öffnen'} für ${child.name}`}
                                  >
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isChildExpanded ? 'rotate-180' : ''}`} />
                                  </button>
                                )}
                              </div>
                              {hasGrandchildren && isChildExpanded && child.children && (
                                <div className="pl-6 mt-2 space-y-1">
                                  {child.children.map((grandchild) => {
                                    if (!grandchild) return null
                                    return (
                                      <Link
                                        key={grandchild.name}
                                        href={grandchild.href}
                                        className={`block px-4 py-3 text-sm rounded-md transition-all duration-150 bg-gradient-to-r from-gray-100 to-white border-l-4 border-kivisai-moss-green ${
                                          isActive(grandchild.href)
                                            ? "text-kivisai-deep-dark-blue bg-kivisai-moss-green bg-opacity-20"
                                            : "text-kivisai-moss-green hover:text-kivisai-deep-dark-blue hover:bg-kivisai-moss-green hover:bg-opacity-10"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                        scroll={true}
                                      >
                                        <div className="font-semibold">{grandchild.name}</div>
                                        {grandchild.description && (
                                          <div className="text-xs text-gray-600 mt-1 leading-tight">
                                            {grandchild.description}
                                          </div>
                                        )}
                                      </Link>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
