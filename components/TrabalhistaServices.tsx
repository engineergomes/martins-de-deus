import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import {
  Cobranca,
  Complience,
  Consultancy,
  Consumidor,
  Contratos,
  DanosMateriais,
  DanosMorais,
  DivorcioLitigioso,
  DivorciosExtrajudicial,
  Empresarial,
  Emprestimo,
  GuardaDosFilhos,
  PartilhaDeBens,
  PensaoAlimenticia,
  Sucessoes,
  Transito,
  Tribunal,
  UniaoEstavel,
} from "./SVG/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function TrabalhistaServices() {
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
      <div className="relative text-[#3a563f]">
        <div id="ver-mais" className="absolute -top-28"></div>
        <div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#CFAA7D] max-w-full">
            Áreas de atuação da Advogada Trabalhista
          </h2>

          <div className="hidden lg:grid grid-cols-3 gap-10 place-items-center">
            {direitoCivil.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr] gap-0 rounded p-5 lg:p-10 w-full h-full 
								place-items-center bg-[#282828] border-4 border-[#cfaa7d] text-[#cfaa7d] hover:border-[#CFAA7D] drop-shadow
								 hover:drop-shadow-xl transition duration-300 ease-in-out"
              >
                <div className="h-16 w-16 lg:h-24 lg:w-24 fill-[#CFAA7D] relative">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-center">{item.name}</h3>
                <p className="text-center">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full lg:hidden">
            {direitoCivil.map((item, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 
										gap-4 px-4 hover:border-[#ffaa00] bg-[#424530] text-[#CFAA7D] fill-[#CFAA7D]"
                    >
                      <div className="h-8 w-8 relative">{item.icon}</div>
                      <p className="text-left">{item.name}</p>
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        width={20}
                        height={20}
                        className={`${
                          open ? "rotate-180 transform" : "rotate-90"
                        }
                                            `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-[#CFAA7D] flex flex-col text-center text-[#282828] p-4">
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

export default TrabalhistaServices;
