import Image from "next/image";

import Spacer from "components/Spacer/Spacer";

import ReactImage from "images/stack/react.png";
import RTKQueryImage from "images/stack/redux-icon.webp";
import ReactRouterImage from "images/stack/react-router.png";
import TypeScriptImage from "images/stack/typescript.png";
import AdonisJSImage from "images/stack/adonisjs.png";
import SQLServerImage from "images/stack/sql-server.png";
import DigitalOceanImage from "images/stack/digitalocean.png";

const projects = [
  {
    projectID: 1,
    projectTitle: "B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2022,
    projectDescription:
      "Platforma sprzedażowa B2B umożliwiająca klienta stworzenie hurtowych zamówień na produkty. Klienci mogą zarządzać takimi rzeczami jak:",
    projectStack: [
      {
        stackID: 1,
        stackName: "TypeScript",
        stackIcon: (
          <Image
            src={TypeScriptImage}
            alt="TypeScript"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 2,
        stackName: "React",
        stackIcon: (
          <Image
            src={ReactImage}
            alt="ReactJS"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 3,
        stackName: "RTK Query",
        stackIcon: (
          <Image
            src={RTKQueryImage}
            alt="RTK Query"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 4,
        stackName: "React Router",
        stackIcon: (
          <Image
            src={ReactRouterImage}
            alt="React Router"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 6,
        stackName: "AdonisJS",
        stackIcon: (
          <Image
            src={AdonisJSImage}
            alt="AdonisJS"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 7,
        stackName: "MySQL",
        stackIcon: (
          <Image
            src={SQLServerImage}
            alt="MySQL"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
      {
        stackID: 8,
        stackName: "DigitalOcean",
        stackIcon: (
          <Image
            src={DigitalOceanImage}
            alt="DigitalOcean"
            width={24}
            height={24}
            className="mx-auto block"
          />
        ),
      },
    ],
  },
  {
    projectID: 2,
    projectTitle: "Euroland CRM",
    projectCompany: "Euroland",
    projectDate: 2022,
    projectDescription:
      "Aplikacja CRM stworzona aby ułatwić życie działu sprzedażowemu. Pracownicy mogą skorzystać z kalendarza zadań, poglądu kontrahentów, przeglądać oraz tworzyć nowa historie kontaktów. Dane statyczne, i informacje o kontrahentach pobierane sa z systemu ERP.",
  },
  {
    projectID: 2,
    projectTitle: "ProFoto WMS",
    projectCompany: "ProFoto",
    projectDate: 2021,
    projectDescription:
      "Aplikacja WMS stworzona indywidualnie pod zapotrzebowanie kontrahenta. Umożliwia tworzenie regałów, boxow magazynowych, wydruku etykiet kreskowych QRCode ze znacznikami produktów z poziomu przeglądarki.",
  },
  {
    projectID: 2,
    projectTitle: "Camptravels.com",
    projectCompany: "ProFoto",
    projectDate: 2019,
    projectDescription:
      "Platforma sprzedażowa B2B umożliwiająca klienta stworzenie hurtowych zamówień na produkty. Klienci mogą zarządzać takimi rzeczami jak:",
  },
  {
    projectID: 2,
    projectTitle: "B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2022,
    projectDescription:
      "Platforma sprzedażowa B2B umożliwiająca klienta stworzenie hurtowych zamówień na produkty. Klienci mogą zarządzać takimi rzeczami jak:",
  },
  {
    projectID: 2,
    projectTitle: "B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2022,
    projectDescription:
      "Platforma sprzedażowa B2B umożliwiająca klienta stworzenie hurtowych zamówień na produkty. Klienci mogą zarządzać takimi rzeczami jak:",
  },
  {
    projectID: 2,
    projectTitle: "B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2022,
    projectDescription:
      "Platforma sprzedażowa B2B umożliwiająca klienta stworzenie hurtowych zamówień na produkty. Klienci mogą zarządzać takimi rzeczami jak:",
  },
];

const Projects = () => (
  <>
    <h1 className="mb-2 mt-20 text-3xl font-bold text-black dark:text-white md:text-5xl">
      Projekty
    </h1>
    <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">
      Projekty nad którymi pracuje, pracowałem w najbliższym czasie
    </p>
    <section className="mt-8">
      {projects.map((project) => (
        <article className="mt-6" key={project.projectID}>
          <h1 className="text-2xl font-extrabold text-gray-600 dark:text-gray-200">
            {project.projectTitle}
          </h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-200">
            Kontrahent: <strong>{project.projectCompany}</strong>
          </h2>
          <p className="text-gray-700 dark:text-gray-200">
            Rok: <strong>{project.projectDate}</strong>
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            {project.projectDescription}
          </p>

          <div className="mt-3 grid auto-cols-max grid-flow-col gap-4">
            {project.projectStack?.map((stack) => (
              <div key={stack.stackID}>
                <div className="">
                  {stack.stackIcon}
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    {stack.stackName}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Spacer />
        </article>
      ))}
    </section>
  </>
);

export default Projects;
