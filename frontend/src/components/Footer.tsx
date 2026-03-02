import { config } from "../config"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 py-6 text-center text-sm text-[var(--text-color)]">
      {config.footer.text.replace("{year}", String(year)).replace("{name}", config.personal.name)}
    </footer>
  )
}
