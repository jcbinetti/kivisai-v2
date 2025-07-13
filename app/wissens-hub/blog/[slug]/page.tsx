import { getBlogPostBySlug, getBlogPosts, urlFor } from "@/lib/sanity-client"
import { getImageUrl, getImageAlt } from "@/lib/image-utils"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

// Helper function to convert Portable Text to HTML
function portableTextToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return ''
  
  return blocks.map(block => {
    if (block._type === 'block') {
      const style = block.style || 'normal'
      const children = block.children?.map((child: any) => {
        let text = child.text || ''
        
        // Handle marks (bold, italic, underline, links)
        if (child.marks && Array.isArray(child.marks)) {
          child.marks.forEach((mark: string) => {
            switch (mark) {
              case 'strong':
                text = `<strong>${text}</strong>`
                break
              case 'em':
                text = `<em>${text}</em>`
                break
              case 'underline':
                text = `<u>${text}</u>`
                break
              case 'link':
                // Handle links - we need to find the link reference
                const linkMark = child.markDefs?.find((def: any) => def._key === mark)
                if (linkMark && linkMark.href) {
                  text = `<a href="${linkMark.href}" target="_blank" rel="noopener noreferrer" class="text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue underline">${text}</a>`
                }
                break
            }
          })
        }
        
        return text
      }).join('') || ''
      
      switch (style) {
        case 'h1': return `<h1 class="text-3xl font-bold mb-4 text-kivisai-deep-dark-blue">${children}</h1>`
        case 'h2': return `<h2 class="text-2xl font-bold mb-3 text-kivisai-deep-dark-blue">${children}</h2>`
        case 'h3': return `<h3 class="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">${children}</h3>`
        case 'h4': return `<h4 class="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue">${children}</h4>`
        case 'blockquote': return `<blockquote class="border-l-4 border-kivisai-clear-turquoise pl-4 italic text-kivisai-moss-green mb-4">${children}</blockquote>`
        default: return `<p class="mb-4 text-kivisai-moss-green leading-relaxed">${children}</p>`
      }
    }
    
    // Handle lists
    if (block._type === 'list') {
      const listType = block.listItem === 'bullet' ? 'ul' : 'ol'
      const items = block.children?.map((item: any) => {
        const itemText = item.children?.map((child: any) => {
          let text = child.text || ''
          if (child.marks && Array.isArray(child.marks)) {
            child.marks.forEach((mark: string) => {
              switch (mark) {
                case 'strong': text = `<strong>${text}</strong>`; break
                case 'em': text = `<em>${text}</em>`; break
                case 'underline': text = `<u>${text}</u>`; break;
              }
            })
          }
          return text
        }).join('') || ''
        return `<li class="mb-2 text-kivisai-moss-green">${itemText}</li>`
      }).join('') || ''
      return `<${listType} class="mb-4 ml-6 text-kivisai-moss-green">${items}</${listType}>`
    }
    
    return ''
  }).join('')
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts
    .filter(post => post.slug?.current) // Only include posts with valid slugs
    .map((post) => ({
      slug: post.slug.current,
    }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getBlogPostBySlug(slug)

  if (!article) {
    notFound()
  }

  // Convert Portable Text to HTML
  const contentHtml = article.body ? portableTextToHtml(article.body) : ''

  return (
    <div className="min-h-screen bg-kivisai-pure-white pt-20">
      {/* Article Header */}
      <section className="py-12 bg-kivisai-light-cool-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              {article.categories && article.categories.length > 0 && (
                <span className="text-xs bg-kivisai-clear-turquoise text-white px-2 py-1 rounded">
                  {article.categories[0].title}
                </span>
              )}
              <span className="text-kivisai-moss-green/80 text-sm">
                {new Date(article.publishedAt).toLocaleDateString('de-DE')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-kivisai-deep-dark-blue">{article.title}</h1>
            {article.excerpt && (
              <p className="text-xl text-kivisai-moss-green mb-6">{article.excerpt}</p>
            )}
            <div className="flex items-center gap-4">
              <span className="text-kivisai-moss-green">Von {article.author?.name || 'KIVISAI'}</span>
              <span className="text-kivisai-moss-green/60">•</span>
              <span className="text-kivisai-moss-green">{article.readTime || '5'} Min. Lesezeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zurück-Link unter dem Hero-Bereich */}
      <div className="container mx-auto px-4 mt-4 mb-2">
        <Link
          href="/wissens-hub/blog"
          className="inline-flex items-center gap-2 text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>
      </div>

      {/* Article Image */}
      {article.mainImage && article.mainImage.asset && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={getImageUrl(article.mainImage)}
                alt={getImageAlt(article.mainImage, article.title)}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      {contentHtml && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none text-kivisai-moss-green"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
        </section>
      )}


    </div>
  )
}
