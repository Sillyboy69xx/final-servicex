import { SimpleServicePage } from "@/components/service/simple-service-page";

export const metadata = {
  title: "Aer Condiționat — Service & Reparații",
  description:
    "Încărcare freon și verificări pierderi freon pentru sisteme A/C.",
};

const items = [
  {
    title: "Încărcare freon",
    text: "Vidare completă, verificare circuit și încărcare la cantitatea exactă.",
  },
  {
    title: "Verificări pierderi freon",
    text: "Cu aparat special de detectare a scurgerilor de freon.",
  },
  {
    title: "Demontare bord & schimb vaporizator",
    text: "Demontare completă a bordului și înlocuire profesională a vaporizatorului instalației de climatizare.",
  },
];

export default function Page() {
  return (
    <SimpleServicePage
      slug="aer-conditionat"
      breadcrumbLabel="Aer Condiționat"
      title={"AER\nCONDIȚIONAT"}
      intro="Încărcare freon și verificări de pierderi pentru sisteme A/C. Lucrăm cu echipamente profesionale."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  );
}
