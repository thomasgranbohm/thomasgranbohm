import React from "react";
import "./style.css";

function PictureLink(props) {
	let { name, link } = props.info;
	let avatarURL = `/images/${name.toLowerCase()}.svg`;
	return (
		<a className="PictureLink" href={link}>
			<img className="Logo" src={avatarURL} alt={name} />
		</a>
	);
}

export default PictureLink;
