/**
 * KIVISAI Image Manager
 * Moderne Bilderverwaltung mit Optimierung und Validierung
 * Hybrid-System: Lokale Dateien + Sanity CMS Integration
 */

import { 
  getAllSanityImages, 
  getSanityImagesByCategory, 
  searchSanityImages, 
  getSanityImageStats,
  updateSanityImageMetadata,
  deleteSanityImage,
  type SanityAsset 
} from './sanity-client'

export interface ImageAsset {
  id: string
  filename: string
  path: string
  alt: string
  width?: number
  height?: number
  size?: number
  format: "png" | "jpg" | "jpeg" | "svg" | "webp"
  category: "logo" | "badge" | "icon" | "hero" | "content" | "placeholder"
  tags: string[]
  lastModified: string
  optimized: boolean
  source: "local" | "sanity" // Neue Eigenschaft für Hybrid-System
  sanityId?: string // Sanity Asset ID falls von Sanity
}

// Zentrale Bilderdatenbank - VOLLSTÄNDIG AKTUALISIERT
export const IMAGE_REGISTRY: Record<string, ImageAsset> = {
  // KIVISAI Logos - Updated with new versions
  "kivisai-logo": {
    id: "kivisai-logo",
    filename: "KIVISAI_logo_TR.webp",
    path: "/images-optimized/KIVISAI_logo_TR.webp",
    alt: "KIVISAI Logo - Experten für KI-Transformation und menschlich-strategische Beratung",
    width: 300,
    height: 100,
    format: "webp",
    category: "logo",
    tags: ["kivisai", "logo", "brand", "header"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivisai-logo-invert": {
    id: "kivisai-logo-invert",
    filename: "KIVISAI_logo_invert_alone.webp",
    path: "/images-optimized/3_LABEL-LOGO/KIVISAI_logo_invert_alone.webp",
    alt: "KIVISAI Logo Invertiert - Für dunkle Hintergründe",
    width: 300,
    height: 100,
    format: "webp",
    category: "logo",
    tags: ["kivisai", "logo", "brand", "invert", "dark-background"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivisai-signet": {
    id: "kivisai-signet",
    filename: "KIVISAI_signet_tr.webp",
    path: "/images-optimized/KIVISAI_signet_tr.webp",
    alt: "KIVISAI Signet - Symbol für die Verbindung von menschlicher und künstlicher Intelligenz",
    width: 120,
    height: 120,
    format: "webp",
    category: "logo",
    tags: ["kivisai", "signet", "icon"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // CONVIS Partner Logos
  "convis-logo-quadrat": {
    id: "convis-logo-quadrat",
    filename: "CONVIS_Logo-Quadrat.png",
    path: "/images/CONVIS_Logo-Quadrat.png",
    alt: "CONVIS Logo Quadrat - Strategischer Partner für Unternehmensberatung",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["convis", "partner", "logo", "quadrat"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "convis-logo-web": {
    id: "convis-logo-web",
    filename: "CONVIS_Logo_RGB_72dpi_web.jpg",
    path: "/images/CONVIS_Logo_RGB_72dpi_web.jpg",
    alt: "CONVIS Logo Web - Strategischer Partner für Unternehmensberatung",
    width: 300,
    height: 100,
    format: "jpg",
    category: "logo",
    tags: ["convis", "partner", "logo", "web"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // AI Explorer Club
  "ai-explorer-club": {
    id: "ai-explorer-club",
    filename: "AI-Explorer-Club-Logo.png",
    path: "/images/AI-Explorer-Club-Logo.png",
    alt: "AI Explorer Club Logo - Netzwerk für KI-Innovation und Wissensaustausch",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["ai", "explorer", "club", "logo", "training", "institute"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // INQA Coach Badge
  "inqa-coach-badge": {
    id: "inqa-coach-badge",
    filename: "Badges_Autorisierter_INQA-Coach_2025-2026.webp",
    path: "/images-optimized/Badges_Autorisierter_INQA-Coach_2025-2026.webp",
    alt: "Autorisierter INQA-Coach 2025-2026 Badge - Agil in die digitale Zukunft",
    width: 300,
    height: 400,
    format: "webp",
    category: "badge",
    tags: ["inqa", "coach", "zertifikat", "badge", "2025", "2026", "digital"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // KIVISAI Ökosystem
  "kivi-oekosystem": {
    id: "kivi-oekosystem",
    filename: "KIVI_oekosystem.png",
    path: "/images/KIVI_oekosystem.png",
    alt: "KIVISAI Ökosystem - Menschen, KI und Zusammenarbeit im Fokus",
    width: 600,
    height: 400,
    format: "png",
    category: "content",
    tags: ["kivisai", "ökosystem", "menschen", "ai", "team", "zusammenarbeit"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Fairness First Siegel
  "ff-siegel-fairness": {
    id: "ff-siegel-fairness",
    filename: "FF-Siegel_FF_convis_RGB.webp",
    path: "/images-optimized/FF-Siegel_FF_convis_RGB.webp",
    alt: "Fairness First Siegel - Transparent, kooperativ, wertschätzend",
    width: 250,
    height: 350,
    format: "webp",
    category: "badge",
    tags: ["fairness", "first", "siegel", "convis", "transparent", "kooperativ"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Unternehmen der Zukunft Siegel
  "ff-siegel-zukunft": {
    id: "ff-siegel-zukunft",
    filename: "FF-Siegel_UZ_convis_RGB.webp",
    path: "/images-optimized/FF-Siegel_UZ_convis_RGB.webp",
    alt: "Unternehmen der Zukunft Siegel - Proaktiv, engagiert, zukunftsfähig",
    width: 250,
    height: 350,
    format: "webp",
    category: "badge",
    tags: ["unternehmen", "zukunft", "siegel", "convis", "proaktiv", "engagiert"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // SGS Zertifizierung
  "ff-siegel-sgs": {
    id: "ff-siegel-sgs",
    filename: "FF-Siegel_SGS.webp",
    path: "/images-optimized/FF-Siegel_SGS.webp",
    alt: "SGS ISO 9001 System Certification und Swiss Accreditation Siegel",
    width: 400,
    height: 200,
    format: "webp",
    category: "badge",
    tags: ["sgs", "iso", "9001", "certification", "swiss", "accreditation"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // KIVI GROW Logo
  "kivi-grow": {
    id: "kivi-grow",
    filename: "KIVI_GROW.png",
    path: "/images/KIVI_GROW.png",
    alt: "KIVI GROW Logo - Wachstum und Entwicklung durch KI",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["kivi", "grow", "wachstum", "entwicklung", "spiral"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // KIVI ENABLE Logo
  "kivi-enable": {
    id: "kivi-enable",
    filename: "KIVI_ENABLE.png",
    path: "/images/KIVI_ENABLE.png",
    alt: "KIVI ENABLE Logo - Befähigung und Ermächtigung durch KI",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["kivi", "enable", "befähigung", "ermächtigung", "x-symbol"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Netzwerk & Content (Legacy)
  "kivisai-network-analyst": {
    id: "kivisai-network-analyst",
    filename: "KIVISAI-NETWORK_Data_analyst.png",
    path: "/images/KIVISAI-NETWORK_Data_analyst.png",
    alt: "KIVISAI Network Data Analyst - Datenanalyse-Expertise",
    format: "png",
    category: "content",
    tags: ["kivisai", "network", "data", "analyst"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Placeholder Images
  "placeholder-logo": {
    id: "placeholder-logo",
    filename: "placeholder-logo.png",
    path: "/public/placeholder-logo.png",
    alt: "Placeholder Logo",
    format: "png",
    category: "placeholder",
    tags: ["placeholder", "logo"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Partner & Netzwerk Logos
  "sqlxpert-logo": {
    id: "sqlxpert-logo",
    filename: "Logo_sqlxpert.png",
    path: "/images/Logo_sqlxpert.png",
    alt: "SQL XPERT Logo - Datenbankexpertise und SQL-Beratung",
    width: 200,
    height: 80,
    format: "png",
    category: "logo",
    tags: ["sqlxpert", "partner", "sql", "database"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "mobile-ad-media": {
    id: "mobile-ad-media",
    filename: "Logo_mobileatmedia.jpg",
    path: "/images/Logo_mobileatmedia.jpg",
    alt: "mobile-ad-media Logo - Mobile Marketing und Werbung",
    width: 200,
    height: 200,
    format: "jpg",
    category: "logo",
    tags: ["mobile", "ad", "media", "partner", "marketing"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "ai-training-institute": {
    id: "ai-training-institute",
    filename: "LOGO_AI_Training_Institut.jpg",
    path: "/images/LOGO_AI_Training_Institut.jpg",
    alt: "AI Training Institute Logo - We Apply AI",
    width: 400,
    height: 150,
    format: "jpg",
    category: "logo",
    tags: ["ai", "training", "institute", "partner", "education"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // KIVI Serie - Erweitert
  "kivi-reflect": {
    id: "kivi-reflect",
    filename: "KIVI_REFLECT.png",
    path: "/images/KIVI_REFLECT.png",
    alt: "KIVI REFLECT Logo - Reflexion und Selbstbetrachtung",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["kivi", "reflect", "reflexion", "selbstbetrachtung"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivi-share": {
    id: "kivi-share",
    filename: "KIVI_SHARE.png",
    path: "/images/KIVI_SHARE.png",
    alt: "KIVI SHARE Logo - Teilen und Austausch von Wissen",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["kivi", "share", "teilen", "austausch"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivi-think": {
    id: "kivi-think",
    filename: "KIVI_THINK.png",
    path: "/images/KIVI_THINK.png",
    alt: "KIVI THINK Logo - Denken und strategische Planung",
    width: 200,
    height: 200,
    format: "png",
    category: "logo",
    tags: ["kivi", "think", "denken", "strategie"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Updated content images
  "kivi-organisation": {
    id: "kivi-organisation",
    filename: "KIVI_Organisation.png",
    path: "/images/KIVI_Organisation.png",
    alt: "KIVI Organisation - Team vor Monitor mit KI-Gehirn und Wachstumskurve",
    width: 600,
    height: 400,
    format: "png",
    category: "content",
    tags: ["kivi", "organisation", "team", "ai", "growth", "monitor"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivi-menschen-assistent": {
    id: "kivi-menschen-assistent",
    filename: "KIVI_Menschen_Assistent_Flat.png",
    path: "/images/KIVI_Menschen_Assistent_Flat.png",
    alt: "KIVI Menschen Assistent - Frau arbeitet mit Generative AI Interface",
    width: 600,
    height: 400,
    format: "png",
    category: "content",
    tags: ["kivi", "menschen", "assistent", "generative", "ai", "tablet"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // Content & Illustrationen
  "kivi-selbstevaluation": {
    id: "kivi-selbstevaluation",
    filename: "KIVI_Selbsteval_jung_breit.png",
    path: "/images/KIVI_Selbsteval_jung_breit.png",
    alt: "KIVI Selbstevaluation - Junge Person bei der KI-Bewertung",
    width: 600,
    height: 400,
    format: "png",
    category: "content",
    tags: ["kivi", "selbstevaluation", "assessment", "jung", "laptop"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivi-begleitung": {
    id: "kivi-begleitung",
    filename: "KIVI-Begleitung.png",
    path: "/images/KIVI-Begleitung.png",
    alt: "KIVI Begleitung - Persönliche KI-Lernreise mit Begleitung",
    width: 600,
    height: 600,
    format: "png",
    category: "content",
    tags: ["kivi", "begleitung", "lernreise", "coaching", "ki"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "kivi-team-flat": {
    id: "kivi-team-flat",
    filename: "KIVI_Team_Flat.png",
    path: "/images/KIVI_Team_Flat.png",
    alt: "KIVI Team - Diverse Teamarbeit mit KI-Technologie und AI-Laptop",
    width: 800,
    height: 500,
    format: "png",
    category: "content",
    tags: ["kivi", "team", "zusammenarbeit", "diversität", "ai", "laptop", "collaboration"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // INQA Process Images
  "inqa-prozessschritte": {
    id: "inqa-prozessschritte",
    filename: "INQA-Prozessschritte.png",
    path: "/images/INQA-Prozessschritte.png",
    alt: "INQA-Coaching Arbeitsphasen: 3 strukturierte Phasen mit Planungssitzungen, Bewertungen und Fortschrittsberichten",
    width: 800,
    height: 400,
    format: "png",
    category: "content",
    tags: ["inqa", "coaching", "prozess", "phasen", "beratung"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  "inqa-berichte": {
    id: "inqa-berichte",
    filename: "Inqa-Berichte.png",
    path: "/images/Inqa-Berichte.png",
    alt: "INQA-Coaching Dokumentation: Kick-off, Fortschrittsberichte und Abschlussbericht",
    width: 800,
    height: 300,
    format: "png",
    category: "content",
    tags: ["inqa", "coaching", "dokumentation", "berichte", "kick-off"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },

  // EVALKIT Roles - NEW
  "kivi-roles-all": {
    id: "kivi-roles-all",
    filename: "KIVI_Roles_all.png",
    path: "/images/KIVI_Roles_all.png",
    alt: "EVALKIT Rollen-Übersicht: MENSCH, TEAM, ORGANISATION und ÖKOSYSTEM - Die vier Perspektiven der KI-Bewertung",
    width: 800,
    height: 500,
    format: "png",
    category: "content",
    tags: ["evalkit", "rollen", "mensch", "team", "organisation", "ökosystem", "bewertung"],
    lastModified: "2024-06-18",
    optimized: true,
    source: "local",
  },
}

// Image Manager Klasse
export class ImageManager {
  private static instance: ImageManager
  private registry: Record<string, ImageAsset>
  private sanityImages: SanityAsset[] = []
  private isInitialized = false
  private registryPath = './image-registry.json'

  // Sanity-Integration initialisieren - OPTIMIERT mit Caching
  private sanityInitPromise: Promise<void> | null = null;
  
  async initializeSanity(): Promise<void> {
    // Wenn bereits initialisiert, sofort zurückkehren
    if (this.isInitialized) return;
    
    // Wenn Initialisierung bereits läuft, auf diese warten
    if (this.sanityInitPromise) {
      await this.sanityInitPromise;
      return;
    }
    
    // Neue Initialisierung starten
    this.sanityInitPromise = this._initializeSanity();
    await this.sanityInitPromise;
  }
  
  private async _initializeSanity(): Promise<void> {
    try {
      // Sanity komplett deaktivieren wenn nicht benötigt
      if (process.env.DISABLE_SANITY === 'true') {
        this.isInitialized = true;
        return;
      }
      
      // Nur in Development oder wenn explizit benötigt
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        console.log('Initializing Sanity images...');
      }
      
      this.sanityImages = await getAllSanityImages();
      this.isInitialized = true;
      
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        console.log('Sanity images initialized successfully');
      }
    } catch (error) {
      console.error('Failed to initialize Sanity images:', error);
      // Bei Fehler trotzdem als initialisiert markieren, um endlose Versuche zu vermeiden
      this.isInitialized = true;
    } finally {
      this.sanityInitPromise = null;
    }
  }

  private constructor() {
    this.registry = IMAGE_REGISTRY
  }

  public static getInstance(): ImageManager {
    if (!ImageManager.instance) {
      ImageManager.instance = new ImageManager()
    }
    return ImageManager.instance
  }

  // Registry aus Datei laden
  private loadRegistry(): void {
    try {
      if (typeof window === 'undefined') {
        // Server-side: Versuche Registry aus Datei zu laden
        const registryPath = require('path').join(require('process').cwd(), 'image-registry.json')
        
        if (require('fs').existsSync(registryPath)) {
          const data = require('fs').readFileSync(registryPath, 'utf8')
          const loadedRegistry = JSON.parse(data)
          // Completely replace the registry with the file content
          this.registry = loadedRegistry
          console.log('Registry loaded from file:', Object.keys(loadedRegistry).length, 'images')
        }
      }
    } catch (error) {
      console.error('Error loading registry:', error)
    }
  }

  // Registry in Datei speichern
  private saveRegistry(): void {
    try {
      if (typeof window === 'undefined') {
        // Server-side: Speichere Registry in Datei
        const registryPath = require('path').join(require('process').cwd(), 'image-registry.json')
        
        require('fs').writeFileSync(registryPath, JSON.stringify(this.registry, null, 2))
        console.log('Registry saved to file:', Object.keys(this.registry).length, 'images')
      }
    } catch (error) {
      console.error('Error saving registry:', error)
    }
  }

  // Sanity-Bilder zu ImageAsset konvertieren
  private convertSanityToImageAsset(sanityAsset: SanityAsset): ImageAsset {
    const format = this.getFormatFromFilename(sanityAsset.originalFilename)
    const category = (sanityAsset.category as ImageAsset['category']) || 'content'
    
    return {
      id: `sanity-${sanityAsset._id}`,
      filename: sanityAsset.originalFilename,
      path: sanityAsset.url,
      alt: sanityAsset.altText || sanityAsset.title || sanityAsset.originalFilename,
      width: sanityAsset.metadata?.dimensions?.width,
      height: sanityAsset.metadata?.dimensions?.height,
      format,
      category,
      tags: sanityAsset.tags || [],
      lastModified: new Date().toISOString(),
      optimized: true,
      source: 'sanity',
      sanityId: sanityAsset._id
    }
  }

  private getFormatFromFilename(filename: string): ImageAsset['format'] {
    const ext = filename.split('.').pop()?.toLowerCase()
    switch (ext) {
      case 'png': return 'png'
      case 'jpg':
      case 'jpeg': return 'jpeg'
      case 'svg': return 'svg'
      case 'webp': return 'webp'
      default: return 'png'
    }
  }

  // Alle Bilder (lokal + Sanity) abrufen
  async getAllImages(): Promise<ImageAsset[]> {
    await this.initializeSanity()
    
    const localImages = Object.values(this.registry)
    const sanityImageAssets = this.sanityImages.map(img => this.convertSanityToImageAsset(img))
    
    return [...localImages, ...sanityImageAssets]
  }

  // Alle Bilder synchron abrufen (nur lokale)
  getAllLocalImages(): ImageAsset[] {
    this.loadRegistry()
    return Object.values(this.registry)
  }

  // Bild abrufen (lokal + Sanity)
  async getImage(id: string): Promise<ImageAsset | null> {
    // Zuerst lokale Bilder prüfen
    const localImage = this.registry[id]
    if (localImage) return localImage

    // Dann Sanity-Bilder prüfen
    await this.initializeSanity()
    const sanityImage = this.sanityImages.find(img => `sanity-${img._id}` === id)
    if (sanityImage) return this.convertSanityToImageAsset(sanityImage)

    return null
  }

  // Bilder nach Kategorie filtern (lokal + Sanity)
  async getImagesByCategory(category: ImageAsset["category"]): Promise<ImageAsset[]> {
    await this.initializeSanity()
    
    const localImages = Object.values(this.registry).filter((img) => img.category === category)
    const sanityImages = this.sanityImages
      .filter(img => img.category === category)
      .map(img => this.convertSanityToImageAsset(img))
    
    return [...localImages, ...sanityImages]
  }

  // Bilder nach Tags suchen (lokal + Sanity)
  async searchImagesByTag(tag: string): Promise<ImageAsset[]> {
    await this.initializeSanity()
    
    const localImages = Object.values(this.registry).filter((img) =>
      img.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
    )
    
    const sanityImages = this.sanityImages
      .filter(img => img.tags?.some(t => t.toLowerCase().includes(tag.toLowerCase())))
      .map(img => this.convertSanityToImageAsset(img))
    
    return [...localImages, ...sanityImages]
  }

  // Sanity-Bilder suchen
  async searchSanityImages(searchTerm: string): Promise<ImageAsset[]> {
    const sanityAssets = await searchSanityImages(searchTerm)
    return sanityAssets.map(img => this.convertSanityToImageAsset(img))
  }

  // Alle Logos abrufen (lokal + Sanity)
  async getLogos(): Promise<ImageAsset[]> {
    return this.getImagesByCategory("logo")
  }

  // Alle Badges abrufen (lokal + Sanity)
  async getBadges(): Promise<ImageAsset[]> {
    return this.getImagesByCategory("badge")
  }

  // Partner-Logos abrufen (lokal + Sanity)
  async getPartnerLogos(): Promise<ImageAsset[]> {
    return this.searchImagesByTag("partner")
  }

  // KIVI-Serie abrufen (lokal + Sanity)
  async getKiviSeries(): Promise<ImageAsset[]> {
    return this.searchImagesByTag("kivi")
  }

  // Zertifikate abrufen (lokal + Sanity)
  async getCertificates(): Promise<ImageAsset[]> {
    const siegelImages = await this.searchImagesByTag("siegel")
    const certificationImages = await this.searchImagesByTag("certification")
    return [...siegelImages, ...certificationImages]
  }

  // Bild-URL generieren
  async getImageUrl(id: string): Promise<string> {
    const image = await this.getImage(id)
    return image ? image.path : "/placeholder.svg?height=200&width=200"
  }

  // Responsive Bild-URLs generieren
  async getResponsiveImageUrls(id: string): Promise<{
    mobile: string
    tablet: string
    desktop: string
  }> {
    const image = await this.getImage(id)
    if (!image) {
      return {
        mobile: "/placeholder.svg?height=200&width=200",
        tablet: "/placeholder.svg?height=300&width=300",
        desktop: "/placeholder.svg?height=400&width=400",
      }
    }

    return {
      mobile: image.path,
      tablet: image.path,
      desktop: image.path,
    }
  }

  // Bild validieren
  async validateImage(id: string): Promise<boolean> {
    const image = await this.getImage(id)
    return image !== null && image.optimized
  }

  // Statistiken (lokal + Sanity)
  async getStats(): Promise<{
    total: number
    byCategory: Record<string, number>
    optimized: number
    unoptimized: number
    bySource: Record<string, number>
  }> {
    const allImages = await this.getAllImages()
    const byCategory: Record<string, number> = {}
    const bySource: Record<string, number> = { local: 0, sanity: 0 }

    allImages.forEach((img) => {
      byCategory[img.category] = (byCategory[img.category] || 0) + 1
      bySource[img.source] = (bySource[img.source] || 0) + 1
    })

    return {
      total: allImages.length,
      byCategory,
      optimized: allImages.filter((img) => img.optimized).length,
      unoptimized: allImages.filter((img) => !img.optimized).length,
      bySource
    }
  }

  // Sanity-Bild-Metadaten aktualisieren
  async updateSanityImageMetadata(
    sanityId: string,
    updates: {
      label?: string
      title?: string
      description?: string
      altText?: string
      tags?: string[]
      category?: string
    }
  ): Promise<boolean> {
    const success = await updateSanityImageMetadata(sanityId, updates)
    if (success) {
      // Cache aktualisieren
      await this.initializeSanity()
    }
    return success
  }

  // Sanity-Bild löschen
  async deleteSanityImage(sanityId: string): Promise<boolean> {
    const success = await deleteSanityImage(sanityId)
    if (success) {
      // Cache aktualisieren
      await this.initializeSanity()
    }
    return success
  }

  // Lokales Upload registrieren
  async registerLocalUpload(uploadData: {
    id: string
    originalName: string
    filename: string
    originalPath: string
    optimizedPath: string
    thumbnailPath: string
    mediumPath: string
    size: number
    width?: number
    height?: number
    format?: string
    uploadedAt: string
  }): Promise<ImageAsset> {
    console.log('Registering local upload:', uploadData.id, uploadData.originalName)
    
    const imageAsset: ImageAsset = {
      id: uploadData.id,
      filename: uploadData.originalName,
      path: uploadData.optimizedPath,
      alt: uploadData.originalName.replace(/\.[^/.]+$/, ""), // Dateiname ohne Extension als Alt-Text
      width: uploadData.width,
      height: uploadData.height,
      size: uploadData.size,
      format: (uploadData.format as ImageAsset['format']) || this.getFormatFromFilename(uploadData.originalName),
      category: "content", // Standard-Kategorie für Uploads
      tags: ["upload", "local", "optimized"],
      lastModified: uploadData.uploadedAt,
      optimized: true,
      source: "local"
    }

    // Zum Registry hinzufügen
    this.registry[uploadData.id] = imageAsset
    console.log('Image registered successfully. Registry now contains:', Object.keys(this.registry).length, 'images')

    // Registry persistent speichern
    this.saveRegistry()

    return imageAsset
  }

  // Sanity-Statistiken abrufen
  async getSanityStats(): Promise<{
    total: number
    byCategory: Record<string, number>
    byFormat: Record<string, number>
  }> {
    return await getSanityImageStats()
  }
}

// Helper Functions (Async-Versionen)
export async function getImage(id: string): Promise<ImageAsset | null> {
  return await ImageManager.getInstance().getImage(id)
}

export async function getImageUrl(id: string): Promise<string> {
  return await ImageManager.getInstance().getImageUrl(id)
}

export async function getKivisaiLogo(): Promise<string> {
  return await getImageUrl("kivisai-logo")
}

export async function getINQABadge(): Promise<string> {
  return await getImageUrl("inqa-coach-badge")
}

export async function getConvisLogo(): Promise<string> {
  return await getImageUrl("convis-logo-web")
}

export async function getAIExplorerClub(): Promise<string> {
  return await getImageUrl("ai-explorer-club")
}

export async function getKiviGrow(): Promise<string> {
  return await getImageUrl("kivi-grow")
}

export async function getKiviEnable(): Promise<string> {
  return await getImageUrl("kivi-enable")
}

export async function getAllBadges(): Promise<ImageAsset[]> {
  return await ImageManager.getInstance().getBadges()
}

export async function getAllCertificates(): Promise<ImageAsset[]> {
  return await ImageManager.getInstance().getCertificates()
}

export async function getPartnerLogos(): Promise<string> {
  return await getImageUrl("convis-logo-web")
}

export async function getKiviReflect(): Promise<string> {
  return await getImageUrl("kivi-reflect")
}

export async function getKiviShare(): Promise<string> {
  return await getImageUrl("kivi-share")
}

export async function getKiviThink(): Promise<string> {
  return await getImageUrl("kivi-think")
}

export async function getSQLXpertLogo(): Promise<string> {
  return await getImageUrl("sqlxpert-logo")
}

export async function getMobileAdMediaLogo(): Promise<string> {
  return await getImageUrl("mobile-ad-media")
}

export async function getAITrainingInstitute(): Promise<string> {
  return await getImageUrl("ai-training-institute")
}

export async function getKiviSelbstevaluation(): Promise<string> {
  return await getImageUrl("kivi-selbstevaluation")
}

export async function getKiviBegleitung(): Promise<string> {
  return await getImageUrl("kivi-begleitung")
}

export async function getKiviTeamFlat(): Promise<string> {
  return await getImageUrl("kivi-team-flat")
}

export async function getCompleteKiviSeries(): Promise<ImageAsset[]> {
  return await ImageManager.getInstance().getKiviSeries()
}

export async function getKivisaiLogoInvert(): Promise<string> {
  return await getImageUrl("kivisai-logo-invert")
}

export async function getKiviOrganisation(): Promise<string> {
  return await getImageUrl("kivi-organisation")
}

export async function getKiviMenschenAssistent(): Promise<string> {
  return await getImageUrl("kivi-menschen-assistent")
}

export async function getINQAProzessschritte(): Promise<string> {
  return await getImageUrl("inqa-prozessschritte")
}

export async function getINQABerichte(): Promise<string> {
  return await getImageUrl("inqa-berichte")
}

export async function getKiviRolesAll(): Promise<string> {
  return await getImageUrl("kivi-roles-all")
}

// Synchron-Versionen für Backward Compatibility (nur lokale Bilder)
export function getImageSync(id: string): ImageAsset | null {
  return ImageManager.getInstance().getAllLocalImages().find(img => img.id === id) || null
}

export function getImageUrlSync(id: string): string {
  const image = getImageSync(id)
  return image ? image.path : "/placeholder.svg?height=200&width=200"
}

export function getKivisaiLogoSync(): string {
  return getImageUrlSync("kivisai-logo")
}

export function getINQABadgeSync(): string {
  return getImageUrlSync("inqa-coach-badge")
}

export function getConvisLogoSync(): string {
  return getImageUrlSync("convis-logo-web")
}
