import { NextPage } from "next";
import Head from "next/head";

import Areas from "../components/Areas";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Martins de Deus</title>

                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="mx-auto max-w-[1360px] flex flex-col gap-12 py-5 lg:py-12 px-5">
                <Hero />
                <Areas />
            </div>
        </>
    );
};

export default Home;
