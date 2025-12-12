import RandomCuriosity from "./RandomCuriosity"

const WorldCupGuideMenu = () => (
    <>
        <section id="world-cup-guide-menu" className="container">
            <h3>Guia da Copa</h3>
            <div className="guide-options-list">
                <a className="guide-option" href="/central-da-copa/formato">Formato da Competição</a>
                <a className="guide-option" href="/central-da-copa/grupos">Grupos</a>
                {/* <a className="guide-option">Calendário</a> */}
                {/* <a className="guide-option">Estádios</a> */}
                {/* <a className="guide-option">História das Copas</a> */}
            </div>
            <RandomCuriosity />
        </section>
    </>
)


export default WorldCupGuideMenu