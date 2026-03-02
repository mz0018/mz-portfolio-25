import { config } from "../../config"

export function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--h1-color)]">
        {config.about.title}
      </h2>
      <p className="mt-4 max-w-2xl text-[var(--p-color)] whitespace-pre-line">
        {config.about.content}
      </p>
    </section>
  )
}
