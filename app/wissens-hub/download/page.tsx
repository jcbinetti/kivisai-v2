import Link from "next/link";
import { Metadata } from "next";
import { FileText, FileImage, FileArchive } from "lucide-react";
import Image from "next/image";
import DownloadButton from "@/components/documents/download-button";
import { CtaSection } from "@/components/common/cta-section";
import Breadcrumbs from "@/components/common/Breadcrumbs";

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
    title: "Downloads | Wissen-Hub | KIVISAI",
    description: "Laden Sie unsere kostenlosen Ressourcen, Checklisten und Dokumente für Ihre KI-Transformation herunter.",
};

// Dokumenten-Daten
interface Document {
    id: string;
    title: string;
    description: string;
    category: string;
    filePath: string;
    fileSize: string;
    fileType: string;
    downloadCount?: number;
    lastUpdated: string;
}

const documents: Document[] = [
    // INQA-Coaching Dokumente
    {
        id: "inqa-flyer",
        title: "INQA-Coaching Flyer",
        description: "Übersicht über das staatlich geförderte INQA-Coaching Programm für nachhaltige Digitalisierung",
        category: "INQA-Coaching",
        filePath: "/downloads/250411_INQA_Coaching_Flyer_Online_FINAL.pdf",
        fileSize: "252 KB",
        fileType: "pdf",
        downloadCount: 45,
        lastUpdated: "2024-01-15"
    },
    {
        id: "inqa-checkliste",
        title: "INQA-Checkliste Förderfähigkeit",
        description: "Praktische Checkliste zur Prüfung der Förderfähigkeit für INQA-Coaching",
        category: "INQA-Coaching",
        filePath: "/downloads/INQA_Checkliste_Foerderfaehigkeit.pdf",
        fileSize: "395 KB",
        fileType: "pdf",
        downloadCount: 32,
        lastUpdated: "2024-01-10"
    },
    {
        id: "kmu-definition",
        title: "Benutzerleitfaden KMU-Definition",
        description: "Leitfaden zur Definition von Klein- und Mittelunternehmen (KMU) für Förderprogramme",
        category: "INQA-Coaching",
        filePath: "/downloads/Benutzerleitfaden_zur_Definition_von_KMU.pdf",
        fileSize: "1.1 MB",
        fileType: "pdf",
        downloadCount: 28,
        lastUpdated: "2024-01-08"
    },
    {
        id: "esf-erklaerung",
        title: "ESF-Erklärung GRC",
        description: "Offizielle ESF-Dokumente und Erklärungen für das INQA-Coaching Programm",
        category: "INQA-Coaching",
        filePath: "/downloads/1_INQA-COACHING/ESF-00-24-01_Dokument_-_Erklaerung_GRC_ohne_TN_1_.pdf",
        fileSize: "1.0 MB",
        fileType: "pdf",
        downloadCount: 15,
        lastUpdated: "2024-01-05"
    },
    {
        id: "de-minimis-erklaerung",
        title: "De-minimis Erklärung",
        description: "De-minimis Erklärung für staatliche Förderprogramme und Beihilfen",
        category: "INQA-Coaching",
        filePath: "/downloads/1_INQA-COACHING/ESF-25-83-02-_Dok_ex_De-minimis-Erklaerung.pdf",
        fileSize: "947 KB",
        fileType: "pdf",
        downloadCount: 12,
        lastUpdated: "2024-01-03"
    },
    {
        id: "inqa-coaching-ic",
        title: "INQA-Coaching IC Dokument",
        description: "Detaillierte Informationen zum INQA-Coaching Programm und Ablauf",
        category: "INQA-Coaching",
        filePath: "/downloads/1_INQA-COACHING/INQA-Coaching-IC2524674.pdf",
        fileSize: "185 KB",
        fileType: "pdf",
        downloadCount: 38,
        lastUpdated: "2024-01-12"
    }
];

// File Type Icon Komponente
function FileTypeIcon({ fileType }: { fileType: string }) {
    const iconClasses = "w-8 h-8 text-kivisai-moss-green";
    
    switch (fileType.toLowerCase()) {
        case 'pdf':
            return <FileText className={iconClasses} />;
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
        case 'webp':
            return <FileImage className={iconClasses} />;
        case 'zip':
        case 'rar':
        case '7z':
            return <FileArchive className={iconClasses} />;
        default:
            return <FileText className={iconClasses} />;
    }
}

export default function DownloadPage() {
    // Gruppiere Dokumente nach Kategorien
    const categories = Array.from(new Set(documents.map(doc => doc.category)));
    
    return (
        <main className="min-h-screen bg-kivisai-pure-white">
            {/* Hero Section */}
            <section className="pt-20 py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
                    <p className="text-xl mb-4 text-white/90 max-w-2xl mx-auto">
                        Kostenlose Ressourcen für Ihre KI-Transformation
                    </p>
                    <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
                        Laden Sie unsere Checklisten, Leitfäden und Dokumente herunter. Alle Ressourcen sind sorgfältig kuratiert und praxisnah aufbereitet.
                    </p>
                </div>
            </section>

            {/* Breadcrumb unter Hero */}
            <div className="container mx-auto px-4 mt-4 mb-2">
                <Breadcrumbs items={["Home", "Wissens-Hub", "Downloads"]} />
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Kategorien */}
                {categories.map((category) => (
                    <div key={category} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
                            {category}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {documents
                                .filter(doc => doc.category === category)
                                .map((document) => (
                                    <article key={document.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <FileTypeIcon fileType={document.fileType} />
                                                <div className="text-right">
                                                    <span className="text-xs text-kivisai-moss-green bg-gray-100 px-2 py-1 rounded">
                                                        {document.fileSize}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue">
                                                {document.title}
                                            </h3>
                                            
                                            <p className="text-kivisai-moss-green mb-4 line-clamp-3">
                                                {document.description}
                                            </p>
                                            
                                            <div className="flex items-center justify-between text-sm text-kivisai-moss-green mb-4">
                                                <span>Downloads: {document.downloadCount}</span>
                                                <span>Update: {new Date(document.lastUpdated).toLocaleDateString('de-DE')}</span>
                                            </div>
                                            
                                            <DownloadButton 
                                                filePath={document.filePath}
                                                fileName={document.title}
                                            />
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </div>
                ))}

                {/* CTA Section */}
                <CtaSection
                  title="Noch mehr Wissen entdecken?"
                  description="Abonnieren Sie unseren Newsletter oder stöbern Sie im Wissens-Hub für weitere Ressourcen."
                  background="gradient"
                  primaryCta={{
                    text: "Newsletter abonnieren",
                    href: "/kontakt/newsletter",
                    icon: "mail"
                  }}
                  secondaryCta={{
                    text: "Zum Wissens-Hub",
                    href: "/wissens-hub",
                    icon: "arrow"
                  }}
                />
            </div>
        </main>
    );
} 