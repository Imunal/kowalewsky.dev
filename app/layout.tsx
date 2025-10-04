import { GoogleAnalytics } from "@next/third-parties/google";
//Components
import { Footer, Navbar } from "components";
import type { Metadata } from "next";

//Css
import "./globals.css";

//Fonts
import { inter } from "./fonts";

export const metadata: Metadata = {
	title: "Juliusz Kowalewski | Full-Stack Developer",
	description:
		"Experienced Full-Stack Developer with several years of experience in designing and implementing web solutions. My career is defined by a continuous drive for growth and the adoption of new technologies, enabling me to create innovative and efficient solutions. Passion for learning and flexibility in approaching technology allow me to continuously improve my skills and adapt to the rapidly evolving IT industry.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
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
