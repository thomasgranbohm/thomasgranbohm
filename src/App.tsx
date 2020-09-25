import * as React from "react";
import "./App.css";
import { Profile } from "./components/Profile";
import { ProjectListing } from "./components/ProjectListing";
import { Section } from "./components/Section";
import { SocialMediaListing } from "./components/SocialMediaListing";

export const App: React.FC = () => {
	return (
		<div className="App">
			<Profile />
			<Section title="About me">
				I am a passionate and hard working web developer, who loves to
				learn and work in teams. <br />
				<br />I have experience in several back-end as well as front-end
				frameworks and libraries.
			</Section>
			<ProjectListing />
			<SocialMediaListing />
		</div>
	);
};
