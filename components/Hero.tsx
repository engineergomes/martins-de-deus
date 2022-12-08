import Image from "next/image";
import { useDimensions } from "../hooks/onResize";

function Hero() {
    const { isDesktop } = useDimensions();
    return (
        <>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-x-10 gap-5">
                <div className="flex flex-col items-center justify-center gap-4 lg:gap-10">
                    <p className="text-xl text-justify lg:text-left">
                        Atuando nas diversas áreas do Direito Civil, a nossa
                        equipe proporciona um assessoramento jurídico completo
                        aos clientes, com a realização do direito preventivo, o
                        agendamento de consultas, a elaboração de pareceres e a
                        elaboração, análise e ajustes de contratos.
                    </p>
                    <div className="flex w-full items-center justify-center lg:justify-start ">
                        <button className="py-4 px-6 rounded-xl hover:bg-[#d6b675] bg-[#D3AC5C] drop-shadow-lg text-lg font-bold text-[#293B2C]">
                            Agende uma conversa
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 relative gap-3 lg:gap-6 row-start-1 lg:row-start-auto">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hidden sm:flex items-center justify-end"
                    >
                        <Image
                            className="drop-shadow-lg rounded-xl"
                            src="/img3.png"
                            alt="Advogados"
                            height={180}
                            width={180}
                        />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <Image
                            className="drop-shadow-lg rounded-xl"
                            src="/img2.jpeg"
                            alt="Advogados"
                            height={250}
                            width={250}
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="hidden sm:flex justify-center items-start"
                    >
                        <Image
                            className=" top-0 left-20 drop-shadow-lg rounded-xl"
                            src="/img6.png"
                            alt="Advogados"
                            height={180}
                            width={180}
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="hidden sm:flex items-center justify-center"
                    >
                        <Image
                            className="drop-shadow-lg rounded-xl"
                            src="/img5.png"
                            alt="Advogados"
                            height={180}
                            width={180}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
