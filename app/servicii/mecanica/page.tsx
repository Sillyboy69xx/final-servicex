import { Breadcrumb } from "@/components/breadcrumb";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceCta } from "@/components/service/service-cta";
import { RelatedServices } from "@/components/service/related-services";
import { publicImage } from "@/lib/media";

export const metadata = {
  title: "Mecanică — Reparații Mecanice Auto",
  description:
    "Reparații mecanice pentru autoturisme și SUV-uri. Intervenții la motor, transmisie, frâne și direcție.",
};

export default function Page() {
  return (
    <>
      {/* Navigation trail back to the services index */}
      <Breadcrumb
        items={[
          { label: "Acasă", href: "/" },
          { label: "Servicii", href: "/servicii" },
          { label: "Mecanică" },
        ]}
      />

      {/* Hero: title, workshop photo, and a short service description */}
      <ServiceHero
        title="MECANICĂ"
        intro="Reparații mecanice pentru autoturisme și SUV-uri. Intervenții la motor, transmisie, frâne și direcție — diagnosticate corect și executate în atelierul nostru."
        imageSrc={publicImage("24.jpeg")}
        imageAlt="Mecanică auto — atelier service"
        imageLabel="Imagine: Mecanică"
      />

      <ServiceCta />
      <RelatedServices exclude="mecanica" />
    </>
  );
}
