import * as React from "react";
import { Icon, Section } from "src/components";
import { Tools } from "src/info";

export const ToolsListing = () => (
	<Section title="Tools">
		{Tools.sort((a, b) => a.localeCompare(b)).map((name, i) => (
			<Icon iconName={name} key={i} />
		))}
	</Section>
);
