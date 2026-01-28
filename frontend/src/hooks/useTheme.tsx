import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

export function useTheme() {

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    return (localStorage.getItem("theme") as Theme) || document.documentElement.dataset.theme || "dark"
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return { theme, setTheme, toggleTheme }
}
