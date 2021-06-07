import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Footer.module.scss";

export type FooterProps = { text: string } & HTMLAttributes<HTMLElement>;

export const Footer = ({ className, text, ...props }: FooterProps) => {
	return (
		<footer className={concatClasses(classes["footer"], className)} {...props}>
			<p>
				{text} — {new Date().getFullYear()}
			</p>
		</footer>
	);
};
