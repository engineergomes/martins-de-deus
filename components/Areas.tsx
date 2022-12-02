import Image from "next/image";
import { Fragment, useState } from "react";
import AreaModal from "./AreaModal";
import { areas } from "./Configs/ModalTexts";

function Areas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, setState] = useState("");

    return (
        <div className="relative">
            <div
                id="areas-de-atuacao"
                className="h-1 w-1 absolute -top-32"
            ></div>
            <div className="flex flex-col gap-8">
                <h2 className="text-[#D3AC5C] w-full text-center text-3xl font-bold">
                    Areas de Atuação
                </h2>
                <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-6">
                    {areas.map((item, index) => (
                        <Fragment key={index}>
                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setState(item.name);
                                }}
                                className="flex flex-col items-center justify-center gap-3 bg-[#fafafa] w-full h-full py-8 border border-transparent hover:border-[#D3AC5C] hover:drop-shadow-xl transition duration-300 ease-in-out"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={65}
                                    height={65}
                                />
                                <p className="text-center text-[#D3AC5C]">
                                    {item.name}
                                </p>
                            </button>
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
