import groups from '@/app/data/groups.json';
import { BackToCentral } from '@/components/BackToCentral';
import AdBanner from '@/components/AdBanner';
import { Metadata } from "next";
import Script from "next/script";

export const generateMetadata = (): Metadata => ({
    title: "Grupos da Copa do Mundo 2026 | Central da Copa",
    description:
        "Veja todos os 12 grupos oficiais da Copa do Mundo 2026, com as 48 seleções participantes, bandeiras e vagas que ainda serão definidas pelas repescagens.",
    openGraph: {
        title: "Grupos da Copa do Mundo 2026",
        description:
            "Confira todos os 12 grupos da Copa 2026, com as 48 seleções e detalhes das repescagens europeias e intercontinentais.",
        url: "https://quantofaltaparacopa.com.br/central-da-copa/grupos",
        type: "article",
        images: [
            {
                url: "https://quantofaltaparacopa.com.br/trophy.webp",
                width: 1200,
                height: 630,
                alt: "Grupos da Copa do Mundo 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Grupos da Copa do Mundo 2026",
        description:
            "Visualize os 12 grupos da Copa 2026, suas seleções e as vagas ainda em disputa nas repescagens.",
        images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
    },
    alternates: {
        canonical: "https://quantofaltaparacopa.com.br/central-da-copa/grupos",
    },
});

const GroupsPage = () => (
    <>
        <div className="container" id="groups-page">

            <div className="groups-page-header">
                <h1>Grupos da Copa do Mundo 2026</h1>
                <p>
                    Confira os 12 grupos oficiais da Copa do Mundo FIFA 2026, com todas as 48 seleções —
                    incluindo vagas que ainda serão definidas pelas repescagens.
                </p>
            </div>

            <div className="groups-list">
                {groups.groups.slice(0, Math.ceil(groups.groups.length / 2)).map((g) => (
                    <div key={g.name} className="card">
                        <h4 className="card-title">{g.name}</h4>
                        {g.teams.map((team, i) => (
                            <span key={i}>{team}</span>
                        ))}
                    </div>
                ))}
            </div>

            <AdBanner disabled />

            <div className="groups-list">
                {groups.groups.slice(Math.ceil(groups.groups.length / 2)).map((g) => (
                    <div key={g.name} className="card">
                        <h4 className="card-title">{g.name}</h4>
                        {g.teams.map((team, i) => (
                            <span key={i}>{team}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        <BackToCentral />

        <Script
            id="ld-json-groups"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: "Grupos da Copa do Mundo 2026",
                    description:
                        "Todos os 12 grupos da Copa do Mundo FIFA 2026, com bandeiras, seleções confirmadas e vagas de repescagem.",
                    mainEntityOfPage:
                        "https://quantofaltaparacopa.com.br/central-da-copa/grupos",
                    publisher: {
                        "@type": "Organization",
                        name: "Quanto Falta Para a Copa",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://quantofaltaparacopa.com.br/trophy.webp",
                        },
                    },
                }),
            }}
        />
    </>
);

export default GroupsPage;