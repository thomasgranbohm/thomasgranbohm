import * as React from "react";
import { TypeLink } from "src/types";
import { Image } from "..";
import classes from "./PictureLink.module.scss";

const copyToClipboard = (info: HTMLInputElement | null) => {
	if (!info) return;
	info.select();
	document.execCommand("copy");
	alert(`Copied ${info.value} to the clipboard!`);
};

export const PictureLink = ({ name, link, type }: TypeLink) => {
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
				<Image
					type="svg"
					className={classes["logo"]}
					name={name}
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
			<Image type="svg" className={classes["logo"]} name={name} />
		</a>
	);
};
