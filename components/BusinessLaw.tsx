import { Disclosure } from "@headlessui/react";
import { isTemplateExpression } from "typescript";
import {
  Assistente,
  Cobranca,
  Comuns,
  Comuns2,
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
  UniaoEstavel,
} from "./SVG/Icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function BusinessLaw() {
  const direitoCivil = [
    {
      name: "Atuação em demandas judiciais",
      icon: <Comuns fill="#fff" />,
      text: "Elaboração de processos e defesas que envolvam qualquer atividade relacionada à empresa.",
    },
    {
      name: "Contratos",
      icon: <Contratos />,
      text: "Proteção jurídica: cláusulas defensivas em direito civil e trabalhista para sua empresa.",
    },
    {
      name: "Assessoria jurídica",
      icon: <Comuns2 />,
      text: "Atuação contenciosa e assessoria jurídica essencial para o crescimento saudável da empresa.",
    },
    {
      name: "Trâmites em órgãos administrativos",
      icon: <Assistente />,
      text: "Agilizamos trâmites em órgãos reguladores, Receita Federal, Detran, Juntas Comerciais, assegurando funcionamento regular.",
    },
    {
      name: "Cobranças:",
      icon: <Cobranca />,
      text: "Tanto as cobranças extrajudiciais quanto as judiciais, visando sempre agilidade no pagamento.",
    },
    {
      name: "Direito Trabalhista",
      icon: <Comuns2 />,
      text: "Defesas judiciais, acordos e assessoria para cumprir normas específicas na atividade empresarial.",
    },
    {
      name: "Tributário",
      icon: <Cobranca />,
      text: "Diligências na Receita Federal e auxílio nos tributos devidos pela empresa.",
    },
    {
      name: "Atuação personalizada",
      icon: <Contratos />,
      text: "Assessoria em Sociedades, Recuperação Judicial, Contratos Bancários, Marcas, Abertura de Empresas e mais.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div id="ver-mais" className="absolute -top-28"></div>
        <div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5 text-[#CFAA7D]">
          <h2 className="text-3xl sm:text-5xl font-bold text-center max-w-full">
            Áreas de atuação do Advogado Empresarial
          </h2>

          <div className="hidden lg:grid grid-cols-4 gap-10 place-items-center">
            {direitoCivil.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center
                 bg-[#28] border border-[#cfaa7d] hover:border-[#CFAA7D] drop-shadow hover:drop-shadow-xl transition 
                 duration-300 ease-in-out text-[#cfaa7d]"
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
                    gap-4 px-4 hover:border-[#ffaa00] bg-[#3a563f] text-[#CFAA7D] fill-[#CFAA7D]"
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

export default BusinessLaw;
