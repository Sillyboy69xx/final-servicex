'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, registerGsap } from '@/lib/gsap'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryItems } from '@/lib/media'

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    if (active !== null && lightboxRef.current && innerRef.current) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' },
      )
      gsap.fromTo(
        innerRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' },
      )
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  const close = () => setActive(null)
  const next = () =>
    setActive((a) => (a === null ? 0 : (a + 1) % galleryItems.length))
  const prev = () =>
    setActive((a) =>
      a === null ? 0 : (a - 1 + galleryItems.length) % galleryItems.length,
    )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const ratioClass = {
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  } as const

  return (
    <>
      <div className="md:hidden flex flex-col gap-4 container-x">
        {galleryItems.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="text-left group"
          >
            <div
              className={`relative w-full overflow-hidden border border-border-dark/15 ${ratioClass[item.ratio]}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="font-accent text-lg mt-3 text-text-muted group-hover:text-accent-primary transition-colors">
              — {item.caption}
            </p>
          </button>
        ))}
      </div>

      <div className="hidden md:block container-x">
        <div className="columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {galleryItems.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className="text-left group block w-full break-inside-avoid"
            >
              <div
                className={`relative w-full overflow-hidden border border-border-dark/15 ${ratioClass[item.ratio]}`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="font-accent text-xl mt-3 text-text-muted group-hover:text-accent-primary transition-colors">
                — {item.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[90] bg-text-primary/95 flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="absolute top-4 right-4 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Anterior"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Următor"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            ref={innerRef}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full"
          >
            <div className="relative aspect-[4/3] bg-bg-secondary border border-bg-primary/20 overflow-hidden">
              <Image
                src={galleryItems[active].src}
                alt={galleryItems[active].caption}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
            <p className="font-accent text-2xl md:text-3xl text-bg-primary mt-4 text-center">
              — {galleryItems[active].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
