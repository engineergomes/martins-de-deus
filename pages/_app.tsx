import "../styles/globals.css";
import type { AppProps } from "next/app";

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

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
            <Component {...pageProps} />
        </Layout>
    );
}
