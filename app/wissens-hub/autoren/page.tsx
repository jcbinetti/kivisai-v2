import { Metadata } from "next";
import { getAuthors, urlFor } from "@/lib/sanity-client";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
    title: "Autoren | Wissen-Hub | KIVISAI",
    description: "Entdecken Sie unsere Experten und Autoren - Artikel nach Autoren und Experten filtern.",
};

export default async function AutorenPage() {
    const authors = await getAuthors();
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Experten & Fachleute</h1>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Unsere Autoren sind erfahrene Praktiker und Theoretiker, 
                        die ihr Wissen und ihre Erfahrungen mit Ihnen teilen.
                    </p>
                </div>
            </section>

            {/* Breadcrumb unter Hero */}
            <div className="container mx-auto px-4 mt-4 mb-2">
                <Breadcrumbs items={["Home", "Wissens-Hub", "Autoren"]} />
            </div>

            {/* Autoren Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {authors.map(author => (
                                <div key={author._id} className="bg-white border rounded-lg p-6 shadow text-center hover:shadow-lg transition-shadow">
                                    {author.image && author.image.asset ? (
                                        <img 
                                            src={urlFor(author.image).url()} 
                                            alt={author.name} 
                                            className="mx-auto mb-4 rounded-full border-2 border-kivisai-clear-turquoise" 
                                            style={{width: 120, height: 120, objectFit: 'cover'}}
                                        />
                                    ) : (
                                        <div className="mx-auto mb-4 w-30 h-30 rounded-full border-2 border-kivisai-clear-turquoise bg-kivisai-light-cool-gray flex items-center justify-center">
                                            <svg className="w-12 h-12 text-kivisai-moss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    )}
                                    <h2 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">{author.name}</h2>
                                    {author.title && <div className="text-sm text-kivisai-moss-green mb-2 font-medium">{author.title}</div>}
                                    {author.expertise && author.expertise.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                                            {author.expertise.slice(0, 3).map((exp, index) => (
                                                <span key={index} className="text-xs bg-kivisai-light-cool-gray text-kivisai-moss-green px-2 py-1 rounded-full">
                                                    {exp}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex justify-center gap-3 mb-3">
                                        {author.linkedin && <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-kivisai-moss-green hover:text-kivisai-clear-turquoise transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>}
                                        {author.twitter && <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="text-kivisai-moss-green hover:text-kivisai-clear-turquoise transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                        </a>}
                                        {author.xing && <a href={author.xing} target="_blank" rel="noopener noreferrer" className="text-kivisai-moss-green hover:text-kivisai-clear-turquoise transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.188 0c-.517 0-.93.414-.93.93 0 .517.413.93.93.93.516 0 .93-.413.93-.93 0-.516-.414-.93-.93-.93zm-.54 3.093c-.347 0-.572.16-.686.338L13.538 8.45c.317-.562.646-1.442.646-2.23 0-.484-.16-.877-.425-1.18-.282-.324-.65-.49-1.077-.49-.52 0-.927.234-1.23.703-.295.46-.443 1.11-.443 1.95 0 .86.148 1.52.443 1.98.303.47.71.704 1.23.704.427 0 .795-.166 1.077-.49.265-.303.425-.696.425-1.18 0-.788-.33-1.668-.646-2.23l3.92 4.12c.114.178.34.338.687.338.26 0 .468-.107.624-.32.156-.213.234-.49.234-.83 0-.338-.078-.615-.234-.828-.156-.213-.364-.32-.624-.32zm-2.254 3.093c-.347 0-.572.16-.686.338L9.538 13.45c.317-.562.646-1.442.646-2.23 0-.484-.16-.877-.425-1.18-.282-.324-.65-.49-1.077-.49-.52 0-.927.234-1.23.703-.295.46-.443 1.11-.443 1.95 0 .86.148 1.52.443 1.98.303.47.71.704 1.23.704.427 0 .795-.166 1.077-.49.265-.303.425-.696.425-1.18 0-.788-.33-1.668-.646-2.23l3.92 4.12c.114.178.34.338.687.338.26 0 .468-.107.624-.32.156-.213.234-.49.234-.83 0-.338-.078-.615-.234-.828-.156-.213-.364-.32-.624-.32z"/>
                                            </svg>
                                        </a>}
                                    </div>
                                    {author.bio && author.bio[0] && author.bio[0].children && (
                                        <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                                            {author.bio[0].children[0]?.text || 'Keine Biografie verfügbar'}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 