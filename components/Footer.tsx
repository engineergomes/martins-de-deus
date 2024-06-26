import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useWindow } from "../hooks/useWindow";

function Footer() {
  const date = new Date();
  const { isMobile } = useWindow();

  return (
    <div
      className="bg-[#FDFDFD] pt-10 pb-3 flex flex-col gap-6 px-5 border-t-2 border-[#CFAA7D] bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: isMobile ? "" : `url('./bg-effect-footer.png')`,
      }}
    >
      <div className="mx-auto max-w-[1360px] flex flex-col justify-center lg:flex-row lg:justify-around lg:w-full gap-3 lg:gap-0">
        <div className="flex flex-col justify-between gap-2 lg:gap-0 text-black ">
          <h2 className="text-3xl font-bold ">Fale Conosco</h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/5548984727432"
              target="_blank"
              rel="noreferrer"
              className=" flex items-center justify-start gap-[6px]"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-[26px] h-[26px] text-[#CFAA7D]"
              />{" "}
              (48) 9 8472-7432
            </a>
            <a
              href="tel:+554833743278"
              className=" flex items-center justify-start gap-2"
            >
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 text-[#CFAA7D]"
              />{" "}
              (48) 3374-3278
            </a>
            <a
              href="mailto:contato@deuseaguiar.com.br"
              target="_blank"
              rel="noreferrer"
              className=" flex items-center justify-start gap-2"
            >
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 text-[#CFAA7D]"
              />{" "}
              contato@deuseaguiar.com.br
            </a>
          </div>

          <a
            href="https://www.instagram.com/deuseaguiar/"
            target="_blank"
            rel="noreferrer"
            className=" flex items-center justify-start gap-[6px]"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-7 h-7 lg:h-10 lg:w-10 -m-[2px] text-[#CFAA7D]"
            />
            deuseaguiar
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://goo.gl/maps/A688qBWsfSdSLJ5u7"
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 items-center"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="h-8 w-8 text-red-600"
            />
            <p>
              Av. Atílio Pedro Pagani, 115, sala 1602, <br />
              Pagani, Palhoça - SC
            </p>
          </a>
          <div className="flex items-center justify-center lg:items-start lg:justify-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56550.51745633859!2d-48.7122058!3d-27.6428663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa89db6af88d58e3d!2sManuela%20Martins%20-%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1669908379365!5m2!1spt-BR!2sbr"
              width={"360"}
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <p className="text-center text-xs">
        {`©${date.getFullYear()} por Deus e Aguiar Advocacia - Santa Catarina,
                Brasil`}
      </p>
    </div>
  );
}

export default Footer;
