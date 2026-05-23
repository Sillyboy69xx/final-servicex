'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface SplitHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  trigger?: boolean
}

export function SplitHeading({
  text,
  className,
  as = 'h2',
  trigger = true,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    registerGsap()
    const el = ref.current
    if (!el) return
    const letters = el.querySelectorAll<HTMLSpanElement>('[data-letter]')
    const ctx = gsap.context(() => {
      gsap.set(letters, { y: -120, opacity: 0, rotate: -8 })
      gsap.to(letters, {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.1,
        ease: 'bounce.out',
        stagger: 0.025,
        scrollTrigger: trigger
          ? {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          : undefined,
      })
    })
    return () => ctx.revert()
  }, [trigger, text])

  const lines = text.split('\n')
  const Tag = as

  return (
    <Tag ref={ref} className={cn('font-heading', className)}>
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split('').map((ch, i) => (
                <span
                  key={i}
                  data-letter
                  className="inline-block"
                  style={{ willChange: 'transform' }}
                >
                  {ch}
                </span>
              ))}
              {wi < line.split(' ').length - 1 && (
                <span data-letter className="inline-block" style={{ willChange: 'transform' }}>
                  {'\u00A0'}
                </span>
              )}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
