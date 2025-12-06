import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/index.scss";

export default function ContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
