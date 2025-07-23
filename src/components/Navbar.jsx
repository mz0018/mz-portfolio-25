import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Icons from './Icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Project", icon: "projects", targetId: "projects" },
    { label: "Contact", icon: "mail", targetId: "contact" },
  ]

  const kaizen = "Kaizen is a Japanese philosophy that emphasizes making small, consistent changes over time to enhance daily practices and workflows"

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between">

          <Tippy content={kaizen}>
            <h1 className="text-5xl font-semibold cursor-help">
              <span className="text-gray-600">改</span>
              <span className="text-[#ff914d]">善</span>
            </h1>
          </Tippy>

          <div className="relative md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Icons name="bars" className="text-xl" />
            </button>

            {isOpen && (
              <ul className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 rounded space-y-2 z-50">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.targetId}
                    smooth
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1 cursor-pointer hover:text-[#ff914d]"
                  >
                    <Icons name={link.icon} />
                    {link.label}
                  </Link>
                ))}
              </ul>
            )}
          </div>

          <ul className="hidden md:flex gap-4 text-sm">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.targetId}
                smooth
                duration={500}
                className="font-semibold flex items-center justify-center gap-1 cursor-pointer hover:text-[#ff914d]"
              >
                <Icons name={link.icon} />
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
