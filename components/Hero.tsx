import Image from "next/image";

function Hero() {
	return (
		<>
			<div
				className="flex flex-col items-center justify-items-center justify-center gap-4 lg:gap-12 py-5 pb-20 border-b border-[#CFAA7D]"
				style={{ backgroundImage: `url('./bg-effect.png')` }}
			>
				<div className="max-w-[1360px] px-5 flex flex-col items-center justify-items-center justify-center gap-4 lg:gap-12 py-5 pb-20">
					{/* <p className="text-xl text-justify text-[#3a563f]">
						O Escritório Martins de Deus Advogados Associados é
						composto por profissionais especializados, éticos e
						engajados, preocupados em entregar muito mais do que
						somente soluções jurídicas, mas, principalmente,
						confiança e tranquilidade para as pessoas e empresas
						assessoradas. Com atuação nas áreas de família, cível,
						criminal, trabalhista, previdenciária , imobiliária e
						empresarial, entrega segurança jurídica em todas as
						demandas judiciais e extrajudiciais dos clientes
					</p> */}
					{/* <div className="flex w-full items-center justify-center lg:justify-start ">
            <a
              className="py-4 px-6 rounded-xl hover:bg-[#d6b675] bg-[#d5a675] drop-shadow-lg text-lg font-bold"
              href="https://wa.me/5548984727432"
              target="_blank"
              rel="noreferrer"
            >
              Agende uma conversa
            </a>
          </div> */}
					<div className="text-[#d5a675] w-1/2 gap-5 flex flex-col text-center">
						<h1 className="text-5xl">
							Defendendo seus interesses com excelência
						</h1>
						<h2 className="text-white">
							O Escritório Deus e Aguiar Advocacia é composto por
							profissionais especializados, éticos e engajados,
							preocupados em entregar muito mais do que somente
							soluções jurídicas, mas, principalmente, confiança e
							tranquilidade para as pessoas e empresas
							assessoradas.
						</h2>
					</div>
					<Image
						data-aos="fade-left"
						className="drop-shadow-lg rounded-xl row-start-1 lg:col-start-2"
						src="/img15-nobg.png"
						alt="Advogados"
						height={733}
						width={800}
					/>
				</div>
			</div>

			{/* <div className="relative w-full h-full min-h-[30rem]"> */}

			{/* </div> */}

			{/* <div className="grid lg:grid-cols-2 lg:grid-rows-2 relative gap-3 lg:gap-6 row-start-1 lg:row-start-auto">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hidden lg:flex items-center justify-end"
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
                        className="flex items-center justify-center lg:justify-end h-[18.75rem] w-[18.75rem] relative"
                    >
                        <Image
                            className="drop-shadow-lg rounded-xl "
                            src="/img10.png"
                            alt="Advogados"
                            height={300}
                            width={300}
                        />
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="hidden lg:flex justify-center items-start"
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
                        className="hidden lg:flex items-center justify-center"
                    >
                        <Image
                            className="drop-shadow-lg rounded-xl"
                            src="/img5.png"
                            alt="Advogados"
                            height={180}
                            width={180}
                        />
                    </div>
                </div> */}
		</>
	);
}

export default Hero;
