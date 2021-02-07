import * as React from "react";
import { OptionalParams, TypeLink } from "src/types";
import classes from "./Link.module.scss";

type LinkProps = {
	prefix?: string;
} & TypeLink;

export const Link = ({
	name,
	link,
	prefix,
	...props
}: OptionalParams<LinkProps, HTMLAnchorElement>) => (
	<span>
		{prefix && `${prefix} `}
		<a {...props} className={classes["link"]} href={link}>
			{name}
		</a>
	</span>
);
