import Link from "next/link";

const openSourceProjects = [
	{
		projectID: 1,
		projectTitle: "react-dpd-pickup-map",
		projectDescription: (
			<p>
				React component designed to seamlessly integrate the DPD Pickup Map into
				any React project.
			</p>
		),
		projectRepoLink: "https://github.com/Imunal/react-dpd-pickup-map",
	},
	{
		projectID: 2,
		projectTitle: "react-qztray",
		projectDescription: (
			<p>
				React hooks for seamless integration with QZ Tray - the
				browser-to-desktop print connector.
			</p>
		),
		projectRepoLink: "https://github.com/Imunal/react-qztray",
	},
	{
		projectID: 3,
		projectTitle: "open-commerce",
		projectDescription: (
			<>
				<p>
					NestJS, and NextJS project, started for better understanding
					microservice patern, gRPC protocol, etc.
				</p>
			</>
		),
		projectRepoLink: "https://github.com/Imunal/open-commerce",
	},
	{
		projectID: 4,
		projectTitle: "kowalewsky.dev",
		projectDescription: <p>Personal website</p>,
		projectRepoLink: "https://github.com/Imunal/kowalewsky.dev",
	},
];

const OpenSourceProjects = () => {
	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-xl font-bold text-black dark:text-white">
				Open-source projects
			</h2>

			<article className="mb-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{openSourceProjects.map((openSourceProject) => (
						<Link
							key={openSourceProject.projectID}
							href={openSourceProject.projectRepoLink}
							className="flex justify-center flex-col px-3 py-3 border rounded-sm border-gray-200 dark:border-gray-800 dark:hover:bg-gray-800"
						>
							<h3 className="font-bold text-black dark:text-white">
								{openSourceProject.projectTitle}
							</h3>
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
