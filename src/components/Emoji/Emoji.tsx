import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Emoji.module.scss";

export type EmojiProps = HTMLAttributes<HTMLElement>;

export const Emoji: React.FC<EmojiProps> = ({
	className,
	children,
	...props
}) => (
	<span className={concatClasses(classes["emoji"], className)} {...props}>
		{children}
	</span>
);
