export interface ProjectType {
	name: string;
	description: string;

	links: { name: string; url: string }[];
	tags: string[];
}

export const projects: { name: string; projects: ProjectType[] }[] = [
	{
		name: 'Web Development',
		projects: [
			{
				name: "Kitten Asso's",
				description:
					'Two projects made at school to learn web development: a REST API made with NestJS and a frontend with Angular.',
				links: [
					{ name: 'Frontend Code', url: 'https://github.com/pixselve-school/wm-projet' },
					{ name: 'Backend Code', url: 'https://github.com/pixselve-school/tp1-wm' }
				],
				tags: ['Angular', 'NestJS', 'TypeScript', 'REST API', '2-person team']
			},
			{
				name: 'Kontrakt',
				description: 'A web app to manage students exercises progress and grades.',
				links: [
					{ name: 'Frontend Code', url: 'https://github.com/Pixselve/kontrakt-web' },
					{ name: 'Backend Code', url: 'https://github.com/Pixselve/kontrakt-server-go' }
				],
				tags: ['Vue', 'Go', 'GraphQL', 'TypeScript']
			}
		]
	},
	{
		name: 'Software Architecture',
		projects: [
			{
				name: "Kitten Asso's",
				description:
					'Complete software architecture of a web application using real world tools and technologies like Docker, Github Actions, Quarkus, PostgreSQL, etc.',
				links: [
					{
						name: 'Code',
						url: 'https://github.com/pixselve-school/projet-al'
					}
				],
				tags: ['Docker', 'Microservices', 'Architecture', 'CI', '2-person team']
			}
		]
	},
	{
		name: 'CLI Tools',
		projects: [
			{
				name: 'Ariadne',
				description:
					"Implementation of a privacy preserving network protocol's client and server on top of a IPv6 based on a paper.",
				links: [],
				tags: ['Networking', 'POC', 'Rust', 'Cryptographic', 'Internship']
			},
			{
				name: 'Gitlab CI documentation generator',
				description:
					"A CLI tool to generate documentation for Gitlab CI pipelines made in one night during the Nuit de l'info 2022.",
				links: [
					{
						name: 'Code',
						url: 'https://github.com/Pixselve/gitlab-pipeline-to-md'
					},
					{
						name: "Nuit de l'info",
						url: 'https://www.nuitdelinfo.com'
					}
				],
				tags: ['CLI', 'TypeScript', 'Gitlab CI']
			}
		]
	},
	{
		name: 'Game Development',
		projects: [
			{
				name: 'Age of tower',
				description:
					'A tower defense game made with Java and the StdDraw library. It features a map editor, animations, etc.',
				links: [
					{
						name: 'Code',
						url: 'https://github.com/pixselve-school/towerdefensejava'
					}
				],
				tags: ['Java', 'StdDraw', 'Game', '2-person team']
			}
		]
	}
];
