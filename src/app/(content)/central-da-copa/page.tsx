import NewsSection from "@/components/NewsSection";
import WorldCupGuideMenu from "@/components/WorldCupGuideMenu";
import { Metadata } from "next";
import Script from "next/script";

export const generateMetadata = (): Metadata => ({
    title: "Central da Copa 2026 | Guia Completo, Notícias e Curiosidades",
    description:
        "Tudo sobre a Copa do Mundo 2026 em um só lugar: formato, grupos, curiosidades, notícias atualizadas e guias detalhados para acompanhar o Mundial.",
    openGraph: {
        title: "Central da Copa 2026 | Notícias, Grupos e Formato",
        description:
            "Acompanhe tudo sobre a Copa de 2026: formato oficial, grupos, regras, novidades e curiosidades do maior Mundial da história.",
        url: "https://quantofaltaparacopa.com.br/central-da-copa",
        type: "article",
        images: [
            {
                url: "https://quantofaltaparacopa.com.br/trophy.webp",
                width: 1200,
                height: 630,
                alt: "Central da Copa 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Central da Copa 2026 | Notícias, Formato e Curiosidades",
        description:
            "Tudo o que você precisa saber sobre a Copa do Mundo 2026: notícias, curiosidades, grupos e o novo formato do torneio.",
        images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
    },
    alternates: {
        canonical: "https://quantofaltaparacopa.com.br/central-da-copa",
    },
});

const WorldCupCentral = () => (
    <>
        <section className="container" id="welcome-section">
            <h2>Central da Copa</h2>
            <p>Tudo o que você precisa saber sobre a Copa do Mundo 2026.</p>
            <hr className="animated-gradient-line" />
        </section>

        <NewsSection />
        
        <WorldCupGuideMenu />

        <Script
            id="ld-json-central"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Central da Copa 2026",
                    url: "https://quantofaltaparacopa.com.br/central-da-copa",
                    description:
                        "Página central com notícias, formato, grupos e conteúdos sobre a Copa do Mundo 2026.",
                    mainEntity: {
                        "@type": "ItemList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Notícias da Copa 2026",
                                url: "https://quantofaltaparacopa.com.br/noticias",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Formato da Copa 2026",
                                url: "https://quantofaltaparacopa.com.br/central-da-copa/formato",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "Grupos da Copa 2026",
                                url: "https://quantofaltaparacopa.com.br/central-da-copa/grupos",
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                name: "Curiosidades da Copa 2026",
                                url: "https://quantofaltaparacopa.com.br/central-da-copa/curiosidades",
                            },
                        ],
                    },
                }),
            }}
        />
    </>
);

export default WorldCupCentral;