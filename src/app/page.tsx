import CounterHero from "@/components/CounterHero";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LearnMoreSection from "@/components/LearnMoreSection";
import NewsSection from "@/components/NewsSection";
import WorldCupGuideMenu from "@/components/WorldCupGuideMenu";
import { getDaysToWorldCup } from "@/utils/getDaysToWorldCup";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  const daysToWorldCup = getDaysToWorldCup();
  const description =
    daysToWorldCup > 0
      ? `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026. Contagem regressiva, formato, grupos e curiosidades do Mundial em um só lugar.`
      : "Copa do Mundo 2026: contagem regressiva, formato, grupos e curiosidades do Mundial em um só lugar.";

  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026 - Contagem Regressiva`,
    description,
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

const FAQ_ITEMS = [
  {
    question: "Quando será a Copa do Mundo 2026?",
    answer:
      "A Copa do Mundo FIFA 2026 começa em 11 de junho de 2026 e será disputada nos Estados Unidos, Canadá e México.",
  },
  {
    question: "Quantas seleções participam da Copa 2026?",
    answer:
      "A Copa de 2026 terá 48 seleções, divididas em 12 grupos de 4. Serão 104 jogos no total.",
  },
  {
    question: "Onde será a Copa do Mundo 2026?",
    answer:
      "A Copa 2026 será sediada em três países: Estados Unidos, Canadá e México, com 16 cidades-sede no total.",
  },
  {
    question: "Qual o formato da Copa do Mundo 2026?",
    answer:
      "O formato inclui 12 grupos, os 24 primeiros e segundos colocados mais 8 melhores terceiros avançam, depois um playoff de 32 e em seguida o mata-mata tradicional.",
  },
  {
    question: "O que é o site Quanto Falta pra Copa?",
    answer:
      "É um site com contagem regressiva para a Copa 2026, além de informações sobre formato, grupos, curiosidades e notícias do Mundial.",
  },
];

const Home = () => {
  const daysToWorldCup = getDaysToWorldCup();
  const organization = {
    "@type": "Organization" as const,
    name: "Quanto Falta para a Copa",
    url: "https://quantofaltaparacopa.com.br",
    logo: {
      "@type": "ImageObject" as const,
      url: "https://quantofaltaparacopa.com.br/trophy.webp",
    },
  };
  const structuredData = [
    {
      "@context": "https://schema.org",
      ...organization,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Quanto Falta para a Copa",
      url: "https://quantofaltaparacopa.com.br/",
      description: "Contagem regressiva atualizada para a Copa do Mundo 2026.",
      publisher: organization,
    },
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: "Copa do Mundo FIFA 2026",
      startDate: "2026-06-11",
      eventStatus: "https://schema.org/EventScheduled",
      location: [
        { "@type": "Place", name: "Estados Unidos" },
        { "@type": "Place", name: "Canadá" },
        { "@type": "Place", name: "México" },
      ],
      organizer: { "@type": "Organization", name: "FIFA" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <CounterHero days={daysToWorldCup} />
      <LearnMoreSection />
      <NewsSection />
      <WorldCupGuideMenu />
      <FaqSection items={FAQ_ITEMS} />
      <Footer />

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default Home;
