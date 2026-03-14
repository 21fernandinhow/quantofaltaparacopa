export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

const FaqSection = ({ items }: FaqSectionProps) => (
  <section className="faq-section container">
    <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
    {items.map((item, i) => (
      <div key={i} className="faq-section__item">
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
      </div>
    ))}
  </section>
);

export default FaqSection;
