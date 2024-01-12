import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Widget() {
	return (
		<>
			<a
				href="https://wa.me/5548984727432"
				target="_blank"
				rel="noreferrer"
				className="shaking bg-[#CFAA7D] rounded-full p-3 lg:p-5 text-[#282828] items-center flex group fixed bottom-5 right-5 lg:bottom-10 lg:right-10 drop-shadow-xl z-50"
			>
				<FontAwesomeIcon icon={faWhatsapp} height={36} width={36} />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700 whitespace-nowrap">
					&nbsp;Converse agora!
				</span>
			</a>
		</>
	);
}
