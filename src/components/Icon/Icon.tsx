import React, { HTMLAttributes, useEffect, useRef } from "react";
import classes from "./Icon.module.scss";
import { IconNames, Icons } from "../../icons";

type IconProps = {
	iconName: IconNames;
} & HTMLAttributes<SVGSVGElement>;

export const Icon = ({ iconName, className, ...props }: IconProps) => {
	const ref = useRef<SVGSVGElement>(null);
	const icon = Icons[iconName.toLowerCase() as IconNames];

	useEffect(() => {
		if (ref && ref.current && icon && icon.fillColor) {
			const { fillColor } = icon;
			ref.current.style.setProperty("--hover-color", `#${fillColor}`);
		}
	}, [icon]);

	return (
		<svg
			className={[classes["icon"], className || ""].join(" ")}
			ref={ref}
			role="img"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			{Icons[iconName].content}
		</svg>
	);
};
