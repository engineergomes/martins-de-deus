import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

/** @description - This will handle the window dimensions */
export function useDimensions() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const isDesktop = useMediaQuery({ query: "(min-width: 640px)" });

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        window.onresize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
    }, []);

    return {
        isDesktop,
        width,
        height,
    };
}
