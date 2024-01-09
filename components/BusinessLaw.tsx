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
      name: "Elaboração e revisão de contratos",
      icon: <Contratos />,
      text: "Seja qual for a área de sua empresa, nosso time jurídico possui especialistas tanto do direito civil quanto do direito trabalhista para analisar e redigir cláusulas que melhor defendam o interesse da empresa.",
    },
    {
      name: "Assessoria jurídica completa",
      icon: <Comuns2 />,
      text: "Além da atuação no contencioso, a assessoria jurídica cotidiana é vital para um crescimento saudável da empresa.",
    },
    {
      name: "Trâmites em órgãos administrativos",
      icon: <Assistente />,
      text: "Também realizamos trâmites nas agências reguladoras de diversas áreas empresariais, além de órgãos como a Receita Federal, Detran, Juntas Comerciais e qualquer outro órgão necessário para o regular funcionamento dos nossos clientes.",
    },
    {
      name: "Cobranças:",
      icon: <Cobranca />,
      text: "Tanto as cobranças extrajudiciais quanto as judiciais, visando sempre agilidade no pagamento.",
    },
    {
      name: "Direito Trabalhista",
      icon: <Comuns2 />,
      text: "Realização de defesas judiciais, elaboração de acordos com os funcionários e assessoria quanto ao cumprimento das normas específicas sobre a atividade da empresa.",
    },
    {
      name: "Tributário",
      icon: <Cobranca />,
      text: "Diligências na Receita Federal e auxílio nos tributos devidos pela empresa.",
    },
    {
      name: "Atuação personalizada para diversos atos",
      icon: <Contratos />,
      text: "Elaboração e Dissolução de Sociedades, Recuperação Judicial e Falência, Contratos Bancários, Marcas e Patentes, Abertura e estruturação de empresas, Arbitragem Empresarial, Incorporações, Fusões e Aquisições, entre outras atividades.",
    },
  ];

  return (
    <>
      <div className="relative">
        <div id="ver-mais" className="absolute -top-28"></div>
        <div className="flex flex-col max-w-[1360px] mx-auto gap-10 items-center justify-center px-5 text-[#d5a675]">
          <h2 className="text-3xl sm:text-5xl font-bold text-center max-w-full">
            Áreas de atuação do Advogado Empresarial
          </h2>

          <div className="hidden lg:grid grid-cols-4 gap-10 place-items-center">
            {direitoCivil.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 grid-rows-[1fr,1fr,1fr] gap-0 rounded p-5 lg:p-10 w-full h-full place-items-center bg-[#fafafa] border border-transparent hover:border-[#d5a675] drop-shadow hover:drop-shadow-xl transition duration-300 ease-in-out"
              >
                <div className="h-16 w-16 lg:h-24 lg:w-24 fill-[#d5a675] relative">
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
                    <Disclosure.Button className="grid grid-cols-[1fr,10fr,1fr]  items-center rounded py-4 border-2 gap-4 px-4 hover:border-[#ffaa00] bg-[#3a563f] text-[#d5a675] fill-[#d5a675]">
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
                    <Disclosure.Panel className="bg-[#d5a675] flex flex-col text-center p-4">
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
