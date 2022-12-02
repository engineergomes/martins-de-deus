import { NextPage } from "next";
import Head from "next/head";
import { lawyers } from "../components/Configs/LawyersInfo";
import { ContactForm } from "../components/ContactForm/Form";
import Lawyer from "../components/Lawyer";

const Contato: NextPage = () => {
    return (
        <>
            <Head>
                <title>Martins de Deus</title>

                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="grid grid-cols-2 gap-12 py-16 mx-auto max-w-[1360px]">
                <ContactForm />
                <div>
                    <h2>Dados de contato:</h2>
                </div>
            </div>
        </>
    );
};

export default Contato;
