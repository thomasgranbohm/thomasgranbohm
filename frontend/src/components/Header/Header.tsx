import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { getStrapiURL } from "../../utils/api";
import { Heading } from "../Heading";
import { Image } from "../Image";
import classes from "./Header.module.scss";

type HeaderProps = {
	headshot: {
		formats: {
			medium: {
				url: string;
				width: number;
			};
			small: {
				url: string;
				width: number;
			};
			thumbnail: {
				url: string;
				width: number;
			};
		};
		url: string;
		width: number;
	};
	title: string;
} & HTMLAttributes<HTMLElement>;

export const Header = ({
	className,
	headshot,
	title,
}: HeaderProps): JSX.Element => {
	const { formats, url, width: orgWidth } = headshot;
	return (
		<header
			className={concatClasses(classes["header"], [className, className])}
		>
			<Image
				alt={title}
				className={classes["image"]}
				src={getStrapiURL(url)}
				srcSet={Object.values(formats)
					.map(({ url, width }) => `${getStrapiURL(url)} ${width}w`)
					.join(", ")}
				sizes={`${Object.values(formats)
					.sort((a, b) => a.width - b.width)
					.map(({ width }, i, arr) => {
						const nextWidth = arr[i + 1]?.width || orgWidth;
						return `(max-width: ${nextWidth}px) ${width}px`;
					})
					.join(", ")}, ${orgWidth}px`}
			/>
			<Heading type="h1" className={classes["title"]}>
				{title}
			</Heading>
		</header>
	);
};
