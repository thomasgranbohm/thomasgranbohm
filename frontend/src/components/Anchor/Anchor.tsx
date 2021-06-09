import React, { AnchorHTMLAttributes, useEffect, useState } from "react";
import concatClasses from "../../functions/concatClasses";
import classes from "./Anchor.module.scss";

export type AnchorProps = {
	href: string;
	noUnderline?: boolean;
	focusState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	children,
	className,
	focusState: [focus, setFocus] = [false, () => {}],
	href,
	noUnderline,
	...props
}: AnchorProps) => {
	return (
		<a
			className={concatClasses(
				classes["anchor"],
				[className, className],
				[classes["underline"], !noUnderline],
				[classes["focus"], focus]
			)}
			href={href}
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
			rel="noopener noreferrer"
			target="_blank"
			{...props}
		>
			{children}
		</a>
	);
};
