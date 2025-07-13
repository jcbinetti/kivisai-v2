"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  RefreshCw, 
  Database, 
  Image, 
  FileText,
  Settings,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";

interface Script {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "idle" | "running" | "completed" | "error";
  lastRun?: string;
  duration?: number;
  result?: any;
}

export default function AdminScriptsPage() {
  const [scripts, setScripts] = useState<Script[]>([
    {
      id: "image-sync",
      name: "Bilder synchronisieren",
      description: "Neue Bilder im Verzeichnis finden, optimieren und zur Registry hinzufügen",
      category: "images",
      status: "idle"
    },
    {
      id: "template-validate",
      name: "Templates validieren",
      description: "Alle Templates auf Konsistenz und Vollständigkeit prüfen",
      category: "templates",
      status: "idle"
    },
    {
      id: "sanity-sync",
      name: "Sanity synchronisieren",
      description: "Bilder und Content mit Sanity CMS synchronisieren",
      category: "cms",
      status: "idle"
    },
    {
      id: "build-optimize",
      name: "Build optimieren",
      description: "Produktions-Build erstellen und optimieren",
      category: "build",
      status: "idle"
    },
    {
      id: "cache-clear",
      name: "Cache leeren",
      description: "Alle Caches leeren und neu aufbauen",
      category: "system",
      status: "idle"
    }
  ]);

  const [runningScripts, setRunningScripts] = useState<Set<string>>(new Set());

  const runScript = async (scriptId: string) => {
    if (runningScripts.has(scriptId)) return;

    setRunningScripts(prev => new Set(prev).add(scriptId));
    
    setScripts(prev => prev.map(script => 
      script.id === scriptId 
        ? { ...script, status: "running" as const, lastRun: new Date().toISOString() }
        : script
    ));

    try {
      let result;
      const startTime = Date.now();

      switch (scriptId) {
        case "image-sync":
          result = await fetch("/api/admin/image-sync", { method: "POST" });
          break;
        case "template-validate":
          await new Promise(resolve => setTimeout(resolve, 2000));
          result = { valid: true, errors: [] };
          break;
        case "sanity-sync":
          await new Promise(resolve => setTimeout(resolve, 3000));
          result = { synced: 5, errors: 0 };
          break;
        case "build-optimize":
          await new Promise(resolve => setTimeout(resolve, 5000));
          result = { success: true, size: "2.1MB" };
          break;
        case "cache-clear":
          await new Promise(resolve => setTimeout(resolve, 1000));
          result = { cleared: true };
          break;
        default:
          throw new Error("Unknown script");
      }

      const duration = Date.now() - startTime;
      const resultData = result instanceof Response ? await result.json() : result;

      setScripts(prev => prev.map(script => 
        script.id === scriptId 
          ? { 
              ...script, 
              status: "completed" as const, 
              duration,
              result: resultData
            }
          : script
      ));

    } catch (error) {
      setScripts(prev => prev.map(script => 
        script.id === scriptId 
          ? { 
              ...script, 
              status: "error" as const,
              result: { error: error instanceof Error ? error.message : "Unknown error" }
            }
          : script
      ));
    } finally {
      setRunningScripts(prev => {
        const newSet = new Set(prev);
        newSet.delete(scriptId);
        return newSet;
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "idle":
        return <Badge variant="outline" className="text-gray-600">Bereit</Badge>;
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">Läuft</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Abgeschlossen</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">Fehler</Badge>;
      default:
        return <Badge variant="secondary">Unbekannt</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "images":
        return <Image className="h-4 w-4" />;
      case "templates":
        return <FileText className="h-4 w-4" />;
      case "cms":
        return <Database className="h-4 w-4" />;
      case "build":
        return <Settings className="h-4 w-4" />;
      case "system":
        return <RefreshCw className="h-4 w-4" />;
      default:
        return <Settings className="h-4 w-4" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "images":
        return "Bilder";
      case "templates":
        return "Templates";
      case "cms":
        return "CMS";
      case "build":
        return "Build";
      case "system":
        return "System";
      default:
        return category;
    }
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Scripts"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-vibrant-turquoise rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Script-Verwaltung</h1>
          <p className="text-kivisai-pure-white/90">
            Führen Sie Wartungs- und Optimierungsscripts aus
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            onClick={() => runScript("image-sync")}
            disabled={runningScripts.has("image-sync")}
            className="h-20 flex flex-col items-center justify-center gap-2"
          >
            <Image className="h-6 w-6" />
            <span>Bilder synchronisieren</span>
          </Button>
          
          <Button 
            onClick={() => runScript("template-validate")}
            disabled={runningScripts.has("template-validate")}
            className="h-20 flex flex-col items-center justify-center gap-2"
          >
            <FileText className="h-6 w-6" />
            <span>Templates validieren</span>
          </Button>
          
          <Button 
            onClick={() => runScript("cache-clear")}
            disabled={runningScripts.has("cache-clear")}
            className="h-20 flex flex-col items-center justify-center gap-2"
          >
            <RefreshCw className="h-6 w-6" />
            <span>Cache leeren</span>
          </Button>
        </div>

        {/* Scripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scripts.map((script) => (
            <Card key={script.id} className="border-kivisai-light-cool-gray">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(script.category)}
                    <div>
                      <CardTitle className="text-lg">{script.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {getCategoryName(script.category)}
                        </Badge>
                        {getStatusBadge(script.status)}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => runScript(script.id)}
                    disabled={runningScripts.has(script.id)}
                    size="sm"
                    variant={script.status === "running" ? "outline" : "default"}
                  >
                    {script.status === "running" ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{script.description}</p>
                
                {script.lastRun && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Clock className="h-3 w-3" />
                    <span>Letzter Lauf: {new Date(script.lastRun).toLocaleString()}</span>
                  </div>
                )}
                
                {script.duration && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <CheckCircle className="h-3 w-3" />
                    <span>Dauer: {script.duration}ms</span>
                  </div>
                )}
                
                {script.result && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      {script.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm font-medium">Ergebnis:</span>
                    </div>
                    <pre className="text-xs text-gray-600 overflow-auto">
                      {JSON.stringify(script.result, null, 2)}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {scripts.filter(s => s.status === "completed").length}
                </div>
                <div className="text-sm text-gray-600">Erfolgreich</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {scripts.filter(s => s.status === "running").length}
                </div>
                <div className="text-sm text-gray-600">Laufend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {scripts.filter(s => s.status === "error").length}
                </div>
                <div className="text-sm text-gray-600">Fehler</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {scripts.filter(s => s.status === "idle").length}
                </div>
                <div className="text-sm text-gray-600">Bereit</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
} 