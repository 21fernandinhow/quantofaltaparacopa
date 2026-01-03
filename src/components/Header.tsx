"use client"

import { getDaysToWorldCup } from "@/app/page";
import Image from "next/image"

const Header = () => {
    const daysToWorldCup = getDaysToWorldCup();

    return (
        <header>
            <div className="header-title">
                <a href="/central-da-copa">
                    <Image
                        className="trophy"
                        src="/trophy.webp"
                        alt="Trophy"
                        width={60}
                        height={60}
                        priority
                    />
                    <h1 className="gradient-text">Faltam {daysToWorldCup} dias para a copa</h1>
                </a>
            </div>
            <hr />
        </header>
    )
}

export default Header