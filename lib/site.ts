export const siteConfig = {
  name: "Service Auto",
  // Display phone in international format for header, footer, and CTAs
  phone: "+40 722 502 035",
  // Digits-only international form used in tel: hrefs
  phoneRaw: "+40722502035",
  // Primary contact email shown in footer, contact strip, and mobile drawer
  email: "Proservinnovation@gmail.com",
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
    slug: "tapiterie",
    title: "Tapiterie",
    short: "Curățare și recondiționare scaune, plafon și covorașe.",
  },
  {
    slug: "polish",
    title: "Polish",
    short: "Corecție lac și polish profesional pentru un finisaj impecabil.",
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
    title: "Diagnoză Multi-Marcă & Mecanică",
    short: "Echipamente specializate pentru fiecare grup de producători.",
  },
  {
    slug: "reparatii-esapament",
    title: "Reparații Eșapament",
    short: "Tobe, racorduri, catalizatoare.",
  },
  {
    slug: "mecanica",
    title: "Mecanică",
    short:
      "Reparații mecanice generale — motor, transmisie, frâne și direcție.",
  },
  {
    slug: "consultanta",
    title: "Consultanță",
    short: "Cumpărare vehicul, overlanding, implementare modificări.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
