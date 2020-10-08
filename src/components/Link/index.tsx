import * as React from "react";
import { TypeLink } from "src/types";
import "./style.css";

export const Link: React.FC<TypeLink> = ({ name, link }) => {
	return (
		<span>
			<a className="Link" href={link}>
				{name}
			</a>
		</span>
	);
};
