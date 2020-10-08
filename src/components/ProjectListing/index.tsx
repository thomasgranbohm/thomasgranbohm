import * as React from "react";
import { Projects } from "src/info";
import { Link } from "../Link";
import { Section } from "../Section";

export const ProjectListing: React.FC = () => {
	return (
		<Section title="Projects">
			{
				Projects
					.map(({ name, link }, i, arr) => {
						let toReturn = [<Link link={link} name={name} key={i} />];
						if (i !== arr.length - 1)
							toReturn.push(
								<span className="Interpunct" key={`Interpunct-${i}`}>
									•
						</span>
							);
						return toReturn;
					})
			}
		</Section>
	);
};
