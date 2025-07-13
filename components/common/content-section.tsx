import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface ContentSectionProps {
  variant?: "default" | "centered" | "wide" | "narrow"
  background?: "white" | "gray" | "gradient" | "pattern"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  title?: React.ReactNode
  subtitle?: string
  description?: string
  className?: string
  children: ReactNode
}

export function ContentSection({
  variant = "default",
  background = "white",
  padding = "lg",
  title,
  subtitle,
  description,
  className,
  children,
}: ContentSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-kivisai-vibrant-light-green/5 to-kivisai-clear-turquoise/5",
    pattern:
      "bg-white bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px]",
  }

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  }

  const containerClasses = {
    default: "container",
    centered: "container max-w-4xl mx-auto text-center",
    wide: "container max-w-7xl",
    narrow: "container max-w-3xl mx-auto",
  }

  return (
    <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      <div className={containerClasses[variant]}>
        {(title || subtitle || description) && (
          <div className={cn("mb-12", variant === "centered" ? "text-center" : "")}>
            {subtitle && (
              <p className="text-sm font-semibold text-kivisai-vibrant-light-green uppercase tracking-wide mb-2">
                {subtitle}
              </p>
            )}
            {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
            {description && <p className="text-lg text-kivisai-moss-green leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
