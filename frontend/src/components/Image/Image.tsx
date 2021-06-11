import React, { ImgHTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { getStrapiMedia } from "../../utils/media";

type ImageProps = {
	alt: string;
} & ImgHTMLAttributes<HTMLElement>;

export const Image = ({ alt, className, src, ...props }: ImageProps) => {
	return (
		<img
			alt={alt}
			src={getStrapiMedia(src)}
			className={concatClasses([className, className])}
			{...props}
		/>
	);
};
