import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { Breakpoints } from "../../functions/useBreakpoint";
import classes from "./Icon.module.scss";
import { IconNames, Icons } from "./IconContent";

export type IconProps = {
	name: IconNames;
	focus?: boolean;
} & HTMLAttributes<SVGElement>;

export const Icon: React.FC<IconProps> = ({
	className,
	focus,
	name,
	...props
}) => {
	const { content, fillColor, viewBox } = Icons[name];

	return (
		<svg
			className={concatClasses(
				classes["icon"],
				[className, className],
				[classes["focus"], focus]
			)}
			fill={fillColor && `#${fillColor}`}
			viewBox={viewBox || "0 0 24 24"}
			height={24}
			width={24}
			{...props}
		>
			{content}
		</svg>
	);
};
