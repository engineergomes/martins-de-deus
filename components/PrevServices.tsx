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
                    <h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-[#d5a675] ">
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

                    {/* <div className="hidden lg:grid grid-cols-3 gap-10 place-items-center">
                        {direitoCivil.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center bg-[#fafafa] border border-transparent hover:border-[#d5a675] drop-shadow hover:drop-shadow-xl transition duration-300 ease-in-out"
                            >
                                <div className="h-16 w-16 lg:h-24 lg:w-24 fill-[#d5a675] relative">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-center">
                                    {item.name}
                                </h3>
                                <p className="text-center">{item.text}</p>
                            </div>
                        ))}
                    </div> */}
                    {/* <div className="flex flex-col gap-4 w-full lg:hidden">
                        {direitoCivil.map((item, index) => (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] bg-[#3a563f] text-[#d5a675] fill-[#d5a675]">
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
                                        <Disclosure.Panel className="bg-[#d5a675] flex flex-col text-center p-4">
                                            {item.text}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default PrevServices;
