import { Dispatch, Key, SetStateAction, useMemo, Fragment } from "react";

import Link from "next/link";

import { Popover, Transition, Switch, Menu } from "@headlessui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface navbarProps {
	navigation: {
		name: string;
		href: string;
		as: string;
		scroll?: boolean;
		dropdown?: { name: string; href: string; as: string }[];
	}[];
}

function Navbar({ navigation }: navbarProps) {
	return (
		<>
			<div className="hidden lg:flex lg:space-x-10 h-full items-center justify-center">
				{navigation.map((item) => (
					<div key={item.name}>
						{!item.dropdown ? (
							<button>
								<Link
									href={item.href}
									as={item.as}
									className="text-[#CFAA7D] hover:text-[#CFAA7D] text-md font-semibold transition-all duration-300  hover:brightness-125"
									scroll={item.scroll}
								>
									{item.name}
								</Link>
							</button>
						) : (
							<DropdownMenu items={item.dropdown} />
						)}
					</div>
				))}
				<a
					href="https://wa.me/5548984727432"
					target="_blank"
					rel="noreferrer"
					className=" bg-[#CFAA7D] rounded-full p-1  text-[#282828] items-center flex h-10 w-10 justify-center transition-all duration-300 hover:brightness-125"
				>
					<FontAwesomeIcon icon={faWhatsapp} height={24} width={24} />
				</a>
			</div>
		</>
	);
}

export default Navbar;
