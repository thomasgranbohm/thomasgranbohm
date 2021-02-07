import React from "react";
import ReactDOM from "react-dom";
import {
	About,
	Profile,
	ProjectListing,
	SocialMediaListing,
	ToolsListing,
} from "./components";
import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<Profile />
		<About />
		<ProjectListing />
		<SocialMediaListing />
		<ToolsListing />
	</React.StrictMode>,
	document.getElementById("root")
);
