import Icons from "./Icons";
import { motion } from "framer-motion";

const Projects = () => {
  const skills = [
  { title: "MongoDB", icon: "mongodb", className: "text-green-600 hover:text-green-900" },
  { title: "Express.js", icon: "express", className: "text-gray-400 hover:text-gray-600" },
  { title: "React.js", icon: "react", className: "text-cyan-400 hover:text-cyan-600" },
  { title: "Node.js", icon: "node", className: "text-green-500 hover:text-green-700" },
  { title: "JavaScript", icon: "javascript", className: "text-yellow-400 hover:text-yellow-600" },
  { title: "HTML", icon: "html", className: "text-orange-500 hover:text-orange-700" },
  { title: "CSS", icon: "css", className: "text-blue-500 hover:text-blue-700" },
  { title: "PHP", icon: "php", className: "text-indigo-400 hover:text-indigo-600" },
  { title: "Tailwind", icon: "tailwind", className: "text-sky-400 hover:text-sky-600" },
  { title: "Bootstrap", icon: "bootstrap", className: "text-purple-500 hover:text-purple-700" },
  { title: "RESTful APIs", icon: "restful", className: "text-orange-300 hover:text-orange-600" },
  { title: "GraphQL", icon: "graphql", className: "text-pink-500 hover:text-pink-700" },
];

const opacityIn = {
  hidden: { opacity: 0 },      
  visible: { 
    opacity: 1,               
    transition: { duration: 0.8 }     
  }
}

  return (
    <div id="summary" className="bg-[#212224] text-white">

      <motion.div
      className="p-5 text-start flex flex-col shadow-xl"
      variants={opacityIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false, amount: 0.5
      }}
      >
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Icons name="summary" />Professional Summary
        </h1>
        <article className="line-clamp-3 text-wrap text-xs sm:text-sm text-gray-200 leading-relaxed max-w-2xl text-gray-400">
          Motivated and detail-oriented IT graduate with a focus on Web and Mobile Application Development. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience creating responsive, user-friendly web applications.
        </article>

      </motion.div>

      <motion.div 
      className="p-5 text-start"
      variants={opacityIn}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false, amount: 1
      }}
      >
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-base">
          {skills.map((skill, index) => (
            <li key={index} className="flex text-xs items-center gap-3">
              <Icons
                name={skill.icon}
                className={`text-xl ${skill.className} cursor-pointer transition-all`}
              />
              {skill.title}
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default Projects;
