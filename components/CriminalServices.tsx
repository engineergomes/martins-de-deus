import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import {
	Assistente,
	Comuns,
	Comuns2,
	DivorcioLitigioso,
	DivorciosExtrajudicial,
	Drogas,
	Flagrante,
	GuardaDosFilhos,
	PartilhaDeBens,
	PensaoAlimenticia,
	Privado,
	Sucessoes,
	Tribunal,
	UniaoEstavel,
} from "./SVG/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function CriminalServices() {
	const direitoCriminal = [
		{
			name: "Ações Penais Privadas",
			icon: <Privado />,
			text: "Oferecimento de queixa-crime e representações criminais nos crimes de calúnia, difamação e injúria.",
		},
		{
			name: "Crimes Comuns",
			icon: <Comuns2 />,
			text: "Crimes contra o patrimônio e financeiros; contra a pessoa; contra a fé pública; além dos demais delitos abrangidos pelo Código Penal e legislações especiais. ",
		},
		{
			name: "Tribunal do Júri",
			icon: <Tribunal />,
			text: "Atuação na fase de instrução e julgamento e em plenário.",
		},
		{
			name: "Tráfico de Drogas",
			icon: <Drogas />,
			text: "Foco em crimes da Lei de Drogas, especialmente tráfico de drogas, associação para o tráfico e organizações criminosas.",
		},
		{
			name: "Plantão Criminal",
			icon: <Flagrante />,
			text: "Acompanhamento de flagrante na Delegacia de Polícia e audiência de custódia.",
		},
		{
			name: "Recursos Criminais",
			icon: <Comuns />,
			text: "Interposição de recursos e sustentação oral nas instâncias superiores (Tribunal de Justiça, Superior Tribunal de Justiça e Supremo Tribunal Federal).",
		},
		{
			name: "Assistente de Acusação",
			icon: <Assistente />,
			text: "Atuação conjunta com o Ministério Público em favor da vítima.",
		},
	];

	return (
		<>
			<div className="relative">
				<div id="ver-mais" className="absolute -top-28"></div>
				<div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5">
					<h2 className="text-3xl sm:text-5xl font-bold text-center text-[#CFAA7D] max-w-full">
						Áreas de atuação da Advogada Criminal
					</h2>

					<div className="hidden lg:grid grid-cols-4 gap-10 place-items-center">
						{direitoCriminal.map((item, index) => (
							<div
								key={index}
								className="grid grid-cols-1 grid-rows-[2fr,2fr,3fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center
                 bg-white text-[#414530] fill-[#CFAA7D] border-4 border-transparent hover:border-[#CFAA7D] drop-shadow 
                 hover:drop-shadow-xl transition duration-300 ease-in-out"
							>
								<div className="h-16 w-16 lg:h-24 lg:w-24 fill-[#CFAA7D] relative">
									{item.icon}
								</div>
								<h3 className="text-2xl font-bold text-center">
									{item.name}
								</h3>
								<p className="text-center">{item.text}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-4 w-full lg:hidden">
						{direitoCriminal.map((item, index) => (
							<Disclosure key={index}>
								{({ open }) => (
									<>
										<Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] bg-[#3a563f] text-[#CFAA7D] fill-[#CFAA7D]">
											<div className="h-8 w-8 relative">
												{item.icon}
											</div>
											<p className="text-left">
												{item.name}
											</p>
											<FontAwesomeIcon
												icon={faCaretUp}
												width={20}
												height={20}
												className={`${
													open
														? "rotate-180 transform"
														: "rotate-90"
												}
                                            `}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="bg-[#CFAA7D] flex flex-col text-center p-4">
											{item.text}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default CriminalServices;
