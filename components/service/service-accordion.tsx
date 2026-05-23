'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { gsap, registerGsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  title: string
  content: React.ReactNode
}

export function ServiceAccordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="border-t border-border-dark/20">
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
          index={i}
        />
      ))}
    </ul>
  )
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGsap()
    const c = contentRef.current
    const inner = innerRef.current
    if (!c || !inner) return
    if (isOpen) {
      gsap.to(c, {
        height: inner.offsetHeight,
        duration: 0.5,
        ease: 'power3.out',
      })
      gsap.fromTo(
        inner,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: 'power3.out' },
      )
    } else {
      gsap.to(c, { height: 0, duration: 0.4, ease: 'power3.in' })
    }
  }, [isOpen])

  return (
    <li className="border-b border-border-dark/20">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 md:py-7 text-left group"
      >
        <div className="flex items-baseline gap-3 md:gap-6">
          <span className="font-accent text-base md:text-lg text-text-muted">
            0{index + 1}
          </span>
          <h3
            className={cn(
              'font-heading text-2xl md:text-4xl tracking-wider transition-colors',
              isOpen ? 'text-accent-primary' : 'group-hover:text-accent-primary',
            )}
          >
            {item.title}
          </h3>
        </div>
        <span
          className={cn(
            'shrink-0 w-10 h-10 md:w-12 md:h-12 border border-border-dark flex items-center justify-center transition-all',
            isOpen ? 'bg-accent-primary border-accent-primary text-white rotate-180' : 'bg-bg-primary',
          )}
        >
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <div ref={innerRef} className="pb-7 md:pb-10 pl-0 md:pl-12 max-w-3xl">
          {item.content}
        </div>
      </div>
    </li>
  )
}
