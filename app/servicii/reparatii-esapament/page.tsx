import { SimpleServicePage } from '@/components/service/simple-service-page'

export const metadata = {
  title: 'Reparații Eșapament — Service Auto',
  description:
    'Tobe, racorduri flexibile, catalizatoare, sudură argon eșapament.',
}

const items = [
  { title: 'Înlocuire racorduri flexibile', text: 'Confecționare și montaj racord flexibil pentru orice tip de eșapament. Sudură curată și etanșeitate completă.' },
  { title: 'Reparații tobe eșapament', text: 'Recondiționare tobe — înlocuire pereți interiori, sudură fisuri, înlocuire părți rugi.' },
  { title: 'Înlocuire tobe eșapament', text: 'Înlocuire integrală cu tobe noi originale, after-market sau confecționate la cerere.' },
  { title: 'Catalizatoare (personalizate / universale)', text: 'Înlocuire catalizatoare originale, universale sau confecționate pentru aplicații specifice.' },
  { title: 'Sudură argon eșapament', text: 'Sudură argon pentru inox și aliaje speciale. Cordoane curate, fără porozități.' },
]

export default function Page() {
  return (
    <SimpleServicePage
      slug="reparatii-esapament"
      breadcrumbLabel="Reparații Eșapament"
      title={'REPARAȚII\nEȘAPAMENT'}
      intro="Tobe, racorduri, catalizatoare. Sudură argon pentru inox. Confecționăm și reparăm — fără să mai înlocuiești ce încă mai are viață."
      subServices={items.map((it) => ({
        title: it.title,
        content: <p className="text-text-muted leading-relaxed">{it.text}</p>,
      }))}
    />
  )
}
