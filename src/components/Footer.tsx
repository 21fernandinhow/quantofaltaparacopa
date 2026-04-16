import Link from "next/link"
import AdBanner from "./AdBanner"

interface FooterProps{
  alternative?: boolean
}

const Footer = ({alternative}:FooterProps) => {
  return (
    <footer className={`footer ${alternative ? 'footer-alternative' : ''}`}>
      <AdBanner />
      <hr />
      <span>Rumo ao Hexa </span>
      <span className="hide-mobile"> | </span>
      <Link
        href="https://tudoaqui.click/founder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desenvolvido por Fernando Carvalho
      </Link>
      <span className="hide-mobile"> | </span>
      <Link href="/privacidade">
        Política de Privacidade
      </Link>
    </footer>
  )
}

export default Footer