import React from "react";
import { Link } from "react-scroll";
import * as LucideIcons from "lucide-react";

const Sidebar = ({ isOpen, navLinks, closeSidebar }) => (
  <>
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeSidebar}
    />

    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-60 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col gap-4 p-4 mt-4">
        {navLinks.map(({ label, icon, targetId }) => {
          const Icon = LucideIcons[icon];
          return (
            <Link
              key={targetId}
              to={targetId}
              smooth
              duration={500}
              onClick={closeSidebar}
              className="flex items-center gap-2 text-gray-700 hover:text-[#ff914d] cursor-pointer transition"
            >
              <Icon className="w-5 h-5" />
              <span className="text-base">{label}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  </>
);

export default Sidebar;
