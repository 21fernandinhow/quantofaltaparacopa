import CounterHero from "@/components/CounterHero";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

const getDaysToWorldCup = () => {
  const today = new Date();
  const target = new Date(2026, 5, 11);
  
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

export const generateMetadata = async (): Promise<Metadata> => {
  const daysToWorldCup = getDaysToWorldCup();

  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
    description: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026! Veja a contagem regressiva,
     saiba quantos dias restam para a próxima Copa e acompanhe todas as novidades do torneio.`,
    openGraph: {
      title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
      description: "Contagem regressiva para a Copa do Mundo de 2026.",
      url: "https://quantofaltaparacopa.com.br/",
      type: "website",
      images: [
        {
          url: "https://quantofaltaparacopa.com.br/trophy.webp",
          width: 1200,
          height: 630,
          alt: "Contagem regressiva Copa 2026",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
      description: "Contagem regressiva para a Copa do Mundo de 2026.",
      images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
    },
    alternates: {
      canonical: "https://quantofaltaparacopa.com.br/",
    },
  };
};

const Home = () => {
  const daysToWorldCup = getDaysToWorldCup();

  return (
    <>
      <CounterHero days={daysToWorldCup} />
      <Footer />

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Quanto Falta para a Copa",
            url: "https://quantofaltaparacopa.com.br/",
            description:
              "Contagem regressiva para a Copa do Mundo de 2026.",
            publisher: {
              "@type": "Organization",
              name: "Quanto Falta para a Copa",
            },
          }),
        }}
      />
    </>
  );
};

export default Home;