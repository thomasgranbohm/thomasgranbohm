import { AnchorProps } from "./components/Anchor";
import { IconNames } from "./components/Icon/IconContent";
import { TContactInfo } from "./types";

type ProjectLink = {
	name: string;
} & AnchorProps;

type IconLink = {
	name: IconNames;
} & AnchorProps;

export const ContactInformation: TContactInfo = {
	discord: "tommy ▄▀#7029",
	email: "thomas.granbohm@gmail.com",
	phonenumber: "+46 73-676 16 14",
};

export const Projects: ProjectLink[] = [
	{
		name: "Cubot",
		href: "https://github.com/thomasgranbohm/Cubot",
	},
	{
		name: "YomTube",
		href: "https://github.com/YomTube/YomTube",
	},
	{
		name: "Music Player",
		href: "https://github.com/thomasgranbohm/music-player",
	},
	{
		name: "Landsort Booking System",
		href: "https://github.com/thomasgranbohm/landsort-booking-system",
	},
];

export const SocialMedias: IconLink[] = [
	{
		name: "github",
		href: "https://github.com/thomasgranbohm",
	},
	{
		name: "instagram",
		href: "https://instagram.com/thomasgranbohm",
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/thomas-granbohm/",
	},
	{
		name: "spotify",
		href: "https://open.spotify.com/user/familjengranbohm",
	},
];

export const Skills: IconNames[] = [
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
	"sass",
	"graphql",
	"mysql",
	"wordpress",
	"strapi"
];
