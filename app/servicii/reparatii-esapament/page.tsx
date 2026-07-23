import { SimpleServicePage } from "@/components/service/simple-service-page";

export const metadata = {
  title: "Reparații Eșapament — Service Auto",
  description:
    "Tobe, racorduri flexibile, catalizatoare, sudură argon eșapament.",
};

const items = [
  {
    title: "Înlocuire racorduri flexibile",
    text: "Confecționare și montaj racord flexibil pentru orice tip de eșapament. Sudură curată și etanșeitate completă.",
  },
  {
    title: "Reparații tobe eșapament",
    text: "Recondiționare tobe — înlocuire pereți interiori, sudură fisuri, înlocuire părți rugină.",
  },
  {
    title: "Înlocuire tobe eșapament",
    text: "Înlocuire integrală cu tobe noi originale sau after-market.",
  },
  {
    title: "Catalizatoare (personalizate / universale)",
    text: "Înlocuire catalizatoare originale sau universale.",
  },
];

export default function Page() {
  return (
    <SimpleServicePage
      slug="reparatii-esapament"
      breadcrumbLabel="Reparații Eșapament"
      title={"REPARAȚII\nEȘAPAMENT"}
      intro="Tobe, racorduri, catalizatoare. Sudură argon pentru inox. Confecționăm și reparăm — fără să mai înlocuiești ce încă mai are viață."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  );
}
