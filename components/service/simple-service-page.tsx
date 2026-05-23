import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceHero } from '@/components/service/service-hero'
import { ServiceAccordion, type AccordionItem } from '@/components/service/service-accordion'
import { ServiceCta } from '@/components/service/service-cta'
import { RelatedServices } from '@/components/service/related-services'
import { ServicePhotoStrip } from '@/components/service/service-photo-strip'
import { serviceHeroImages, servicePhotoStrips } from '@/lib/media'
import type { ServiceSlug } from '@/lib/site'

interface SimpleServicePageProps {
  slug: ServiceSlug
  title: string
  intro: string
  imageSrc?: string
  imageAlt?: string
  imageLabel?: string
  subServices: AccordionItem[]
  breadcrumbLabel: string
  showPhotoStrip?: boolean
}

export function SimpleServicePage({
  slug,
  title,
  intro,
  imageSrc,
  imageAlt,
  imageLabel,
  subServices,
  breadcrumbLabel,
  showPhotoStrip = true,
}: SimpleServicePageProps) {
  const heroSrc = imageSrc ?? serviceHeroImages[slug]
  const strip = servicePhotoStrips[slug]

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Acasă', href: '/' },
          { label: 'Servicii', href: '/servicii' },
          { label: breadcrumbLabel },
        ]}
      />
      <ServiceHero
        title={title}
        intro={intro}
        imageSrc={heroSrc}
        imageAlt={imageAlt ?? breadcrumbLabel}
        imageLabel={imageLabel ?? `Imagine: ${breadcrumbLabel}`}
        ratio="21/9"
      />
      <section className="container-x pb-12 md:pb-20">
        <p className="font-accent text-xl text-accent-primary mb-2">— sub-servicii</p>
        <h2 className="font-heading text-4xl md:text-6xl tracking-wider mb-8 md:mb-12">
          Ce facem
        </h2>
        <ServiceAccordion items={subServices} />
      </section>
      {showPhotoStrip && strip && strip.length > 0 && (
        <ServicePhotoStrip images={strip} altPrefix={breadcrumbLabel} />
      )}
      <ServiceCta />
      <RelatedServices exclude={slug} />
    </>
  )
}
