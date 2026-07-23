import { Breadcrumb } from "@/components/breadcrumb";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceCta } from "@/components/service/service-cta";
import { RelatedServices } from "@/components/service/related-services";
import { BeforeAfterSlider } from "@/components/service/before-after-slider";
import { images, serviceHeroImages } from "@/lib/media";

export const metadata = {
  title: "Tapiterie — Curățare & Recondiționare",
  description:
    "Curățare și recondiționare tapițerie auto: scaune, plafon, covorașe și portbagaj.",
};

export default function TapiteriePage() {
  return (
    <>
      {/* Navigation trail back to the services index */}
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Tapiterie" },
        ]}
      />

      {/* Hero: title, photo, and a short factual service description */}
      <ServiceHero
        title="TAPIȚERIE"
        intro="Curățare și recondiționare tapițerie auto. Scaune, plafon, covorașe și portbagaj — cu produse potrivite pentru textile, piele sau alcantara."
        imageSrc={serviceHeroImages.tapiterie}
        imageAlt="Tapiterie auto — curățare scaune"
        imageLabel="Imagine: Tapiterie"
      />

      {/* Before/after comparison — same detailing upholstery pairs */}
      <section className="bg-bg-secondary border-y border-border-dark/10 py-16 md:py-24">
        <div className="container-x">
          <p className="font-accent text-xl text-accent-primary mb-2">
            — rezultatul
          </p>
          <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
            Înainte / După
          </h2>
          {/* Sources swapped so the before shot reads on the left of the slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {images.detailingBeforeAfter.map((pair, i) => (
              <BeforeAfterSlider
                key={pair.before}
                beforeSrc={pair.after}
                afterSrc={pair.before}
                alt={`Tapiterie — comparație ${i + 1}`}
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
      <RelatedServices exclude="tapiterie" />
    </>
  );
}
