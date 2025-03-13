import { useMemo } from "react";
import ShareBtn from "./ShareBtn";
import { calcTimeToWorldCup } from "@/utils/calcTimeToWorldCup";

const CounterHero = () => {

    const daysToWorldCup = useMemo(() => calcTimeToWorldCup(), []);

    return (
        <div className="container">
            <ShareBtn days={daysToWorldCup} />
            <div className="main">
                <img
                    className="trophy"
                    src="https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-fifa-world-cup-trophy-clipart-illustration-png-image_6455581.png"
                    alt="trophy"
                />
                <h1>Faltam {daysToWorldCup} dias para a Copa!</h1>
                <p>
                    A próxima Copa do Mundo será disputada por 48 times e será sediada nos EUA, Canadá e
                    México, com início em 11 de junho de 2026.
                </p>
                <a
                    className="btn"
                    href="https://ge.globo.com/futebol/futebol-internacional/noticia/2023/03/14/copa-do-mundo-de-2026-tera-quatro-grupos-com-12-times-cada-e-atingira-total-de-104-jogos.ghtml"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Saiba Mais
                </a>
            </div>
        </div>
    );
}

export default CounterHero