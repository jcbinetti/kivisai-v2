import Link from "next/link";
import { Metadata } from "next";
import { getEvents, getCategories } from "@/lib/sanity-client";
import { getImageUrl, getImageAlt } from "@/lib/image-utils";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/common/Breadcrumbs";

// Statische Generierung für bessere Performance
export const dynamic = "force-static";
export const revalidate = 1800; // Alle 30 Minuten neu bauen

export const metadata: Metadata = {
    title: "Events | Wissen-Hub | KIVISAI",
    description: "Entdecken Sie unsere kommenden Events, Webinare und Workshops zu KI, Strategie und Transformation.",
};

export default async function EventsPage({ 
    searchParams 
}: { 
    searchParams: { page?: string } 
}) {
    const { page = "1" } = searchParams;
    const currentPage = parseInt(page) || 1;
    
    const eventsData = await getEvents(8);

    return (
        <main className="min-h-screen bg-white">
            {/* KIVISAI Hero Section */}
            <section className="py-20 bg-gradient-to-r from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Webinare</h1>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Entdecken Sie unsere kommenden Events, Webinare und Workshops zu KI und Transformation.
                    </p>
                </div>
            </section>
            
            {/* Breadcrumb unter Hero */}
            <div className="container mx-auto px-4 mt-4 mb-2">
                <Breadcrumbs items={["Home", "Wissens-Hub", "Events"]} />
            </div>
            
            {/* Events Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
                                Kommende Events
                            </h2>
                            <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">
                                Nehmen Sie an unseren Events teil und erweitern Sie Ihr Wissen zu KI und Transformation.
                            </p>
                        </div>

                        {eventsData.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {eventsData.map((event: any) => (
                                        <Link
                                            key={event._id}
                                            href={`/wissens-hub/events/${event.slug.current}`}
                                            className="group"
                                        >
                                            <article className="bg-white border border-kivisai-light-cool-gray rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                                {event.image && (
                                                    <div className="aspect-video overflow-hidden">
                                                        <img
                                                            src={event.image && event.image.asset ? getImageUrl(event.image) : '/placeholder.svg'}
                                                            alt={event.image?.alt || event.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-6">
                                                    <div className="flex items-center text-sm text-kivisai-moss-green mb-2">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>{new Date(event.startDate).toLocaleDateString('de-DE')}</span>
                                                    </div>
                                                    <h3 className="text-xl font-semibold mb-2 text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise transition-colors">
                                                        {event.title}
                                                    </h3>
                                                    {event.description && (
                                                        <p className="text-kivisai-moss-green mb-3 line-clamp-2">
                                                            {event.description}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center justify-between">
                                                        {event.location && (
                                                            <div className="flex items-center text-sm text-kivisai-moss-green">
                                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                <span>{event.location.name || event.location.city || 'Online'}</span>
                                                            </div>
                                                        )}
                                                        {event.price && (
                                                            <div className="text-sm font-medium text-kivisai-clear-turquoise">
                                                                {event.price.free ? 'Kostenlos' : `${event.price.amount} ${event.price.currency}`}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>


                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="max-w-md mx-auto">
                                    <div className="w-16 h-16 bg-kivisai-light-cool-gray rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-kivisai-moss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
                                        Keine Events geplant
                                    </h3>
                                    <p className="text-kivisai-moss-green mb-6">
                                        Schauen Sie später wieder vorbei oder abonnieren Sie unseren Newsletter für Updates.
                                    </p>
                                    <Link
                                        href="/kontakt/newsletter"
                                        className="inline-flex items-center px-6 py-3 bg-kivisai-clear-turquoise text-white rounded-lg hover:bg-kivisai-vibrant-turquoise transition-colors"
                                    >
                                        Newsletter abonnieren
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
} 