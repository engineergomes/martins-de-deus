import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Areas from "../components/Areas";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import GoogleReviews from "../components/GoogleReviews";

const Home: NextPage = () => {
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=AW-350433948" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-350433948');
        `}
			</Script>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta
					name="description"
					content="Deus e Aguiar Advogados Associados atuam nas áreas de família, cível, criminal, imobiliária e empresarial, entrega segurança jurídica em todas as demandas judiciais e extrajudiciais dos clientes."
				/>

				<title>Deus e Aguiar</title>

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

			<div className="mx-auto flex flex-col gap-12 pt-5  lg:pt-12">
				<Hero />
				<Areas />
				<GoogleReviews />
			</div>
		</>
	);
};

export default Home;
