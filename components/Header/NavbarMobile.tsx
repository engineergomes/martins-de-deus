import { Popover, Switch, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faTelegram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
    faBars,
    faLocationDot,
    faCalendarDays,
    faEnvelopeOpenText,
    faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";
import DisclosureMenu from "./DisclosureMenu";

// import Bars from "../../assets/bars.svg";
// import Logo from "../../assets/logo.svg";

interface NavbarMobileProps {
    navigation: {
        name: string;
        href: string;
        as: string;
        scroll?: boolean;
        dropdown?: { name: string; href: string; as: string }[];
    }[];
}

function NavbarMobile({ navigation }: NavbarMobileProps) {
    return (
        <>
            <Popover>
                <div className="flex gap-2 sm:gap-8">
                    <div className="flex items-center lg:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center border border-[#d5a675] text-[#d5a675] hover:border-2 h-10 w-10">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="h-5 w-5"
                            />
                        </Popover.Button>
                    </div>
                </div>
                {/* Mobile Dropdown*/}
                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel className="absolute z-10 -top-0 left-0  transition transform origin-top-left  lg:hidden ">
                        {({ close }) => (
                            <div className=" shadow-md rounded-br-[10px] overflow-hidden bg-[#d5a675] pt-4 w-[82vw] h-[100vh]">
                                <div
                                    className="px-5 pt-4 flex items-center justify-between"
                                    onClick={() => close()}
                                >
                                    <Link
                                        href="/"
                                        className="flex items-center justify-center gap-3 w-full"
                                    >
                                        <Image
                                            src={"/logo-mobile.png"}
                                            alt={"Logo"}
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <div className="flex flex-col px-8 pt-2 pb-2  items-start gap-5 mt-7 w-full">
                                    {navigation.map((item) => (
                                        <div key={item.name}>
                                            {!item.dropdown ? (
                                                <Link
                                                    href={item.href}
                                                    as={item.as}
                                                    scroll={item.scroll}
                                                >
                                                    <button
                                                        className="text-[#3a563f] text-lg font-semibold transition duration-300 ease-linear px-6"
                                                        onClick={() => close()}
                                                    >
                                                        {item.name}
                                                    </button>
                                                </Link>
                                            ) : (
                                                <DisclosureMenu
                                                    items={item.dropdown}
                                                    onClick={() => close()}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
}

export default NavbarMobile;
