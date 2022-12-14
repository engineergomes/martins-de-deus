import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import FamilyRightServices from "../components/FamilyRightServices";
import Advantages from "../components/Advantages";

const DireitoDaFamilia: NextPage = () => {
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
                <title>Martins de Deus | Direito da Família</title>

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

            <div className="flex flex-col gap-10 overflow-hidden pb-16">
                <div className="flex flex-col  lg:grid lg:grid-cols-2 max-w-[1360px] mx-auto relative py-8">
                    <div className="flex flex-col gap-8 max-w-[600px] px-8 py-5 rounded-3xl opacity-95 z-20 sm:py-10">
                        <div className="flex flex-col gap-4 max-w-3xl opacity-100">
                            <p className="text-xl lg:text-2xl">
                                Fale com nossa
                            </p>
                            <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
                                Advogada especialista em <br />
                                <span className="text-[#d5a675]">
                                    Direito de Família.
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl max-w-[40ch]">
                                Receba agora um atendimento personalizado de uma
                                advogada que atende causas de direito da família
                                todos os dias.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4 justify-start items-center sm:flex-row">
                                <a
                                    href="https://wa.me/5548984727432"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl md:text-lg hover:bg-green-200 w-fit"
                                >
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        width={28}
                                        height={28}
                                    />
                                    <p>Falar com a Advogada</p>
                                </a>
                                <a
                                    href="tel:48984110903"
                                    className="text-center"
                                >
                                    (48) 98472-7432
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex h-full w-full p-10">
                        <div className="relative h-full w-full">
                            <Image
                                className="rounded drop-shadow-lg"
                                src="/img3.png"
                                alt="Advogada"
                                fill
                            />
                        </div>
                    </div>
                    <div className="col-span-2 w-full flex items-center justify-center  bottom-0 pt-6 ">
                        <a
                            href="#ver-mais"
                            className="h-full relative flex flex-col gap-1 justify-center items-center font-bold uppercase text-center text-xl z-20  w-min px-8 pb-14 pt-4 "
                        >
                            <p className=" whitespace-nowrap ">Ver mais</p>
                            <div className="flex absolute bottom-24 items-center justify-center">
                                <div className="chevron "></div>
                                <div className="chevron "></div>
                                <div className="chevron "></div>
                            </div>
                        </a>
                    </div>
                </div>
                <FamilyRightServices />
                <Advantages />
            </div>
        </>
    );
};
export default DireitoDaFamilia;
