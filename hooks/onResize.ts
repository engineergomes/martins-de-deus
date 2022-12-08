import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

/** @description - This will handle the window dimensions */
export function useDimensions() {
    const [width, setWidth] = useState(1080);
    const [height, setHeight] = useState(1080);

    const isDesktop = useMediaQuery({ query: "(min-width: 640px)" });

    useEffect(() => {
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
