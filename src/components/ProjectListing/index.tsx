import * as React from "react";
import classes from "./style.module.scss";
import { Projects } from "src/info";
import { Link, Section } from "src/components";

export const ProjectListing = () => (
	<Section title="Projects">
		<ul>
			{Projects.map<React.ReactNode>(({ name, link }, i) => (
				<li className={classes["list-item"]}>
					<Link link={link} name={name} key={i} />
				</li>
			))}
		</ul>
	</Section>
);
