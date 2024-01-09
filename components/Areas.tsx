import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import AreaModal from "./AreaModal";
import { areas } from "./Configs/ModalTexts";

function Areas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState("");

  return (
    <div className="relative">
      <div id="areas-de-atuacao" className="h-1 w-1 absolute -top-32"></div>
      <div className="flex flex-col gap-8">
        <h2 className="text-[#d5a675] w-full text-center text-3xl font-bold">
          Áreas de Atuação
        </h2>
        <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 place-items-center gap-6">
          {areas.map((item, index) => (
            <Fragment key={index}>
              {item.hasAds ? (
                <Link
                  className="flex flex-col items-center justify-center gap-3 bg-[#3a563f] w-full h-full py-8 border-4 border-transparent hover:border-[#d5a675] drop-shadow  hover:drop-shadow-2xl transition duration-300 ease-in-out rounded"
                  href={item.href}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={65}
                    height={65}
                  />
                  <p className="text-center text-[#d5a675]">{item.name}</p>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setState(item.name);
                  }}
                  className="flex flex-col items-center justify-center gap-3 bg-[#3a563f] w-full h-full py-8 border-4 border-transparent hover:border-[#d5a675] drop-shadow  hover:drop-shadow-2xl transition duration-300 ease-in-out rounded"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={65}
                    height={65}
                  />
                  <p className="text-center text-[#d5a675]">{item.name}</p>
                </button>
              )}
              <AreaModal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                title={item.title}
                text={item.text}
                panelOpen={item.name == state}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Areas;
