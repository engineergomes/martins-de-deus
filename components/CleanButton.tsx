import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CleanButton = (props: {
  text: string;
  href: string;
  whatsapp: boolean;
}) => {
  return (
    <a href={props.href} target="_blank">
      <div className="text-white flex rounded-full border-2 border-[#d5a675] p-3 px-14 gap-x-2 font-semibold hover:opacity-80 items-center">
        {props.whatsapp && (
          <FontAwesomeIcon icon={faWhatsapp} width={28} height={28} />
        )}
        {props.text}
      </div>
    </a>
  );
};
