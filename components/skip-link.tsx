export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-kivisai-deep-dark-blue text-kivisai-pure-white px-4 py-2 rounded-md z-50 font-semibold"
      tabIndex={0}
    >
      Zum Hauptinhalt springen
    </a>
  )
}
