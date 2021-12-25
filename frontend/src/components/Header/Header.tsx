import React, { HTMLAttributes } from 'react';
import concatClasses from '../../functions/concatClasses';
import { getStrapiURL } from '../../utils/api';
import { getStrapiMedia } from '../../utils/media';
import { Heading } from '../Heading';
import { Image } from '../Image';
import classes from './Header.module.scss';

type HeaderProps = {
	title: string;
} & HTMLAttributes<HTMLElement>;

export const Header = ({ className, title }: HeaderProps): JSX.Element => {
	return (
		<header
			className={concatClasses(classes['header'], [className, className])}
		>
			<Heading type="h1" className={classes['title']}>
				{title}
			</Heading>
		</header>
	);
};
