import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";
import Icons from "./Icons";

const projects = [
  {
    name: "Pro Animal Welfare System",
    image: "/img/paws_home.jpg",
    url: "https://proanimalwelfare.shop",
    repo: "https://github.com/mz0018/Pro_animale_welfare_system.git"
  },
  {
    name: "Martinez Commerce",
    image: "/img/mz_home.jpg",
    url: "https://mzcommerce.shop",
    repo: "https://github.com/mz0018/mz_e-commerce.git"
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function WebApp() {
  return (
    <motion.div
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="flex p-5 bg-[#18181a]"
    >
      <div className="text-xs grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ name, image, url, repo }, i) => (
          <motion.div
            key={i}
            variants={fadeVariants}
            className="flex flex-col rounded-md overflow-hidden text-white bg-[#212224] shadow-lg"
          >
            <div className="h-48 w-full overflow-hidden">
              <motion.img
                loading="lazy"
                src={image}
                alt={name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-4 py-3 flex justify-between items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#ff914d] hover:underline transition-all"
              >
                <Tippy content={`Visit ${name}`}>
                  <span className="inline-flex">
                    <Icons name="link" />
                  </span>
                </Tippy>
                <span>Visit</span>
              </a>

              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#ff914d] hover:underline transition-all"
              >
                <Tippy content="View GitHub Repository">
                  <span className="inline-flex">
                    <Icons name="github" />
                  </span>
                </Tippy>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
