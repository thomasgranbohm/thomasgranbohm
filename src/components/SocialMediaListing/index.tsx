import * as React from "react";
import { SocialMedias } from "src/info";
import { PictureLink } from "../PictureLink";
import { Section } from "../Section";

export const SocialMediaListing: React.FC = () => {
	return <Section title="Social Media">
		{
			SocialMedias
				.map((o, i) => {
					return <PictureLink link={o.link} name={o.name} key={i} />;
				})
		}
	</Section>;
};