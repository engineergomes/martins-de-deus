import type { AppProps } from "next/app";

import AOS from "aos";

import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

import "aos/dist/aos.css";
import "../styles/globals.css";
import { Widget } from "../components/Widget/Whatsapp";
import TagManager from "react-gtm-module";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 900,
			easing: "ease-out-cubic",
		});
	});
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-5PF3TMX" });
	}, []);

	return (
		<>
			<Head>
				{" "}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>{" "}
			</Head>

			<Layout>
				<>
					<Component {...pageProps} />
					<Widget />
				</>
			</Layout>
		</>
	);
}
