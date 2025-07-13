import { type NextRequest, NextResponse } from "next/server"
import { getAllArticles, createArticle } from "@/lib/content-management"

export async function GET() {
  try {
    const articles = await getAllArticles()
    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json({ error: "Fehler beim Laden der Artikel" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const article = await createArticle(data)
    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Fehler beim Erstellen des Artikels" }, { status: 500 })
  }
}
