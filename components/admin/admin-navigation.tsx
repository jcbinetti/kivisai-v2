"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Settings, 
  ImageIcon, 
  Layout, 
  Palette, 
  ArrowLeft, 
  Home, 
  Activity, 
  FileText,
  FolderOpen,
  Database,
  CheckCircle,
  Upload,
  Download,
  Briefcase
} from "lucide-react"

interface AdminNavigationProps {
  children: React.ReactNode
  title: string
  description?: string
}

export function AdminNavigation({ children, title, description }: AdminNavigationProps) {
  const pathname = usePathname()

  const adminTabs = [
    {
      value: "overview",
      label: "Übersicht",
      href: "/admin",
      icon: <Home className="w-4 h-4" />,
    },
    {
      value: "leistungen",
      label: "Leistungen",
      href: "/admin/leistungen",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      value: "images",
      label: "Bilder",
      href: "/admin/images",
      icon: <ImageIcon className="w-4 h-4" />,
    },
    {
      value: "upload",
      label: "Upload",
      href: "/admin/images/upload",
      icon: <Upload className="w-4 h-4" />,
    },
    {
      value: "templates",
      label: "Templates",
      href: "/admin/templates",
      icon: <Layout className="w-4 h-4" />,
    },
    {
      value: "page-builder",
      label: "Page Builder",
      href: "/admin/page-builder",
      icon: <Layout className="w-4 h-4" />,
    },
    {
      value: "content",
      label: "Content",
      href: "/admin/content",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      value: "pages",
      label: "Seiten",
      href: "/admin/pages",
      icon: <FolderOpen className="w-4 h-4" />,
    },
    {
      value: "consistency",
      label: "Konsistenz",
      href: "/admin/pages/consistency",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      value: "design",
      label: "Design System",
      href: "/admin/design",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      value: "design-status",
      label: "System Status",
      href: "/admin/design-system-status",
      icon: <Activity className="w-4 h-4" />,
    },
    {
      value: "environment",
      label: "Umgebung",
      href: "/admin/environment",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      value: "documents",
      label: "Dokumente",
      href: "/admin/documents",
      icon: <Download className="w-4 h-4" />,
    },
  ]

  const getCurrentTab = () => {
    if (pathname === "/admin") return "overview"
    if (pathname.includes("/admin/leistungen")) return "leistungen"
    if (pathname.includes("/admin/images/upload")) return "upload"
    if (pathname.includes("/admin/images")) return "images"
    if (pathname.includes("/admin/templates")) return "templates"
    if (pathname.includes("/admin/page-builder")) return "page-builder"
    if (pathname.includes("/admin/content")) return "content"
    if (pathname.includes("/admin/pages/consistency")) return "consistency"
    if (pathname.includes("/admin/pages")) return "pages"
    if (pathname.includes("/admin/design-system-status")) return "design-status"
    if (pathname.includes("/admin/design")) return "design"
    if (pathname.includes("/admin/environment")) return "environment"
    if (pathname.includes("/admin/documents")) return "documents"
    return "overview"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Zur Website
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-kivisai-deep-dark-blue">KIVISAI Admin</h1>
                <p className="text-sm text-gray-600">Verwaltung und Konfiguration</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Tabs value={getCurrentTab()} className="w-full">
            <TabsList className="grid w-full grid-cols-12 bg-transparent h-auto p-0 overflow-x-auto">
              {adminTabs.map((tab) => (
                <Link key={tab.value} href={tab.href} className="w-full min-w-fit">
                  <TabsTrigger
                    value={tab.value}
                    className="w-full flex items-center gap-2 py-3 px-4 data-[state=active]:bg-kivisai-clear-turquoise data-[state=active]:text-white whitespace-nowrap"
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-kivisai-deep-dark-blue">{title}</CardTitle>
            {description && <p className="text-gray-600">{description}</p>}
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          <Link href="/admin/leistungen">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Leistungen Übersicht
                </CardTitle>
                <CardDescription>
                  Alle aktiven Leistungen-Seiten und Unterseiten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/images">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Bildverwaltung
                </CardTitle>
                <CardDescription>
                  Alle Bilder verwalten, kategorisieren und zuordnen
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/images/upload">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Bild Upload
                </CardTitle>
                <CardDescription>
                  Neue Bilder hochladen und verarbeiten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/templates">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Templates
                </CardTitle>
                <CardDescription>
                  Design-Templates erstellen und verwalten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/page-builder">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Page Builder
                </CardTitle>
                <CardDescription>
                  Seiten mit Drag & Drop erstellen
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/content">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Content Management
                </CardTitle>
                <CardDescription>
                  Alle Inhalte zentral verwalten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/pages">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5" />
                  Seiten & Templates
                </CardTitle>
                <CardDescription>
                  Übersicht aller Seiten und Template-Zuordnungen
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/pages/consistency">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Konsistenzprüfung
                </CardTitle>
                <CardDescription>
                  Design- und Template-Konsistenz analysieren
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/design">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Design System
                </CardTitle>
                <CardDescription>
                  Farben, Typografie und Design-Tokens verwalten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/design-system-status">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  System Status
                </CardTitle>
                <CardDescription>
                  Technische Übersicht aller Komponenten
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/environment">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Umgebung
                </CardTitle>
                <CardDescription>
                  System-Konfiguration und Einstellungen
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
