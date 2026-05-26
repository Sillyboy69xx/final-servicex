"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Draggable, registerGsap } from "@/lib/gsap";
import { SplitHeading } from "@/components/split-heading";
import { overlandingShowcaseItems } from "@/lib/media";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function OverlandingShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    let draggable: Draggable[] = [];
    const setup = () => {
      const max = -(track.scrollWidth - container.offsetWidth);
      draggable.forEach((d) => d.kill());
      draggable = Draggable.create(track, {
        type: "x",
        bounds: { minX: max, maxX: 0 },
        inertia: false,
        edgeResistance: 0.85,
        dragResistance: 0.05,
        cursor: "grab",
        activeCursor: "grabbing",
      });
    };
    setup();
    window.addEventListener("resize", setup);
    return () => {
      window.removeEventListener("resize", setup);
      draggable.forEach((d) => d.kill());
    };
  }, []);

  const slide = (item: (typeof overlandingShowcaseItems)[number]) => (
    <>
      <div className="relative aspect-[4/3] overflow-hidden border border-border-dark/15">
        <Image
          src={item.src}
          alt={item.caption}
          fill
          className="object-cover"
          sizes="420px"
        />
      </div>
      <p className="font-accent text-lg md:text-xl mt-3 text-text-muted">
        — {item.caption}
      </p>
    </>
  );

  return (
    <section className="py-16 md:py-28 bg-bg-secondary border-y border-border-dark/10 overflow-hidden">
      <div className="container-x mb-10 md:mb-14">
        <SplitHeading
          text={"OVERLANDING"}
          as="h2"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider max-w-5xl"
        />
        <p className="mt-6 md:mt-8 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
          De la consultanță la implementare. Modificări gândite pentru drumurile
          lungi, pentru terenul greu și pentru bagajul real al unei expediții.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 pb-4">
          {overlandingShowcaseItems.map((item) => (
            <div key={item.src} className="snap-start shrink-0 w-[80%]">
              {slide(item)}
            </div>
          ))}
        </div>

        <div className="hidden md:block px-10 lg:px-16">
          <div
            ref={trackRef}
            className="flex gap-6 select-none"
            style={{ willChange: "transform" }}
          >
            {overlandingShowcaseItems.map((item) => (
              <div key={item.src} className="shrink-0 w-[420px]">
                {slide(item)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-10 md:mt-14">
        <Link
          href="/servicii/overlanding-offroad"
          className="group inline-flex items-center gap-2 font-heading text-xl tracking-widest text-accent-primary border-b-2 border-accent-primary pb-1"
        >
          Vezi serviciul complet
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
