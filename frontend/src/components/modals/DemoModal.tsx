import { useEffect } from "react"

type Project = {
  name: string
  description: string
  tech: string[]
  demoNote?: string
}

type DemoModalProps = {
  project: Project | null
  onClose: () => void
}

export function DemoModal({ project, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!project) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-[var(--h1-color)]">
            {project.name}
          </h3>
          <button
            onClick={onClose}
            className="ml-4 text-[var(--p-color)] hover:text-[var(--h1-color)] text-xl leading-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <p className="mt-3 text-sm text-[var(--p-color)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--border-color)] px-2 py-1 text-xs text-[var(--p-color)]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.demoNote && (
          <div className="mt-4 rounded bg-[var(--border-color)] p-3 text-sm text-[var(--p-color)]">
            {project.demoNote}
          </div>
        )}
      </div>
    </div>
  )
}
