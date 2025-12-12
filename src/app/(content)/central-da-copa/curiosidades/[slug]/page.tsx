import curiosities from "@/app/data/curiosities.json";
import { BackToCentral } from "@/components/BackToCentral";

interface CuriosityPageProps {
    params: any;
}

export const generateStaticParams = async () => {
    return curiosities.curiosities.map((c) => ({
        slug: c.slug,
    }));
};

export default async function CuriosityPage({ params }: CuriosityPageProps) {
    const resolvedParams = await params;

    let slug: string | undefined;

    if (resolvedParams == null) {
        slug = undefined;
    } else if (typeof resolvedParams.slug === "string") {
        slug = resolvedParams.slug;
    } else if (resolvedParams.value) {
        if (typeof resolvedParams.value === "string") {
            try {
                const parsed = JSON.parse(resolvedParams.value);
                slug = parsed?.slug;
            } catch {
                slug = undefined;
            }
        } else if (typeof resolvedParams.value === "object") {
            slug = resolvedParams.value.slug;
        }
    }

    const curiosity = slug
        ? curiosities.curiosities.find((item) => item.slug === slug)
        : null;

    if (!curiosity) {
        return (
            <div className="container">
                <h1>Curiosidade não encontrada</h1>
                <p>A curiosidade que você tentou acessar não existe.</p>
            </div>
        );
    }

    return (
        <article className="container">
            <h1>{curiosity.title}</h1>
            {curiosity.content.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
            ))}
            <BackToCentral />
        </article>
    );
}