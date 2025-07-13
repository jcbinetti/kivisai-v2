import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "INQA-Coaching Methode | 80% Förderung für KI-Transformation | KIVISAI",
  description:
    "Detaillierte Informationen zur INQA-Coaching Methode mit 80% Förderung. Beispielprojekt mit 12 Coaching-Tagen für KI-Transformation im Mittelstand.",
  keywords: ["INQA-Coaching", "Methode", "Förderung", "KI-Transformation", "Beispielprojekt", "12 Tage"],
}

export default function INQACoachingDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 