"use client"

import { useState } from "react";
import { HiShare } from "react-icons/hi";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

interface ShareBtnProps {
    days: number | string
}

const ShareBtn = ({ days }: ShareBtnProps) => {
    const [open, setOpen] = useState(false);

    const postUrl = "https://quantofaltaparacopa.com.br/";
    const shareMessage = `Faltam ${days} dias para a Copa do Mundo! Acompanhe a contagem regressiva em: ${postUrl}`;

    return (
        <>
            <button
                id="shareBtn"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Compartilhar esta página"
            >
                <HiShare />
            </button>

            <div className="share-container">
                {open && (
                    <div className="share-menu">
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Compartilhar no Whatsapp"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Compartilhar no X"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                )}
            </div>
        </>

    );
};

export default ShareBtn;