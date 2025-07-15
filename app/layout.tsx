import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "KIVISAI - Zukunft gestalten. Regenerativ. Wirksam.",
  description:
    "KIVISAI unterstützt Unternehmen und Einzelpersonen bei der Nutzung von KI für eine regenerative und wirksame Zukunft.",
  icons: {
    icon: [{ url: "/images-optimized/KIVISAI_signet_tr.webp", type: "image/webp", sizes: "any" }],
    apple: [{ url: "/images-optimized/KIVISAI_signet_tr.webp", type: "image/webp" }],
  },
  // Weitere Metadaten wie openGraph, manifest etc. können hier hinzugefügt werden
  // z.B. manifest: '/manifest.json',
  // themeColor: '#001F3F', // Kann auch hier oder im ClientLayout gesetzt werden
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning className={inter.variable}>

      <body suppressHydrationWarning className="font-inter">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
