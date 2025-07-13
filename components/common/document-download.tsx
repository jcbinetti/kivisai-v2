"use client";

import { useState } from "react";
import { Download, Mail, FileText, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface Document {
  id: string;
  name: string;
  filename: string;
  description: string;
  category: string;
  requiresEmail: boolean;
  downloadUrl: string;
  size?: string;
  uploadDate: string;
  downloads: number;
}

interface DocumentDownloadProps {
  documents: Document[];
  title?: string;
  description?: string;
  showCategory?: boolean;
  layout?: "grid" | "list";
}

export default function DocumentDownload({
  documents,
  title = "Dokumente zum Download",
  description = "Hier finden Sie alle relevanten Dokumente und Materialien",
  showCategory = true,
  layout = "grid"
}: DocumentDownloadProps) {
  const [emailInputs, setEmailInputs] = useState<Record<string, string>>({});
  const [downloadedDocs, setDownloadedDocs] = useState<Set<string>>(new Set());

  const handleEmailSubmit = (documentId: string, email: string) => {
    if (!email || !email.includes("@")) {
      alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    // Hier würde normalerweise die E-Mail an den Server gesendet werden
    console.log(`E-Mail ${email} für Dokument ${documentId} gespeichert`);
    
    // Simuliere Download
    handleDownload(documentId);
  };

  const handleDownload = (documentId: string) => {
    const doc = documents.find(d => d.id === documentId);
    if (!doc) return;

    // Download-Tracking
    setDownloadedDocs(prev => new Set([...prev, documentId]));
    
    // Simuliere Download (in Produktion würde hier der echte Download starten)
    const link = document.createElement("a");
    link.href = doc.downloadUrl;
    link.download = doc.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Download gestartet: ${doc.name}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE");
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "INQA-Coaching": "bg-blue-100 text-blue-800",
      "KI-Prototyping": "bg-purple-100 text-purple-800",
      "Strategie-Coaching": "bg-green-100 text-green-800",
      "Coaching & Training": "bg-orange-100 text-orange-800",
      "Allgemein": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  if (layout === "list") {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">
            {title}
          </h2>
          <p className="text-kivisai-moss-green">{description}</p>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-kivisai-blue" />
                      <h3 className="text-lg font-semibold text-kivisai-deep-dark-blue">
                        {doc.name}
                      </h3>
                      {doc.requiresEmail && (
                        <Lock className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                    
                    <p className="text-kivisai-moss-green mb-3">
                      {doc.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      {showCategory && (
                        <Badge className={getCategoryColor(doc.category)}>
                          {doc.category}
                        </Badge>
                      )}
                      <span>• {doc.size}</span>
                      <span>• {doc.downloads} Downloads</span>
                      <span>• {formatDate(doc.uploadDate)}</span>
                    </div>

                    {doc.requiresEmail && !downloadedDocs.has(doc.id) ? (
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <Label htmlFor={`email-${doc.id}`} className="text-sm font-medium">
                            E-Mail-Adresse für Download
                          </Label>
                          <Input
                            id={`email-${doc.id}`}
                            type="email"
                            placeholder="ihre@email.de"
                            value={emailInputs[doc.id] || ""}
                            onChange={(e) => setEmailInputs(prev => ({
                              ...prev,
                              [doc.id]: e.target.value
                            }))}
                            className="mt-1"
                          />
                        </div>
                        <Button
                          onClick={() => handleEmailSubmit(doc.id, emailInputs[doc.id] || "")}
                          className="bg-kivisai-blue hover:bg-kivisai-dark-blue"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleDownload(doc.id)}
                        className="bg-kivisai-blue hover:bg-kivisai-dark-blue"
                        disabled={downloadedDocs.has(doc.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {downloadedDocs.has(doc.id) ? "Heruntergeladen" : "Download"}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-2">
          {title}
        </h2>
        <p className="text-kivisai-moss-green">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-kivisai-blue" />
                    <CardTitle className="text-lg font-semibold text-kivisai-deep-dark-blue line-clamp-2">
                      {doc.name}
                    </CardTitle>
                  </div>
                  {showCategory && (
                    <Badge className={`${getCategoryColor(doc.category)} text-xs`}>
                      {doc.category}
                    </Badge>
                  )}
                </div>
                {doc.requiresEmail && (
                  <Lock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                )}
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-kivisai-moss-green mb-4 line-clamp-3">
                {doc.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>PDF • {doc.size}</span>
                  <span>{doc.downloads} Downloads</span>
                </div>
                
                <div className="text-xs text-gray-500">
                  Hochgeladen: {formatDate(doc.uploadDate)}
                </div>
                
                {doc.requiresEmail && !downloadedDocs.has(doc.id) ? (
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="ihre@email.de"
                      value={emailInputs[doc.id] || ""}
                      onChange={(e) => setEmailInputs(prev => ({
                        ...prev,
                        [doc.id]: e.target.value
                      }))}
                      className="text-sm"
                    />
                    <Button
                      onClick={() => handleEmailSubmit(doc.id, emailInputs[doc.id] || "")}
                      className="w-full bg-kivisai-blue hover:bg-kivisai-dark-blue text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => handleDownload(doc.id)}
                    className="w-full bg-kivisai-blue hover:bg-kivisai-dark-blue text-sm"
                    disabled={downloadedDocs.has(doc.id)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {downloadedDocs.has(doc.id) ? "Heruntergeladen" : "Download"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 