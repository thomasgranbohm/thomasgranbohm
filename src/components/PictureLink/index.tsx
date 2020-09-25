import * as React from "react";
import { TypeLink } from "src/types";
import "./style.css";

export const PictureLink: React.FC<TypeLink> = ({
	name,
	link
}) => {
	let avatarURL = `/profile/images/${name.toLowerCase()}.svg`;
	return (
		<a className="PictureLink" href={link}>
			<img className="Logo" src={avatarURL} alt={name} />
		</a>
	);
};
