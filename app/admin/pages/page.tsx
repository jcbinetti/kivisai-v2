"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Search, 
  Filter, 
  Edit, 
  Eye, 
  Settings,
  Plus,
  Copy,
  ExternalLink,
  Calendar,
  User,
  Tag,
  Layout,
  Globe,
  Home,
  Users,
  BookOpen,
  Briefcase,
  Lightbulb,
  HelpCircle
} from "lucide-react";

interface PageData {
  id: string;
  title: string;
  slug: string;
  template: string;
  status: "published" | "draft" | "archived";
  lastModified: string;
  author: string;
  category: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  menuPosition?: number;
  isHomepage: boolean;
  hasCustomLayout: boolean;
}

export default function AdminPagesPage() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [filteredPages, setFilteredPages] = useState<PageData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTemplate, setFilterTemplate] = useState("all");
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  // Load pages data
  useEffect(() => {
    const pagesData: PageData[] = [
      {
        id: "1",
        title: "Startseite",
        slug: "/",
        template: "homepage",
        status: "published",
        lastModified: "2024-01-15T10:30:00Z",
        author: "Admin",
        category: "main",
        tags: ["homepage", "hero"],
        seoTitle: "KIVISAI - KI-Coaching & Beratung",
        seoDescription: "Professionelle KI-Coaching und Beratung für Unternehmen und Einzelpersonen",
        featuredImage: "/images/KIVISAI_logo_TR.png",
        menuPosition: 1,
        isHomepage: true,
        hasCustomLayout: true
      },
      {
        id: "2",
        title: "Leistungen",
        slug: "/leistungen",
        template: "services-overview",
        status: "published",
        lastModified: "2024-01-14T14:20:00Z",
        author: "Admin",
        category: "services",
        tags: ["services", "overview"],
        seoTitle: "Unsere Leistungen - KIVISAI",
        seoDescription: "Entdecken Sie unsere umfassenden KI-Coaching und Beratungsleistungen",
        menuPosition: 2,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "3",
        title: "KI-Potenzialanalyse",
        slug: "/leistungen/ki-potenzialanalyse",
        template: "service-detail",
        status: "published",
        lastModified: "2024-01-13T09:15:00Z",
        author: "Admin",
        category: "services",
        tags: ["ki-potenzialanalyse", "service"],
        seoTitle: "KI-Potenzialanalyse - KIVISAI",
        seoDescription: "Professionelle KI-Potenzialanalyse für Ihr Unternehmen",
        featuredImage: "/images/KIVI_Organisation.png",
        menuPosition: 3,
        isHomepage: false,
        hasCustomLayout: true
      },
      {
        id: "4",
        title: "KI-Coaching",
        slug: "/leistungen/ki-coaching",
        template: "service-detail",
        status: "published",
        lastModified: "2024-01-12T11:30:00Z",
        author: "Admin",
        category: "services",
        tags: ["ki-coaching", "service"],
        seoTitle: "KI-Coaching - KIVISAI",
        seoDescription: "Individuelles KI-Coaching für Ihre Ziele",
        menuPosition: 4,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "6",
        title: "KI-Prototyping",
        slug: "/leistungen/ki-prototyping",
        template: "service-detail",
        status: "published",
        lastModified: "2024-01-10T16:20:00Z",
        author: "Admin",
        category: "services",
        tags: ["ki-prototyping", "service"],
        seoTitle: "KI-Prototyping - KIVISAI",
        seoDescription: "Schnelle KI-Prototypen für Ihre Ideen",
        featuredImage: "/images/KIVI_Menschen_Assistent_Flat.png",
        menuPosition: 6,
        isHomepage: false,
        hasCustomLayout: true
      },
      {
        id: "7",
        title: "Lösungen",
        slug: "/loesungen",
        template: "solutions-overview",
        status: "published",
        lastModified: "2024-01-09T13:10:00Z",
        author: "Admin",
        category: "solutions",
        tags: ["solutions", "overview"],
        seoTitle: "KI-Lösungen - KIVISAI",
        seoDescription: "Maßgeschneiderte KI-Lösungen für verschiedene Bereiche",
        menuPosition: 7,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "8",
        title: "Mensch",
        slug: "/loesungen/mensch",
        template: "solution-detail",
        status: "published",
        lastModified: "2024-01-08T11:30:00Z",
        author: "Admin",
        category: "solutions",
        tags: ["mensch", "solution"],
        seoTitle: "KI-Lösungen für Menschen - KIVISAI",
        seoDescription: "KI-Lösungen, die Menschen in den Mittelpunkt stellen",
        menuPosition: 8,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "9",
        title: "Organisation",
        slug: "/loesungen/organisation",
        template: "solution-detail",
        status: "published",
        lastModified: "2024-01-07T15:45:00Z",
        author: "Admin",
        category: "solutions",
        tags: ["organisation", "solution"],
        seoTitle: "KI-Lösungen für Organisationen - KIVISAI",
        seoDescription: "KI-Transformation für Organisationen",
        menuPosition: 9,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "10",
        title: "Ökosystem",
        slug: "/loesungen/oekosystem",
        template: "solution-detail",
        status: "published",
        lastModified: "2024-01-06T12:20:00Z",
        author: "Admin",
        category: "solutions",
        tags: ["oekosystem", "solution"],
        seoTitle: "KI-Ökosystem-Lösungen - KIVISAI",
        seoDescription: "KI-Lösungen für komplexe Ökosysteme",
        featuredImage: "/images/KIVI_oekosystem.png",
        menuPosition: 10,
        isHomepage: false,
        hasCustomLayout: true
      },
      {
        id: "11",
        title: "Team",
        slug: "/loesungen/team",
        template: "solution-detail",
        status: "published",
        lastModified: "2024-01-05T10:15:00Z",
        author: "Admin",
        category: "solutions",
        tags: ["team", "solution"],
        seoTitle: "KI-Lösungen für Teams - KIVISAI",
        seoDescription: "KI-Integration in Teamarbeit",
        menuPosition: 11,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "12",
        title: "Über KIVISAI",
        slug: "/ueber-kivisai",
        template: "about",
        status: "published",
        lastModified: "2024-01-04T14:30:00Z",
        author: "Admin",
        category: "about",
        tags: ["about", "company"],
        seoTitle: "Über KIVISAI - KI-Coaching & Beratung",
        seoDescription: "Lernen Sie KIVISAI kennen - Ihre Experten für KI-Coaching",
        featuredImage: "/images/KIVI_Team_Flat.png",
        menuPosition: 12,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "13",
        title: "Team & Netzwerk",
        slug: "/ueber-kivisai/team-netzwerk",
        template: "team",
        status: "published",
        lastModified: "2024-01-03T09:20:00Z",
        author: "Admin",
        category: "about",
        tags: ["team", "network"],
        seoTitle: "Team & Netzwerk - KIVISAI",
        seoDescription: "Unser Team und Netzwerk von KI-Experten",
        featuredImage: "/images/KIVI_Team_Flat.png",
        menuPosition: 13,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "14",
        title: "Wissen",
        slug: "/wissen",
        template: "knowledge-overview",
        status: "published",
        lastModified: "2024-01-02T11:45:00Z",
        author: "Admin",
        category: "knowledge",
        tags: ["knowledge", "overview"],
        seoTitle: "Wissen - KIVISAI",
        seoDescription: "KI-Wissen und Ressourcen",
        menuPosition: 14,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "15",
        title: "Blog",
        slug: "/wissen/blog",
        template: "blog-overview",
        status: "published",
        lastModified: "2024-01-01T16:10:00Z",
        author: "Admin",
        category: "knowledge",
        tags: ["blog", "articles"],
        seoTitle: "Blog - KIVISAI",
        seoDescription: "Aktuelle Artikel und Insights zu KI",
        menuPosition: 15,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "16",
        title: "Use Cases",
        slug: "/use-cases",
        template: "use-cases-overview",
        status: "published",
        lastModified: "2023-12-31T13:25:00Z",
        author: "Admin",
        category: "use-cases",
        tags: ["use-cases", "overview"],
        seoTitle: "Use Cases - KIVISAI",
        seoDescription: "Praktische KI-Anwendungsfälle",
        menuPosition: 16,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "17",
        title: "Kontakt",
        slug: "/kontakt",
        template: "contact",
        status: "published",
        lastModified: "2023-12-30T10:30:00Z",
        author: "Admin",
        category: "contact",
        tags: ["contact", "form"],
        seoTitle: "Kontakt - KIVISAI",
        seoDescription: "Kontaktieren Sie uns für KI-Coaching",
        menuPosition: 17,
        isHomepage: false,
        hasCustomLayout: false
      },
      {
        id: "18",
        title: "Termin buchen",
        slug: "/termin",
        template: "booking",
        status: "published",
        lastModified: "2023-12-29T15:20:00Z",
        author: "Admin",
        category: "contact",
        tags: ["booking", "appointment"],
        seoTitle: "Termin buchen - KIVISAI",
        seoDescription: "Buchen Sie Ihren KI-Coaching Termin",
        menuPosition: 18,
        isHomepage: false,
        hasCustomLayout: false
      }
    ];
    setPages(pagesData);
    setFilteredPages(pagesData);
  }, []);

  // Filter pages
  useEffect(() => {
    let filtered = pages;

    if (searchTerm) {
      filtered = filtered.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(page => page.category === filterCategory);
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter(page => page.status === filterStatus);
    }

    if (filterTemplate !== "all") {
      filtered = filtered.filter(page => page.template === filterTemplate);
    }

    setFilteredPages(filtered);
  }, [pages, searchTerm, filterCategory, filterStatus, filterTemplate]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      published: "bg-green-100 text-green-800",
      draft: "bg-yellow-100 text-yellow-800",
      archived: "bg-gray-100 text-gray-800"
    };

    const labels = {
      published: "Veröffentlicht",
      draft: "Entwurf",
      archived: "Archiviert"
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      main: <Home className="h-4 w-4" />,
      services: <Briefcase className="h-4 w-4" />,
      solutions: <Lightbulb className="h-4 w-4" />,
      about: <Users className="h-4 w-4" />,
      knowledge: <BookOpen className="h-4 w-4" />,
      "use-cases": <HelpCircle className="h-4 w-4" />,
      contact: <Globe className="h-4 w-4" />
    };

    return icons[category as keyof typeof icons] || <FileText className="h-4 w-4" />;
  };

  const categories = [
    { value: "all", label: "Alle Kategorien" },
    { value: "main", label: "Hauptseiten" },
    { value: "services", label: "Leistungen" },
    { value: "solutions", label: "Lösungen" },
    { value: "about", label: "Über uns" },
    { value: "knowledge", label: "Wissen" },
    { value: "use-cases", label: "Use Cases" },
    { value: "contact", label: "Kontakt" }
  ];

  const templates = [
    { value: "all", label: "Alle Templates" },
    { value: "homepage", label: "Homepage" },
    { value: "services-overview", label: "Services Übersicht" },
    { value: "service-detail", label: "Service Detail" },
    { value: "solutions-overview", label: "Lösungen Übersicht" },
    { value: "solution-detail", label: "Lösung Detail" },
    { value: "about", label: "Über uns" },
    { value: "team", label: "Team" },
    { value: "knowledge-overview", label: "Wissen Übersicht" },
    { value: "blog-overview", label: "Blog Übersicht" },
    { value: "use-cases-overview", label: "Use Cases Übersicht" },
    { value: "contact", label: "Kontakt" },
    { value: "booking", label: "Buchung" }
  ];

  return (
    <AdminLayout breadcrumbs={["Admin", "Seiten"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Seitenverwaltung</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" size="sm" aria-label="Neue Seite anlegen" title="Neue Seite anlegen">
                <Plus className="h-4 w-4 mr-2" />
                Neue Seite
              </Button>
              <Button variant="kivisai" size="sm" aria-label="Einstellungen öffnen" title="Einstellungen öffnen">
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Seiten durchsuchen..."
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
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <select
              value={filterTemplate}
              onChange={(e) => setFilterTemplate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              {templates.map(template => (
                <option key={template.value} value={template.value}>
                  {template.label}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Alle Status</option>
              <option value="published">Veröffentlicht</option>
              <option value="draft">Entwurf</option>
              <option value="archived">Archiviert</option>
            </select>
          </div>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <Card 
              key={page.id} 
              className="border-kivisai-light-cool-gray hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(page.category)}
                    <div>
                      <h3 className="font-medium text-kivisai-deep-dark-blue">
                        {page.title}
                        {page.isHomepage && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Homepage
                          </Badge>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500">{page.slug}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {getStatusBadge(page.status)}
                    {page.hasCustomLayout && (
                      <Badge variant="outline" className="text-xs">
                        <Layout className="h-3 w-3 mr-1" />
                        Custom
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Tag className="h-3 w-3 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">Template:</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {page.template}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">Letzte Änderung:</span>
                    </div>
                    <p className="text-xs text-gray-500">{formatDate(page.lastModified)}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <User className="h-3 w-3 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">Autor:</span>
                    </div>
                    <p className="text-xs text-gray-500">{page.author}</p>
                  </div>

                  {page.tags.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="h-3 w-3 text-gray-400" />
                        <span className="text-xs font-medium text-gray-600">Tags:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {page.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {page.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{page.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1" aria-label="Seite ansehen" title="Seite ansehen">
                      <Eye className="h-4 w-4 mr-2" />
                      Ansehen
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1" aria-label="Seite bearbeiten" title="Seite bearbeiten">
                      <Edit className="h-4 w-4 mr-2" />
                      Bearbeiten
                    </Button>
                    <Button variant="ghost" size="sm" aria-label="Seite extern öffnen" title="Seite extern öffnen">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPages.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Keine Seiten gefunden
            </h3>
            <p className="text-gray-500">
              {searchTerm || filterCategory !== "all" || filterStatus !== "all" || filterTemplate !== "all"
                ? "Versuchen Sie andere Suchkriterien oder Filter."
                : "Erstellen Sie Ihre erste Seite, um zu beginnen."
              }
            </p>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gesamt</p>
                  <p className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    {pages.length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-kivisai-clear-turquoise" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Veröffentlicht</p>
                  <p className="text-2xl font-bold text-green-600">
                    {pages.filter(page => page.status === "published").length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Entwürfe</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {pages.filter(page => page.status === "draft").length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Templates</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {new Set(pages.map(page => page.template)).size}
                  </p>
                </div>
                <Layout className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
} 