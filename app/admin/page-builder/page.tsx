"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Save, 
  Eye, 
  Plus, 
  Trash2, 
  Copy, 
  MoveUp, 
  MoveDown,
  LayoutTemplate,
  Type,
  Image as ImageIcon,
  Video,
  FileText,
  Code,
  BarChart3,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Settings,
  Palette,
  Zap,
  Star,
  Award,
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
  Heart,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Building,
  Briefcase,
  GraduationCap,
  BookOpen,
  Newspaper,
  Megaphone,
  MessageSquare,
  ThumbsUp,
  Share2,
  Link,
  Hash,
  Tag,
  Filter,
  Search,
  Grid,
  List,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Menu,
  Sidebar
} from "lucide-react";
import { TemplateEngine } from "@/lib/template-engine";

// Create template engine instance
const templateEngine = new TemplateEngine();

interface Section {
  id: string;
  type: string;
  title: string;
  content: Record<string, unknown>;
  order: number;
}

interface PageData {
  id: string;
  title: string;
  slug: string;
  description: string;
  template: string;
  sections: Section[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  status: "draft" | "published";
}

export default function AdminPageBuilder() {
  const [pageData, setPageData] = useState<PageData>({
    id: "",
    title: "",
    slug: "",
    description: "",
    template: "",
    sections: [],
    seo: {
      title: "",
      description: "",
      keywords: []
    },
    status: "draft"
  });

  const [activeTab, setActiveTab] = useState("content");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      LayoutTemplate,
      FileText,
      ArrowRight,
      Grid,
      BarChart3,
      Menu,
      Sidebar,
      Type,
      ImageIcon,
      Video,
      Code,
      Users,
      Mail,
      Phone,
      MapPin,
      Globe,
      Settings,
      Palette,
      Zap,
      Star,
      Award,
      Target,
      TrendingUp,
      Lightbulb,
      Shield,
      Heart,
      CheckCircle,
      Play,
      Download,
      ExternalLink,
      Calendar,
      Clock,
      User,
      Building,
      Briefcase,
      GraduationCap,
      BookOpen,
      Newspaper,
      Megaphone,
      MessageSquare,
      ThumbsUp,
      Share2,
      Link,
      Hash,
      Tag,
      Filter,
      Search,
      List,
      Columns,
      Rows,
      Square,
      Circle,
      Triangle,
      Hexagon,
      Octagon
    };
    
    return iconMap[iconName] || LayoutTemplate;
  };

  // Verfügbare Templates laden
  const availableTemplates = templateEngine.getAvailableTemplates();
  const availableSections = templateEngine.getAvailableSections().map(section => ({
    ...section,
    icon: getIconComponent(section.icon || "LayoutTemplate")
  }));

  useEffect(() => {
    // Lade Beispiel-Seitendaten
    setPageData({
      id: "ki-potenzialanalyse",
      title: "KI-Potenzialanalyse",
      slug: "/leistungen/ki-potenzialanalyse",
      description: "Entdecken Sie das KI-Potenzial Ihres Unternehmens",
      template: "service-page",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: "Hero Section",
          content: {
            title: "KI-Potenzialanalyse",
            subtitle: "Entdecken Sie das KI-Potenzial Ihres Unternehmens",
            description: "Systematische Analyse und Bewertung der KI-Implementierungsmöglichkeiten in Ihrem Unternehmen.",
            ctaText: "Jetzt analysieren",
            ctaLink: "/termin",
            backgroundImage: "/images/ki-potenzialanalyse-hero.jpg"
          },
          order: 1
        },
        {
          id: "features",
          type: "features",
          title: "Features Section",
          content: {
            title: "Was beinhaltet die Analyse?",
            features: [
              {
                title: "Technische Bewertung",
                description: "Analyse der bestehenden IT-Infrastruktur und KI-Reife",
                icon: "settings"
              },
              {
                title: "Prozessanalyse",
                description: "Identifikation von KI-optimierbaren Geschäftsprozessen",
                icon: "workflow"
              },
              {
                title: "ROI-Prognose",
                description: "Detaillierte Kosten-Nutzen-Analyse für KI-Implementierungen",
                icon: "chart"
              }
            ]
          },
          order: 2
        }
      ],
      seo: {
        title: "KI-Potenzialanalyse - KIVISAI",
        description: "Entdecken Sie das KI-Potenzial Ihres Unternehmens mit unserer systematischen Analyse.",
        keywords: ["KI-Potenzialanalyse", "Strategisches Coaching", "KI-Implementierung", "Künstliche Intelligenz"]
      },
      status: "draft"
    });
  }, []);

  const addSection = (sectionType: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      type: sectionType,
      title: `${sectionType} Section`,
      content: {},
      order: pageData.sections.length + 1
    };

    setPageData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const removeSection = (sectionId: string) => {
    setPageData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  const updateSectionContent = (sectionId: string, content: Record<string, unknown>) => {
    setPageData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? { ...section, content: { ...section.content, ...content } }
          : section
      )
    }));
  };

  const moveSection = (sectionId: string, direction: "up" | "down") => {
    setPageData(prev => {
      const sections = [...prev.sections];
      const index = sections.findIndex(section => section.id === sectionId);
      
      if (direction === "up" && index > 0) {
        [sections[index], sections[index - 1]] = [sections[index - 1], sections[index]];
      } else if (direction === "down" && index < sections.length - 1) {
        [sections[index], sections[index + 1]] = [sections[index + 1], sections[index]];
      }
      
      return { ...prev, sections };
    });
  };

  const duplicateSection = (sectionId: string) => {
    const sectionToDuplicate = pageData.sections.find(section => section.id === sectionId);
    if (sectionToDuplicate) {
      const newSection: Section = {
        ...sectionToDuplicate,
        id: `section-${Date.now()}`,
        title: `${sectionToDuplicate.title} (Kopie)`,
        order: pageData.sections.length + 1
      };
      
      setPageData(prev => ({
        ...prev,
        sections: [...prev.sections, newSection]
      }));
    }
  };

  const savePage = async () => {
    try {
      // Hier würde die API-Integration erfolgen
      console.log("Saving page:", pageData);
      alert("Seite wurde erfolgreich gespeichert!");
    } catch (error) {
      console.error("Error saving page:", error);
      alert("Fehler beim Speichern der Seite");
    }
  };

  const publishPage = async () => {
    try {
      const updatedPageData = { ...pageData, status: "published" as const };
      console.log("Publishing page:", updatedPageData);
      setPageData(updatedPageData);
      alert("Seite wurde erfolgreich veröffentlicht!");
    } catch (error) {
      console.error("Error publishing page:", error);
      alert("Fehler beim Veröffentlichen der Seite");
    }
  };

  const renderSectionEditor = (section: Section) => {
    switch (section.type) {
      case "hero":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Titel</Label>
              <Input
                id="hero-title"
                value={section.content.title as string || ""}
                onChange={(e) => updateSectionContent(section.id, { title: e.target.value })}
                placeholder="Hero Titel"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Untertitel</Label>
              <Input
                id="hero-subtitle"
                value={section.content.subtitle as string || ""}
                onChange={(e) => updateSectionContent(section.id, { subtitle: e.target.value })}
                placeholder="Hero Untertitel"
              />
            </div>
            <div>
              <Label htmlFor="hero-description">Beschreibung</Label>
              <Textarea
                id="hero-description"
                value={section.content.description as string || ""}
                onChange={(e) => updateSectionContent(section.id, { description: e.target.value })}
                placeholder="Hero Beschreibung"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hero-cta-text">CTA Text</Label>
                <Input
                  id="hero-cta-text"
                  value={section.content.ctaText as string || ""}
                  onChange={(e) => updateSectionContent(section.id, { ctaText: e.target.value })}
                  placeholder="Jetzt starten"
                />
              </div>
              <div>
                <Label htmlFor="hero-cta-link">CTA Link</Label>
                <Input
                  id="hero-cta-link"
                  value={section.content.ctaLink as string || ""}
                  onChange={(e) => updateSectionContent(section.id, { ctaLink: e.target.value })}
                  placeholder="/termin"
                />
              </div>
            </div>
          </div>
        );
      
      case "features":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="features-title">Titel</Label>
              <Input
                id="features-title"
                value={section.content.title as string || ""}
                onChange={(e) => updateSectionContent(section.id, { title: e.target.value })}
                placeholder="Features Titel"
              />
            </div>
            <div>
              <Label>Features</Label>
              <div className="space-y-2">
                {(section.content.features as Array<Record<string, unknown>> || []).map((feature, index) => (
                  <div key={index} className="border p-3 rounded">
                    <Input
                      value={feature.title as string || ""}
                      onChange={(e) => {
                        const features = [...(section.content.features as Array<Record<string, unknown>> || [])];
                        features[index] = { ...features[index], title: e.target.value };
                        updateSectionContent(section.id, { features });
                      }}
                      placeholder="Feature Titel"
                      className="mb-2"
                    />
                    <Textarea
                      value={feature.description as string || ""}
                      onChange={(e) => {
                        const features = [...(section.content.features as Array<Record<string, unknown>> || [])];
                        features[index] = { ...features[index], description: e.target.value };
                        updateSectionContent(section.id, { features });
                      }}
                      placeholder="Feature Beschreibung"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8 text-gray-500">
            <p>Editor für {section.type} wird entwickelt...</p>
          </div>
        );
    }
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Page Builder"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Page Builder</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" onClick={() => setIsPreviewMode(!isPreviewMode)} aria-label="Vorschau umschalten" title="Vorschau umschalten">
                <Eye className="h-4 w-4 mr-2" />
                {isPreviewMode ? "Editor" : "Vorschau"}
              </Button>
              <Button variant="kivisaiOutline" onClick={savePage} aria-label="Seite speichern" title="Seite speichern">
                <Save className="h-4 w-4 mr-2" />
                Speichern
              </Button>
              <Button variant="kivisai" onClick={publishPage} aria-label="Seite veröffentlichen" title="Seite veröffentlichen">
                Veröffentlichen
              </Button>
            </div>
          </div>

          {/* Page Selection and Template Assignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Label htmlFor="page-select">Seite auswählen</Label>
              <select
                id="page-select"
                value={pageData.slug}
                onChange={(e) => {
                  const selectedPage = e.target.value;
                  // Hier würde die Seite aus der Datenbank geladen werden
                  console.log("Seite ausgewählt:", selectedPage);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="">Seite auswählen...</option>
                <option value="/">Startseite</option>
                <option value="/leistungen">Leistungen</option>
                <option value="/leistungen/ki-potenzialanalyse">KI-Potenzialanalyse</option>
                <option value="/leistungen/ki-coaching">KI-Coaching</option>
                <option value="/leistungen/ki-prototyping">KI-Prototyping</option>
                <option value="/loesungen">Lösungen</option>
                <option value="/loesungen/mensch">Mensch</option>
                <option value="/loesungen/organisation">Organisation</option>
                <option value="/loesungen/oekosystem">Ökosystem</option>
                <option value="/loesungen/team">Team</option>
                <option value="/ueber-kivisai">Über KIVISAI</option>
                <option value="/ueber-kivisai/team-netzwerk">Team & Netzwerk</option>
                <option value="/wissen">Wissen</option>
                <option value="/wissen/blog">Blog</option>
                <option value="/use-cases">Use Cases</option>
                <option value="/kontakt">Kontakt</option>
                <option value="/termin">Termin buchen</option>
              </select>
            </div>
            <div>
              <Label htmlFor="template-select">Template zuweisen</Label>
              <select
                id="template-select"
                value={pageData.template}
                onChange={(e) => setPageData(prev => ({ ...prev, template: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="">Template auswählen...</option>
                {availableTemplates.map(template => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="menu-position">Menü-Position</Label>
              <Input
                id="menu-position"
                type="number"
                value={pageData.sections.length > 0 ? pageData.sections[0].order : 1}
                onChange={(e) => {
                  const position = parseInt(e.target.value) || 1;
                  setPageData(prev => ({
                    ...prev,
                    sections: prev.sections.map(section => ({ ...section, order: position }))
                  }));
                }}
                placeholder="1"
                className="w-full"
              />
            </div>
          </div>

          {/* Page Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="page-title">Seitentitel</Label>
              <Input
                id="page-title"
                value={pageData.title}
                onChange={(e) => setPageData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Seitentitel"
              />
            </div>
            <div>
              <Label htmlFor="page-slug">Slug</Label>
              <Input
                id="page-slug"
                value={pageData.slug}
                onChange={(e) => setPageData(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="/seite"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sections List */}
          <div className="lg:col-span-1">
            <Card className="border-kivisai-light-cool-gray">
              <CardHeader>
                <CardTitle className="text-kivisai-deep-dark-blue">Sektionen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pageData.sections.map((section) => (
                    <div
                      key={section.id}
                      className={`p-3 border rounded cursor-pointer transition-colors ${
                        selectedSection === section.id
                          ? "border-kivisai-clear-turquoise bg-kivisai-clear-turquoise/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedSection(section.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <LayoutTemplate className="h-4 w-4 text-kivisai-clear-turquoise" />
                          <span className="font-medium text-sm">{section.title}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {section.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div>
                  <Label className="text-sm font-medium">Neue Sektion hinzufügen</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {availableSections.slice(0, 6).map((section) => (
                      <Button
                        key={section.type}
                        variant="outline"
                        size="sm"
                        onClick={() => addSection(section.type)}
                        className="text-xs"
                      >
                        {section.icon && <section.icon className="h-3 w-3 mr-1" />}
                        {section.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section Editor or Preview */}
          <div className="lg:col-span-2">
            {isPreviewMode ? (
              <Card className="border-kivisai-light-cool-gray">
                <CardHeader>
                  <CardTitle className="text-kivisai-deep-dark-blue">Vorschau</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pageData.sections.map((section) => (
                      <div key={section.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium text-kivisai-deep-dark-blue">{section.title}</h3>
                          <Badge variant="outline" className="text-xs">{section.type}</Badge>
                        </div>
                        <div className="bg-gray-50 rounded p-4 min-h-[100px]">
                          {section.type === "hero" && (
                            <div className="text-center">
                              <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">
                                {section.content.title as string || "Hero Titel"}
                              </h2>
                              <p className="text-gray-600 mb-4">
                                {section.content.subtitle as string || "Hero Untertitel"}
                              </p>
                              <Button variant="kivisai">
                                {section.content.ctaText as string || "Call to Action"}
                              </Button>
                            </div>
                          )}
                          {section.type === "features" && (
                            <div>
                              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-4">
                                {section.content.title as string || "Features"}
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {(section.content.features as Array<any> || []).map((feature, index) => (
                                  <div key={index} className="text-center p-4 bg-white rounded border">
                                    <div className="w-8 h-8 bg-kivisai-vibrant-turquoise rounded-full mx-auto mb-2 flex items-center justify-center">
                                      <Star className="h-4 w-4 text-white" />
                                    </div>
                                    <h4 className="font-medium text-kivisai-deep-dark-blue">
                                      {feature.title || `Feature ${index + 1}`}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {feature.description || "Feature Beschreibung"}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {section.type === "content" && (
                            <div>
                              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-4">
                                {section.content.title as string || "Content"}
                              </h3>
                              <p className="text-gray-600">
                                {section.content.content as string || "Content Text wird hier angezeigt..."}
                              </p>
                            </div>
                          )}
                          {section.type === "cta" && (
                            <div className="text-center bg-kivisai-light-cool-gray p-6 rounded-lg">
                              <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
                                {section.content.title as string || "Call to Action"}
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {section.content.description as string || "CTA Beschreibung"}
                              </p>
                              <Button variant="kivisai">
                                {section.content.buttonText as string || "Button"}
                              </Button>
                            </div>
                          )}
                          {!["hero", "features", "content", "cta"].includes(section.type) && (
                            <div className="text-center text-gray-500">
                              <LayoutTemplate className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                              <p>Vorschau für {section.type} wird entwickelt...</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {pageData.sections.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <LayoutTemplate className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Keine Sektionen vorhanden. Fügen Sie eine Sektion hinzu, um die Vorschau zu sehen.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-kivisai-light-cool-gray">
                <CardHeader>
                  <CardTitle className="text-kivisai-deep-dark-blue">
                    {selectedSection ? "Sektion bearbeiten" : "Sektion auswählen"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedSection ? (
                    <div className="space-y-4">
                      {(() => {
                        const section = pageData.sections.find(s => s.id === selectedSection);
                        if (!section) return null;

                        return (
                          <>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Input
                                  value={section.title}
                                  onChange={(e) => {
                                    setPageData(prev => ({
                                      ...prev,
                                      sections: prev.sections.map(s =>
                                        s.id === selectedSection
                                          ? { ...s, title: e.target.value }
                                          : s
                                      )
                                    }));
                                  }}
                                  className="font-medium"
                                />
                                <Badge variant="outline">{section.type}</Badge>
                              </div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => moveSection(selectedSection, "up")}
                                  aria-label="Abschnitt nach oben"
                                  title="Abschnitt nach oben"
                                >
                                  ↑
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => moveSection(selectedSection, "down")}
                                  aria-label="Abschnitt nach unten"
                                  title="Abschnitt nach unten"
                                >
                                  ↓
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => duplicateSection(selectedSection)}
                                  aria-label="Abschnitt duplizieren"
                                  title="Abschnitt duplizieren"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeSection(selectedSection)}
                                  className="text-red-500"
                                  aria-label="Abschnitt löschen"
                                  title="Abschnitt löschen"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <Separator />
                            {renderSectionEditor(section)}
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <LayoutTemplate className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Wählen Sie eine Sektion aus, um sie zu bearbeiten</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* SEO Settings */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="text-kivisai-deep-dark-blue">SEO-Einstellungen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="seo-title">SEO Titel</Label>
                <Input
                  id="seo-title"
                  value={pageData.seo.title}
                  onChange={(e) => setPageData(prev => ({
                    ...prev,
                    seo: { ...prev.seo, title: e.target.value }
                  }))}
                  placeholder="SEO Titel"
                />
              </div>
              <div>
                <Label htmlFor="seo-description">SEO Beschreibung</Label>
                <Textarea
                  id="seo-description"
                  value={pageData.seo.description}
                  onChange={(e) => setPageData(prev => ({
                    ...prev,
                    seo: { ...prev.seo, description: e.target.value }
                  }))}
                  placeholder="SEO Beschreibung"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
