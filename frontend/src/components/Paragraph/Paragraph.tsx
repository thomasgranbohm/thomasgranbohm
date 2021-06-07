import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Paragraph.module.scss";

export type ParagraphProps = HTMLAttributes<HTMLElement>;

export const Paragraph: React.FC<ParagraphProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<p
			className={concatClasses(classes["paragraph"], [
				className,
				className,
			])}
			{...props}
		>
			{children}
		</p>
	);
};
