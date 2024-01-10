import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { MutableRefObject } from "react";

interface disclosureMenuProps {
	items: { name: string; href: string; as: string }[];
	onClick?: any;
}

function DisclosureMenu({ items, onClick }: disclosureMenuProps) {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex items-center text-[#3a563f] text-lg font-semibold transition duration-300 ease-linear px-6">
							<p>Áreas de Atuação</p>
							<FontAwesomeIcon
								icon={faCaretUp}
								width={20}
								height={20}
								className={`${
									open ? "rotate-180 transform" : "rotate-90"
								} fill-[#3a563f] `}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="bg-[#CFAA7D] flex flex-col text-center gap-2 pt-2 px-6 ml-2">
							{items.map((item) => (
								<div className="" key={item.name}>
									<Link href={item.href} as={item.as}>
										<button
											className={` group flex w-full items-center rounded-md px-2 py-2 text-base text-[#3a563f] text-md font-regular transition duration-200 ease-linear `}
											onClick={() => {
												onClick();
											}}
										>
											{item.name}
										</button>
									</Link>
								</div>
							))}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
}

export default DisclosureMenu;
