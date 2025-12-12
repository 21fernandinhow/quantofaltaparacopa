import { BackToCentral } from "@/components/BackToCentral";
import { Metadata } from "next";
import Script from "next/script";

export const generateMetadata = (): Metadata => ({
    title: "Formato da Copa do Mundo 2026 | Central da Copa",
    description:
        "Veja como funciona o novo formato da Copa do Mundo 2026: 48 seleções, 12 grupos, playoffs de 32 e todas as mudanças em relação às edições anteriores.",
    openGraph: {
        title: "Formato da Copa do Mundo 2026",
        description:
            "Entenda o novo formato da Copa 2026: mais seleções, mais jogos e a nova etapa de playoffs antes das oitavas.",
        url: "https://quantofaltaparacopa.com.br/central-da-copa/formato",
        type: "article",
        images: [
            {
                url: "https://quantofaltaparacopa.com.br/trophy.webp",
                width: 1200,
                height: 630,
                alt: "Copa do Mundo 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Formato da Copa do Mundo 2026",
        description:
            "Entenda todas as mudanças do formato da Copa 2026: 48 seleções, 12 grupos e playoffs de 32.",
        images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
    },
    alternates: {
        canonical: "https://quantofaltaparacopa.com.br/central-da-copa/formato",
    },
});

const WorldCupFormat = () => (
    <>
        <article className="container">
            <h1>Formato da Copa do Mundo 2026</h1>

            <p>
                A Copa do Mundo FIFA 2026 inaugura o maior formato da história do
                torneio, passando de 32 para <strong>48 seleções</strong> e aumentando o
                número total de partidas de <strong>64 para 104 jogos</strong>. O novo
                modelo altera diretamente a fase de grupos, critérios de classificação
                e toda a estrutura do mata-mata.
            </p>

            <h2>Estrutura Geral</h2>
            <ul>
                <li>48 seleções</li>
                <li>12 grupos com 4 seleções cada</li>
                <li>Avançam: 24 primeiros e segundos lugares + 8 melhores terceiros</li>
                <li>Total de classificados ao mata-mata: 32 seleções</li>
            </ul>

            <h2>Fase de Grupos</h2>
            <p>
                Após reconsiderar grupos de 3 seleções, a FIFA manteve{" "}
                <strong>grupos de 4</strong> para preservar competitividade e evitar
                combinações favorecidas. Cada seleção joga 3 partidas.
            </p>

            <ul>
                <li>24 líderes e vice-líderes avançam</li>
                <li>Os 8 melhores terceiros completam o playoff de 32</li>
                <li>
                    Apenas 16 seleções são eliminadas na fase de grupos, tornando o
                    torneio mais aberto
                </li>
            </ul>

            <h2>Playoffs de 32 Seleções</h2>
            <p>
                Antes das oitavas, agora existe uma etapa inédita: o{" "}
                <strong>“Round of 32 Playoffs”</strong>. São partidas únicas de
                eliminação direta entre 32 seleções.
            </p>

            <h3>O que muda na prática</h3>
            <ul>
                <li>Seleções medianas têm mais chance de avançar</li>
                <li>Líderes de grupo ganham vantagens maiores no chaveamento</li>
                <li>Finalistas disputam <strong>8 partidas</strong> no total</li>
            </ul>

            <h2>Mata-mata Tradicional</h2>
            <p>
                A partir daí, o formato segue o modelo clássico: oitavas, quartas,
                semifinais, disputa de terceiro lugar e final — todas em jogo único.
            </p>

            <h2>Cidades-sede e logística</h2>
            <p>
                Como o torneio será disputado em <strong>três países</strong> (EUA,
                México e Canadá), a FIFA organizou a fase de grupos em clusters
                regionais, reduzindo deslocamentos longos.
            </p>

            <p>
                No mata-mata, os deslocamentos aumentam conforme as seleções avançam.
            </p>

            <h2>Principais mudanças</h2>
            <ul>
                <li>Expansão para 48 seleções</li>
                <li>12 grupos ao invés de 8</li>
                <li>Classificação ampliada para terceiros colocados</li>
                <li>Novo playoff antes das oitavas</li>
                <li>
                    Finalistas jogam <strong>8 partidas</strong>
                </li>
                <li>Torneio maior e geograficamente mais distribuído</li>
            </ul>

            <h2>Resumo rápido</h2>
            <ul>
                <li>48 seleções</li>
                <li>12 grupos</li>
                <li>Avançam: 24 + 8 melhores terceiros</li>
                <li>Novo playoff de 32</li>
                <li>Finalistas jogam 8 partidas</li>
            </ul>
        </article>

        <BackToCentral />

        <Script
            id="ld-json-format"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: "Formato da Copa do Mundo 2026",
                    description:
                        "Saiba como funciona o novo formato da Copa 2026: 48 seleções, playoffs de 32, mais jogos e mudanças estruturais.",
                    mainEntityOfPage:
                        "https://quantofaltaparacopa.com.br/central-da-copa/formato",
                    publisher: {
                        "@type": "Organization",
                        name: "Quanto Falta Para a Copa",
                    },
                }),
            }}
        />
    </>
);

export default WorldCupFormat;