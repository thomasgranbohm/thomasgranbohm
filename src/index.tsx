import React from "react";
import ReactDOM from "react-dom";
import {
	About,
	Image,
	Profile,
	ProjectListing,
	Section,
	SocialMediaListing,
} from "./components";
import classes from "./index.module.scss";
import { Tools } from "./info";
import { TypeImage } from "./types";

export const App = () => (
	<main className={classes["app"]}>
		<Profile />
		<About />
		<ProjectListing />
		<SocialMediaListing />
		<Section title="Tools">
			{Tools.map(({ name }: TypeImage) => (
				<Image name={name} type="svg" />
			))}
		</Section>
	</main>
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
