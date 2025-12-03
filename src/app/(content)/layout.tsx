import Footer from "@/components/Footer";
import "@/styles/index.scss";

export default function ContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}
