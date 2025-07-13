import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const components = [
  {
    name: "Button",
    description: "Verschiedene Varianten und Größen für Aktionen und CTAs.",
    example: (
      <div className="space-x-2">
        <Button variant="default">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
    props: "variant, size, asChild, ..."
  },
  {
    name: "Card",
    description: "Container für Inhalte, mit Header und Content.",
    example: (
      <Card className="max-w-xs">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>
    ),
    props: "children, className, ..."
  },
  {
    name: "Badge",
    description: "Kleine Hervorhebungen für Status, Labels oder Kategorien.",
    example: (
      <div className="space-x-2">
        <Badge>Standard</Badge>
        <Badge className="bg-kivisai-clear-turquoise text-white">KIVISAI</Badge>
      </div>
    ),
    props: "children, className, ..."
  },
  // Weitere Komponenten können ergänzt werden
];

export default function AdminComponentsGalleryPage() {
  return (
    <AdminLayout breadcrumbs={["Admin", "Design System", "Komponenten"]}>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-8 text-kivisai-clear-turquoise">Komponenten-Galerie</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {components.map((comp) => (
            <div key={comp.name} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-kivisai-deep-dark-blue">{comp.name}</h3>
              <div className="mb-2 text-gray-600 text-sm">{comp.description}</div>
              <div className="mb-2">{comp.example}</div>
              <div className="text-xs text-gray-400">Props: {comp.props}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-500 text-xs">
          Hinweis: Diese Galerie zeigt alle wichtigen UI-Komponenten mit Live-Beispiel und Props. Für Details siehe die Entwicklerdokumentation.
        </div>
      </div>
    </AdminLayout>
  );
} 