import { Dispatch, Key, SetStateAction, useMemo } from "react";

import Link from "next/link";

import { Popover, Transition, Switch } from "@headlessui/react";

interface navbarProps {
    navigation: {
        name: string;
        href: string;
        as: string;
        scroll?: boolean;
    }[];
}

function Navbar({ navigation }: navbarProps) {
    return (
        <>
            <div className="hidden lg:flex lg:space-x-10 h-full">
                {navigation.map((item) => (
                    <button key={item.name}>
                        <Link
                            href={item.href}
                            as={item.as}
                            className="text-[#D3AC5C] hover:text-[#D3AC5C] text-md font-semibold transition duration-300 ease-linear "
                            scroll={item.scroll}
                        >
                            {item.name}
                        </Link>
                    </button>
                ))}
            </div>
        </>
    );
}

export default Navbar;
