import { NextRequest, NextResponse } from "next/server";
import { getDocumentById, incrementDownloadCount } from "@/lib/document-registry";
import { promises as fs } from "fs";
import path from "path";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Dokument überprüfen
    const document = getDocumentById(id);
    if (!document) {
      return NextResponse.json(
        { error: "Dokument nicht gefunden" },
        { status: 404 }
      );
    }

    // Dateipfad konstruieren
    const filePath = path.join(process.cwd(), "public", "downloads", document.filename);

    // Datei überprüfen
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: "Datei nicht gefunden" },
        { status: 404 }
      );
    }

    // Datei lesen
    const fileBuffer = await fs.readFile(filePath);

    // Download-Zähler erhöhen
    incrementDownloadCount(id);

    // Response mit Datei
    const response = new NextResponse(fileBuffer);
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set("Content-Disposition", `attachment; filename="${document.filename}"`);
    response.headers.set("Content-Length", fileBuffer.length.toString());

    return response;

  } catch (error) {
    console.error("Download-Fehler:", error);
    return NextResponse.json(
      { error: "Interner Server-Fehler" },
      { status: 500 }
    );
  }
}

// GET-Route für direkte Downloads (ohne Tracking)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const document = getDocumentById(id);
    if (!document) {
      return NextResponse.json(
        { error: "Dokument nicht gefunden" },
        { status: 404 }
      );
    }

    const filePath = path.join(process.cwd(), "public", "downloads", document.filename);

    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: "Datei nicht gefunden" },
        { status: 404 }
      );
    }

    const fileBuffer = await fs.readFile(filePath);

    const response = new NextResponse(fileBuffer);
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set("Content-Disposition", `attachment; filename="${document.filename}"`);
    response.headers.set("Content-Length", fileBuffer.length.toString());

    return response;

  } catch (error) {
    console.error("Download-Fehler:", error);
    return NextResponse.json(
      { error: "Interner Server-Fehler" },
      { status: 500 }
    );
  }
} 