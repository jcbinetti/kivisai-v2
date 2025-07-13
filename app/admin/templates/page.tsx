"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Copy, 
  Eye,
  Search,
  Filter,
  FileText,
  Palette,
  Code
} from "lucide-react";
import { TemplateEngine } from "@/lib/template-engine";

// Create template engine instance
const templateEngine = new TemplateEngine();

interface Template {
  id: string;
  name: string;
  description: string;
  type: string;
  category: string;
  sections: string[];
  usageCount: number;
  lastModified: string;
  status: "active" | "draft" | "archived";
}

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Lade Templates vom Template Engine
    const loadTemplates = () => {
      const templateStats = templateEngine.getTemplateStats();
      const availableTemplates = templateEngine.getAllTemplates();
      
      // Konvertiere zu unserem Template-Format
      const templateList: Template[] = availableTemplates.map((template: any, index: number) => ({
        id: template.id || `template-${index}`,
        name: template.name,
        description: template.description || "Keine Beschreibung verfügbar",
        type: template.type || "page",
        category: template.category || "general",
        sections: template.sections?.map((s: any) => s.type) || [],
        usageCount: Math.floor(Math.random() * 10) + 1, // Simulierte Nutzung
        lastModified: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: "active" as const
      }));

      setTemplates(templateList);
      setFilteredTemplates(templateList);
    };

    loadTemplates();
  }, []);

  useEffect(() => {
    // Filtere Templates basierend auf Suche und Filtern
    let filtered = templates;

    if (searchTerm) {
      filtered = filtered.filter(template =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(template => template.category === filterCategory);
    }

    if (filterType !== "all") {
      filtered = filtered.filter(template => template.type === filterType);
    }

    setFilteredTemplates(filtered);
  }, [templates, searchTerm, filterCategory, filterType]);

  const createTemplate = () => {
    alert("Neues Template wird erstellt... (Demo)");
  };

  const editTemplate = (templateId: string) => {
    window.location.href = `/admin/templates/${templateId}`;
  };

  const duplicateTemplate = (templateId: string) => {
    alert(`Template ${templateId} wird dupliziert... (Demo)`);
  };

  const deleteTemplate = (templateId: string) => {
    if (confirm("Sind Sie sicher, dass Sie dieses Template löschen möchten?")) {
      alert(`Template ${templateId} wurde gelöscht! (Demo)`);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Aktiv</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Entwurf</Badge>;
      case "archived":
        return <Badge className="bg-gray-100 text-gray-800">Archiviert</Badge>;
      default:
        return <Badge variant="secondary">Unbekannt</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "page":
        return <Badge variant="outline" className="text-blue-600">Seite</Badge>;
      case "section":
        return <Badge variant="outline" className="text-green-600">Sektion</Badge>;
      case "component":
        return <Badge variant="outline" className="text-purple-600">Komponente</Badge>;
      default:
        return <Badge variant="outline">Unbekannt</Badge>;
    }
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Templates"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Template Management</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline">
                <Filter className="h-4 w-4 mr-2" />
                Erweiterte Filter
              </Button>
              <Button variant="kivisai" onClick={createTemplate}>
                <Plus className="h-4 w-4 mr-2" />
                Neues Template
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Templates durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Alle Kategorien</option>
              <option value="service">Service</option>
              <option value="blog">Blog</option>
              <option value="landing">Landing Page</option>
              <option value="general">Allgemein</option>
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Alle Typen</option>
              <option value="page">Seiten</option>
              <option value="section">Sektionen</option>
              <option value="component">Komponenten</option>
            </select>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="border-kivisai-light-cool-gray hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-kivisai-deep-dark-blue mb-2">
                      {template.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-3">
                      {template.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeBadge(template.type)}
                      {getStatusBadge(template.status)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Sektionen:</span>
                    <span className="font-medium">{template.sections.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Verwendung:</span>
                    <span className="font-medium">{template.usageCount}x</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Zuletzt geändert:</span>
                    <span className="font-medium">{template.lastModified}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => editTemplate(template.id)}
                      className="flex-1"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Bearbeiten
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => duplicateTemplate(template.id)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTemplate(template.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Templates gefunden</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || filterCategory !== "all" || filterType !== "all"
                ? "Versuchen Sie andere Suchkriterien oder Filter."
                : "Erstellen Sie Ihr erstes Template."}
            </p>
            {!searchTerm && filterCategory === "all" && filterType === "all" && (
              <Button variant="kivisai" onClick={createTemplate}>
                <Plus className="h-4 w-4 mr-2" />
                Erstes Template erstellen
              </Button>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
} 