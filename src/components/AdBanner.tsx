"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";

const AD_IMAGES_COUNT = 7;
const AD_LINK = "https://www.instagram.com/gbstorejf_/"; 

const AdBanner = () => {
    const [imageIndex, setImageIndex] = useState<number | null>(null);

    useEffect(() => {
        setImageIndex(Math.floor(Math.random() * AD_IMAGES_COUNT) + 1);
    }, []);

    if (imageIndex === null) return null;

    return (
        <div id="ad-banner-container">
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
                    unoptimized
                />
            </a>
        </div>
    );
};

export default AdBanner;
