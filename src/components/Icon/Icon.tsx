import React, { HTMLAttributes, useRef } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Icon.module.scss";
import { IconNames, Icons } from "./IconContent";

export type IconProps = {
	name: IconNames;
} & HTMLAttributes<SVGElement>;

export const Icon: React.FC<IconProps> = ({ className, name, ...props }) => {
	const { content, fillColor } = Icons[name];
	const ref = useRef<SVGSVGElement>(null);

	return (
		<svg
			className={concatClasses(classes["icon"], [className, className])}
			fill={fillColor && `#${fillColor}`}
			ref={ref}
			viewBox="0 0 24 24"
			{...props}
		>
			{content}
		</svg>
	);
};
