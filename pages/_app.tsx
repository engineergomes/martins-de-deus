import type { AppProps } from "next/app";

import AOS from "aos";

import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

import "aos/dist/aos.css";
import "../styles/globals.css";
import { Widget } from "../components/Widget/Whatsapp";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 900,
            easing: "ease-out-cubic",
        });
    });

    return (
        <Layout>
            <>
                <Component {...pageProps} />
                <Widget />
            </>
        </Layout>
    );
}
