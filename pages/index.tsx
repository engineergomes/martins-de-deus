import Head from "next/head";
import { SetStateAction } from "react";
import Areas from "../components/Areas";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Martins de Deus</title>

                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Header />

            <div className="pt-40 mx-auto max-w-[1360px]">
                <Areas />
            </div>
        </>
    );
}
