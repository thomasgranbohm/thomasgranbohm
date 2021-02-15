import React, { HTMLAttributes, useRef } from "react";
import concatClasses from "../../functions/concatClasses";
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
	const { content, fillColor } = Icons[name];

	return (
		<svg
			className={concatClasses(
				classes["icon"],
				[className, className],
				[classes["focus"], focus]
			)}
			fill={fillColor && `#${fillColor}`}
			viewBox="0 0 24 24"
			{...props}
		>
			{content}
		</svg>
	);
};
