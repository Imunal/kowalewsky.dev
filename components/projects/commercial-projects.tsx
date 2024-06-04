import { Badge } from "components/badge/badge";

const projects = [
  {
    projectID: 1,
    projectTitle: "Fototransfer.pl - B2B Print-On-Demand Platform",
    projectCompany: "Fototransfer.pl",
    projectDate: 2024,
    projectDescription: (
      <div>
        <p className="mb-3">
          Byłem odpowiedzialny za projektowanie i implementację kompleksowej
          platformy B2B skupiającej się na metodyce sprzedaży Print-On-Demand
        </p>
        <ul className="list-inside list-decimal">
          Zadania nad którymi głównie pracowałem:
          <li className="mt-2 mb-1">
            Bliska współpraca z UI/UX designerem, przeniesienie projektu z Figmy
            do rzeczywistego kodu. Zapewnienie, że interfejs użytkownika jest
            intuicyjny i responsywny, poprawiając doświadczenie użytkowników.
          </li>
          <li className="mb-1">
            Implementacja skalowalnych i wydajnych usług backendowych bazujących
            na metodyce mikroserwisów. Stworzenie solidnego fundamentu
            backendowego, który zapewnia wysoką wydajność i elastyczność
            systemu.
          </li>
          <li className="mb-1">
            Zaprojektowanie, modyfikacja i dokumentacja interfejsu API dla
            kontrahentów, umożliwiającego integrację z platformami eCommerce lub
            innymi systemami używanymi przez kontrahentów. Umożliwienie łatwej i
            efektywnej integracji zewnętrznych systemów z platformą, co zwiększa
            jej funkcjonalność i zasięg.
          </li>
          <li className="mb-1">
            Implementacja integracji z Comarch ERP XL, co znacząco ulepszyło
            procesy zarządzania zamówieniami, logistyka, i stanami magazynowymi.
            Automatyczna wymiana danych między platformą, a systemem ERP
            zmniejszyło liczbę błedów, i przyśpieszyło realizację zamówień.
          </li>
          <li className="mb-1">
            Implementacja integracji z systemem wspierania produkcji kontehenta
            który bazując na webhook’ach informuje system o zmianach na
            zamówieniu na produkcji.
          </li>
          <li className="mb-1">
            Implementacja integracji z systemem produkcyjnym bazującym na
            webhook’ach, informującym system o zmianach statusu zamówienia w
            produkcji. Zapewnienie ciągłej synchronizacji między procesami
            produkcyjnymi a platformą, co zwiększyło efektywność i
            transparentność operacji.
          </li>
          <li className="mb-1">
            Integracja systemu z zewnętrznym partnerem obsługującym rozbudowany
            kreator do personalizacji produktów, co zapewniło płynną wymianę
            danych między platformą a kreatorem, co umożliwiło personalizację
            produktów bezpośrednio na platformie.
          </li>
          <li className="mb-1">
            Bliska współpraca z zespołami sprzedaży i produkcji w celu
            zrozumienia specyficznych wymagań branży personalizacji gadżetów.
            Dostosowanie platformy do unikalnych potrzeb biznesowych, co
            przyczyniło się do usprawnienia procesów operacyjnych i
            sprzedażowych.
          </li>
          <li className="mb-1">
            Koordynacja działań z zespołem marketingu w celu optymalizacji
            platformy pod kątem SEO/SEM.
          </li>
          <li className="mb-1">
            Implementacja praktyk SEO, takich jak optymalizacja treści, tagów
            meta i struktury URL, co zwiększyło widoczność platformy w
            wyszukiwarkach.
          </li>
          <li>
            Wsparcie kampanii SEM poprzez zapewnienie integracji z narzędziami
            analitycznymi i reklamowymi.
          </li>
        </ul>
      </div>
    ),
    projectStack: [
      "typescript",
      "nextjs",
      "swr",
      "nestjs",
      "prisma",
      "jest",
      "vitest",
      "playwright",
      "tailwind css",
      "apache kafka",
      "aws",
      "docker",
      "nginx",
      "postgresql",
      "github actions",
    ],
  },
  {
    projectID: 2,
    projectTitle: "Euroland - CRM",
    projectCompany: "Euroland",
    projectDate: 2022,
    projectDescription: (
      <div>
        <p className="mb-3">
          Byłem odpowiedzialny za projektowanie i wdrażanie systemu CRM,
          mającego na celu usprawnienie zarządzania relacjami z klientami.
        </p>
        <ul className="list-inside list-decimal">
          Zadania nad którymi głównie pracowałem:
          <li className="mt-2 mb-1">
            Rozwój funkcji analizy zakupów kontrahentów, co pozwoliło na lepsze
            zrozumienie potrzeb klientów i optymalizację strategii sprzedaży.
          </li>
          <li className="mb-1">
            Regularne spotkania z zespołem sprzedażowym, co pozwoliło na bieżąco
            reagować na ich potrzeby i wprowadzać niezbędne poprawki w systemie.
          </li>
          <li>
            Implementacja narzędzi, takich jak kalendarz i system zadania dla
            handlowców, ułatwiających organizację pracy i śledzenie postępów
            sprzedaży.
          </li>
        </ul>
      </div>
    ),
    projectStack: [
      "typescript",
      "adonisjs",
      "redux-toolkit",
      "tailwind css",
      "react",
      "nodejs",
      "nginx",
      "docker",
      "github actions",
      "mssql",
    ],
  },
  {
    projectID: 3,
    projectTitle: "ProFoto - WMS",
    projectDate: 2020,
    projectDescription: (
      <div>
        <p className="mb-3">
          Aplikacja WMS stworzona indywidualnie pod zapotrzebowanie kontrahenta.
        </p>
        <ul className="list-inside list-decimal">
          Zadania nad którymi głównie pracowałem:
          <li className="mt-2 mb-1">
            Opracowanie funkcjonalności do efektywnego zarządzania przestrzenią
            magazynową, z możliwością wizualizacji układu magazynu.
          </li>
          <li className="mb-1">
            Zaprojektowanie modułu do przyjmowania towaru na stan magazynowy, z
            automatycznym przypisywaniem do określonych lokalizacji
            magazynowych.
          </li>
          <li>
            Zintegrowanie funkcji generowania i drukowania etykiet kreskowych
            QRCode bezpośrednio z poziomu przeglądarki.
          </li>
        </ul>
      </div>
    ),
    projectStack: [
      "laravel",
      "php",
      "react",
      "redux",
      "mysql",
      "tailwind css",
      "mysql",
    ],
  },
  {
    projectID: 4,
    projectTitle: "Camptravels.com",
    projectDate: 2019,
    projectDescription: (
      <div>
        <p className="mb-3">
          Zaprogramowałem i wdrożyłem landing page dla wypożyczalni kamperów,
          oparty na wcześniej przygotowanym projekcie w Figmie, który umożliwia
          klientom łatwe rezerwowanie pojazdów.
        </p>

        <ul className="list-inside list-decimal">
          Zadania nad którymi głównie pracowałem:
          <li className="mt-2 mb-1">
            Przeniesienie projektu z Figmy do rzeczywistego kodu, zapewniając
            zgodność z oryginalnym designem.
          </li>
          <li className="mb-1">
            Implementacja prostego i intuicyjnego formularza rezerwacji,
            umożliwiającego klientom szybkie i łatwe zarezerwowanie kampera.
          </li>
          <li className="mb-1">
            Zoptymalizowanie kodu strony, aby zapewnić szybkie ładowanie i
            płynne działanie na różnych urządzeniach.
          </li>
          <li>
            Wprowadzenie praktyk SEO, aby zwiększyć widoczność strony w wynikach
            wyszukiwania.
          </li>
        </ul>
      </div>
    ),
    projectStack: ["gatsby", "php"],
  },
  {
    projectID: 5,
    projectTitle: "Fototransfer.pl - System wspomagania produkcji",
    projectDate: "2018 - 2022",
    projectDescription: (
      <div>
        <p className="mb-3">
          Brałem udział w projektowaniu i rozwijaniu zaawansowanego systemu
          wspierającego procesy produkcyjne, który przyczynił się do zwiększenia
          wydajności i redukcji kosztów operacyjnych.
        </p>
        <ul className="list-inside list-decimal">
          Zadania nad którymi głównie pracowałem:
          <li className="mt-2 mb-1">
            Implementacja narzędzi do real-time monitoringu, które umożliwiły
            śledzenie wydajności i identyfikację wąskich gardeł w produkcji.
          </li>
          <li className="mb-1">
            Wprowadzenie dashboardów i raportów, które dostarczały kluczowych
            informacji o stanie produkcji, co umożliwiło szybką reakcję na
            potencjalne problemy.
          </li>
          <li className="mb-1">
            Implementacja modułu zarządzania pracownikami, który umożliwia
            śledzenie i analizę wydajności pracowników.
          </li>
          <li className="mb-1">
            Wprowadzenie systemu rozliczeń akordowych, co pozwala na dokładne i
            sprawiedliwe rozliczanie wynagrodzeń na podstawie wydajności pracy.
          </li>
          <li className="mb-1">
            Zapewnienie płynnej integracji z istniejącymi systemem ERP, co
            umożliwiło wymianę danych i synchronizację procesów produkcyjnych.
          </li>
          <li className="mb-1">
            Implementacja funkcji drukowania kodów QR z poziomu przeglądarki, co
            ułatwiło identyfikację i śledzenie produktów w procesie
            produkcyjnym.
          </li>
          <li className="mb-1">
            Stworzenie interfejsów API, które umożliwiły integrację zewnętrznych
            aplikacji i systemów.
          </li>
          <li>
            Bliska współpraca z zespołem zarządzającym produkcją, i zespołami
            technicznymi w celu zrozumienia specyficznych wymagań i wyzwań.
          </li>
        </ul>
      </div>
    ),
    projectStack: [
      "typescript",
      "react",
      "redux-toolkit",
      "charka-ui",
      "qz-tray",
      "adonisjs",
      "nodejs",
      "vite",
      "vitest",
      "apache kafka",
      "aws",
      "docker",
      "nginx",
      "github actions",
      "mssql",
    ],
  },
];

const CommercialProjects = () => (
  <div className="flex flex-col gap-6">
    <h1 className="text-xl font-bold text-black dark:text-white">
      Commercial projects
    </h1>
    {projects.map((project) => (
      <article
        className="flex flex-col pb-5 gap-y-3 border-b border-b-gray-200 dark:border-b-gray-800"
        key={project.projectID}
      >
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-extrabold text-gray-600 dark:text-gray-200">
            {project.projectTitle}
          </h3>
          <span className="text-gray-700 dark:text-gray-200">
            {project.projectDate}
          </span>
        </div>
        <div className="text-pretty text-justify font-mono text-muted-foreground mt-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
          {project.projectDescription}
        </div>
        <div className="grid grid-cols-4 grid-flow-row-dense md:grid-cols-6 gap-4">
          {project.projectStack.map((stack) => (
            <Badge key={stack}>{stack}</Badge>
          ))}
        </div>
      </article>
    ))}
    <div className=" py-5">
      <p className="text-center font-mono text-gray-600 dark:text-gray-400">
        And many many more...
      </p>
    </div>
  </div>
);

export default CommercialProjects;
