import NewsSection from "@/components/NewsSection";
import WorldCupGuideMenu from "@/components/WorldCupGuideMenu";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Central da Copa | Quanto Falta Para a Copa",
});

const WorldCupCentral = () => (
    <>
        <section className="container" id="welcome-section">
            <h2>Central da Copa</h2>
            <p>Tudo o que você precisa saber sobre a Copa do Mundo 2026.</p>
            <hr className="animated-gradient-line" />
        </section>
        <NewsSection />
        <WorldCupGuideMenu />
    </>
)


export default WorldCupCentral