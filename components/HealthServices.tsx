import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import {
  Assistente,
  Comuns,
  Comuns2,
  DanosMateriais,
  Demora,
  DireitoMedico,
  DivorcioLitigioso,
  DivorciosExtrajudicial,
  Drogas,
  Flagrante,
  GuardaDosFilhos,
  Hospital,
  PartilhaDeBens,
  PensaoAlimenticia,
  Privado,
  Sucessoes,
  Tribunal,
  UniaoEstavel,
} from "./SVG/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function HealthServices() {
  const direitoCriminal = [
    {
      name: "Planos de Saúde",
      icon: <Privado />,
      text: "Nosso time de profissionais atua em casos onde seu plano nega um pedido realizado pelo seu médico.",
    },
    {
      name: "SUS",
      icon: <Hospital />,
      text: "Também atuamos nas demandas onde o SUS nega o tratamento ou demora demais para realizar.",
    },
    {
      name: "Fornecimento de medicamentos",
      icon: <Drogas />,
      text: "Caso tenha sido receitado um medicamento para você, mas ou o plano de saúde ou o SUS se neguem a fornecer, entre em contato.",
    },
    {
      name: "Realização de tratamentos, procedimentos ou cirurgias",
      icon: <DireitoMedico />,
      text: "Caso você precise realizar um tratamento, procedimento ou cirurgia, mas tenha o pedido negado por algum motivo, buscamos solução rápida para você.",
    },
    {
      name: "Erro Médico.",
      icon: <Assistente />,
      text: "Em casos onde existiram falhas nos profissionais da saúde que lhe atenderam, seja no momento da cirurgia ou da prescrição de algum medicamento.",
    },
    {
      name: "Demora excessiva",
      icon: <Demora />,
      text: "Caso você precise do tratamento com urgência, entre em contato para entender seus direitos.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div id="ver-mais" className="absolute -top-28"></div>
        <div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-[#CFAA7D] max-w-full">
            Áreas de atuação do Advogado de Saúde
          </h2>

          <div className="hidden lg:grid grid-cols-4 gap-10 place-items-center">
            {direitoCriminal.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-[2fr,2fr,3fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center
                 bg-[#282828] text-[#cfaa7d] fill-[#CFAA7D] border-4 border-[#cfaa7d] hover:border-[#CFAA7D] drop-shadow 
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
            {direitoCriminal.map((item, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 
                    px-4 hover:border-[#ffaa00] bg-[#424530] text-[#CFAA7D] fill-[#CFAA7D]"
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
                    <Disclosure.Panel className="bg-[#CFAA7D] flex flex-col text-[#282828] text-center p-4">
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

export default HealthServices;
