import CounterHero from "@/components/CounterHero";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const getDaysToWorldCup = () => {
  return Math.ceil((new Date(Date.UTC(2026, 5, 11)).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}

export const generateMetadata = async (): Promise<Metadata> => {
  const daysToWorldCup = getDaysToWorldCup()

  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
    description: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026! Veja a contagem regressiva,
     saiba quantos dias restam para a próxima Copa e acompanhe todas as novidades do torneio.`,
    openGraph: {
      title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
      description: "Contagem regressiva para a Copa do Mundo de 2026.",
      url: "https://quantofaltaparacopa.com.br/",
      type: "website",
    },
  };
}

const Home = () => {
  const daysToWorldCup = getDaysToWorldCup()

  return (
    <>
      <CounterHero days={daysToWorldCup} />
      <Footer />
    </>
  );
}

export default Home
