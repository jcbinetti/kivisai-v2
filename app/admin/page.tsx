"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Layout, 
  Image, 
  BarChart3, 
  Plus,
  CheckCircle,
  AlertCircle,
  XCircle,
  Activity,
  RefreshCw
} from "lucide-react";
import { TemplateEngine } from "@/lib/template-engine";

interface DashboardStats {
  totalPages: number;
  totalTemplates: number;
  totalImages: number;
  publishedContent: number;
  draftContent: number;
  recentActivity: number;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Dashboard-Statistiken
  const stats: DashboardStats = {
    totalPages: 24,
    totalTemplates: 8,
    totalImages: 156,
    publishedContent: 18,
    draftContent: 6,
    recentActivity: 12
  };

  // Create template engine instance
  const templateEngine = new TemplateEngine();

  const templateStats = templateEngine.getTemplateStats();

  // Aktuelle Aktivitäten
  const recentActivities = [
    {
      id: "1",
      type: "page_created",
      title: "Neue Seite erstellt",
      description: "KI-Potenzialanalyse Details wurde erstellt",
      timestamp: "vor 2 Stunden",
      user: "KIVISAI Team",
      status: "success"
    },
    {
      id: "2",
      type: "template_updated",
      title: "Template aktualisiert",
      description: "Service Template wurde bearbeitet",
      timestamp: "vor 4 Stunden",
      user: "Dr. Sebastian Jung",
      status: "info"
    },
    {
      id: "3",
      type: "image_uploaded",
      title: "Bild hochgeladen",
      description: "Hero Image für KI-Coaching wurde hinzugefügt",
      timestamp: "vor 6 Stunden",
      user: "KIVISAI Team",
      status: "success"
    },
    {
      id: "4",
      type: "content_published",
      title: "Content veröffentlicht",
      description: "Blog Artikel 'KI-Transformation' wurde veröffentlicht",
      timestamp: "vor 1 Tag",
      user: "Dr. Sebastian Jung",
      status: "success"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "page_created":
      case "content_published":
        return <FileText className="h-4 w-4" />;
      case "template_updated":
        return <Layout className="h-4 w-4" />;
      case "image_uploaded":
        return <Image className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityStatus = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "info":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  // Schnellaktionen
  const quickActions = [
    {
      title: "Neue Seite erstellen",
      description: "Erstellen Sie eine neue Seite mit dem Page Builder",
      icon: <Plus className="h-6 w-6" />,
      href: "/admin/page-builder",
      color: "text-blue-600"
    },
    {
      title: "Template bearbeiten",
      description: "Bearbeiten Sie bestehende Templates",
      icon: <Layout className="h-6 w-6" />,
      href: "/admin/templates",
      color: "text-green-600"
    },
    {
      title: "Bilder verwalten",
      description: "Verwalten Sie alle Bilder und Medien",
      icon: <Image className="h-6 w-6" />,
      href: "/admin/images",
      color: "text-purple-600"
    },
    {
      title: "Content verwalten",
      description: "Verwalten Sie alle Inhalte und Artikel",
      icon: <FileText className="h-6 w-6" />,
      href: "/admin/content",
      color: "text-orange-600"
    },
    {
      title: "Bilder synchronisieren",
      description: "Neue Bilder aus dem Verzeichnis importieren und optimieren",
      icon: <RefreshCw className="h-6 w-6" />,
      href: "/admin/images?sync=1",
      color: "text-blue-500"
    },
  ];

  return (
    <AdminLayout breadcrumbs={["Admin", "Dashboard"]}>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Willkommen im KIVISAI Admin-Bereich</h1>
          <p className="text-kivisai-pure-white/90">
            Verwalten Sie Ihre Website, Templates und Inhalte zentral von hier aus.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Seiten</p>
                  <p className="text-2xl font-bold text-kivisai-deep-dark-blue">{stats.totalPages}</p>
                </div>
                <FileText className="h-8 w-8 text-kivisai-clear-turquoise" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Templates</p>
                  <p className="text-2xl font-bold text-green-600">{templateStats.total}</p>
                </div>
                <Layout className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Bilder</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalImages}</p>
                </div>
                <Image className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Veröffentlicht</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.publishedContent}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="border-kivisai-light-cool-gray">
              <CardHeader>
                <CardTitle className="text-kivisai-deep-dark-blue">Schnellaktionen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="kivisaiOutline"
                    className="w-full justify-start h-auto p-3"
                    onClick={() => window.location.href = action.href}
                    aria-label={action.title}
                    title={action.title}
                  >
                    <div className={`mr-3 ${action.color}`}>
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{action.title}</p>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="activity">Aktivitäten</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Template-Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium text-green-800">Aktive Templates</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {templateStats.active}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                          <span className="font-medium text-yellow-800">Entwürfe</span>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          {templateStats.draft}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-gray-500" />
                          <span className="font-medium text-gray-800">Veraltete Templates</span>
                        </div>
                        <Badge className="bg-gray-100 text-gray-800">
                          {templateStats.deprecated}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Content-Übersicht</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{stats.publishedContent}</p>
                        <p className="text-sm text-blue-800">Veröffentlicht</p>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <p className="text-2xl font-bold text-yellow-600">{stats.draftContent}</p>
                        <p className="text-sm text-yellow-800">Entwürfe</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Letzte Aktivitäten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
                            {getActivityIcon(activity.type)}
                            {getActivityStatus(activity.status)}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{activity.title}</p>
                            <p className="text-xs text-gray-600">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">{activity.timestamp}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">{activity.user}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card className="border-kivisai-light-cool-gray">
                  <CardHeader>
                    <CardTitle className="text-kivisai-deep-dark-blue">Website Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Analytics werden hier angezeigt</p>
                      <p className="text-sm">Integration mit Matomo/Google Analytics</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* System Status */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="text-kivisai-deep-dark-blue">System-Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Website Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Sanity CMS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Template Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Image Manager</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
