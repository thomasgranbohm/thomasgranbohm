import React, { AnchorHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Anchor.module.scss";

export type AnchorProps = {
	href: string;
	noLink?: boolean;
	prefix?: string;
	type?: "discord" | "email" | "phone";
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	className,
	children,
	href,
	noLink,
	prefix,
	type,
	...props
}) => {
	return (
		<a
			className={concatClasses(
				classes["anchor"],
				[className, className],
				classes[type],
				[classes["noLink"], noLink]
			)}
			href={href}
			onClick={(e) => noLink && e.preventDefault()}
			{...props}
		>
			<span className={classes["link-text"]}>{children}</span>
		</a>
	);
};
