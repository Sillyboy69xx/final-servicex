'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger, registerGsap } from '@/lib/gsap'

interface ServicePhotoStripProps {
  images: string[]
  altPrefix?: string
}

/** Horizontal scroll strip of workshop / service photos */
export function ServicePhotoStrip({
  images,
  altPrefix = 'Lucrare service',
}: ServicePhotoStripProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const track = trackRef.current
    if (!track) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        track.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: track, start: 'top 85%' },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  if (!images.length) return null

  return (
    <section className="py-12 md:py-16 bg-bg-secondary border-y border-border-dark/10 overflow-hidden">
      <div className="container-x mb-6">
        <p className="font-accent text-xl text-accent-primary mb-2">— din atelier</p>
        <h2 className="font-heading text-3xl md:text-5xl tracking-wider">
          Lucrări recente
        </h2>
      </div>
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-10 lg:px-16 pb-2"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="snap-start shrink-0 w-[75%] sm:w-[320px] md:w-[380px] relative aspect-[4/3] overflow-hidden border border-border-dark/15"
          >
            <Image
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-cover"
              sizes="380px"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
