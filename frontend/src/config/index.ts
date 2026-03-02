export const config = {
  personal: {
    name: "Hanz",
    logo: "/img/logo.png",
    email: "your@email.com",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
    },
  },

  hero: {
    title: "Hi, I'm Hanz",
    subtitle: "I build things for the web",
  },

  about: {
    title: "About Me",
    content: `I'm a developer who loves building clean, minimal, and functional websites.
      I specialize in frontend development and creating great user experiences.`,
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "Project One",
        description: "A brief description of what this project does.",
        tech: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/yourusername/project-one",
        demo: "https://project-one.demo.com",
      },
      {
        name: "Project Two",
        description: "Another project with a short description.",
        tech: ["Vue", "Node.js", "PostgreSQL"],
        link: "https://github.com/yourusername/project-two",
      },
      {
        name: "Project Three",
        description: "Yet another awesome project.",
        tech: ["Next.js", "Prisma", "MongoDB"],
        link: "https://github.com/yourusername/project-three",
        demo: "https://project-three.demo.com",
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    email: "your@email.com",
    message: "Feel free to reach out for collaborations or just a friendly hello!",
  },

  footer: {
    text: "© {year} {name}. All rights reserved.",
  },
}
