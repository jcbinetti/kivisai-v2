import Link from "next/link";
import { Metadata } from "next";
import { getBlogPostsWithPagination, getCategories, BlogPost } from "@/lib/sanity-client";
import { getImageUrl, getImageAlt } from "@/lib/image-utils";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { PortableText } from '@portabletext/react'

const myComponents = {
  block: {
    normal: ({ children }: { children: any }) => <p>{children}</p>,
    h2: ({ children }: { children: any }) => <h2>{children}</h2>,
    h3: ({ children }: { children: any }) => <h3>{children}</h3>,
    blockquote: ({ children }: { children: any }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: { children: any }) => <ul>{children}</ul>,
    number: ({ children }: { children: any }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: any }) => <li>{children}</li>,
    number: ({ children }: { children: any }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children: any }) => <strong>{children}</strong>,
    em: ({ children }: { children: any }) => <em>{children}</em>,
  },
}

// Type für Kategorien
interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  icon?: {
    asset: any;
    alt?: string;
  };
  color?: string;
}

// Temporarily disable static generation for debugging
// export const dynamic = "force-static";
// export const revalidate = 1800; // Alle 30 Minuten neu bauen

export const metadata: Metadata = {
    title: "Blog | Wissen-Hub | KIVISAI",
    description: "Entdecken Sie unsere neuesten Artikel zu KI, Strategie und Transformation. Praktische Insights und Expertenwissen für Ihre KI-Reise.",
};

export default async function BlogPage({ 
    searchParams 
}: { 
    searchParams: Promise<{ 
        category?: string;
        page?: string;
    }> 
}) {
    // Fix für Next.js 15: searchParams als Promise behandeln
    let params;
    try {
        params = await searchParams;
    } catch (error) {
        console.error('Error awaiting searchParams:', error);
        params = {};
    }
    
    const category = params?.category;
    const page = params?.page || "1";
    const currentPage = parseInt(page) || 1;
    
    // Additional debugging
    console.log('Raw searchParams:', searchParams);
    console.log('Resolved params:', params);
    console.log('Category from params:', category);
    console.log('All params keys:', Object.keys(params || {}));
    console.log('Category value:', category);
    console.log('Category type:', typeof category);
    
    console.log('Blog page params:', { 
        category, 
        page: currentPage, 
        params, 
        searchParamsType: typeof searchParams,
        searchParamsKeys: Object.keys(params || {}),
        hasCategory: 'category' in (params || {}),
        rawSearchParams: searchParams,
        categoryValue: category,
        categoryType: typeof category,
        url: typeof window !== 'undefined' ? window.location.href : 'server-side'
    }) // Debug log
    
    const [postsData, categories] = await Promise.all([
        getBlogPostsWithPagination(currentPage, 12, category),
        getCategories()
    ]);
    
    console.log('Blog page data:', { 
        postsCount: postsData.posts.length, 
        categoriesCount: categories.length,
        pagination: postsData.pagination 
    }) // Debug log

    return (
        <>
            {/* Breadcrumbs */}
            <div className="absolute top-20 left-4 right-4 z-20">
                <Breadcrumbs items={["Home", "Wissens-Hub", "Blog"]} />
            </div>
            
            <section className="relative pt-40 pb-20 bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Wissens-Hub Blog</h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">Entdecken Sie aktuelle Beiträge, Insights und Praxiswissen rund um KI und Digitalisierung.</p>
                  <Link
                    href="#beitraege"
                    className="inline-block bg-kivisai-clear-turquoise text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kivisai-clear-turquoise/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    Alle Beiträge ansehen
                  </Link>
                </div>
              </div>
            </section>
            

            
            <main className="bg-kivisai-pure-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Category Filter */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6 text-center">
                                Nach Kategorien filtern
                            </h2>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link
                                    href="/wissens-hub/blog"
                                    className={`px-4 py-2 rounded-full transition-colors ${
                                        !category
                                            ? 'bg-kivisai-clear-turquoise text-white'
                                            : 'bg-kivisai-light-cool-gray text-kivisai-moss-green hover:bg-kivisai-clear-turquoise hover:text-white'
                                    }`}
                                >
                                    Alle Artikel
                                </Link>
                                {categories && categories.length > 0 ? (
                                    categories.map((categoryObj: Category) => (
                                        <Link
                                            key={categoryObj._id}
                                            href={`/wissens-hub/blog?category=${categoryObj.slug}`}
                                            className={`px-4 py-2 rounded-full transition-colors ${
                                                category === categoryObj.slug
                                                    ? 'bg-kivisai-clear-turquoise text-white'
                                                    : 'bg-kivisai-light-cool-gray text-kivisai-moss-green hover:bg-kivisai-clear-turquoise hover:text-white'
                                            }`}
                                        >
                                            {categoryObj.title}
                                        </Link>
                                    ))
                                ) : (
                                    <div className="text-kivisai-moss-green">Keine Kategorien verfügbar</div>
                                )}
                            </div>
                        </div>

                        {/* Blog Posts */}
                        {postsData.posts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {postsData.posts.map((post: BlogPost) => (
                                        <Link
                                            key={post._id}
                                            href={`/wissens-hub/blog/${post.slug?.current || 'no-slug'}`}
                                            className="group"
                                        >
                                            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-kivisai-light-cool-gray">
                                                {post.mainImage && post.mainImage.asset && (
                                                    <div className="aspect-video overflow-hidden">
                                                        <img
                                                            src={getImageUrl(post.mainImage)}
                                                            alt={getImageAlt(post.mainImage, post.title)}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-6">
                                                    <div className="flex items-center text-sm text-kivisai-moss-green mb-2">
                                                        <span>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
                                                        {post.readTime && (
                                                            <>
                                                                <span className="mx-2">•</span>
                                                                <span>{post.readTime}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-3 text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise transition-colors">
                                                        {post.title}
                                                    </h3>
                                                    {post.excerpt && (
                                                        <p className="text-kivisai-moss-green leading-relaxed line-clamp-3">
                                                            {post.excerpt}
                                                        </p>
                                                    )}
                                                    {post.categories && post.categories.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-4">
                                                            {post.categories.slice(0, 2).map((cat: { title: string; slug: { current: string } }) => (
                                                                <span
                                                                    key={cat.slug?.current || cat.title}
                                                                    className="text-xs bg-kivisai-light-cool-gray text-kivisai-moss-green px-2 py-1 rounded-full"
                                                                >
                                                                    {cat.title}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {postsData.pagination.totalPages > 1 && (
                                    <div className="mt-12 flex justify-center">
                                        <div className="flex items-center gap-2">
                                            {postsData.pagination.hasPrevPage && (
                                                <Link
                                                    href={`/wissens-hub/blog?${category ? `category=${category}&` : ''}page=${postsData.pagination.currentPage - 1}`}
                                                    className="px-4 py-2 bg-kivisai-light-cool-gray text-kivisai-moss-green rounded-lg hover:bg-kivisai-clear-turquoise hover:text-white transition-colors"
                                                >
                                                    Zurück
                                                </Link>
                                            )}
                                            
                                            <span className="px-4 py-2 text-kivisai-moss-green">
                                                Seite {postsData.pagination.currentPage} von {postsData.pagination.totalPages}
                                            </span>
                                            
                                            {postsData.pagination.hasNextPage && (
                                                <Link
                                                    href={`/wissens-hub/blog?${category ? `category=${category}&` : ''}page=${postsData.pagination.currentPage + 1}`}
                                                    className="px-4 py-2 bg-kivisai-light-cool-gray text-kivisai-moss-green rounded-lg hover:bg-kivisai-clear-turquoise hover:text-white transition-colors"
                                                >
                                                    Weiter
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="max-w-md mx-auto">
                                    <div className="w-16 h-16 bg-kivisai-light-cool-gray rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-kivisai-moss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
                                        Keine Artikel gefunden
                                    </h3>
                                    <p className="text-kivisai-moss-green mb-6">
                                        {category 
                                            ? `Keine Artikel in der Kategorie "${categories?.find(c => c.slug === category)?.title || category}" gefunden.`
                                            : 'Noch keine Artikel verfügbar.'
                                        }
                                    </p>
                                    {category && (
                                        <Link
                                            href="/wissens-hub/blog"
                                            className="inline-flex items-center px-6 py-3 bg-kivisai-clear-turquoise text-white rounded-lg hover:bg-kivisai-vibrant-turquoise transition-colors"
                                        >
                                            Alle Artikel anzeigen
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
} 