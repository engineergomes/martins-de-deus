import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Advantages from "../components/Advantages";
import CivilServices from "../components/CivilServices";
import BusinessLaw from "../components/BusinessLaw";
import { CleanButton } from "../components/CleanButton";

const DireitoCivil: NextPage = () => {
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
          content="Deus e Aguiar Advocacia atuam nas áreas de família, cível, criminal, imobiliária e empresarial, entrega segurança jurídica em todas as demandas judiciais e extrajudiciais dos clientes."
        />
        <title>Deus e Aguiar Direito Civil</title>

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="flex flex-col gap-10 overflow-hidden pb-16 text-white">
        <div
          className="flex flex-col py-8 border-b border-[#CFAA7D] w-full"
          style={{ backgroundImage: `url('./bg-effect.png')` }}
        >
          <div className="flex flex-col  lg:grid lg:grid-cols-2  mx-auto relative w-full max-w-[1360px]">
            <div className="flex flex-col gap-8 max-w-[600px] px-8 py-5 rounded-3xl opacity-95 z-20 sm:py-10">
              <div className="flex flex-col gap-4 max-w-3xl opacity-100">
                <p className="text-xl lg:text-2xl">Fale com nosso</p>
                <h2 className="text-3xl md:text-5xl font-extrabold lg:text-7xl">
                  Advogado especialista em <br />
                  <span className="text-[#CFAA7D]">
                    Direito <br className="hidden lg:flex" /> Empresarial.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl max-w-[40ch]">
                  Receba agora um atendimento personalizado de um advogado que
                  atende causas de direito Civil todos os dias.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 justify-start items-center sm:flex-row">
                  <CleanButton
                    text={"Falar com o Advogado"}
                    href={"https://wa.me/5548984727432"}
                    whatsapp={true}
                  />
                  <a href="tel:48984110903" className="text-center">
                    (48) 98472-7432
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full w-full p-10">
              <div className="relative lg:h-full lg:w-full">
                <Image
                  className="rounded drop-shadow-lg"
                  width={500}
                  height={870}
                  src="/victor.webp"
                  alt="Advogado"
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
        </div>
        <BusinessLaw />
        <Advantages />
      </div>
    </>
  );
};
export default DireitoCivil;
