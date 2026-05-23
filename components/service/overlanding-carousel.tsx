'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap'
import { overlandingCarouselItems } from '@/lib/media'

export function OverlandingCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const track = trackRef.current
    if (!track) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: track, start: 'top 80%' },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="py-12 md:py-20 bg-bg-secondary border-y border-border-dark/10 overflow-hidden">
      <div className="container-x mb-8">
        <p className="font-accent text-xl text-accent-primary mb-2">— builds</p>
        <h2 className="font-heading text-4xl md:text-6xl tracking-wider">
          Lucrări recente
        </h2>
      </div>
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-10 lg:px-16 pb-4"
      >
        {overlandingCarouselItems.map((item) => (
          <div key={item.src} className="snap-start shrink-0 w-[80%] md:w-[420px]">
            <div className="relative aspect-[4/3] overflow-hidden border border-border-dark/15">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="420px"
              />
            </div>
            <p className="font-accent text-lg md:text-xl mt-3 text-text-muted">
              — {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
