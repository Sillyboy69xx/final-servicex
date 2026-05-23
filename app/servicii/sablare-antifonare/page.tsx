import { SimpleServicePage } from '@/components/service/simple-service-page'

export const metadata = {
  title: 'Sablare & Antifonare — Service Auto',
  description:
    'Sablare eșapament, antifonare și pregătire pentru vopsire. Lucrări profesionale în atelier.',
}

const items = [
  {
    title: 'Sablare eșapament',
    text: 'Îndepărtarea ruginii, vopselei vechi și depunerilor de pe tubulatură și componente. Pregătire uniformă pentru reparație sau vopsire.',
  },
  {
    title: 'Antifonare',
    text: 'Aplicare materiale antifonare pe elementele de eșapament și zonele expuse la vibrații, pentru confort acustic în habitaclu.',
  },
  {
    title: 'Pregătire pentru vopsire',
    text: 'Finisare suprafață după sablare — curățare, degresare și protecție temporară până la montaj sau vopsire finală.',
  },
]

export default function Page() {
  return (
    <SimpleServicePage
      slug="sablare-antifonare"
      breadcrumbLabel="Sablare & Antifonare"
      title={'SABLARE\n& ANTIFONARE'}
      intro="Sablare, antifonare și pregătire pentru vopsire. Lucrăm pe eșapamente și componente metalice cu atenție la detaliu — fără compromisuri la etanșeitate și finisaj."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  )
}
