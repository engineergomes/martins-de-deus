import Image from "next/image";

function Hero() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-x-10 gap-5">
                <div className="flex flex-col items-center justify-center gap-4 lg:gap-10">
                    <p className="text-xl text-justify lg:text-left text-[#3a563f]">
                        O Escritório Martins de Deus Advogados Associados é
                        composto por profissionais especializados, éticos e
                        engajados, preocupados em entregar muito mais do que
                        somente soluções jurídicas, mas, principalmente,
                        confiança e tranquilidade para as pessoas e empresas
                        assessoradas. Com atuação nas áreas de família, cível,
                        criminal, imobiliária e empresarial, entrega segurança
                        jurídica em todas as demandas judiciais e extrajudiciais
                        dos clientes.
                    </p>
                    <div className="flex w-full items-center justify-center lg:justify-start ">
                        <a
                            className="py-4 px-6 rounded-xl hover:bg-[#d6b675] bg-[#d5a675] drop-shadow-lg text-lg font-bold"
                            href="https://wa.me/5548984727432"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Agende uma conversa
                        </a>
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
