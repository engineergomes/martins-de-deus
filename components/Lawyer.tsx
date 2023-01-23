import Image from "next/image";
import { ReactNode } from "react";
// import { } from "react";

interface lawyerProps {
    name: string;
    oab: string;
    imgSrc: string;
    graduation: string;
    pos?: ReactNode;
    about: string;
}

function Lawyer({ name, oab, imgSrc, graduation, pos, about }: lawyerProps) {
    return (
        <div className="mx-auto max-w-[1360px] bg-[#3a563f]  px-16 py-8 flex flex-col lg:flex-row gap-10 lg:gap-20 drop-shadow-xl rounded">
            <div className="flex flex-col whitespace-nowrap text-center gap-6 items-center justify-center">
                <Image
                    className="rounded-full drop-shadow-xl"
                    src={imgSrc}
                    alt={name}
                    width={300}
                    height={300}
                />
            </div>

            <div className="flex flex-col gap-6 justify-center ">
                <div className="flex flex-col">
                    <h1 className="text-3xl text-[#d5a675] font-bold uppercase">
                        {name}
                    </h1>
                    <div className="text-xs flex flex-col gap-1 text-[#d5a675]/70">
                        <p>{oab}</p>
                        <p>{graduation}</p>
                        {pos && <>{pos}</>}
                    </div>
                </div>
                <p className="max-w-xl mx-auto text-[#d5a675]/80">{about}</p>
            </div>
        </div>
    );
}

export default Lawyer;
