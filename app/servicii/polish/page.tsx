import { Breadcrumb } from "@/components/breadcrumb";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceCta } from "@/components/service/service-cta";
import { RelatedServices } from "@/components/service/related-services";
import { BeforeAfterSlider } from "@/components/service/before-after-slider";
import { images, serviceHeroImages } from "@/lib/media";

export const metadata = {
  title: "Polish — Corecție Lac",
  description:
    "Corecție lac și polish profesional. Îndepărtăm zgârieturile fine și redăm luciul vopselei.",
};

export default function PolishPage() {
  return (
    <>
      {/* Navigation trail back to the services index */}
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Polish" },
        ]}
      />

      {/* Hero: title, photo, and a short service description */}
      <ServiceHero
        title="POLISH"
        intro="Corecție lac și polish profesional. Îndepărtăm zgârieturile fine, redăm luciul vopselei și finisăm suprafața pentru un aspect impecabil."
        imageSrc={serviceHeroImages.polish}
        imageAlt="Polish auto — corecție lac"
        imageLabel="Imagine: Polish"
      />

      {/* Before/after comparison sliders — two polish result sets */}
      <section className="bg-bg-secondary border-y border-border-dark/10 py-16 md:py-24">
        <div className="container-x">
          <p className="font-accent text-xl text-accent-primary mb-2">
            — rezultatul
          </p>
          <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
            Înainte / După
          </h2>
          {/* Two interactive framers: mobile stacked, desktop side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {images.polishBeforeAfter.map((pair) => (
              <BeforeAfterSlider
                key={pair.before}
                beforeSrc={pair.before}
                afterSrc={pair.after}
                alt={pair.alt}
              />
            ))}
          </div>
          {/* Helper copy sits below the comparison images */}
          <p className="text-text-muted leading-relaxed max-w-3xl mt-10 md:mt-14">
            Trage de buton stânga-dreapta pentru a vedea diferența.
          </p>
        </div>
      </section>

      <ServiceCta />
      <RelatedServices exclude="polish" />
    </>
  );
}
