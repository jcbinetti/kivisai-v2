"use client"

import { FileText, FileImage, FileArchive, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Document {
    id: string;
    title: string;
    description: string;
    filePath: string;
    fileSize: string;
    fileType: string;
    downloadCount?: number;
    lastUpdated: string;
}

interface DownloadCardsProps {
    documents: Document[];
    title: string;
    description: string;
}

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

// Download Handler
function handleDownload(filePath: string, fileName: string) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function DownloadCards({ documents, title, description }: DownloadCardsProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kivisai-deep-dark-blue">
                        {title}
                    </h2>
                    <p className="text-lg text-kivisai-moss-green max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {documents.map((document) => (
                        <Card key={document.id} className="bg-white hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <FileTypeIcon fileType={document.fileType} />
                                    <div className="text-right">
                                        <span className="text-xs text-kivisai-moss-green bg-gray-100 px-2 py-1 rounded">
                                            {document.fileSize}
                                        </span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-semibold text-kivisai-deep-dark-blue">
                                    {document.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-kivisai-moss-green mb-4 line-clamp-3">
                                    {document.description}
                                </p>
                                
                                <div className="flex items-center justify-between text-sm text-kivisai-moss-green mb-4">
                                    {document.downloadCount && (
                                        <span>Downloads: {document.downloadCount}</span>
                                    )}
                                    <span>Update: {new Date(document.lastUpdated).toLocaleDateString('de-DE')}</span>
                                </div>
                                
                                <div className="flex gap-2">
                                    <Button 
                                        onClick={() => handleDownload(document.filePath, document.title)}
                                        className="flex-1 bg-kivisai-clear-turquoise text-white hover:bg-kivisai-vibrant-turquoise"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </Button>
                                    <Button 
                                        variant="outline"
                                        onClick={() => window.open(document.filePath, '_blank')}
                                        className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
} 