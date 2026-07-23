import { Breadcrumb } from "@/components/breadcrumb";
import { SplitHeading } from "@/components/split-heading";
import { OptimizedImage } from "@/components/optimized-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceCta } from "@/components/service/service-cta";
import { RelatedServices } from "@/components/service/related-services";
import { sablareServiceImages } from "@/lib/media";

export const metadata = {
  title: "Sablare & Antifonare — Service Auto",
  description:
    "Sablare eșapament, antifonare și pregătire pentru vopsire. Lucrări profesionale în atelier.",
};

/** Caption + image pairs for the two distinct services on this page */
const serviceCards = [
  {
    src: sablareServiceImages.sablare,
    caption: "Antifonare",
    alt: "Antifonare eșapament",
  },
  {
    src: sablareServiceImages.antifonare,

    caption: "Sablare caroserie, șasiu",
    alt: "Sablare caroserie și șasiu",
  },
] as const;

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Sablare & Antifonare" },
        ]}
      />

      {/* Title, intro, and dual images blended in one continuous section */}
      <section className="container-x pt-6 md:pt-10 pb-12 md:pb-20">
        <p className="font-accent text-xl text-accent-primary mb-2">
          — serviciu
        </p>
        <SplitHeading
          text={"SABLARE\n& PREGĂTIRE PENTRU VOPSIRE, ANTIFONARE"}
          as="h1"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 md:mb-8"
        />

        {/* Short intro sits directly above the image grid */}
        <p className="max-w-3xl text-base md:text-xl text-text-muted leading-relaxed mb-8 md:mb-10">
          Sablare, antifonare și pregătire pentru vopsire.
        </p>

        {/* Mobile: stacked full-width; md+: equal two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {serviceCards.map((card, i) => (
            <ScrollReveal key={card.src} delay={i * 0.1}>
              <figure>
                <OptimizedImage
                  src={card.src}
                  alt={card.alt}
                  ratio="4/3"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
                <figcaption className="mt-3 font-heading text-lg md:text-xl tracking-wider text-text-primary">
                  {card.caption}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ServiceCta />
      <RelatedServices exclude="sablare-antifonare" />
    </>
  );
}
