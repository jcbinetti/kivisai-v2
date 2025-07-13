import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const SANITY_STUDIO_URL = "http://localhost:3333" // ggf. anpassen für Produktion
const SANITY_PROJECT_ID = "kpbuonm3"
const SANITY_DATASET = "production"

// Dummy-Daten wie in PagesTemplateOverview
const pagesData = [
  { path: "/", name: "Startseite", template: "Landing Page", status: "active", filePath: "app/page.tsx" },
  { path: "/wissens-hub", name: "Wissens-Hub", template: "Wissens-Hub", status: "active", filePath: "app/wissens-hub/page.tsx" },
  { path: "/wissens-hub/blog", name: "Blog Übersicht", template: "Blog Listing", status: "active", filePath: "app/wissens-hub/blog/page.tsx" },
  { path: "/wissens-hub/blog/[slug]", name: "Blog Artikel", template: "Blog Article", status: "active", filePath: "app/wissens-hub/blog/[slug]/page.tsx" },
  { path: "/wissens-hub/kategorien", name: "Kategorien", template: "Category Page", status: "active", filePath: "app/wissens-hub/kategorien/page.tsx" },
  { path: "/wissens-hub/autoren", name: "Autoren", template: "Author Page", status: "active", filePath: "app/wissens-hub/autoren/page.tsx" },
  { path: "/wissens-hub/events", name: "Events", template: "Events Page", status: "active", filePath: "app/wissens-hub/events/page.tsx" },
  { path: "/leistungen", name: "Leistungen Übersicht", template: "Landing Page", status: "active", filePath: "app/leistungen/page.tsx" },
  { path: "/leistungen/ki-potenzialanalyse", name: "KI-Potenzialanalyse", template: "Service Page", status: "active", filePath: "app/leistungen/ki-potenzialanalyse/page.tsx" },
  { path: "/loesungen", name: "Lösungen Übersicht", template: "Landing Page", status: "active", filePath: "app/loesungen/page.tsx" },
  { path: "/kontakt", name: "Kontakt", template: "Contact Page", status: "active", filePath: "app/kontakt/page.tsx" },
  { path: "/rechtliches/impressum", name: "Impressum", template: "Legal Page", status: "active", filePath: "app/rechtliches/impressum/page.tsx" },
  { path: "/rechtliches/datenschutz", name: "Datenschutz", template: "Legal Page", status: "active", filePath: "app/rechtliches/datenschutz/page.tsx" },
  { path: "/rechtliches/agb", name: "AGB", template: "Legal Page", status: "active", filePath: "app/rechtliches/agb/page.tsx" },
  { path: "/rechtliches/barrierefreiheit", name: "Barrierefreiheit", template: "Legal Page", status: "active", filePath: "app/rechtliches/barrierefreiheit/page.tsx" },
]

export function PagesTemplateOverviewTable() {
  return (
    <>
      <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <div className="font-semibold text-blue-900">Sanity Umgebung</div>
            <div className="text-xs text-blue-700">Project ID: <span className="font-mono">{SANITY_PROJECT_ID}</span></div>
            <div className="text-xs text-blue-700">Dataset: <span className="font-mono">{SANITY_DATASET}</span></div>
          </div>
          <a href={SANITY_STUDIO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition">
            <ExternalLink className="w-4 h-4" /> Sanity Studio öffnen
          </a>
        </div>
      </Card>
      <Card className="p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-kivisai-deep-dark-blue">Seiten & Template-Zuordnung</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Pfad</th>
                <th className="px-3 py-2 text-left font-semibold">Name</th>
                <th className="px-3 py-2 text-left font-semibold">Template</th>
                <th className="px-3 py-2 text-left font-semibold">Status</th>
                <th className="px-3 py-2 text-left font-semibold">Datei</th>
              </tr>
            </thead>
            <tbody>
              {pagesData.map((page) => (
                <tr key={page.path} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-2 font-mono text-xs text-blue-700">{page.path}</td>
                  <td className="px-3 py-2">{page.name}</td>
                  <td className="px-3 py-2">
                    <Badge variant="outline">{page.template}</Badge>
                  </td>
                  <td className="px-3 py-2">
                    {page.status === "active" && <Badge className="bg-green-100 text-green-800">Aktiv</Badge>}
                    {page.status === "draft" && <Badge className="bg-yellow-100 text-yellow-800">Entwurf</Badge>}
                    {page.status === "missing" && <Badge className="bg-red-100 text-red-800">Fehlt</Badge>}
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-500 font-mono">{page.filePath}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  )
} 