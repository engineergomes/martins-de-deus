import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import { Complience, Consultancy, Tribunal } from "./SVG/Icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function PrevServices() {
	const direitoCivil = [
		{
			name: "Compliance",
			icon: <Complience />,
			text: "Assessoria à empresas a partir da análise da rotina, mapeamento e solução de inconformidades com a legislação vigente, com intuito de reduzir possíveis riscos de passivo trabalhista.",
		},
		{
			name: "Consultoria Preventiva",
			icon: <Consultancy />,
			text: "Atendimento nas mais diversas situações corriqueiras decorrentes das relações de trabalho, com a prestação de orientação prévia e assessoramento na tomada de providências. ",
		},
		{
			name: "Judicial",
			icon: <Tribunal />,
			text: "Representação e defesa dos interesses e direitos de nossos clientes, em todas as fases processuais, inclusive com a atuação em audiências e sustentações orais.",
		},
	];
	return (
		<>
			<div className="relative">
				<div id="ver-mais" className="absolute -top-28"></div>
				<div className="flex flex-col max-w-[1360px] mx-auto gap-6 lg:gap-10 lg:items-center lg:justify-center px-10 lg:px-5">
					<h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-[#CFAA7D] ">
						Áreas de atuação{" "}
						<span className="hidden lg:flex">
							da Advogada Previdenciária
						</span>
					</h2>

					<p className="text-lg">
						Com atuação na esfera administrativa e judicial, além de
						atuar de forma consultiva, nossa equipe é especializada
						para representar os interesses de nossos clientes nas
						demandas previdenciárias com objetivo de obter, revisar
						e restabelecer benefícios, dentre os quais:
						auxílio-doença, pensão por morte, salário-maternidade,
						aposentadorias em geral, auxílio-acidente, LOAS e
						auxílio-reclusão, e demais situações previdenciárias.
					</p>
				</div>
			</div>
		</>
	);
}

export default PrevServices;
