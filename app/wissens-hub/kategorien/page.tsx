import { HeroSection as Hero } from "@/components/common/hero-section";
import { CtaSection as CTA } from "@/components/common/cta-section";
import Link from "next/link";
import { Metadata } from "next";
import { getCategories, urlFor } from "@/lib/sanity-client";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kategorien | Wissen-Hub | KIVISAI",
    description: "Artikel nach Themen und Kategorien durchsuchen - von KI-Strategie bis KI-Entwicklung.",
};

export default async function CategoriesPage() {
    const categories = await getCategories();

    // Fallback colors for categories without custom colors
    const getCategoryColor = (color?: string) => {
        if (color) return color;
        return 'bg-kivisai-clear-turquoise'; // Default KIVISAI color
    };

    return (
        <>
            <Hero
                title="Kategorien"
                description="Entdecken Sie Artikel nach Themen und Kategorien - von strategischen Überlegungen bis zu praktischen Anwendungen."
                background="gradient"
                variant="centered"
            />
            <main className="bg-kivisai-pure-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">
                                Durchsuchen Sie nach Themen
                            </h2>
                            <p className="text-lg text-kivisai-moss-green max-w-2xl mx-auto">
                                Finden Sie genau die Inhalte, die Sie interessieren. 
                                Von grundlegenden Konzepten bis zu praktischen Anwendungen.
                            </p>
                        </div>

                        {categories.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categories.map((category) => (
                                    <Link
                                        key={category.slug}
                                        href={`/wissens-hub/kategorien/${category.slug}`}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-kivisai-light-cool-gray p-6">
                                            <div className="text-center">
                                                {category.icon && category.icon.asset ? (
                                                    <div className="mb-4">
                                                        <img
                                                            src={urlFor(category.icon).url()}
                                                            alt={`${category.title} Icon`}
                                                            className="mx-auto rounded-lg shadow-sm"
                                                            style={{ width: 64, height: 64, objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="mb-4">
                                                        <div className="w-16 h-16 bg-kivisai-light-cool-gray rounded-lg flex items-center justify-center mx-auto">
                                                            <svg className="w-8 h-8 text-kivisai-moss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue group-hover:text-kivisai-clear-turquoise transition-colors">
                                                        {category.title}
                                                    </h3>
                                                    <span className="text-sm text-kivisai-moss-green bg-kivisai-light-cool-gray px-2 py-1 rounded-full">
                                                        {category.count} Artikel
                                                    </span>
                                                </div>
                                                <p className="text-kivisai-moss-green leading-relaxed">
                                                    {category.description || `Artikel zu ${category.title.toLowerCase()}`}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="max-w-md mx-auto">
                                    <div className="w-16 h-16 bg-kivisai-light-cool-gray rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-kivisai-moss-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-kivisai-deep-dark-blue mb-2">
                                        Noch keine Kategorien vorhanden
                                    </h3>
                                    <p className="text-kivisai-moss-green mb-6">
                                        Erstellen Sie Ihre ersten Kategorien im Sanity Studio.
                                    </p>
                                    <a
                                        href="https://kpbuonm3.sanity.studio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-kivisai-clear-turquoise text-white rounded-lg hover:bg-kivisai-vibrant-turquoise transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Erste Kategorie erstellen
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Popular Tags */}
                        <div className="mt-16 bg-kivisai-light-cool-gray rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-6 text-center">
                                Beliebte Tags
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {[
                                    "ChatGPT", "Machine Learning", "Deep Learning", "Neural Networks",
                                    "Data Science", "Automation", "Digital Transformation", "AI Ethics",
                                    "Natural Language Processing", "Computer Vision", "Robotics", "IoT"
                                ].map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/wissens-hub/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="px-4 py-2 bg-white text-kivisai-moss-green rounded-full hover:bg-kivisai-clear-turquoise hover:text-white transition-colors border border-kivisai-light-cool-gray"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <CTA
                title="Suchen Sie etwas Spezifisches?"
                description="Nutzen Sie unsere Suchfunktion, um schnell die gewünschten Artikel zu finden."
                primaryCta={{
                    text: "Zur Artikelsuche",
                    href: "/wissens-hub/blog",
                    icon: "arrow"
                }}
            />
        </>
    );
} 