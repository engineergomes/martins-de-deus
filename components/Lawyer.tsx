import Image from "next/image";
interface lawyerProps {
    name: string;
    oab: string;
    imgSrc: string;
    graduation: string;
    pos?: string;
    about: string;
}

function Lawyer({ name, oab, imgSrc, graduation, pos, about }: lawyerProps) {
    return (
        <div className="mx-auto max-w-[1360px] bg-white  px-16 py-8 flex flex-col lg:flex-row gap-20 drop-shadow-xl">
            <div className="flex flex-col whitespace-nowrap text-center gap-6 items-center justify-center">
                <Image
                    className="rounded-full drop-shadow-xl"
                    src={imgSrc}
                    alt={name}
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-2"></div>
            </div>

            <div className="flex flex-col gap-8 justify-center ">
                <div className="flex flex-col">
                    <h1 className="text-3xl text-[#D3AC5C] font-bold">
                        {name}
                    </h1>
                    <div className="text-xs flex flex-col gap-1">
                        <p>{oab}</p>
                        <p>{graduation}</p>
                        {pos && <p>{pos}</p>}
                    </div>
                </div>
                <p className="max-w-xl mx-auto">{about}</p>
            </div>
        </div>
    );
}

export default Lawyer;
