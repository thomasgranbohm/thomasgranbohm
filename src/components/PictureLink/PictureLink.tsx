import * as React from "react";
import { TypeIcon, TypeLink } from "src/types";
import { Icon } from "../Icon";
import classes from "./PictureLink.module.scss";

const copyToClipboard = (info: HTMLInputElement | null) => {
	if (!info) return;
	info.select();
	document.execCommand("copy");
	alert(`Copied ${info.value} to the clipboard!`);
};

export const PictureLink = ({ name, link, type }: TypeLink & TypeIcon) => {
	const toCopy = React.useRef<HTMLInputElement>(null);
	if (type === "copy") {
		return (
			<>
				<input
					type="text"
					value={link}
					id="hidden-input"
					className={classes["hidden-input"]}
					ref={toCopy}
					readOnly
				/>
				<Icon
					iconName={name}
					onClick={() => copyToClipboard(toCopy.current)}
				/>
			</>
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
