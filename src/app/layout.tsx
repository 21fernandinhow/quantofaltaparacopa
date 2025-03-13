import type { Metadata } from "next";
import { calcTimeToWorldCup } from "@/utils/calcTimeToWorldCup";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const daysToWorldCup = calcTimeToWorldCup();
  
  return {
    title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
    description: `A Copa está chegando! Saiba exatamente quanto falta para a Copa do Mundo 2026!`,
    openGraph: {
      title: `Faltam ${daysToWorldCup} dias para a Copa do Mundo 2026!`,
      description: "Contagem regressiva para a Copa do Mundo de 2026.",
      url: "https://quantofaltaparacopa.com.br/",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
