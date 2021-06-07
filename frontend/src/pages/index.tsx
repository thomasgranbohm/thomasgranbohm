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
import Sections from "../components/Sections/Sections";
import { UnorderedList } from "../components/UnorderedList";
import { ContactInformation, Projects, Skills, SocialMedias } from "../info";
import { getGlobalData, getHomePage } from "../utils/api";

const App = ({ sections, title, headshot, global, ...rest }) => {
	useEffect(() => {
		if (
			"serviceWorker" in navigator &&
			process.env.NODE_ENV !== "development"
		) {
			navigator.serviceWorker.register("/sw.js").then(
				(reg) =>
					console.log(
						"ServiceWorker registration successful with scope:",
						reg.scope
					),
				(err) => console.log("ServiceWorker registration failed:", err)
			);
		}
	}, []);

	return (
		<main>
			<Head>
				<title>Thomas Granbohm</title>
			</Head>
			<Header headshot={headshot} title={title} />
			<article>
				<Sections sections={sections} />
			</article>
			<Footer text={global["footer"]} />
		</main>
	);
};

export async function getStaticProps(context) {
	const global = await getGlobalData();

	const pageData = await getHomePage();

	if (pageData == null) {
		return { props: {} };
	}

	const { sections, title, headshot } = pageData;

	return {
		props: {
			global,
			headshot,
			sections,
			title,
		},
	};
}

export default App;
