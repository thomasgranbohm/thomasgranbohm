import * as React from "react";
import { TypeLink } from "src/types";
import "./style.css";

const copyToClipboard = (info: HTMLInputElement | null) => {
	if (info) {
		console.log(info)
		info.select();
		document.execCommand("copy");
		alert(`Copied ${info.value} to the clipboard!`);
	}
}

export const PictureLink: React.FC<TypeLink> = ({
	name,
	link,
	type
}) => {
	const avatarURL = `/profile/images/${name.toLowerCase()}.svg`;
	const toCopy = React.useRef<HTMLInputElement>(null);
	if (type === "copy") {
		return (
			<>
				<input type="text" value={link} id="hidden-input" className="hidden-input" ref={toCopy} readOnly/>
				<img className="Logo" src={avatarURL} alt={name} onClick={() => copyToClipboard(toCopy.current)} />
			</>
		)
	}
	return (
		<a className="PictureLink" href={link} target="_blank" rel="noopener noreferrer">
			<img className="Logo" src={avatarURL} alt={name} />
		</a>
	);
};
