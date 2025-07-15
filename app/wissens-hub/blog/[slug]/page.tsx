import { getBlogPostBySlug, getBlogPosts, urlFor } from "@/lib/sanity-client"
import { getImageUrl, getImageAlt } from "@/lib/image-utils"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortableText, PortableTextComponents } from '@portabletext/react'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 text-kivisai-moss-green leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 text-kivisai-deep-dark-blue">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mb-2 text-kivisai-deep-dark-blue">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-kivisai-clear-turquoise pl-4 italic text-kivisai-moss-green mb-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue"
      >
        {children}
      </a>
    ),
    internalLink: ({ value, children }) => {
      // Helper function to get the correct URL based on link type
      const getInternalUrl = (linkData: any) => {
        switch (linkData.linkType) {
          case 'services':
            return linkData.service?.slug?.current ? `/leistungen/${linkData.service.slug.current}` : '#'
          case 'blog':
            return linkData.blogPost?.slug?.current ? `/wissens-hub/blog/${linkData.blogPost.slug.current}` : '#'
          case 'usecases':
            return linkData.useCase?.slug?.current ? `/use-cases/${linkData.useCase.slug.current}` : '#'
          case 'about':
            return linkData.aboutPage || '#'
          case 'contact':
            return linkData.contactPage || '#'
          case 'knowledge':
            return linkData.knowledgePage || '#'
          default:
            return '#'
        }
      }

      const url = getInternalUrl(value)
      const linkText = value.customText || children || 'Internal Link'
      
      return (
        <a
          href={url}
          target={value.openInNewTab ? '_blank' : '_self'}
          rel={value.openInNewTab ? 'noopener noreferrer' : ''}
          className="text-kivisai-clear-turquoise underline hover:text-kivisai-deep-dark-blue font-medium"
        >
          {linkText}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <img
          src={getImageUrl(value)}
          alt={value.alt || ''}
          className="w-full h-auto rounded-lg shadow-md"
        />
        {value.caption && (
          <p className="text-sm text-kivisai-moss-green/70 mt-2 text-center italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    customButton: ({ value }) => {
      const buttonClasses = {
        primary: 'bg-kivisai-clear-turquoise text-white hover:bg-kivisai-vibrant-turquoise',
        secondary: 'bg-kivisai-deep-dark-blue text-white hover:bg-kivisai-deep-dark-blue/90',
        outline: 'border-2 border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white',
      }
      
      return (
        <div className="my-6 text-center">
          <a
            href={value.url}
            target={value.openInNewTab ? '_blank' : '_self'}
            rel={value.openInNewTab ? 'noopener noreferrer' : ''}
            className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${buttonClasses[value.style as keyof typeof buttonClasses] || buttonClasses.primary}`}
          >
            {value.text}
          </a>
        </div>
      )
    },
    callout: ({ value }) => {
      const calloutStyles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-orange-50 border-orange-200 text-orange-800',
        tip: 'bg-kivisai-light-cool-gray border-kivisai-clear-turquoise text-kivisai-deep-dark-blue',
      }
      
      return (
        <div className={`my-6 p-4 border-l-4 rounded-r-lg ${calloutStyles[value.type as keyof typeof calloutStyles] || calloutStyles.info}`}>
          {value.title && (
            <h4 className="font-semibold mb-2">{value.title}</h4>
          )}
          <div className="text-sm">
            <PortableText value={value.content} components={portableTextComponents} />
          </div>
        </div>
      )
    },
    customQuote: ({ value }) => {
      const quoteStyles = {
        standard: 'border-l-4 border-kivisai-clear-turquoise pl-4',
        large: 'text-xl border-l-4 border-kivisai-clear-turquoise pl-6',
        background: 'bg-kivisai-light-cool-gray p-6 rounded-lg border-l-4 border-kivisai-clear-turquoise',
      }
      
      return (
        <div className={`my-6 italic ${quoteStyles[value.style as keyof typeof quoteStyles] || quoteStyles.standard}`}>
          <blockquote className="text-kivisai-moss-green mb-2">
            "{value.quote}"
          </blockquote>
          {(value.author || value.source) && (
            <footer className="text-sm text-kivisai-moss-green/70">
              {value.author && <span className="font-semibold">— {value.author}</span>}
              {value.author && value.source && <span> • </span>}
              {value.source && <span>{value.source}</span>}
            </footer>
          )}
        </div>
      )
    },
    socialShare: ({ value }) => {
      const platformConfig = {
        linkedin: {
          name: 'LinkedIn',
          color: 'bg-gray-400 cursor-not-allowed',
          icon: '💼',
        },
        twitter: {
          name: 'Twitter/X',
          color: 'bg-gray-400 cursor-not-allowed',
          icon: '🐦',
        },
        facebook: {
          name: 'Facebook',
          color: 'bg-gray-400 cursor-not-allowed',
          icon: '📘',
        },
        instagram: {
          name: 'Instagram',
          color: 'bg-gray-400 cursor-not-allowed',
          icon: '📷',
        },
      }
      
      const config = platformConfig[value.platform as keyof typeof platformConfig]
      const shareText = value.customText || 'Check out this article!'
      const hashtags = value.hashtags?.join(',') || ''
      
      return (
        <div className="my-6 p-4 bg-gray-50 rounded-lg border">
          <h4 className="font-semibold text-kivisai-deep-dark-blue mb-3">
            Share on {config?.name} (Deaktiviert)
          </h4>
          <p className="text-sm text-kivisai-moss-green mb-3">
            {shareText}
            {hashtags && <span className="text-kivisai-clear-turquoise"> {hashtags}</span>}
          </p>
          <button
            className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${config?.color}`}
            disabled
            title="Social Share ist vorübergehend deaktiviert"
          >
            <span>{config?.icon}</span>
            Share on {config?.name} (Deaktiviert)
          </button>
        </div>
      )
    },
  },
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
      {article.body && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-kivisai-moss-green">
                <PortableText value={article.body} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
