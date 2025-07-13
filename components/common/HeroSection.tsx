import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bgColor?: string;
  layout?: "center" | "left";
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  bgColor = "bg-kivisai-clear-turquoise/10",
  layout = "center",
}: HeroSectionProps) {
  return (
    <section
      className={`w-full ${bgColor} py-12 md:py-20 ${layout === "center" ? "text-center" : "text-left"}`}
      data-testid="hero-section"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        {imageSrc && layout === "left" && (
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <Image src={imageSrc} alt={imageAlt || title} width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        )}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-kivisai-deep-dark-blue mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">{subtitle}</p>}
          {ctaLabel && ctaHref && (
            <Button asChild size="lg" variant="default">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
        </div>
        {imageSrc && layout === "center" && (
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <Image src={imageSrc} alt={imageAlt || title} width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        )}
      </div>
    </section>
  );
} 