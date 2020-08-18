import React from "react";
import "./style.css";

function Link(props) {
	let { name, link } = props.info;
	return (
		<a className="Link" href={link}>
			{name}
		</a>
	);
}

export default Link;
