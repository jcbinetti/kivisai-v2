"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function NewArticlePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "KIVISAI Team",
    category: "KI & Transformation",
    image: "",
    readTime: 5,
    published: false,
    tags: "",
    seoTitle: "",
    seoDescription: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const articleData = {
        ...formData,
        date: new Date().toLocaleDateString("de-DE"),
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      }

      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      })

      if (response.ok) {
        router.push("/admin/content")
      } else {
        alert("Fehler beim Speichern des Artikels")
      }
    } catch (error) {
      console.error("Fehler:", error)
      alert("Fehler beim Speichern des Artikels")
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[äöüß]/g, (match) => {
        const replacements: { [key: string]: string } = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" }
        return replacements[match] || match
      })
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
      seoTitle: title,
    }))
  }

  return (
    <div className="min-h-screen bg-kivisai-pure-white p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/content">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-kivisai-deep-dark-blue">Neuer Artikel</h1>
            <p className="text-kivisai-moss-green">Erstellen Sie einen neuen Blog-Artikel</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grundinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Titel *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Artikel-Titel eingeben"
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">URL-Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-slug"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Kurzbeschreibung *</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Kurze Beschreibung des Artikels"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Autor</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Kategorie</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image">Bild-URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                    placeholder="/images/artikel-bild.jpg"
                  />
                </div>

                <div>
                  <Label htmlFor="readTime">Lesezeit (Minuten)</Label>
                  <Input
                    id="readTime"
                    type="number"
                    value={formData.readTime}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, readTime: Number.parseInt(e.target.value) || 5 }))
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (kommagetrennt)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
                  placeholder="KI, Transformation, Business"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Artikel-Inhalt</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="content">Inhalt (HTML) *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="<h2>Überschrift</h2><p>Artikel-Text...</p>"
                  className="min-h-[300px]"
                  required
                />
                <p className="text-sm text-kivisai-moss-green mt-2">
                  Sie können HTML-Tags verwenden: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;,
                  &lt;strong&gt;, &lt;em&gt;, &lt;blockquote&gt;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO & Veröffentlichung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seoTitle">SEO-Titel</Label>
                <Input
                  id="seoTitle"
                  value={formData.seoTitle}
                  onChange={(e) => setFormData((prev) => ({ ...prev, seoTitle: e.target.value }))}
                  placeholder="SEO-optimierter Titel"
                />
              </div>

              <div>
                <Label htmlFor="seoDescription">SEO-Beschreibung</Label>
                <Textarea
                  id="seoDescription"
                  value={formData.seoDescription}
                  onChange={(e) => setFormData((prev) => ({ ...prev, seoDescription: e.target.value }))}
                  placeholder="SEO-Beschreibung für Suchmaschinen"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
                />
                <Label htmlFor="published">Artikel veröffentlichen</Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Speichert..." : "Artikel speichern"}
            </Button>
            <Link href="/admin/content">
              <Button variant="outline">Abbrechen</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
