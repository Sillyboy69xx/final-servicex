import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceCta } from '@/components/service/service-cta'
import { RelatedServices } from '@/components/service/related-services'
import { ServicePhotoStrip } from '@/components/service/service-photo-strip'
import { ScrollReveal } from '@/components/scroll-reveal'
import { serviceHeroImages, servicePhotoStrips } from '@/lib/media'

export const metadata = {
  title: 'Diagnoză Multi-Marcă — Service Auto',
  description:
    'Diagnoză completă cu echipamente specializate pentru fiecare grup de producători.',
}

export default function Page() {
  const strip = servicePhotoStrips['diagnoza-multi-marca'] ?? []

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Acasă', href: '/' },
          { label: 'Servicii', href: '/servicii' },
          { label: 'Diagnoză Multi-Marcă' },
        ]}
      />
      <ServiceHero
        title={'DIAGNOZĂ\nMULTI-MARCĂ'}
        intro="Diagnoză profesională cu echipamente dedicate pentru fiecare grup de producători. Citim coduri reale, măsurăm date live, validăm înainte să propunem o reparație."
        imageSrc={serviceHeroImages['diagnoza-multi-marca']}
        imageAlt="Stand diagnoză multi-marcă"
        ratio="21/9"
      />

      <section className="container-x pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          <ScrollReveal className="md:col-span-7">
            <h2 className="font-heading text-3xl md:text-5xl tracking-wider mb-5">
              Echipamente specializate
            </h2>
            <p className="text-lg text-text-primary leading-relaxed mb-5">
              Folosim aparatură dedicată pentru fiecare grup de producători — unelte oficiale și soluții complementare. Nu lucrăm cu un singur tester universal pentru toate mărcile.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Asta înseamnă acces real la unitățile de control: motor, transmisie, ABS, airbag, comfort, infotainment, asistență. Citim, programăm și calibrăm corect — fără ghiceli.
            </p>
            <p className="text-text-muted leading-relaxed">
              Fiecare diagnoză se încheie cu un raport clar: ce am găsit, ce este urgent, ce mai poate aștepta. Decizia de reparație rămâne mereu la tine, cu informația întreagă pe masă.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-5">
            <div className="border border-border-dark/15 p-6 bg-bg-secondary">
              <p className="font-accent text-2xl text-accent-primary mb-4">
                — ce includem
              </p>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Citire și ștergere coduri pe toate modulele
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Date live, grafice, oscilograme
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Codări, adaptări, calibrări
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Programare componente noi
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Raport scris la final
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {strip.length > 0 && (
        <ServicePhotoStrip images={strip} altPrefix="Diagnoză atelier" />
      )}

      <ServiceCta />
      <RelatedServices exclude="diagnoza-multi-marca" />
    </>
  )
}
