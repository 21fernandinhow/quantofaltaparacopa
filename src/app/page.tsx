import CounterHero from "@/components/CounterHero";
import Footer from "@/components/Footer";
import { getDaysToWorldCup } from "@/utils/getDaysToWorldCup";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  const daysToWorldCup = getDaysToWorldCup();

  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026 - Contagem Regressiva`,
    description: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026! Veja a contagem regressiva atualizada 
      em tempo real, saiba quantos dias restam para a próxima Copa do Mundo e acompanhe todas as novidades do 
      torneio.`,
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Quanto Falta para a Copa",
      url: "https://quantofaltaparacopa.com.br/",
      description: "Contagem regressiva atualizada para a Copa do Mundo 2026.",
      publisher: {
        "@type": "Organization",
        name: "Quanto Falta para a Copa",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: "Copa do Mundo FIFA 2026",
      startDate: "2026-06-11",
      eventStatus: "https://schema.org/EventScheduled",
      location: [
        {
          "@type": "Place",
          name: "Estados Unidos",
        },
        {
          "@type": "Place",
          name: "Canadá",
        },
        {
          "@type": "Place",
          name: "México",
        },
      ],
      organizer: {
        "@type": "Organization",
        name: "FIFA",
      },
    },
  ];

  return (
    <>
      <CounterHero days={daysToWorldCup} />
      <Footer alternative />

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default Home;
