import * as React from "react";
import classes from "./style.module.scss";
import { Projects } from "src/info";
import { Link } from "../Link";
import { Section } from "../Section";

const Interpunct = () => <span className={classes["interpunct"]}>•</span>;

export const ProjectListing = () => (
	<Section title="Projects">
		{Projects.map<React.ReactNode>(({ name, link }, i) => (
			<Link link={link} name={name} key={i} />
		)).reduce((prev, curr, i) => [prev, <Interpunct key={i} />, curr])}
	</Section>
);
