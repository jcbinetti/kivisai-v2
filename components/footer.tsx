"use client"

import type React from "react"
import Link from "next/link"
import SafeImage from "@/components/safe-image"
import CertificateModal from "@/components/certificate-modal"
import { FileText, LockKeyhole, Accessibility, Bot, Settings, ShieldCheck, Globe, Gavel } from "lucide-react"
import { menuItems } from "@/lib/menu-data"

const Footer: React.FC = () => {
  const certificateTriggerSize = { width: 60, height: 60 } // Smaller trigger size
  const certificateModalSize = { width: 600, height: 400 } // Modal display size

  const certificates = [
    {
      src: "/images-optimized/FF-Siegel_FF_convis_RGB.webp",
      alt: "FF-Siegel FF convis",
      href: "https://www.convis.de/",
      width: 120,
      height: 60
    },
    {
      src: "/images-optimized/Badges_Autorisierter_INQA-Coach_2025-2026.webp",
      alt: "Autorisierter INQA-Coach 2025-2026",
      href: "https://www.inqa.de/",
      width: 120,
      height: 60
    },
    {
      src: "/images-optimized/FF-Siegel_SGS.webp",
      alt: "FF-Siegel SGS",
      href: "https://www.sgs.com/",
      width: 120,
      height: 60
    },
    {
      src: "/images-optimized/FF-Siegel_UZ_convis_RGB.webp",
      alt: "FF-Siegel UZ convis",
      href: "https://www.convis.de/",
      width: 120,
      height: 60
    },
  ]

  // Filter first-level menu items (excluding Admin)
  const firstLevelMenuItems = menuItems.filter(item => item.name !== "Admin")

  return (
    <footer className="bg-kivisai-light-cool-gray text-kivisai-moss-green">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo und Beschreibung */}
          <div className="lg:col-span-1 flex flex-col items-start justify-start pt-0">
            <SafeImage
              src="/images-optimized/KIVISAI_logo_TR.webp"
              alt="KIVISAI Logo"
              width={170}
              height={68}
              className="h-auto mt-0 mb-2 align-top"
            />
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise rounded-sm"
            >
              <p className="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue mt-0">
                Zukunft gestalten. Regenerativ. Wirksam.
              </p>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Wir gestalten Ihre Transformation mit menschlicher und künstlicher Intelligenz.
            </p>
            <p className="text-lg font-bold text-kivisai-deep-dark-blue">Start to act.</p>
          </div>

          {/* Menü - Only first-level items */}
          <div>
            <h3 className="font-semibold text-kivisai-deep-dark-blue mb-4">Menü</h3>
            <ul className="space-y-2 text-sm">
              {firstLevelMenuItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-kivisai-clear-turquoise transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen - Updated order */}
          <div>
            <h3 className="font-semibold text-kivisai-deep-dark-blue mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/leistungen/ki-potenzialanalyse"
                  className="hover:text-kivisai-clear-turquoise transition-colors"
                >
                  KI-Potenzialanalyse
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/strategie-coaching"
                  className="hover:text-kivisai-clear-turquoise transition-colors"
                >
                  Strategie-Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/ki-prototyping"
                  className="hover:text-kivisai-clear-turquoise transition-colors"
                >
                  KI-Prototyping
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/coaching-training"
                  className="hover:text-kivisai-clear-turquoise transition-colors"
                >
                  Coaching & Training
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/inqa-coaching"
                  className="hover:text-kivisai-clear-turquoise transition-colors"
                >
                  INQA-Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-kivisai-deep-dark-blue mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/rechtliches/impressum"
                  className="flex items-center hover:text-kivisai-clear-turquoise transition-colors"
                >
                  <FileText size={16} className="mr-2 flex-shrink-0" />
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/rechtliches/datenschutz"
                  className="flex items-center hover:text-kivisai-clear-turquoise transition-colors"
                >
                  <LockKeyhole size={16} className="mr-2 flex-shrink-0" />
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/rechtliches/barrierefreiheit"
                  className="flex items-center hover:text-kivisai-clear-turquoise transition-colors"
                >
                  <Accessibility size={16} className="mr-2 flex-shrink-0" />
                  Barrierefreiheit
                </Link>
              </li>
              <li>
                <Link
                  href="/ki-policy"
                  className="flex items-center hover:text-kivisai-clear-turquoise transition-colors"
                >
                  <Bot size={16} className="mr-2 flex-shrink-0" />
                  KI-Policy
                </Link>
              </li>
              <li>
                <Link href="/rechtliches/agb" className="flex items-center hover:text-kivisai-clear-turquoise transition-colors">
                  <Gavel size={16} className="mr-2 flex-shrink-0" />
                  AGB
                </Link>
              </li>
            </ul>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center">
                <ShieldCheck size={16} className="mr-2 text-green-600 flex-shrink-0" />
                Server in EU
              </div>
            </div>
          </div>

          {/* Zertifikate & Auszeichnungen */}
          <div>
            <h3 className="font-semibold text-kivisai-deep-dark-blue mb-4">Zertifikate & Auszeichnungen</h3>
            <div className="flex flex-wrap gap-3 items-center">
              {certificates.map((cert, index) => (
                <CertificateModal
                  key={index}
                  src={cert.src}
                  alt={cert.alt}
                  triggerImageWidth={certificateTriggerSize.width}
                  triggerImageHeight={certificateTriggerSize.height}
                  triggerClassName="p-1 border border-gray-300 rounded-md hover:border-kivisai-clear-turquoise hover:scale-110 transition-transform duration-200 cursor-pointer focus:scale-110"
                  modalImageWidth={certificateModalSize.width}
                  modalImageHeight={certificateModalSize.height}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-kivisai-moss-green/20 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} KIVISAI ist eine Marke der CONVIS Consult & Marketing GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
