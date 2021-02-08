import React, { useEffect, useState } from "react";
import { TypeIcon, TypeLink } from "src/types";
import { Icon } from "../Icon";
import classes from "./PictureLink.module.scss";

export const PictureLink = ({ name, link, type }: TypeLink & TypeIcon) => {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		if (typeof window !== undefined) setMounted(true);
	}, []);
	
	if (type === "copy") {
		return (
			<Icon
				iconName={name}
				onClick={() => {
					if (!mounted || !navigator.clipboard) return;

					navigator.clipboard.writeText(link).catch((err) => {
						alert("Could not copy to clipboard.");
						console.error(err);
					});
				}}
			/>
		);
	}
	return (
		<a
			className={classes["pictureLink"]}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon className={classes["logo"]} iconName={name} />
		</a>
	);
};
