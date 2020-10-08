import * as React from "react";
import { TypeLink } from "src/types";
import "./style.css";

const copyToClipboard = (info: HTMLInputElement | null) => {
	if (info) {
		console.log(info.value)
		info.select();
		alert(`Copied ${info.value} to the clipboard!`)
	}
}

export const PictureLink: React.FC<TypeLink> = ({
	name,
	link,
	type
}) => {
	let avatarURL = `/profile/images/${name.toLowerCase()}.svg`;
	const toCopy = React.useRef<HTMLInputElement>(null);
	if (type === "copy") {
		return (
			<>
				<input type="text" value={link} id="hidden-input" ref={toCopy} style={{
					zIndex: 0,
					position: "absolute",
					top: -100
				}} />
				<img className="Logo" src={avatarURL} alt={name} onClick={() => copyToClipboard(toCopy.current)} />
			</>
		)
	}
	return (
		<a className="PictureLink" href={link} target="_blank">
			<img className="Logo" src={avatarURL} alt={name} />
		</a>
	);
};
