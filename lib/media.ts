import type { ServiceSlug } from "@/lib/site";

/** Build a public URL path for a file in /public */
export function publicImage(filename: string): string {
  return `/${filename}`;
}

export const images = {
  heroDefault: publicImage("herosecz.jpeg"),
  despreNoi: publicImage("landrover-outisde-service.jpeg"),
  overlanding: Array.from({ length: 7 }, (_, i) =>
    publicImage(`ov${i + 1}.jpeg`),
  ),
  overlandingExtra: [
    publicImage("10.jpeg"),
    publicImage("11.jpeg"),
    publicImage("12.jpeg"),
  ],
  sablareAntifonare: Array.from({ length: 7 }, (_, i) =>
    publicImage(`sablare-antifonare-${i + 1}.jpeg`),
  ),
  workshopLift: [
    publicImage("8.jpeg"),
    publicImage("9.jpeg"),
    publicImage("16.jpeg"),
    publicImage("18.jpeg"),
    publicImage("21.jpeg"),
    publicImage("22.jpeg"),
    publicImage("24.jpeg"),
  ],
  detailingBeforeAfter: [
    {
      before: publicImage("detailing-1-before.jpeg"),
      after: publicImage("detailing-1-after.jpeg"),
      alt: "Detailing — comparație 1",
    },
    {
      before: publicImage("detailing-2-before.jpeg"),
      after: publicImage("detailing-2-after.jpeg"),
      alt: "Detailing — comparație 2",
    },
    {
      before: publicImage("detailing-3-before.jpeg"),
      after: publicImage("detailing-3-after.jpeg"),
      alt: "Detailing — comparație 3",
    },
    {
      before: publicImage("detailing-4-before.jpeg"),
      after: publicImage("detailing-4-after.jpeg"),
      alt: "Detailing — comparație 4",
    },
  ],
} as const;

/** Hero image per service page */
export const serviceHeroImages: Record<ServiceSlug, string> = {
  "overlanding-offroad": images.overlanding[0],
  "detailing-spalare": publicImage("detailing-3-after.jpeg"),
  "sablare-antifonare": publicImage("sablare.jpeg"),
  "revizii-mentenanta": publicImage("1.jpeg"),
  "aer-conditionat": publicImage("incarcare_freon.jpg"),

  "diagnoza-multi-marca": publicImage("diagnoza-auto.webp"),
  "reparatii-esapament": publicImage("esapament.webp"),

  consultanta: publicImage("17.jpeg"),
};

/** Thumbnail for cards on /servicii and featured services */
export const serviceCardImages: Record<ServiceSlug, string> = {
  "overlanding-offroad": images.overlanding[0],
  "detailing-spalare": publicImage("detailing-3-after.jpeg"),
  "revizii-mentenanta": publicImage("2.jpeg"),
  "sablare-antifonare": images.sablareAntifonare[1],
  "aer-conditionat": publicImage("incarcare_freon.jpg"),
  "diagnoza-multi-marca": publicImage("diagnoza-auto.webp"),
  "reparatii-esapament": publicImage("14.jpeg"),

  consultanta: publicImage("19.jpeg"),
};

/** Horizontal photo strips on service detail pages */
export const servicePhotoStrips: Partial<Record<ServiceSlug, string[]>> = {
  "revizii-mentenanta": [
    publicImage("1.jpeg"),
    publicImage("2.jpeg"),
    publicImage("3.jpeg"),
    ...images.workshopLift,
  ],
  "diagnoza-multi-marca": [
    publicImage("diagnoza-auto.webp"),
    publicImage("5.jpeg"),
    ...images.workshopLift,
  ],

  "reparatii-esapament": [publicImage("13.jpeg"), publicImage("14.jpeg")],
  consultanta: [publicImage("17.jpeg"), publicImage("19.jpeg")],
  "aer-conditionat": [publicImage("incarcare_freon.jpg")],
  "sablare-antifonare": [...images.sablareAntifonare],
  "detailing-spalare": [publicImage("15.jpeg"), publicImage("23.jpeg")],
};

const galleryOverlandingItems = images.overlanding.map((src, i) => ({
  src,
  caption: `Overlanding build ${i + 1}`,
  ratio: (["3/4", "4/3", "1/1", "4/3", "3/4", "1/1", "4/3"] as const)[i],
}));

const galleryWorkshopItems = Array.from({ length: 24 }, (_, i) => ({
  src: publicImage(`${i + 1}.jpeg`),
  caption: `Galerie service ${i + 1}`,
  ratio: (["4/3", "1/1", "3/4"] as const)[i % 3],
}));

export const galleryItems = [...galleryOverlandingItems, ...galleryWorkshopItems];

export const overlandingCarouselItems = [
  ...images.overlanding.map((src, i) => ({
    src,
    caption: [" ", " ", " ", " ", " ", " ", " "][i],
  })),
  ...images.overlandingExtra.map((src, i) => ({
    src,
    caption: [
      "4x4 — portbagaj plafon",
      "Off-road — pregătire expediție",
      "SUV modificat — admisie ridicată",
    ][i],
  })),
];

export const overlandingShowcaseItems = images.overlanding.map((src, i) => ({
  src,
  caption: [" ", " ", " ", " ", " ", " ", " "][i],
}));
