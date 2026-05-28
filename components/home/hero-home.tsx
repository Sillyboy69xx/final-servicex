"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";

const BRAND_RED = "#e10600";

export function HeroHome() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SVGSVGElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const rpmRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const rpmTweens: gsap.core.Tween[] = [];
    let rpmObj: { v: number } | null = null;

    const ctx = gsap.context(() => {
      // Top strip
      if (stripRef.current) {
        gsap.from(stripRef.current.children, {
          opacity: 0,
          y: -6,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
        });
      }

      // Brand emblem: badge spin + wordmark stagger
      if (brandRef.current) {
        const badge = brandRef.current.querySelector("[data-badge]");
        if (badge) {
          gsap.from(badge, {
            scale: 0,
            rotation: -90,
            opacity: 0,
            duration: 1.0,
            delay: 0.25,
            ease: "back.out(2)",
          });
        }
        const wmChars = brandRef.current.querySelectorAll("[data-wm]");
        gsap.from(wmChars, {
          opacity: 0,
          y: 8,
          duration: 0.45,
          delay: 0.7,
          ease: "power2.out",
          stagger: 0.035,
        });
      }

      // RPM status panel
      if (statusRef.current) {
        gsap.from(statusRef.current, {
          opacity: 0,
          x: 10,
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out",
        });
      }
      // RPM counter — sweep up then idle flicker
      if (rpmRef.current) {
        const rpmEl = rpmRef.current;
        rpmObj = { v: 0 };
        const updateRpm = () => {
          if (!rpmEl.isConnected || !rpmObj) return;
          rpmEl.textContent = Math.floor(rpmObj.v).toString().padStart(4, "0");
        };
        rpmTweens.push(
          gsap.to(rpmObj, {
            v: 820,
            duration: 1.4,
            delay: 0.7,
            ease: "power2.out",
            onUpdate: updateRpm,
            onComplete: () => {
              if (!reduceMotion) {
                rpmTweens.push(
                  gsap.to(rpmObj!, {
                    v: "+=25",
                    duration: 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    onUpdate: updateRpm,
                  }),
                );
              }
            },
          }),
        );
      }

      // Headline mask-reveal
      const lines = headlineRef.current?.querySelectorAll("[data-line-inner]");
      if (lines && lines.length) {
        gsap.from(lines, {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.09,
          delay: 0.2,
        });
      }

      // GPS coord scramble
      if (coordsRef.current) {
        const target = " ";
        const el = coordsRef.current;
        const state = { v: 0 };
        gsap.to(state, {
          v: 1,
          duration: 1.4,
          delay: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            if (!el.isConnected) return;
            const chars = target.split("").map((c, i) => {
              if (/[0-9]/.test(c) && state.v < (i + 1) / target.length) {
                return Math.floor(Math.random() * 10).toString();
              }
              return c;
            });
            el.textContent = chars.join("");
          },
          onComplete: () => {
            if (!el.isConnected) return;
            el.textContent = target;
          },
        });
      }

      // Stats fade up
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: 12,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.8,
        });
      }

      // SVG scene
      if (sceneRef.current) {
        const svg = sceneRef.current;
        const contours = svg.querySelectorAll<SVGPathElement>("[data-contour]");
        contours.forEach((c) => {
          c.style.strokeDasharray = "1";
          c.style.strokeDashoffset = "1";
        });
        gsap.to(contours, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.inOut",
          stagger: 0.1,
          delay: 0.35,
        });

        if (!reduceMotion) {
          const wheelRear = svg.querySelector('[data-wheel="rear"]');
          const wheelFront = svg.querySelector('[data-wheel="front"]');
          const body = svg.querySelector("[data-truck-body]");
          const truck = svg.querySelector("[data-truck]");
          const contourLayer = svg.querySelector("[data-contour-layer]");

          // Independent suspension — front lighter, rear heavier (cargo)
          if (wheelFront) {
            gsap.to(wheelFront, {
              y: -2.4,
              duration: 0.58,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          }
          if (wheelRear) {
            gsap.to(wheelRear, {
              y: -3.6,
              duration: 0.72,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              delay: 0.18,
            });
          }

          // Body bounce + subtle rocking pivoting at chassis center
          if (body) {
            gsap.to(body, {
              y: -1.3,
              duration: 0.66,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
            gsap.to(body, {
              rotation: 0.7,
              duration: 1.1,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
              svgOrigin: "400 295",
            });
          }

          // Engine idle micro-jitter on whole truck
          if (truck) {
            gsap.to(truck, {
              x: "+=0.5",
              duration: 0.07,
              yoyo: true,
              repeat: -1,
              ease: "none",
            });
          }

          // Parallax contour drift (forward motion illusion)
          if (contourLayer) {
            gsap.to(contourLayer, {
              x: -800,
              duration: 55,
              ease: "none",
              repeat: -1,
            });
          }

          // Brake light pulse
          svg.querySelectorAll("[data-taillight]").forEach((tl) => {
            gsap.to(tl, {
              opacity: 0.55,
              duration: 1.8,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          });
        }

        // Crosshair ring pulse
        const ring = svg.querySelector("[data-ring]");
        if (ring && !reduceMotion) {
          gsap.fromTo(
            ring,
            { attr: { r: 18 }, opacity: 0.6 },
            {
              attr: { r: 60 },
              opacity: 0,
              duration: 2.4,
              ease: "power2.out",
              repeat: -1,
            },
          );
        }
      }
    });
    return () => {
      rpmTweens.forEach((t) => t.kill());
      if (rpmObj) gsap.killTweensOf(rpmObj);
      ctx.revert();
    };
  }, []);

  const lines = ["PREGĂTIM MAȘINI", "PENTRU LOCURI", "UNDE DRUMUL"];
  const lastLine = "SE TERMINĂ";

  return (
    <section className="relative min-h-[100svh] md:min-h-[calc(100vh-5rem)] container-x flex flex-col pt-3 md:pt-6 pb-6 md:pb-10">
      {/* Top strip */}
      <div
        ref={stripRef}
        className="flex items-center justify-between text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-text-muted border-b border-border-dark/30 pb-3 md:pb-4 uppercase"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: BRAND_RED }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: BRAND_RED }}
            />
          </span>
          <span>Live · București</span>
        </div>
        <span ref={coordsRef} className="hidden sm:inline">
          44.4267°N · 26.1025°E
        </span>
        <span>Off-Road / Overlanding</span>
      </div>

      {/* Main */}
      <div className="flex-1 grid md:grid-cols-12 gap-4 md:gap-8 py-4 md:py-8">
        {/* SVG viewport */}
        <div
          className="md:col-span-7 md:order-2 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] order-1 overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, rgba(0,0,0,0.025), transparent 50%, ${BRAND_RED}0d)`,
          }}
        >
          <CornerTicks />

          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
            <div
              className="hero-scanline absolute left-0 right-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${BRAND_RED}66, transparent)`,
              }}
            />
          </div>

          {/* BRAND EMBLEM — top-left, mobile-safe */}
          <div
            ref={brandRef}
            className="absolute top-2.5 left-2.5 md:top-4 md:left-4 z-10 flex items-center gap-2 md:gap-2.5"
          >
            <div className="relative" data-badge>
              {/* Red glow halo */}
              <div
                className="absolute -inset-1 rounded-full opacity-40 blur-md"
                style={{ backgroundColor: BRAND_RED }}
              />
              {/* Dark circular badge with logo */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full bg-text-primary flex items-center justify-center">
                <img
                  src="/prv-logo.svg"
                  alt="PRV Service"
                  className="w-full h-full object-cover scale-[6.6] origin-center"
                  draggable={false}
                />
              </div>
              {/* Red accent ring */}
              <div
                className="absolute inset-0 rounded-full border pointer-events-none"
                style={{ borderColor: `${BRAND_RED}aa` }}
              />
            </div>
            <div className="leading-none">
              <div className="font-heading text-base md:text-xl text-text-primary tracking-[0.18em] flex">
                {"PRV".split("").map((c, i) => (
                  <span key={i} data-wm>
                    {c}
                  </span>
                ))}
              </div>
              <div
                className="font-mono text-[8px] md:text-[9px] tracking-[0.28em] mt-1 uppercase flex"
                style={{ color: BRAND_RED }}
              >
                Atelier Auto
              </div>
            </div>
          </div>

          {/* SVG SCENE */}
          <svg
            ref={sceneRef}
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Background grid */}
            <g className="stroke-text-primary" strokeWidth="0.3" opacity="0.06">
              {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="400" />
              ))}
              {[80, 160, 240].map((y) => (
                <line key={y} x1="0" y1={y} x2="800" y2={y} />
              ))}
            </g>

            {/* Contours — parallax layer (drifts left) */}
            <g data-contour-layer>
              <g
                className="stroke-accent-primary"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              >
                <path
                  data-contour
                  pathLength="1"
                  d="M 0,310 C 80,300 180,320 280,308 S 480,295 600,310 S 760,300 800,305"
                />
                <path
                  data-contour
                  pathLength="1"
                  d="M 0,250 C 100,235 220,265 320,245 S 540,222 660,248 S 800,235 800,240"
                />
                <path
                  data-contour
                  pathLength="1"
                  d="M 0,190 C 140,170 240,210 380,180 S 580,150 700,178 S 800,165 800,172"
                />
                <path
                  data-contour
                  pathLength="1"
                  d="M 0,130 C 130,110 250,148 360,118 S 560,90 690,120 S 800,105 800,112"
                />
                <path
                  data-contour
                  pathLength="1"
                  d="M 0,70 C 140,55 260,90 380,65 S 580,40 700,68 S 800,52 800,60"
                />
              </g>
              <g
                transform="translate(800, 0)"
                className="stroke-accent-primary"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              >
                <path d="M 0,310 C 80,300 180,320 280,308 S 480,295 600,310 S 760,300 800,305" />
                <path d="M 0,250 C 100,235 220,265 320,245 S 540,222 660,248 S 800,235 800,240" />
                <path d="M 0,190 C 140,170 240,210 380,180 S 580,150 700,178 S 800,165 800,172" />
                <path d="M 0,130 C 130,110 250,148 360,118 S 560,90 690,120 S 800,105 800,112" />
                <path d="M 0,70 C 140,55 260,90 380,65 S 580,40 700,68 S 800,52 800,60" />
              </g>
            </g>

            {/* Ground line */}
            <line
              x1="0"
              y1="320"
              x2="800"
              y2="320"
              className="stroke-text-primary"
              strokeWidth="0.8"
              opacity="0.35"
            />

            {/* Crosshair */}
            <g
              className="stroke-accent-primary"
              strokeWidth="0.8"
              opacity="0.7"
            >
              <line x1="390" y1="320" x2="410" y2="320" />
              <line x1="400" y1="310" x2="400" y2="330" />
              <circle
                cx="400"
                cy="320"
                r="16"
                fill="none"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <circle
                cx="400"
                cy="320"
                r="24"
                fill="none"
                strokeWidth="0.4"
                opacity="0.3"
              />
            </g>
            <circle
              data-ring
              cx="400"
              cy="320"
              r="18"
              fill="none"
              strokeWidth="0.8"
              opacity="0.6"
              stroke={BRAND_RED}
            />

            {/* TRUCK — outer = engine jitter */}
            <g data-truck transform="translate(400, 320)">
              {/* Ground shadow (stays grounded) */}
              <ellipse
                cx="0"
                cy="3"
                rx="130"
                ry="5"
                className="fill-text-primary"
                opacity="0.25"
              />

              {/* BODY — bounces & rocks (wheels OUTSIDE this group) */}
              <g data-truck-body>
                {/* Chassis silhouette */}
                <path
                  d="M -115,-25 L 115,-25 L 122,-42 L 122,-65 L 75,-65 L 55,-115 L -95,-115 L -110,-90 L -115,-65 Z"
                  className="fill-text-primary"
                />
                {/* Window band */}
                <path
                  d="M 56,-110 L -90,-110 L -90,-72 L 70,-72 Z"
                  className="fill-accent-primary"
                  opacity="0.85"
                />
                {/* B-pillar */}
                <line
                  x1="-25"
                  y1="-110"
                  x2="-25"
                  y2="-72"
                  className="stroke-text-primary"
                  strokeWidth="2.5"
                />
                {/* Door seam */}
                <line
                  x1="-25"
                  y1="-72"
                  x2="-25"
                  y2="-25"
                  className="stroke-bg-primary"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                {/* Rocker / side trim — BRAND RED */}
                <rect
                  x="-115"
                  y="-30"
                  width="237"
                  height="3"
                  fill={BRAND_RED}
                  opacity="0.85"
                />
                {/* Roof rack */}
                <rect
                  x="-90"
                  y="-119"
                  width="160"
                  height="3"
                  className="fill-text-primary"
                />
                {[-85, -55, -25, 5, 35, 60].map((x) => (
                  <rect
                    key={x}
                    x={x}
                    y="-122"
                    width="2"
                    height="6"
                    className="fill-text-primary"
                  />
                ))}
                {/* Light bar — BRAND RED with built-in pulse */}
                <rect
                  x="20"
                  y="-128"
                  width="50"
                  height="5"
                  className="fill-text-primary"
                />
                <rect x="22" y="-127" width="46" height="3" fill={BRAND_RED}>
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Jerry can */}
                <rect
                  x="-78"
                  y="-130"
                  width="20"
                  height="11"
                  className="fill-text-primary"
                />
                <line
                  x1="-68"
                  y1="-130"
                  x2="-68"
                  y2="-119"
                  className="stroke-bg-primary"
                  strokeWidth="0.4"
                  opacity="0.3"
                />
                {/* Antenna */}
                <line
                  x1="-85"
                  y1="-119"
                  x2="-90"
                  y2="-145"
                  className="stroke-text-primary"
                  strokeWidth="0.8"
                />
                {/* Snorkel */}
                <rect
                  x="71"
                  y="-115"
                  width="4"
                  height="50"
                  className="fill-text-primary"
                />
                <rect
                  x="68"
                  y="-118"
                  width="10"
                  height="5"
                  className="fill-text-primary"
                />
                {/* Hood seam */}
                <line
                  x1="75"
                  y1="-65"
                  x2="122"
                  y2="-65"
                  className="stroke-bg-primary"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                {/* HEADLIGHT — warm white + RED ring */}
                <rect
                  x="111"
                  y="-52"
                  width="11"
                  height="9"
                  rx="1"
                  fill="#fff5dd"
                />
                <rect
                  x="113"
                  y="-50"
                  width="7"
                  height="5"
                  rx="0.5"
                  fill="#ffd88a"
                />
                <rect
                  x="109.5"
                  y="-53.5"
                  width="14"
                  height="12"
                  rx="1.5"
                  fill="none"
                  stroke={BRAND_RED}
                  strokeWidth="0.8"
                  opacity="0.9"
                />
                {/* Bull bar */}
                <rect
                  x="124"
                  y="-58"
                  width="3"
                  height="33"
                  className="fill-text-primary"
                />
                <rect
                  x="121"
                  y="-58"
                  width="10"
                  height="3"
                  className="fill-text-primary"
                />
                <rect
                  x="121"
                  y="-44"
                  width="10"
                  height="2"
                  className="fill-text-primary"
                />
                <rect
                  x="121"
                  y="-30"
                  width="10"
                  height="3"
                  className="fill-text-primary"
                />
                {/* Spare tire */}
                <circle
                  cx="-105"
                  cy="-57"
                  r="15"
                  className="fill-text-primary"
                />
                <circle
                  cx="-105"
                  cy="-57"
                  r="8"
                  fill={BRAND_RED}
                  opacity="0.45"
                />
                <circle
                  cx="-105"
                  cy="-57"
                  r="2"
                  className="fill-text-primary"
                />
                {/* TAIL LIGHTS — red, pulse via GSAP */}
                <rect
                  data-taillight
                  x="-115"
                  y="-50"
                  width="3"
                  height="8"
                  rx="0.5"
                  fill={BRAND_RED}
                  opacity="0.95"
                />
                <rect
                  data-taillight
                  x="-115"
                  y="-38"
                  width="3"
                  height="6"
                  rx="0.5"
                  fill={BRAND_RED}
                  opacity="0.75"
                />
                {/* High-mount stop lamp */}
                <rect
                  data-taillight
                  x="-90"
                  y="-122"
                  width="14"
                  height="2"
                  rx="0.5"
                  fill={BRAND_RED}
                  opacity="0.85"
                />
                {/* Wheel arch flares */}
                <path
                  d="M -115,-30 Q -85,-58 -55,-30"
                  className="fill-text-primary"
                  opacity="0.95"
                />
                <path
                  d="M 55,-30 Q 85,-58 115,-30"
                  className="fill-text-primary"
                  opacity="0.95"
                />
              </g>

              {/* REAR WHEEL — outer positions, inner GSAP-animates */}
              <g transform="translate(-85, -25)">
                <g data-wheel="rear">
                  <g className="hero-wheel">
                    <circle r="25" fill="#0d0d0f" />
                    <circle r="14" className="fill-bg-primary" opacity="0.92" />
                    <circle r="3" className="fill-text-primary" />
                    {[0, 72, 144, 216, 288].map((deg) => (
                      <line
                        key={deg}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-13"
                        className="stroke-text-primary"
                        strokeWidth="2.2"
                        transform={`rotate(${deg})`}
                      />
                    ))}
                  </g>
                </g>
              </g>

              {/* FRONT WHEEL */}
              <g transform="translate(85, -25)">
                <g data-wheel="front">
                  <g className="hero-wheel">
                    <circle r="25" fill="#0d0d0f" />
                    <circle r="14" className="fill-bg-primary" opacity="0.92" />
                    <circle r="3" className="fill-text-primary" />
                    {[0, 72, 144, 216, 288].map((deg) => (
                      <line
                        key={deg}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="-13"
                        className="stroke-text-primary"
                        strokeWidth="2.2"
                        transform={`rotate(${deg})`}
                      />
                    ))}
                  </g>
                </g>
              </g>

              {/* Dust from rear wheel */}
              <g transform="translate(-105, 0)">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <circle
                    key={i}
                    className="hero-dust fill-text-primary"
                    cx="0"
                    cy="-5"
                    r="2.4"
                    opacity="0.35"
                    style={{ animationDelay: `${i * 0.45}s` }}
                  />
                ))}
              </g>
            </g>

            {/* Corner technical markers */}
            <g
              transform="translate(720, 50)"
              className="stroke-text-muted"
              strokeWidth="0.5"
              opacity="0.5"
            >
              <line x1="0" y1="0" x2="40" y2="0" />
              <line x1="0" y1="0" x2="0" y2="40" />
            </g>
            <g
              transform="translate(80, 350)"
              className="stroke-text-muted"
              strokeWidth="0.5"
              opacity="0.5"
            >
              <line x1="0" y1="0" x2="-40" y2="0" />
              <line x1="0" y1="0" x2="0" y2="-40" />
            </g>
          </svg>
        </div>

        {/* TEXT CONTENT */}
        <div className="md:col-span-5 md:order-1 flex flex-col justify-between order-2">
          <div>
            <p
              className="font-mono text-[10px] md:text-xs tracking-[0.3em] mb-4 md:mb-6 uppercase"
              style={{ color: BRAND_RED }}
            >
              [ Nº 01 ] — Service Overlanding
            </p>
            <h1
              ref={headlineRef}
              className="font-heading text-[2.4rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight"
            >
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span data-line-inner className="block">
                    {line}
                  </span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <span data-line-inner className="block">
                  <span style={{ color: BRAND_RED }}>{lastLine}</span>
                </span>
              </span>
            </h1>
            <p className="mt-5 md:mt-8 text-sm md:text-base text-text-muted max-w-md leading-relaxed">
              Service complet. Specializare overlanding & off-road.
            </p>
          </div>

          <div className="mt-8 md:mt-10 space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/servicii"
                className="group inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 md:px-7 md:py-4 font-heading text-sm md:text-base tracking-[0.15em] transition-colors"
                style={{ backgroundColor: BRAND_RED }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0a0a0a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = BRAND_RED)
                }
              >
                VEZI SERVICIILE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/galerie"
                className="inline-flex items-center justify-center gap-2 border border-border-dark text-text-primary px-6 py-3.5 md:px-7 md:py-4 font-heading text-sm md:text-base tracking-[0.15em] hover:bg-border-dark hover:text-bg-primary transition-colors"
              >
                GALERIE BUILDS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-scanline {
          animation: scanline 7s linear infinite;
        }
        @keyframes scanline {
          0% {
            top: -2%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 102%;
            opacity: 0;
          }
        }
        .hero-wheel {
          animation: wheel-spin 1.4s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes wheel-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .hero-dust {
          animation: dust-rise 2.6s ease-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes dust-rise {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          100% {
            transform: translate(-45px, -28px) scale(2.6);
            opacity: 0;
          }
        }
        .hero-pulse {
          animation: red-pulse 1.4s ease-in-out infinite;
        }
        @keyframes red-pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scanline,
          .hero-wheel,
          .hero-dust,
          .hero-pulse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

function CornerTicks() {
  const base =
    "absolute w-4 h-4 md:w-5 md:h-5 border-text-primary/50 z-10 pointer-events-none";
  return (
    <>
      <span className={`${base} top-0 left-0 border-t border-l`} />
      <span className={`${base} top-0 right-0 border-t border-r`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-2xl md:text-3xl text-text-primary leading-none">
        {value}
      </div>
      <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-text-muted uppercase mt-1.5">
        {label}
      </div>
    </div>
  );
}
