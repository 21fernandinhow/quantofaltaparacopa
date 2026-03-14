import ShareBtn from "./ShareBtn";
import Image from "next/image";

interface CounterHeroProps {
    days: number | string
}

const CounterHero = ({ days }: CounterHeroProps) => {

    return (
        <main id="counter-hero">
            <ShareBtn days={days} />
            <div className="hero-container">
                <Image
                    className="trophy"
                    src="/trophy.webp"
                    alt="Troféu da Copa do Mundo 2026 - contagem regressiva"
                    width={240}
                    height={240}
                    priority
                />
                <h1>Faltam {days} dias para a Copa do Mundo 2026!</h1>
                <p>
                    Acompanhe a contagem regressiva para a Copa do Mundo 2026.
                    A Copa do Mundo começa em 11 de junho de 2026, e sediado nos EUA,
                    Canadá e México.
                </p>
            </div>
        </main>
    );
}

export default CounterHero