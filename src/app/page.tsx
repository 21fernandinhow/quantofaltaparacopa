import CounterHero from "@/components/CounterHero";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const getDaysToWorldCup = () => {
  return Math.ceil((new Date(2026, 5, 11).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}

export const generateMetadata = async (): Promise<Metadata> => {
  const daysToWorldCup = getDaysToWorldCup()

  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
    description: `Acompanhe a contagem regressiva para a Copa do Mundo 2026! Descubra exatamente quantos dias 
    faltam para o maior torneio de futebol do planeta e fique por dentro das novidades. 
    Não perca nenhum detalhe da preparação para esse grande evento!`,
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
