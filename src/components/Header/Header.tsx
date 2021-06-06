import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { Heading } from "../Heading";
import { Image } from "../Image";
import classes from "./Header.module.scss";

type HeaderProps = {
	title: string;
} & HTMLAttributes<HTMLElement>;

export const Header = ({ className, title }: HeaderProps): JSX.Element => {
	return (
		<header
			className={concatClasses(classes["header"], [className, className])}
		>
			<Image
				alt={title}
				className={classes["image"]}
				src="/images/icon-x512.webp"
				srcSet="/images/icon-x384.webp 400w, /images/icon-x512.webp 600w"
				sizes="(max-width: 600px) 400px, 600px"
			/>
			<Heading type="h1" className={classes["title"]}>
				{title}
			</Heading>
		</header>
	);
};
