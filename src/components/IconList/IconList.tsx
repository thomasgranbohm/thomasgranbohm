import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./IconList.module.scss";

type IconListProps = {
	scroll?: boolean;
} & HTMLAttributes<HTMLElement>;

export const IconList: React.FC<IconListProps> = ({
	className,
	children,
	scroll,
	...props
}) => {
	return (
		<div
			className={concatClasses(
				classes["icon-list"],
				[className, className],
				[classes["scroll"], scroll]
			)}
			{...props}
		>
			<div className={classes["container"]}>{children}</div>
		</div>
	);
};
