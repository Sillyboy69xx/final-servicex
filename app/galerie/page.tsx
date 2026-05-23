import { Breadcrumb } from '@/components/breadcrumb'
import { GalleryGrid } from '@/components/gallery-grid'
import { SplitHeading } from '@/components/split-heading'
import { ContactStrip } from '@/components/home/contact-strip'

export const metadata = {
  title: 'Galerie Build-uri Overlanding — Service Auto',
  description: 'Lucrări recente: Defender, Hilux, Land Cruiser, Patrol, Discovery, Wrangler, Amarok.',
}

export default function GaleriePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Acasă', href: '/' }, { label: 'Galerie' }]} />
      <section className="container-x pt-6 md:pt-10 pb-12 md:pb-16">
        <p className="font-accent text-xl text-accent-primary mb-2">— builds</p>
        <SplitHeading
          text={'GALERIE'}
          as="h1"
          className="text-7xl sm:text-8xl md:text-[12rem] tracking-wider mb-6"
        />
        <p className="max-w-2xl text-base md:text-xl text-text-muted leading-relaxed">
          Câteva proiecte din ultimele luni. Click pe orice imagine pentru detalii.
        </p>
      </section>
      <section className="pb-16 md:pb-24">
        <GalleryGrid />
      </section>
      <ContactStrip />
    </>
  )
}
