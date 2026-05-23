import { SimpleServicePage } from '@/components/service/simple-service-page'

export const metadata = {
  title: 'Consultanță — Cumpărare, Overlanding, Modificări',
  description:
    'Consultanță cumpărare vehicul, planificare overlanding și implementare modificări.',
}

const items = [
  {
    title: 'Consultanță cumpărare vehicul',
    text: 'Te ajutăm să alegi mașina potrivită pentru ce urmează să faci. Analizăm versiuni, motorizări, transmisii, costul real de întreținere. Verificăm fizic vehiculul înainte de cumpărare.',
  },
  {
    title: 'Consultanță overlanding',
    text: 'Construim împreună planul de pregătire pentru rutele tale. Setăm priorități, etape și buget realist — fără modificări inutile.',
  },
  {
    title: 'Implementare modificări',
    text: 'De la consultanță trecem la execuție. Suspensie, protecții, bagajeri, sertare, electric. Fabricăm soluțiile pe care nu le găsești gata făcute.',
  },
]

export default function Page() {
  return (
    <SimpleServicePage
      slug="consultanta"
      breadcrumbLabel="Consultanță"
      title={'CONSULTANȚĂ'}
      intro="Înainte de orice cheie. Discutăm despre mașină, despre cum o folosești cu adevărat și despre ce are sens să faci în următoarele luni. Ne alegem proiectele cu grijă."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  )
}
