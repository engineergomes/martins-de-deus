import { NextPage } from "next";
import Head from "next/head";

import Areas from "../components/Areas";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta
                    name="description"
                    content="Manuela Martins Advocacia Advogada especialista em Direito Civil, atuante nas áreas do direito de família e sucessões, reparação de danos e consumidor."
                />
                <title>Martins de Deus</title>

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

            <div className="mx-auto max-w-[1360px] flex flex-col gap-12 py-5 lg:py-12 px-5">
                <Hero />
                <Areas />
            </div>
        </>
    );
};

export default Home;
