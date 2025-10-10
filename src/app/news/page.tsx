import Parser from "rss-parser";
import { NewsCard } from "@/components/NewsCard";
import Footer from "@/components/Footer";
import "./index.css";
import { BackBtn } from "@/components/BackBtn";

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
        .map((item) => ({
            title: item.title || "",
            link: item.link || "#",
            pubDate: item.pubDate || "",
            contentSnippet: item.contentSnippet,
        }));
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
                    {articles.map((a, i) => (
                        <NewsCard
                            key={i}
                            title={a.title}
                            link={a.link}
                            pubDate={a.pubDate}
                            snippet={a.contentSnippet}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default NewsPage