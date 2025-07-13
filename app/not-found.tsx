import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-kivisai-light-cool-gray text-kivisai-moss-green px-4 text-center">
      <h1 className="text-6xl font-bold text-kivisai-deep-dark-blue mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6 text-kivisai-deep-dark-blue">Seite nicht gefunden</h2>
      <p className="text-lg mb-8 text-kivisai-moss-green">Die von Ihnen gesuchte Seite existiert leider nicht.</p>
      {/* Primary Button */}
      <Link
        href="/"
        className="bg-kivisai-deep-dark-blue text-kivisai-pure-white px-6 py-3 rounded-lg font-semibold hover:bg-kivisai-clear-turquoise transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  )
}
