import { Dispatch, Key, SetStateAction, useMemo, Fragment } from "react";

import Link from "next/link";

import { Popover, Transition, Switch, Menu } from "@headlessui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";

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
            <div className="hidden lg:flex lg:space-x-10 h-full">
                {navigation.map((item) => (
                    <div key={item.name}>
                        {!item.dropdown ? (
                            <button>
                                <Link
                                    href={item.href}
                                    as={item.as}
                                    className="text-[#d5a675] hover:text-[#d5a675] text-md font-semibold transition duration-300 ease-linear "
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
            </div>
        </>
    );
}

export default Navbar;
