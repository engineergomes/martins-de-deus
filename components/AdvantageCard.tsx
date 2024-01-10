import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface advantageCardProps {
	icon: IconProp;
	title: string;
	text: string;
}

function AdvantageCard({ title, icon, text }: advantageCardProps) {
	return (
		<>
			<div className="grid gap-3 grid-cols-[1fr,6fr] max-w-sm">
				<div className="row-span-2 flex items-center justify-center">
					<FontAwesomeIcon
						icon={icon}
						className="w-20 h-20 text-[#CFAA7D]"
					/>
				</div>
				<h2 className="font-bold">{title}</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
export default AdvantageCard;
