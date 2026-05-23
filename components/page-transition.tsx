'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, registerGsap } from '@/lib/gsap'

export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const first = useRef(true)

  useEffect(() => {
    registerGsap()
    if (first.current) {
      first.current = false
      return
    }
    const el = overlayRef.current
    if (!el) return
    const tl = gsap.timeline()
    tl.set(el, { xPercent: -100, display: 'block' })
      .to(el, { xPercent: 0, duration: 0.35, ease: 'power3.in' })
      .to(el, { xPercent: 100, duration: 0.45, ease: 'power3.out', delay: 0.05 })
      .set(el, { display: 'none' })
  }, [pathname])

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[100] bg-accent-primary pointer-events-none hidden"
    />
  )
}
