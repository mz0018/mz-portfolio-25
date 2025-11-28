import React from "react";
import { Link } from "react-scroll";
import * as LucideIcons from "lucide-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const navLinks = [
  { label: "Home", icon: "Home", targetId: "home" },
  { label: "Projects", icon: "Folder", targetId: "projects" },
  { label: "Skills", icon: "Code", targetId: "skills" },
  { label: "Experience", icon: "Briefcase", targetId: "experience" },
  { label: "About Hanz", icon: "User", targetId: "about" },
  { label: "Contact", icon: "Mail", targetId: "contact" },
];

const kaizen =
  "Kaizen is a Japanese philosophy that emphasizes making small, consistent changes over time to enhance daily practices and workflows";

const Navbar = ({ openSidebar }) => (
  <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl px-5 py-4 md:py-6 lg:py-7 shadow-lg flex items-center transition-all duration-300 border-b border-gray-200">
    <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
      <Tippy content={kaizen}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold cursor-help">
          <span className="text-gray-700">改</span>
          <span className="text-[#ff914d]">善</span>
        </h1>
      </Tippy>

      <button
        onClick={openSidebar}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
      >
        <LucideIcons.Menu className="text-2xl text-gray-800" />
      </button>

      <ul className="hidden md:flex items-center gap-4 text-sm font-medium">
        {navLinks.map(({ label, icon, targetId }) => {
          const Icon = LucideIcons[icon];
          return (
            <Link
              key={targetId}
              to={targetId}
              smooth
              duration={500}
              className="flex items-center gap-2 px-2 py-1 text-gray-700 hover:text-[#ff914d] transition-all cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden lg:inline text-sm md:text-md lg:text-md tracking-wider">
                {label}
              </span>
            </Link>
          );
        })}
      </ul>
    </div>
  </nav>
);

export default Navbar;
