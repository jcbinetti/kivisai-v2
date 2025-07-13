"use client";

import { useState, useEffect } from "react";
import { Document, documentCategories, documents } from "@/lib/document-registry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { FileText, Upload, Search, Plus, Edit, Trash2, Download, Mail, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function DocumentsAdminPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);
  const [isAddingDocument, setIsAddingDocument] = useState(false);
  const [editingDocument, setEditingDocument] = useState<Document | null>(null);

  // Filter-Dokumente basierend auf Suche und Kategorie
  useEffect(() => {
    let filtered = documents;

    if (searchQuery) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    setFilteredDocuments(filtered);
  }, [searchQuery, selectedCategory]);

  const handleAddDocument = () => {
    setIsAddingDocument(true);
    setEditingDocument(null);
  };

  const handleEditDocument = (document: Document) => {
    setEditingDocument(document);
    setIsAddingDocument(false);
  };

  const handleDeleteDocument = (documentId: string) => {
    if (confirm("Sind Sie sicher, dass Sie dieses Dokument löschen möchten?")) {
      // Hier würde die Löschung in der Datenbank erfolgen
      toast({
        title: "Dokument gelöscht",
        description: "Das Dokument wurde erfolgreich gelöscht.",
      });
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = documentCategories.find(cat => cat.id === categoryId);
    return category?.name || categoryId;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-2">
          Dokumentenverwaltung
        </h1>
        <p className="text-muted-foreground">
          Verwalten Sie alle verfügbaren Dokumente und deren E-Mail-Gating-Einstellungen
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="add">Dokument hinzufügen</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Such- und Filter-Bereich */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Dokumente durchsuchen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="search">Suche</Label>
                  <Input
                    id="search"
                    placeholder="Dokumente durchsuchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategorie</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Alle Kategorien" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Alle Kategorien</SelectItem>
                      {documentCategories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleAddDocument} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Neues Dokument
              </Button>
            </CardContent>
          </Card>

          {/* Dokumente-Liste */}
          <div className="grid gap-4">
            {filteredDocuments.map((document) => (
              <Card key={document.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-kivisai-blue" />
                      <div>
                        <CardTitle className="text-lg">{document.name}</CardTitle>
                        <CardDescription>{document.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {document.requiresEmail && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          E-Mail erforderlich
                        </Badge>
                      )}
                      <Badge variant="secondary">{document.size}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Kategorie:</span> {getCategoryName(document.category)}
                    </div>
                    <div>
                      <span className="font-medium">Downloads:</span> {document.downloads}
                    </div>
                    <div>
                      <span className="font-medium">Status:</span>
                      <Badge variant="default" className="ml-2">
                        Aktiv
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {document.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(document.lastUpdated).toLocaleDateString("de-DE")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditDocument(document)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteDocument(document.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="add" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Neues Dokument hinzufügen</CardTitle>
              <CardDescription>
                Fügen Sie ein neues Dokument zur Bibliothek hinzu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Dokumentname" />
                </div>
                <div>
                  <Label htmlFor="filename">Dateiname</Label>
                  <Input id="filename" placeholder="document.pdf" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Beschreibung</Label>
                <Textarea id="description" placeholder="Kurze Beschreibung des Dokuments" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Kategorie</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Kategorie wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentCategories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="size">Größe</Label>
                  <Input id="size" placeholder="2.1 MB" />
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="tag1, tag2, tag3" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="requires-email" />
                <Label htmlFor="requires-email">E-Mail für Download erforderlich</Label>
              </div>
              <div className="flex gap-2">
                <Button>Dokument hochladen</Button>
                <Button variant="outline">Abbrechen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Gesamte Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {documents.reduce((sum, doc) => sum + doc.downloads, 0)}
                </div>
                <p className="text-sm text-muted-foreground">
                  Alle Dokumente zusammen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Aktive Dokumente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{documents.length}</div>
                <p className="text-sm text-muted-foreground">
                  Verfügbare Dokumente
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  E-Mail-Gating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {documents.filter(doc => doc.requiresEmail).length}
                </div>
                <p className="text-sm text-muted-foreground">
                  Dokumente mit E-Mail-Erfordernis
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents
                  .sort((a, b) => b.downloads - a.downloads)
                  .slice(0, 5)
                  .map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.category}</p>
                      </div>
                      <Badge variant="secondary">{doc.downloads} Downloads</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 