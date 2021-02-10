import React, { HTMLAttributes } from "react";
import concatClasses from "src/functions/concatClasses";
import classes from "./Heading.module.scss";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
	type: HeadingTypes;
} & HTMLAttributes<HTMLElement>;

export const Heading: React.FC<HeadingProps> = ({
	className,
	children,
	type,
	...props
}: HeadingProps) => {
	const Hx = type;
	return (
		<Hx
			className={concatClasses(classes["heading"], [
				className,
				className,
			])}
			{...props}
		>
			{children}
		</Hx>
	);
};
