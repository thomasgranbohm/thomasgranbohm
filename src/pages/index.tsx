import Head from "next/head";
import React, { useEffect } from "react";
import { Anchor } from "../components/Anchor";
import { ContactInfo } from "../components/ContactInfo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import { IconLink } from "../components/IconLink";
import { IconList } from "../components/IconList";
import { Paragraph } from "../components/Paragraph";
import { Section } from "../components/Section";
import { UnorderedList } from "../components/UnorderedList";
import { ContactInformation, Projects, Skills, SocialMedias } from "../info";

const App = () => {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("/sw.js")
				.then(
					(reg) => console.log('ServiceWorker registration successful with scope:', reg.scope),
					(err) => console.log('ServiceWorker registration failed:', err)
				);
		}
	}, [])

	return (
		<main>
			<Head>
				<title>Thomas Granbohm</title>
			</Head>
			<Header title="Thomas Granbohm" {...ContactInformation} />
			<article>
				<Section title="About me">
					<Paragraph>
						I am a passionate and hard working web developer, who loves to learn
						and work together with other people.
					</Paragraph>
					<Paragraph>
						I have experience in several back-end as well as front-end
						frameworks and libraries.
					</Paragraph>
					<Paragraph>
						I am currently working as a Full Stack Web Developer at{" "}
						<Anchor href="https://www.delorean.se/">Delorean AB</Anchor> in
						Stockholm, Sweden!
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
						{SocialMedias.sort((a, b) => a.name.localeCompare(b.name)).map(
							({ href, name }) => (
								<IconLink href={href} name={name} key={name} />
							)
						)}
					</IconList>
				</Section>
				<Section title="Skills">
					<IconList>
						{Skills.sort((a, b) => a.localeCompare(b)).map((name) => (
							<Icon tabIndex={0} name={name} key={name} />
						))}
					</IconList>
				</Section>
			</article>
			<Footer />
		</main>
	);
};

export default App;
