import * as React from "react";
import { TypeLink } from "src/types";
import classes from "./style.module.scss";

const copyToClipboard = (info: HTMLInputElement | null) => {
	if (!info) return;
	info.select();
	document.execCommand("copy");
	alert(`Copied ${info.value} to the clipboard!`);
};

export const PictureLink = ({ name, link, type }: TypeLink) => {
	const avatarURL = `/profile/images/${name.toLowerCase()}.svg`;
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
				<img
					className={classes["logo"]}
					src={avatarURL}
					alt={name}
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
			<img className={classes["logo"]} src={avatarURL} alt={name} />
		</a>
	);
};
