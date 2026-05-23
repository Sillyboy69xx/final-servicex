import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function ServiceCta() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="bg-text-primary text-bg-primary p-8 md:p-14 border border-border-dark">
        <p className="font-accent text-xl text-accent-secondary mb-3">— hai să vorbim</p>
        <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-6 md:mb-8 max-w-3xl">
          Discutăm proiectul tău. Telefonic, fără grabă.
        </h2>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-3 bg-accent-primary text-white px-7 py-4 font-heading text-xl md:text-2xl tracking-widest hover:bg-bg-primary hover:text-text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>
        <p className="font-accent text-lg mt-6 text-bg-secondary">
          fiecare proiect este personal —
        </p>
      </div>
    </section>
  )
}
