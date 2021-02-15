import React, { HTMLAttributes, useState } from "react";
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
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<Anchor
			href={href}
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
		>
			<Icon name={name} focus={focus} {...props} />
		</Anchor>
	);
};
