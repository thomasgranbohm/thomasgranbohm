import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';
import concatClasses from '../../functions/concatClasses';
import classes from './Anchor.module.scss';

export type AnchorProps = {
	focusState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	href: string;
	noUnderline?: boolean;
	permalink?: boolean;
} & AnchorHTMLAttributes<HTMLElement>;

export const Anchor: React.FC<AnchorProps> = ({
	children,
	className,
	focusState: [focus, setFocus] = [false, () => {}],
	href,
	noUnderline,
	permalink,
	...props
}: AnchorProps) => {
	return (
		<a
			className={concatClasses(
				classes['anchor'],
				[className, className],
				[classes['underline'], !noUnderline],
				[classes['focus'], focus],
				[classes['permalink'], permalink]
			)}
			href={href}
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
			{...props}
		>
			{children}
		</a>
	);
};
