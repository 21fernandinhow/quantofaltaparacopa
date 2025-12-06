import NewsSection from "@/components/NewsSection";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Central da Copa | Quanto Falta Para a Copa",
});

const WorldCupCentral = () => (
    <>
        <section className="container" id="welcome-section">
            <h2>Central da Copa</h2>
            <p>Tudo o que você precisa saber sobre a Copa do Mundo 2026.</p>
        </section>
        <NewsSection />
    </>
)


export default WorldCupCentral