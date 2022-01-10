import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { Anchor } from "../Anchor";
import classes from "./Footer.module.scss";

export type FooterProps = { text: string } & HTMLAttributes<HTMLElement>;

export const Footer = ({ className, text, ...props }: FooterProps) => {
	return (
		<footer className={concatClasses(classes["footer"], className)} {...props}>
			<p>
				{text} — {new Date().getFullYear()}
			</p>
			{process.env.NEXT_PUBLIC_BUILD_ID && (
				<p>
					Build:{" "}
					<Anchor
						href={`https://github.com/thomasgranbohm/thomasgranbohm/commit/${process.env.NEXT_PUBLIC_BUILD_ID}`}
						permalink
						target={"_blank"}
					>
						{process.env.NEXT_PUBLIC_BUILD_ID}
					</Anchor>
				</p>
			)}
		</footer>
	);
};
