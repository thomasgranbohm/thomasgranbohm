import * as React from "react";
import "./style.css";

interface Props {
	title: string;
}

export const Section: React.FC<Props> = ({ title, children }) => {
	return (
		<section className="Section">
			<header>
				<h2>{title}</h2>
			</header>
			{children}
		</section>
	);
}