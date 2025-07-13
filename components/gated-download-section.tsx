"use client"

import { Download, FileText, Mail, CheckCircle, Clock } from "lucide-react"
import { useState } from "react"

interface Document {
  title: string
  buttonText: string
  isUploaded: boolean
  requiresEmail: boolean
  filename?: string // For actual download simulation
  description: string // Add description to the interface
}

export default function GatedDownloadSection() {
  const [email, setEmail] = useState("")
  const [showEmailFormForDoc, setShowEmailFormForDoc] = useState<string | null>(null)
  const [downloadInitiated, setDownloadInitiated] = useState<string | null>(null)

  const documents: Document[] = [
    {
      title: "White Paper: KI-Transformation – Zukunftsszenarien, Nutzen und Werte für Organisationen",
      buttonText: "White Paper herunterladen",
      isUploaded: true,
      requiresEmail: true,
      filename: "whitepaper-ki-transformation.pdf",
      description: "Einblick in die neuesten KI-Trends, Zukunftsszenarien und deren Auswirkungen.",
    },
    {
      title: "Datenquellen & Studien",
      buttonText: "Studien als PDF herunterladen",
      isUploaded: true,
      requiresEmail: true,
      filename: "datenquellen-studien.pdf",
      description: "Umfassende Sammlung relevanter Datenquellen und wissenschaftlicher Studien.",
    },
    {
      title: "Start2Act Angebotsvergleich",
      buttonText: "Vergleich als PDF ansehen",
      isUploaded: true,
      requiresEmail: false, // Changed to false as per new instructions
      filename: "start2act-angebotsvergleich.pdf",
      description: "Unterstützung Ihrer Wandel durch strategisches Coaching und maßgeschneiderte Lösungen.",
    },
    {
      title: "INQA Coaching Ablauf (IC2524674)",
      buttonText: "Förderdetails herunterladen",
      isUploaded: true,
      requiresEmail: false,
      filename: "inqa-coaching-ablauf.pdf",
      description: "Informationen zu Förderprogrammen und dem Ablauf des INQA Coachings.",
    },
    {
      title: "Story Lena – Tischlerin & KI",
      buttonText: "Erfolgsstory lesen",
      isUploaded: true,
      requiresEmail: false,
      filename: "story-lena-tischlerin-ki.pdf",
      description: "Lesen Sie, wie Tischlerin Lena mit KI ihren Büroalltag optimiert hat.",
    },
    {
      title: "EVALKIT Demo-Auswertung",
      buttonText: "Demo ansehen",
      isUploaded: true,
      requiresEmail: false,
      filename: "evalkit-demo-auswertung.pdf",
      description: "Erhalten Sie eine Beispielauswertung unseres EVALKITs.",
    },
    // Legal pages are handled by direct links in footer, not here.
  ]

  const handleDownload = (doc: Document) => {
    if (!doc.isUploaded) {
      alert("Dieses Dokument ist noch nicht verfügbar.")
      return
    }

    if (doc.requiresEmail && !email) {
      setShowEmailFormForDoc(doc.title)
      return
    }

    // Simulate download
    console.log(`Downloading: ${doc.filename}`)
    setDownloadInitiated(doc.title)
    setTimeout(() => {
      alert(`Download gestartet: ${doc.title}`)
      setShowEmailFormForDoc(null)
      setEmail("")
      setDownloadInitiated(null)
    }, 500) // Small delay for UX
  }

  return (
    <section className="py-16 bg-kivisai-light-cool-gray text-kivisai-moss-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-kivisai-deep-dark-blue">Dokumente & Downloads</h2>
          <p className="text-lg max-w-2xl mx-auto text-kivisai-moss-green">
            Laden Sie unsere White Paper, Studien und Erfolgsgeschichten herunter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-kivisai-pure-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-kivisai-deep-dark-blue" />
                <div className="flex items-center space-x-2">
                  {doc.isUploaded ? (
                    <CheckCircle className="w-5 h-5 text-kivisai-vibrant-light-green" />
                  ) : (
                    <Clock className="w-5 h-5 text-kivisai-moss-green" />
                  )}
                  {doc.requiresEmail && <Mail className="w-5 h-5 text-kivisai-clear-turquoise" />}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue">{doc.title}</h3>

              <p className="text-sm text-kivisai-moss-green mb-4 flex-grow">{doc.description}</p>

              <div className="space-y-3 mt-auto">
                {!doc.isUploaded && (
                  <div className="bg-kivisai-light-cool-gray border border-kivisai-moss-green/20 rounded-md p-3">
                    <p className="text-kivisai-moss-green text-xs font-medium">
                      📋 Platzhalter - Dokument wird bald verfügbar sein
                    </p>
                  </div>
                )}

                {doc.requiresEmail && showEmailFormForDoc === doc.title && (
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-kivisai-light-cool-gray rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise text-kivisai-moss-green"
                    />
                  </div>
                )}

                {/* Secondary Button */}
                <button
                  onClick={() => handleDownload(doc)}
                  disabled={
                    !doc.isUploaded ||
                    (doc.requiresEmail && showEmailFormForDoc === doc.title && !email) ||
                    downloadInitiated === doc.title
                  }
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                    doc.isUploaded
                      ? "bg-kivisai-vibrant-light-green text-kivisai-moss-green hover:bg-kivisai-vibrant-light-green/80"
                      : "bg-kivisai-light-cool-gray text-kivisai-moss-green/60 cursor-not-allowed"
                  }`}
                >
                  {downloadInitiated === doc.title ? (
                    <span>Download läuft...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>{doc.buttonText}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
