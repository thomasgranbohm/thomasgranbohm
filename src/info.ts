import { IconNames } from "./icons";
import { TypeImage, TypeIcon, TypeLink } from "./types";

export const Projects: Array<TypeLink & TypeImage> = [
	{
		name: "Cubot",
		link: "https://github.com/thomasgranbohm/Cubot",
	},
	{
		name: "YomTube",
		link: "https://github.com/YomTube/YomTube",
	},
	{
		name: "Music Player",
		link: "https://github.com/thomasgranbohm/music-player",
	},
	{
		name: "Landsort Booking System",
		link: "https://github.com/thomasgranbohm/landsort-booking-system",
	},
].sort((a, b) => a.name.localeCompare(b.name));

export const SocialMedias: Array<TypeIcon & TypeLink> = [
	{
		name: "github",
		link: "https://github.com/thomasgranbohm",
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/thomas-granbohm/",
	},
	{
		name: "instagram",
		link: "https://instagram.com/thomasgranbohm",
	},
	{
		name: "spotify",
		link: "https://open.spotify.com/user/familjengranbohm",
	},
	{
		name: "discord",
		link: "tommy ▄▀#7029",
		type: "copy",
	},
];

export const Tools: IconNames[] = [
	"css3",
	"docker",
	"git",
	"html5",
	"java",
	"javascript",
	"laravel",
	"mongodb",
	"next.js",
	"node.js",
	"php",
	"postgresql",
	"react",
	"svelte",
	"typescript",
];
