import * as React from "react";
import { OptionalParams, TypeLink } from "src/types";
import classes from "./Link.module.scss";

export const Link = ({
	name,
	link,
}: OptionalParams<TypeLink, HTMLAnchorElement>) => (
	<span>
		<a className={classes["link"]} href={link}>
			{name}
		</a>
	</span>
);
