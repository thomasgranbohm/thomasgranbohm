import React, { HTMLAttributes, ReactNode } from "react";
import concatClasses from "../../functions/concatClasses";
import { Breakpoints } from "../../functions/useBreakpoint";
import classes from "./Icon.module.scss";
import { IconNames, Icons } from "./IconContent";

export type IconProps = {
	content: string;
	fillColor?: string;
	focus?: boolean;
	title: string;
	viewBox?: string;
} & HTMLAttributes<SVGElement>;

export const Icon: React.FC<IconProps> = ({
	className,
	content,
	fillColor,
	focus,
	title,
	viewBox,
	...props
}) => {
	return (
		<svg
			className={concatClasses(
				classes["icon"],
				[className, className],
				[classes["focus"], focus]
			)}
			fill={fillColor}
			viewBox={viewBox || "0 0 24 24"}
			tabIndex={!focus ? 0 : undefined}
			height={24}
			width={24}
			dangerouslySetInnerHTML={{ __html: `<title>${title}</title>${content}` }}
			{...props}
		></svg>
	);
};
