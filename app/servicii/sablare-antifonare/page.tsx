import { SimpleServicePage } from "@/components/service/simple-service-page";

export const metadata = {
  title: "Sablare & Antifonare — Service Auto",
  description:
    "Sablare eșapament, antifonare și pregătire pentru vopsire. Lucrări profesionale în atelier.",
};

const items = [
  {
    title: "Sablare caroserie, șasiu",
    text: "Îndepărtarea ruginii, vopselei vechi. Pregătire uniformă pentru reparație sau vopsire.",
  },
  {
    title: "Antifonare",
    text: "Aplicare materiale antifonare pe elementele de eșapament și zonele expuse la vibrații, pentru confort acustic în habitaclu.",
  },
];

export default function Page() {
  return (
    <SimpleServicePage
      slug="sablare-antifonare"
      breadcrumbLabel="Sablare & Antifonare"
      title={"SABLARE\n& ANTIFONARE"}
      intro="Sablare, antifonare și pregătire pentru vopsire. Lucrăm pe eșapamente și componente metalice cu atenție la detaliu — fără compromisuri la etanșeitate și finisaj."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  );
}
