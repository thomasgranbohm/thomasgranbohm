import * as React from "react";
import { OptionalParams, TypeLink } from "src/types";
import classes from "./Link.module.scss";

type LinkProps = OptionalParams<
	{
		prefix?: string;
	} & TypeLink,
	HTMLAnchorElement
>;

export const Link: React.FC<LinkProps> = ({
	children,
	link,
	prefix,
	...props
}) => (
	<span>
		{prefix && `${prefix} `}
		<a {...props} className={classes["link"]} href={link}>
			{children}
		</a>
	</span>
);
