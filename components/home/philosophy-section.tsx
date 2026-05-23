import { ScrollReveal } from "@/components/scroll-reveal";
import { SplitHeading } from "@/components/split-heading";

export function PhilosophySection() {
  return (
    <section className="container-x py-16 md:py-28 bg-[#e01e37]">
      <div className="grid md:grid-cols-12 gap-8 md:gap-14">
        <div className="md:col-span-5">
          <p className="font-accent text-xl text-accent-primary mb-2">
            — filozofia
          </p>
          <SplitHeading
            text={"CUM\nLUCRĂM"}
            as="h2"
            className="text-6xl md:text-8xl tracking-wider"
          />
        </div>
        <div className="md:col-span-7 space-y-6 text-black">
          <ScrollReveal>
            <p className="text-lg md:text-xl leading-relaxed text-text-primary">
              Ne alegem proiectele cu grijă. Fiecare mașină rămâne în atenția
              noastră pe termen lung — nu este un client de moment, este o
              relație.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="leading-relaxed">
              Lucrăm cu mașinile clienților noștri ani la rând. Cunoaștem
              fiecare modificare, fiecare reparație, fiecare detaliu. Asta
              înseamnă că, atunci când apare o problemă, nu pornim de la zero.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="leading-relaxed">
              Fiecare proiect este personal. Nu producem reparații în masă.
              Pregătim mașini gândite pentru drumurile lungi, pentru terenul
              greu și pentru oamenii care le folosesc cu adevărat.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <blockquote className="mt-8 border-l-4 border-accent-primary pl-6 py-2">
              <p className="font-accent text-3xl md:text-5xl text-text-primary leading-tight">
                o mașină nu se reparӑ — se cunoaște.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
