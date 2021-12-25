import React, { HTMLAttributes } from 'react';
import concatClasses from '../../functions/concatClasses';
import { Heading, HeadingTypes } from '../../components/Heading';

type SectionProps = {
	title: string;
	type?: HeadingTypes;
} & HTMLAttributes<HTMLElement>;

export const Section: React.FC<SectionProps> = ({
	className,
	children,
	title,
	type = 'h2',
	...props
}) => {
	return (
		<section className={concatClasses([className, className])} {...props}>
			<Heading permalink type={type}>
				{title}
			</Heading>
			{children}
		</section>
	);
};
