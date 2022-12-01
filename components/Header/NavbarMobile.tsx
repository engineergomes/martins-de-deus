import { Popover, Switch, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
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

// import Bars from "../../assets/bars.svg";
// import Logo from "../../assets/logo.svg";

interface NavbarMobileProps {
    navigation: {
        name: string;
        href: string;
        as: string;
    }[];
}

function NavbarMobile({ navigation }: NavbarMobileProps) {
    return (
        <>
            <Popover>
                <div className="flex gap-2 sm:gap-8">
                    <div className="flex items-center lg:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center border border-[#D9D9D9] hover:text-gray-500 h-10 w-10">
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
                            <div className=" shadow-md rounded-br-[10px]  ring-1 ring-black ring-opacity-5 overflow-hidden bg-[#EDA937] pt-4 w-[85vw] h-[100vh]">
                                <div
                                    className="px-5 pt-4 flex items-center justify-between"
                                    onClick={() => close()}
                                >
                                    <Link
                                        href="/"
                                        className="flex items-center justify-center gap-3"
                                    >
                                        LOGO
                                    </Link>
                                </div>
                                <div
                                    className="flex flex-col px-8 pt-2 pb-2  items-start gap-2 mt-7 w-full"
                                    onClick={() => close()}
                                >
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            as={item.as}
                                        >
                                            {item.name}
                                        </Link>
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
