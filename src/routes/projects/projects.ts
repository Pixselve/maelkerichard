export interface ProjectType {
  name: string;
  description: string;

  links: { name: string, url: string }[];
  tags: string[];
}

export const webProjects: ProjectType[] = [
  {
    name: "Association Manager",
    description: "Two projects made at school to learn web development: a REST API made with NestJS and a frontend with Angular.",
    links: [
      { name: "Frontend Code", url: "https://github.com/pixselve-school/wm-projet" },
      { name: "Backend Code", url: "https://github.com/pixselve-school/tp1-wm" }
    ],
    tags: ["Angular", "NestJS", "TypeScript", "REST API"]
  },
  {
    name: "Kontrakt",
    description: "A web app to manage students exercises progress and grades.",
    links: [
      { name: "Frontend Code", url: "https://github.com/Pixselve/kontrakt-web" },
      { name: "Backend Code", url: "https://github.com/Pixselve/kontrakt-server-go" }
    ],
    tags: ["Vue", "Go", "GraphQL", "TypeScript"]
  }
];
