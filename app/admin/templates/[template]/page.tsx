"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Edit, 
  Eye,
  Settings,
  Layout,
  FileText,
  Code,
  Palette
} from "lucide-react";
import { TemplateEngine, type Template, type TemplateSection } from "@/lib/template-engine";

// Create template engine instance
const templateEngine = new TemplateEngine();

// Platzhalterdaten für Templates und Seiten
const templates = {
  LeistungenPageTemplate: {
    name: "LeistungenPageTemplate",
    blocks: ["Hero", "Breadcrumb", "ContentSection", "CTA"],
    pages: [
      { name: "KI-Potenzialanalyse", slug: "/leistungen/ki-potenzialanalyse", status: "OK" },
      { name: "INQA-Coaching", slug: "/leistungen/inqa-coaching", status: "OK" },
      { name: "KI-Prototyping", slug: "/leistungen/ki-prototyping", status: "CTA fehlt" },
    ],
  },
  BlogPageTemplate: {
    name: "BlogPageTemplate",
    blocks: ["Hero", "ContentSection"],
    pages: [
      { name: "Wissens-Hub Blog", slug: "/wissens-hub/blog", status: "Hero fehlt" },
    ],
  },
};

export default function TemplateDetailPage() {
  const params = useParams();
  const templateId = params.template as string;
  
  const [template, setTemplate] = useState<Template | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [editingSection, setEditingSection] = useState<string | null>(null);

  useEffect(() => {
    if (templateId) {
      const foundTemplate = templateEngine.getTemplate(templateId);
      setTemplate(foundTemplate || null);
    }
  }, [templateId]);

  const availableSectionTypes = [
    { id: "hero", name: "Hero Section", icon: Layout },
    { id: "content", name: "Content Section", icon: FileText },
    { id: "cta", name: "Call to Action", icon: Code },
    { id: "features", name: "Features Grid", icon: Palette },
    { id: "stats", name: "Statistics", icon: Settings },
    { id: "testimonials", name: "Testimonials", icon: FileText },
    { id: "faq", name: "FAQ Accordion", icon: FileText },
  ];

  const addSection = () => {
    if (!template) return;
    
    const newSection: TemplateSection = {
      id: `section-${Date.now()}`,
      type: "content",
      component: "ContentSection",
      props: {},
      order: template.sections.length + 1
    };

    setTemplate({
      ...template,
      sections: [...template.sections, newSection]
    });
  };

  const removeSection = (sectionId: string) => {
    if (!template) return;
    
    setTemplate({
      ...template,
      sections: template.sections.filter(s => s.id !== sectionId)
    });
  };

  const updateSection = (sectionId: string, updates: Partial<TemplateSection>) => {
    if (!template) return;
    
    setTemplate({
      ...template,
      sections: template.sections.map(s => 
        s.id === sectionId ? { ...s, ...updates } : s
      )
    });
  };

  const saveTemplate = () => {
    if (!template) return;
    
    const success = templateEngine.updateTemplate(template.id, template);
    if (success) {
      alert("Template erfolgreich gespeichert!");
      setIsEditing(false);
    } else {
      alert("Fehler beim Speichern des Templates!");
    }
  };

  const duplicateTemplate = () => {
    if (!template) return;
    
    const duplicated = templateEngine.duplicateTemplate(template.id, `${template.id}-copy`);
    if (duplicated) {
      alert(`Template "${template.name}" wurde dupliziert!`);
    }
  };

  if (!template) {
    return (
      <AdminLayout breadcrumbs={["Admin", "Templates", "Template nicht gefunden"]}>
        <div className="text-center py-8">
          <p className="text-gray-500">Template nicht gefunden</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout breadcrumbs={["Admin", "Templates", template.name]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
              <div>
                <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">{template.name}</h2>
                <p className="text-gray-600">{template.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" onClick={duplicateTemplate}>
                <Plus className="h-4 w-4 mr-2" />
                Duplizieren
              </Button>
              <Button 
                variant={isEditing ? "kivisai" : "kivisaiOutline"}
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Bearbeitung beenden" : "Bearbeiten"}
              </Button>
              {isEditing && (
                <Button variant="kivisai" onClick={saveTemplate}>
                  <Save className="h-4 w-4 mr-2" />
                  Speichern
                </Button>
              )}
            </div>
          </div>

          {/* Template Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label className="text-sm text-gray-600">Status</Label>
              <Badge variant={template.metadata.status === "active" ? "default" : "secondary"}>
                {template.metadata.status}
              </Badge>
            </div>
            <div>
              <Label className="text-sm text-gray-600">Version</Label>
              <p className="font-medium">{template.metadata.version}</p>
            </div>
            <div>
              <Label className="text-sm text-gray-600">Erstellt</Label>
              <p className="font-medium">{template.metadata.created}</p>
            </div>
            <div>
              <Label className="text-sm text-gray-600">Zuletzt geändert</Label>
              <p className="font-medium">{template.metadata.lastModified}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Template Details */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="sections">Sektionen</TabsTrigger>
                <TabsTrigger value="settings">Einstellungen</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Template-Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="templateName">Template Name</Label>
                      <Input
                        id="templateName"
                        value={template.name}
                        onChange={(e) => setTemplate({ ...template, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="templateDescription">Beschreibung</Label>
                      <Textarea
                        id="templateDescription"
                        value={template.description}
                        onChange={(e) => setTemplate({ ...template, description: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="templateStatus">Status</Label>
                      <Select 
                        value={template.metadata.status} 
                        onValueChange={(value) => setTemplate({
                          ...template,
                          metadata: { ...template.metadata, status: value as any }
                        })}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Entwurf</SelectItem>
                          <SelectItem value="active">Aktiv</SelectItem>
                          <SelectItem value="deprecated">Veraltet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sections" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-kivisai-deep-dark-blue">
                        Sektionen ({template.sections.length})
                      </CardTitle>
                      {isEditing && (
                        <Button variant="kivisaiOutline" onClick={addSection}>
                          <Plus className="h-4 w-4 mr-2" />
                          Sektion hinzufügen
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {template.sections.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Layout className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Keine Sektionen definiert</p>
                        {isEditing && (
                          <p className="text-sm">Klicken Sie auf "Sektion hinzufügen" um zu beginnen</p>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {template.sections.map((section, index) => (
                          <Card key={section.id} className="border border-gray-200">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline">{index + 1}</Badge>
                                  <div>
                                    <p className="font-medium">{section.component}</p>
                                    <p className="text-sm text-gray-500">{section.type}</p>
                                  </div>
                                </div>
                                {isEditing && (
                                  <div className="flex gap-2">
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => setEditingSection(editingSection === section.id ? null : section.id)}
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      onClick={() => removeSection(section.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </CardHeader>
                            {editingSection === section.id && isEditing && (
                              <CardContent className="pt-0">
                                <div className="space-y-3">
                                  <div>
                                    <Label>Sektionstyp</Label>
                                    <Select 
                                      value={section.type} 
                                      onValueChange={(value) => updateSection(section.id, { type: value as any })}
                                    >
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {availableSectionTypes.map(type => (
                                          <SelectItem key={type.id} value={type.id}>
                                            {type.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label>Komponente</Label>
                                    <Input
                                      value={section.component}
                                      onChange={(e) => updateSection(section.id, { component: e.target.value })}
                                    />
                                  </div>
                                  <div>
                                    <Label>Reihenfolge</Label>
                                    <Input
                                      type="number"
                                      value={section.order}
                                      onChange={(e) => updateSection(section.id, { order: parseInt(e.target.value) })}
                                    />
                                  </div>
                                </div>
                              </CardContent>
                            )}
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Template-Einstellungen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Verwendete Farben</Label>
                      <div className="flex gap-2 mt-2">
                        {template.styles.colors.map(color => (
                          <Badge key={color} variant="outline">{color}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>Verwendete Typografie</Label>
                      <div className="flex gap-2 mt-2">
                        {template.styles.typography.map(typography => (
                          <Badge key={typography} variant="outline">{typography}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>Verwendete Abstände</Label>
                      <div className="flex gap-2 mt-2">
                        {template.styles.spacing.map(spacing => (
                          <Badge key={spacing} variant="outline">{spacing}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Template Info */}
          <div className="lg:col-span-1">
            <Card className="border-kivisai-light-cool-gray">
              <CardHeader>
                <CardTitle className="text-kivisai-deep-dark-blue">Template-Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Verwendet auf</p>
                  <p className="font-medium">{template.pages.length} Seiten</p>
                  {template.pages.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {template.pages.slice(0, 3).map(page => (
                        <p key={page} className="text-sm text-gray-500">{page}</p>
                      ))}
                      {template.pages.length > 3 && (
                        <p className="text-sm text-gray-400">+{template.pages.length - 3} weitere</p>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sektionen</p>
                  <p className="font-medium">{template.sections.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Autor</p>
                  <p className="font-medium">{template.metadata.author}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 