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
		"Doświadczony Full-Stack Developer z kilkoma latami doświadczenia w projektowaniu i wdrażaniu rozwiązań webowych. Moja kariera charakteryzuje się ciągłym dążeniem do rozwoju i adaptacji nowych technologii, co pozwala mi na tworzenie innowacyjnych i efektywnych rozwiązań. Pasja i chęć do nauki i elastyczność w podejściu do technologii pozwalają mi na ciągłe doskonalenie umiejętności i przystosowywanie się do dynamicznie zmieniającego się środowiska branży IT.",
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
