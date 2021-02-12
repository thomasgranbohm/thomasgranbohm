import React, { ImgHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";

type ImageProps = {
	alt: string;
} & ImgHTMLAttributes<HTMLElement>;

export const Image = ({ alt, className, ...props }: ImageProps) => {
	return (
		<img
			alt={alt}
			className={concatClasses([className, className])}
			{...props}
		/>
	);
};
