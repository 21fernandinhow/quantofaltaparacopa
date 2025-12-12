interface NewsCardProps {
    title: string;
    link: string;
    pubDate?: string;
    snippet?: string;
};

export const NewsCard = ({ title, link, pubDate, snippet }: NewsCardProps) => {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-title">
                {title}
            </a>

            {snippet && snippet != 'null' && <p className="card-snippet">{snippet}</p>}

            {pubDate && (
                <div className="card-date">
                    {new Date(pubDate).toLocaleDateString("pt-BR")}
                </div>
            )}
        </div>
    );
}