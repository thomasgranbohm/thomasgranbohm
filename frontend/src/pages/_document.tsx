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

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700&display=swap" rel="stylesheet" />

					{/* Google Tag Manager */}
					<script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.GTM_TAG}');`}}></script>
				</Head>
				<body>
					<Main />
					<NextScript />
					
					{/* Google Tag Manager */}
					<noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_TAG}`} height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
