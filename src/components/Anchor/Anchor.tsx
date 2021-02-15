import React, { AnchorHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Anchor.module.scss";

export type AnchorProps = {
	href: string;
	noUnderline?: boolean;
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	children,
	className,
	href,
	noUnderline,
	...props
}: AnchorProps) => {
	return (
		<a
			className={concatClasses(
				classes["anchor"],
				[className, className],
				[classes["underline"], !noUnderline]
			)}
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			{...props}
		>
			<span className={classes["link-text"]}>{children}</span>
		</a>
	);
};
