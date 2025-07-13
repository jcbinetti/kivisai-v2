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
  Download,
  Upload,
  File,
  FileImage,
  FileVideo,
  FileArchive,
  FileSpreadsheet,
  Trash2,
  Archive,
  Globe,
  Lock,
  Unlock,
  Star,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Building,
  Lightbulb,
  Target,
  TrendingUp,
  Shield,
  Heart,
  Zap,
  Palette,
  Settings as SettingsIcon,
  Grid,
  List
} from "lucide-react";

interface DocumentData {
  id: string;
  title: string;
  filename: string;
  originalName: string;
  url: string;
  size: number;
  type: string;
  category: string;
  tags: string[];
  uploadedAt: string;
  author: string;
  description: string;
  isPublic: boolean;
  downloadCount: number;
  assignedTo: string[];
  status: "active" | "archived" | "draft";
  thumbnailUrl?: string;
}

export default function AdminContentPage() {
  const [documents, setDocuments] = useState<DocumentData[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<DocumentData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("documents");

  // Load documents data
  useEffect(() => {
    const documentsData: DocumentData[] = [
      {
        id: "1",
        title: "INQA Coach Zertifizierung",
        filename: "inqa-coach-zertifizierung.pdf",
        originalName: "INQA_Coach_Zertifizierung_2025.pdf",
        url: "/documents/inqa-coach-zertifizierung.pdf",
        size: 2500000,
        type: "pdf",
        category: "certification",
        tags: ["inqa", "coach", "zertifizierung", "2025"],
        uploadedAt: "2024-01-15T10:30:00Z",
        author: "Admin",
        description: "Offizielle INQA Coach Zertifizierung für 2025-2026",
        isPublic: true,
        downloadCount: 45,
        assignedTo: ["/leistungen/inqa-coaching"],
        status: "active"
      },
      {
        id: "2",
        title: "KI-Potenzialanalyse Guide",
        filename: "ki-potenzialanalyse-guide.pdf",
        originalName: "KI_Potenzialanalyse_Guide_v2.1.pdf",
        url: "/documents/ki-potenzialanalyse-guide.pdf",
        size: 1800000,
        type: "pdf",
        category: "guide",
        tags: ["ki-potenzialanalyse", "guide", "anleitung"],
        uploadedAt: "2024-01-14T14:20:00Z",
        author: "Admin",
        description: "Detaillierter Guide zur KI-Potenzialanalyse",
        isPublic: true,
        downloadCount: 128,
        assignedTo: ["/leistungen/ki-potenzialanalyse"],
        status: "active"
      },
      {
        id: "3",
        title: "KI-Coaching Methoden",
        filename: "ki-coaching-methoden.pdf",
        originalName: "KI_Coaching_Methoden_Handbuch.pdf",
        url: "/documents/ki-coaching-methoden.pdf",
        size: 3200000,
        type: "pdf",
        category: "methodology",
        tags: ["ki-coaching", "methoden", "handbuch"],
        uploadedAt: "2024-01-13T09:15:00Z",
        author: "Admin",
        description: "Umfassendes Handbuch zu KI-Coaching Methoden",
        isPublic: false,
        downloadCount: 23,
        assignedTo: ["/leistungen/ki-coaching"],
        status: "active"
      },
      {
        id: "4",
        title: "KI-Prototyping Checkliste",
        filename: "ki-prototyping-checkliste.pdf",
        originalName: "KI_Prototyping_Checkliste.pdf",
        url: "/documents/ki-prototyping-checkliste.pdf",
        size: 850000,
        type: "pdf",
        category: "checklist",
        tags: ["ki-prototyping", "checkliste", "prototyping"],
        uploadedAt: "2024-01-12T11:30:00Z",
        author: "Admin",
        description: "Praktische Checkliste für KI-Prototyping Projekte",
        isPublic: true,
        downloadCount: 67,
        assignedTo: ["/leistungen/ki-prototyping"],
        status: "active"
      },
      {
        id: "5",
        title: "KIVISAI Brand Guidelines",
        filename: "kivisai-brand-guidelines.pdf",
        originalName: "KIVISAI_Brand_Guidelines_2024.pdf",
        url: "/documents/kivisai-brand-guidelines.pdf",
        size: 4200000,
        type: "pdf",
        category: "branding",
        tags: ["branding", "guidelines", "kivisai", "2024"],
        uploadedAt: "2024-01-11T08:45:00Z",
        author: "Admin",
        description: "Offizielle KIVISAI Brand Guidelines 2024",
        isPublic: true,
        downloadCount: 34,
        assignedTo: ["/ueber-kivisai"],
        status: "active"
      },
      {
        id: "6",
        title: "KI-Transformation Roadmap",
        filename: "ki-transformation-roadmap.pdf",
        originalName: "KI_Transformation_Roadmap_Template.xlsx",
        url: "/documents/ki-transformation-roadmap.xlsx",
        size: 1200000,
        type: "spreadsheet",
        category: "template",
        tags: ["ki-transformation", "roadmap", "template", "xlsx"],
        uploadedAt: "2024-01-10T16:20:00Z",
        author: "Admin",
        description: "Excel-Template für KI-Transformation Roadmaps",
        isPublic: true,
        downloadCount: 89,
        assignedTo: ["/loesungen/organisation"],
        status: "active"
      },
      {
        id: "7",
        title: "KI-Ethik Guidelines",
        filename: "ki-ethik-guidelines.pdf",
        originalName: "KI_Ethik_Guidelines_2024.pdf",
        url: "/documents/ki-ethik-guidelines.pdf",
        size: 2800000,
        type: "pdf",
        category: "guidelines",
        tags: ["ki-ethik", "guidelines", "ethik", "2024"],
        uploadedAt: "2024-01-09T13:10:00Z",
        author: "Admin",
        description: "Ethische Richtlinien für KI-Implementierungen",
        isPublic: true,
        downloadCount: 156,
        assignedTo: ["/wissen/blog"],
        status: "active"
      },
      {
        id: "8",
        title: "KI-Readiness Assessment",
        filename: "ki-readiness-assessment.pdf",
        originalName: "KI_Readiness_Assessment_Questionnaire.pdf",
        url: "/documents/ki-readiness-assessment.pdf",
        size: 950000,
        type: "pdf",
        category: "assessment",
        tags: ["ki-readiness", "assessment", "questionnaire"],
        uploadedAt: "2024-01-08T11:30:00Z",
        author: "Admin",
        description: "Selbsteinschätzungsbogen für KI-Bereitschaft",
        isPublic: true,
        downloadCount: 234,
        assignedTo: ["/leistungen/ki-potenzialanalyse"],
        status: "active"
      }
    ];
    setDocuments(documentsData);
    setFilteredDocuments(documentsData);
  }, []);

  // Filter documents
  useEffect(() => {
    let filtered = documents;

    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(doc => doc.category === filterCategory);
    }

    if (filterType !== "all") {
      filtered = filtered.filter(doc => doc.type === filterType);
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter(doc => doc.status === filterStatus);
    }

    setFilteredDocuments(filtered);
  }, [documents, searchTerm, filterCategory, filterType, filterStatus]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFileIcon = (type: string) => {
    const icons = {
      pdf: <FileText className="h-5 w-5 text-red-500" />,
      doc: <FileText className="h-5 w-5 text-blue-500" />,
      docx: <FileText className="h-5 w-5 text-blue-500" />,
      xls: <FileSpreadsheet className="h-5 w-5 text-green-500" />,
      xlsx: <FileSpreadsheet className="h-5 w-5 text-green-500" />,
      ppt: <FileText className="h-5 w-5 text-orange-500" />,
      pptx: <FileText className="h-5 w-5 text-orange-500" />,
      jpg: <FileImage className="h-5 w-5 text-purple-500" />,
      jpeg: <FileImage className="h-5 w-5 text-purple-500" />,
      png: <FileImage className="h-5 w-5 text-purple-500" />,
      gif: <FileImage className="h-5 w-5 text-purple-500" />,
      mp4: <FileVideo className="h-5 w-5 text-red-500" />,
      avi: <FileVideo className="h-5 w-5 text-red-500" />,
      zip: <FileArchive className="h-5 w-5 text-yellow-500" />,
      rar: <FileArchive className="h-5 w-5 text-yellow-500" />
    };

    return icons[type as keyof typeof icons] || <File className="h-5 w-5 text-gray-500" />;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      certification: <Award className="h-4 w-4" />,
      guide: <BookOpen className="h-4 w-4" />,
      methodology: <Lightbulb className="h-4 w-4" />,
      checklist: <Target className="h-4 w-4" />,
      branding: <Palette className="h-4 w-4" />,
      template: <FileText className="h-4 w-4" />,
      guidelines: <Shield className="h-4 w-4" />,
      assessment: <TrendingUp className="h-4 w-4" />
    };

    return icons[category as keyof typeof icons] || <FileText className="h-4 w-4" />;
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      certification: "bg-yellow-100 text-yellow-800",
      guide: "bg-blue-100 text-blue-800",
      methodology: "bg-purple-100 text-purple-800",
      checklist: "bg-green-100 text-green-800",
      branding: "bg-pink-100 text-pink-800",
      template: "bg-indigo-100 text-indigo-800",
      guidelines: "bg-red-100 text-red-800",
      assessment: "bg-orange-100 text-orange-800"
    };

    return (
      <Badge className={colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"}>
        {category}
      </Badge>
    );
  };

  const categories = [
    { value: "all", label: "Alle Kategorien" },
    { value: "certification", label: "Zertifizierungen" },
    { value: "guide", label: "Anleitungen" },
    { value: "methodology", label: "Methoden" },
    { value: "checklist", label: "Checklisten" },
    { value: "branding", label: "Branding" },
    { value: "template", label: "Templates" },
    { value: "guidelines", label: "Richtlinien" },
    { value: "assessment", label: "Assessments" }
  ];

  const fileTypes = [
    { value: "all", label: "Alle Typen" },
    { value: "pdf", label: "PDF" },
    { value: "doc", label: "Word" },
    { value: "spreadsheet", label: "Excel" },
    { value: "presentation", label: "PowerPoint" },
    { value: "image", label: "Bilder" },
    { value: "video", label: "Videos" },
    { value: "archive", label: "Archive" }
  ];

  return (
    <AdminLayout breadcrumbs={["Admin", "Content Management"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Content Management</h2>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === "grid" ? "kivisai" : "kivisaiOutline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                aria-label="Grid-Ansicht"
                title="Grid-Ansicht"
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button 
                variant={viewMode === "list" ? "kivisai" : "kivisaiOutline"}
                size="sm"
                onClick={() => setViewMode("list")}
                aria-label="Listen-Ansicht"
                title="Listen-Ansicht"
              >
                <List className="h-4 w-4 mr-2" />
                Liste
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-4">
            <nav className="flex space-x-8">
              {[
                { id: "documents", label: "Dokumente", icon: <FileText className="h-4 w-4" /> },
                { id: "images", label: "Bilder", icon: <FileImage className="h-4 w-4" /> },
                { id: "videos", label: "Videos", icon: <FileVideo className="h-4 w-4" /> },
                { id: "templates", label: "Templates", icon: <File className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-kivisai-vibrant-turquoise text-kivisai-deep-dark-blue"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Dokumente durchsuchen..."
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
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              {fileTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">Alle Status</option>
              <option value="active">Aktiv</option>
              <option value="archived">Archiviert</option>
              <option value="draft">Entwurf</option>
            </select>
          </div>
        </div>

        {/* Documents Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDocuments.map((document) => (
              <Card 
                key={document.id} 
                className="border-kivisai-light-cool-gray hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    {getFileIcon(document.type)}
                    <div className="flex gap-1">
                      {getCategoryBadge(document.category)}
                      {!document.isPublic && (
                        <Badge variant="outline" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Privat
                        </Badge>
                      )}
                    </div>
                  </div>
                  <h3 className="font-medium text-kivisai-deep-dark-blue mb-1 truncate">
                    {document.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {formatFileSize(document.size)} • {document.type.toUpperCase()}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {document.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {document.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {document.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{document.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{formatDate(document.uploadedAt)}</span>
                    <span>{document.downloadCount} Downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow border border-kivisai-light-cool-gray">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dokument
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Größe
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Downloads
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Upload
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aktionen
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredDocuments.map((document) => (
                    <tr key={document.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getFileIcon(document.type)}
                          <div className="ml-3">
                            <div className="text-sm font-medium text-kivisai-deep-dark-blue">
                              {document.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {document.originalName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getCategoryBadge(document.category)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatFileSize(document.size)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {document.downloadCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {document.isPublic ? (
                            <Badge variant="outline" className="text-xs">
                              <Unlock className="h-3 w-3 mr-1" />
                              Öffentlich
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              <Lock className="h-3 w-3 mr-1" />
                              Privat
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(document.uploadedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Keine Dokumente gefunden
            </h3>
            <p className="text-gray-500">
              {searchTerm || filterCategory !== "all" || filterType !== "all" || filterStatus !== "all"
                ? "Versuchen Sie andere Suchkriterien oder Filter."
                : "Laden Sie Ihr erstes Dokument hoch, um zu beginnen."
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
                    {documents.length}
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
                  <p className="text-sm font-medium text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {documents.reduce((sum, doc) => sum + doc.downloadCount, 0)}
                  </p>
                </div>
                <Download className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Öffentlich</p>
                  <p className="text-2xl font-bold text-green-600">
                    {documents.filter(doc => doc.isPublic).length}
                  </p>
                </div>
                <Globe className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Privat</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {documents.filter(doc => !doc.isPublic).length}
                  </p>
                </div>
                <Lock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
