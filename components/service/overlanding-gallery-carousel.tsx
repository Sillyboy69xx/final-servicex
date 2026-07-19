"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  RectangleHorizontal,
  RectangleVertical,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { overlandingPageGallery } from "@/lib/media";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ViewMode = "landscape" | "portrait";

/** Prefer primary src; swap to legacy landrover typo filename on load error */
function GalleryImage({
  src,
  fallbackSrc,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  // Keep displayed src in sync when lightbox/carousel advances to a new image
  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

export function OverlandingGalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("landscape");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = overlandingPageGallery.length;
  const isPortrait = viewMode === "portrait";

  // Keep counter/dots in sync with Embla selection
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % total));
  }, [total]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
  }, [total]);

  // Lock scroll + keyboard nav while lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, lightboxNext, lightboxPrev]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Usage instructions — Romanian, scannable */}
      <div className="border border-border-dark/15 bg-bg-primary p-4 md:p-5">
        <p className="font-accent text-lg md:text-xl text-accent-primary mb-3">
          — cum navighezi galeria
        </p>
        <ul className="space-y-2 text-sm md:text-base text-text-muted leading-relaxed">
          <li className="flex gap-2">
            <span className="font-heading text-accent-primary shrink-0">/</span>
            Glisează stânga/dreapta sau folosește săgețile
          </li>
          <li className="flex gap-2">
            <span className="font-heading text-accent-primary shrink-0">/</span>
            Alege <strong className="text-text-primary">Peisaj</strong> sau{" "}
            <strong className="text-text-primary">Portret</strong> pentru
            cadrul potrivit
          </li>
          <li className="flex gap-2">
            <span className="font-heading text-accent-primary shrink-0">/</span>
            Apasă pe imagine pentru vizualizare mărită
          </li>
          <li className="flex gap-2">
            <span className="font-heading text-accent-primary shrink-0">/</span>
            În modul mărit: săgeți sau Escape pentru închidere
          </li>
        </ul>
      </div>

      {/* View-mode toggle + slide counter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <ToggleGroup
          type="single"
          value={viewMode}
          onValueChange={(v) => {
            if (v === "landscape" || v === "portrait") setViewMode(v);
          }}
          variant="outline"
          size="lg"
          className="gap-0 border border-border-dark/20 rounded-none"
          aria-label="Mod vizualizare imagine"
        >
          <ToggleGroupItem
            value="landscape"
            aria-label="Peisaj"
            className={cn(
              "rounded-none px-4 gap-2 font-heading tracking-wider text-sm",
              viewMode === "landscape" &&
                "bg-accent-primary text-white border-accent-primary data-[state=on]:bg-accent-primary data-[state=on]:text-white",
            )}
          >
            <RectangleHorizontal className="w-4 h-4" />
            Peisaj
          </ToggleGroupItem>
          <ToggleGroupItem
            value="portrait"
            aria-label="Portret"
            className={cn(
              "rounded-none px-4 gap-2 font-heading tracking-wider text-sm",
              viewMode === "portrait" &&
                "bg-accent-primary text-white border-accent-primary data-[state=on]:bg-accent-primary data-[state=on]:text-white",
            )}
          >
            <RectangleVertical className="w-4 h-4" />
            Portret
          </ToggleGroupItem>
        </ToggleGroup>

        <p className="font-mono text-sm tracking-widest text-text-muted tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>

      {/* Full-bleed carousel — max visibility on mobile */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="relative w-full"
      >
        <CarouselContent className="ml-0">
          {overlandingPageGallery.map((item, i) => (
            <CarouselItem key={item.src} className="pl-0 basis-full">
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label={`Mărește: ${item.alt}`}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden border border-border-dark/15 bg-text-primary/95",
                    isPortrait
                      ? "aspect-3/4 max-h-[75svh] mx-auto md:max-w-md"
                      : "aspect-4/3 md:aspect-16/10",
                  )}
                >
                  <GalleryImage
                    src={item.src}
                    fallbackSrc={item.fallbackSrc}
                    alt={item.alt}
                    className={cn(
                      "transition-transform duration-300 group-hover:scale-[1.02]",
                      isPortrait ? "object-contain" : "object-cover",
                    )}
                    sizes="100vw"
                    priority={i === 0}
                  />
                  {/* Tap-to-zoom hint overlay */}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-bg-primary/90 px-2.5 py-1.5 text-xs font-heading tracking-wider text-text-primary opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Mărește
                  </span>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nav buttons inside the slide area for usable mobile touch targets */}
        <CarouselPrevious
          className="left-2 md:left-4 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-none border-border-dark/20 bg-bg-primary/95 text-text-primary hover:bg-accent-primary hover:text-white disabled:opacity-40"
        />
        <CarouselNext
          className="right-2 md:right-4 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-none border-border-dark/20 bg-bg-primary/95 text-text-primary hover:bg-accent-primary hover:text-white disabled:opacity-40"
        />
      </Carousel>

      {/* Dot indicators — tap to jump */}
      <div
        className="flex flex-wrap justify-center gap-1.5 md:gap-2"
        role="tablist"
        aria-label="Selectează slide"
      >
        {overlandingPageGallery.map((item, i) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === current
                ? "w-6 bg-accent-primary"
                : "w-2 bg-border-dark/40 hover:bg-border-dark/70",
            )}
          />
        ))}
      </div>

      {/* Fullscreen lightbox zoom */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-90 bg-text-primary/95 flex items-center justify-center p-3 md:p-10"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vizualizare mărită"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Închide"
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            aria-label="Anterior"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Următor"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-bg-primary text-text-primary flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            <div className="relative aspect-4/3 md:aspect-16/10 max-h-[85svh] bg-bg-secondary border border-bg-primary/20 overflow-hidden">
              <GalleryImage
                key={overlandingPageGallery[lightboxIndex].src}
                src={overlandingPageGallery[lightboxIndex].src}
                fallbackSrc={overlandingPageGallery[lightboxIndex].fallbackSrc}
                alt={overlandingPageGallery[lightboxIndex].alt}
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <p className="font-accent text-xl md:text-2xl text-bg-primary mt-4 text-center">
              — {overlandingPageGallery[lightboxIndex].alt}
            </p>
            <p className="font-mono text-xs tracking-widest text-bg-primary/70 mt-2 text-center tabular-nums">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
