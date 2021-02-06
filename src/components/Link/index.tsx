import * as React from "react";
import { TypeLink } from "src/types";
import classes from "./style.module.scss";

export const Link = ({ name, link }: TypeLink) => (
	<span>
		<a className={classes["link"]} href={link}>
			{name}
		</a>
	</span>
);
