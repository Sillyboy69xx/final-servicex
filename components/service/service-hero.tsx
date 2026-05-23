import { PlaceholderImage } from '@/components/placeholder-image'
import { OptimizedImage } from '@/components/optimized-image'
import { SplitHeading } from '@/components/split-heading'

interface ServiceHeroProps {
  eyebrow?: string
  title: string
  intro?: string
  imageLabel?: string
  imageSrc?: string
  imageAlt?: string
  ratio?: '16/9' | '21/9'
}

export function ServiceHero({
  eyebrow = '— serviciu',
  title,
  intro,
  imageLabel,
  imageSrc,
  imageAlt,
  ratio = '21/9',
}: ServiceHeroProps) {
  return (
    <section className="container-x pt-6 md:pt-10 pb-10 md:pb-16">
      <p className="font-accent text-xl text-accent-primary mb-2">{eyebrow}</p>
      <SplitHeading
        text={title}
        as="h1"
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider mb-8 md:mb-12"
      />
      {imageSrc ? (
        <div className="mb-8">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt ?? imageLabel ?? title}
            ratio={ratio}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      ) : (
        imageLabel && (
          <div className="mb-8">
            <PlaceholderImage label={imageLabel} ratio={ratio} size="lg" />
          </div>
        )
      )}
      {intro && (
        <p className="max-w-3xl text-base md:text-xl text-text-muted leading-relaxed">
          {intro}
        </p>
      )}
    </section>
  )
}
