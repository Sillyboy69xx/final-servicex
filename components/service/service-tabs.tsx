'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Tab {
  label: string
  content: React.ReactNode
}

export function ServiceTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8 border-b border-border-dark/15 pb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'px-4 md:px-6 py-2.5 md:py-3 font-heading tracking-widest text-sm md:text-base border transition-colors',
              active === i
                ? 'bg-accent-primary text-white border-accent-primary'
                : 'border-border-dark/30 hover:border-accent-primary',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  )
}
