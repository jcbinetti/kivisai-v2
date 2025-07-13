export interface Document {
  id: string;
  name: string;
  description: string;
  filename: string;
  category: string;
  size: string;
  downloads: number;
  requiresEmail: boolean;
  tags: string[];
  lastUpdated: string;
}

export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subcategories?: string[];
}

export const documentCategories: DocumentCategory[] = [
  {
    id: "inqa-coaching",
    name: "INQA-Coaching",
    description: "Dokumente rund um INQA-Coaching und Förderung",
    icon: "award",
    color: "blue",
    subcategories: ["Förderung", "Checklisten", "Flyer", "Formulare"]
  },
  {
    id: "ki-prototyping",
    name: "KI-Prototyping",
    description: "Dokumente für KI-Prototyping und Entwicklung",
    icon: "cpu",
    color: "purple",
    subcategories: ["Anleitungen", "Templates", "Beispiele", "Tools"]
  },
  {
    id: "strategie",
    name: "Strategie & Coaching",
    description: "Strategische Dokumente und Coaching-Materialien",
    icon: "target",
    color: "green",
    subcategories: ["Strategie", "Coaching", "Workshops", "Tools"]
  },
  {
    id: "wissen",
    name: "Wissensdokumente",
    description: "Allgemeine Wissensdokumente und Ressourcen",
    icon: "book",
    color: "orange",
    subcategories: ["Whitepaper", "Studien", "Artikel", "Präsentationen"]
  }
];

export const documents: Document[] = [
  // INQA-Coaching Dokumente
  {
    id: "inqa-coaching-flyer",
    name: "INQA-Coaching Flyer",
    description: "Übersicht über das INQA-Coaching Programm und Förderung 2025-2026",
    filename: "250411_INQA_Coaching_Flyer_Online_FINAL.pdf",
    category: "INQA-Coaching",
    size: "2.1 MB",
    downloads: 0,
    requiresEmail: false,
    tags: ["INQA", "Coaching", "Förderung", "Flyer"],
    lastUpdated: "2024-01-15"
  },
  {
    id: "checkliste-foerderfaehigkeit",
    name: "Checkliste Förderfähigkeit",
    description: "Detaillierte Checkliste zur Prüfung der INQA-Coaching Förderfähigkeit",
    filename: "INQA_Checkliste_Foerderfaehigkeit.pdf",
    category: "INQA-Coaching",
    size: "1.8 MB",
    downloads: 0,
    requiresEmail: true,
    tags: ["INQA", "Checkliste", "Förderfähigkeit", "Prüfung"],
    lastUpdated: "2024-01-15"
  },
  {
    id: "inqa-coaching-uebersicht",
    name: "INQA-Coaching Übersicht",
    description: "Vollständige Übersicht über alle INQA-Coaching Module und Prozesse",
    filename: "INQA_Coaching_Uebersicht.pdf",
    category: "INQA-Coaching",
    size: "3.2 MB",
    downloads: 0,
    requiresEmail: true,
    tags: ["INQA", "Übersicht", "Module", "Prozesse"],
    lastUpdated: "2024-01-15"
  },
  {
    id: "kmu-definition-leitfaden",
    name: "KMU-Definition Leitfaden",
    description: "Leitfaden zur Definition von Klein- und Mittelständischen Unternehmen",
    filename: "Benutzerleitfaden_zur_Definition_von_KMU.pdf",
    category: "INQA-Coaching",
    size: "1.5 MB",
    downloads: 0,
    requiresEmail: false,
    tags: ["KMU", "Definition", "Leitfaden", "Unternehmen"],
    lastUpdated: "2024-01-15"
  }
];

export function getDocumentsByCategory(category: string): Document[] {
  return documents.filter(doc => doc.category === category);
}

export function getDocumentById(id: string): Document | undefined {
  return documents.find(doc => doc.id === id);
}

export function searchDocuments(query: string): Document[] {
  const lowercaseQuery = query.toLowerCase();
  return documents.filter(doc => 
    doc.name.toLowerCase().includes(lowercaseQuery) ||
    doc.description.toLowerCase().includes(lowercaseQuery) ||
    doc.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getDocumentsByPage(pagePath: string): Document[] {
  return documents.filter(doc => 
    doc.category.toLowerCase().includes(pagePath.toLowerCase())
  );
}

export function incrementDownloadCount(id: string): void {
  const doc = documents.find(d => d.id === id);
  if (doc) {
    doc.downloads++;
  }
} 