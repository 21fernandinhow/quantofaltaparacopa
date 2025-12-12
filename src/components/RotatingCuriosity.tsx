"use client";

import { useEffect, useState } from "react";
import curiosities from "@/app/data/curiosities.json";

const RotatingCuriosity = () => {
    const list = curiosities.curiosities;

    const [index, setIndex] = useState(() =>
        Math.floor(Math.random() * list.length)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                let newIndex = prev;

                while (newIndex === prev) {
                    newIndex = Math.floor(Math.random() * list.length);
                }

                return newIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [list.length]);

    const current = list[index];

    return (
        <div className="curiosities">
            <a href={`/central-da-copa/curiosidades/${current.slug}`}>
                <strong>Curiosidade:</strong> {current.title}
            </a>
        </div>
    );
};

export default RotatingCuriosity;