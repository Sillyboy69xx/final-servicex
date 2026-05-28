export const siteConfig = {
  name: "Service Auto",
  phone: "+40 700 000 000",
  phoneRaw: "+40700000000",

  address: "București",
  hours: "Luni — Vineri: 08:30 — 18:00",
};

export const services = [
  {
    slug: "overlanding-offroad",
    title: "Overlanding & Off-Road",
    short:
      "Pregătirea completă a mașinii pentru expediții lungi și teren dificil.",
    flagship: true,
  },
  {
    slug: "detailing-spalare",
    title: "Detailing & Spălare",
    short: "Recondiționare interioară, corecție lac, protecție ceramică.",
  },
  {
    slug: "sablare-antifonare",
    title: "Sablare & Antifonare",
    short: "Sablare eșapament, antifonare și pregătire pentru vopsire.",
  },
  {
    slug: "aer-conditionat",
    title: "Aer Condiționat",
    short: "Încărcare freon și verificări pierderi freon.",
  },
  {
    slug: "diagnoza-multi-marca",
    title: "Diagnoză Multi-Marcă",
    short: "Echipamente specializate pentru fiecare grup de producători.",
  },
  {
    slug: "reparatii-esapament",
    title: "Reparații Eșapament",
    short: "Tobe, racorduri, catalizatoare.",
  },
  {
    slug: "consultanta",
    title: "Consultanță",
    short: "Cumpărare vehicul, overlanding, implementare modificări.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
