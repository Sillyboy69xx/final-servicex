import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site'
import { serviceCardImages } from '@/lib/media'
import { Breadcrumb } from '@/components/breadcrumb'
import { SplitHeading } from '@/components/split-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ContactStrip } from '@/components/home/contact-strip'

export const metadata = {
  title: 'Servicii — Service Auto Premium București',
  description:
    'Toate serviciile noastre: overlanding & off-road, detailing, revizii, aer condiționat, diagnoză multi-marcă, sablare & antifonare, sudură argon, consultanță.',
}

export default function ServiciiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Acasă', href: '/' }, { label: 'Servicii' }]} />
      <section className="container-x pt-6 md:pt-10 pb-12 md:pb-20">
        <p className="font-accent text-xl text-accent-primary mb-2">— ce facem</p>
        <SplitHeading
          text={'SERVICII'}
          as="h1"
          className="text-7xl sm:text-8xl md:text-[12rem] tracking-wider mb-6"
        />
        <p className="max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed">
          De la consultanță la implementare. Fiecare serviciu este lucrat cu aceeași atenție — pentru că lucrăm cu mașinile clienților noștri pe termen lung.
        </p>
      </section>

      <section className="container-x grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 pb-16 md:pb-24">
        {services.map((s, i) => (
          <ScrollReveal key={s.slug} delay={(i % 4) * 0.05}>
            <Link
              href={`/servicii/${s.slug}`}
              className={`group block border border-border-dark/15 hover:bg-bg-secondary transition-colors ${
                s.flagship ? 'md:col-span-2' : ''
              }`}
            >
              <div className={s.flagship ? 'md:flex' : ''}>
                <div
                  className={`relative overflow-hidden ${s.flagship ? 'md:w-1/2 aspect-[16/9]' : 'aspect-[4/3]'}`}
                >
                  <Image
                    src={serviceCardImages[s.slug]}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes={s.flagship ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                    priority={s.flagship}
                  />
                </div>
                <div className="p-5 md:p-8 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-accent text-base text-text-muted">
                        0{i + 1}
                      </span>
                      {s.flagship && (
                        <span className="font-accent text-base text-accent-primary">
                          flagship
                        </span>
                      )}
                    </div>
                    <h2
                      className={`font-heading tracking-wider group-hover:text-accent-primary transition-colors ${
                        s.flagship
                          ? 'text-4xl md:text-6xl lg:text-7xl'
                          : 'text-3xl md:text-4xl'
                      }`}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted leading-relaxed max-w-md">
                      {s.short}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-heading tracking-widest text-accent-primary">
                    Vezi serviciul{' '}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      <ContactStrip />
    </>
  )
}
