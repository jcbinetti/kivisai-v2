"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { File } from 'lucide-react';

export const PageList = () => {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuliere das Laden der Seiten
    const mockPages = [
      '/',
      '/wissens-hub',
      '/wissens-hub/blog',
      '/wissens-hub/kategorien',
      '/wissens-hub/autoren',
      '/wissens-hub/events',
      '/leistungen',
      '/loesungen',
      '/ueber-kivisai',
      '/kontakt'
    ];
    
    setPages(mockPages);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Seitenübersicht</h2>
        <p>Lade Seiten...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Seitenübersicht</h2>
      <ul className="space-y-2">
        {pages.map((page) => {
          const isDynamic = /\[.*\]/.test(page);
          return (
            <li key={page} className="flex items-center">
              <File className="w-4 h-4 mr-2 text-gray-500" />
              {isDynamic ? (
                <span className="text-gray-600" title="Dynamische Routen können nicht direkt verlinkt werden">
                  {page} (Dynamische Route)
                </span>
              ) : (
                <Link href={page} className="text-blue-600 hover:underline" target="_blank">
                  {page}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  );
}; 