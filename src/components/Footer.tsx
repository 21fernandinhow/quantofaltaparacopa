import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer">
      <span>Rumo ao Hexa </span>
      <span className="hide-mobile"> | </span>
      <Link
        href="https://tudoaqui.click/founder"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Fernando Carvalho
      </Link>
      <span className="hide-mobile"> | </span>
      <Link href="/privacidade">
        Política de Privacidade
      </Link>
    </footer>
  )
}

export default Footer