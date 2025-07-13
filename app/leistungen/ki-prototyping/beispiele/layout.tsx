import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KI-Prototypen Beispiele | Konkrete Lösungen & Inspiration | KIVISAI",
  description:
    "Entdecken Sie konkrete KI-Prototypen und Lösungen, die bereits heute in Unternehmen erfolgreich eingesetzt werden. Von Chatbots bis Automatisierung.",
  keywords: ["KI-Prototypen", "KI-Lösungen", "Chatbot", "Automatisierung", "Predictive Analytics", "Beispiele"],
}

export default function KIPrototypingDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 