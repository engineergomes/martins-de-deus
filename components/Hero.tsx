import Image from "next/image";
import { CleanButton } from "./CleanButton";

function Hero() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-b border-[#CFAA7D] relative h-full"
        style={{ backgroundImage: `url('./bg-effect.png')` }}
      >
        <div className="max-w-[1360px] px-5 flex flex-col items-center justify-between h-full gap-4 lg:gap-6 pt-5 ">
          <div className="text-[#CFAA7D] lg:w-1/2 gap-5 flex flex-col text-center">
            <h1 className="text-3xl lg:text-5xl w-full">
              Defendendo seus interesses com excelência
            </h1>
            <h2 className="text-white lg:text-lg">
              O Escritório Deus e Aguiar Advocacia é composto por profissionais
              especializados, éticos e engajados, preocupados em entregar muito
              mais do que somente soluções jurídicas, mas, principalmente,
              confiança e tranquilidade para as pessoas e empresas assessoradas.
            </h2>
          </div>
          <CleanButton
            text={"ENTRAR EM CONTATO"}
            href={
              "https://api.whatsapp.com/send/?phone=5548984727432&text&type=phone_number&app_absent=0"
            }
            whatsapp={false}
          />
          <div className="lg:-mt-6 mt-7 flex items-end justify-center h-full w-full ">
            <div className="goldenEffect absolute w-full h-32 lg:h-1/2 z-0 opacity-30 bottom-0 left-0"></div>
            <Image
              data-aos="fade-left"
              src="/index-image.png"
              alt="Advogados"
              width={1242}
              height={516}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
