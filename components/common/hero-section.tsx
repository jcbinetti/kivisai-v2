import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Download, ExternalLink } from "lucide-react"

export interface HeroSectionProps {
  variant?: "default" | "centered" | "split" | "minimal"
  size?: "sm" | "md" | "lg" | "xl"
  background?: "white" | "gradient" | "pattern" | "image"
  backgroundImage?: string
  title: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href?: string
    onClick?: () => void
    variant?: "default" | "outline" | "ghost"
    icon?: "arrow" | "calendar" | "download" | "external"
  }
  secondaryCta?: {
    text: string
    href?: string
    onClick?: () => void
    variant?: "default" | "outline" | "ghost"
    icon?: "arrow" | "calendar" | "download" | "external"
  }
  image?: {
    src: string
    alt: string
    position?: "left" | "right"
  }
  breadcrumbs?: Array<{
    label: string
    href?: string
  }>
  className?: string
  children?: ReactNode
}

const iconMap = {
  arrow: ArrowRight,
  calendar: Calendar,
  download: Download,
  external: ExternalLink,
}

export function HeroSection({
  variant = "default",
  size = "lg",
  background = "white",
  backgroundImage,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  breadcrumbs,
  className,
  children,
}: HeroSectionProps) {
  const sizeClasses = {
    sm: "pt-40 pb-12 md:pb-16",
    md: "pt-40 pb-16 md:pb-20",
    lg: "pt-40 pb-20 md:pb-24",
    xl: "pt-40 pb-24 md:pb-32",
  }

  const backgroundClasses = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-kivisai-deep-dark-blue via-kivisai-moss-green to-kivisai-clear-turquoise",
    pattern:
      "bg-white bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px]",
    image: "bg-cover bg-center bg-no-repeat relative",
  }

  const variantClasses = {
    default: "text-left",
    centered: "text-center",
    split: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
    minimal: "text-center max-w-3xl mx-auto",
  }

  const renderCta = (cta: NonNullable<HeroSectionProps["primaryCta"]>) => {
    const Icon = cta.icon ? iconMap[cta.icon] : null
    const content = (
      <>
        {cta.text}
        {Icon && <Icon className="h-4 w-4" />}
      </>
    )

    if (cta.href) {
      return (
        <Button asChild variant={cta.variant || "default"} size="lg" className="gap-2">
          <a href={cta.href}>
            {content}
          </a>
        </Button>
      )
    }

    if (cta.onClick) {
      return (
        <Button variant={cta.variant || "default"} size="lg" className="gap-2" onClick={cta.onClick}>
          {content}
        </Button>
      )
    }

    return null
  }

  return (
    <section
      className={cn("relative overflow-hidden", sizeClasses[size], backgroundClasses[background], className)}
      style={background === "image" && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {background === "image" && <div className="absolute inset-0 bg-black/40" />}

      <div className="relative z-10 flex flex-col items-center w-full">
        {breadcrumbs && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={cn(variantClasses[variant])}>
          {variant === "split" && image ? (
            <>
              <div className={cn("space-y-6", image.position === "right" ? "md:order-1" : "")}>
                <div className="space-y-4">
                  {subtitle && (
                    <div className="max-w-2xl mx-auto">
                      <p className={cn(
                        "text-sm font-semibold uppercase tracking-wide text-center",
                        background === "gradient" ? "text-white" : "text-kivisai-vibrant-light-green"
                      )}>
                        {subtitle}
                      </p>
                    </div>
                  )}
                  <h1
                    className={cn(
                      "font-bold tracking-tight text-center",
                      background === "image" || background === "gradient" ? "text-white" : "text-gray-900",
                      size === "xl"
                        ? "text-4xl md:text-6xl"
                        : size === "lg"
                          ? "text-3xl md:text-5xl"
                          : size === "md"
                            ? "text-2xl md:text-4xl"
                            : "text-xl md:text-3xl",
                    )}
                  >
                    {title}
                  </h1>
                  {description && (
                    <div className="max-w-2xl mx-auto">
                      <p
                        className={cn(
                          "text-lg leading-relaxed text-center",
                          background === "image" || background === "gradient" ? "text-white/90" : "text-gray-600",
                          variant && variant.toString() === "minimal" ? "text-xl" : "",
                        )}
                      >
                        {description}
                      </p>
                    </div>
                  )}
                </div>

                {(primaryCta || secondaryCta) && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {primaryCta && renderCta(primaryCta)}
                    {secondaryCta && renderCta(secondaryCta)}
                  </div>
                )}

                {children}
              </div>

              <div className={cn("relative", image.position === "right" ? "md:order-2" : "")}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {subtitle && (
                  <div className="max-w-2xl mx-auto">
                    <p className={cn(
                      "text-sm font-semibold uppercase tracking-wide text-center",
                      background === "gradient" ? "text-white" : "text-kivisai-vibrant-light-green"
                    )}>
                      {subtitle}
                    </p>
                  </div>
                )}
                <h1
                  className={cn(
                    "font-bold tracking-tight text-center",
                    background === "image" || background === "gradient" ? "text-white" : "text-gray-900",
                    size === "xl"
                      ? "text-4xl md:text-6xl"
                      : size === "lg"
                        ? "text-3xl md:text-5xl"
                        : size === "md"
                          ? "text-2xl md:text-4xl"
                          : "text-xl md:text-3xl",
                  )}
                >
                  {title}
                </h1>
                {description && (
                  <div className="max-w-2xl mx-auto">
                    <p
                      className={cn(
                        "text-lg leading-relaxed text-center",
                        background === "image" || background === "gradient" ? "text-white/90" : "text-gray-600",
                        variant && variant.toString() === "minimal" ? "text-xl" : "",
                      )}
                    >
                      {description}
                    </p>
                  </div>
                )}
              </div>

              {(primaryCta || secondaryCta) && (
                <div
                  className={cn(
                    "flex gap-4",
                    (variant === "centered" || variant === "minimal")
                      ? "justify-center flex-col sm:flex-row"
                      : "flex-col sm:flex-row"
                  )}
                >
                  {primaryCta && renderCta(primaryCta)}
                  {secondaryCta && renderCta(secondaryCta)}
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
