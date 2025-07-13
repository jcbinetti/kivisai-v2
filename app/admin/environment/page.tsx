"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Server, 
  Database, 
  Globe, 
  Settings,
  CheckCircle,
  AlertCircle,
  XCircle,
  ExternalLink,
  RefreshCw,
  Monitor,
  Shield,
  Zap,
  Mail,
  Calendar,
  Image,
  FileText,
  Users,
  Activity
} from "lucide-react";

interface SystemStatus {
  name: string;
  status: "online" | "offline" | "warning" | "error";
  url?: string;
  description: string;
  lastCheck: string;
  responseTime?: number;
  version?: string;
}

interface EnvironmentVariable {
  name: string;
  value: string;
  isSecret: boolean;
  description: string;
  status: "configured" | "missing" | "invalid";
}

function OptimizeImagesButton() {
  const [status, setStatus] = useState("");
  const handleClick = async () => {
    setStatus("Optimierung läuft...");
    try {
      const res = await fetch("/api/admin/optimize-images", { method: "POST" });
      if (res.ok) {
        setStatus("Optimierung abgeschlossen!");
      } else {
        setStatus("Fehler beim Starten der Optimierung.");
      }
    } catch {
      setStatus("Fehler beim Starten der Optimierung.");
    }
  };
  return (
    <div className="my-6">
      <button onClick={handleClick} className="px-4 py-2 bg-kivisai-clear-turquoise text-white rounded hover:bg-kivisai-deep-dark-blue transition-colors font-semibold">
        Bilder-Optimierung starten
      </button>
      {status && <div className="mt-2 text-sm">{status}</div>}
    </div>
  );
}

export default function AdminEnvironmentPage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([]);
  const [envVars, setEnvVars] = useState<EnvironmentVariable[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading system status
    const loadSystemStatus = () => {
      const status: SystemStatus[] = [
        {
          name: "Next.js Application",
          status: "online",
          url: "/",
          description: "Hauptanwendung",
          lastCheck: new Date().toISOString(),
          responseTime: 120,
          version: "15.2.4"
        },
        {
          name: "Sanity Studio",
          status: "online",
          url: "/",
          description: "Content Management System",
          lastCheck: new Date().toISOString(),
          responseTime: 85,
          version: "3.0.0"
        },
        {
          name: "Sanity API",
          status: "online",
          url: "/",
          description: "Content API",
          lastCheck: new Date().toISOString(),
          responseTime: 200,
          version: "2024-01-01"
        },
        {
          name: "Cal.com",
          status: "online",
          url: "/",
          description: "Terminbuchungssystem",
          lastCheck: new Date().toISOString(),
          responseTime: 150
        },
        {
          name: "Brevo (Email)",
          status: "online",
          url: "/",
          description: "Email Marketing & Automation",
          lastCheck: new Date().toISOString(),
          responseTime: 180
        },
        {
          name: "Matomo Analytics",
          status: "online",
          url: "/",
          description: "Web Analytics",
          lastCheck: new Date().toISOString(),
          responseTime: 95
        },
        {
          name: "Hotjar",
          status: "online",
          url: "/",
          description: "User Behavior Analytics",
          lastCheck: new Date().toISOString(),
          responseTime: 110
        },
        {
          name: "Vercel",
          status: "online",
          url: "/",
          description: "Hosting & Deployment",
          lastCheck: new Date().toISOString(),
          responseTime: 75
        }
      ];

      setSystemStatus(status);
    };

    // Load environment variables
    const loadEnvVars = () => {
      const vars: EnvironmentVariable[] = [
        {
          name: "NEXT_PUBLIC_SANITY_PROJECT_ID",
          value: "your-project-id",
          isSecret: false,
          description: "Sanity Project ID",
          status: "configured"
        },
        {
          name: "NEXT_PUBLIC_SANITY_DATASET",
          value: "production",
          isSecret: false,
          description: "Sanity Dataset",
          status: "configured"
        },
        {
          name: "SANITY_API_TOKEN",
          value: "sk...",
          isSecret: true,
          description: "Sanity API Token",
          status: "configured"
        },
        {
          name: "NEXT_PUBLIC_SANITY_API_VERSION",
          value: "2024-01-01",
          isSecret: false,
          description: "Sanity API Version",
          status: "configured"
        },
        {
          name: "CAL_API_KEY",
          value: "cal_...",
          isSecret: true,
          description: "Cal.com API Key",
          status: "configured"
        },
        {
          name: "BREVO_API_KEY",
          value: "xkeysib-...",
          isSecret: true,
          description: "Brevo API Key",
          status: "configured"
        },
        {
          name: "MATOMO_URL",
          value: "https://your-matomo.com",
          isSecret: false,
          description: "Matomo Analytics URL",
          status: "configured"
        },
        {
          name: "MATOMO_SITE_ID",
          value: "1",
          isSecret: false,
          description: "Matomo Site ID",
          status: "configured"
        },
        {
          name: "HOTJAR_ID",
          value: "1234567",
          isSecret: false,
          description: "Hotjar Site ID",
          status: "configured"
        },
        {
          name: "NEXTAUTH_SECRET",
          value: "your-secret",
          isSecret: true,
          description: "NextAuth Secret",
          status: "configured"
        },
        {
          name: "NEXTAUTH_URL",
          value: "/",
          isSecret: false,
          description: "NextAuth URL",
          status: "configured"
        }
      ];

      setEnvVars(vars);
    };

    loadSystemStatus();
    loadEnvVars();
    setIsLoading(false);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      online: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
      offline: "bg-gray-100 text-gray-800"
    };

    const labels = {
      online: "Online",
      warning: "Warnung",
      error: "Fehler",
      offline: "Offline"
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const getEnvStatusBadge = (status: string) => {
    const colors = {
      configured: "bg-green-100 text-green-800",
      missing: "bg-red-100 text-red-800",
      invalid: "bg-yellow-100 text-yellow-800"
    };

    const labels = {
      configured: "Konfiguriert",
      missing: "Fehlt",
      invalid: "Ungültig"
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('de-DE');
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Umgebung"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Systemumgebung</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Status prüfen
              </Button>
              <Button variant="kivisai" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>
          <p className="text-gray-600">
            Überwachung der Systemdienste und Umgebungsvariablen
          </p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-kivisai-light-cool-gray">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-kivisai-vibrant-turquoise" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <div>
                        <h4 className="font-medium text-kivisai-deep-dark-blue">{service.name}</h4>
                        <p className="text-sm text-gray-500">{service.description}</p>
                        {service.responseTime && (
                          <p className="text-xs text-gray-400">
                            {service.responseTime}ms • {formatDate(service.lastCheck)}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(service.status)}
                      {service.url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openUrl(service.url!)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="border-kivisai-light-cool-gray">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-kivisai-vibrant-turquoise" />
                Schnellzugriff
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Database className="h-4 w-4 mr-3" />
                  Sanity Studio öffnen
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Calendar className="h-4 w-4 mr-3" />
                  Cal.com Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Mail className="h-4 w-4 mr-3" />
                  Brevo Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Zap className="h-4 w-4 mr-3" />
                  Vercel Dashboard
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Activity className="h-4 w-4 mr-3" />
                  Matomo Analytics
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => openUrl("/")}
                >
                  <Users className="h-4 w-4 mr-3" />
                  Hotjar Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environment Variables */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-kivisai-vibrant-turquoise" />
              Umgebungsvariablen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Variable
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Wert
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Beschreibung
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {envVars.map((envVar) => (
                    <tr key={envVar.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-kivisai-deep-dark-blue">
                          {envVar.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {envVar.isSecret 
                            ? envVar.value.substring(0, 3) + "..." 
                            : envVar.value
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {envVar.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getEnvStatusBadge(envVar.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Node.js</p>
                  <p className="text-2xl font-bold text-kivisai-deep-dark-blue">
                    v18.17.0
                  </p>
                </div>
                <Zap className="h-8 w-8 text-kivisai-clear-turquoise" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Next.js</p>
                  <p className="text-2xl font-bold text-blue-600">
                    v15.2.4
                  </p>
                </div>
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-kivisai-light-cool-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sanity</p>
                  <p className="text-2xl font-bold text-green-600">
                    v3.0.0
                  </p>
                </div>
                <Database className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-kivisai-vibrant-turquoise" />
              Performance Metriken
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150ms</div>
                <div className="text-sm text-gray-500">Durchschnittliche Antwortzeit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1.2s</div>
                <div className="text-sm text-gray-500">Ladezeit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">95</div>
                <div className="text-sm text-gray-500">Lighthouse Score</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optimize Images Button */}
        <OptimizeImagesButton />
      </div>
    </AdminLayout>
  );
}
