import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=AW-350433948"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-350433948');
        `}
                    </Script>
                    <meta
                        name="google-site-verification"
                        content="a7JLH2XUmPvgX4X7Eojev9zKBVLX0KzsZfWHQ8IMkvE"
                    />
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    ></meta>
                    <meta
                        name="description"
                        content="Martins de Deus Advogados Associados atuam nas áreas de família, cível, criminal, imobiliária e empresarial, entrega segurança jurídica em todas as demandas judiciais e extrajudiciais dos clientes."
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <link rel="icon" href="/favicon.ico" />

                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <body>
                    {/* <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TJPJLF"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    ></noscript> */}

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
