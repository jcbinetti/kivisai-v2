import Image from "next/image"
import Link from "next/link"
import React from "react"
import { User, Users, Building, Network } from "lucide-react"

export interface EvalkitTeaserSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaText: string
  ctaHref: string
  backgroundClassName?: string
}

export function EvalkitTeaserSection({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
  backgroundClassName = "bg-gradient-to-r from-kivisai-vibrant-turquoise to-kivisai-clear-turquoise text-white"
}: EvalkitTeaserSectionProps) {
  const perspectives = [
    { 
      icon: User, 
      name: "Mensch", 
      description: "Individuelle Selbsteinschätzung",
      imageSrc: "/images/4_KIVISAI-NAVI/KIVI_Mensch.png",
      imageAlt: "Mensch Perspektive - Individuelle Selbsteinschätzung"
    },
    { 
      icon: Users, 
      name: "Team", 
      description: "Projekt-Team Ebene",
      imageSrc: "/images/4_KIVISAI-NAVI/KIVI_Team.png",
      imageAlt: "Team Perspektive - Projekt-Team Ebene"
    },
    { 
      icon: Building, 
      name: "Organisation", 
      description: "Unternehmensebene",
      imageSrc: "/images/4_KIVISAI-NAVI/KIVI_Orga.png",
      imageAlt: "Organisation Perspektive - Unternehmensebene"
    },
    { 
      icon: Network, 
      name: "Ökosystem", 
      description: "Branchen- & Netzwerkebene",
      imageSrc: "/images/4_KIVISAI-NAVI/KIVI_Ökosystem.PNG",
      imageAlt: "Ökosystem Perspektive - Branchen- & Netzwerkebene"
    }
  ]

  return (
    <section className={`py-16 ${backgroundClassName}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              {description}
            </p>
            
            {/* 4 Perspektiven Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {perspectives.map((perspective, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  {/* Bild */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/20">
                      <Image
                        src={perspective.imageSrc}
                        alt={perspective.imageAlt}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm md:text-base">
                      {perspective.name}
                    </h3>
                    <p className="text-xs md:text-sm opacity-80 leading-tight">
                      {perspective.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href={ctaHref}
                className="inline-flex items-center px-8 py-4 bg-white text-kivisai-deep-dark-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {ctaText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 