import Link from "next/link";

const navigationLinks = [
  {
    navID: 2,
    navTitile: "Resume",
    navUrl: "https://www.linkedin.com/in/juliusz-kowalewski-657856179/",
  },
  { navID: 3, navTitile: "Contact", navUrl: "mailto:juliusz@kowalewsky.dev" },
];

const Navbar = () => (
  <nav>
    <div className="container mx-auto flex flex-wrap items-center justify-between border-b border-b-gray-200 dark:border-b-gray-800">
      <Link href="/" className="flex items-center">
        <h1 className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-gray-200">
          JK.
        </h1>
      </Link>
      <div className="block w-auto" id="navbar-default">
        <ul className="flex p-4 mt-0 flex-row space-x-8 border-0 text-sm font-medium ">
          {navigationLinks.map((navigation) => (
            <li key={navigation.navID}>
              <Link
                href={navigation.navUrl}
                className="block rounded-sm p-1 text-gray-600 hover:bg-gray-800 dark:text-gray-400 sm:px-3 sm:py-2"
              >
                {navigation.navTitile}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
