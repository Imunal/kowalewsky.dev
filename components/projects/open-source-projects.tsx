import Link from "next/link";

const openSourceProjects = [
  {
    projectID: 1,
    projectTitle: "react-dpd-pickup-map",
    projectDescription: (
      <p>React component map allowing to display DPD Picup-point map</p>
    ),
    projectRepoLink: "https://github.com/Imunal/react-dpd-pickup-map",
  },
  {
    projectID: 2,
    projectTitle: "open-commerce",
    projectDescription: (
      <>
        <p>
          NestJS, and NextJS project i still develop, started for better
          understanding microservice patern, gRPC protocol, etc. More
          information about stack in project repo
        </p>
      </>
    ),
    projectRepoLink: "https://github.com/Imunal/open-commerce",
  },
  {
    projectID: 3,
    projectTitle: "kowalewsky.dev",
    projectDescription: <p>Personal website</p>,
    projectRepoLink: "https://github.com/Imunal/kowalewsky.dev",
  },
  {
    projectID: 4,
    projectTitle: "insidemta-app",
    projectDescription: (
      <p>UCP for InsideMTA game project, react, redux-toolkit, etc</p>
    ),
    projectRepoLink: "https://github.com/Imunal/insidemta_app",
  },
];

const OpenSourceProjects = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-black dark:text-white">
        Open-source projects
      </h1>

      <article className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {openSourceProjects.map((openSourceProject) => (
            <Link
              key={openSourceProject.projectID}
              href={openSourceProject.projectRepoLink}
              className="flex justify-center flex-col px-3 py-3 border rounded border-gray-200 dark:border-gray-800 hover:dark:bg-gray-800"
            >
              <h2 className="font-bold text-black dark:text-white">
                {openSourceProject.projectTitle}
              </h2>
              <div className="text-pretty font-mono text-muted-foreground mt-2 text-sm text-gray-600 dark:text-gray-400">
                {openSourceProject.projectDescription}
              </div>
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
};

export default OpenSourceProjects;
