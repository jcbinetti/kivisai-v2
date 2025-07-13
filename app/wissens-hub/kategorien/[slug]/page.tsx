import { getCategories, getBlogPosts, urlFor } from "@/lib/sanity-client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = await getCategories();
  const posts = await getBlogPosts();
  const category = categories.find(cat => cat.slug === slug);
  if (!category) notFound();
  const categoryPosts = posts.filter(post => post.categories?.some(c => c.slug.current === slug));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section mit KIVISAI-Design */}
      <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          {category.icon && category.icon.asset && (
            <div className="mb-6">
              <img 
                src={urlFor(category.icon).url()} 
                alt={category.title} 
                className="mx-auto mb-4 w-16 h-16 object-contain" 
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title}</h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {category.description || `Entdecken Sie alle Artikel in der Kategorie ${category.title}`}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mt-4 mb-2">
        <Breadcrumbs items={["Home", "Wissens-Hub", "Kategorien", category.title]} />
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-kivisai-deep-dark-blue">
            Artikel in dieser Kategorie
          </h2>
          
          {categoryPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-kivisai-moss-green mb-4">Keine Artikel in dieser Kategorie gefunden.</p>
              <Link 
                href="/wissens-hub" 
                className="inline-flex items-center px-6 py-3 bg-kivisai-vibrant-turquoise text-white font-semibold rounded-lg hover:bg-kivisai-clear-turquoise transition-colors"
              >
                Zurück zum Wissens-Hub
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map(post => (
                <article key={post._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {post.mainImage && post.mainImage.asset && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-kivisai-deep-dark-blue">
                      <Link 
                        href={`/wissens-hub/blog/${post.slug.current}`}
                        className="hover:text-kivisai-clear-turquoise transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-kivisai-moss-green mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link 
                      href={`/wissens-hub/blog/${post.slug.current}`} 
                      className="inline-flex items-center text-kivisai-clear-turquoise font-semibold hover:text-kivisai-vibrant-turquoise transition-colors"
                    >
                      Zum Artikel 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 