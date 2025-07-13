"use client"

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

interface DownloadButtonProps {
    filePath: string;
    fileName: string;
}

export default function DownloadButton({ filePath, fileName }: DownloadButtonProps) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreview = () => {
        window.open(filePath, '_blank');
    };

    return (
        <div className="flex gap-2">
            <Button 
                onClick={handleDownload}
                className="flex-1 bg-kivisai-clear-turquoise text-white hover:bg-kivisai-vibrant-turquoise"
            >
                <Download className="w-4 h-4 mr-2" />
                Download
            </Button>
            <Button 
                variant="outline"
                onClick={handlePreview}
                className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white"
            >
                <ExternalLink className="w-4 h-4" />
            </Button>
        </div>
    );
} 