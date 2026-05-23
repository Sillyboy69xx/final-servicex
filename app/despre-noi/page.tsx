import { Breadcrumb } from '@/components/breadcrumb'
import { SplitHeading } from '@/components/split-heading'
import { OptimizedImage } from '@/components/optimized-image'
import { images } from '@/lib/media'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ContactStrip } from '@/components/home/contact-strip'
import { Wrench, Compass, Handshake } from 'lucide-react'

export const metadata = {
  title: 'Despre noi — Service Auto Premium București',
  description:
    'Echipă cu experiență, atenție la detaliu și o abordare personală pentru fiecare mașină.',
}

const values = [
  {
    icon: Wrench,
    title: 'Lucrat manual',
    text: 'Fiecare reparație trece prin mâinile cuiva care o cunoaște. Fără linii de asamblare, fără reparații rapide.',
  },
  {
    icon: Compass,
    title: 'Atenție la detaliu',
    text: 'Cordonul de sudură. Cuplul corect. Reglajul final. Lucrurile mici fac diferența.',
  },
  {
    icon: Handshake,
    title: 'Pe termen lung',
    text: 'Lucrăm cu mașinile clienților noștri ani la rând. Le cunoaștem.',
  },
]

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Acasă', href: '/' }, { label: 'Despre' }]} />

      <section className="container-x pt-6 md:pt-10 pb-12 md:pb-20">
        <p className="font-accent text-xl text-accent-primary mb-2">— echipa</p>
        <SplitHeading
          text={'DESPRE\nNOI'}
          as="h1"
          className="text-7xl sm:text-8xl md:text-[12rem] tracking-wider mb-8 md:mb-12"
        />
        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          <div className="md:col-span-7 space-y-5 text-text-muted">
            <ScrollReveal>
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                Suntem un service mic, dedicat. Lucrăm cu mașinile clienților noștri pe termen lung — unele de mulți ani.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="leading-relaxed">
                Pasiunea noastră e overlanding-ul și off-road-ul, dar nu refuzăm lucrări care țin de bazele unei mașini sănătoase: revizii, suspensie, A/C, diagnoză, sudură, eșapament. Fiecare are atenția cuvenită.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="leading-relaxed">
                Ne alegem proiectele cu grijă. Nu pentru că ne facem mofturi, ci pentru că vrem să facem fiecare lucrare cum trebuie. Fiecare proiect este personal — și asta înseamnă timp, atenție, conversație înainte de chei.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <blockquote className="mt-8 border-l-4 border-accent-primary pl-6">
                <p className="font-accent text-3xl md:text-4xl text-text-primary leading-tight">
                  o mașină nu se reparӑ — se cunoaște.
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15} className="md:col-span-5">
            <OptimizedImage
              src={images.despreNoi}
              alt="Land Rover în service — lucrări exterioare"
              ratio="3/4"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-bg-secondary border-y border-border-dark/10 py-16 md:py-24">
        <div className="container-x">
          <p className="font-accent text-xl text-accent-primary mb-2">— valori</p>
          <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
            Cum gândim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="border border-border-dark/15 bg-bg-primary p-6 md:p-8 h-full">
                  <div className="w-12 h-12 bg-accent-primary text-white flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl tracking-wider mb-3">
                    {v.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
