import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import {
	DivorcioLitigioso,
	DivorciosExtrajudicial,
	GuardaDosFilhos,
	PartilhaDeBens,
	PensaoAlimenticia,
	Sucessoes,
	UniaoEstavel,
} from "../components/SVG/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function FamilyRightServices() {
	const direitoDaFamilia = [
		{
			name: "Divórcio Litigioso",
			icon: <DivorcioLitigioso />,
			text: "Sem consenso, a separação será na Justiça. Também é a solução para definir pensão, guarda e partilha",
		},
		{
			name: "Divórcio Extrajudicial",
			icon: <DivorciosExtrajudicial />,
			text: "Consensual em Cartório. Opção mais rápida e menos custosa.",
		},
		{
			name: "Guarda dos Filhos",
			icon: <GuardaDosFilhos />,
			text: "Solicitar, manter ou mudar o tipo de guarda - compartilhada, unilateral ou alternada.",
		},
		{
			name: "Partilha de Bens",
			icon: <PartilhaDeBens />,
			text: "Durante/após separações (divórcio/união estável) ou casos de inventário e herança.",
		},
		{
			name: "Pensão Alimenticia",
			icon: <PensaoAlimenticia />,
			text: "Fixação, revisão, execução e exoneração dos valoes.",
		},
		{
			name: "Sucessões",
			icon: <Sucessoes />,
			text: "Inventários, heranças, partilha de bens judiciais e extrajudiciais.",
		},
		{
			name: "União Estável",
			icon: <UniaoEstavel />,
			text: "Reconhecimento ou dissolução, em processos judiciais ou extrajudiciais.",
		},
	];
	return (
		<>
			<div className="relative">
				<div
					id="ver-mais"
					className="absolute -top-28 bg-transparent"
				></div>
				<div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5">
					<h2 className="text-3xl sm:text-5xl font-bold text-center text-[#CFAA7D] max-w-full">
						Áreas de atuação da Advogada de Família
					</h2>

					<div className="hidden lg:grid grid-cols-4 gap-10 place-items-center">
						{direitoDaFamilia.map((item, index) => (
							<div
								key={index}
								className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center bg-[white] text-[#414530] fill-[#CFAA7D] border-4 border-transparent hover:border-[#CFAA7D] drop-shadow hover:drop-shadow-xl transition duration-300 ease-in-out"
							>
								<div className="h-16 w-16 lg:h-24 lg:w-24 fill-[#CFAA7D]">
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
						{direitoDaFamilia.map((item, index) => (
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

export default FamilyRightServices;
