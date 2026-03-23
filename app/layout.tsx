import { GoogleAnalytics } from "@next/third-parties/google";
//Components
import { Footer, Navbar } from "components";
import type { Metadata } from "next";

//Css
import "./globals.css";
import "highlight.js/styles/github-dark-dimmed.css";

//Fonts
import { inter } from "./fonts";

const siteUrl = "https://kowalewsky.dev";

export const metadata: Metadata = {
	title: "Juliusz Kowalewski | Full-Stack Developer",
	description:
		"Experienced Full-Stack Developer with several years of experience in designing and implementing web solutions. My career is   \n" +
		"defined by a continuous drive for growth and the adoption of new technologies, enabling me to create innovative and efficient solutions. Passion for learning and flexibility in approaching technology allow me to continuously    \n" +
		"improve my skills and adapt to the rapidly evolving IT industry.",
	metadataBase: new URL(siteUrl),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: siteUrl,
		title: "Juliusz Kowalewski | Full-Stack Developer",
		description:
			"Experienced Full-Stack Developer specializing in designing and implementing web solutions using modern technologies.",
		siteName: "kowalewsky.dev",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Juliusz Kowalewski | Full-Stack Developer",
		description:
			"Experienced Full-Stack Developer specializing in designing and implementing web solutions using modern technologies.",
		images: ["/og-image.png"],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Juliusz Kowalewski",
	jobTitle: "Full-Stack Developer",
	url: "https://kowalewsky.dev",
	image: `${siteUrl}/og-image.png`,
	description:
		"Experienced Full-Stack Developer specializing in designing and implementing web solutions using modern technologies.",
	knowsAbout: [
		"TypeScript",
		"Next.js",
		"NestJS",
		"React",
		"Node.js",
		"PostgreSQL",
		"AWS",
		"Docker",
		"Apache Kafka",
		"Microservices",
	],
	sameAs: [
		"https://www.linkedin.com/in/juliusz-kowalewski-657856179/",
		"https://github.com/Imunal",
	],
	email: "juliusz@kowalewsky.dev",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<head>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</head>
		<body
			className={`${inter.variable} bg-gray-50 font-sans dark:bg-gray-900 container mx-auto w-full p-4 md:max-w-4xl md:p-12`}
		>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</body>
		<GoogleAnalytics gaId="G-PKGR9BZV67" />
	</html>
);

export default RootLayout;
