import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceCta } from '@/components/service/service-cta'
import { RelatedServices } from '@/components/service/related-services'
import { ServiceTabs } from '@/components/service/service-tabs'
import { BeforeAfterSlider } from '@/components/service/before-after-slider'
import { ScrollReveal } from '@/components/scroll-reveal'
import { images, serviceHeroImages } from '@/lib/media'

export const metadata = {
  title: 'Detailing & Spălare — Recondiționare Auto Premium',
  description:
    'Detailing interior și exterior, spălare detaliată, decontaminare, corecție lac, protecție ceramică. Lucrat manual, atent.',
}

const interiorList = [
  'Plafon și elemente de siguranță',
  'Scaune, tapițerie și piele',
  'Podea și portbagaj',
  'Bord și guri de ventilație',
  'Fețe de uși, plastice și chedere',
  'Suprafețe vitrate',
]

const exteriorList = [
  'Spălare exterioară completă',
  'Decontaminare chimică și mecanică',
  'Examinare și măsurare lac',
  'Corecție lac / polish',
  'Finisare lac',
  'Aplicare protecție ceramică ONE EVO',
]

const spalareList = [
  'Spălare detaliată la exterior, folosind tehnici sigure pentru vopsea',
  'Decontaminare chimică completă pentru jante și caroserie',
  'Decontaminare mecanică pe elementele predispuse la contaminare',
  'Curățarea atentă a balamalelor și a ornamentelor interioare',
  'Aplicare dressing dedicat pentru anvelope și plastice exterioare',
]

export default function DetailingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Acasă', href: '/' },
          { label: 'Servicii', href: '/servicii' },
          { label: 'Detailing & Spălare' },
        ]}
      />
      <ServiceHero
        title={'DETAILING\n& SPĂLARE'}
        intro="Recondiționarea interiorului și exteriorului la aspect impecabil. Lucrăm cu produse profesionale și răbdare reală — fiecare pas este controlat manual."
        imageSrc={serviceHeroImages['detailing-spalare']}
        imageAlt="Detailing auto premium"
        ratio="21/9"
      />

      <section className="container-x pb-12 md:pb-20">
        <ServiceTabs
          tabs={[
            {
              label: 'Detailing Interior',
              content: (
                <ScrollReveal>
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7">
                      <h2 className="font-heading text-3xl md:text-5xl tracking-wider mb-5">
                        Detailing Interior
                      </h2>
                      <p className="text-text-muted leading-relaxed mb-8">
                        Curățarea și recondiționarea interiorului la aspect impecabil. Fiecare element este tratat cu produsul potrivit, fără compromisuri pentru materiale delicate.
                      </p>
                      <ul className="space-y-3">
                        {interiorList.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-3 border-b border-border-dark/10 pb-3"
                          >
                            <span className="font-heading text-accent-primary text-lg">/</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-accent text-2xl text-accent-primary mb-3">
                        — atenție la materiale
                      </p>
                      <p className="text-text-muted leading-relaxed">
                        Identificăm tipul fiecărei suprafețe înainte să aplicăm orice produs. Pielea naturală, tapițeria din alcantara, plasticele moi — toate cer abordări diferite.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            },
            {
              label: 'Detailing Exterior',
              content: (
                <ScrollReveal>
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7">
                      <h2 className="font-heading text-3xl md:text-5xl tracking-wider mb-5">
                        Detailing Exterior
                      </h2>
                      <p className="text-text-muted leading-relaxed mb-8">
                        De la spălare corectă, la decontaminare, corecție și protecție ceramică ONE EVO. Lucrăm pentru un finisaj care durează, nu pentru efect de o zi.
                      </p>
                      <ul className="space-y-3">
                        {exteriorList.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-3 border-b border-border-dark/10 pb-3"
                          >
                            <span className="font-heading text-accent-primary text-lg">/</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-accent text-2xl text-accent-primary mb-3">
                        — protecție pe termen lung
                      </p>
                      <p className="text-text-muted leading-relaxed">
                        Protecția ceramică ONE EVO oferă rezistență reală la zgârieturi minore, ușurință la întreținere și un luciu profund care rămâne luni de zile.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            },
            {
              label: 'Spălare Exterioară',
              content: (
                <ScrollReveal>
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7">
                      <h2 className="font-heading text-3xl md:text-5xl tracking-wider mb-5">
                        Spălare Exterioară
                      </h2>
                      <p className="text-text-muted leading-relaxed mb-8">
                        Ideal pentru un refresh vizibil și o curățare corectă a exteriorului. Îndepărtează murdăria persistentă, redă luciul natural al vopselei și oferă un strat de protecție hidrofobă de durată.
                      </p>
                      <ul className="space-y-3">
                        {spalareList.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-3 border-b border-border-dark/10 pb-3"
                          >
                            <span className="font-heading text-accent-primary text-lg">/</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-accent text-2xl text-accent-primary mb-3">
                        — sigură pentru vopsea
                      </p>
                      <p className="text-text-muted leading-relaxed">
                        Folosim metoda celor două găleți, microfibre noi și produse cu pH neutru. Fără perii dure, fără spălătorii cu role.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            },
          ]}
        />
      </section>

      <section className="bg-bg-secondary border-y border-border-dark/10 py-16 md:py-24">
        <div className="container-x">
          <p className="font-accent text-xl text-accent-primary mb-2">— rezultatul</p>
          <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
            Înainte / După
          </h2>
          <p className="text-text-muted leading-relaxed max-w-3xl mb-10 md:mb-14">
            Lucrăm pe etape, măsurăm grosimea lacului, alegem polish-ul corect pentru fiecare pasaj. Trage de buton stânga-dreapta pentru a vedea diferența.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {images.detailingBeforeAfter.map((pair) => (
              <BeforeAfterSlider
                key={pair.before}
                beforeSrc={pair.before}
                afterSrc={pair.after}
                alt={pair.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCta />
      <RelatedServices exclude="detailing-spalare" />
    </>
  )
}
