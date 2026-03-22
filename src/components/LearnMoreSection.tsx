import { HiChevronDown } from "react-icons/hi2";

const LearnMoreSection = () => {

  return (
    <section className="container" id="learn-more-section">
      <a
        href="#world-cup-guide-menu"
        className="learn-more-scroll"
        aria-label="Rolar até notícias e conteúdo sobre a Copa do Mundo 2026"
      >
        <span className="learn-more-scroll__label">Tudo o que você precisa saber sobre a Copa do Mundo 2026</span>
        <span className="learn-more-scroll__arrows" aria-hidden>
          <HiChevronDown className="learn-more-scroll__chevron" />
          <HiChevronDown className="learn-more-scroll__chevron learn-more-scroll__chevron--second" />
        </span>
      </a>
    </section>
  );
};

export default LearnMoreSection;
