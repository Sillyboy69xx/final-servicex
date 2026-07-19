"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { serviceCardImages } from "@/lib/media";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SplitHeading } from "@/components/split-heading";

export function FeaturedServices() {
  const flagship = services.find((s) => s.flagship)!;
  const rest = services.filter((s) => !s.flagship).slice(0, 5);

  return (
    <section className="container-x py-16 md:py-28 bg-[#e01e37]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <p className="font-accent text-xl text-accent-primary mb-2">
            — ce facem
          </p>
          <SplitHeading
            text={"SERVICII"}
            as="h2"
            className="text-6xl md:text-8xl tracking-wider"
          />
        </div>
        <Link
          href="/servicii"
          className="inline-flex items-center gap-2 font-heading tracking-widest text-lg hover:text-accent-primary"
        >
          Toate serviciile <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 pb-4">
        {rest.map((s) => (
          <ServiceCardMobile key={s.slug} service={s} />
        ))}
      </div>

      <div className="hidden md:grid grid-cols-6 grid-rows-2 gap-4 lg:gap-6">
        <Link
          href={`/servicii/${flagship.slug}`}
          className="col-span-3 row-span-2 group relative overflow-hidden border border-border-dark/15 bg-bg-secondary p-6 lg:p-8 flex flex-col justify-between"
        >
          <div className="absolute inset-0 -z-0">
            <Image
              src={serviceCardImages[flagship.slug]}
              alt={flagship.title}
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </div>
          <div className="relative z-10 flex justify-between">
            <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform bg-bg-primary p-1" />
          </div>
          <div className="relative z-10 bg-bg-primary p-5 -m-2">
            <h3 className="font-heading text-4xl lg:text-6xl tracking-wider mb-2">
              {flagship.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-md">
              {flagship.short}
            </p>
          </div>
        </Link>
        {rest.map((s, i) => (
          <ScrollReveal
            key={s.slug}
            delay={i * 0.05}
            className="col-span-3 lg:col-span-3"
          >
            <ServiceCardDesktop service={s} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function FlagshipCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Link
      href={`/servicii/${service.slug}`}
      className="snap-start shrink-0 w-[85%] flex flex-col gap-3 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-border-dark/15">
        <Image
          src={serviceCardImages[service.slug]}
          alt={service.title}
          fill
          className="object-cover"
          sizes="85vw"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="font-accent text-base text-accent-primary">
            flagship
          </span>
          <h3 className="font-heading text-3xl tracking-wider mt-1">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted mt-1.5">{service.short}</p>
        </div>
        <ArrowUpRight className="w-6 h-6 shrink-0 mt-1 group-hover:text-accent-primary" />
      </div>
    </Link>
  );
}

function ServiceCardMobile({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <Link
      href={`/servicii/${service.slug}`}
      className="snap-start shrink-0 w-[75%] flex flex-col gap-3 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-border-dark/15">
        <Image
          src={serviceCardImages[service.slug]}
          alt={service.title}
          fill
          className="object-cover"
          sizes="75vw"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-2xl tracking-wider">
            {service.title}
          </h3>
          <p className="text-xs text-text-muted mt-1">{service.short}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 group-hover:text-accent-primary" />
      </div>
    </Link>
  );
}

function ServiceCardDesktop({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <Link
      href={`/servicii/${service.slug}`}
      className="group flex gap-5 p-4 border border-border-dark/15 hover:bg-bg-secondary transition-colors h-full"
    >
      <div className="relative w-32 lg:w-44 shrink-0 aspect-square overflow-hidden border border-border-dark/15">
        <Image
          src={serviceCardImages[service.slug]}
          alt={service.title}
          fill
          className="object-cover"
          sizes="176px"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="font-heading text-2xl lg:text-3xl tracking-wider">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            {service.short}
          </p>
        </div>
        <ArrowUpRight className="w-5 h-5 self-end group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </Link>
  );
}
