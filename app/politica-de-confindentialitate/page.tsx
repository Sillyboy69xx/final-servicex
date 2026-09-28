import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de confidențialitate | PRV Atelier Auto",
  description:
    "Informații despre prelucrarea datelor personale de către PROSERV INNOVATION SRL.",
};

const sectionClass = "space-y-3 border-t border-black/15 pt-7";
const headingClass = "text-2xl font-bold tracking-tight";
const linkClass = "font-medium text-red-700 underline underline-offset-4";

export default function PoliticaDeConfidentialitate() {
  return (
    <main className="min-h-screen bg-[#f5efe6] px-5 py-16 text-[#191919] md:py-24">
      <article className="mx-auto max-w-3xl space-y-9 leading-7">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Informații legale
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight md:text-5xl">
            Politica de confidențialitate
          </h1>

          <p className="text-sm text-black/65">
            Ultima actualizare: 28 septembrie 2026
          </p>

          <p>
            Această politică explică modul în care prelucrăm datele personale
            atunci când vizitezi prvatelierauto.ro, interacționezi cu
            publicitatea noastră sau ne contactezi în legătură cu serviciile PRV
            Atelier Auto.
          </p>
        </header>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Cine este operatorul datelor</h2>

          <p>
            Operatorul este <strong>PROSERV INNOVATION SRL</strong>, cu sediul
            în Șoseaua Olteniței nr. 185, Camera 2, Popești-Leordeni, județul
            Ilfov, înregistrată la Registrul Comerțului sub nr. J23/1542/2012,
            CUI RO30278760. PRV Atelier Auto este denumirea folosită pentru
            prezentarea serviciilor pe acest site.
          </p>

          <p>
            Pentru întrebări despre datele tale, scrie-ne la{" "}
            <a className={linkClass} href="mailto:Proservinnovation@gmail.com">
              Proservinnovation@gmail.com
            </a>{" "}
            sau sună la{" "}
            <a className={linkClass} href="tel:+40722502035">
              +40 722 502 035
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Ce date prelucrăm</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Date pe care ni le comunici:</strong> nume, număr de
              telefon, adresă de e-mail și informațiile trimise prin telefon sau
              e-mail despre solicitarea, vehiculul ori lucrarea ta.
            </li>

            <li>
              <strong>Date legate de servicii:</strong> informațiile necesare
              pregătirii și executării lucrărilor, comunicării cu tine și
              întocmirii documentelor contractuale sau fiscale.
            </li>

            <li>
              <strong>Date tehnice:</strong> adresa IP, informații despre
              browser și dispozitiv, paginile accesate și date necesare
              funcționării și securității site-ului.
            </li>

            <li>
              <strong>Date de măsurare și publicitate:</strong> în funcție de
              alegerile tale, informații despre vizite, interacțiuni cu site-ul,
              proveniența din reclame și acțiuni măsurate ca evenimente sau
              conversii.
            </li>
          </ul>

          <p>
            Site-ul folosește Vercel Web Analytics pentru statistici agregate.
            Potrivit Vercel, acest serviciu nu folosește cookie-uri pentru
            măsurarea traficului și nu ne permite identificarea individuală a
            vizitatorilor din rapoartele sale.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            3. Scopurile și temeiurile prelucrării
          </h2>

          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>
                Răspunsul la solicitări și pregătirea unei lucrări:
              </strong>{" "}
              pentru a discuta cererea ta, a face o programare sau o ofertă.
              Temei: demersuri precontractuale la cererea ta sau, după caz,
              interesul nostru legitim de a răspunde mesajelor primite.
            </li>

            <li>
              <strong>Prestarea serviciilor:</strong> pentru executarea
              lucrărilor convenite și comunicarea cu tine despre acestea. Temei:
              executarea contractului.
            </li>

            <li>
              <strong>Obligații administrative și fiscale:</strong> pentru
              emiterea și păstrarea documentelor cerute de lege. Temei:
              îndeplinirea obligațiilor legale.
            </li>

            <li>
              <strong>Funcționarea și securitatea site-ului:</strong> pentru
              găzduire, depanare și prevenirea abuzurilor. Temei: interesul
              nostru legitim de a menține site-ul funcțional și sigur.
            </li>

            <li>
              <strong>Statistici prin cookie-uri Google Analytics 4:</strong>{" "}
              pentru a înțelege utilizarea site-ului atunci când accepți
              categoria „Statistici”. Temei: consimțământul tău.
            </li>

            <li>
              <strong>Măsurarea publicității prin Google Ads:</strong> pentru a
              evalua interacțiunile cu reclamele și conversiile atunci când
              accepți categoria „Publicitate și măsurarea conversiilor”. Temei
              pentru cookie-urile opționale și folosirea datelor în scopurile
              selectate: consimțământul tău.
            </li>

            <li>
              <strong>Reclame personalizate:</strong> numai dacă alegi separat
              această opțiune în setările cookie-urilor. Temei: consimțământul
              tău.
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            4. Cum funcționează Google Consent Mode
          </h2>

          <p>
            Folosim Google Tag Manager pentru administrarea tagurilor Google
            Analytics 4 și Google Ads. La prima vizită, opțiunile pentru
            analiză, stocarea pentru publicitate, transmiterea datelor pentru
            publicitate și personalizarea reclamelor au starea implicită
            <strong> „denied”</strong>. Alegerea făcută în panoul de cookie-uri
            actualizează separat aceste opțiuni.
          </p>

          <p>
            Folosim varianta <strong>Advanced Consent Mode</strong>. Aceasta
            permite încărcarea tagurilor Google înainte de exprimarea unei
            alegeri. Când stocarea este refuzată, tagurile Google nu ar trebui
            să scrie sau să citească respectivele cookie-uri opționale, dar pot
            transmite către Google semnale fără cookie-uri. Aceste semnale pot
            include starea consimțământului, pagina accesată, momentul accesării
            și informații tehnice transmise odată cu solicitarea. Refuzul
            cookie-urilor nu înseamnă, așadar, absența oricărei comunicări cu
            Google.
          </p>

          <p>
            Folosirea acestor semnale limitate are ca scop măsurarea agregată a
            traficului și a eficienței publicității. Pentru această prelucrare
            tehnică fără stocare opțională invocăm interesul legitim de a măsura
            funcționarea site-ului și a campaniilor, în condițiile limitării
            informațiilor transmise. Poți formula o opoziție față de
            prelucrările bazate pe interes legitim folosind datele de contact de
            mai sus.
          </p>

          <p>
            Nu activăm prin această politică Meta Pixel sau alte instrumente de
            publicitate ale unor furnizori care nu sunt enumerați aici.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Destinatarii datelor</h2>

          <p>
            Datele pot fi accesate, în măsura necesară, de personalul nostru și
            de furnizorii implicați în operarea site-ului și a activității:
            Vercel pentru găzduire și statistici agregate, Google pentru Google
            Tag Manager, Google Analytics 4 și Google Ads, furnizorul
            serviciului de e-mail, precum și prestatori tehnici sau contabili.
            Putem transmite date autorităților atunci când legea ne obligă.
          </p>

          <p>
            În funcție de serviciul și configurația folosite, unii furnizori pot
            prelucra date și în afara Spațiului Economic European. Transferurile
            trebuie realizate prin mecanismele permise de GDPR. Ne poți cere
            informații despre destinatari și garanțiile aplicabile la adresa de
            e-mail indicată mai sus.
          </p>

          <p>
            Poți afla mai multe despre modul în care Google folosește
            informațiile primite de la site-uri și aplicații pe{" "}
            <a
              className={linkClass}
              href="https://business.safety.google/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pagina Google despre utilizarea datelor
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. Cât timp păstrăm datele</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Solicitările și corespondența: cât este necesar pentru
              soluționarea lor și, dacă este cazul, pentru apărarea unor
              drepturi în termenul legal aplicabil.
            </li>

            <li>
              Datele aferente lucrărilor și documentelor fiscale: pe durata
              relației contractuale și ulterior cât impun obligațiile legale de
              păstrare.
            </li>

            <li>
              Datele tehnice necesare funcționării și securității: cât este
              necesar acestor scopuri, potrivit perioadelor aplicabile
              serviciilor utilizate.
            </li>

            <li>
              Alegerea privind cookie-urile: timp de 180 de zile în browserul
              tău, dacă nu o ștergi mai devreme sau nu revenim asupra
              configurației acestui mecanism.
            </li>

            <li>
              Cookie-urile GA4 și Google Ads: potrivit duratelor indicate în{" "}
              <Link className={linkClass} href="/politica-cookies">
                Politica de cookie-uri
              </Link>
              . Datele din conturile Google sunt păstrate potrivit setărilor
              serviciilor respective și obligațiilor aplicabile.
            </li>
          </ul>

          <p>
            Când perioada aplicabilă expiră, datele sunt șterse sau anonimizate,
            dacă nu există un alt motiv legal de păstrare.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>7. Drepturile tale</h2>

          <p>
            În condițiile GDPR, poți solicita acces la datele tale, rectificarea
            sau ștergerea lor, restricționarea prelucrării și portabilitatea
            datelor. Te poți opune prelucrărilor bazate pe interes legitim. Dacă
            o prelucrare se bazează pe consimțământ, îl poți retrage oricând,
            fără ca retragerea să afecteze prelucrarea efectuată anterior.
          </p>

          <p>
            Poți schimba opțiunile pentru cookie-uri folosind butonul „Setări
            cookie-uri” din subsolul site-ului. Pentru alte cereri, scrie la{" "}
            <a className={linkClass} href="mailto:Proservinnovation@gmail.com">
              Proservinnovation@gmail.com
            </a>
            . Vom răspunde, de regulă, în cel mult o lună. În cazurile prevăzute
            de lege, termenul poate fi prelungit, iar tu vei fi informat.
          </p>

          <p>
            Dacă apreciezi că drepturile tale au fost încălcate, poți depune o
            plângere la{" "}
            <a
              className={linkClass}
              href="https://www.dataprotection.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
              Caracter Personal (ANSPDCP)
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Actualizarea politicii</h2>

          <p>
            Actualizăm această pagină când se schimbă serviciile, tehnologiile
            sau modul în care prelucrăm datele. Versiunea curentă este indicată
            prin data de la începutul paginii.
          </p>
        </section>
      </article>
    </main>
  );
}
