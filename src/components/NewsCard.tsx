interface NewsCardProps {
    title: string;
    link: string;
    pubDate?: string;
    snippet?: string;
};

export const NewsCard = ({ title, link, pubDate, snippet }: NewsCardProps) => {
    return (
        <article className="news-card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="news-card-title">
                {title}
            </a>

            {snippet && <p className="news-card-snippet">{snippet}</p>}

            {pubDate && (
                <div className="news-card-date">
                    {new Date(pubDate).toLocaleDateString("pt-BR")}
                </div>
            )}
        </article>
    );
}