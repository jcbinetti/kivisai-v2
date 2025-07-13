import { ContrastChecker } from "@/components/contrast-checker"

export default function ContrastCheckerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KIVISAI Kontrast-Checker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überprüfen Sie den Kontrast zwischen Text- und Hintergrundfarben für optimale Lesbarkeit und
            Accessibility-Standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ContrastChecker />
        </div>
      </div>
    </div>
  )
}
