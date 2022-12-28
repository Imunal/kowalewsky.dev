import { Navbar } from "components";
import "./globals.css";

/*
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

*/

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body className="bg-gray-50 dark:bg-gray-900">
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
