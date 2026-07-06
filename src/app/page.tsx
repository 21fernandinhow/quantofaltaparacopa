import AdBanner from "@/components/AdBanner";
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
      ? `${daysToWorldCup === 1 ? "Falta 1 dia" : `Faltam ${daysToWorldCup} dias`} para a Copa do Mundo 2030. Contagem regressiva, formato, grupos e curiosidades do Mundial em um só lugar.`
      : "Copa do Mundo 2030: contagem regressiva, formato, grupos e curiosidades do Mundial em um só lugar.";

  return {
    title: `${daysToWorldCup === 1 ? "Falta 1 dia" : `Faltam ${daysToWorldCup} dias`} para a Copa do Mundo 2030 - Contagem Regressiva`,
    description,
    openGraph: {
      title: `${daysToWorldCup === 1 ? "Falta 1 dia" : `Faltam ${daysToWorldCup} dias`} para a Copa do Mundo 2030!`,
      description: "Contagem regressiva para a Copa do Mundo de 2030.",
      url: "https://quantofaltaparacopa.com.br/",
      type: "website",
      images: [
        {
          url: "https://quantofaltaparacopa.com.br/trophy.webp",
          width: 1200,
          height: 630,
          alt: "Contagem regressiva Copa 2030",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${daysToWorldCup === 1 ? "Falta 1 dia" : `Faltam ${daysToWorldCup} dias`} para a Copa do Mundo 2030!`,
      description: "Contagem regressiva para a Copa do Mundo de 2030.",
      images: ["https://quantofaltaparacopa.com.br/trophy.webp"],
    },
    alternates: {
      canonical: "https://quantofaltaparacopa.com.br/",
    },
  };
};

const FAQ_ITEMS = [
  {
    question: "Quando será a Copa do Mundo 2030?",
    answer:
      "A Copa do Mundo FIFA 2030 começa em 08 de junho de 2030 e será disputada em Portugal, Espanha e Marrocos.",
  },
  {
    question: "Quantas seleções participam da Copa 2030?",
    answer:
      "A Copa de 2030 terá 48 seleções, divididas em 12 grupos de 4. Serão 104 jogos no total.",
  },
  {
    question: "Onde será a Copa do Mundo 2030?",
    answer:
      "A Copa 2030 será sediada em três países: Portugal, Espanha e Marrocos. Portugal e Espanha sediarão a fase de grupos e as oitavas de final, enquanto Marrocos sediará as quartas de final, semifinais e a grande final.",
  },
  {
    question: "Qual o formato da Copa do Mundo 2030?",
    answer:
      "O formato inclui 12 grupos, os 24 primeiros e segundos colocados mais 8 melhores terceiros avançam, depois um playoff de 32 e em seguida o mata-mata tradicional.",
  },
  {
    question: "O que é o site Quanto Falta pra Copa?",
    answer:
      "É um site com contagem regressiva para a Copa 2030, além de informações sobre formato, grupos, curiosidades e notícias do Mundial.",
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
      description: "Contagem regressiva atualizada para a Copa do Mundo 2030.",
      publisher: organization,
    },
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: "Copa do Mundo FIFA 2030",
      startDate: "2030-06-08",
      eventStatus: "https://schema.org/EventScheduled",
      location: [
        { "@type": "Place", name: "Portugal" },
        { "@type": "Place", name: "Espanha" },
        { "@type": "Place", name: "Marrocos" },
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
      {/* <WorldCupGuideMenu /> */}
      <AdBanner disabled />
      {/* <NewsSection /> */}
      <AdBanner disabled />
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
