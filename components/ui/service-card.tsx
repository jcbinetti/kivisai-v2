import React from "react"
import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  number: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  href: string
  variant?: "primary" | "secondary" | "tertiary"
  className?: string
}

const variantStyles = {
  primary: {
    card: "from-white to-kivisai-clear-turquoise/10 border-kivisai-clear-turquoise/20 hover:border-kivisai-clear-turquoise/40",
    icon: "from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise",
    button: "from-kivisai-deep-dark-blue to-kivisai-clear-turquoise hover:from-kivisai-clear-turquoise hover:to-kivisai-deep-dark-blue",
    badge: "bg-kivisai-clear-turquoise/20"
  },
  secondary: {
    card: "from-white to-kivisai-vibrant-turquoise/10 border-kivisai-vibrant-turquoise/20 hover:border-kivisai-vibrant-turquoise/40",
    icon: "from-kivisai-vibrant-turquoise to-kivisai-deep-dark-blue",
    button: "from-kivisai-vibrant-turquoise to-kivisai-deep-dark-blue hover:from-kivisai-deep-dark-blue hover:to-kivisai-vibrant-turquoise",
    badge: "bg-kivisai-vibrant-turquoise/20"
  },
  tertiary: {
    card: "from-white to-kivisai-deep-dark-blue/10 border-kivisai-deep-dark-blue/20 hover:border-kivisai-deep-dark-blue/40",
    icon: "from-kivisai-deep-dark-blue to-kivisai-clear-turquoise",
    button: "from-kivisai-deep-dark-blue to-kivisai-clear-turquoise hover:from-kivisai-clear-turquoise hover:to-kivisai-deep-dark-blue",
    badge: "bg-kivisai-deep-dark-blue/20"
  }
}

export function ServiceCard({
  number,
  title,
  subtitle,
  description,
  icon: Icon,
  href,
  variant = "primary",
  className = ""
}: ServiceCardProps) {
  const styles = variantStyles[variant]

  return (
    <article className={`group relative p-8 bg-gradient-to-br ${styles.card} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border overflow-hidden ${className}`}>
      {/* Hintergrund-Effekt */}
      <div className="absolute inset-0 bg-gradient-to-br from-kivisai-clear-turquoise/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon mit Animation */}
      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-br ${styles.icon} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue text-center">
          {number}. {title}
        </h3>
        <p className={`text-kivisai-moss-green text-sm mb-3 font-semibold text-center ${styles.badge} px-3 py-1 rounded-full`}>
          {subtitle}
        </p>
        <p className="text-kivisai-moss-green text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 bg-gradient-to-r ${styles.button} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center`}
        >
          Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

// Export für einfache Verwendung
export default ServiceCard 