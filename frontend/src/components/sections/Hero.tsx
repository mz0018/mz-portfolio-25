import { config } from "../../config"

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-bold text-[var(--h1-color)]">
        {config.hero.title}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-[var(--p-color)]">
        {config.hero.subtitle}
      </p>
    </section>
  )
}
