"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";

const AD_IMAGES_COUNT = 7;
const AD_LINK = "https://www.instagram.com/gbstorejf_/";

const AdBanner = () => {
    const [imageIndex, setImageIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            setImageIndex(Math.floor(Math.random() * AD_IMAGES_COUNT) + 1);
        }
    }, [isVisible]);

    return (
        <div id="ad-banner-container" ref={containerRef}>
            {imageIndex !== null && (
                <a
                    href={AD_LINK}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    aria-label="Publicidade"
                    onClick={() => track('ad_click', { image: imageIndex, destination: AD_LINK })}
                >
                    <Image
                        src={`/ads/${imageIndex}.webp`}
                        alt="Publicidade"
                        width={300}
                        height={250}
                        className="ad-banner-image"
                        loading="lazy"
                        unoptimized
                    />
                </a>
            )}
        </div>
    );
};

export default AdBanner;
