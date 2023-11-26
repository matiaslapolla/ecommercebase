import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="MaximaTienda, la plataforma #1 para crear tu tienda online"
				/>
				<meta
					name="keywords"
					content="tienda online, ecommerce, maxima tienda, maxima, maxima tienda online, maxima ecommerce, maxima ecommerce online, maxima ec
					"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
