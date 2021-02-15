import React, { HTMLAttributes } from "react";
import { Icon, IconProps } from "../Icon";

export type IconLinkProps = IconProps & HTMLAttributes<HTMLElement>;

export const IconLink = ({ className, name, ...props }: IconLinkProps) => {
	return <Icon name={name} tabIndex={0} {...props} />;
};
