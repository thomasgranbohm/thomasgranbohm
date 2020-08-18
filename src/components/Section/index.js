import React from "react";
import "./style.css";

function Section(props) {
	return (
		<section className="Section">
			<header>
				<h2>{props.title}</h2>
			</header>
			{props.children}
		</section>
	);
}

export default Section;
