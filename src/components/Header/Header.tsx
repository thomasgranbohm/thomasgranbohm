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
				src="/images/icon-x512.png"
				srcSet="/images/icon-x384.png 400w, /images/icon-x512.png 600w"
				sizes="(max-width: 600px) 400w, 600w"
			/>
			<Heading type="h1" className={classes["title"]}>
				{title}
			</Heading>
		</header>
	);
};
