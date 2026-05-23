'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, Draggable, registerGsap } from '@/lib/gsap'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  alt?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = 'Comparație înainte și după detailing',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)

  useEffect(() => {
    registerGsap()
    const container = containerRef.current
    const handle = handleRef.current
    const after = afterRef.current
    if (!container || !handle || !after) return

    const update = (px: number) => {
      const rect = container.getBoundingClientRect()
      const pct = Math.max(0, Math.min(100, (px / rect.width) * 100))
      setPos(pct)
      after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
      handle.style.left = `${pct}%`
    }

    after.style.clipPath = 'inset(0 50% 0 0)'

    const drag = Draggable.create(handle, {
      type: 'x',
      bounds: container,
      cursor: 'ew-resize',
      onDrag() {
        const rect = container.getBoundingClientRect()
        const handleRect = handle.getBoundingClientRect()
        update(handleRect.left + handleRect.width / 2 - rect.left)
      },
      onPress(e) {
        const rect = container.getBoundingClientRect()
        const x = (e as PointerEvent).clientX - rect.left
        update(x)
      },
    })

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      update(e.clientX - rect.left)
    }
    container.addEventListener('click', onClick)

    return () => {
      drag.forEach((d) => d.kill())
      container.removeEventListener('click', onClick)
    }
  }, [beforeSrc, afterSrc])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative aspect-square w-full overflow-hidden border border-border-dark/30 select-none cursor-ew-resize bg-bg-secondary"
      >
        <div className="absolute inset-0">
          <Image
            src={beforeSrc}
            alt={`${alt} — înainte`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-4 left-4 z-10 bg-text-primary text-bg-primary px-3 py-1.5 font-heading tracking-widest text-sm">
            ÎNAINTE
          </span>
        </div>
        <div ref={afterRef} className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={`${alt} — după`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-4 right-4 z-10 bg-accent-primary text-white px-3 py-1.5 font-heading tracking-widest text-sm">
            DUPĂ
          </span>
        </div>
        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 w-1 bg-accent-primary -translate-x-1/2 cursor-ew-resize z-20"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-accent-primary text-white rounded-full flex items-center justify-center shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 4L1 10L6 16V4ZM14 4V16L19 10L14 4Z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-accent text-base text-text-muted mt-3 text-center">
        — trage de buton stânga/dreapta
      </p>
    </div>
  )
}
