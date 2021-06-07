import React, { HTMLAttributes, ReactNode } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./ChildWithPrefix.module.scss";

export type ChildWithPrefixProps = {
	prefix: "discord" | "email" | "phone";
} & HTMLAttributes<HTMLElement>;

export const ChildWithPrefix: React.FC<ChildWithPrefixProps> = ({
	className,
	children,
	prefix,
	...props
}) => {
	return (
		<div
			className={concatClasses(
				classes["child-with-prefix"],
				[className, className],
				classes[prefix]
			)}
			{...props}
		>
			{children}
		</div>
	);
};
