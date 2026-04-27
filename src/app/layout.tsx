import "@/styles/index.scss";
import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quanto Falta para a Copa",
  url: "https://quantofaltaparacopa.com.br",
  logo: "https://quantofaltaparacopa.com.br/trophy.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
