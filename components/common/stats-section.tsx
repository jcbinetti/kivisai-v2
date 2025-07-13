import { cn } from "@/lib/utils"

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface StatsSectionProps {
  items: StatItem[]
  variant?: "default" | "centered" | "cards"
  background?: "white" | "gray" | "primary"
  className?: string
}

export function StatsSection({ items, variant = "default", background = "white", className }: StatsSectionProps) {
  const backgroundClasses = {
    white: "bg-white text-gray-900",
    gray: "bg-gray-50 text-gray-900",
    primary: "bg-kivisai-deep-dark-blue text-white",
  }

  return (
    <div className={cn("py-12", backgroundClasses[background], className)}>
      <div className="container">
        <div
          className={cn(
            "grid gap-8",
            items.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : items.length === 3
                ? "grid-cols-1 md:grid-cols-3"
                : items.length === 4
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            variant === "centered" && "text-center",
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(variant === "cards" && "p-6 bg-white rounded-lg border border-gray-200 text-center")}
            >
              <div
                className={cn(
                  "text-4xl md:text-5xl font-bold mb-2",
                  background === "primary" ? "text-kivisai-vibrant-light-green" : "text-kivisai-deep-dark-blue",
                )}
              >
                {item.value}
              </div>
              <div className="text-lg font-semibold mb-1">{item.label}</div>
              {item.description && (
                <div className={cn("text-sm", background === "primary" ? "text-white/90" : "text-kivisai-moss-green")}>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
