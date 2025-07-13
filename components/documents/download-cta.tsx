"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DownloadCTA() {
    return (
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-kivisai-deep-dark-blue">
                Brauchen Sie weitere Ressourcen?
            </h3>
            <p className="text-kivisai-moss-green mb-6 max-w-2xl mx-auto">
                Kontaktieren Sie uns für maßgeschneiderte Lösungen und individuelle Beratung für Ihre KI-Transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-kivisai-clear-turquoise text-white hover:bg-kivisai-vibrant-turquoise">
                    <Link href="/kontakt">
                        Kontakt aufnehmen
                    </Link>
                </Button>
                <Button asChild variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white">
                    <Link href="/leistungen">
                        Unsere Leistungen
                    </Link>
                </Button>
            </div>
        </div>
    );
} 