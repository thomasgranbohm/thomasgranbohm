import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
	render() {
		return (
			<Html id="root" lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Personal webpage" />

					<meta property="og:title" content="Thomas Granbohm" />
					<meta property="og:url" content="https://thomas.granbohm.dev" />


					<link rel="manifest" href="/manifest.json" />

					<link rel="icon" type="image/png" href="/images/icon-x48.png" sizes="48x48" />
					<link rel="icon" type="image/png" href="/images/icon-x96.png" sizes="96x96" />
					<link rel="icon" type="image/png" href="/images/icon-x192.png" sizes="192x192" />
					<link rel="apple-touch-icon" href="/images/icon-x192.png" sizes="192x192" />

					<meta name="theme-color" content="#141414" />

					<meta name="msapplication-config" content="/browserconfig.xml" />
					<link
						crossOrigin=""
						rel="preload"
						href="/fonts/Heebo.ttf"
						as="font"
						type="font/ttf"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
