import React, { AnchorHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Anchor.module.scss";

export type AnchorProps = {
	href: string;
	prefix?: string;
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	className,
	children,
	href,
	prefix,
	...props
}) => {
	return (
		<a
			className={concatClasses(classes["anchor"], [className, className])}
			href={href}
			{...props}
		>
			{children}
		</a>
	);
};
