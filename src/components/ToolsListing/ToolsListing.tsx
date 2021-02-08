import * as React from "react";
import { Icon, Listing, Section } from "src/components";
import { Tools } from "src/info";

export const ToolsListing = () => (
	<Section title="Tools">
		<Listing>
			{Tools.sort((a, b) => a.localeCompare(b)).map((name, i) => (
				<Icon iconName={name} key={i} />
			))}
		</Listing>
	</Section>
);
