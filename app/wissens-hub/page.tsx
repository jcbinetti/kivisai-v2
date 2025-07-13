import Link from "next/link";
import { Metadata } from "next";
import { getBlogPosts, getCategories, getAuthors, getEvents, urlFor, sanityClient } from "@/lib/sanity-client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CtaSection } from "@/components/common/cta-section";
import Breadcrumbs from "@/components/common/Breadcrumbs";

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 3600; // Alle 60 Minuten neu bauen

export const metadata: Metadata = {
    title: "Wissen-Hub | KIVISAI",
    description: "Entdecken Sie unser umfassendes Wissen zu KI, Strategie und Transformation - Artikel, Events und Experten.",
};

export default async function WissenHubPage() {
    // Optimierte Queries mit weniger Daten
    const [posts, categories, authors, events] = await Promise.all([
        getBlogPosts(6), // Nur 6 Posts für die Hauptseite
        getCategories(),
        getAuthors(),
        getEvents(4) // Nur 4 Events für die Hauptseite
    ]);

    // KIVI_USECASE Bild aus Sanity abrufen
    const useCaseImage = await sanityClient.fetch(`
        *[_type == "sanity.imageAsset" && originalFilename match "*KIVI*USECASE*"][0] {
            _id,
            url,
            metadata
        }
    `);

    return (
        <main className="min-h-screen bg-kivisai-pure-white">
            {/* Breadcrumbs */}
            <div className="absolute top-20 left-4 right-4 z-20">
                <Breadcrumbs items={["Home", "Wissens-Hub"]} />
            </div>
            
            {/* KIVISAI Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white relative overflow-hidden">
                {/* Hintergrundbild aus Sanity */}
                {useCaseImage && (
                    <div className="absolute inset-0 opacity-10">
                        <Image
                            src={useCaseImage.url}
                            alt="KIVI UseCase Hintergrund"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Wissens-Hub</h1>
                    <p className="text-xl mb-4 text-white/90 max-w-2xl mx-auto">
                        Ihr Einstiegspunkt zu Wissen, Tools und Inspiration für die KI-Transformation.
                    </p>
                    <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
                        Entdecken Sie unser umfassendes Wissen zu KI, Strategie und Transformation. Von Artikeln über Events bis hin zu Experten-Insights - alles was Sie für Ihre KI-Reise brauchen.
                    </p>
                </div>
            </section>



            <div className="container mx-auto px-4 py-16">
                {/* Aktuelle Artikel */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
                        Aktuelle Artikel
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(0, 6).map((post) => (
                            <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {post.mainImage && (
                                    <div className="aspect-video bg-gray-200">
                                        <img
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.mainImage.alt || post.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">
                                        <Link href={`/wissens-hub/blog/${post.slug.current}`} className="hover:text-kivisai-clear-turquoise">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-kivisai-moss-green mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-kivisai-moss-green">
                                        <span>{new Date(post.publishedAt).toLocaleDateString('de-DE')}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild className="bg-kivisai-clear-turquoise text-white hover:bg-kivisai-vibrant-turquoise">
                            <Link href="/wissens-hub/blog">
                                Alle Artikel anzeigen
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Kategorien */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
                        Nach Kategorien
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.slice(0, 8).map((category) => (
                            <Link
                                key={category._id}
                                href={`/wissens-hub/kategorien/${category.slug}`}
                                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
                            >
                                {category.icon && (
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <img
                                            src={urlFor(category.icon).url()}
                                            alt={category.icon.alt || category.title}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <h3 className="font-semibold text-lg mb-2 text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-kivisai-moss-green mt-1">
                                    Artikel
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Experten */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
                        Unsere Experten
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {authors.slice(0, 6).map((author) => (
                            <Link
                                key={author._id}
                                href={`/wissens-hub/autoren/${author.slug}`}
                                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center group"
                            >
                                {author.image && (
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                                        <img
                                            src={urlFor(author.image).url()}
                                            alt={author.image.alt || author.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <h3 className="font-semibold text-lg mb-2 text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise">
                                    {author.name}
                                </h3>
                                {author.title && (
                                    <p className="text-sm text-kivisai-moss-green mb-2">
                                        {author.title}
                                    </p>
                                )}
                                <p className="text-sm text-kivisai-moss-green mt-1">
                                    Experte
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white">
                            <Link href="/wissens-hub/autoren">
                                Alle Experten anzeigen
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Events */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-kivisai-deep-dark-blue">
                        Kommende Events
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.slice(0, 6).map((event) => (
                            <article key={event._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {event.image && (
                                    <div className="aspect-video bg-gray-200">
                                        <img
                                            src={urlFor(event.image).url()}
                                            alt={event.image.alt || event.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue">
                                        {event.title}
                                    </h3>
                                    <p className="text-kivisai-moss-green mb-4 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-kivisai-moss-green">
                                        <span>{new Date(event.startDate).toLocaleDateString('de-DE')}</span>
                                        {event.location?.online && (
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                                Online
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="outline" className="border-kivisai-clear-turquoise text-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise hover:text-white">
                            <Link href="/wissens-hub/events">
                                Alle Events anzeigen
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* CTA Section */}
                <CtaSection
                  variant="centered"
                  background="gradient"
                  size="lg"
                  title="Bleiben Sie auf dem Laufenden"
                  description="Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Artikel, Events und KI-Insights direkt in Ihr Postfach."
                  primaryCta={{
                    text: "Newsletter abonnieren",
                    href: "/kontakt/newsletter",
                    icon: "mail"
                  }}
                  secondaryCta={{
                    text: "Beratungstermin vereinbaren",
                    href: "/termin",
                    icon: "calendar"
                  }}
                />
            </div>
        </main>
    );
}
