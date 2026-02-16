import curiosities from "@/app/data/curiosities.json";
import { BackToCentral } from "@/components/BackToCentral";
import RelatedCuriosities from "@/components/RelatedCuriosities";
import { Metadata } from "next";
import Script from "next/script";

interface CuriosityPageProps {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
    return curiosities.curiosities.map((c) => ({
        slug: c.slug,
    }));
};

export const generateMetadata = async (
    props: CuriosityPageProps
): Promise<Metadata> => {
    const { slug } = await props.params;

    const curiosity = curiosities.curiosities.find((c) => c.slug === slug);

    if (!curiosity) {
        return {
            title: "Curiosidade não encontrada | Central da Copa",
            description: "A curiosidade acessada não existe.",
        };
    }

    const description =
        curiosity.content[0]?.substring(0, 160) ||
        "Curiosidade sobre a Copa do Mundo 2026.";

    return {
        title: `${curiosity.title} | Curiosidades da Copa 2026`,
        description,
        openGraph: {
            title: curiosity.title,
            description,
            url: `https://quantofaltaparacopa.com.br/central-da-copa/curiosidades/${slug}`,
            type: "article",
            images: [
                {
                    url: "https://quantofaltaparacopa.com.br/trophy.webp",
                    width: 1200,
                    height: 630,
                    alt: curiosity.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: curiosity.title,
            description,
            images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
        },
        alternates: {
            canonical: `https://quantofaltaparacopa.com.br/central-da-copa/curiosidades/${slug}`,
        },
    };
};

export default async function CuriosityPage({ params }: CuriosityPageProps) {
    const { slug } = await params;

    const curiosity = curiosities.curiosities.find((item) => item.slug === slug);

    if (!curiosity) {
        return (
            <div className="container">
                <h1>Curiosidade não encontrada</h1>
                <p>A curiosidade que você tentou acessar não existe.</p>
                <BackToCentral />
            </div>
        );
    }

    return (
        <>
            <article className="container">
                <h1>{curiosity.title}</h1>

                {curiosity.content.map((paragraph: string, i: number) => (
                    <p key={i}>{paragraph}</p>
                ))}

                <BackToCentral />

                <RelatedCuriosities currentSlug={slug} />
            </article>

            <Script
                id="ld-json-curiosity"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                headline: curiosity.title,
                                description:
                                    curiosity.content[0] ||
                                    "Curiosidade sobre a Copa do Mundo 2026.",
                                image: "https://quantofaltaparacopa.com.br/trophy.webp",
                                author: {
                                    "@type": "Organization",
                                    name: "Quanto Falta Para a Copa",
                                },
                                publisher: {
                                    "@type": "Organization",
                                    name: "Quanto Falta Para a Copa",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: "https://quantofaltaparacopa.com.br/trophy.webp",
                                    },
                                },
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": `https://quantofaltaparacopa.com.br/central-da-copa/curiosidades/${slug}`,
                                },
                                datePublished: "2024-01-01",
                                dateModified: new Date().toISOString(),
                                wordCount: curiosity.content.join(" ").split(" ").length,
                            },
                            {
                                "@type": "FAQPage",
                                mainEntity: [
                                    {
                                        "@type": "Question",
                                        name: curiosity.title,
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: curiosity.content[0],
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        name: "Onde aconteceu esse fato na história da Copa?",
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: curiosity.content.join(" "),
                                        },
                                    },
                                ],
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}