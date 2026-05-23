'use client'

import { useEffect, useRef } from 'react'
import { gsap, registerGsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
