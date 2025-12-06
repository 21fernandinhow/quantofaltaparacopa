import Image from "next/image"

const Header = () => {
    return (
        <header>
            <div className="header-title">
                <Image
                    className="trophy"
                    src="/trophy.webp"
                    alt="Trophy"
                    width={60}
                    height={60}
                    priority
                />
                <h1>Quanto falta para copa</h1>
            </div>
            <hr />
        </header>
    )
}

export default Header