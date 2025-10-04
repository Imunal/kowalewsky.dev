import { Badge } from "components/badge/badge";

const projects = [
	{
		projectID: 1,
		projectTitle: "Fototransfer.pl - B2B Print-On-Demand Platform",
		projectCompany: "Fototransfer.pl",
		projectDate: "2024-2025",
		projectDescription: (
			<div>
				<p className="mb-3">
					I was responsible for designing and implementing a comprehensive B2B
					platform focused on the Print-On-Demand sales methodology.
				</p>
				<ul className="list-inside list-decimal">
					Main tasks I worked on:
					<li className="mt-2 mb-1">
						Close collaboration with the UI/UX designer — transferring the Figma
						design into production code. Ensured that the user interface was
						intuitive and responsive, improving user experience.
					</li>
					<li className="mb-1">
						Implementation of scalable and efficient backend services based on a
						microservice methodology. Built a solid backend foundation that
						ensures high performance and flexibility.
					</li>
					<li className="mb-1">
						Designed, modified, and documented API interfaces for partners,
						enabling integration with eCommerce platforms or other systems.
						Allowed seamless and efficient external system integrations,
						increasing platform reach and functionality.
					</li>
					<li className="mb-1">
						Implemented integration with Comarch ERP XL, which significantly
						improved order management, logistics, and inventory tracking
						processes. Automated data exchange between the platform and ERP
						system reduced errors and sped up order fulfillment.
					</li>
					<li className="mb-1">
						Implemented integration with the partner’s production management
						system, which — based on webhooks — informs the platform about order
						status updates during production.
					</li>
					<li className="mb-1">
						Worked closely with sales and production teams to understand the
						specific requirements of the personalized merchandise industry.
						Tailored the platform to meet unique business needs, improving
						operational and sales processes.
					</li>
					<li className="mb-1">
						Coordinated with the marketing team to optimize the platform for
						SEO/SEM.
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
		projectDate: "2022-2025 (going)",
		projectDescription: (
			<div>
				<p className="mb-3">
					I was responsible for designing and implementing a CRM system aimed at
					improving customer relationship management.
				</p>
				<ul className="list-inside list-decimal">
					Main tasks I worked on:
					<li className="mt-2 mb-1">
						Developed purchase analysis features for clients, allowing better
						insight into customer needs and optimization of sales strategies.
					</li>
					<li className="mb-1">
						Held regular meetings with the sales team, enabling quick responses
						to their needs and continuous system improvements.
					</li>
					<li>
						Implemented tools such as a calendar and task system for salespeople
						to improve work organization and sales progress tracking.
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
					A custom WMS (Warehouse Management System) application developed for
					the specific needs of a client.
				</p>
				<ul className="list-inside list-decimal">
					Main tasks I worked on:
					<li className="mt-2 mb-1">
						Developed functionality for efficient warehouse space management
						with the ability to visualize warehouse layouts.
					</li>
					<li className="mb-1">
						Designed a module for receiving goods into stock with automatic
						assignment to specific warehouse locations.
					</li>
					<li>
						Integrated barcode and QR code label generation and printing
						directly from the browser.
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
					I developed and deployed a landing page for a camper rental company
					based on a Figma design, enabling customers to easily book vehicles
					online.
				</p>
				<ul className="list-inside list-decimal">
					Main tasks I worked on:
					<li className="mt-2 mb-1">
						Translated the Figma design into clean, production-ready code while
						maintaining visual fidelity to the original project.
					</li>
					<li className="mb-1">
						Implemented a simple and intuitive booking form, allowing customers
						to quickly and easily reserve a camper.
					</li>
					<li className="mb-1">
						Optimized site code for fast loading and smooth performance across
						devices.
					</li>
					<li>
						Applied SEO best practices to improve the site’s visibility in
						search results.
					</li>
				</ul>
			</div>
		),
		projectStack: ["gatsby", "php"],
	},
	{
		projectID: 5,
		projectTitle: "Fototransfer.pl - System wspomagania produkcji",
		projectDate: "2018 - 2025",
		projectDescription: (
			<div>
				<p className="mb-3">
					I participated in designing and developing an advanced production
					support system that significantly improved efficiency and reduced
					operational costs.
				</p>
				<ul className="list-inside list-decimal">
					Main tasks I worked on:
					<li className="mt-2 mb-1">
						Implemented real-time monitoring tools enabling performance tracking
						and identification of production bottlenecks.
					</li>
					<li className="mb-1">
						Introduced dashboards and reports that provided key production
						insights, enabling quick responses to potential issues.
					</li>
					<li className="mb-1">
						Implemented an employee management module for tracking and analyzing
						performance metrics.
					</li>
					<li className="mb-1">
						Introduced a piecework accounting system to ensure fair and accurate
						performance-based compensation.
					</li>
					<li className="mb-1">
						Ensured smooth integration with the existing ERP system, allowing
						data synchronization across production processes.
					</li>
					<li className="mb-1">
						Implemented QR code printing functionality directly from the
						browser, simplifying product tracking within production.
					</li>
					<li className="mb-1">
						Created API interfaces enabling integration with external
						applications and systems.
					</li>
					<li>
						Collaborated closely with production management and technical teams
						to understand specific requirements and challenges.
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
