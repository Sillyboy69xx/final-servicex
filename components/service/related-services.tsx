import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services, type ServiceSlug } from '@/lib/site'

export function RelatedServices({ exclude }: { exclude: ServiceSlug }) {
  const others = services.filter((s) => s.slug !== exclude).slice(0, 4)
  return (
    <section className="container-x py-16 md:py-24 border-t border-border-dark/15">
      <p className="font-accent text-xl text-accent-primary mb-2">— continuă</p>
      <h2 className="font-heading text-4xl md:text-6xl tracking-wider mb-8 md:mb-12">
        Alte servicii
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {others.map((s) => (
          <Link
            key={s.slug}
            href={`/servicii/${s.slug}`}
            className="group p-5 border border-border-dark/15 hover:bg-bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-heading text-2xl md:text-3xl tracking-wider group-hover:text-accent-primary">
                {s.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-sm text-text-muted">{s.short}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
