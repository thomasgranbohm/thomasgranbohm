import React from "react";
import ReactDOM from "react-dom";
import {
	About,
	Profile,
	ProjectListing,
	Section,
	SocialMediaListing,
} from "./components";
import { Icon } from "./components/Icon";
import classes from "./index.module.scss";
import { Tools } from "./info";
import { TypeIcon } from "./types";

export const App = () => (
	<main className={classes["app"]}>
		<Profile />
		<About />
		<ProjectListing />
		<SocialMediaListing />
		<Section title="Tools">
			{Tools.map(({ name }: TypeIcon) => (
				<Icon iconName={name} />
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
