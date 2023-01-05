import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

interface disclosureMenuProps {
    items: { name: string; href: string; as: string }[];
}

function DisclosureMenu({ items }: disclosureMenuProps) {
    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center text-[#3a563f] text-md font-semibold transition duration-300 ease-linear ">
                            <p>Areas de Atuação</p>
                            <FontAwesomeIcon
                                icon={faCaretUp}
                                width={20}
                                height={20}
                                className={`${
                                    open ? "rotate-180 transform" : "rotate-90"
                                } fill-[#3a563f] `}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="bg-[#d5a675] flex flex-col text-center ß">
                            {items.map((item) => (
                                <div className="" key={item.name}>
                                    <Link href={item.href} as={item.as}>
                                        <button
                                            className={` group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#3a563f] text-md font-semibold transition duration-200 ease-linear `}
                                        >
                                            - {item.name}
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
