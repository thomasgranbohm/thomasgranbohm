import * as React from "react";
import * as ReactDOM from "react-dom";
import classes from "./index.module.scss";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile";
import { ProjectListing } from "./components/ProjectListing/ProjectListing";
import { SocialMediaListing } from "./components/SocialMediaListing/SocialMediaListing";

export const App = () => (
	<main className={classes["app"]}>
		<Profile />
		<About />
		<ProjectListing />
		<SocialMediaListing />
	</main>
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
