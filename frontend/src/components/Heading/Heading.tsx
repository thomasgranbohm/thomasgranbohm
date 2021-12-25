import React, { Children, HTMLAttributes } from 'react';
import toSlug from '../../functions/slugify';
import concatClasses from '../../functions/concatClasses';
import { Anchor } from '../Anchor';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
	permalink?: boolean;
	type: HeadingTypes;
} & HTMLAttributes<HTMLElement>;

export const Heading: React.FC<HeadingProps> = ({
	className,
	children,
	permalink,
	type,
	...props
}: HeadingProps) => {
	const Hx = type;

	if (typeof children === 'string' && permalink) {
		props.id = toSlug(children);
	}

	return (
		<Hx className={concatClasses([className, className])} {...props}>
			{props.id ? (
				<Anchor href={`#${props.id}`} permalink>
					{children}
				</Anchor>
			) : (
				children
			)}
		</Hx>
	);
};
