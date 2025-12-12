import groups from '@/app/data/groups.json';
import { BackToCentral } from '@/components/BackToCentral';
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
                {groups.groups.map((g) => (
                    <div key={g.name} className="card">
                        <h4 className="card-title">{g.name}</h4>
                        {g.teams.map((team, i) => (
                            <span key={i}>{team}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="playoffs-info">
                <h2>Repescagens da Copa do Mundo 2026</h2>
                <p>
                    As últimas vagas da Copa serão definidas em março de 2026, nas repescagens da UEFA e
                    nos playoffs intercontinentais. Veja abaixo quem disputa cada chave.
                </p>

                <h3>Playoffs da UEFA — 4 vagas</h3>
                <p>As 16 seleções estão divididas em quatro caminhos. Cada caminho classifica 1 seleção.</p>
                <ul>
                    <li><strong>Path A:</strong> Itália 🇮🇹, Irlanda do Norte 🇬🇧, País de Gales 🏴, Bósnia e Herzegovina 🇧🇦</li>
                    <li><strong>Path B:</strong> Ucrânia 🇺🇦, Suécia 🇸🇪, Polônia 🇵🇱, Albânia 🇦🇱</li>
                    <li><strong>Path C:</strong> Turquia 🇹🇷, Romênia 🇷🇴, Eslováquia 🇸🇰, Kosovo 🇽🇰</li>
                    <li><strong>Path D:</strong> Dinamarca 🇩🇰, Macedônia do Norte 🇲🇰, República Tcheca 🇨🇿, Irlanda 🇮🇪</li>
                </ul>

                <h3>Playoffs Intercontinentais — 2 vagas</h3>
                <p>Seis seleções disputam duas vagas finais para completar as 48 seleções da Copa.</p>
                <ul>
                    <li><strong>Bracket 1:</strong> República Democrática do Congo 🇨🇩, Nova Caledônia 🇳🇨, Jamaica 🇯🇲</li>
                    <li><strong>Bracket 2:</strong> Bolívia 🇧🇴, Suriname 🇸🇷, Iraque 🇮🇶</li>
                </ul>

                <p>
                    <i>Os vencedores dos playoffs completam o quadro final da Copa do Mundo 2026.</i>
                </p>
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
                    },
                }),
            }}
        />
    </>
);

export default GroupsPage;