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
	const focusState = useState<boolean>(false);

	return (
		<Anchor href={href} focusState={focusState} noUnderline>
			<Icon name={name} focus={focusState[0]} {...props} />
		</Anchor>
	);
};
