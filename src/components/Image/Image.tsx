import React, { ImgHTMLAttributes } from "react";
import concatClasses from "src/functions/concatClasses";
import classes from "./Image.module.scss";

type ImageProps = {
	alt: string;
} & ImgHTMLAttributes<HTMLElement>;

export const Image = ({ alt, className, ...props }: ImageProps) => {
	return (
		<img
			alt={alt}
			className={concatClasses(classes["image"], [className, className])}
			{...props}
		/>
	);
};
