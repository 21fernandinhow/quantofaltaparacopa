import type { Metadata } from "next";
import { calcTimeToWorldCup } from "@/utils/calcTimeToWorldCup";
import "./globals.css";

const daysToWorldCup = calcTimeToWorldCup()

export const metadata: Metadata = {
  title: `${daysToWorldCup} dias para a copa do mundo!`,
  description: `A copa está chegando! Faltam apenas ${daysToWorldCup} dias! Saiba mais...`,
};

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
