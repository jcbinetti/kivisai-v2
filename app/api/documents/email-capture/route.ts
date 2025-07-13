import { NextRequest, NextResponse } from 'next/server';
import { getDocumentById } from "@/lib/document-registry";

interface EmailCapture {
  documentId: string;
  documentName: string;
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { documentId, email, template } = await request.json();

    // Validierung
    if (!documentId || !email) {
      return NextResponse.json(
        { error: "Document ID und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    // Dokument überprüfen
    const document = getDocumentById(documentId);
    if (!document) {
      return NextResponse.json(
        { error: "Dokument nicht gefunden" },
        { status: 404 }
      );
    }

    if (!document.requiresEmail) {
      return NextResponse.json(
        { error: "E-Mail nicht erforderlich für dieses Dokument" },
        { status: 400 }
      );
    }

    // Hier würde die E-Mail-Speicherung in einer Datenbank erfolgen
    // Für jetzt simulieren wir eine erfolgreiche Speicherung
    console.log(`E-Mail erfasst: ${email} für Dokument: ${documentId}`);

    // E-Mail-Template basierte Aktionen
    if (template) {
      switch (template) {
        case "checkliste-foerderfaehigkeit":
          // Spezielle Logik für Checkliste
          console.log("Checkliste-Förderfähigkeit E-Mail erfasst");
          break;
        case "inqa-coaching-uebersicht":
          // Spezielle Logik für INQA-Coaching Übersicht
          console.log("INQA-Coaching Übersicht E-Mail erfasst");
          break;
        default:
          console.log("Standard E-Mail erfasst");
      }
    }

    // Hier könnte auch eine E-Mail an den Benutzer gesendet werden
    // mit dem Download-Link oder zusätzlichen Informationen

    return NextResponse.json({
      success: true,
      message: "E-Mail erfolgreich erfasst",
      documentId,
      email
    });

  } catch (error) {
    console.error("E-Mail-Erfassung Fehler:", error);
    return NextResponse.json(
      { error: "Interner Server-Fehler" },
      { status: 500 }
    );
  }
}

// Optional: Funktion zum Senden an CRM/Newsletter-System
async function sendToCRM(emailCapture: EmailCapture) {
  // Implementierung für Brevo, Mailchimp, etc.
  // Beispiel für Brevo:
  /*
  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY
    },
    body: JSON.stringify({
      email: emailCapture.email,
      attributes: {
        DOCUMENT_DOWNLOAD: emailCapture.documentName,
        DOWNLOAD_DATE: emailCapture.timestamp,
        SOURCE: 'document-download'
      },
      listIds: [2], // Newsletter-Liste
      updateEnabled: true
    })
  });
  */
} 