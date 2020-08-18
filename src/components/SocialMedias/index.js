import React from "react";
import PictureLink from "../PictureLink";
import Section from "../Section";

let objects = [
	{
		name: "GitHub",
		link: "https://github.com/thomasgranbohm",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/thomas-granbohm/",
	},
	{
		name: "Instagram",
		link: "https://instagram.com/tokxhu",
	},
	{
		name: "Spotify",
		link:
			"https://open.spotify.com/user/familjengranbohm?si=xLighD9BQAi6SlY3IRH1Eg",
	},
];
let links = objects
	.sort((a, b) => a.name >= b.name)
	.map((o, i) => <PictureLink info={o} key={i} />);

function SocialMedias(props) {
	return <Section title="Social Media">{links}</Section>;
}

export default SocialMedias;
