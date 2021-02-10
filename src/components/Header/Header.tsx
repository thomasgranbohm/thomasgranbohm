import React, { HTMLAttributes } from "react";
import concatClasses from "src/functions/concatClasses";
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
				src="/images/profile-picture-alt.jpg"
			/>
			<Heading type="h1" className={classes["title"]}>
				{title}
			</Heading>
		</header>
	);
};
