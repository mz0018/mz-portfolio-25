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
I specialize in backend development, creating scalable APIs, efficient systems, and reliable server-side applications.`,
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "Pro Animal Welfare System",
        description: "A veterinary practice management platform with dual client and admin interfaces. Clients can browse products and book appointments via a custom interactive calendar. Admins manage products, appointments, orders, and follow-up checkups through a dedicated dashboard.",
        tech: ["MongoDB", "Express.js", "React Vite + TypeScript", "Node.js", "Redis", "AWS S3"],
        link: "https://github.com/mz0018/paws_refactored",
        demo: "https://proaws.online"
      },
      {
        name: "Client Satisfactory Feedback",
        description: "CSF is LGU Solano's Client Satisfaction Measurement (CSM) tool. It replaces paper forms with a quick and private digital survey that helps offices understand client experiences and improve public services.",
        tech: ["MongoDB", "Express.js", "React Vite + TypeScript", "Node.js"],
        link: "https://github.com/mz0018/solano_csf.git",
        demo: "https://csf.proaws.online"
      },
      {
        name: "PJNV Visitors Logs",
        description: "Capstone project: A private internal web application for the Provincial Jail of Nueva Vizcaya featuring automated face recognition for visitor identification and inmate management.",
        tech: ["React Vite", "Tailwind CSS", "Tensorflow.js", "Face-api.js", "Node.js", "Express", "MongoDB", "Python"],
        link: "https://github.com/mz0018/bjmp_biometrics.git",
        demo: "https://project-one.demo.com",
        demoNote: "Requires Docker. Contact me for the .env file.",
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    email: "martinezhanzmenzi@email.com",
    message: "Feel free to reach out for collaborations or just a friendly hello!",
  },

  footer: {
    text: "© {2026} {Hanz Menzi}. All rights reserved.",
  },
}
