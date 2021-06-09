import React, { HTMLAttributes, useEffect, useState } from "react";
import { Anchor, AnchorProps } from "../Anchor";
import { Icon, IconProps } from "../Icon";

export type IconLinkProps = AnchorProps &
	IconProps &
	HTMLAttributes<HTMLElement>;

export const IconLink = ({ className, href, ...props }: IconLinkProps) => {
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<Anchor href={href} focusState={[focus, setFocus]} noUnderline>
			<Icon focus={focus} {...props} />
		</Anchor>
	);
};
