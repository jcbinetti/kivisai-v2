import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: (string | BreadcrumbItem)[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const getBreadcrumbUrl = (items: (string | BreadcrumbItem)[], currentIndex: number): string => {
    const urlMap: { [key: string]: string } = {
      "Home": "/",
      "Leistungen": "/leistungen",
      "KI-Prototyping": "/leistungen/ki-prototyping",
      "Begleitung": "/leistungen/ki-prototyping/begleitung",
      "Ablauf": "/leistungen/ki-prototyping/ablauf",
      "Beispiele": "/leistungen/ki-prototyping/beispiele",
      "Ressourcen": "/leistungen/ki-prototyping/ressourcen",
      "KI-Potenzialanalyse": "/leistungen/ki-potenzialanalyse",
      "Strategie-Coaching": "/leistungen/strategie-coaching",
      "Coaching & Training": "/leistungen/coaching-training",
      "INQA-Coaching": "/leistungen/inqa-coaching",
      "Über KIVISAI": "/ueber-kivisai",
      "Bedeutung": "/ueber-kivisai/bedeutung",
      "Prinzipien": "/ueber-kivisai/prinzipien",
      "Methode": "/ueber-kivisai/methode",
      "Team & Netzwerk": "/ueber-kivisai/team-netzwerk",
      "Lösungen": "/loesungen",
      "Wissens-Hub": "/wissens-hub",
      "Blog": "/wissens-hub/blog",
      "Kategorien": "/wissens-hub/kategorien",
      "Events": "/wissens-hub/events",
      "Downloads": "/wissens-hub/download",
      "Glossar": "/wissens-hub/glossar",
      "Autoren": "/wissens-hub/autoren",
      "Kontakt": "/kontakt",
      "Newsletter": "/kontakt/newsletter",
    };

    const currentItem = items[currentIndex];
    const itemLabel = typeof currentItem === 'string' ? currentItem : currentItem.label;
    
    return urlMap[itemLabel] || "#";
  };

  return (
    <nav className="text-sm text-white/90 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg shadow-sm border border-white/20" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, idx) => {
          const itemLabel = typeof item === 'string' ? item : item.label;
          const itemHref = typeof item === 'string' ? getBreadcrumbUrl(items, idx) : (item.href || getBreadcrumbUrl(items, idx));
          
          return (
            <li key={`${itemLabel}-${idx}`} className="flex items-center">
              {idx > 0 && <span className="mx-2 text-white/60">/</span>}
              {idx < items.length - 1 ? (
                <Link 
                  href={itemHref}
                  className="hover:underline text-white hover:text-kivisai-clear-turquoise transition-colors"
                >
                  {itemLabel}
                </Link>
              ) : (
                <span className="font-semibold text-white">{itemLabel}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 