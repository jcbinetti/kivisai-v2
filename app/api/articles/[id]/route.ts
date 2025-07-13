import { type NextRequest, NextResponse } from "next/server"
import { updateArticle, deleteArticle } from "@/lib/content-management"

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    const article = await updateArticle(id, data)

    if (!article) {
      return NextResponse.json({ error: "Artikel nicht gefunden" }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ error: "Fehler beim Aktualisieren des Artikels" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const success = await deleteArticle(id)

    if (!success) {
      return NextResponse.json({ error: "Artikel nicht gefunden" }, { status: 404 })
    }

    return NextResponse.json({ message: "Artikel gelöscht" })
  } catch (error) {
    return NextResponse.json({ error: "Fehler beim Löschen des Artikels" }, { status: 500 })
  }
}
