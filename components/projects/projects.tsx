import Image from "next/image";

//Components
import {Spacer} from "components";

const projects = [
  {
    projectID: 1,
    projectTitle: "Fototransfer.pl - B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2024,
    projectDescription:
      <div>
        <p>Odpowiedzialny za projektowanie
        i implementację kompleksowej platformy B2B, wykorzystując Next.js i
        NestJS.</p>
        <p>Skoncentrowany na tworzeniu intuicyjnych interfejsów użytkownika oraz
        wydajnych, skalowalnych rozwiązań backendowych.</p>
        <p>Wprowadzenie integracji z systemem ERP (Comarch ERP XL), co znacznie
        ulepszyło procesy zarządzania zamówieniami i logistyką.</p>
        <p>Współpraca z zespołem produkcyjnym w celu dostosowania platformy do
        specyficznych wymagań branżowych, co przyczyniło się do usprawnienia
        procesów produkcyjnych i sprzedażowych.</p>
      </div>,
    projectStack: 'https://skillicons.dev/icons?i=typescript,nextjs,nestjs,prisma,tailwindcss,kafka,aws,docker,nginx,postgres,githubactions',
  },
  {
    projectID: 2,
    projectTitle: "Euroland - CRM",
    projectCompany: "Euroland",
    projectDate: 2022,
    projectDescription:
      <div>
        <p>Odpowiedzialność za projektowanie i wdrażanie systemu CRM, mającego na
celu usprawnienie zarządzania relacjami z klientami.</p>
    <p>Rozwój funkcji analizy zakupów kontrahentów, co pozwoliło na lepsze
    zrozumienie potrzeb klientów i optymalizację strategii sprzedaży.</p>
    <p>Implementacja narzędzi, takich jak kalendarz i zadania dla handlowców,
ułatwiających organizację pracy i śledzenie postępów sprzedaży.</p>
<p>Współpraca z działem sprzedaży w celu zapewnienia, że system CRM
spełnia ich wymagania i przyczynia się do zwiększenia efektywności
sprzedaży.</p>

      </div>,
    projectStack: 'https://skillicons.dev/icons?i=vite,typescript,adonis,redux,nodejs,react,docker,nginx,githubactions',
  },
  {
    projectID: 3,
    projectTitle: "ProFoto - WMS",
    projectDate: 2021,
    projectDescription:
      "Aplikacja WMS stworzona indywidualnie pod zapotrzebowanie kontrahenta. Umożliwia tworzenie regałów, boxow magazynowych, wydruku etykiet kreskowych QRCode ze znacznikami produktów z poziomu przeglądarki.",
    projectStack: 'https://skillicons.dev/icons?i=laravel,php,react,js,mysql',
  },
  {
    projectID: 4,
    projectTitle: "Camptravels.com",
    projectDate: 2019,
    projectDescription:
      "Landing page dla wypożyczalni kamperów, wraz z formularzem rejestracji pojazdu, terminu.",
    projectStack: 'https://skillicons.dev/icons?i=gatsby,php',
  },
  {
    projectID: 5,
    projectTitle: "Fototransfer.pl - System wspomagania produkcji",
    projectDate: "2018 - 2022",
    projectDescription:
      <div>
        <p>Projektowanie i rozwijanie
      zaawansowanego systemu wspierającego procesy produkcyjne.
      Implementacja narzędzi do monitorowania i optymalizacji procesów
      produkcyjnych, przyczyniając się do zwiększenia wydajności i redukcji
      kosztów operacyjnych.</p>
       <p>Bliska współpraca z zespołami technicznymi i produkcyjnymi, co umożliwiło
      stworzenie spersonalizowanych rozwiązań odpowiadających na unikalne
      potrzeby firmy.</p>
      </div>,
    projectStack: 'https://skillicons.dev/icons?i=ts,adonis,vite,vitest,kafka,aws,docker,nginx,githubactions',
  },
];

const Projects = () => (
  <section className="flex flex-col gap-6">
    <h1 className="text-xl font-bold text-black dark:text-white">
      Projekty komercyjne
    </h1>
      {projects.map((project) => (
        <article className="flex flex-col gap-y-3" key={project.projectID}>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-extrabold text-gray-600 dark:text-gray-200">
                  {project.projectTitle}
                </h3>
                <span className="text-gray-700 dark:text-gray-200">
                  {project.projectDate}
                </span>
              </div>
              <p className="text-pretty font-mono text-muted-foreground mt-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
                {project.projectDescription}
              </p>

              <div>
                <img src={project.projectStack} alt="Project stack" width={340} height={60} className='w-max h-[45px]'/>
              </div>
              <Spacer className="mt-4" />
        </article>
      ))}
  </section>
);

export default Projects;
