import React from "react";
import { Anchor } from "../components/Anchor";
import { ContactInfo } from "../components/ContactInfo";
import { Emoji } from "../components/Emoji";
import { Header } from "../components/Header";
import { IconLink } from "../components/IconLink";
import { IconList } from "../components/IconList";
import { Paragraph } from "../components/Paragraph";
import { Section } from "../components/Section";
import { UnorderedList } from "../components/UnorderedList";
import { ContactInformation, Projects, Skills, SocialMedias } from "../info";

const App = () => {
	return (
		<main>
			<Header title="Thomas Granbohm" {...ContactInformation} />
			<Section title="About me">
				<Paragraph>
					I am a passionate and hard working web developer, who loves
					to learn and work together with other people.
				</Paragraph>
				<Paragraph>
					I have experience in several back-end as well as front-end
					frameworks and libraries.
				</Paragraph>
				<Paragraph>
					I am currently working as a Full Stack Web Developer at{" "}
					<Anchor href="https://www.delorean.se/">Delorean AB</Anchor>{" "}
					in Stockholm <Emoji>🇸🇪</Emoji>!
				</Paragraph>
			</Section>
			<Section title="Contact me">
				<ContactInfo {...ContactInformation} />
			</Section>
			<Section title="Projects">
				<UnorderedList>
					{Projects.sort((a, b) => a.name.localeCompare(b.name)).map(
						({ name, ...anchorProps }) => (
							<Anchor key={name} {...anchorProps}>
								{name}
							</Anchor>
						)
					)}
				</UnorderedList>
			</Section>
			<Section title="Social Media">
				<IconList>
					{SocialMedias.sort((a, b) =>
						a.name.localeCompare(b.name)
					).map(({ href, name }) => (
						<IconLink href={href} name={name} key={name} />
					))}
				</IconList>
			</Section>
			<Section title="Skills">
				<IconList>
					{Skills.sort((a, b) => a.localeCompare(b)).map((name) => (
						<IconLink href="#" name={name} key={name} />
					))}
				</IconList>
			</Section>
		</main>
	);
};

export default App;
