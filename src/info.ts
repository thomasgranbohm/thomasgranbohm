import { TypeLink } from "./types";

export const Projects: Array<TypeLink> = [
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
].sort((a, b) => a.name.localeCompare(b.name));

export const SocialMedias: Array<TypeLink> = [
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
	{
		name: "Discord",
		link: "tommy ▄▀#7029",
		type: "copy"
	}
].sort((a, b) => a.name.localeCompare(b.name));