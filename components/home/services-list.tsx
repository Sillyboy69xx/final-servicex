import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { SplitHeading } from "@/components/split-heading";

export function ServicesList() {
  return (
    <section className="bg-bg-secondary border-y border-border-dark/10 py-16 md:py-28">
      <div className="container-x">
        <div className="mb-10 md:mb-14">
          <p className="font-accent text-xl text-accent-primary mb-2">
            — index
          </p>
          <SplitHeading
            text={"TOATE SERVICIILE"}
            as="h2"
            className="text-5xl md:text-8xl tracking-wider"
          />
        </div>
        <ul className="border-t border-border-dark/15">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-border-dark/15">
              <Link
                href={`/servicii/${s.slug}`}
                className="group flex items-center justify-between gap-4 py-5 md:py-7"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-accent text-base md:text-lg text-text-muted w-8">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl md:text-5xl tracking-wider group-hover:text-accent-primary transition-colors">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 shrink-0 group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
