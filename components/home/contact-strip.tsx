import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { SplitHeading } from '@/components/split-heading'

export function ContactStrip() {
  return (
    <section className="container-x py-16 md:py-28">
      <p className="font-accent text-xl text-accent-primary mb-2">— ne găsești</p>
      <SplitHeading
        text={'HAI SĂ\nVORBIM.'}
        as="h2"
        className="text-6xl md:text-9xl tracking-wider mb-8 md:mb-12"
      />
      <div className="grid md:grid-cols-12 gap-8">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="md:col-span-7 group block bg-text-primary text-bg-primary p-6 md:p-10 border border-border-dark hover:bg-accent-primary transition-colors"
        >
          <div className="flex items-center gap-3 text-bg-secondary text-sm font-medium tracking-widest uppercase mb-4">
            <Phone className="w-4 h-4" /> sună acum
          </div>
          <p className="font-heading text-4xl md:text-7xl lg:text-8xl tracking-wider break-all">
            {siteConfig.phone}
          </p>
        </a>
        <div className="md:col-span-5 grid grid-cols-1 gap-4">
          <InfoBlock icon={<MapPin className="w-5 h-5" />} label="Adresă" value={siteConfig.address} />
          <InfoBlock icon={<Mail className="w-5 h-5" />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
          <InfoBlock icon={<Clock className="w-5 h-5" />} label="Program" value={siteConfig.hours} />
        </div>
      </div>
    </section>
  )
}

function InfoBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <div className="flex items-center gap-2 text-text-muted text-xs tracking-widest uppercase mb-2">
        {icon} {label}
      </div>
      <p className="font-heading text-2xl md:text-3xl tracking-wider">{value}</p>
    </>
  )
  return href ? (
    <a href={href} className="block bg-bg-secondary border border-border-dark/15 p-5 hover:border-accent-primary transition-colors">
      {content}
    </a>
  ) : (
    <div className="bg-bg-secondary border border-border-dark/15 p-5">{content}</div>
  )
}
