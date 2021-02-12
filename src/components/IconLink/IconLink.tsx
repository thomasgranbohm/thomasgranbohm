import React, { HTMLAttributes } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { Icon, IconProps } from "../Icon";

export type IconLinkProps = AnchorProps &
	IconProps &
	HTMLAttributes<HTMLElement>;

export const IconLink = ({
	className,
	href,
	name,
	...props
}: IconLinkProps) => {
	return (
		<Anchor href={href} {...props}>
			<Icon name={name} />
		</Anchor>
	);
};
