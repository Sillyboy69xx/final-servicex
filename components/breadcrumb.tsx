import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-6 md:pt-10">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-accent-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
