import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CleanButton = (props: {
	text: string;
	href: string;
	whatsapp: boolean;
}) => {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">
			<div className="text-white flex rounded-full border-2 border-[#CFAA7D] text-sm lg:text-base p-3 px-14 gap-x-2 font-semibold transition-all duration-300 items-center hover:bg-[#CFAA7D] hover:text-[#282828] whitespace-nowrap">
				{props.whatsapp && (
					<FontAwesomeIcon icon={faWhatsapp} width={28} height={28} />
				)}
				{props.text}
			</div>
		</a>
	);
};
