export interface ProjectType {
  name: string;
  description: string;

  links: { name: string; url: string; type: LinkType }[];
  tags: string[];
}

export enum LinkType {
  Github = "Github",
  Preview = "Preview",
  Others = "Others",
  External = "External",
}

export const projects: { name: string; projects: ProjectType[] }[] = [
  {
    name: "Web Development",
    projects: [
      {
        name: "QuizCraft",
        description: "A web app to convert JSON into a Google Forms quiz.",
        links: [
          {
            name: "Preview",
            url: "https://quizcraft.mael.app",
            type: LinkType.Preview,
          },
          {
            name: "Code",
            url: "https://github.com/Pixselve/quizcraft",
            type: LinkType.Github,
          },
        ],
        tags: ["React", "TypeScript", "Google Forms", "JSON"],
      },
      {
        name: "MacStats",
        description:
          "A web app to display stats about McDonald's restaurants in France.",
        links: [
          {
            name: "Preview",
            url: "https://macstats.mael.app",
            type: LinkType.Preview,
          },
          {
            name: "Code",
            url: "https://github.com/Pixselve/macstats",
            type: LinkType.Github,
          },
        ],
        tags: ["Svelte", "Data Visualization", "2-person team", "REST API"],
      },
      {
        name: "Kitten Asso's",
        description:
          "Two projects made at school to learn web development: a REST API made with NestJS and a frontend with Angular.",
        links: [
          {
            name: "Frontend Code",
            url: "https://github.com/pixselve-school/wm-projet",
            type: LinkType.Github,
          },
          {
            name: "Backend Code",
            url: "https://github.com/pixselve-school/tp1-wm",
            type: LinkType.Github,
          },
        ],
        tags: ["Angular", "NestJS", "TypeScript", "REST API", "2-person team"],
      },
      {
        name: "Kontrakt",
        description:
          "A web app to manage students exercises progress and grades.",
        links: [
          {
            name: "Frontend Code",
            url: "https://github.com/Pixselve/kontrakt-web",
            type: LinkType.Github,
          },
          {
            name: "Backend Code",
            url: "https://github.com/Pixselve/kontrakt-server-go",
            type: LinkType.Github,
          },
        ],
        tags: ["Vue", "Go", "GraphQL", "TypeScript"],
      },
    ],
  },
  {
    name: "Software Architecture",
    projects: [
      {
        name: "Kitten Asso's",
        description:
          "Complete software architecture of a web application using real world tools and technologies like Docker, Github Actions, Quarkus, PostgreSQL, etc.",
        links: [
          {
            name: "Code",
            url: "https://github.com/pixselve-school/projet-al",
            type: LinkType.Github,
          },
        ],
        tags: [
          "Docker",
          "Microservices",
          "Architecture",
          "CI",
          "2-person team",
        ],
      },
    ],
  },
  {
    name: "CLI Tools",
    projects: [
      {
        name: "Ariadne",
        description:
          "Implementation of a privacy preserving network protocol's client and server on top of a IPv6 based on a paper.",
        links: [],
        tags: ["Networking", "POC", "Rust", "Cryptographic", "Internship"],
      },
      {
        name: "Gitlab CI documentation generator",
        description:
          "A CLI tool to generate documentation for Gitlab CI pipelines made in one night during the Nuit de l'info 2022.",
        links: [
          {
            name: "Code",
            url: "https://github.com/Pixselve/gitlab-pipeline-to-md",
            type: LinkType.Github,
          },
          {
            name: "Nuit de l'info",
            url: "https://www.nuitdelinfo.com",
            type: LinkType.External,
          },
        ],
        tags: ["CLI", "TypeScript", "Gitlab CI"],
      },
    ],
  },
  {
    name: "Game Development",
    projects: [
      {
        name: "Thumbthing's Wrong",
        description:
          "A game made in 48 hours for the ESIR Game Jam 2023. It's a multiplayer game made with Unreal Engine. A player is on PC and has to jump from platform to platform and up to 4 players on a mobile web app who have to help (or not) the main player to advance using cards that break the rules of the game.",
        links: [
          {
            name: "Web app code",
            url: "https://github.com/Pixselve/thumbthings-wrong-client",
            type: LinkType.Github,
          },
        ],
        tags: ["Unreal", "5-person team", "Game Jam", "React", "Realtime"],
      },
      {
        name: "Age of tower",
        description:
          "A tower defense game made with Java and the StdDraw library. It features a map editor, animations, etc.",
        links: [
          {
            name: "Code",
            url: "https://github.com/pixselve-school/towerdefensejava",
            type: LinkType.Github,
          },
        ],
        tags: ["Java", "StdDraw", "Game", "2-person team"],
      },
    ],
  },
];
