import Link from "next/link";

const WorldCupFormat = () => (
    <>
        <article className="container">
            <h1>Formato da Copa do Mundo 2026</h1>

            <p>
                A Copa do Mundo FIFA 2026 inaugura o maior formato da história do
                torneio, passando de 32 para <strong>48 seleções</strong> e aumentando o
                número total de partidas de 64 para <strong>104 jogos</strong>. O novo
                modelo altera diretamente a fase de grupos, os critérios de
                classificação e a estrutura do mata-mata.
            </p>

            <h2>Estrutura Geral</h2>
            <ul>
                <li>48 seleções</li>
                <li>12 grupos com 4 seleções cada</li>
                <li>2 melhores de cada grupo + 8 melhores terceiros colocados</li>
                <li>Total de classificados para o mata-mata: 32 seleções</li>
            </ul>

            <h2>Fase de Grupos (12 grupos de 4)</h2>
            <p>
                A FIFA inicialmente cogitou grupos de 3 equipes, mas voltou atrás por
                preocupação com manipulação de resultados e perda de competitividade. O
                modelo final mantém <strong>grupos de 4</strong>, iguais ao formato
                clássico, porém com volume muito maior.
            </p>

            <p>
                Cada seleção joga 3 partidas. Avançam aos playoffs:
            </p>

            <ul>
                <li>os 24 primeiros e segundos colocados</li>
                <li>os 8 melhores terceiros (critérios: pontos, saldo, gols, fair play)</li>
            </ul>

            <p>
                Isso cria uma fase de grupos com alto volume de jogos simultâneos e
                maior probabilidade de seleções avançarem com pontuações baixas,
                especialmente porque apenas 16 das 48 seleções serão eliminadas nesta fase.
            </p>

            <h2>Playoffs de 32 (Novo)</h2>
            <p>
                O mata-mata começa mais cedo. Antes das oitavas, existe agora um estágio
                adicional chamado oficialmente de{" "}
                <strong>“Round of 32 Playoffs”</strong>, equivalente a uma “fase
                intermediária”.
            </p>

            <p>Participam 32 seleções em partidas únicas de eliminação direta.</p>

            <h3>Impacto prático desse novo playoff</h3>
            <ul>
                <li>
                    Seleções que ficariam eliminadas na fase de grupos de 32 times agora
                    têm mais chance de avançar.
                </li>
                <li>
                    Quem termina em 1º do grupo tende a pegar adversários mais frágeis,
                    vantagem ainda maior do que no formato antigo.
                </li>
                <li>
                    Aumento de risco físico: seleções que chegam até a final jogam{" "}
                    <strong>8 partidas</strong> (antes eram 7).
                </li>
            </ul>

            <h2>Oitavas, Quartas, Semis e Final</h2>
            <p>
                A partir dos playoffs de 32, segue o mata-mata tradicional: oitavas,
                quartas, semifinais, disputa de 3º lugar e final. Todos os jogos são
                disputados em partida única.
            </p>

            <h2>Cidades-sede e logística</h2>
            <p>
                Como a Copa será disputada em <strong>três países</strong> (EUA, México
                e Canadá), o formato foi ajustado para reduzir deslocamentos longos. A
                fase de grupos é organizada por clusters regionais, garantindo que cada
                seleção permaneça em uma mesma região durante os três jogos iniciais.
            </p>

            <p>
                O mata-mata, porém, exige deslocamentos maiores à medida que as equipes
                avançam.
            </p>

            <h2>Principais diferenças em relação às Copas anteriores</h2>
            <ul>
                <li>Mais seleções (48 → maior diversidade e mais jogos)</li>
                <li>12 grupos em vez de 8</li>
                <li>Classificação ampliada para terceiros colocados</li>
                <li>Novo playoff antes das oitavas</li>
                <li>Finalistas jogam 8 partidas (antes eram 7)</li>
                <li>Torneio mais longo e mais distribuído geograficamente</li>
            </ul>

            <h2>Resumo rápido</h2>
            <ul>
                <li>48 seleções</li>
                <li>12 grupos</li>
                <li>Avançam: 24 + 8 melhores terceiros</li>
                <li>Novo playoff de 32</li>
                <li>Finalistas jogam 8 partidas</li>
            </ul>

            <p>
                O formato da Copa 2026 aumenta o alcance global do torneio e cria uma
                competição mais longa, com mais jogos e mais seleções. Para torcedores e
                criadores de conteúdo, o novo modelo multiplica o volume de histórias,
                estatísticas e curiosidades.
            </p>
        </article>
        <div className="container">
            <Link href={"/central-da-copa"} className="btn">Voltar a Central</Link>
        </div>
    </>
);


export default WorldCupFormat