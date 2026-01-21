export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <img src="/img/logo.png" className="h-20 w-20" />

        <ul className="flex gap-6 text-sm">
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
      </nav>
    </header>
  )
}
