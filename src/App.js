import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import SocialMedias from "./components/SocialMedias";
import Projects from "./components/Projects";
import Section from "./components/Section";

function App() {
	return (
		<div className="App">
			<Profile />
			<Section title="About me">
				I am a passionate and hard working web developer, who loves to
				learn and work in teams. <br />
				<br />I have experience in several back-end as well as front-end
				frameworks and libraries.
			</Section>
			<Projects />
			<SocialMedias />
		</div>
	);
}

export default App;
