"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import SafeImage from "@/components/safe-image"
import { Button } from "@/components/ui/button"
import { XIcon, ExternalLink } from "lucide-react"

interface CertificateModalProps {
  src: string
  alt: string
  triggerImageWidth: number
  triggerImageHeight: number
  triggerClassName?: string
  modalImageWidth?: number
  modalImageHeight?: number
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  src,
  alt,
  triggerImageWidth,
  triggerImageHeight,
  triggerClassName,
  modalImageWidth = 800, // Default modal image width
  modalImageHeight = 600, // Default modal image height
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true) // Ensure component is mounted before rendering Dialog (hydration safety)
  }, [])

  if (!isMounted) {
    // Render a placeholder or the trigger image directly if not mounted (for SSR/initial render)
    return (
      <SafeImage
        src={src}
        alt={alt}
        width={triggerImageWidth}
        height={triggerImageHeight}
        className={triggerClassName}
      />
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={`focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise rounded-md transition-opacity hover:opacity-80 ${triggerClassName}`}
          aria-label={`Zertifikat ansehen: ${alt}`}
        >
          <SafeImage
            src={src}
            alt={alt}
            width={triggerImageWidth}
            height={triggerImageHeight}
            className="object-contain" // Ensure image fits within trigger button
          />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden shadow-2xl rounded-lg">
        <DialogHeader className="flex flex-row justify-between items-center p-4 border-b bg-gray-50">
          <DialogTitle className="text-lg font-semibold text-kivisai-deep-dark-blue">{alt}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" aria-label="Schließen">
              <XIcon className="h-5 w-5" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="p-6 flex justify-center items-center bg-white max-h-[80vh] overflow-auto">
          <SafeImage
            src={src}
            alt={alt}
            width={modalImageWidth}
            height={modalImageHeight}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="p-4 border-t bg-gray-50 text-right">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-kivisai-clear-turquoise hover:underline inline-flex items-center"
          >
            Bild in neuem Tab öffnen <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CertificateModal
