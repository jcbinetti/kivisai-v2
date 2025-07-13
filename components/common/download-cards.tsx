"use client"

import { Download, FileText, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DownloadDocument {
  id: string
  name: string
  filename: string
  description: string
  category: string
  requiresEmail: boolean
  downloadUrl: string
  size?: string
}

interface DownloadCardsProps {
  documents: DownloadDocument[]
  title?: string
  description?: string
  showCategory?: boolean
}

export function DownloadCards({ 
  documents, 
  title = "Dokumente zum Download", 
  description,
  showCategory = true 
}: DownloadCardsProps) {
  const handleDownload = (doc: DownloadDocument) => {
    if (doc.requiresEmail) {
      // In production, this would open an email collection modal
      alert(`Für den Download von "${doc.name}" ist eine E-Mail-Adresse erforderlich.`)
      return
    }
    
    // Direct download
    window.open(doc.downloadUrl, '_blank')
  }

  const formatFileSize = (size?: string) => {
    if (!size) return ''
    return ` • ${size}`
  }

  return (
    <section className="py-12 bg-kivisai-light-cool-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc) => (
            <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-kivisai-dark-blue group-hover:text-kivisai-blue transition-colors">
                      {doc.name}
                    </CardTitle>
                    {showCategory && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs border-kivisai-blue/30 text-kivisai-blue">
                          {doc.category}
                        </Badge>
                        {doc.requiresEmail && (
                          <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                            <Mail className="w-3 h-3 mr-1" />
                            E-Mail erforderlich
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="w-10 h-10 bg-kivisai-blue/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-kivisai-blue" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-kivisai-moss-green mb-4 leading-relaxed">
                  {doc.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    PDF{formatFileSize(doc.size)}
                  </span>
                  
                  <Button 
                    size="sm" 
                    className="bg-kivisai-blue hover:bg-kivisai-dark-blue text-white"
                    onClick={() => handleDownload(doc)}
                  >
                    {doc.requiresEmail ? (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        E-Mail eingeben
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {documents.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-kivisai-moss-green/50 mx-auto mb-4" />
            <p className="text-kivisai-moss-green text-lg">Keine Dokumente verfügbar</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Predefined document sets for different pages
export const inqaCoachingDocuments: DownloadDocument[] = [
  {
    id: '1',
    name: 'INQA-Coaching Übersicht',
    filename: '250411_INQA_Coaching_Flyer_Online_FINAL.pdf',
    description: 'Übersicht über das INQA-Coaching Programm, Förderung und Ablauf',
    category: 'Flyer',
    requiresEmail: false,
    downloadUrl: '/downloads/1. INQA-COACHING/250411_INQA_Coaching_Flyer_Online_FINAL.pdf',
    size: '252 KB'
  }
]

export const inqaCoachingDetailsDocuments: DownloadDocument[] = [
  {
    id: '2',
    name: 'Förderfähigkeit Checkliste',
    filename: 'IC_Checkliste_Foerderfaehigkeit.pdf',
    description: 'Checkliste zur Prüfung der Förderfähigkeit für INQA-Coaching',
    category: 'Checkliste',
    requiresEmail: true,
    downloadUrl: '/downloads/1. INQA-COACHING/IC_Checkliste_Foerderfaehigkeit.pdf',
    size: '395 KB'
  },
  {
    id: '3',
    name: 'KMU Definition Leitfaden',
    filename: 'Benutzerleitfaden_zur_Definition_von_KMU.pdf',
    description: 'Leitfaden zur Definition von Klein- und Mittelständischen Unternehmen',
    category: 'Leitfaden',
    requiresEmail: false,
    downloadUrl: '/downloads/1. INQA-COACHING/Benutzerleitfaden_zur_Definition_von_KMU.pdf',
    size: '1.1 MB'
  },
  {
    id: '4',
    name: 'ESF Förderung Dokumente',
    filename: 'ESF-00-24-01_Dokument_-_Erklaerung_GRC_ohne_TN_1_.pdf',
    description: 'Offizielle ESF-Dokumente und Erklärungen für die Förderung',
    category: 'ESF-Dokumente',
    requiresEmail: false,
    downloadUrl: '/downloads/1. INQA-COACHING/ESF-00-24-01_Dokument_-_Erklaerung_GRC_ohne_TN_1_.pdf',
    size: '1.0 MB'
  }
]

export const inqaChecklistDocuments: DownloadDocument[] = [
  {
    id: '5',
    name: 'INQA-Coaching Checkliste',
    filename: 'IC_Checkliste_Foerderfaehigkeit.pdf',
    description: 'Detaillierte Checkliste zur Prüfung der Förderfähigkeit für INQA-Coaching',
    category: 'Checkliste',
    requiresEmail: false,
    downloadUrl: '/downloads/1. INQA-COACHING/IC_Checkliste_Foerderfaehigkeit.pdf',
    size: '395 KB'
  }
] 