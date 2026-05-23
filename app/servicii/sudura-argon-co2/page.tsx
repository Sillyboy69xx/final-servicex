import { SimpleServicePage } from '@/components/service/simple-service-page'

export const metadata = {
  title: 'Sudură Argon & CO₂ — Aluminiu, Inox, Aliaje',
  description:
    'Sudură TIG argon și MIG CO₂ pentru aluminiu, inox și aliaje speciale (magneziu, titan).',
}

const items = [
  { title: 'Sudură aluminiu', text: 'Sudură TIG aluminiu pentru piese auto, jante, carcase, suporturi. Cordoane curate, fără deformare.' },
  { title: 'Sudură inox', text: 'Sudură inox pentru eșapamente, traseu admisie, suporturi. Cu gaz de protecție și corectă curățare prealabilă.' },
  { title: 'Sudură aliaje speciale (magneziu, titan)', text: 'Lucrări pe materiale exotice — magneziu, titan, aliaje termice. Cu pregătire specifică și consumabile dedicate.' },
]

export default function Page() {
  return (
    <SimpleServicePage
      slug="sudura-argon-co2"
      breadcrumbLabel="Sudură Argon & CO₂"
      title={'SUDURĂ\nARGON & CO₂'}
      intro="Lucrăm cu materiale care cer atenție reală. Aluminiu, inox, magneziu, titan — fiecare piesă este pregătită corect înainte ca arcul să atingă metalul."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  )
}
