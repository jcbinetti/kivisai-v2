import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export default function LoadingSpinner({ size = "md", text = "Lädt...", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`flex flex-col items-center justify-center p-4 ${className}`} role="status" aria-live="polite">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-kivisai-deep-dark-blue mb-2`} aria-hidden="true" />
      <span className="text-kivisai-moss-green text-sm" aria-label={text}>
        {text}
      </span>
    </div>
  )
}
