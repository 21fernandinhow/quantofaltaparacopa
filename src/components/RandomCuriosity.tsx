import curiosities from "@/app/data/curiosities.json";

const RandomCuriosity = () => {
    const list = curiosities.curiosities;
    const index = Math.floor(Math.random() * list.length)
    const current = list[index];

    return (
        <div className="curiosities">
            <a href={`/central-da-copa/curiosidades/${current.slug}`}>
                <strong>Curiosidade:</strong> {current.title}
            </a>
        </div>
    );
};

export default RandomCuriosity;