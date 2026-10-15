'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const selector = [
  'main section',
  '.inner-page .eyebrow',
  '.inner-page h1',
  '.page-lead',
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

      const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible')
            activeObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' })

      observer = activeObserver
      elements.forEach((element) => activeObserver.observe(element))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}
