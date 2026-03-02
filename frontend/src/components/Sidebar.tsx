type SidebarProps = {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-64 bg-[var(--sidebar-color)] shadow-lg transform transition-transform md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-sm font-medium">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-6 text-sm">
            {links.map((li) => (
              <li key={li.name}>
                <a href={li.href} onClick={onClose} className="hover:underline">
                  {li.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
