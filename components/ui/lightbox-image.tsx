"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

interface LightboxImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  caption?: string
}

export function LightboxImage({ 
  src, 
  alt, 
  width = 800, 
  height = 400, 
  className = "", 
  caption 
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} transition-transform duration-200 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white" />
          </div>
          {caption && (
            <p className="text-sm text-gray-600 mt-2 text-center">{caption}</p>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <DialogTitle className="sr-only">
          {alt}
        </DialogTitle>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
          {caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <p className="text-center">{caption}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 