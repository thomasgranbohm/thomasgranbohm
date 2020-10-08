import * as React from "react";
import "./App.css";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { ProjectListing } from "./components/ProjectListing";
import { SocialMediaListing } from "./components/SocialMediaListing";

export const App: React.FC = () => {
	return (
		<div className="App">
			<Profile />
			<About />
			<ProjectListing />
			<SocialMediaListing />
		</div>
	);
};
