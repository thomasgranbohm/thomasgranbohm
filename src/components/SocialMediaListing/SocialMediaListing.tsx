import * as React from "react";
import { SocialMedias } from "src/info";
import { PictureLink, Section } from "src/components";

export const SocialMediaListing = () => (
	<Section title="Social Media">
		{SocialMedias.map((o, i) => (
			<PictureLink {...o} key={i} />
		))}
	</Section>
);
