import * as React from "react";
import * as ReactDOM from "react-dom";
import classes from "./index.module.scss";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { ProjectListing } from "./components/ProjectListing";
import { SocialMediaListing } from "./components/SocialMediaListing";

export const App = () => (
	<div className={classes["app"]}>
		<Profile />
		<About />
		<ProjectListing />
		<SocialMediaListing />
	</div>
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
