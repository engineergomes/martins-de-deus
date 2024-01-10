import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface dropdownMenuProps {
	items: { name: string; href: string; as: string }[];
}

function DropdownMenu({ items }: dropdownMenuProps) {
	return (
		<>
			<Menu
				as="div"
				className="relative flex items-center justify-center text-left"
			>
				<div>
					<Menu.Button className="text-[#CFAA7D] hover:text-[#CFAA7D] text-md font-semibold transition-all duration-300 hover:brightness-125 flex items-center justify-center gap-1 ">
						<p>Áreas de Atuação</p>
						<FontAwesomeIcon
							icon={faAngleDown}
							width={12}
							height={12}
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute top-5 right-1 mt-2 whitespace-nowrap origin-top-right divide-y divide-[#B6BBB9] rounded-md bg-[#FDFDFD] shadow-lg focus:outline-none z-[100] overflow-hidden">
						{items.map((item) => (
							<div className=" " key={item.name}>
								<Menu.Item>
									{({ active }) => (
										<Link href={item.href} as={item.as}>
											<button
												className={`${
													active
														? "bg-[#CFAA7D] "
														: ""
												} group flex w-full items-center text-[#282828] pl-3 pr-5 py-3 text-sm  text-md font-semibold transition duration-200 ease-linear `}
											>
												{item.name}
											</button>
										</Link>
									)}
								</Menu.Item>
							</div>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	);
}

export default DropdownMenu;
