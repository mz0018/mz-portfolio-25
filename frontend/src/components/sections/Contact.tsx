import { config } from "../../config"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--h1-color)]">
        {config.contact.title}
      </h2>
      <p className="mt-4 max-w-xl text-[var(--p-color)]">
        {config.contact.message}
      </p>
      <a
        href={`mailto:${config.contact.email}`}
        className="mt-6 inline-block rounded-md bg-[var(--h1-color)] px-6 py-3 text-sm font-medium text-[var(--bg-color)] transition-opacity hover:opacity-80"
      >
        {config.contact.email}
      </a>
    </section>
  )
}
