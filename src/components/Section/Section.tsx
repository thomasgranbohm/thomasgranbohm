import React, { HTMLAttributes } from "react";
import concatClasses from "src/functions/concatClasses";
import { Heading, HeadingTypes } from "src/components/Heading";
import classes from "./Section.module.scss";

type SectionProps = {
	title: string;
	type?: HeadingTypes;
} & HTMLAttributes<HTMLElement>;

export const Section: React.FC<SectionProps> = ({
	className,
	children,
	title,
	type = "h2",
	...props
}) => {
	return (
		<section
			className={concatClasses(classes["section"], [
				className,
				className,
			])}
			{...props}
		>
			<Heading type={type}>{title}</Heading>
			{children}
		</section>
	);
};
