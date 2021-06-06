import Head from "next/head";
import "../styles/global.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
