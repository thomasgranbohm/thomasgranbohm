import React, { AnchorHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Anchor.module.scss";

export type AnchorProps = {
	href: string;
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	className,
	children,
	href,
	...props
}) => {
	return (
		<a
			className={concatClasses(classes["anchor"], [className, className])}
			href={href}
			{...props}
		>
			<span className={classes["link-text"]}>{children}</span>
		</a>
	);
};
