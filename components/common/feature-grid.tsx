import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export interface FeatureItem {
  icon?: LucideIcon
  title: string
  description: string
  link?: {
    href: string
    text: string
  }
}

export interface FeatureGridProps {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
  variant?: "default" | "cards" | "minimal"
  className?: string
}

export function FeatureGrid({ items, columns = 3, variant = "default", className }: FeatureGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const variantClasses = {
    default: "",
    cards: "gap-6",
    minimal: "gap-8",
  }

  return (
    <div className={cn("grid gap-8", gridClasses[columns], variantClasses[variant], className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group",
            variant === "cards" &&
              "p-6 bg-white rounded-lg border border-gray-200 hover:border-kivisai-vibrant-light-green transition-colors",
            variant === "minimal" && "text-center",
          )}
        >
          {item.icon && (
            <div className={cn("mb-4", variant === "minimal" ? "flex justify-center" : "")}>
              <div
                className={cn(
                  "inline-flex items-center justify-center rounded-lg",
                  variant === "cards"
                    ? "w-12 h-12 bg-kivisai-vibrant-light-green/10 text-kivisai-vibrant-light-green group-hover:bg-kivisai-vibrant-light-green group-hover:text-white transition-colors"
                    : "w-16 h-16 bg-kivisai-vibrant-light-green text-white",
                )}
              >
                <item.icon className="h-6 w-6" />
              </div>
            </div>
          )}

          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>

          <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

          {item.link && (
            <a
              href={item.link.href}
              className="inline-flex items-center text-kivisai-vibrant-light-green hover:text-kivisai-deep-dark-blue font-medium transition-colors"
            >
              {item.link.text}
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
