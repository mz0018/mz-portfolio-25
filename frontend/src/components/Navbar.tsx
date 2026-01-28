import { useState } from "react"
import { Sidebar } from "./Sidebar"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="border-b">
        <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-14 w-14 sm:h-16 sm:w-16"
          />

          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  )
}
