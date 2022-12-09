import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";

function Header() {
    const [top, setTop] = useState(true);

    //items added to the arrays below will be displayed simultaneously on desktop and mobile
    const navigation = [
        { name: "Página Inicial", href: "/", as: "/" },
        {
            name: "Áreas de Atuação",
            href: "/#areas-de-atuacao",
            as: "/#areas-de-atuacao",
            scroll: false,
        },
        { name: "Equipe", href: "/team", as: "/equipe" },
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
            className={`fixed w-full  bg-white py-3 lg:py-3  md:px-10 2xl:px-0 z-40 uppercase text-sm  lg:px-10  xl:text-base transition duration-300 ease-in-out 
            ${!top && "bg-opacity-90 backdrop-blur-sm shadow-lg"}
      `}
        >
            <div
                className={`mx-auto max-w-[1360px] flex items-center  px-5 lg:px-0 h-full   `}
            >
                <nav className=" flex items-center lg:justify-between h-full w-full">
                    <div className="flex items-center w-full justify-between flex-shrink-0 lg:w-min  lg:flex-grow-0 h-full ">
                        <Link
                            className="flex items-center justify-start gap-3"
                            href="/"
                        >
                            <div className="relative w-[150px] h-[60px] lg:w-[250px] lg:h-[100px]">
                                <Image src={"/logo.png"} alt={"Logo"} fill />
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
