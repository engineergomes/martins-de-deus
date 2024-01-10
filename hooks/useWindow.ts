import { useEffect, useState } from "react";

/**
 *
 * @param breakpoint - The threshold at which the window size is considered mobile.
 * @returns {object} - An object containing the windowSize and isMobile properties.
 * @property {number | undefined} windowSize - The current window size.
 * @property {boolean} isMobile - Indicates whether the window is considered mobile based on the breakpoint.
 */
export function useWindow(breakpoint = 1024): {
	windowSize: number | undefined;
	isMobile: boolean;
} {
	const [windowSize, setWindowSize] = useState<number | undefined>();

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowSize(window.innerWidth);
			const handleResize = () => setWindowSize(window.innerWidth);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return {
		isMobile: windowSize ? windowSize < breakpoint : false,
		windowSize,
	};
}
