import { SimpleServicePage } from "@/components/service/simple-service-page";

export const metadata = {
  title: "Aer Condiționat — Service & Reparații",
  description:
    "Încărcare freon și verificări pierderi freon pentru sisteme A/C.",
};

const items = [
  {
    title: "Încărcare freon",
    text: "Vidare completă, verificare circuit și încărcare la cantitatea exactă. Diagnoză temperaturi pe ambele părți.",
  },
  {
    title: "Verificări pierderi freon",
    text: "Cu aparat special de detectat gaze.",
  },
];

export default function Page() {
  return (
    <SimpleServicePage
      slug="aer-conditionat"
      breadcrumbLabel="Aer Condiționat"
      title={"AER\nCONDIȚIONAT"}
      intro="Încărcare freon și verificări de pierderi pentru sisteme A/C. Lucrăm cu echipamente profesionale și freon corect calibrat."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  );
}
