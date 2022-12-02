import { NextPage } from "next";
import Head from "next/head";
import { lawyers } from "../components/Configs/LawyersInfo";
import Lawyer from "../components/Lawyer";

const Team: NextPage = () => {
    return (
        <>
            <Head>
                <title>Martins de Deus</title>

                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="flex flex-col gap-12 bg-[#D3AC5C] py-16">
                {lawyers.map((lawyer) => (
                    <Lawyer
                        key={lawyer.name}
                        name={lawyer.name}
                        oab={lawyer.oab}
                        imgSrc={lawyer.imgSrc}
                        graduation={lawyer.graduation}
                        pos={lawyer.pos}
                        about={lawyer.about}
                    />
                ))}
            </div>
        </>
    );
};

export default Team;
