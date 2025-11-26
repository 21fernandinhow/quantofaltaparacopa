import Parser from "rss-parser";
import { NewsCard } from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { BackBtn } from "@/components/BackBtn";
import { Metadata } from "next";
import Script from "next/script";

interface Article {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
};

const getArticles = async (): Promise<Article[]> => {
    const parser = new Parser();
    const feed = await parser.parseURL("https://www.espn.com.br/espn/rss/copa-mundo.xml");

    const items = feed.items || [];

    return items
        .filter((item) => /copa|mundial|fifa|seleção|world cup/i.test(item.title || ""))
        .slice(0, 12)
        .map((item) => ({
            title: item.title || "",
            link: item.link || "#",
            pubDate: item.pubDate || "",
            contentSnippet: item.contentSnippet,
        }));
};

export const generateMetadata = async (): Promise<Metadata> => {
    const description = "Últimas notícias da Copa do Mundo 2026.";

    return {
        title: "Últimas notícias da Copa do Mundo 2026 | Quanto Falta Para a Copa",
        description,
        openGraph: {
            title: "Últimas notícias da Copa do Mundo 2026",
            description,
            url: "https://quantofaltaparacopa.com.br/news",
            type: "website",
            images: [
                {
                    url: "https://quantofaltaparacopa.com.br/trophy.webp",
                    width: 1200,
                    height: 630,
                    alt: "Notícias da Copa 2026",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Últimas notícias da Copa do Mundo 2026",
            description,
            images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
        },
        alternates: {
            canonical: "https://quantofaltaparacopa.com.br/news",
        },
    };
};

export const revalidate = 3600;

const NewsPage = async () => {
    const articles = await getArticles();

    return (
        <>
            <BackBtn />

            <main className="news-container">
                <h1 className="news-title">📰 Notícias da Copa 2026</h1>

                <div className="news-grid">
                    {articles && articles.length > 0 ?
                        articles.map((a, i) => (
                            <NewsCard
                                key={i}
                                title={a.title}
                                link={a.link}
                                pubDate={a.pubDate}
                                snippet={a.contentSnippet}
                            />
                        ))
                        : <h2>Não há noticias no momento</h2>
                    }
                </div>
            </main>

            <Footer />

            <Script
                id="ld-json-news"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://quantofaltaparacopa.com.br/news",
                        },
                        "headline": "Últimas notícias da Copa do Mundo 2026",
                        "description": articles.map(a => a.title).join(". "),
                        "publisher": {
                            "@type": "Organization",
                            "name": "Quanto Falta Para a Copa",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://quantofaltaparacopa.com.br/trophy.webp",
                            },
                        },
                        "datePublished": articles[0]?.pubDate || new Date().toISOString(),
                    }),
                }}
            />
        </>
    );
};

export default NewsPage;