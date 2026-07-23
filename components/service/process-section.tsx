"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

const steps = [
  {
    title: "Consultanță",
    text: "Discutăm despre mașină, despre rutele care îți plac, despre bagajul real și cum vrei să folosești vehiculul. Setăm așteptările corect.",
  },
  {
    title: "Plan",
    text: "Construim un plan etapizat: ce schimbăm acum, ce lăsăm pentru a doua iterație. Fiecare modificare are un motiv clar.",
  },
  {
    title: "Implementare",
    text: "Lucrăm pas cu pas. Suspensie, protecții, sertare. Fără grabă, cu reglaj real al fiecărei piese.",
  },
  {
    title: "Predare",
    text: "Mașina iese pregătită, testată și documentată. Rămânem în contact pentru ajustări — fiecare proiect este personal.",
  },
];

export function ProcessSection() {
  const lineRef = useRef<SVGLineElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const line = lineRef.current;
    const container = containerRef.current;
    if (!line || !container) return;
    const ctx = gsap.context(() => {
      const length = line.getTotalLength?.() ?? 1000;
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
        gsap.fromTo(
          step,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 80%" },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="container-x py-16 md:py-28">
      <p className="font-accent text-xl text-accent-primary mb-2">— procesul</p>
      <h2 className="font-heading text-5xl md:text-8xl tracking-wider mb-12 md:mb-16">
        Cum lucrăm
      </h2>

      <div
        ref={containerRef}
        className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-x-5 md:gap-x-10"
      >
        <svg
          className="absolute left-3 md:left-5 top-3 bottom-3 h-[calc(100%-1.5rem)] w-1 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 4 1000"
          aria-hidden
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="1000"
            stroke="#1A1A1A"
            strokeOpacity="0.15"
            strokeWidth="2"
          />
          <line
            ref={lineRef}
            x1="2"
            y1="0"
            x2="2"
            y2="1000"
            stroke="#D40000"
            strokeWidth="3"
          />
        </svg>

        {steps.map((step, i) => (
          <div key={i} className="contents" data-step>
            <div className="flex flex-col items-center pt-1">
              <span className="relative z-10 w-7 h-7 md:w-10 md:h-10 bg-accent-primary text-white font-heading text-sm md:text-base flex items-center justify-center">
                0{i + 1}
              </span>
            </div>
            <div className="pb-12 md:pb-20">
              <h3 className="font-heading text-3xl md:text-5xl tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed max-w-xl">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
