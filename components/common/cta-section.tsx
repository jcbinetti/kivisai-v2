import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Calendar, Download, ExternalLink, Phone, Mail } from "lucide-react"

export interface CtaSectionProps {
  variant?: "default" | "centered" | "split" | "banner"
  background?: "primary" | "secondary" | "gradient" | "white" | "gray"
  size?: "sm" | "md" | "lg"
  title: string
  description?: string
  primaryCta?: {
    text: string
    href: string
    variant?: "default" | "outline" | "ghost"
    icon?: "arrow" | "calendar" | "download" | "external" | "phone" | "mail"
  }
  secondaryCta?: {
    text: string
    href: string
    variant?: "default" | "outline" | "ghost"
    icon?: "arrow" | "calendar" | "download" | "external" | "phone" | "mail"
  }
  image?: {
    src: string
    alt: string
  }
  className?: string
  children?: ReactNode
}

const iconMap = {
  arrow: ArrowRight,
  calendar: Calendar,
  download: Download,
  external: ExternalLink,
  phone: Phone,
  mail: Mail,
}

export function CtaSection({
  variant = "default",
  background = "primary",
  size = "md",
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  className,
  children,
}: CtaSectionProps) {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-24",
  }

  const backgroundClasses = {
    primary: "bg-kivisai-deep-dark-blue text-white",
    secondary: "bg-kivisai-vibrant-light-green text-kivisai-deep-dark-blue",
    gradient: "bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white",
    white: "bg-white text-gray-900 border border-gray-200",
    gray: "bg-gray-50 text-gray-900",
  }

  const variantClasses = {
    default: "text-left",
    centered: "text-center",
    split: "grid md:grid-cols-2 gap-8 items-center",
    banner: "text-center",
  }

  const renderCta = (cta: NonNullable<CtaSectionProps["primaryCta"]>, isPrimary = true) => {
    const Icon = cta.icon ? iconMap[cta.icon] : null
    const buttonVariant = cta.variant || (isPrimary ? "default" : "outline")

    // Standardklassen für alle Buttons
    const baseClasses = "gap-2 font-semibold text-base px-6 py-3 rounded-lg transition-all duration-200"

    // Spezifische Klassen basierend auf Variante und Hintergrund
    let specificClasses = ""

    // Primärer Button auf Gradient-Hintergrund
    if (background === "gradient" && isPrimary) {
      specificClasses = "bg-kivisai-clear-turquoise text-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise/90 border-0 font-bold"
    }
    // Sekundärer Button auf Gradient-Hintergrund
    else if (background === "gradient" && !isPrimary) {
      specificClasses = "bg-white text-kivisai-deep-dark-blue hover:bg-gray-100 border-0 font-bold"
    }
    // Primärer Button auf Primary-Hintergrund (dunkelblau)
    else if (background === "primary" && isPrimary) {
      specificClasses = "bg-white text-kivisai-deep-dark-blue hover:bg-gray-100 border-0"
    }
    // Sekundärer Button auf Primary-Hintergrund
    else if (background === "primary" && !isPrimary) {
      specificClasses = "bg-transparent border-2 border-white text-white hover:bg-white/10"
    }
    // Primärer Button auf Secondary-Hintergrund (grün)
    else if (background === "secondary" && isPrimary) {
      specificClasses = "bg-kivisai-deep-dark-blue text-white hover:bg-kivisai-deep-dark-blue/90 border-0"
    }
    // Sekundärer Button auf Secondary-Hintergrund
    else if (background === "secondary" && !isPrimary) {
      specificClasses =
        "bg-transparent border-2 border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-deep-dark-blue/10"
    }
    // Primärer Button auf weißem Hintergrund
    else if (background === "white" && isPrimary) {
      specificClasses = "bg-kivisai-deep-dark-blue text-white hover:bg-kivisai-deep-dark-blue/90 border-0"
    }
    // Sekundärer Button auf weißem Hintergrund
    else if (background === "white" && !isPrimary) {
      specificClasses =
        "bg-transparent border-2 border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-deep-dark-blue/10"
    }
    // Primärer Button auf grauem Hintergrund
    else if (background === "gray" && isPrimary) {
      specificClasses = "bg-kivisai-deep-dark-blue text-white hover:bg-kivisai-deep-dark-blue/90 border-0"
    }
    // Sekundärer Button auf grauem Hintergrund
    else if (background === "gray" && !isPrimary) {
      specificClasses =
        "bg-transparent border-2 border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-deep-dark-blue/10"
    }

    return (
      <a href={cta.href} className={`${baseClasses} ${specificClasses} inline-flex items-center`}>
        {cta.text}
        {Icon && <Icon className="h-5 w-5 ml-2" />}
      </a>
    )
  }

  return (
    <section className={cn(backgroundClasses[background], sizeClasses[size], className)}>
      <div className="container">
        <div className={cn(variantClasses[variant])}>
          {variant === "split" && image ? (
            <>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                  {description && <p className="text-lg opacity-90">{description}</p>}
                </div>

                {(primaryCta || secondaryCta) && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {primaryCta && renderCta(primaryCta, true)}
                    {secondaryCta && renderCta(secondaryCta, false)}
                  </div>
                )}

                {children}
              </div>

              <div className="relative">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto rounded-lg" />
              </div>
            </>
          ) : (
            <div className={cn("space-y-6", variant === "banner" ? "max-w-4xl mx-auto" : "")}>
              <div className="space-y-4">
                <h2 className={cn("font-bold", variant === "banner" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl")}>
                  {title}
                </h2>
                {description && (
                  <p className={cn("opacity-90", variant === "banner" ? "text-xl" : "text-lg")}>{description}</p>
                )}
              </div>

              {(primaryCta || secondaryCta) && (
                <div
                  className={cn(
                    "flex gap-4",
                    variant === "centered" || variant === "banner"
                      ? "justify-center flex-col sm:flex-row"
                      : "flex-col sm:flex-row",
                  )}
                >
                  {primaryCta && renderCta(primaryCta, true)}
                  {secondaryCta && renderCta(secondaryCta, false)}
                </div>
              )}

              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
