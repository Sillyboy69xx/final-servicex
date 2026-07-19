import { Breadcrumb } from "@/components/breadcrumb";
import { SplitHeading } from "@/components/split-heading";
import { ServiceAccordion } from "@/components/service/service-accordion";
import { ServiceCta } from "@/components/service/service-cta";
import { RelatedServices } from "@/components/service/related-services";
import { ProcessSection } from "@/components/service/process-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { OverlandingGalleryCarousel } from "@/components/service/overlanding-gallery-carousel";

export const metadata = {
  title: "Overlanding & Off-Road — Pregătiri Complete | Service Auto",
  description:
    "Modificări overlanding și off-road, de la consultanță la implementare. Peste 10 ani de experiență în pregătirea mașinilor pentru expediții lungi.",
};

export default function OverlandingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Overlanding & Off-Road" },
        ]}
      />

      {/* Flagship hero — oversized title like the sablare page treatment */}
      <section className="container-x pt-6 md:pt-10 pb-10 md:pb-16">
        <p className="font-accent text-xl text-accent-primary mb-2">
          — flagship
        </p>
        <SplitHeading
          text={"OVERLANDING\n& OFF-ROAD"}
          as="h1"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 md:mb-8"
        />
        <p className="max-w-3xl text-base md:text-xl text-text-muted leading-relaxed">
          Peste 10 ani de experiență în pregătirea mașinilor pentru drumurile
          care nu apar pe hartă. Lucrăm de la consultanță până la implementare
          — și rămânem în contact mult timp după ce mașina iese din service.
        </p>
      </section>

      {/* Intro + differentiators */}
      <section className="container-x pb-12 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          <ScrollReveal className="md:col-span-7">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed">
              Ne ocupăm de fiecare piesă: suspensie, protecții, bagajeri,
              snorkel, sertare custom, sisteme de iluminat și tot ce ține de
              transformarea unui vehicul de serie într-o mașină reală de
              expediție. Fără compromisuri estetice care nu țin la primul drum
              greu.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-5">
            <div className="border border-accent-primary/40 border-l-4 border-l-accent-primary p-6 bg-bg-secondary">
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
                  Ne alegem proiectele cu grijă.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-width gallery — visual anchor of the flagship page */}
      <section className="bg-bg-secondary border-y border-border-dark/10 py-12 md:py-20">
        <div className="container-x mb-8 md:mb-10">
          <p className="font-accent text-xl text-accent-primary mb-2">
            — galerie proiecte
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-wider max-w-4xl">
            Builds overlanding & off-road
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
            Imagini din atelier și de pe teren — modificări reale, testate pe
            drumuri grele.
          </p>
        </div>
        <div className="container-x">
          <OverlandingGalleryCarousel />
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <p className="font-accent text-xl text-accent-primary mb-2">
          — sub-servicii
        </p>
        <h2 className="font-heading text-4xl md:text-7xl tracking-wider mb-10 md:mb-14">
          Ce facem mai exact
        </h2>
        <ServiceAccordion
          items={[
            {
              title: "Consultanță cumpărare vehicul",
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Te ajutăm să alegi vehiculul potrivit pentru rutele tale. Nu
                    ne uităm doar la marcă și model — analizăm versiuni,
                    motorizări, transmisii, istoric, ușurința modificărilor și
                    costul real de întreținere.
                  </p>
                  <p>
                    Verificăm fizic mașina înainte să o cumperi — diagnosticare
                    completă, examinare punte, suspensie, lac, sasiu. Plecăm cu
                    o listă clară de ce e bine și ce trebuie făcut.
                  </p>
                </div>
              ),
            },
            {
              title: "Consultanță overlanding",
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Construim împreună planul de pregătire. Discutăm despre
                    destinațiile pe care le ai în minte, despre stilul tău de
                    călătorie, despre câți pasageri și cât bagaj transporți de
                    obicei.
                  </p>
                  <p>
                    Rezultatul: un parcurs etapizat, cu priorități clare și un
                    buget realist. Fără modificări inutile, fără echipamente
                    care arată bine pe Instagram dar nu rezistă pe teren.
                  </p>
                </div>
              ),
            },
            {
              title: "Implementare modificări",
              content: (
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Aici lucrăm la mașină. De la suspensie ridicată și protecții
                    punte, la roof rack-uri, dulapuri sertare aluminiu, snorkel,
                    iluminat auxiliar și sisteme electrice auxiliare.
                  </p>
                  <p>
                    Fabricăm piesele care nu se găsesc — soluții pe care nu le
                    ai gata făcute. Fiecare element este reglat pe mașină,
                    testat și predat funcțional.
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
  );
}
