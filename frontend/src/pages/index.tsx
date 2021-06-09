import Head from "next/head";
import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Sections from "../components/Sections/Sections";
import { getHomePage } from "../utils/api";

const App = ({ sections, title, headshot, global, footer }) => {
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
			<Footer text={footer} />
		</main>
	);
};

export async function getStaticProps() {
	const pageData = await getHomePage();

	if (pageData == null) {
		return { props: {} };
	}

	const { sections, title, headshot, footer } = pageData;

	return {
		props: {
			footer,
			headshot,
			sections,
			title,
		},
		revalidate: 60,
	};
}

export default App;
