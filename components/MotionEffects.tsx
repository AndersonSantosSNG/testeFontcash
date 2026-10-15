'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const selector = [
  'main section',
  '.inner-page .eyebrow',
  '.inner-page h1',
  '.page-lead',
  '.card',
  '.solution-card',
  '.journey-grid article',
  '.market-stats > div',
  '.market-copy',
  '.usecase',
  '.governance-grid article',
  '.evolution-item',
  '.detail-section',
  '.contact-image-panel',
  '.contact-form-content',
].join(',')

export default function MotionEffects() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let observer: IntersectionObserver | undefined
    const frame = requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
      elements.forEach((element, index) => {
        element.classList.add('motion-item')
        element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 70}ms`)
      })

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' })

      elements.forEach((element) => observer.observe(element))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}
