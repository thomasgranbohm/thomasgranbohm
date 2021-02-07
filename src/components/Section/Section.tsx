import * as React from "react";
import classes from "./Section.module.scss";

interface Props {
	title: string;
}

export const Section: React.FC<Props> = ({ title, children }) => (
	<section className={classes["section"]}>
		<header>
			<h2>{title}</h2>
		</header>
		{children}
	</section>
);
