import React, { ImgHTMLAttributes } from "react";
import classes from "./Image.module.scss";
import { TypeImage } from "../../types";

type ImageProps = {
	type: "png" | "jpg";
} & TypeImage &
	ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ name, alt, type, className, ...props }: ImageProps) => {
	const avatarURL = `/images/${name.toLowerCase()}.${type}`;
	return (
		<img
			src={avatarURL}
			alt={alt || name}
			className={[classes["image"], classes[type], className || ""].join(
				" "
			)}
			title={alt || name}
			{...props}
		/>
	);
};
