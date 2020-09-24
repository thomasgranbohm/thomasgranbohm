import React from "react";
import "./style.css";

function Section({ title, children }) {
	return (
		<section className="Section">
			<header>
				<h2>{title}</h2>
			</header>
			{children}
		</section>
	);
}

export default Section;
