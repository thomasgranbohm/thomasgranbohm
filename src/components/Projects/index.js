import React from "react";
import Link from "../Link";
import Section from "../Section";

let objects = [
	{
		name: "CuBot",
		link: "https://github.com/thomasgranbohm/CuBot",
	},
	{
		name: "YomTube",
		link: "https://github.com/YomTube/YomTube",
	},
	{
		name: "Music Player",
		link: "https://github.com/thomasgranbohm/music-player",
	},
];
let links = objects
	.sort((a, b) => a.name >= b.name)
	.map((o, i) => {
		let toReturn = [<Link info={o} key={i} />];
		if (i !== objects.length - 1)
			toReturn.push(
				<span className="Interpunct" key={`Interpunct-${i}`}>
					•
				</span>
			);
		return toReturn;
	});

function Projects(props) {
	return <Section title="Projects">{links}</Section>;
}

export default Projects;
