import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

// import Logo from "../assets/logo.svg";

// import { DiscordLogo } from "../assets/svg/SocialLogos";
// import { TwitterLogo } from "../assets/svg/SocialLogos";

import Navbar from "./Navigation/Navbar";
import NavbarMobile from "./Navigation/NavbarMobile";
import Image from "next/image";

function Header() {
    const [top, setTop] = useState(true);

    //items added to the arrays below will be displayed simultaneously on desktop and mobile
    const navigation = [
        { name: "Página Inicial", href: "/", as: "/" },
        {
            name: "Áreas de Atuação",
            href: "#areas-de-atuacao",
            as: "/areas-de-atuação",
        },
        { name: "Equipe", href: "/equipe", as: "/equipe" },
        { name: "contato", href: "/contato", as: "/contato" },
    ];

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header
            className={`fixed w-full  py-3 lg:py-0  md:px-10 2xl:px-0 z-50 uppercase text-sm lg:top-4 lg:px-10  xl:text-base 
      }`}
        >
            <div
                className={`mx-auto max-w-[1360px] flex items-center  px-5 lg:px-0 h-full  transition duration-300 ease-in-out 
      ${!top && "bg-opacity-90 backdrop-blur-sm shadow-lg"} `}
            >
                <nav className=" flex items-center lg:justify-between h-full w-full">
                    <div className="flex items-center w-full justify-between flex-shrink-0 lg:w-min  lg:flex-grow-0 h-full ">
                        <Link
                            className="flex items-center justify-start gap-3"
                            href="/"
                        >
                            <div className="w-max">
                                <Image
                                    src={"/logo.png"}
                                    alt={"Logo"}
                                    width={300}
                                    height={600}
                                />
                            </div>
                        </Link>

                        {/* Mobile */}

                        <NavbarMobile navigation={navigation} />
                    </div>

                    {/* Desktop */}

                    <Navbar navigation={navigation} />
                </nav>
            </div>
        </header>
    );
}

export default Header;
