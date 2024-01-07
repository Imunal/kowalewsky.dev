import Link from "next/link";

const navigationLinks = [
  { navID: 1, navTitile: "Projekty", navUrl: "/projects" },
  { navID: 2, navTitile: "Resume", navUrl: "/resume" },
  { navID: 3, navTitile: "Kontakt", navUrl: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="mx-auto mt-0 mb-10 w-full py-3 md:max-w-4xl">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-gray-200">
            JK.
          </h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            {navigationLinks.map((navigation) => (
              <li key={navigation.navID}>
                <a
                  href="#"
                  className="block rounded p-1 text-gray-600 hover:bg-gray-800 dark:text-gray-400 sm:px-3 sm:py-2"
                  aria-current="page"
                >
                  {navigation.navTitile}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-1 mb-2 border border-gray-200 dark:border-gray-800"></div>
    </nav>
  );
};

export default Navbar;
