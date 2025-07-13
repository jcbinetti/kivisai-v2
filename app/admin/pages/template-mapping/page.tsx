"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Layout, 
  Search, 
  Eye, 
  Edit,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { TemplateEngine } from "@/lib/template-engine";

interface PageTemplateMapping {
  path: string;
  name: string;
  template: string;
  templateName: string;
  status: "active" | "missing" | "custom";
  lastModified?: string;
  sections: string[];
}

export default function TemplateMappingPage() {
  const [mappings, setMappings] = useState<PageTemplateMapping[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTemplateMappings();
  }, []);

  const loadTemplateMappings = () => {
    setIsLoading(true);
    
    // Template Engine verwenden
    const templateEngine = new TemplateEngine();
    const templates = templateEngine.getAllTemplates();
    
    // Seiten-Template-Zuordnung definieren
    const pageMappings: PageTemplateMapping[] = [
      {
        path: "/",
        name: "Startseite",
        template: "landing",
        templateName: "Landing Page",
        status: "active",
        lastModified: "2024-01-15",
        sections: ["hero", "features", "cta"]
      },
      {
        path: "/leistungen",
        name: "Leistungen",
        template: "landing",
        templateName: "Landing Page",
        status: "active",
        lastModified: "2024-01-14",
        sections: ["hero", "features", "cta"]
      },
      {
        path: "/leistungen/ki-potenzialanalyse",
        name: "KI-Potenzialanalyse",
        template: "service",
        templateName: "Service Page",
        status: "active",
        lastModified: "2024-01-13",
        sections: ["hero", "content", "next-steps"]
      },
      {
        path: "/leistungen/ki-prototyping",
        name: "KI-Prototyping",
        template: "service",
        templateName: "Service Page",
        status: "active",
        lastModified: "2024-01-12",
        sections: ["hero", "content", "next-steps"]
      },
      {
        path: "/leistungen/ki-coaching",
        name: "KI-Coaching",
        template: "service",
        templateName: "Service Page",
        status: "active",
        lastModified: "2024-01-11",
        sections: ["hero", "content", "next-steps"]
      },
      {
        path: "/kontakt",
        name: "Kontakt",
        template: "contact",
        templateName: "Contact Page",
        status: "active",
        lastModified: "2024-01-10",
        sections: ["hero", "contact-form", "cal-booking"]
      },
      {
        path: "/ueber-kivisai",
        name: "Über KIVISAI",
        template: "about",
        templateName: "About Page",
        status: "active",
        lastModified: "2024-01-09",
        sections: ["hero", "content", "team"]
      },
      {
        path: "/wissen",
        name: "Wissen",
        template: "wissens-hub",
        templateName: "Wissens-Hub",
        status: "active",
        lastModified: "2024-01-08",
        sections: ["hero", "blog-grid", "category-filter"]
      },
      {
        path: "/evalkit",
        name: "Evalkit",
        template: "evalkit",
        templateName: "Evalkit Page",
        status: "active",
        lastModified: "2024-01-07",
        sections: ["hero", "questionnaire", "results"]
      },
      {
        path: "/loesungen",
        name: "Lösungen",
        template: "solutions",
        templateName: "Solutions Page",
        status: "active",
        lastModified: "2024-01-06",
        sections: ["hero", "solutions-grid", "cta"]
      },
      {
        path: "/use-cases",
        name: "Use Cases",
        template: "use-cases",
        templateName: "Use Cases Page",
        status: "active",
        lastModified: "2024-01-05",
        sections: ["hero", "use-cases-grid", "cta"]
      },
      {
        path: "/termin",
        name: "Termin buchen",
        template: "booking",
        templateName: "Booking Page",
        status: "active",
        lastModified: "2024-01-04",
        sections: ["hero", "cal-booking", "info"]
      }
    ];

    setMappings(pageMappings);
    setIsLoading(false);
  };

  const filteredMappings = mappings.filter(mapping => {
    const matchesSearch = 
      mapping.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.templateName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || mapping.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Aktiv</Badge>;
      case "missing":
        return <Badge className="bg-red-100 text-red-800">Fehlt</Badge>;
      case "custom":
        return <Badge className="bg-blue-100 text-blue-800">Custom</Badge>;
      default:
        return <Badge variant="secondary">Unbekannt</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "missing":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "custom":
        return <Edit className="h-4 w-4 text-blue-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const stats = {
    total: mappings.length,
    active: mappings.filter(m => m.status === "active").length,
    missing: mappings.filter(m => m.status === "missing").length,
    custom: mappings.filter(m => m.status === "custom").length
  };

  if (isLoading) {
    return (
      <AdminLayout breadcrumbs={["Admin", "Pages", "Template-Zuordnung"]}>
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kivisai-clear-turquoise mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Template-Zuordnungen...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout breadcrumbs={["Admin", "Pages", "Template-Zuordnung"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Template-Zuordnung</h1>
          <p className="text-kivisai-pure-white/90">
            Übersicht über verwendete Templates für alle Seiten
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-kivisai-deep-dark-blue">{stats.total}</div>
              <div className="text-sm text-gray-600">Seiten gesamt</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
              <div className="text-sm text-gray-600">Aktive Templates</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-600">{stats.missing}</div>
              <div className="text-sm text-gray-600">Fehlende Templates</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-blue-600">{stats.custom}</div>
              <div className="text-sm text-gray-600">Custom Templates</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Seiten oder Templates suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">Alle Status</option>
                <option value="active">Aktiv</option>
                <option value="missing">Fehlt</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Template Mappings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMappings.map((mapping) => (
            <Card key={mapping.path} className="border-kivisai-light-cool-gray hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(mapping.status)}
                      <CardTitle className="text-lg">{mapping.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusBadge(mapping.status)}
                      <Badge variant="outline" className="text-xs">
                        {mapping.template}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 font-mono">{mapping.path}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Template:</h4>
                    <p className="text-sm text-gray-600">{mapping.templateName}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Sektionen:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mapping.sections.map((section) => (
                        <Badge key={section} variant="outline" className="text-xs">
                          {section}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {mapping.lastModified && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Letzte Änderung:</h4>
                      <p className="text-sm text-gray-600">{mapping.lastModified}</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={mapping.path} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-3 w-3 mr-1" />
                        Ansehen
                      </a>
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3 mr-1" />
                      Bearbeiten
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMappings.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Ergebnisse</h3>
              <p className="text-gray-600">
                Keine Seiten gefunden, die den Suchkriterien entsprechen.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
} 