import groups from '@/app/data/groups.json';
import { BackToCentral } from '@/components/BackToCentral';
import Head from 'next/head';

const GroupsPage = () => (
    <>
        <Head>
            <title>Grupos da Copa do Mundo 2026</title>
            <meta
                name="description"
                content="Veja todos os 12 grupos da Copa do Mundo FIFA 2026, com bandeiras, nomes em português e as vagas de repescagem."
            />
        </Head>

        <div className="container" id='groups-page'>

            <div className="groups-page-header">
                <h1>Grupos da Copa do Mundo 2026</h1>
                <p>
                    Confira abaixo os 12 grupos oficiais do torneio, com todas as 48 seleções — incluindo vagas
                    que ainda serão definidas pelas repescagens.
                </p>
            </div>

            <div className="groups-list">
                {groups.groups.map((g) => (
                    <div key={g.name} className='card'>
                        <h4 className='card-title'>{g.name}</h4>
                        {g.teams.map((team, i) => (
                            <span key={i}>{team}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="playoffs-info">
                <h2>Repescagens da Copa do Mundo 2026</h2>
                <p>
                    As últimas vagas da Copa serão definidas em março de 2026, nas repescagens
                    da UEFA e nos playoffs intercontinentais. Veja abaixo quem está disputando
                    cada chave.
                </p>

                <h3>Playoffs da UEFA — 4 vagas</h3>
                <p>As 16 seleções estão divididas em quatro caminhos. Cada caminho dá 1 vaga.</p>
                <ul>
                    <li>
                        <strong>Path A:</strong> Itália 🇮🇹, Irlanda do Norte 🇬🇧, País de Gales 🏴, Bósnia e Herzegovina 🇧🇦
                    </li>
                    <li>
                        <strong>Path B:</strong> Ucrânia 🇺🇦, Suécia 🇸🇪, Polônia 🇵🇱, Albânia 🇦🇱
                    </li>
                    <li>
                        <strong>Path C:</strong> Turquia 🇹🇷, Romênia 🇷🇴, Eslováquia 🇸🇰, Kosovo 🇽🇰
                    </li>
                    <li>
                        <strong>Path D:</strong> Dinamarca 🇩🇰, Macedônia do Norte 🇲🇰, República Tcheca 🇨🇿, Irlanda 🇮🇪
                    </li>
                </ul>

                <h3>Playoffs Intercontinentais — 2 vagas</h3>
                <p>Seis seleções disputam duas vagas finais.</p>
                <ul>
                    <li>
                        <strong>Bracket 1:</strong> República Democrática do Congo 🇨🇩, Nova Caledônia 🇳🇨, Jamaica 🇯🇲
                    </li>
                    <li>
                        <strong>Bracket 2:</strong> Bolívia 🇧🇴, Suriname 🇸🇷, Iraque 🇮🇶
                    </li>
                </ul>

                <p>
                    <i>Os vencedores completam as 48 seleções da Copa do Mundo 2026.</i>
                </p>
            </div>

        </div>

        <BackToCentral />
    </>
);

export default GroupsPage;