import { Inter } from "@next/font/google";
import { Navbar } from "components";
import "./globals.css";

/*

const inter = Inter({ subsets: ["latin"] });

*/

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} bg-gray-50 font-sans dark:bg-gray-900`}
      >
        <header>
          <Navbar />
        </header>
        <main className="container mx-auto w-full pt-10 md:max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
