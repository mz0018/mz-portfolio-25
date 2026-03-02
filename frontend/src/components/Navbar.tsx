import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { useTheme } from "../hooks/useTheme"
import { List } from "phosphor-react"
import { config } from "../config"

export function Navbar() {
  const { toggleTheme } = useTheme()

  const [open, setOpen] = useState(false)

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header className="shadow-xl">
        <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded focus:outline-none cursor-pointer"
          >
            <img
              src={config.personal.logo}
              alt={config.personal.name}
              className="logo h-14 w-14 sm:h-16 sm:w-16"
            />
          </button>

          <ul className="hidden md:flex text-sm gap-8">
            {links.map((li) => (
              <li key={li.name}>
                <a href={li.href} className="link focus:outline-none">
                  {li.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <List size={24} weight="bold" className="icon" />
          </button>
        </nav>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  )
}
