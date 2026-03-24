import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      if (!els.length) return

      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const siblings = [...entry.target.parentElement.children]
              const idx = siblings.indexOf(entry.target)
              setTimeout(() => entry.target.classList.add('visible'), idx * 80)
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      els.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [location])
}
