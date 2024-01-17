import Spacer from "components/ui/spacer/spacer";
import Link from "next/link";

const navigationLinks = [
  //{ navID: 1, navTitile: "Projekty", navUrl: "/projects" },
  { navID: 2, navTitile: "Resume", navUrl: "#" },
  { navID: 3, navTitile: "Kontakt", navUrl: "mailto:juliusz@kowalewsky.dev" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-gray-200">
            JK.
          </h1>
        </Link>
        <div className="block w-auto" id="navbar-default">
          <ul className="flex p-4 mt-0 flex-row space-x-8 border-0 text-sm font-medium ">
            {navigationLinks.map((navigation) => (
              <li key={navigation.navID}>
                <a
                  href={navigation.navUrl}
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
      <Spacer className='mt-1 mb-2'/>
    </nav>
  );
};

export default Navbar;
