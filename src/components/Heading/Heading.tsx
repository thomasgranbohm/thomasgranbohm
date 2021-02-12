import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";

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
		<Hx className={concatClasses([className, className])} {...props}>
			{children}
		</Hx>
	);
};
