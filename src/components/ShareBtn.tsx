import { HiShare } from "react-icons/hi";

interface ShareBtnProps {
    days: number | string
}

const ShareBtn = ({days}: ShareBtnProps) => {
    const message = `Faltam ${days} dias para a Copa do Mundo! Acompanhe a contagem regressiva em: https://quantofaltaparacopa.netlify.app/`

    return (
        <a 
            id="shareBtn" 
            target="_blank" 
            rel="noopener noreferrer" 
            href={`https://wa.me/?text=${encodeURIComponent(message)}`}
        >
            <HiShare />
        </a>
    )
}

export default ShareBtn