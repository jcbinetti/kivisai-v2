"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  FileText, 
  Settings,
  Download,
  RefreshCw,
  Eye,
  Edit,
  ArrowRight,
  TrendingDown
} from "lucide-react";
import { TemplateEngine } from "@/lib/template-engine";

interface ConsistencyIssue {
  id: string;
  type: "error" | "warning" | "info";
  title: string;
  description: string;
  page: string;
  template: string;
  severity: number;
  fixable: boolean;
  suggestedFix?: string;
}

interface ConsistencyReport {
  totalPages: number;
  issuesFound: number;
  errors: number;
  warnings: number;
  info: number;
  consistencyScore: number;
  issues: ConsistencyIssue[];
}

// Create template engine instance
const templateEngine = new TemplateEngine();

export default function AdminConsistencyPage() {
  const [report, setReport] = useState<ConsistencyReport>({
    totalPages: 0,
    issuesFound: 0,
    errors: 0,
    warnings: 0,
    info: 0,
    consistencyScore: 0,
    issues: []
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    runConsistencyCheck();
  }, []);

  const runConsistencyCheck = async () => {
    setIsAnalyzing(true);
    
    // Simuliere Konsistenzprüfung
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockIssues: ConsistencyIssue[] = [
      {
        id: "1",
        type: "error",
        title: "Fehlende Hero-Sektion",
        description: "Die Seite hat keine Hero-Sektion, die für SEO wichtig ist.",
        page: "/leistungen/ki-prototyping",
        template: "service-page",
        severity: 3,
        fixable: true,
        suggestedFix: "Hero-Sektion aus Template hinzufügen"
      },
      {
        id: "2",
        type: "warning",
        title: "Inkonsistente CTA-Buttons",
        description: "CTA-Buttons verwenden unterschiedliche Stile auf verschiedenen Seiten.",
        page: "/leistungen/ki-potenzialanalyse",
        template: "service-page",
        severity: 2,
        fixable: true,
        suggestedFix: "CTA-Button-Styles vereinheitlichen"
      },
      {
        id: "3",
        type: "info",
        title: "Veraltete Template-Version",
        description: "Die Seite verwendet eine ältere Version des Templates.",
        page: "/leistungen/inqa-coaching",
        template: "service-page",
        severity: 1,
        fixable: true,
        suggestedFix: "Template auf neueste Version aktualisieren"
      }
    ];

    setReport({
      totalPages: 24,
      issuesFound: mockIssues.length,
      errors: mockIssues.filter(i => i.type === "error").length,
      warnings: mockIssues.filter(i => i.type === "warning").length,
      info: mockIssues.filter(i => i.type === "info").length,
      consistencyScore: 85,
      issues: mockIssues
    });
    
    setIsAnalyzing(false);
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "info":
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSeverityBadge = (severity: number) => {
    if (severity >= 3) {
      return <Badge className="bg-red-100 text-red-800">Kritisch</Badge>;
    } else if (severity >= 2) {
      return <Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge>;
    } else {
      return <Badge className="bg-blue-100 text-blue-800">Niedrig</Badge>;
    }
  };

  const exportReport = () => {
    const reportData = {
      generatedAt: new Date().toISOString(),
      ...report
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json"
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `consistency-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const applyFix = (issueId: string) => {
    alert(`Fix für Issue ${issueId} wird angewendet... (Demo)`);
  };

  return (
    <AdminLayout breadcrumbs={["Admin", "Pages", "Konsistenz"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 border border-kivisai-light-cool-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-kivisai-deep-dark-blue">Template-Konsistenz</h2>
            <div className="flex gap-2">
              <Button variant="kivisaiOutline" onClick={exportReport}>
                <Download className="h-4 w-4 mr-2" />
                Report exportieren
              </Button>
              <Button variant="kivisai" onClick={runConsistencyCheck} disabled={isAnalyzing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isAnalyzing ? "animate-spin" : ""}`} />
                {isAnalyzing ? "Analysiere..." : "Neu analysieren"}
              </Button>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-kivisai-light-cool-gray">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Konsistenz-Score</p>
                    <p className="text-2xl font-bold text-kivisai-deep-dark-blue">{report.consistencyScore}%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <Progress value={report.consistencyScore} className="mt-2" />
              </CardContent>
            </Card>
            <Card className="border-kivisai-light-cool-gray">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Geprüfte Seiten</p>
                    <p className="text-2xl font-bold text-blue-600">{report.totalPages}</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-kivisai-light-cool-gray">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Fehler</p>
                    <p className="text-2xl font-bold text-red-600">{report.errors}</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-kivisai-light-cool-gray">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Warnungen</p>
                    <p className="text-2xl font-bold text-yellow-600">{report.warnings}</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Issues List */}
        <Card className="border-kivisai-light-cool-gray">
          <CardHeader>
            <CardTitle className="text-kivisai-deep-dark-blue">Gefundene Probleme</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="errors">Fehler ({report.errors})</TabsTrigger>
                <TabsTrigger value="warnings">Warnungen ({report.warnings})</TabsTrigger>
                <TabsTrigger value="info">Info ({report.info})</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                {report.issues.map((issue) => (
                  <div key={issue.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {getIssueIcon(issue.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-kivisai-deep-dark-blue">{issue.title}</h4>
                            {getSeverityBadge(issue.severity)}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Seite: {issue.page}</span>
                            <span>Template: {issue.template}</span>
                          </div>
                          {issue.suggestedFix && (
                            <div className="mt-2 p-2 bg-blue-50 rounded text-sm">
                              <strong>Vorgeschlagene Lösung:</strong> {issue.suggestedFix}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" aria-label="Seite ansehen" title="Seite ansehen">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" aria-label="Seite bearbeiten" title="Seite bearbeiten">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {issue.fixable && (
                          <Button variant="ghost" size="sm" onClick={() => applyFix(issue.id)} aria-label="Fix anwenden" title="Fix anwenden">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="errors" className="space-y-4">
                {report.issues.filter(issue => issue.type === "error").map((issue) => (
                  <div key={issue.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-red-800 mb-1">{issue.title}</h4>
                        <p className="text-sm text-red-600 mb-2">{issue.description}</p>
                        <div className="flex items-center gap-4 text-xs text-red-500">
                          <span>Seite: {issue.page}</span>
                          <span>Template: {issue.template}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="warnings" className="space-y-4">
                {report.issues.filter(issue => issue.type === "warning").map((issue) => (
                  <div key={issue.id} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-yellow-800 mb-1">{issue.title}</h4>
                        <p className="text-sm text-yellow-600 mb-2">{issue.description}</p>
                        <div className="flex items-center gap-4 text-xs text-yellow-500">
                          <span>Seite: {issue.page}</span>
                          <span>Template: {issue.template}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="info" className="space-y-4">
                {report.issues.filter(issue => issue.type === "info").map((issue) => (
                  <div key={issue.id} className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-blue-800 mb-1">{issue.title}</h4>
                        <p className="text-sm text-blue-600 mb-2">{issue.description}</p>
                        <div className="flex items-center gap-4 text-xs text-blue-500">
                          <span>Seite: {issue.page}</span>
                          <span>Template: {issue.template}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
} 