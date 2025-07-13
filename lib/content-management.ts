export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image?: string
  readTime: number
  published: boolean
  tags: string[]
  seoTitle?: string
  seoDescription?: string
}

// Temporäre In-Memory-Speicherung - kann später durch echte Datenbank ersetzt werden
const articles: Article[] = [
  {
    id: "1",
    slug: "mensch-und-ki-warum-ki-einsatz-menschlich-sinn-ergibt",
    title: "Mensch und KI – Warum KI-Einsatz auch menschlich Sinn ergibt",
    excerpt:
      "Ein tiefer Einblick in die menschlichen Vorteile der KI-Integration und warum Technologie den Menschen stärken kann.",
    content: `
      <h2>Die menschliche Seite der KI</h2>
      <p>Künstliche Intelligenz wird oft als Bedrohung für menschliche Arbeitsplätze gesehen. Doch die Realität zeigt ein anderes Bild: KI kann den Menschen in seiner Arbeit unterstützen und neue Möglichkeiten schaffen.</p>
      
      <h3>Warum KI menschlich Sinn ergibt</h3>
      <ul>
        <li><strong>Entlastung von Routineaufgaben:</strong> KI übernimmt repetitive Tätigkeiten und schafft Raum für kreative und strategische Arbeit.</li>
        <li><strong>Bessere Entscheidungsgrundlagen:</strong> Datenbasierte Insights unterstützen menschliche Intuition und Erfahrung.</li>
        <li><strong>Personalisierte Lösungen:</strong> KI ermöglicht maßgeschneiderte Ansätze für individuelle Bedürfnisse.</li>
      </ul>
      
      <h3>Der KIVISAI-Ansatz</h3>
      <p>Bei KIVISAI stellen wir den Menschen in den Mittelpunkt der KI-Transformation. Unsere Methode berücksichtigt nicht nur technische Aspekte, sondern auch die menschlichen und organisatorischen Dimensionen des Wandels.</p>
      
      <blockquote>
        <p>"KI ist nicht dazu da, den Menschen zu ersetzen, sondern ihn zu befähigen, sein volles Potenzial zu entfalten."</p>
      </blockquote>
      
      <h3>Praktische Umsetzung</h3>
      <p>In unseren Projekten erleben wir täglich, wie KI-Tools Mitarbeiter entlasten und neue Möglichkeiten schaffen. Von intelligenten Assistenten bis hin zu automatisierten Workflows – die Technologie dient dem Menschen.</p>
    `,
    author: "KIVISAI Team",
    date: "15. Mai 2024",
    category: "KI & Mensch",
    image: "/images/KIVI_Menschen_Assistent_Flat.png",
    readTime: 5,
    published: true,
    tags: ["KI", "Mensch", "Transformation", "Zukunft"],
    seoTitle: "Mensch und KI: Warum KI-Einsatz menschlich Sinn ergibt",
    seoDescription:
      "Entdecken Sie, warum KI den Menschen stärkt statt ersetzt. Insights zur menschlichen Seite der KI-Transformation.",
  },
  {
    id: "2",
    slug: "ki-einsatz-kmu-geschaeftlicher-nutzen-zahlen",
    title: "KI-Einsatz in KMU: Geschäftlicher Nutzen in Zahlen",
    excerpt: "Aktuelle Statistiken und Kennzahlen zum Business Case von KI im Mittelstand.",
    content: `
      <h2>Der Business Case für KI in KMU</h2>
      <p>Kleine und mittlere Unternehmen stehen vor der Frage: Lohnt sich der Einsatz von KI? Die Zahlen sprechen eine klare Sprache.</p>
      
      <h3>Aktuelle Statistiken</h3>
      <ul>
        <li><strong>73% der KMU</strong> berichten von Effizienzsteigerungen durch KI-Einsatz</li>
        <li><strong>45% Kosteneinsparung</strong> bei Routineprozessen im ersten Jahr</li>
        <li><strong>2,3x höhere Produktivität</strong> in KI-unterstützten Bereichen</li>
        <li><strong>ROI von 300%</strong> innerhalb von 18 Monaten bei gezieltem KI-Einsatz</li>
      </ul>
      
      <h3>Konkrete Anwendungsbereiche</h3>
      <p>Die größten Erfolge erzielen KMU in folgenden Bereichen:</p>
      <ol>
        <li>Kundenservice und Support</li>
        <li>Marketing und Vertrieb</li>
        <li>Buchhaltung und Verwaltung</li>
        <li>Qualitätskontrolle</li>
      </ol>
      
      <h3>Investition vs. Nutzen</h3>
      <p>Die durchschnittliche Investition für KI-Projekte in KMU liegt bei 15.000-50.000 Euro. Der Nutzen übersteigt diese Kosten bereits im ersten Jahr um das 2-3fache.</p>
    `,
    author: "KIVISAI Team",
    date: "20. April 2024",
    category: "Business Case",
    image: "/images/KIVI_Organisation.png",
    readTime: 7,
    published: true,
    tags: ["KMU", "ROI", "Business Case", "Statistiken"],
    seoTitle: "KI-Einsatz in KMU: Geschäftlicher Nutzen in Zahlen",
    seoDescription: "Aktuelle Statistiken und ROI-Zahlen zum KI-Einsatz in kleinen und mittleren Unternehmen.",
  },
]

export async function getArticles(): Promise<Article[]> {
  return articles
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return articles.find((article) => article.slug === slug && article.published) || null
}

export async function createArticle(article: Omit<Article, "id">): Promise<Article> {
  const newArticle: Article = {
    ...article,
    id: Date.now().toString(),
  }
  articles.push(newArticle)
  return newArticle
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<Article | null> {
  const index = articles.findIndex((article) => article.id === id)
  if (index === -1) return null

  articles[index] = { ...articles[index], ...updates }
  return articles[index]
}

export async function deleteArticle(id: string): Promise<boolean> {
  const index = articles.findIndex((article) => article.id === id)
  if (index === -1) return false

  articles.splice(index, 1)
  return true
}

export async function getAllArticles(): Promise<Article[]> {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
