import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./IconList.module.scss";

type IconListProps = HTMLAttributes<HTMLElement>;

export const IconList: React.FC<IconListProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div
			className={concatClasses(classes["icon-list"], [
				className,
				className,
			])}
			{...props}
		>
			{children}
		</div>
	);
};
