import curiosities from "@/app/data/curiosities.json";

interface Props {
  currentSlug: string;
}

const RelatedCuriosities = ({ currentSlug }: Props) => {
  const filtered = curiosities.curiosities.filter(
    (c) => c.slug !== currentSlug
  );

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  // duplicamos para efeito infinito suave
  const loopItems = [...selected, ...selected];

  return (
    <div className="related-wrapper">
      <h2>Veja também</h2>

      <div className="related-marquee">
        <div className="related-track">
          {loopItems.map((item, index) => (
            <a
              key={index}
              href={`/central-da-copa/curiosidades/${item.slug}`}
              className="related-item"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCuriosities;