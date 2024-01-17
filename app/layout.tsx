import type { Metadata } from 'next'

//Components
import { Navbar, Footer } from "components";

//Css
import "./globals.css";

//Fonts
import {inter} from './fonts'


export const metadata: Metadata = {
  title: 'Juliusz Kowalewski | Full-Stack Developer',
  description: 'Doświadczony Full-Stack Developer z kilkoma latami doświadczenia w projektowaniu i wdrażaniu rozwiązań webowych. Moja kariera charakteryzuje się ciągłym dążeniem do rozwoju i adaptacji nowych technologii, co pozwala mi na tworzenie innowacyjnych i efektywnych rozwiązań. Pasja i chęć do nauki i elastyczność w podejściu do technologii pozwalają mi na ciągłe doskonalenie umiejętności i przystosowywanie się do dynamicznie zmieniającego się środowiska branży IT.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} bg-gray-50 font-sans dark:bg-gray-900 container mx-auto w-full p-4 md:max-w-4xl md:p-12`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
