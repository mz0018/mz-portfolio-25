import { lazy } from "react";
import{ motion } from "framer-motion";

const Icons = lazy(() => import("./Icons"));
const Tippy = lazy(() => import("@tippyjs/react"));
import "tippy.js/dist/tippy.css";

const platform = [
  { label: "Github", icon: "github", url: "https://github.com/" },
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/martinez-hanz-menzi-64bba7306/" },
  { label: "Facebook", icon: "facebook", url: "https://web.facebook.com/HnzMnzMrtnz" },
];

const fadeIn = {
  hidden: { opacity: 0 },      
  visible: { 
    opacity: 1,  
    y: -50,                     
    transition: { duration: 0.8 }     
  }
}

const opacityIn = {
  hidden: { opacity: 0 },      
  visible: { 
    opacity: 1,               
    transition: { duration: 0.8 }     
  }
}

const Content = () => (
  <div id="home" className="bg-[#F5F5DC] grid grid-cols-1 lg:grid-cols-2">
    
    {/* Left */}
    <div 
    className="relative min-h-[600px]"
    >
      <div className="bg-[#ff914d] h-[80vh] rounded mr-[30%]" />

      <motion.img
        src="./img/3.jpg"
        alt="me"
        loading="lazy"
        className="absolute bottom-0 right-0 lg:-right-3 w-[70vw] h-[70vw] max-w-[500px] max-h-[500px] object-cover rounded z-10 shadow-xl"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        viewport={{
          once: false, amount: 0.1
        }}
      />
    </div>

    {/* Right */}
    <div className="relative flex items-start justify-start md:items-center md:justify-center masked-bg">
      <motion.div 
      className="relative z-10 top-0 sm:top-0 -top-4 lg:-ml-6 bg-[#212224] opacity-80 w-full text-white sm:rounded-md transition-all shadow-lg px-5"
      variants={opacityIn}
      initial="hidden"
      whileInView="visible"
      whileHover={{ opacity: 0.9 }}
      viewport={{
        once: false, amount: 0.5
      }}
      >
        <p className="text-6xl md:text-8xl m-3 truncate">
          H <span className="font-bold text-[#ff914d]">ﾑ</span> N Z
        </p>
        <ul className="flex gap-2 m-5">
          {platform.map(({ label, icon, url }) => (
            <Tippy key={label} content={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff914d] transition-all"
              >
                <Icons name={icon} className="text-base sm:text-3xl" />
              </a>
            </Tippy>
          ))}
        </ul>
      </motion.div>
    </div>
    
  </div>
);

export default Content;
