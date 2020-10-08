import * as React from "react";
import { Link } from "../Link";
import { Section } from "../Section";

export const About: React.FC = () => {
	return (
		<Section title="About me">
			I am a passionate and hard working web developer, who loves to
			learn and work together with other people. <br />
			<br />I have experience in several back-end as well as front-end
			frameworks and libraries.<br />
			<br />I am a full stack web developer
			at <Link name="Delorean" link="https://www.delorean.se/" /> in Stockholm!
		</Section>
	)
}