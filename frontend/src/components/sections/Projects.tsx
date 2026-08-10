import { useState } from "react"
import { config } from "../../config"
import { DemoModal } from "../modals/DemoModal"

export function Projects() {
  const { items } = config.projects
  const [selectedProject, setSelectedProject] = useState<typeof items[number] | null>(null)

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--h1-color)]">
        {config.projects.title}
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-[var(--border-color)] p-5 transition-colors hover:border-[var(--link-color)]"
          >
            <h3 className="text-lg font-semibold text-[var(--h1-color)]">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--p-color)]">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--border-color)] px-2 py-1 text-xs text-[var(--p-color)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--link-color)] hover:underline"
                >
                  Code
                </a>
              )}
              {project.demo && (
                project.name === "Pro Animal Welfare System" || project.name === "Client Satisfactory Feedback" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link-color)] hover:underline"
                  >
                    Visit
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[var(--link-color)] hover:underline cursor-pointer"
                  >
                    Demo
                  </button>
                )
              )}
            </div>
          </article>
        ))}
      </div>
      <DemoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
