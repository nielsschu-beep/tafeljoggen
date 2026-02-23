import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('gynzy-theme') || 'teacher'
  )
  const [density, setDensityState] = useState(
    () => localStorage.getItem('gynzy-density') || 'regular'
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('teacher', 'student')
    root.classList.remove('density-regular', 'density-short', 'density-tall')
    root.classList.add(theme)
    root.classList.add(`density-${density}`)
    localStorage.setItem('gynzy-theme', theme)
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('density-regular', 'density-short', 'density-tall')
    root.classList.add(`density-${density}`)
    localStorage.setItem('gynzy-density', density)
  }, [density])

  // Initialize on mount
  useEffect(() => {
    const root = document.documentElement
    root.classList.add(theme)
    root.classList.add(`density-${density}`)
  }, [])

  const setTheme = (newTheme) => setThemeState(newTheme)
  const setDensity = (newDensity) => setDensityState(newDensity)

  return { theme, setTheme, density, setDensity }
}
