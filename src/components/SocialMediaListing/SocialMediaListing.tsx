import * as React from "react";
import { SocialMedias } from "src/info";
import { Listing, PictureLink, Section } from "src/components";

export const SocialMediaListing = () => (
	<Section title="Social Media">
		<Listing>
			{SocialMedias.sort((a, b) => a.name.localeCompare(b.name)).map(
				(o, i) => (
					<PictureLink {...o} key={i} />
				)
			)}
		</Listing>
	</Section>
);
