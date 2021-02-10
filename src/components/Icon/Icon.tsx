import React, { HTMLAttributes, useEffect, useRef } from "react";
import concatClasses from "src/functions/concatClasses";
import classes from "./Icon.module.scss";
import { IconNames, Icons } from "./IconContent";

export type IconProps = {
	name: IconNames;
} & HTMLAttributes<SVGElement>;

export const Icon: React.FC<IconProps> = ({ className, name, ...props }) => {
	const { content, fillColor } = Icons[name];
	const ref = useRef<SVGSVGElement>(null);
	useEffect(() => {
		const rgb = fillColor
			.match(/.{1,2}/g)
			?.map((hexPair) => parseInt(hexPair, 16)) || [0, 0, 0];

		if (rgb.reduce((a, b) => a + b, 0) / rgb.length <= 30)
			ref.current?.setAttribute("fill", classes.text);
		else ref.current?.setAttribute("fill", `#${fillColor}`);
	}, [fillColor, ref]);

	return (
		<svg
			className={concatClasses(classes["icon"], [className, className])}
			ref={ref}
			viewBox="0 0 24 24"
			{...props}
		>
			{content}
		</svg>
	);
};
