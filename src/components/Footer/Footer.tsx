import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Footer.module.scss";

export type FooterProps = HTMLAttributes<HTMLElement>;

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer
			className={concatClasses(classes["footer"], className)}
			{...props}
		>
			<p>Built using Next.js – 2021</p>
		</footer>
	);
};
