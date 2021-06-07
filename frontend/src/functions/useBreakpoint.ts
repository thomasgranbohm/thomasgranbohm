import { useEffect, useState } from "react";
import useWindow from "./useWindow";

export type Breakpoints =
	| "mobile"
	| "tablet-small"
	| "tablet-big"
	| "desktop-small"
	| "desktop-big";

const useBreakpoint = () => {
	const { width } = useWindow();

	const [breakpoint, setBreakpoint] = useState<Breakpoints>("mobile");

	useEffect(() => {
		if (width < 600) setBreakpoint("mobile");
		else if (width >= 600 && width < 768) setBreakpoint("tablet-small");
		else if (width >= 768 && width < 992) setBreakpoint("tablet-big");
		else if (width >= 992 && width < 1200) setBreakpoint("desktop-small");
		else if (width >= 1200) setBreakpoint("desktop-big");
	}, [width]);

	return breakpoint;
};

export default useBreakpoint;
