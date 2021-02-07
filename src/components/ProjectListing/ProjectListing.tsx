import * as React from "react";
import classes from "./ProjectListing.module.scss";
import { Projects } from "src/info";
import { Link, Section } from "src/components";

export const ProjectListing = () => (
	<Section title="Projects">
		<ul>
			{Projects.map<React.ReactNode>(({ name, link }, i) => (
				<li className={classes["list-item"]} key={i}>
					<Link link={link}>{name}</Link>
				</li>
			))}
		</ul>
	</Section>
);
