import Link from "next/link";
import ShareBtn from "./ShareBtn";
import Image from "next/image";

interface CounterHeroProps {
    days: number | string
}

const CounterHero = ({ days }: CounterHeroProps) => {

    return (
        <div id="counter-hero">
            <ShareBtn days={days} />
            <div className="main">
                <Image
                    className="trophy"
                    src="/trophy.webp"
                    alt="Trophy"
                    width={240}
                    height={240}
                    priority
                />
                <h1>Faltam {days} dias para a próxima Copa do Mundo!</h1>
                <p>
                    A próxima Copa do Mundo será disputada por 48 times e será sediada nos EUA, Canadá e
                    México, com início em 11 de junho de 2026.
                </p>
                <Link href={"/news"} className="btn">Saiba mais</Link>
            </div>
        </div>
    );
}

export default CounterHero