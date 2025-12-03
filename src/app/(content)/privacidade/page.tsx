import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
    title: "Política de Privacidade | Quanto Falta Para a Copa",
});

const PrivacyPolitics = () => (
    <>
        <main id="privacy-page">
            <div>
                <h1>Política de Privacidade</h1>
                <p>Última atualização: 2 de outubro de 2025</p>

                <section>
                    <p>
                        Bem-vindo ao <strong>quantofaltaparacopa.com.br</strong>. Nesta página explicamos de forma direta e objetiva que dados
                        coletamos, por quê, e como você pode gerenciar isso. Não sou advogado — este texto é um modelo prático. Se você
                        precisa de conformidade legal completa (LGPD / GDPR), recomendo revisão jurídica.
                    </p>

                    <h2>Quem é o controlador</h2>
                    <p>
                        O responsável pelo site é <strong>Fernando</strong> - 21fernandinhow@gmail.com.
                    </p>

                    <h2>Quais dados podemos coletar</h2>
                    <ul>
                        <li>Dados de uso e logs (ex.: IP, user‑agent, páginas visitadas, endereço de referência).</li>
                        <li>Cookies e identificadores (usados por serviços de ads/analytics).</li>
                        <li>Dados que você enviar voluntariamente (nenhum formulário público no momento — caso adicione, iremos
                            informar claramente).</li>
                        <li>Dados coletados por serviços de terceiros (descritos abaixo).</li>
                    </ul>

                    <h2>Integrações de terceiros</h2>
                    <p>
                        O site está integrado ao <strong>Google Search Console</strong> e <strong>Google
                            AdSense</strong>. Isso significa que terceiros — principalmente o Google — podem coletar dados relacionados ao
                        uso do site, exibições e comportamento para propósitos de indexação, relatórios e exibição de anúncios.
                    </p>

                    <h2>Para que usamos os dados</h2>
                    <ul>
                        <li>Manter e operar o site.</li>
                        <li>Medir e entender tráfego e desempenho.</li>
                        <li>Exibir anúncios — podendo ser personalizados com base em interesses.</li>
                        <li>Detectar e prevenir abuso e fraudes.</li>
                    </ul>

                    <h2>Cookies e como controlar</h2>
                    <p>
                        Alguns cookies são necessários para o funcionamento básico do site; outros são opcionais e usados para anúncios e
                        análise. Você pode:
                    </p>
                    <ul>
                        <li>Desativar cookies no seu navegador (Chrome/Firefox/Edge/Safari têm configurações de privacidade).</li>
                        <li>Desativar anúncios personalizados do Google em <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">adssettings.google.com</a>.</li>
                        <li>Usar extensões ou configurações de privacidade para limitar rastreamento.</li>
                    </ul>

                    <h2>Retenção de dados</h2>
                    <p>
                        Conservamos dados apenas pelo tempo necessário às finalidades descritas ou para cumprir obrigações legais. Serviços
                        terceiros (Google, host, CDN) podem reter logs e métricas por prazos distintos — verifique as políticas deles para
                        detalhes.
                    </p>

                    <h2>Segurança</h2>
                    <p>
                        Tomamos medidas técnicas e administrativas razoáveis para proteger os dados. Apesar disso, nenhum sistema é 100% à
                        prova de falhas; por isso não podemos garantir segurança absoluta.
                    </p>

                    <h2>Alterações nesta política</h2>
                    <p>
                        Podemos atualizar esta política. Quando houver mudanças relevantes, mostraremos a nova data de última atualização
                        no topo desta página.
                    </p>

                    <h2>Contato</h2>
                    <p>
                        Para dúvidas ou pedidos relacionados à privacidade, escreva para: <strong>21fernandinhow@gmail.com</strong>.
                    </p>
                </section>
            </div>
        </main>
    </>
)


export default PrivacyPolitics