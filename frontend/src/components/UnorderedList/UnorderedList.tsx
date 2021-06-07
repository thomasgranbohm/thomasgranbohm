import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./UnorderedList.module.scss";

export type UnorderedListProps = {
	noListStyle?: boolean;
} & HTMLAttributes<HTMLElement>;

export const UnorderedList: React.FC<UnorderedListProps> = ({
	className,
	children,
	noListStyle,
	...props
}) => {
	return (
		<ul
			className={concatClasses(
				classes["unordered-list"],
				[className, className],
				[classes["no-list-style"], noListStyle]
			)}
			{...props}
		>
			{children}
		</ul>
	);
};
