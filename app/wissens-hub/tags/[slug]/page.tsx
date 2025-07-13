import { getBlogPosts, urlFor } from "@/lib/sanity-client";
import { notFound } from "next/navigation";
import Link from "next/link";

interface TagPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  
  // Einfache Tag-Filterung (falls Tags in Zukunft implementiert werden)
  const tagPosts = posts.filter(post => 
    post.title?.toLowerCase().includes(slug.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 text-center bg-gradient-to-r from-kivisai-clear-turquoise to-kivisai-deep-dark-blue text-white">
        <h1 className="text-4xl font-bold mb-2">Tag: {slug}</h1>
        <p className="max-w-xl mx-auto text-lg">Artikel mit dem Tag "{slug}"</p>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {tagPosts.length === 0 && (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-500 text-lg">Keine Artikel mit diesem Tag gefunden.</p>
              <Link href="/wissens-hub/blog" className="text-kivisai-clear-turquoise hover:underline mt-4 inline-block">
                Zurück zu allen Artikeln
              </Link>
            </div>
          )}
          {tagPosts.map(post => (
            <div key={post._id} className="border rounded-lg p-4 bg-white shadow">
              {post.mainImage && post.mainImage.asset && (
                <img src={urlFor(post.mainImage).width(400).url()} alt={post.title} className="mb-3 rounded" />
              )}
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/wissens-hub/blog/${post.slug.current}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <Link href={`/wissens-hub/blog/${post.slug.current}`} className="text-kivisai-clear-turquoise font-semibold">Zum Artikel →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 