"use client";

import { useState } from "react";
import { Document } from "@/lib/document-registry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Mail, Lock, Calendar, Tag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DocumentCardProps {
  document: Document;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export default function DocumentCard({ document, variant = "default", className = "" }: DocumentCardProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAccess, setHasAccess] = useState(!document.requiresEmail);

  const handleDownload = async () => {
    if (document.requiresEmail && !hasAccess) {
      if (!email) {
        toast({
          title: "E-Mail erforderlich",
          description: "Bitte geben Sie Ihre E-Mail-Adresse ein, um das Dokument herunterzuladen.",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);
      try {
        const response = await fetch("/api/documents/email-capture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentId: document.id,
            email: email,
            template: document.emailTemplate,
          }),
        });

        if (response.ok) {
          setHasAccess(true);
          toast({
            title: "E-Mail bestätigt",
            description: "Sie können das Dokument jetzt herunterladen.",
          });
        } else {
          throw new Error("E-Mail-Validierung fehlgeschlagen");
        }
      } catch (error) {
        toast({
          title: "Fehler",
          description: "Es gab ein Problem bei der E-Mail-Validierung. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }

    // Download-Logik
    try {
      const response = await fetch(`/api/documents/download/${document.id}`, {
        method: "POST",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = window.document.createElement("a");
        a.href = url;
        a.download = document.filename;
        window.document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        window.document.body.removeChild(a);

        toast({
          title: "Download gestartet",
          description: `${document.title} wird heruntergeladen.`,
        });
      }
    } catch (error) {
      toast({
        title: "Download-Fehler",
        description: "Es gab ein Problem beim Download. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    }
  };

  if (variant === "compact") {
    return (
      <Card className={`hover:shadow-md transition-shadow ${className}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-kivisai-blue" />
              <CardTitle className="text-sm font-medium">{document.title}</CardTitle>
            </div>
            <Badge variant="outline" className="text-xs">
              {document.fileSize}
            </Badge>
          </div>
          <CardDescription className="text-xs">{document.description}</CardDescription>
        </CardHeader>
        <CardFooter className="pt-0">
          <Button
            size="sm"
            onClick={handleDownload}
            disabled={isSubmitting}
            className="w-full"
          >
            <Download className="h-3 w-3 mr-1" />
            {document.requiresEmail && !hasAccess ? "E-Mail eingeben" : "Download"}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-200 ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-kivisai-blue" />
            <CardTitle className="text-lg">{document.title}</CardTitle>
            {document.requiresEmail && (
              <Lock className="h-4 w-4 text-amber-500" />
            )}
          </div>
          <Badge variant="outline">{document.fileSize}</Badge>
        </div>
        <CardDescription className="text-sm">{document.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {document.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <Tag className="h-2 w-2 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          Hochgeladen: {new Date(document.uploadDate).toLocaleDateString("de-DE")}
        </div>

        {document.requiresEmail && !hasAccess && (
          <div className="space-y-2">
            <Label htmlFor={`email-${document.id}`} className="text-sm">
              E-Mail-Adresse für Download
            </Label>
            <Input
              id={`email-${document.id}`}
              type="email"
              placeholder="ihre-email@beispiel.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm"
            />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleDownload}
          disabled={isSubmitting || (document.requiresEmail && !hasAccess && !email)}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Mail className="h-4 w-4 mr-2 animate-pulse" />
              Wird verarbeitet...
            </>
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              {document.requiresEmail && !hasAccess ? "E-Mail bestätigen" : "Download starten"}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
} 