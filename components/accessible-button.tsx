import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      ariaLabel,
      ariaDescribedBy,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
      primary:
        "bg-kivisai-deep-dark-blue text-kivisai-pure-white hover:bg-kivisai-clear-turquoise focus:ring-kivisai-clear-turquoise",
      secondary:
        "bg-kivisai-light-cool-gray text-kivisai-deep-dark-blue hover:bg-kivisai-clear-turquoise hover:text-white focus:ring-kivisai-clear-turquoise",
      outline:
        "border-2 border-kivisai-deep-dark-blue text-kivisai-deep-dark-blue hover:bg-kivisai-deep-dark-blue hover:text-white focus:ring-kivisai-deep-dark-blue",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span className={loading ? "sr-only" : ""}>{loading ? "Wird geladen..." : children}</span>
      </button>
    )
  },
)

AccessibleButton.displayName = "AccessibleButton"

export default AccessibleButton
