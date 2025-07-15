'use client'

import { ProtectedAdminLayout } from '@/components/admin/protected-admin-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Settings, 
  FileText, 
  Image, 
  Palette, 
  Layout, 
  Database, 
  Activity,
  Users,
  BarChart3,
  Shield
} from 'lucide-react';

export default function AdminPage() {
  return (
    <ProtectedAdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Willkommen im administrativen Bereich von KIVISAI
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Seiten</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +2 seit letztem Monat
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bilder</CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">
                Optimiert: 34 WebP
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Performance</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">
                Lighthouse Score
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sicherheit</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Aktiv</div>
              <p className="text-xs text-muted-foreground">
                Admin-Only Zugang
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Content Management
              </CardTitle>
              <CardDescription>
                Verwalten Sie Inhalte und Seiten
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/content">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Inhalte verwalten
                </Button>
              </Link>
              <Link href="/admin/pages">
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="w-4 h-4 mr-2" />
                  Seiten verwalten
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Design System */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Design System
              </CardTitle>
              <CardDescription>
                Farben, Komponenten und Templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/design">
                <Button variant="outline" className="w-full justify-start">
                  <Palette className="w-4 h-4 mr-2" />
                  Design verwalten
                </Button>
              </Link>
              <Link href="/admin/templates">
                <Button variant="outline" className="w-full justify-start">
                  <Layout className="w-4 h-4 mr-2" />
                  Templates
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Media Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                Media Management
              </CardTitle>
              <CardDescription>
                Bilder und Dateien verwalten
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/images">
                <Button variant="outline" className="w-full justify-start">
                  <Image className="w-4 h-4 mr-2" />
                  Bilder verwalten
                </Button>
              </Link>
              <Link href="/admin/documents">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Dokumente
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                System Status
              </CardTitle>
              <CardDescription>
                Performance und Monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/performance">
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Performance
                </Button>
              </Link>
              <Link href="/admin/monitoring">
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Monitoring
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Management
              </CardTitle>
              <CardDescription>
                Benutzer und Berechtigungen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/users">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Benutzer verwalten
                </Button>
              </Link>
              <Link href="/admin/permissions">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Berechtigungen
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Einstellungen
              </CardTitle>
              <CardDescription>
                System-Konfiguration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/settings">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Allgemeine Einstellungen
                </Button>
              </Link>
              <Link href="/admin/environment">
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Umgebungsvariablen
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedAdminLayout>
  );
}
