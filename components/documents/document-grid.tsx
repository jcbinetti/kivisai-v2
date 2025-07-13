"use client";

import { Document } from "@/lib/document-registry";
import DocumentCard from "./document-card";
import { FileText } from "lucide-react";

interface DocumentGridProps {
  documents: Document[];
  variant?: "default" | "compact";
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function DocumentGrid({ 
  documents, 
  variant = "default", 
  columns = 3, 
  className = "" 
}: DocumentGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  if (documents.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground">
          <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Keine Dokumente verfügbar</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          variant={variant}
        />
      ))}
    </div>
  );
} 