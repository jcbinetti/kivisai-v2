import SafeImage from "@/components/safe-image"

export default function FooterComingSoon() {
  return (
    <footer className="bg-kivisai-light-cool-gray py-12 text-kivisai-moss-green" role="contentinfo">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <SafeImage src="/images-optimized/KIVISAI_logo_TR.webp" alt="KIVISAI Logo" width={200} height={80} className="h-auto" />
        </div>

        <div className="space-y-4">
          <p className="text-xl font-bold text-kivisai-moss-green">Zukunft gestalten. Regenerativ. Wirksam.</p>

          <p className="text-lg text-kivisai-moss-green/90 leading-relaxed">
            Wir gestalten Ihre Transformation mit menschlicher und künstlicher Intelligenz.
          </p>

          <p className="text-2xl font-bold text-kivisai-moss-green mt-4">Start to act.</p>
        </div>
      </div>
    </footer>
  )
}
