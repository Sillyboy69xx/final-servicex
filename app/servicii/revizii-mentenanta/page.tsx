import { SimpleServicePage } from "@/components/service/simple-service-page";

export const metadata = {
  title: "Revizii & Mentenanță — Service Auto",
  description:
    "Operațiuni programate, suspensie, distribuție, ambreiaj, electromotoare, turbosuflante și casete direcție.",
};

const items = [
  {
    title: "Schimb ulei + filtre",
    text: "Ulei și filtre conform specificațiilor producătorului. Verificăm orice scurgere și starea generală a motorului la fiecare schimb.",
  },
  {
    title: "Suspensie și articulație",
    text: "Înlocuirea amortizoarelor, brațelor, bieletelor, pivoților și rulmenților. Reglaj final și test de drum.",
  },
  {
    title: "Distribuție",
    text: "Schimb curea / lanț, role, pompă apă. Lucrăm cu piese OEM sau echivalente premium.",
  },
  {
    title: "Ambreiaj",
    text: "Înlocuire ambreiaj clasic sau bimasă, rulment de presiune, verificare volantă. Inclusiv ambreiaje cu acționare hidraulică.",
  },
  {
    title: "Electromotoare / alternatoare",
    text: "Diagnoză, recondiționare sau înlocuire. Reglaj curele și verificare integrală a sistemului de încărcare.",
  },

  {
    title: "Turbosuflantă",
    text: "Diagnoză vibrații și joc, înlocuire sau recondiționare. Verificare circuit ulei și sistem de comandă.",
  },
];

export default function Page() {
  return (
    <SimpleServicePage
      slug="revizii-mentenanta"
      breadcrumbLabel="Revizii & Mentenanță"
      title={"REVIZII\n& MENTENANȚĂ"}
      intro="Lucrările care țin mașina sănătoasă pe termen lung. Fără reparații în grabă — fiecare operațiune este documentată, verificată și predată cu test real."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  );
}
