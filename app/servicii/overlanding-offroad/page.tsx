import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceAccordion } from '@/components/service/service-accordion'
import { ServiceCta } from '@/components/service/service-cta'
import { RelatedServices } from '@/components/service/related-services'
import { OverlandingCarousel } from '@/components/service/overlanding-carousel'
import { ProcessSection } from '@/components/service/process-section'
import { ScrollReveal } from '@/components/scroll-reveal'
import { serviceHeroImages } from '@/lib/media'

export const metadata = {
  title: 'Overlanding & Off-Road — Pregătiri Complete | Service Auto',
  description:
    'Modificări overlanding și off-road, de la consultanță la implementare. Peste 10 ani de experiență în pregătirea mașinilor pentru expediții lungi.',
}

export default function OverlandingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Acasă', href: '/' },
          { label: 'Servicii', href: '/servicii' },
          { label: 'Overlanding & Off-Road' },
        ]}
      />

      <ServiceHero
        eyebrow="— flagship"
        title={'OVERLANDING\n& OFF-ROAD'}
        imageSrc={serviceHeroImages['overlanding-offroad']}
        imageAlt="Build overlanding — pregătire off-road"
        ratio="21/9"
      />

      <section className="container-x pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          <ScrollReveal className="md:col-span-7">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-5">
              Peste 10 ani de experiență în pregătirea mașinilor pentru drumurile care nu apar pe hartă. Lucrăm de la consultanță până la implementare — și rămânem în contact mult timp după ce mașina iese din service.
            </p>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Ne ocupăm de fiecare piesă: suspensie, protecții, bagajeri, snorkel, sertare custom, sisteme de iluminat și tot ce ține de transformarea unui vehicul de serie într-o mașină reală de expediție. Fără compromisuri estetice care nu țin la primul drum greu.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-5">
            <div className="border border-border-dark/15 p-6 bg-bg-secondary">
              <p className="font-accent text-2xl text-accent-primary mb-4">
                — ce ne distinge
              </p>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Soluții personalizate, nu kit-uri standard.
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Atenție la detaliu pe fiecare îmbinare.
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Lucrăm pe termen lung cu fiecare mașină.
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-accent-primary">/</span>
                  Ne alegem proiectele cu grijă.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OverlandingCarousel />

      <section className="container-x py-16 md:py-24">
        <p className="font-accent text-xl text-accent-primary mb-2">— sub-servicii</p>
        <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
          Ce facem mai exact
        </h2>
        <ServiceAccordion
          items={[
            {
              title: 'Consultanță cumpărare vehicul',
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Te ajutăm să alegi vehiculul potrivit pentru rutele tale. Nu ne uităm doar la marcă și model — analizăm versiuni, motorizări, transmisii, istoric, ușurința modificărilor și costul real de întreținere.
                  </p>
                  <p>
                    Verificăm fizic mașina înainte să o cumperi — diagnosticare completă, examinare punte, suspensie, lac, sasiu. Plecăm cu o listă clară de ce e bine și ce trebuie făcut.
                  </p>
                </div>
              ),
            },
            {
              title: 'Consultanță overlanding',
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Construim împreună planul de pregătire. Discutăm despre destinațiile pe care le ai în minte, despre stilul tău de călătorie, despre câți pasageri și cât bagaj transporți de obicei.
                  </p>
                  <p>
                    Rezultatul: un parcurs etapizat, cu priorități clare și un buget realist. Fără modificări inutile, fără echipamente care arată bine pe Instagram dar nu rezistă pe teren.
                  </p>
                </div>
              ),
            },
            {
              title: 'Implementare modificări',
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Aici lucrăm la mașină. De la suspensie ridicată și protecții punte, la roof rack-uri, dulapuri sertare aluminiu, snorkel, iluminat auxiliar și sisteme electrice auxiliare.
                  </p>
                  <p>
                    Fabricăm piesele care nu se găsesc — soluții pe care nu le ai gata făcute. Fiecare element este reglat pe mașină, testat și predat funcțional.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </section>

      <ProcessSection />

      <ServiceCta />
      <RelatedServices exclude="overlanding-offroad" />
    </>
  )
}
